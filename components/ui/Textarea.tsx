"use client";

import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ className, invalid, ...rest }, ref) {
    return (
      <textarea
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cn(
          "min-h-[120px] w-full rounded-xl border bg-surface px-4 py-3 font-sans text-[0.95rem] text-ink placeholder:text-muted/70 transition-[border-color,box-shadow] duration-300 ease-smooth resize-y",
          "focus:outline-none focus:ring-2 focus:ring-offset-0",
          invalid
            ? "border-red-400/80 focus:border-red-500 focus:ring-red-200"
            : "border-hairline focus:border-accent-blue focus:ring-accent-blue/25",
          className,
        )}
        {...rest}
      />
    );
  },
);
