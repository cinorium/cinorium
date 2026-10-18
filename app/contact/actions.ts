"use server";

import nodemailer from "nodemailer";

export async function submitContactForm(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  // Validation
  if (!name || !email || !message) {
    return { success: false, message: "Kripya sabhi required fields bharein." };
  }

  try {
    // Nodemailer Transporter Setup (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email Options
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Sent from your Gmail
      to: "cinoriumadmin@gmail.com", // Delivered to your Gmail
      replyTo: email, // Reply directly to sender
      subject: `New Portfolio Enquiry: ${service} from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #d97706; border-bottom: 2px solid #f59e0b; padding-bottom: 8px;">
            New Project Message
          </h2>
          <p><strong>Sender Name:</strong> ${name}</p>
          <p><strong>Sender Email:</strong> ${email}</p>
          <p><strong>Requested Service:</strong> ${service}</p>
          <br />
          <p><strong>Message:</strong></p>
          <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
            ${message.replace(/\n/g, "<br />")}
          </div>
        </div>
      `,
    };

    // Send Mail
    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message:
        "Thank you! Your message has been sent to cinoriumadmin@gmail.com.",
    };
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return {
      success: false,
      message:
        "Message bhejne mein masla hua. Kripya kuch der baad try karein.",
    };
  }
}
