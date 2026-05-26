import { cn } from "@/lib/cn";

type SectionLabelProps = {
  number: string;
  label: string;
  variant?: "light" | "dark";
  className?: string;
};

/**
 * Section marker:
 * - Mobile: compact inline marker — small number + dot + mono label, sized smaller than the heading
 * - Desktop (sm+): Luzen-style stacked heading_number with large display numeral above small mono label
 */
export function SectionLabel({
  number,
  label,
  variant = "light",
  className,
}: SectionLabelProps) {
  const numberColor = variant === "dark" ? "text-white" : "text-ink";
  const labelColor = variant === "dark" ? "text-white/70" : "text-ink/65";
  const dotColor = variant === "dark" ? "bg-white/30" : "bg-ink/25";

  return (
    <div
      className={cn(
        "inline-flex flex-row items-center gap-3 sm:flex-col sm:items-start sm:gap-1.5",
        className,
      )}
    >
      <span
        className={cn(
          "font-display font-medium leading-none tracking-display text-[1.1rem] sm:text-[3.85rem] lg:text-[4.25rem]",
          numberColor,
        )}
      >
        {number}
      </span>
      <span
        aria-hidden="true"
        className={cn("block h-1 w-1 rounded-full sm:hidden", dotColor)}
      />
      <span
        className={cn(
          "font-mono text-[0.72rem] uppercase tracking-marker sm:text-[0.78rem]",
          labelColor,
        )}
      >
        {label}
      </span>
    </div>
  );
}
