import { cn } from "@/lib/cn";

type Props = {
  label: string;
  variant?: "light" | "dark";
};

export function TrustBadge({ label, variant = "light" }: Props) {
  return (
    <li
      className={cn(
        "flex items-center gap-2 font-mono uppercase tracking-marker text-[0.72rem]",
        variant === "dark" ? "text-white/85" : "text-ink/80",
      )}
    >
      <span
        aria-hidden="true"
        className="block h-1.5 w-1.5 rounded-full bg-accent-green"
      />
      <span>{label}</span>
    </li>
  );
}
