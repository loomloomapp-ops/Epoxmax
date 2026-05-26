"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EditorialHeading, Em } from "@/components/ui/EditorialHeading";
import { Reveal } from "@/components/ui/Reveal";
import { EFEKT_PHOTOS } from "@/content/trust";
import { cn } from "@/lib/cn";

const TESTIMONIALS = EFEKT_PHOTOS.slice(0, 3).map((photo, idx) => ({
  ...photo,
  status: idx === 0 ? "Premiera wkrótce" : "W przygotowaniu",
  quote:
    idx === 0
      ? "Po realizacji nagrywamy krótką rozmowę z klientem. Materiał trafi tutaj po finalnej akceptacji."
      : idx === 1
        ? "Wideo zbieramy podczas wizyty kontrolnej — tak, jak wygląda finalny efekt na żywo."
        : "Każdy materiał publikujemy dopiero wtedy, gdy klient zatwierdzi treść i kadry.",
}));

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
    </svg>
  );
}

function QuoteMark() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="h-7 w-7 text-accent-green"
    >
      <path
        d="M12 22c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-6c0-3.31 2.69-6 6-6v3a3 3 0 0 0-3 3h3c1.1 0 2 .9 2 2v4Zm14 0c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-6c0-3.31 2.69-6 6-6v3a3 3 0 0 0-3 3h3c1.1 0 2 .9 2 2v4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn(
        "h-5 w-5 transition-transform",
        direction === "left" ? "" : "rotate-180",
      )}
    >
      <path d="M14 6l-6 6 6 6" />
    </svg>
  );
}

export function TrustEfekty() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;

  const scrollToIndex = useCallback((idx: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const child = slider.children.item(idx) as HTMLElement | null;
    if (!child) return;
    slider.scrollTo({
      left: child.offsetLeft - slider.offsetLeft,
      behavior: "smooth",
    });
  }, []);

  // rAF-throttled scroll handler — avoids per-scroll-event re-renders that cause perceived jitter
  const handleScroll = useCallback(() => {
    if (rafRef.current != null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const slider = sliderRef.current;
      if (!slider) return;
      const center = slider.scrollLeft + slider.clientWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      Array.from(slider.children).forEach((node, i) => {
        const el = node as HTMLElement;
        const childCenter =
          el.offsetLeft - slider.offsetLeft + el.clientWidth / 2;
        const dist = Math.abs(childCenter - center);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActive((prev) => (prev === closest ? prev : closest));
    });
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="opinie"
      aria-labelledby="opinie-title"
      className="bg-canvas py-14 sm:py-16 lg:py-20"
    >
      <div className="container">
        {/* Section label */}
        <Reveal>
          <SectionLabel number="05" label="Opinie" />
        </Reveal>

        {/* Heading + description aligned on the same baseline */}
        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:items-end lg:gap-16">
          <Reveal delay={0.05} className="lg:col-span-7">
            <EditorialHeading
              as="h2"
              size="lg"
              id="opinie-title"
              className="max-w-[24ch]"
            >
              Pracujemy nad <Em>wideo-opiniami</Em> od klientów — bez wymyślonych recenzji.
            </EditorialHeading>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="max-w-[44ch] text-[1.02rem] leading-relaxed text-muted">
              Filmy zbieramy podczas wizyt u klientów po realizacji.
              Publikujemy je dopiero po pełnej akceptacji — wkrótce zastąpią
              poniższe materiały w przygotowaniu.
            </p>
          </Reveal>
        </div>

        {/* Slider wrapper — arrows on the sides, slider in the middle */}
        <div className="relative -mx-4 mt-14 sm:-mx-6 lg:mx-0 lg:mt-16">
          {/* Left arrow — mobile/tablet only */}
          <button
            type="button"
            onClick={() => scrollToIndex(Math.max(0, active - 1))}
            disabled={active === 0}
            aria-label="Poprzednia opinia"
            className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-hairline bg-surface/95 text-ink shadow-soft backdrop-blur-md transition disabled:cursor-not-allowed disabled:opacity-30 hover:border-ink/30 sm:left-5 lg:hidden"
          >
            <ArrowIcon direction="left" />
          </button>

          {/* Right arrow — mobile/tablet only */}
          <button
            type="button"
            onClick={() => scrollToIndex(Math.min(total - 1, active + 1))}
            disabled={active === total - 1}
            aria-label="Następna opinia"
            className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-hairline bg-surface/95 text-ink shadow-soft backdrop-blur-md transition disabled:cursor-not-allowed disabled:opacity-30 hover:border-ink/30 sm:right-5 lg:hidden"
          >
            <ArrowIcon direction="right" />
          </button>

          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex scroll-smooth snap-x snap-proximity gap-5 overflow-x-auto overscroll-x-contain px-4 pb-4 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-7 lg:overflow-visible lg:p-0"
          >
            {TESTIMONIALS.map((t, index) => (
              <Reveal
                key={t.id}
                delay={Math.min(index * 0.08, 0.24)}
                className="w-[88%] shrink-0 snap-center sm:w-[65%] lg:w-auto lg:shrink lg:snap-none"
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-4xl border border-hairline bg-surface shadow-soft transition-[transform,box-shadow,border-color] duration-500 ease-smooth hover:-translate-y-[2px] hover:border-ink/15 hover:shadow-soft-lift">
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={t.src}
                      alt={t.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className="object-cover transition-transform duration-[1100ms] ease-smooth group-hover:scale-[1.05]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-deep/60 via-deep/15 to-transparent"
                    />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-deep/55 px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-marker text-white/90 backdrop-blur-md">
                      <span aria-hidden="true" className="block h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent-green" />
                      {t.status}
                    </span>
                    <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-deep/45 text-white backdrop-blur-md transition-transform duration-500 ease-smooth group-hover:scale-110">
                      <PlayIcon />
                    </span>
                    <div className="absolute inset-x-4 bottom-4 flex items-baseline justify-between gap-3 text-white">
                      <span className="font-mono text-[0.66rem] uppercase tracking-marker text-accent-green">
                        {t.index} · {t.pattern}
                      </span>
                      <span className="font-mono text-[0.66rem] uppercase tracking-marker text-white/80">
                        {t.city}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-5 p-7 sm:p-8">
                    <QuoteMark />
                    <p className="font-display text-[1.15rem] italic leading-relaxed tracking-tighter text-ink sm:text-[1.3rem]">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-auto border-t border-hairline pt-4">
                      <p className="font-display text-[1.05rem] tracking-tighter text-ink sm:text-[1.15rem]">
                        Klient · {t.city}
                      </p>
                      <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-marker text-muted">
                        Realizacja · {t.caption}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Pagination dots — mobile/tablet only */}
        <div
          className="mt-6 flex items-center justify-center gap-2 lg:hidden"
          role="tablist"
          aria-label="Nawigacja po opiniach"
        >
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Pokaż opinię ${i + 1} z ${total}`}
              onClick={() => scrollToIndex(i)}
              className="group p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-full"
            >
              <span
                className={cn(
                  "block h-1.5 rounded-full transition-all duration-300 ease-smooth",
                  i === active
                    ? "w-7 bg-ink"
                    : "w-1.5 bg-ink/25 group-hover:bg-ink/45",
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
