"use client";

import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, invalid, ...rest },
  ref,
) {
  return (
    <input
      ref={ref}
      aria-invalid={invalid || undefined}
      className={cn(
        "h-12 w-full rounded-xl border bg-surface px-4 font-sans text-[0.95rem] text-ink placeholder:text-muted/70 transition-[border-color,box-shadow] duration-300 ease-smooth",
        "focus:outline-none focus:ring-2 focus:ring-offset-0",
        invalid
          ? "border-red-400/80 focus:border-red-500 focus:ring-red-200"
          : "border-hairline focus:border-accent-blue focus:ring-accent-blue/25",
        className,
      )}
      {...rest}
    />
  );
});
