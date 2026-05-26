import { type ReactNode, createElement } from "react";
import { cn } from "@/lib/cn";

type EditorialHeadingProps = {
  as?: "h1" | "h2" | "h3";
  size?: "xl" | "lg" | "md";
  align?: "left" | "center";
  variant?: "light" | "dark";
  className?: string;
  id?: string;
  children: ReactNode;
};

const sizeStyles = {
  xl: "text-[2.85rem] leading-[1.02] sm:text-[4rem] md:text-[5rem] lg:text-[5.75rem]",
  lg: "text-[2.25rem] leading-[1.05] sm:text-[2.85rem] md:text-[3.5rem] lg:text-[4rem]",
  md: "text-[1.85rem] leading-[1.1] sm:text-[2.25rem] md:text-[2.75rem]",
};

export function EditorialHeading({
  as = "h2",
  size = "lg",
  align = "left",
  variant = "light",
  className,
  id,
  children,
}: EditorialHeadingProps) {
  return createElement(
    as,
    {
      id,
      className: cn(
        "font-display font-medium tracking-display",
        sizeStyles[size],
        align === "center" ? "text-center" : "text-left",
        variant === "dark" ? "text-white" : "text-ink",
        className,
      ),
    },
    children,
  );
}

type EmProps = { children: ReactNode };

export function Em({ children }: EmProps) {
  return (
    <em className="font-display italic text-accent-green/90 [font-variation-settings:'opsz'_144,'SOFT'_100]">
      {children}
    </em>
  );
}
