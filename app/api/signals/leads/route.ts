import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";
import { signalsStorage } from "@/lib/signals/storage";

// In-memory sliding window rate limiter
interface RateLimitRecord {
  timestamps: number[];
}
const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 mins
const MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip) || { timestamps: [] };
  record.timestamps = record.timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (record.timestamps.length >= MAX_REQUESTS) {
    return true;
  }
  record.timestamps.push(now);
  rateLimitMap.set(ip, record);
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const forwardedFor = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const clientIp = (forwardedFor ? forwardedFor.split(",")[0].trim() : null) || realIp || "127.0.0.1";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many submissions. Please wait a few minutes before trying again.",
        },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, message: "Invalid submission data" },
        { status: 400 }
      );
    }

    const {
      sessionToken,
      fullName,
      email,
      websiteUrl,
      phone,
      interestArea,
      message,
      sourcePage,
      campaignId,
      interestScoreAtCapture,
      website_hp,
    } = body;

    // Honeypot check
    if (website_hp && typeof website_hp === "string" && website_hp.trim() !== "") {
      return NextResponse.json({
        success: true,
        message: "Thank you. Your request has been received.",
      });
    }

    // Name validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2 || fullName.trim().length > 100) {
      return NextResponse.json(
        { success: false, message: "Please provide your full name (2–100 characters)." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || email.trim().length > 150 || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid business email address." },
        { status: 400 }
      );
    }

    // Message validation
    if (!message || typeof message !== "string" || message.trim().length < 5 || message.trim().length > 2500) {
      return NextResponse.json(
        { success: false, message: "Please provide a short description of your project or enquiry." },
        { status: 400 }
      );
    }

    const safeWebsite = typeof websiteUrl === "string" ? websiteUrl.trim().slice(0, 200) : "";
    const safePhone = typeof phone === "string" ? phone.trim().slice(0, 50) : "";
    const safeInterestArea = typeof interestArea === "string" ? interestArea.trim().slice(0, 100) : "General Consultation";
    const safeSourcePage = typeof sourcePage === "string" ? sourcePage.split("?")[0].slice(0, 255) : "/";
    const safeCampaignId = typeof campaignId === "string" ? campaignId.trim().slice(0, 100) : "general-consultation";
    const safeScore = typeof interestScoreAtCapture === "number" ? interestScoreAtCapture : 0;

    // Create irreversible IP hash for duplicate detection
    const ipHash = crypto.createHash("sha256").update(`${clientIp}-signals-salt-2026`).digest("hex").slice(0, 32);

    const savedLead = await signalsStorage.saveLead({
      sessionToken: typeof sessionToken === "string" ? sessionToken : undefined,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      websiteUrl: safeWebsite || undefined,
      phone: safePhone || undefined,
      interestArea: safeInterestArea,
      message: message.trim(),
      sourcePage: safeSourcePage,
      campaignId: safeCampaignId,
      interestScoreAtCapture: safeScore,
      status: "NEW",
      ipHash,
    });

    // Record form_submit event if session token exists
    if (sessionToken && typeof sessionToken === "string") {
      await signalsStorage.recordEvent({
        sessionToken,
        eventType: "form_submit",
        pagePath: safeSourcePage,
        metadata: { leadId: savedLead.id, campaignId: safeCampaignId },
        scoreDelta: 0,
      });
    }

    // Send immediate email notification to founder if SMTP configured
    const gmailUser = process.env.GMAIL_USER || process.env.EMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASS;
    const toEmail = process.env.CONTACT_TO_EMAIL || "cinoriumadmin@gmail.com";

    if (gmailUser && gmailPass) {
      try {
        const transporter = nodemailer.createTransporter({
          service: "gmail",
          auth: { user: gmailUser, pass: gmailPass },
        });

        await transporter.sendMail({
          from: `"Cinorium Signals" <${gmailUser}>`,
          to: toEmail,
          replyTo: email.trim(),
          subject: `🎯 New Qualified Signal Lead: ${fullName.trim()} (${safeInterestArea})`,
          text: `New Lead Captured via Cinorium Signals:\n\nName: ${fullName.trim()}\nEmail: ${email.trim()}\nWebsite: ${safeWebsite || "N/A"}\nPhone: ${safePhone || "N/A"}\nInterest: ${safeInterestArea}\nCampaign: ${safeCampaignId}\nEngagement Score: ${safeScore}\nSource Page: ${safeSourcePage}\n\nMessage:\n${message.trim()}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 2px solid #000; border-radius: 12px; background: #fff;">
              <h2 style="color: #000; margin-bottom: 8px;">🎯 New Lead Captured via Cinorium Signals</h2>
              <p style="color: #666; font-size: 14px; margin-top: 0;">Captured from campaign <strong>${escapeHtml(safeCampaignId)}</strong> on <code>${escapeHtml(safeSourcePage)}</code></p>
              <hr style="border: 0; border-top: 1px solid #e5e5e5; margin: 16px 0;" />
              <p><strong>Name:</strong> ${escapeHtml(fullName.trim())}</p>
              <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email.trim())}">${escapeHtml(email.trim())}</a></p>
              <p><strong>Website:</strong> ${safeWebsite ? `<a href="${escapeHtml(safeWebsite)}">${escapeHtml(safeWebsite)}</a>` : "N/A"}</p>
              <p><strong>Phone:</strong> ${safePhone ? escapeHtml(safePhone) : "N/A"}</p>
              <p><strong>Interest Area:</strong> ${escapeHtml(safeInterestArea)}</p>
              <p><strong>Engagement Score:</strong> <span style="background: #fef3c7; color: #92400e; padding: 2px 8px; border-radius: 6px; font-weight: bold;">${safeScore} pts</span></p>
              <div style="margin-top: 20px; padding: 16px; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e5e5;">
                <strong>Visitor Message:</strong>
                <p style="white-space: pre-wrap; margin-top: 8px; color: #374151;">${escapeHtml(message.trim())}</p>
              </div>
            </div>
          `,
        });
      } catch (mailErr) {
        console.error("[Signals Email Delivery Warning]:", mailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out. We will review your request and get back to you shortly.",
      leadId: savedLead.id,
    });
  } catch (err) {
    console.error("[Signals Leads API] Error:", err);
    return NextResponse.json(
      { success: false, message: "Failed to submit lead enquiry." },
      { status: 500 }
    );
  }
}

