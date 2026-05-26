/**
 * Lightweight Polish phone formatter.
 * Accepts free user input and produces a readable +48 XXX XXX XXX string
 * when the input matches a 9-digit pattern. Otherwise it returns the raw value.
 */
export function formatPolishPhone(raw: string): string {
  if (!raw) return raw;
  const trimmed = raw.replace(/\s+/g, " ");
  const digits = trimmed.replace(/\D/g, "");
  if (digits.length === 0) return trimmed;

  let normalised = digits;
  if (normalised.startsWith("0048")) {
    normalised = normalised.slice(4);
  } else if (normalised.startsWith("48") && normalised.length === 11) {
    normalised = normalised.slice(2);
  }

  if (normalised.length === 9) {
    const a = normalised.slice(0, 3);
    const b = normalised.slice(3, 6);
    const c = normalised.slice(6, 9);
    return `+48 ${a} ${b} ${c}`;
  }

  return trimmed;
}
