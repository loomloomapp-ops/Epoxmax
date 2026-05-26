import { cn } from "@/lib/cn";

type Props = {
  message: string;
  onRetry: () => void;
  variant?: "light" | "dark";
};

export function FormError({ message, onRetry, variant = "light" }: Props) {
  return (
    <div
      role="alert"
      className={cn(
        "flex flex-wrap items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-[0.875rem]",
        variant === "dark"
          ? "border-red-300/40 bg-red-400/10 text-red-100"
          : "border-red-200 bg-red-50 text-red-800",
      )}
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className={cn(
            "inline-flex h-7 w-7 items-center justify-center rounded-full font-mono text-[0.85rem] font-medium",
            variant === "dark" ? "bg-red-300/20 text-red-50" : "bg-red-100 text-red-700",
          )}
        >
          !
        </span>
        <span>Coś poszło nie tak. {message ? `${message}.` : ""} Sprawdź dane i spróbuj ponownie.</span>
      </div>
      <button
        type="button"
        onClick={onRetry}
        className={cn(
          "inline-flex items-center gap-2 text-[0.85rem] font-medium underline-offset-4 hover:underline",
          variant === "dark" ? "text-red-50" : "text-red-700",
        )}
      >
        Spróbuj ponownie
      </button>
    </div>
  );
}
