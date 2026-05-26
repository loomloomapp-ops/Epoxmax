"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePopupForm } from "@/hooks/usePopupForm";
import { Events } from "@/lib/analytics";

export function FloatingWidget() {
  const popup = usePopupForm();
  const [visible, setVisible] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.button
      type="button"
      aria-label="Zapytaj o panele"
      onClick={() => {
        Events.ctaClicked("floating-widget");
        popup.open("floating-widget");
      }}
      className="group fixed right-5 top-[58%] z-[55] hidden -translate-y-1/2 items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-3 shadow-[0_18px_40px_-20px_rgba(16,42,44,0.35)] outline-none transition-[transform,box-shadow,border-color] duration-400 ease-smooth focus-visible:ring-2 focus-visible:ring-accent-blue lg:flex"
      initial={false}
      animate={{
        x: !prefersReduced && visible ? 0 : 80,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-accent-blue text-white">
        <span
          aria-hidden="true"
          className="absolute -right-0.5 -top-0.5 block h-2 w-2 rounded-full bg-accent-green ring-2 ring-surface animate-pulse-soft"
        />
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 3.5h10v6H6.5L3.5 12V9.5H2z" />
        </svg>
      </span>
      <span className="flex flex-col pr-2 text-left leading-tight">
        <span className="font-mono text-[0.62rem] uppercase tracking-marker text-accent-green">
          Konsultacja
        </span>
        <span className="text-[0.88rem] font-medium text-ink">
          Zapytaj o panele
        </span>
      </span>
    </motion.button>
  );
}
