"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/cn";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** Strength of vertical parallax in px. Default 60. */
  strength?: number;
  /** Optional dark scrim from bottom for overlay text. */
  scrim?: "none" | "light" | "strong";
  rounded?: string;
};

/**
 * Luzen .img-appear / .img-parallax wrapper.
 * - Holds the image inside a rounded frame
 * - Scroll-driven parallax (transform-only, GPU safe)
 * - Optional vertical scrim
 */
export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  sizes,
  priority,
  strength = 60,
  scrim = "none",
  rounded = "rounded-4xl",
}: ParallaxImageProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  const scrimClass =
    scrim === "strong"
      ? "bg-gradient-to-t from-deep/70 via-deep/15 to-transparent"
      : scrim === "light"
        ? "bg-gradient-to-t from-deep/40 via-transparent to-transparent"
        : "";

  return (
    <div
      ref={ref}
      className={cn(
        "relative isolate w-full overflow-hidden bg-surface",
        rounded,
        className,
      )}
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={prefersReduced ? undefined : { y }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes ?? "(min-width: 1024px) 50vw, 100vw"}
          priority={priority}
          className={cn(
            "object-cover scale-[1.12]",
            imgClassName,
          )}
        />
      </motion.div>
      {scrim !== "none" && (
        <div
          aria-hidden="true"
          className={cn("pointer-events-none absolute inset-0", scrimClass)}
        />
      )}
    </div>
  );
}
