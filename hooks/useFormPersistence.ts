"use client";

import { useEffect } from "react";
import type { UseFormReturn, FieldValues } from "react-hook-form";

export function useFormPersistence<T extends FieldValues>(
  key: string,
  form: UseFormReturn<T>,
) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(key);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Partial<T>;
      Object.entries(parsed).forEach(([field, value]) => {
        if (value !== undefined && value !== null) {
          form.setValue(field as Parameters<typeof form.setValue>[0], value as never, {
            shouldDirty: false,
            shouldTouch: false,
            shouldValidate: false,
          });
        }
      });
    } catch {
      // localStorage may be unavailable; fail silently.
    }
  }, [key, form]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const subscription = form.watch((values) => {
      try {
        window.localStorage.setItem(key, JSON.stringify(values));
      } catch {
        // ignore quota errors
      }
    });
    return () => subscription.unsubscribe();
  }, [form, key]);
}

export function clearFormPersistence(key: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(key);
  } catch {
    // ignore
  }
}
