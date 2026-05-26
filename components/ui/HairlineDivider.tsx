import { cn } from "@/lib/cn";

type Props = {
  variant?: "light" | "dark";
  className?: string;
};

export function HairlineDivider({ variant = "light", className }: Props) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "block h-px w-full",
        variant === "dark" ? "bg-white/12" : "bg-ink/[0.08]",
        className,
      )}
    />
  );
}
