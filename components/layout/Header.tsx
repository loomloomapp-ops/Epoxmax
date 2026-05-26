"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Menu } from "@/components/icons/Menu";
import { useHideOnScroll } from "@/hooks/useHideOnScroll";
import { cn } from "@/lib/cn";
import { BRAND, NAV_ITEMS } from "@/content/nav";
import { Events } from "@/lib/analytics";

export function Header() {
  const { hidden, scrolled } = useHideOnScroll({ threshold: 80, topAffix: 32 });
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  return (
    <>
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-[70] flex w-full justify-center px-4 sm:px-6",
        )}
        initial={false}
        animate={{ y: !prefersReduced && hidden ? -120 : 0 }}
        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
      >
        <div
          className={cn(
            "flex h-[58px] w-full max-w-[1100px] items-center justify-between gap-3 rounded-b-2xl border-x border-b px-3 pr-3 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition-[background-color,border-color,box-shadow] duration-400 ease-smooth sm:h-16 sm:px-4 sm:pr-4",
            scrolled
              ? "border-white/15 bg-deep/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_12px_30px_-12px_rgba(17,24,39,0.25)]"
              : "border-white/25 bg-white/10",
          )}
        >
          <Link
            href="/#start"
            className="flex items-center gap-2 pl-3 pr-2 font-display text-[1.15rem] font-medium tracking-tighter text-white sm:text-[1.25rem]"
          >
            <span
              aria-hidden="true"
              className="block h-2 w-2 rounded-full bg-accent-green"
            />
            <span>{BRAND.name}</span>
          </Link>

          <nav
            aria-label="Główna nawigacja"
            className="hidden lg:flex lg:items-center lg:gap-1"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 font-sans text-[0.9rem] text-white/85 transition-colors duration-300 hover:bg-white/15 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <Button
                href="/#kontakt"
                variant="primary"
                size="md"
                onClick={() => Events.ctaClicked("header")}
              >
                Zamów konsultację
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Otwórz menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:border-white/40 hover:bg-white/20 lg:hidden"
            >
              <Menu />
            </button>
          </div>
        </div>
      </motion.header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
