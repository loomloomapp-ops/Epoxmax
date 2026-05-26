"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId } from "react";
import { cn } from "@/lib/cn";

type Props = {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
};

/**
 * Luzen-style accordion — two crossing 1px lines that morph between + and –.
 */
export function AccordionItem({ question, answer, open, onToggle }: Props) {
  const id = useId();
  const triggerId = `${id}-trigger`;
  const panelId = `${id}-panel`;
  const prefersReduced = useReducedMotion();

  return (
    <li className="border-b border-hairline">
      <h3 className="m-0">
        <button
          id={triggerId}
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className={cn(
            "group flex w-full items-center justify-between gap-6 py-7 text-left transition-colors duration-300 ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
          )}
        >
          <span
            className={cn(
              "font-display text-[1.3rem] leading-snug tracking-tighter transition-colors duration-300 sm:text-[1.5rem]",
              open ? "text-ink" : "text-ink/85 group-hover:text-ink",
            )}
          >
            {question}
          </span>
          <span
            aria-hidden="true"
            className="relative inline-flex h-6 w-6 shrink-0 items-center justify-center"
          >
            <span
              className={cn(
                "absolute block h-px w-full bg-ink transition-colors duration-300",
                open ? "bg-accent-green" : "",
              )}
            />
            <span
              className={cn(
                "absolute block h-full w-px bg-ink transition-[transform,background-color] duration-500 ease-smooth",
                open ? "scale-y-0 bg-accent-green" : "scale-y-100",
              )}
            />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            initial={prefersReduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={prefersReduced ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="pb-8 pr-12 text-base leading-relaxed text-muted">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
