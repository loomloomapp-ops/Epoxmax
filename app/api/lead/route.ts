import { NextResponse } from "next/server";
import { z } from "zod";
import { leadSchema } from "@/components/forms/lead-schema";
import { env, hasCrmEndpoint } from "@/lib/env";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const incomingSchema = leadSchema.extend({
  source: z.string().min(1).max(120),
});

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Nieprawidłowe dane" },
      { status: 400 },
    );
  }

  const parsed = incomingSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Walidacja nie powiodła się",
        issues: parsed.error.flatten(),
      },
      { status: 422 },
    );
  }

  if (parsed.data.website && parsed.data.website.length > 0) {
    // Honeypot — silently accept without forwarding.
    return NextResponse.json({ ok: true, skipped: true });
  }

  const { website: _omit, ...payload } = parsed.data;

  const userAgent = request.headers.get("user-agent") ?? undefined;
  const enriched = {
    ...payload,
    userAgent,
    submittedAt: new Date().toISOString(),
  };

  if (!hasCrmEndpoint()) {
    // No CRM configured — log to server console so the dev can see deliveries
    // and respond with success so the UI keeps its UX flow intact.
    if (process.env.NODE_ENV !== "production") {
      console.info("[lead] CRM_ENDPOINT is empty, logged-only payload:", enriched);
    }
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const response = await fetch(env.CRM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(env.CRM_TOKEN ? { "X-Lead-Token": env.CRM_TOKEN } : {}),
      },
      body: JSON.stringify(enriched),
      cache: "no-store",
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      return NextResponse.json(
        {
          ok: false,
          error: `CRM odrzucił żądanie (${response.status})`,
          details: text.slice(0, 500),
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (cause) {
    const message =
      cause instanceof Error ? cause.message : "Nie udało się skontaktować z CRM";
    return NextResponse.json({ ok: false, error: message }, { status: 502 });
  }
}
