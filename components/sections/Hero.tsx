"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { EditorialHeading, Em } from "@/components/ui/EditorialHeading";
import { Events } from "@/lib/analytics";
import { cn } from "@/lib/cn";

const HERO_STATS = [
  { value: "30+", label: "Wzorów do wyboru" },
  { value: "24h", label: "Reakcja na zapytanie" },
  { value: "16/16", label: "Województw — cała Polska" },
];

export function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="start"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100dvh] flex-col overflow-hidden"
    >
      {/* Full-bleed sharp photo background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20">
        <Image
          src="/images/portfolio/01-floral-warszawa.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Soft scrim — keeps central text legible, fades to fully visible photo at edges */}
        <div className="absolute inset-0 [background:radial-gradient(60%_55%_at_50%_42%,rgba(15,20,18,0.55),rgba(15,20,18,0.20)_70%,rgba(15,20,18,0)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep/35" />
      </div>

      {/* Centered content over photo */}
      <div className="container relative flex flex-1 flex-col pb-12 pt-[120px] sm:pt-[140px] lg:pt-[180px]">
        <div className="mx-auto flex max-w-[58rem] flex-1 flex-col items-center justify-center text-center">
          <motion.span
            initial={prefersReduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/15 px-4 py-2 font-mono text-[0.72rem] uppercase tracking-marker text-white backdrop-blur-md"
          >
            <span aria-hidden="true" className="block h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent-green" />
            <span>Panele dekoracyjne · Cała Polska</span>
          </motion.span>

          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mt-10"
          >
            <EditorialHeading
              as="h1"
              size="xl"
              align="center"
              variant="dark"
              id="hero-title"
              className="mx-auto max-w-[20ch] drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]"
            >
              Panele dekoracyjne, które <Em>odmienią</Em> wnętrze nawet w kilka godzin
            </EditorialHeading>
          </motion.div>

          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mt-8 max-w-[44rem] text-[1.05rem] leading-relaxed text-white/85 sm:text-[1.15rem]"
          >
            Tworzymy panele z różnymi wzorami do mieszkań, domów, biur i lokali
            usługowych. Szybki sposób na odświeżenie ścian — bez długiego remontu,
            kurzu i chaosu.
          </motion.p>

          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="mt-10"
          >
            <Button
              href="/#kontakt"
              variant="primary"
              size="lg"
              onClick={() => Events.ctaClicked("hero-primary")}
            >
              Zostaw zapytanie
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Stats banner — glassmorphism strip matching header */}
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
        className="relative z-10 px-4 pb-4 sm:px-6 sm:pb-6"
      >
        <div className="mx-auto w-full max-w-[1100px] rounded-3xl border border-white/25 bg-white/10 px-2 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xl sm:px-4 sm:py-4">
          <dl className="grid grid-cols-3 items-stretch">
            {HERO_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  "flex flex-col items-center justify-center px-3 py-4 text-center sm:px-6 sm:py-6",
                  i !== 0 ? "border-l border-white/15" : "",
                )}
              >
                <dt className="font-display text-[1.85rem] font-medium leading-none tracking-display text-white sm:text-[2.5rem] lg:text-[3rem]">
                  {stat.value}
                </dt>
                <dd className="mt-3 font-mono text-[0.66rem] uppercase tracking-marker text-white/80 sm:text-[0.74rem]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </section>
  );
}
