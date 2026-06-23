import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildPlainText(payload: ContactPayload): string {
  return [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Subject: ${payload.subject}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");
}

function buildHtml(payload: ContactPayload): string {
  return `
    <div style="font-family: sans-serif; max-width: 600px;">
      <h2 style="color: #032147;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(payload.subject)}</p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(payload.message)}</p>
    </div>
  `;
}

async function sendViaSendGrid(
  payload: ContactPayload,
  to: string,
  from: string
): Promise<void> {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) throw new Error("SendGrid not configured");

  sgMail.setApiKey(apiKey);
  await sgMail.send({
    to,
    from,
    replyTo: payload.email,
    subject: `[Website Contact] ${payload.subject}`,
    text: buildPlainText(payload),
    html: buildHtml(payload),
  });
}

async function sendViaGmail(
  payload: ContactPayload,
  to: string
): Promise<void> {
  const user = process.env.GMAIL_USER || process.env.CONTACT_EMAIL;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) throw new Error("Gmail SMTP not configured");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"Paul Powell Website" <${user}>`,
    to,
    replyTo: payload.email,
    subject: `[Website Contact] ${payload.subject}`,
    text: buildPlainText(payload),
    html: buildHtml(payload),
  });
}

async function sendViaPushover(payload: ContactPayload): Promise<void> {
  const token = process.env.PUSHOVER_TOKEN;
  const user = process.env.PUSHOVER_USER;
  if (!token || !user) throw new Error("Pushover not configured");

  const body = [
    `From: ${payload.name}`,
    `Email: ${payload.email}`,
    `Subject: ${payload.subject}`,
    "",
    payload.message,
  ].join("\n");

  const response = await fetch("https://api.pushover.net/1/messages.json", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      token,
      user,
      title: `Website Contact: ${payload.subject}`,
      message: body,
    }),
  });

  if (!response.ok) {
    throw new Error("Pushover request failed");
  }

  const result = await response.json();
  if (result.status !== 1) {
    throw new Error("Pushover rejected the message");
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json();
    const { name, email, subject, message } = body;

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const payload: ContactPayload = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    };

    const contactEmail = process.env.CONTACT_EMAIL;
    const sendGridFrom = process.env.SENDGRID_FROM_EMAIL;
    const errors: string[] = [];

    if (contactEmail && sendGridFrom && process.env.SENDGRID_API_KEY) {
      try {
        await sendViaSendGrid(payload, contactEmail, sendGridFrom);
        return NextResponse.json({ success: true });
      } catch (err) {
        const msg = err instanceof Error ? err.message : "SendGrid failed";
        errors.push(`SendGrid: ${msg}`);
        console.error("SendGrid error:", err);
      }
    }

    if (contactEmail && process.env.GMAIL_APP_PASSWORD) {
      try {
        await sendViaGmail(payload, contactEmail);
        return NextResponse.json({ success: true });
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Gmail failed";
        errors.push(`Gmail: ${msg}`);
        console.error("Gmail error:", err);
      }
    }

    if (process.env.PUSHOVER_TOKEN && process.env.PUSHOVER_USER) {
      try {
        await sendViaPushover(payload);
        return NextResponse.json({ success: true });
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Pushover failed";
        errors.push(`Pushover: ${msg}`);
        console.error("Pushover error:", err);
      }
    }

    console.error("All contact delivery methods failed:", errors);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
