import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { firstName, lastName, email, phone, treatment, comments } = body as {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    treatment?: string;
    comments?: string;
  };

  if (!firstName || !lastName || !email || !phone || !treatment) {
    return NextResponse.json(
      { error: "firstName, lastName, email, phone, and treatment are required" },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("LEAD_WEBHOOK_URL is not configured");
    return NextResponse.json(
      { error: "Contact form is not configured" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: String(firstName).trim(),
        lastName: String(lastName).trim(),
        email: String(email).trim(),
        phone: String(phone).trim(),
        treatment: String(treatment).trim(),
        comments: comments ? String(comments).trim().slice(0, 600) : "",
      }),
    });

    if (!res.ok) {
      console.error("Webhook error:", res.status, await res.text());
      return NextResponse.json(
        { error: "Failed to submit" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Webhook fetch error:", e);
    return NextResponse.json(
      { error: "Failed to submit" },
      { status: 502 }
    );
  }
}
