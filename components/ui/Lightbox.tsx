"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { Close } from "@/components/icons/Close";
import { ArrowRight } from "@/components/icons/ArrowRight";
import { cn } from "@/lib/cn";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import type { PortfolioItem } from "@/content/portfolio";

type LightboxProps = {
  items: PortfolioItem[];
  activeId: string | null;
  onClose: () => void;
  onNavigate: (nextId: string) => void;
};

export function Lightbox({ items, activeId, onClose, onNavigate }: LightboxProps) {
  const isOpen = activeId !== null;
  useLockBodyScroll(isOpen);

  const currentIndex = useMemo(
    () => items.findIndex((item) => item.id === activeId),
    [items, activeId],
  );
  const current = currentIndex >= 0 ? items[currentIndex] : null;

  const goPrev = useCallback(() => {
    if (currentIndex < 0) return;
    const prev = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prev].id);
  }, [currentIndex, items, onNavigate]);

  const goNext = useCallback(() => {
    if (currentIndex < 0) return;
    const next = (currentIndex + 1) % items.length;
    onNavigate(items[next].id);
  }, [currentIndex, items, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose, goNext, goPrev]);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`Powiększone zdjęcie: ${current.alt}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            aria-label="Zamknij podgląd"
            onClick={onClose}
            className="absolute inset-0 bg-deep/95 backdrop-blur-sm"
          />
          <motion.figure
            key={current.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-[1] flex max-h-[88vh] w-[min(94vw,1100px)] flex-col overflow-hidden rounded-2xl bg-deep shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-black sm:aspect-[16/10]">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="(min-width: 1280px) 1100px, 94vw"
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-6 py-4 text-white/90 sm:px-8 sm:py-5">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[0.72rem] uppercase tracking-marker text-accent-green">
                  Realizacja {current.index} / {String(items.length).padStart(2, "0")}
                </span>
                <span className="font-sans text-[0.95rem] font-medium text-white">
                  {current.room} · {current.city} · {current.pattern}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Poprzednia realizacja"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green"
                >
                  <ArrowRight className="rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Następna realizacja"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green"
                >
                  <ArrowRight />
                </button>
              </div>
            </figcaption>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Zamknij podgląd"
              className={cn(
                "absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-deep/60 text-white backdrop-blur",
                "transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green",
              )}
            >
              <Close />
            </button>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
