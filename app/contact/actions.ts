"use server";

import nodemailer from "nodemailer";

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

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function submitContactForm(prevState: unknown, formData: FormData) {
  const name = (formData.get("name") as string) || "";
  const email = (formData.get("email") as string) || "";
  const service = (formData.get("service") as string) || "";
  const message = (formData.get("message") as string) || "";
  const companyOrWebsite = (formData.get("companyOrWebsite") as string) || "";
  const budget = (formData.get("budget") as string) || "Not decided yet";
  const preferredContact = (formData.get("preferredContact") as string) || "Email";
  const honeypot = (formData.get("website_hp") as string) || "";

  // Bot mitigation: Honeypot check
  if (honeypot.trim() !== "") {
    return {
      success: true,
      message:
        "Thank you for contacting Cinorium. Your enquiry has been submitted successfully.",
    };
  }

  // Required Field Validations
  if (!name.trim() || name.trim().length < 2 || name.trim().length > 100) {
    return {
      success: false,
      message: "Please enter your full name (2–100 characters).",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim() || email.trim().length > 150 || !emailRegex.test(email.trim())) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  if (!service.trim() || !ALLOWED_SERVICES.includes(service.trim())) {
    return {
      success: false,
      message: "Please select a valid service from the options provided.",
    };
  }

  if (!message.trim() || message.trim().length < 10 || message.trim().length > 3000) {
    return {
      success: false,
      message:
        "Please provide a few details about your project (10–3,000 characters).",
    };
  }

  const safeCompany = companyOrWebsite.trim().slice(0, 200);
  const safeBudget = ALLOWED_BUDGETS.includes(budget.trim())
    ? budget.trim()
    : "Not decided yet";
  const safeContact = ALLOWED_CONTACT_METHODS.includes(preferredContact.trim())
    ? preferredContact.trim()
    : "Email";

  const smtpUser = process.env.GMAIL_USER || process.env.EMAIL_USER;
  const smtpPass = process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASS;
  const toEmail =
    process.env.CONTACT_TO_EMAIL ||
    process.env.EMAIL_TO ||
    "cinoriumadmin@gmail.com";

  if (!smtpUser || !smtpPass) {
    console.warn(
      "[Contact Server Action] Gmail SMTP credentials not configured.",
    );
    return {
      success: false,
      message:
        "Our email service is momentarily offline for maintenance. Please message us directly via WhatsApp or email cinoriumadmin@gmail.com.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const nowFormatted = new Date().toUTCString();

    const textContent = `
New Project Enquiry — Cinorium
----------------------------------------
Full Name:        ${name.trim()}
Email Address:    ${email.trim()}
Service:          ${service.trim()}
Company/Website:  ${safeCompany || "Not provided"}
Budget Range:     ${safeBudget}
Preferred Method: ${safeContact}
Submission Time:  ${nowFormatted}

Project Details:
----------------------------------------
${message.trim()}
    `.trim();

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: sans-serif; color: #1f2937; line-height: 1.6; margin: 0; padding: 20px; background-color: #f3f4f6; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb; padding: 24px; }
            .title { font-size: 20px; font-weight: bold; color: #0b131e; border-bottom: 2px solid #ffb703; padding-bottom: 10px; margin-bottom: 20px; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            td { padding: 8px 10px; border-bottom: 1px solid #f3f4f6; font-size: 14px; }
            td.label { font-weight: 600; color: #4b5563; width: 150px; }
            .message-box { background: #f9fafb; border: 1px solid #e5e7eb; border-left: 4px solid #ffb703; border-radius: 6px; padding: 16px; margin-top: 10px; font-size: 14px; white-space: pre-wrap; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="title">New Cinorium Project Enquiry</div>
            <table>
              <tr><td class="label">Full Name</td><td><strong>${escapeHtml(name.trim())}</strong></td></tr>
              <tr><td class="label">Email Address</td><td><a href="mailto:${escapeHtml(email.trim())}">${escapeHtml(email.trim())}</a></td></tr>
              <tr><td class="label">Service</td><td>${escapeHtml(service.trim())}</td></tr>
              <tr><td class="label">Company / Site</td><td>${escapeHtml(safeCompany || "Not provided")}</td></tr>
              <tr><td class="label">Budget Range</td><td>${escapeHtml(safeBudget)}</td></tr>
              <tr><td class="label">Preferred Contact</td><td>${escapeHtml(safeContact)}</td></tr>
              <tr><td class="label">Submission Time</td><td>${nowFormatted}</td></tr>
            </table>
            <div style="font-weight: 600; font-size: 14px; color: #374151;">Project Details:</div>
            <div class="message-box">${escapeHtml(message.trim())}</div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Cinorium Enquiries" <${smtpUser}>`,
      to: toEmail,
      replyTo: email.trim(),
      subject: `New Cinorium Project Enquiry — ${service.trim()}`,
      text: textContent,
      html: htmlContent,
    });

    return {
      success: true,
      message:
        "Thank you for contacting Cinorium. Your enquiry has been submitted successfully.",
    };
  } catch (error) {
    console.error(
      "[Contact Action Error]:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return {
      success: false,
      message:
        "Unable to send your message at this moment. Please try again shortly or contact us directly on WhatsApp.",
    };
  }
}
