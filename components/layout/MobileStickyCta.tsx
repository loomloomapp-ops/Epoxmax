"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePopupForm } from "@/hooks/usePopupForm";
import { Events } from "@/lib/analytics";
import { ArrowUpRight } from "@/components/icons/ArrowUpRight";

export function MobileStickyCta() {
  const popup = usePopupForm();
  const [visible, setVisible] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      const viewport = window.innerHeight;
      setVisible(y > viewport * 0.65);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.div
      aria-hidden={!visible}
      initial={false}
      animate={{
        y: !prefersReduced && visible ? 0 : 120,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 bottom-0 z-[60] flex justify-center px-4 pb-[max(env(safe-area-inset-bottom),0.85rem)] pt-3 lg:hidden"
    >
      <div className="w-full max-w-md rounded-full border border-hairline bg-surface/95 px-2 py-2 shadow-[0_18px_40px_-20px_rgba(16,42,44,0.35)] backdrop-blur-md">
        <button
          type="button"
          onClick={() => {
            Events.ctaClicked("mobile-sticky");
            popup.open("mobile-sticky");
          }}
          className="group flex w-full items-center justify-between gap-3 rounded-full bg-accent-blue px-5 py-3 text-left text-white transition-[background-color,transform] duration-300 ease-smooth hover:bg-accent-blue-hover active:scale-[0.99]"
        >
          <span className="flex flex-col leading-tight">
            <span className="font-mono text-[0.62rem] uppercase tracking-marker text-white/70">
              Zostaw kontakt
            </span>
            <span className="text-[0.96rem] font-medium">Wyślij zapytanie</span>
          </span>
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition group-hover:translate-x-[2px] group-hover:-translate-y-[1px]"
          >
            <ArrowUpRight />
          </span>
        </button>
      </div>
    </motion.div>
  );
}
