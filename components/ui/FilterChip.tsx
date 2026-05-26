"use client";

import { cn } from "@/lib/cn";

type Props = {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export function FilterChip({ active, onClick, children }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex items-center justify-center h-10 px-5 rounded-full font-mono text-[0.78rem] uppercase tracking-marker transition-all duration-300 ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-canvas border",
        active
          ? "bg-ink text-white border-ink shadow-soft"
          : "bg-transparent text-ink/75 border-hairline hover:border-ink/40 hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}
