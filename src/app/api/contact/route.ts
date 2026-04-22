import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  business?: string;
  phone?: string;
  package?: string;
  maintenance?: boolean;
  message?: string;
};

function isString(v: unknown, min = 1, max = 2000): v is string {
  return typeof v === "string" && v.trim().length >= min && v.length <= max;
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 }
    );
  }

  const { name, business, phone, package: pkg, maintenance, message } = payload;

  // Basic validation — every required field present.
  if (
    !isString(name, 2, 100) ||
    !isString(phone, 6, 32) ||
    !isString(pkg, 1, 50)
  ) {
    return NextResponse.json(
      { ok: false, error: "missing_required_fields" },
      { status: 400 }
    );
  }

  // Permissive Israeli phone sanity — digits, spaces, dashes, + only.
  if (!/^[0-9+\-\s]{6,}$/.test(phone)) {
    return NextResponse.json(
      { ok: false, error: "invalid_phone" },
      { status: 400 }
    );
  }

  const clean = {
    name: name.trim(),
    business: isString(business, 0, 200) ? business.trim() : "",
    phone: phone.trim(),
    package: pkg.trim(),
    maintenance: maintenance === true,
    message: isString(message, 0, 2000) ? message.trim() : "",
    receivedAt: new Date().toISOString(),
  };

  // Placeholder delivery — logged to server console. Real email integration goes here
  // (Resend / SendGrid / Formspree). See .env.local.example for the env vars needed.
  //
  // To enable Resend:
  //   1. npm install resend
  //   2. Set RESEND_API_KEY + CONTACT_EMAIL_TO in .env.local
  //   3. Uncomment the block below.
  //
  // if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL_TO) {
  //   const { Resend } = await import("resend");
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
  //     to: process.env.CONTACT_EMAIL_TO,
  //     subject: `ליד חדש מ-Pixelio — ${clean.name}`,
  //     text: JSON.stringify(clean, null, 2),
  //   });
  // }

  // eslint-disable-next-line no-console
  console.log("[Pixelio contact] new lead:", clean);

  return NextResponse.json({ ok: true });
}
