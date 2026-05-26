"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type GlassCardProps = {
  eyebrow: string;
  title: ReactNode;
  bgImage?: string;
  bgImageAlt?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Luzen .glass-card — premium dark contact card.
 * Used in the two-card mid CTA strip.
 */
export function GlassCard({
  eyebrow,
  title,
  bgImage,
  bgImageAlt,
  children,
  className,
}: GlassCardProps) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.article
      initial={prefersReduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative isolate flex min-h-[360px] flex-col justify-between overflow-hidden rounded-5xl border border-white/10 bg-deep p-8 text-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] sm:min-h-[420px] sm:p-10 lg:p-12",
        className,
      )}
    >
      {bgImage && (
        <>
          <Image
            src={bgImage}
            alt={bgImageAlt ?? ""}
            aria-hidden={bgImageAlt ? undefined : true}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="-z-10 object-cover opacity-50 transition-transform duration-[1200ms] ease-smooth group-hover:scale-[1.04]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-br from-deep via-deep/85 to-deep/30"
          />
        </>
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
      />
      <div>
        <p className="font-mono text-[0.72rem] uppercase tracking-marker text-accent-green">
          {eyebrow}
        </p>
        <h3 className="mt-7 font-display text-[2rem] leading-[1.05] tracking-display text-white sm:text-[2.5rem]">
          {title}
        </h3>
      </div>
      <div className="mt-10">{children}</div>
    </motion.article>
  );
}
