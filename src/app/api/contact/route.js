import { Resend } from "resend";

const rateLimitWindowMs = Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MS || 60_000);
const maxRequests = Number(process.env.CONTACT_RATE_LIMIT_MAX || 3);
const rateLimitStore = new Map();

function getClientIp(request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function enforceRateLimit(request) {
  const ip = getClientIp(request);
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || now > current.resetAt) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + rateLimitWindowMs,
    });
    return false;
  }

  if (current.count >= maxRequests) {
    return true;
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return false;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Please complete all fields before sending your message." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (enforceRateLimit(request)) {
      return Response.json(
        {
          error: `Too many messages sent. Please wait ${Math.ceil(rateLimitWindowMs / 1000)} seconds before sending another one.`,
        },
        { status: 429 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromAddress = process.env.RESEND_FROM;
    const recipient = process.env.CONTACT_EMAIL_TO;

    if (!apiKey || !fromAddress || !recipient) {
      return Response.json(
        {
          error: "Email sending is not configured yet. Add RESEND_API_KEY, RESEND_FROM, and CONTACT_EMAIL_TO, then restart the app.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: [recipient],
      reply_to: email,
      subject: `Portfolio contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h3 style="margin-bottom: 12px;">New portfolio message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f3f4f6; padding: 12px; border-radius: 8px; white-space: pre-wrap;">${message.replace(/\n/g, "<br />")}</div>
        </div>
      `,
    });

    if (error) {
      throw new Error(error.message || "Failed to send email with Resend.");
    }

    return Response.json({ message: "Message sent successfully." }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      {
        error: error instanceof Error ? error.message : "Something went wrong while sending your message.",
      },
      { status: 500 }
    );
  }
}
