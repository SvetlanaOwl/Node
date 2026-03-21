// utils/emailService.js - resend.com
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail({ to, subject, html }) {
  try {
    const response = await resend.emails.send({
      from: "Simple Users App <onboarding@resend.dev>",
      to,
      subject,
      html
    });
    return response;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
}

module.exports = { sendEmail };
