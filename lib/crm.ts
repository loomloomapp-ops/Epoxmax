import type { LeadInput } from "@/components/forms/lead-types";
import { env } from "@/lib/env";

export type LeadSubmitResult =
  | { ok: true }
  | { ok: false; error: string };

const ROOM_LABELS: Record<LeadInput["roomType"], string> = {
  mieszkanie: "Mieszkanie",
  dom: "Dom",
  biuro: "Biuro",
  salon: "Salon / gabinet usługowy",
  kawiarnia: "Kawiarnia / restauracja",
  sklep: "Sklep / showroom",
  inne: "Inne pomieszczenie",
};

function buildMailtoUrl(payload: LeadInput, source: string): string {
  const subject = `Zapytanie z ${source} — ${payload.name}, ${payload.city}`;
  const lines = [
    `Imię: ${payload.name}`,
    `Telefon: ${payload.phone}`,
    `E-mail: ${payload.email}`,
    `Miasto: ${payload.city}`,
    `Typ pomieszczenia: ${ROOM_LABELS[payload.roomType] ?? payload.roomType}`,
    "",
    payload.message ? `Wiadomość:\n${payload.message}` : "",
    "",
    `— wysłane z formularza ${source}`,
  ].filter(Boolean);

  const body = lines.join("\n");
  return `mailto:${encodeURIComponent(env.CONTACT_EMAIL)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Static-hosting friendly lead submission.
 *
 * Order of preference:
 * 1. If NEXT_PUBLIC_FORM_ENDPOINT is set → POST JSON there (Web3Forms / Formspree / custom)
 * 2. Otherwise → open mailto: prefilled with the form contents in the user's mail client
 *
 * In both cases we treat the UX as success so the user sees the confirmation screen;
 * the operator is responsible for actually receiving the lead via configured channel.
 */
export async function submitLead(
  payload: LeadInput,
  source: string,
): Promise<LeadSubmitResult> {
  const endpoint = (
    process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? ""
  ).trim();

  if (endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, source }),
      });
      if (!response.ok) {
        const text = await response.text().catch(() => "");
        return {
          ok: false,
          error: text || `Błąd serwera (${response.status})`,
        };
      }
      return { ok: true };
    } catch (cause) {
      const message = cause instanceof Error ? cause.message : "Błąd sieci";
      return { ok: false, error: message };
    }
  }

  // Fallback: open the visitor's mail client with the form contents prefilled
  if (typeof window !== "undefined") {
    window.location.href = buildMailtoUrl(payload, source);
  }
  return { ok: true };
}
