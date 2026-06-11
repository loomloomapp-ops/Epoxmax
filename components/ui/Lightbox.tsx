"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
};

export function Lightbox({ items, activeId, onClose }: LightboxProps) {
  const isOpen = activeId !== null;
  useLockBodyScroll(isOpen);

  const current = useMemo(
    () => items.find((item) => item.id === activeId) ?? null,
    [items, activeId],
  );
  const gallery = current?.gallery ?? [];
  const [photoIndex, setPhotoIndex] = useState(0);

  // Reset to the first photo whenever a different case is opened.
  useEffect(() => {
    setPhotoIndex(0);
  }, [activeId]);

  const goPrev = useCallback(() => {
    if (gallery.length === 0) return;
    setPhotoIndex((i) => (i - 1 + gallery.length) % gallery.length);
  }, [gallery.length]);

  const goNext = useCallback(() => {
    if (gallery.length === 0) return;
    setPhotoIndex((i) => (i + 1) % gallery.length);
  }, [gallery.length]);

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

  const activeSrc = gallery[photoIndex] ?? current?.src ?? "";

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Realizacja: ${current.title}`}
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
            className="relative z-[1] flex max-h-[92vh] w-[min(94vw,1100px)] flex-col overflow-hidden rounded-2xl bg-deep shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-black sm:aspect-[16/10]">
              <Image
                key={activeSrc}
                src={activeSrc}
                alt={current.alt}
                fill
                sizes="(min-width: 1280px) 1100px, 94vw"
                className="object-cover"
                priority
              />

              {gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Poprzednie zdjęcie"
                    className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-deep/55 text-white backdrop-blur-md transition hover:bg-deep/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green sm:left-4"
                  >
                    <ArrowRight className="rotate-180" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Następne zdjęcie"
                    className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-deep/55 text-white backdrop-blur-md transition hover:bg-deep/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green sm:right-4"
                  >
                    <ArrowRight />
                  </button>
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-deep/55 px-3 py-1 font-mono text-[0.66rem] uppercase tracking-marker text-white/90 backdrop-blur-md">
                    {photoIndex + 1} / {gallery.length}
                  </span>
                </>
              )}
            </div>

            <figcaption className="flex flex-col gap-4 border-t border-white/10 px-6 py-5 text-white/90 sm:px-8">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[0.72rem] uppercase tracking-marker text-accent-green">
                  Realizacja {current.index} · {current.tag}
                </span>
                <span className="font-display text-[1.3rem] leading-tight tracking-tighter text-white sm:text-[1.5rem]">
                  {current.title}
                </span>
                <p className="max-w-[65ch] text-[0.92rem] leading-relaxed text-white/70">
                  {current.description}
                </p>
              </div>

              {gallery.length > 1 && (
                <div className="flex gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {gallery.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setPhotoIndex(i)}
                      aria-label={`Pokaż zdjęcie ${i + 1}`}
                      aria-pressed={i === photoIndex}
                      className={cn(
                        "relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green sm:h-16 sm:w-24",
                        i === photoIndex
                          ? "border-accent-green"
                          : "border-white/15 opacity-60 hover:opacity-100",
                      )}
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
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
