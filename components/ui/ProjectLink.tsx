"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

type ProjectLinkProps = {
  children: ReactNode;
  className?: string;
  variant?: "light" | "dark";
};

/**
 * Luzen .clip > .project_link with the .link-line that animates underneath
 * on group hover. Stick it inside a parent that has the `group` class.
 */
export function ProjectLink({
  children,
  className,
  variant = "light",
}: ProjectLinkProps) {
  const color = variant === "dark" ? "text-white" : "text-ink";
  const line =
    variant === "dark" ? "bg-white" : "bg-ink";
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center overflow-hidden",
        className,
      )}
    >
      <span
        className={cn(
          "relative whitespace-nowrap font-mono text-[0.78rem] uppercase tracking-marker",
          color,
        )}
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "absolute bottom-0 left-0 h-px w-full origin-right scale-x-100 transition-transform duration-500 ease-smooth group-hover:origin-left",
          line,
        )}
      />
    </span>
  );
}
