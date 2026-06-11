"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EditorialHeading, Em } from "@/components/ui/EditorialHeading";
import { FilterChip } from "@/components/ui/FilterChip";
import { Lightbox } from "@/components/ui/Lightbox";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ProjectLink } from "@/components/ui/ProjectLink";
import { ArrowUpRight } from "@/components/icons/ArrowUpRight";
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_ITEMS,
  type PortfolioCategory,
} from "@/content/portfolio";
import { usePopupForm } from "@/hooks/usePopupForm";
import { Events } from "@/lib/analytics";
import { cn } from "@/lib/cn";

type ActiveCategory = PortfolioCategory | "all";

// Two-row Luzen rhythm:
// row N even → wide-left (7) + narrow-right (5)
// row N odd  → narrow-left (5) + wide-right (7)
function spanFor(index: number) {
  const rowIndex = Math.floor(index / 2);
  const colInRow = index % 2;
  // even row: 7 | 5, odd row: 5 | 7
  const wideIsFirst = rowIndex % 2 === 0;
  if (colInRow === 0) return wideIsFirst ? "wide" : "narrow";
  return wideIsFirst ? "narrow" : "wide";
}

export function Portfolio() {
  const [active, setActive] = useState<ActiveCategory>("all");
  const [lightboxId, setLightboxId] = useState<string | null>(null);
  const prefersReduced = useReducedMotion();
  const popup = usePopupForm();

  const items = useMemo(() => {
    return active === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === active);
  }, [active]);

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="relative bg-canvas py-14 sm:py-16 lg:py-20"
    >
      <div className="container">
        {/* Mobile: SectionLabel above heading; desktop: SectionLabel in the right corner aligned to heading */}
        <Reveal className="lg:hidden">
          <SectionLabel number="01" label="Realizacje" />
        </Reveal>

        <div className="mt-6 grid gap-8 sm:mt-10 lg:mt-0 lg:grid-cols-12 lg:items-start lg:gap-16">
          <Reveal className="lg:col-span-9 lg:order-1">
            <EditorialHeading
              as="h2"
              size="lg"
              id="portfolio-title"
              className="max-w-[20ch]"
            >
              Realizacje i wzory, które <Em>zmieniają</Em> charakter wnętrza
            </EditorialHeading>
          </Reveal>
          <Reveal className="hidden lg:order-2 lg:col-span-3 lg:flex lg:justify-end">
            <SectionLabel number="01" label="Realizacje" />
          </Reveal>
        </div>

        {/* Description + (desktop-only) CTA row */}
        <div className="mt-8 grid gap-6 lg:mt-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal delay={0.05} className="lg:col-span-7">
            <p className="max-w-[58ch] text-[1.05rem] leading-relaxed text-muted">
              Wybrane realizacje dekoracyjnych paneli — od sypialni i kuchni po
              przestrzenie specjalne. Każdy projekt to indywidualne, autorskie
              wykonanie według pomysłu klienta, w prestiżowym wydaniu premium.
            </p>
          </Reveal>
          <Reveal
            delay={0.1}
            className="hidden lg:col-span-5 lg:block lg:justify-self-end"
          >
            <Button
              href="/#kontakt"
              variant="primary"
              size="lg"
              onClick={() => Events.ctaClicked("portfolio-header")}
            >
              Zamów wycenę
            </Button>
          </Reveal>
        </div>

        {/* Filter chips */}
        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap gap-2 sm:mt-16">
            {PORTFOLIO_CATEGORIES.map((category) => (
              <FilterChip
                key={category.id}
                active={active === category.id}
                onClick={() => setActive(category.id as ActiveCategory)}
              >
                {category.label}
              </FilterChip>
            ))}
          </div>
        </Reveal>

        {/* Asymmetric paired grid — constant widths, same aspects per width type */}
        <motion.div
          className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-12 lg:mt-12 lg:grid-cols-12 lg:gap-y-14"
        >
          {items.map((item, index) => {
            const variant = spanFor(index);
            const colSpan =
              variant === "wide" ? "lg:col-span-7" : "lg:col-span-5";
            const aspect =
              variant === "wide"
                ? "aspect-[4/3] lg:aspect-[4/3]"
                : "aspect-[4/5] lg:aspect-[4/5]";

            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setLightboxId(item.id)}
                style={{ top: `${100 + (index % items.length) * 22}px` }}
                className={cn(
                  "group flex flex-col text-left will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-4 focus-visible:ring-offset-canvas",
                  "sticky lg:!static lg:!top-auto",
                  colSpan,
                )}
                initial={prefersReduced ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                aria-label={`Otwórz powiększenie: ${item.alt}`}
              >
                <div
                  className={cn(
                    "relative w-full overflow-hidden rounded-4xl bg-surface shadow-soft",
                    aspect,
                  )}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1100ms] ease-smooth group-hover:scale-[1.05]"
                  />
                  {/* Mobile: strong bottom scrim keeps overlay caption legible; desktop stays subtle */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-deep/75 via-deep/15 to-transparent lg:from-deep/30 lg:via-transparent lg:transition-opacity lg:duration-500"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-deep/45 text-white opacity-0 backdrop-blur-md transition-all duration-500 ease-smooth group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:opacity-100"
                  >
                    <ArrowUpRight />
                  </span>

                  {/* Mobile caption overlaid on the photo — keeps the sticky stack visually seamless */}
                  <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 lg:hidden">
                    <div className="flex min-w-0 flex-col items-start gap-2 leading-tight">
                      <span className="inline-flex w-fit items-center whitespace-nowrap rounded-full border border-white/20 bg-deep/65 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-marker text-[#A4D9B7] backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                        {item.index} · {item.tag}
                      </span>
                      <span className="truncate font-display text-[1.15rem] tracking-tighter text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)] sm:text-[1.3rem]">
                        {item.title}
                      </span>
                    </div>
                    <span className="shrink-0 whitespace-nowrap rounded-full border border-white/20 bg-deep/65 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-marker text-white backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                      Zobacz →
                    </span>
                  </div>
                </div>

                {/* Desktop caption — under the photo (hidden on mobile to keep the stack clean) */}
                <div className="mt-6 hidden items-baseline justify-between gap-6 lg:flex">
                  <div className="flex flex-col leading-tight">
                    <span className="font-mono text-[0.7rem] uppercase tracking-marker text-accent-green">
                      {item.index} · {item.tag}
                    </span>
                    <span className="mt-2 font-display text-[1.3rem] tracking-tighter text-ink sm:text-[1.55rem]">
                      {item.title}
                    </span>
                  </div>
                  <ProjectLink>Zobacz realizację</ProjectLink>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Mobile-only CTA — directly under the images */}
        <Reveal className="mt-10 lg:hidden">
          <Button
            href="/#kontakt"
            variant="primary"
            size="lg"
            fullWidth
            onClick={() => Events.ctaClicked("portfolio-mobile-cta")}
          >
            Zamów wycenę
          </Button>
        </Reveal>

        {/* Hint / mid CTA */}
        <Reveal delay={0.05}>
          <div className="mt-14 flex flex-col items-start gap-5 rounded-4xl border border-hairline bg-surface p-7 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="max-w-xl">
              <p className="font-mono text-[0.72rem] uppercase tracking-marker text-accent-green">
                Twój projekt
              </p>
              <h3 className="mt-2 font-display text-[1.5rem] leading-snug tracking-tighter text-ink sm:text-[1.85rem]">
                Masz własny pomysł na wzór? Zrealizujemy go u Ciebie.
              </h3>
            </div>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                Events.ctaClicked("portfolio");
                popup.open("portfolio");
              }}
            >
              Zamów wycenę
            </Button>
          </div>
        </Reveal>
      </div>

      <Lightbox
        items={items}
        activeId={lightboxId}
        onClose={() => setLightboxId(null)}
      />
    </section>
  );
}
