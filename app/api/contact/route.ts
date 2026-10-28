import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// In-memory sliding window rate limiter (per-IP)
interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 submissions per 15 minutes per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip) || { timestamps: [] };

  // Filter out timestamps outside the active window
  record.timestamps = record.timestamps.filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS,
  );

  if (record.timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.timestamps.push(now);
  rateLimitMap.set(ip, record);

  // Periodic cleanup if map grows large
  if (rateLimitMap.size > 1000) {
    for (const [key, val] of rateLimitMap.entries()) {
      val.timestamps = val.timestamps.filter(
        (ts) => now - ts < RATE_LIMIT_WINDOW_MS,
      );
      if (val.timestamps.length === 0) {
        rateLimitMap.delete(key);
      }
    }
  }

  return false;
}

// Allowed select values for strict whitelist validation
const ALLOWED_SERVICES = [
  "Website Development",
  "WordPress Development",
  "SEO & Search Visibility",
  "Technical SEO",
  "On-Page SEO & Content",
  "Other / Not Sure Yet",
];

const ALLOWED_BUDGETS = [
  "Not decided yet",
  "Under $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000+",
];

const ALLOWED_CONTACT_METHODS = ["Email", "WhatsApp", "Phone Call"];

// Safe HTML character escaping for email rendering
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
    // 1. IP extraction and Rate Limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const clientIp =
      (forwardedFor ? forwardedFor.split(",")[0].trim() : null) ||
      realIp ||
      "127.0.0.1";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Too many requests from your connection. Please wait a few minutes before submitting another enquiry, or reach out directly on WhatsApp.",
        },
        { status: 429 },
      );
    }

    // 2. Parse payload safely
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request format.",
        },
        { status: 400 },
      );
    }

    const {
      name,
      email,
      service,
      message,
      companyOrWebsite,
      budget,
      preferredContact,
      website_hp,
    } = body;

    // 3. Honeypot check for bots (silent success without sending email)
    if (website_hp && typeof website_hp === "string" && website_hp.trim() !== "") {
      return NextResponse.json({
        success: true,
        message:
          "Thank you for contacting Cinorium. Your enquiry has been submitted successfully.",
      });
    }

    // 4. Server-Side Validation: Required fields
    if (
      !name ||
      typeof name !== "string" ||
      name.trim().length < 2 ||
      name.trim().length > 100
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter your full name (2–100 characters).",
        },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !email ||
      typeof email !== "string" ||
      email.trim().length > 150 ||
      !emailRegex.test(email.trim())
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 },
      );
    }

    if (
      !service ||
      typeof service !== "string" ||
      !ALLOWED_SERVICES.includes(service.trim())
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please select a valid service from the options provided.",
        },
        { status: 400 },
      );
    }

    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length < 10 ||
      message.trim().length > 3000
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please provide a few details about your project (10–3,000 characters).",
        },
        { status: 400 },
      );
    }

    // 5. Server-Side Validation: Optional fields
    const safeCompany =
      companyOrWebsite && typeof companyOrWebsite === "string"
        ? companyOrWebsite.trim().slice(0, 200)
        : "";

    const safeBudget =
      budget && typeof budget === "string" && ALLOWED_BUDGETS.includes(budget.trim())
        ? budget.trim()
        : "Not decided yet";

    const safeContactMethod =
      preferredContact &&
      typeof preferredContact === "string" &&
      ALLOWED_CONTACT_METHODS.includes(preferredContact.trim())
        ? preferredContact.trim()
        : "Email";

    // 6. SMTP Credentials Check
    const smtpUser = process.env.GMAIL_USER || process.env.EMAIL_USER;
    const smtpPass = process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASS;
    const toEmail =
      process.env.CONTACT_TO_EMAIL ||
      process.env.EMAIL_TO ||
      "cinoriumadmin@gmail.com";

    if (!smtpUser || !smtpPass) {
      console.warn(
        "[Contact Form] Gmail SMTP credentials (GMAIL_USER / GMAIL_APP_PASSWORD or EMAIL_USER / EMAIL_PASS) are not configured.",
      );
      return NextResponse.json(
        {
          success: false,
          message:
            "Our email service is momentarily offline for maintenance. Please message us directly via WhatsApp or email cinoriumadmin@gmail.com.",
        },
        { status: 503 },
      );
    }

    // 7. Nodemailer Transporter Configuration (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const nowFormatted = new Date().toUTCString();

    // 8. Plain-text alternative
    const textContent = `
New Project Enquiry — Cinorium
----------------------------------------
Full Name:        ${name.trim()}
Email Address:    ${email.trim()}
Service:          ${service.trim()}
Company/Website:  ${safeCompany || "Not provided"}
Budget Range:     ${safeBudget}
Preferred Method: ${safeContactMethod}
Submission Time:  ${nowFormatted}

Project Details:
----------------------------------------
${message.trim()}
    `.trim();

    // 9. Sanitized HTML email
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1f2937; line-height: 1.6; margin: 0; padding: 20px; background-color: #f3f4f6; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb; overflow: hidden; }
            .header { background-color: #0b131e; color: #ffffff; padding: 24px 30px; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 600; color: #ffb703; }
            .content { padding: 30px; }
            .meta-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
            .meta-table td { padding: 10px 12px; border-bottom: 1px solid #f3f4f6; font-size: 14px; }
            .meta-table td.label { font-weight: 600; color: #4b5563; width: 160px; }
            .meta-table td.value { color: #111827; }
            .message-box { background: #f9fafb; border: 1px solid #e5e7eb; border-left: 4px solid #ffb703; border-radius: 8px; padding: 16px 20px; margin-top: 10px; font-size: 14px; white-space: pre-wrap; word-break: break-word; }
            .footer { padding: 16px 30px; background: #f9fafb; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Cinorium Project Enquiry</h1>
            </div>
            <div class="content">
              <table class="meta-table">
                <tr>
                  <td class="label">Full Name</td>
                  <td class="value"><strong>${escapeHtml(name.trim())}</strong></td>
                </tr>
                <tr>
                  <td class="label">Email Address</td>
                  <td class="value"><a href="mailto:${escapeHtml(email.trim())}">${escapeHtml(email.trim())}</a></td>
                </tr>
                <tr>
                  <td class="label">Requested Service</td>
                  <td class="value"><strong>${escapeHtml(service.trim())}</strong></td>
                </tr>
                <tr>
                  <td class="label">Company / Website</td>
                  <td class="value">${escapeHtml(safeCompany || "Not provided")}</td>
                </tr>
                <tr>
                  <td class="label">Budget Range</td>
                  <td class="value">${escapeHtml(safeBudget)}</td>
                </tr>
                <tr>
                  <td class="label">Preferred Contact</td>
                  <td class="value">${escapeHtml(safeContactMethod)}</td>
                </tr>
                <tr>
                  <td class="label">Received (UTC)</td>
                  <td class="value">${nowFormatted}</td>
                </tr>
              </table>

              <div style="font-size: 14px; font-weight: 600; color: #374151; margin-top: 10px;">
                Project Details:
              </div>
              <div class="message-box">${escapeHtml(message.trim())}</div>
            </div>
            <div class="footer">
              Sent via Cinorium Website Contact Form • Reply directly to this email to reply to the visitor.
            </div>
          </div>
        </body>
      </html>
    `;

    // 10. Send the email with visitor set as replyTo
    await transporter.sendMail({
      from: `"Cinorium Enquiries" <${smtpUser}>`,
      to: toEmail,
      replyTo: email.trim(),
      subject: `New Cinorium Project Enquiry — ${service.trim()}`,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message:
        "Thank you for contacting Cinorium. Your enquiry has been submitted successfully.",
    });
  } catch (error) {
    // Log error internally without exposing credentials or details to client
    console.error("[Contact API Error]:", error instanceof Error ? error.message : "Unknown error");

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to send your message at this moment. Please try again shortly or contact us directly on WhatsApp.",
      },
      { status: 500 },
    );
  }
}
