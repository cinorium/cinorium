import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitMap = new Map<string, RateLimitRecord>();

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const MAX_BODY_SIZE = 16 * 1024;

const ALLOWED_SERVICES = [
  "Digital Marketing Strategy",
  "Search Visibility & SEO",
  "Content & Social Media Marketing",
  "Paid Advertising & Customer Acquisition",
  "Email & E-commerce Growth",
  "Website Development & Optimization",
  "Graphic Design & Creative Support",
  "Comprehensive Growth Consultation",
  "Not Sure Yet",
];

const ALLOWED_BUDGETS = [
  "Not decided yet",
  "Under $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000+",
];

const ALLOWED_CONTACT_METHODS = ["Email", "WhatsApp", "Phone Call"];

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  const record = rateLimitMap.get(ip) || {
    timestamps: [],
  };

  record.timestamps = record.timestamps.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (record.timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, record);
    return true;
  }

  record.timestamps.push(now);
  rateLimitMap.set(ip, record);

  // Cleanup expired entries if the map grows too large.
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      value.timestamps = value.timestamps.filter(
        (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
      );

      if (value.timestamps.length === 0) {
        rateLimitMap.delete(key);
      }
    }
  }

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

function errorResponse(message: string, status: number) {
  return NextResponse.json(
    {
      success: false,
      message,
    },
    { status },
  );
}

