"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { Close } from "@/components/icons/Close";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { cn } from "@/lib/cn";

type PopupModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function PopupModal({
  open,
  onClose,
  title,
  subtitle,
  children,
}: PopupModalProps) {
  useLockBodyScroll(open);
  const prefersReduced = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      const focusable = dialogRef.current?.querySelector<HTMLElement>(
        "input, textarea, select, button",
      );
      focusable?.focus();
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            aria-label="Zamknij okno"
            onClick={onClose}
            className="absolute inset-0 bg-deep/85 backdrop-blur-sm"
          />
          <motion.div
            ref={dialogRef}
            initial={prefersReduced ? false : { opacity: 0, scale: 0.97, y: 12 }}
            animate={prefersReduced ? { opacity: 1, scale: 1, y: 0 } : { opacity: 1, scale: 1, y: 0 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "relative z-[1] w-full max-w-xl overflow-hidden rounded-3xl bg-surface shadow-[0_30px_80px_-20px_rgba(16,42,44,0.5)]",
              "border border-hairline",
            )}
          >
            <header className="flex items-start justify-between gap-4 border-b border-hairline px-6 py-5 sm:px-8 sm:py-6">
              <div>
                <p className="font-mono text-[0.72rem] uppercase tracking-marker text-accent-green">
                  Formularz kontaktowy
                </p>
                <h2 className="mt-2 font-display text-[1.6rem] leading-tight tracking-tighter text-ink sm:text-[1.85rem]">
                  {title}
                </h2>
                {subtitle && (
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                    {subtitle}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Zamknij okno"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-hairline text-ink/70 transition hover:border-ink/30 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
              >
                <Close />
              </button>
            </header>
            <div className="max-h-[70vh] overflow-y-auto px-6 py-6 sm:px-8 sm:py-7">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
