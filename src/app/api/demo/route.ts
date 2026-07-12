import { NextResponse } from "next/server";

/**
 * Placeholder demo-request handler.
 *
 * Right now it only validates the payload and logs it, returning success so the
 * on-page form works end to end.
 *
 * TODO: wire this to a real destination — pick one:
 *   - send an email (nodemailer / Resend / SES) to your sales inbox
 *   - append a row to a Google Sheet / Airtable
 *   - create a lead in your CRM
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const firm = String(body.firm ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !firm || !emailOk) {
    return NextResponse.json(
      { ok: false, error: "Please provide your name, firm and a valid work email." },
      { status: 422 }
    );
  }

  // TODO: replace this log with a real integration (email / sheet / CRM).
  console.log("[demo-request]", { name, firm, email, phone, at: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
