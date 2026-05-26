"use client";

import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SelectOption = { value: string; label: string };

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  invalid?: boolean;
  options: readonly SelectOption[];
  placeholder?: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className, invalid, options, placeholder, value, defaultValue, ...rest },
  ref,
) {
  const hasValue = Boolean(value || defaultValue);
  return (
    <div className="relative">
      <select
        ref={ref}
        aria-invalid={invalid || undefined}
        value={value}
        defaultValue={defaultValue}
        className={cn(
          "h-12 w-full appearance-none rounded-xl border bg-surface pl-4 pr-11 font-sans text-[0.95rem] transition-[border-color,box-shadow,color] duration-300 ease-smooth",
          "focus:outline-none focus:ring-2 focus:ring-offset-0",
          hasValue ? "text-ink" : "text-muted/80",
          invalid
            ? "border-red-400/80 focus:border-red-500 focus:ring-red-200"
            : "border-hairline focus:border-accent-blue focus:ring-accent-blue/25",
          className,
        )}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink/55"
      >
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 1.5L6 6.5L11 1.5" />
        </svg>
      </span>
    </div>
  );
});
