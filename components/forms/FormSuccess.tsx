import { Check } from "@/components/icons/Check";

type Props = {
  onReset: () => void;
  variant?: "light" | "dark";
};

export function FormSuccess({ onReset, variant = "light" }: Props) {
  const isDark = variant === "dark";
  return (
    <div
      className={
        isDark
          ? "rounded-2xl border border-white/10 bg-white/5 p-6 text-white sm:p-8"
          : "rounded-2xl border border-accent-green/30 bg-accent-green-soft p-6 text-ink sm:p-8"
      }
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-green text-white"
        >
          <Check />
        </span>
        <div className="flex-1">
          <p className="font-mono text-[0.74rem] uppercase tracking-marker text-accent-green">
            Zapytanie wysłane
          </p>
          <h3 className="mt-2 font-display text-[1.5rem] leading-tight tracking-tighter sm:text-[1.75rem]">
            Dziękujemy! Twoje zapytanie zostało wysłane.
          </h3>
          <p
            className={
              isDark
                ? "mt-2 max-w-md text-sm leading-relaxed text-white/80"
                : "mt-2 max-w-md text-sm leading-relaxed text-muted"
            }
          >
            Skontaktujemy się z Tobą wkrótce — zwykle w ciągu 24 godzin w dni robocze.
          </p>
          <button
            type="button"
            onClick={onReset}
            className={
              isDark
                ? "mt-5 inline-flex items-center gap-2 text-[0.85rem] font-medium text-white underline-offset-4 hover:underline"
                : "mt-5 inline-flex items-center gap-2 text-[0.85rem] font-medium text-accent-blue underline-offset-4 hover:underline"
            }
          >
            Wyślij kolejne zapytanie
          </button>
        </div>
      </div>
    </div>
  );
}
