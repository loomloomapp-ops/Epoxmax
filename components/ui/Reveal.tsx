"use client";

import { motion, type Variants, useReducedMotion } from "framer-motion";
import { type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "section" | "article" | "li" | "header" | "footer";
  y?: number;
  once?: boolean;
};

const buildVariants = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0 },
});

export function Reveal({
  children,
  delay = 0,
  className,
  style,
  as = "div",
  y = 24,
  once = true,
}: RevealProps) {
  const prefersReduced = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;
  if (prefersReduced) {
    const StaticTag = as as keyof JSX.IntrinsicElements;
    return (
      <StaticTag className={className} style={style}>
        {children}
      </StaticTag>
    );
  }
  return (
    <MotionTag
      className={cn(className)}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={buildVariants(y)}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
    >
      {children}
    </MotionTag>
  );
}
