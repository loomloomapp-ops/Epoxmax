"use client";

import { useEffect, useState } from "react";

type Options = {
  threshold?: number;
  topAffix?: number;
};

export function useHideOnScroll(options: Options = {}) {
  const { threshold = 80, topAffix = 40 } = options;
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastY;

        setScrolled(currentY > topAffix);

        if (currentY < threshold) {
          setHidden(false);
        } else if (delta > 6) {
          setHidden(true);
        } else if (delta < -6) {
          setHidden(false);
        }

        lastY = currentY;
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, topAffix]);

  return { hidden, scrolled };
}
