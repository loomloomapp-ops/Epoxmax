"use client";

import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { Check } from "@/components/icons/Check";
import { cn } from "@/lib/cn";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
  children: ReactNode;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ className, invalid, children, id, ...rest }, ref) {
    return (
      <label
        htmlFor={id}
        className={cn(
          "group flex cursor-pointer items-start gap-3 text-[0.86rem] leading-relaxed text-muted",
          className,
        )}
      >
        <span className="relative mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center">
          <input
            id={id}
            ref={ref}
            type="checkbox"
            aria-invalid={invalid || undefined}
            className="peer absolute inset-0 m-0 cursor-pointer appearance-none rounded-md border border-hairline bg-surface transition-[border-color,background-color] duration-300 ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue checked:border-accent-blue checked:bg-accent-blue"
            {...rest}
          />
          <span className="pointer-events-none relative z-[1] text-white opacity-0 transition-opacity duration-200 peer-checked:opacity-100">
            <Check />
          </span>
        </span>
        <span className={cn(invalid && "text-red-700")}>{children}</span>
      </label>
    );
  },
);
