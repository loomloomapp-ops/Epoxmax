import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

type FormFieldProps = {
  id: string;
  label: string;
  hint?: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
};

export function FormField({
  id,
  label,
  hint,
  required,
  error,
  className,
  children,
}: FormFieldProps) {
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={id}
        className="flex items-center gap-2 font-sans text-[0.82rem] font-medium uppercase tracking-marker text-ink/75"
      >
        <span>{label}</span>
        {!required && (
          <span className="text-[0.7rem] text-muted/80 normal-case tracking-normal">
            (opcjonalnie)
          </span>
        )}
      </label>
      {children}
      {error ? (
        <p
          id={errorId}
          role="alert"
          className="text-[0.82rem] font-medium text-red-700"
        >
          {error}
        </p>
      ) : (
        hint && (
          <p id={hintId} className="text-[0.78rem] text-muted/90">
            {hint}
          </p>
        )
      )}
    </div>
  );
}
