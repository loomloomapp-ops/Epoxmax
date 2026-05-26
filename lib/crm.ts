import type { LeadInput } from "@/components/forms/lead-types";

export type LeadSubmitResult =
  | { ok: true }
  | { ok: false; error: string };

const RETRY_DELAY_MS = 2000;

async function postOnce(payload: LeadInput, source: string): Promise<Response> {
  return fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, source }),
  });
}

export async function submitLead(
  payload: LeadInput,
  source: string,
): Promise<LeadSubmitResult> {
  try {
    let response = await postOnce(payload, source);
    if (!response.ok && response.status >= 500) {
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
      response = await postOnce(payload, source);
    }
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
