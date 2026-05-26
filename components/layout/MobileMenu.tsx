"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { Close } from "@/components/icons/Close";
import { Phone } from "@/components/icons/Phone";
import { Mail } from "@/components/icons/Mail";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { Button } from "@/components/ui/Button";
import { BRAND, NAV_ITEMS } from "@/content/nav";
import { env } from "@/lib/env";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: Props) {
  useLockBodyScroll(open);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[95] flex flex-col bg-canvas"
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReduced ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label="Menu mobilne"
        >
          <div className="flex h-[68px] items-center justify-between px-5 sm:px-7">
            <Link
              href="/#start"
              onClick={onClose}
              className="flex items-center gap-2 font-display text-[1.2rem] font-medium tracking-tighter text-ink"
            >
              <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-accent-green" />
              <span>{BRAND.name}</span>
            </Link>
            <button
              type="button"
              onClick={onClose}
              aria-label="Zamknij menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-surface text-ink"
            >
              <Close />
            </button>
          </div>

          <nav
            aria-label="Menu mobilne"
            className="flex flex-1 flex-col gap-1 px-5 pt-2 sm:px-7"
          >
            {NAV_ITEMS.map((item, index) => (
              <motion.div
                key={item.href}
                initial={prefersReduced ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.05 + index * 0.06,
                }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-baseline justify-between gap-4 border-b border-hairline py-5 font-display text-[2rem] font-medium tracking-tighter text-ink"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-[0.75rem] uppercase tracking-marker text-accent-green">
                    0{index + 1}
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="border-t border-hairline px-5 pb-7 pt-5 sm:px-7">
            <div className="flex flex-col gap-3">
              <Button href="/#kontakt" variant="primary" size="lg" fullWidth onClick={onClose}>
                Zamów konsultację
              </Button>
              <div className="flex flex-col gap-2 pt-2 text-[0.85rem] text-muted">
                <a
                  href={`tel:${env.CONTACT_PHONE.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 text-ink hover:text-accent-blue"
                >
                  <Phone />
                  <span>{env.CONTACT_PHONE}</span>
                </a>
                <a
                  href={`mailto:${env.CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 text-ink hover:text-accent-blue"
                >
                  <Mail />
                  <span>{env.CONTACT_EMAIL}</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
