"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowUpRight } from "@/components/icons/ArrowUpRight";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withIcon?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseStyles =
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-medium tracking-[-0.005em] transition-[transform,background,color,border-color] duration-300 ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:opacity-60 disabled:pointer-events-none active:scale-[0.98] select-none";

const sizeStyles: Record<Size, string> = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-[3.25rem] px-6 text-[0.9375rem] md:text-base",
};

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent-blue text-white shadow-[0_8px_24px_-12px_rgba(31,92,139,0.55)] hover:bg-accent-blue-hover",
  secondary:
    "bg-ink text-white shadow-[0_8px_24px_-12px_rgba(17,24,39,0.4)] hover:bg-deep",
  ghost:
    "bg-transparent text-ink hover:bg-ink/[0.04] border border-hairline",
  dark:
    "bg-white/10 text-white border border-white/15 hover:bg-white/15 backdrop-blur-sm",
};

function IconChip({ variant }: { variant: Variant }) {
  const chip =
    variant === "ghost"
      ? "bg-ink/[0.06] text-ink group-hover:bg-accent-green/15 group-hover:text-accent-green"
      : "bg-white/15 text-white group-hover:bg-white/25";
  return (
    <span
      aria-hidden="true"
      className={cn(
        "ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full transition-[background,transform,color] duration-300 ease-smooth group-hover:translate-x-[2px] group-hover:-translate-y-[1px]",
        chip,
      )}
    >
      <ArrowUpRight />
    </span>
  );
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(props, ref) {
    const {
      variant = "primary",
      size = "md",
      withIcon = true,
      fullWidth = false,
      children,
      className,
      ...rest
    } = props as ButtonProps & { className?: string };

    const classes = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      fullWidth && "w-full",
      className,
    );

    const content = (
      <>
        <span className="whitespace-nowrap leading-none">{children}</span>
        {withIcon && <IconChip variant={variant} />}
      </>
    );

    if ("href" in props && props.href) {
      const { href, target, rel, onClick } = props;
      const isExternal = href.startsWith("http");
      const finalRel = isExternal ? rel ?? "noopener noreferrer" : rel;
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={finalRel}
          onClick={onClick}
          className={classes}
        >
          {content}
        </Link>
      );
    }

    const { type, ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type ?? "button"}
        className={classes}
        {...buttonRest}
      >
        {content}
      </button>
    );
  },
);