export async function POST(req: NextRequest) {
  try {
    // 1. Accept JSON requests only.
    const contentType = req.headers.get("content-type") || "";

    if (!contentType.toLowerCase().includes("application/json")) {
      return errorResponse("Invalid request content type.", 415);
    }

    // 2. Reject oversized requests.
    const contentLength = Number(req.headers.get("content-length") || 0);

    if (contentLength > MAX_BODY_SIZE) {
      return errorResponse("Your submission is too large.", 413);
    }

    const rawBody = await req.text();

    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_SIZE) {
      return errorResponse("Your submission is too large.", 413);
    }

    // 3. Parse JSON safely.
    let body: unknown;

    try {
      body = JSON.parse(rawBody);
    } catch {
      return errorResponse("Invalid request format.", 400);
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return errorResponse("Invalid request format.", 400);
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
    } = body as Record<string, unknown>;

    // 4. Honeypot check.
    // Silently accept bot submissions without sending an email.
    if (typeof website_hp === "string" && website_hp.trim() !== "") {
      return NextResponse.json({
        success: true,
        message:
          "Thank you for contacting Cinorium. Your enquiry has been submitted successfully.",
      });
    }

    // 5. IP extraction and rate limiting.
    // Configure trusted proxy headers correctly on the deployment platform.
    const forwardedFor = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");

    const clientIp =
      forwardedFor?.split(",")[0]?.trim() || realIp?.trim() || "unknown";

    if (isRateLimited(clientIp)) {
      return errorResponse(
        "Too many requests from your connection. Please wait a few minutes before submitting another enquiry, or contact us directly.",
        429,
      );
    }

    // 6. Required field validation.
    if (
      typeof name !== "string" ||
      name.trim().length < 2 ||
      name.trim().length > 100
    ) {
      return errorResponse(
        "Please enter your full name (2–100 characters).",
        400,
      );
    }

    const cleanEmail = typeof email === "string" ? email.trim() : "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !cleanEmail ||
      cleanEmail.length > 150 ||
      !emailRegex.test(cleanEmail)
    ) {
      return errorResponse("Please enter a valid email address.", 400);
    }

    if (
      typeof service !== "string" ||
      !ALLOWED_SERVICES.includes(service.trim())
    ) {
      return errorResponse(
        "Please select a valid service from the options provided.",
        400,
      );
    }

    if (
      typeof message !== "string" ||
      message.trim().length < 10 ||
      message.trim().length > 3000
    ) {
      return errorResponse(
        "Please provide a few details about your project (10–3,000 characters).",
        400,
      );
    }

    // 7. Optional field validation.
    if (
      companyOrWebsite !== undefined &&
      typeof companyOrWebsite !== "string"
    ) {
      return errorResponse("Invalid company or website field.", 400);
    }

    const safeCompany = (companyOrWebsite as string | undefined)?.trim() || "";

    if (safeCompany.length > 200) {
      return errorResponse(
        "Company name or website must not exceed 200 characters.",
        400,
      );
    }

    const safeBudget =
      typeof budget === "string" && ALLOWED_BUDGETS.includes(budget.trim())
        ? budget.trim()
        : "Not decided yet";

    const safeContactMethod =
      typeof preferredContact === "string" &&
      ALLOWED_CONTACT_METHODS.includes(preferredContact.trim())
        ? preferredContact.trim()
        : "Email";

    const cleanName = name.trim();
    const cleanService = service.trim();
    const cleanMessage = message.trim();

    // 8. SMTP configuration.
    const smtpUser = process.env.GMAIL_USER || process.env.EMAIL_USER;

    const smtpPass = process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASS;

    const toEmail =
      process.env.CONTACT_TO_EMAIL ||
      process.env.EMAIL_TO ||
      "cinoriumadmin@gmail.com";

    if (!smtpUser || !smtpPass) {
      console.warn("[Contact Form] SMTP credentials are not configured.");

      return errorResponse(
        "Our email service is temporarily unavailable. Please contact us directly via WhatsApp or email cinoriumadmin@gmail.com.",
        503,
      );
    }

    // 9. Configure Gmail SMTP transporter.
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const nowFormatted = new Date().toUTCString();

    // 10. Plain-text email.
    const textContent = `
New Project Enquiry — Cinorium
----------------------------------------

Full Name:        ${cleanName}
Email Address:    ${cleanEmail}
Service:          ${cleanService}
Company/Website:  ${safeCompany || "Not provided"}
Budget Range:     ${safeBudget}
Preferred Method: ${safeContactMethod}
Submission Time:  ${nowFormatted}

Project Details:
----------------------------------------
${cleanMessage}
    `.trim();

    // 11. HTML email.
    const htmlContent = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
          Roboto, Helvetica, Arial, sans-serif;
        color: #1f2937;
        line-height: 1.6;
        margin: 0;
        padding: 20px;
        background-color: #f3f4f6;
      }

      .container {
        max-width: 600px;
        margin: 0 auto;
        background: #ffffff;
        border-radius: 12px;
        border: 1px solid #e5e7eb;
        overflow: hidden;
      }

      .header {
        background-color: #0b131e;
        color: #ffffff;
        padding: 24px 30px;
      }

      .header h1 {
        margin: 0;
        font-size: 20px;
        font-weight: 600;
        color: #ffb703;
      }

      .content {
        padding: 30px;
      }

      .meta-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 24px;
      }

      .meta-table td {
        padding: 10px 12px;
        border-bottom: 1px solid #f3f4f6;
        font-size: 14px;
        vertical-align: top;
      }

      .meta-table td.label {
        font-weight: 600;
        color: #4b5563;
        width: 160px;
      }

      .meta-table td.value {
        color: #111827;
        overflow-wrap: anywhere;
      }

      .message-box {
        background: #f9fafb;
        border: 1px solid #e5e7eb;
        border-left: 4px solid #ffb703;
        border-radius: 8px;
        padding: 16px 20px;
        margin-top: 10px;
        font-size: 14px;
        white-space: pre-wrap;
        overflow-wrap: anywhere;
      }

      .footer {
        padding: 16px 30px;
        background: #f9fafb;
        border-top: 1px solid #e5e7eb;
        font-size: 12px;
        color: #6b7280;
        text-align: center;
      }
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
            <td class="value">
              <strong>${escapeHtml(cleanName)}</strong>
            </td>
          </tr>

          <tr>
            <td class="label">Email Address</td>
            <td class="value">
              <a href="mailto:${escapeHtml(cleanEmail)}">
                ${escapeHtml(cleanEmail)}
              </a>
            </td>
          </tr>

          <tr>
            <td class="label">Requested Service</td>
            <td class="value">
              <strong>${escapeHtml(cleanService)}</strong>
            </td>
          </tr>

          <tr>
            <td class="label">Company / Website</td>
            <td class="value">
              ${escapeHtml(safeCompany || "Not provided")}
            </td>
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
            <td class="value">${escapeHtml(nowFormatted)}</td>
          </tr>
        </table>

        <div style="font-size: 14px; font-weight: 600; color: #374151;">
          Project Details:
        </div>

        <div class="message-box">${escapeHtml(cleanMessage)}</div>
      </div>

      <div class="footer">
        Sent via Cinorium Website Contact Form.
        Reply directly to this email to respond to the visitor.
      </div>
    </div>
  </body>
</html>
    `;

    // 12. Send email.
    await transporter.sendMail({
      from: `"Cinorium Enquiries" <${smtpUser}>`,
      to: toEmail,
      replyTo: cleanEmail,
      subject: `New Cinorium Project Enquiry — ${cleanService}`,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message:
        "Thank you for contacting Cinorium. Your enquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error(
      "[Contact API Error]:",
      error instanceof Error ? error.message : "Unknown error",
    );

    return errorResponse(
      "Unable to send your message at this moment. Please try again shortly or contact us directly.",
      500,
    );
  }
}
