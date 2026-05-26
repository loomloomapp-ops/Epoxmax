import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  ariaLabel?: string;
};

/**
 * Stylized SVG outline of Poland used as decorative element in footer and Benefits.
 * Coords are simplified and stylized, not geographically precise.
 */
export function PolandMap({
  className,
  ariaLabel = "Mapa Polski — obsługujemy cały kraj",
}: Props) {
  return (
    <svg
      viewBox="0 0 320 240"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
      strokeLinecap="round"
      role="img"
      aria-label={ariaLabel}
      className={cn("text-current", className)}
    >
      <path
        d="M28 124 L40 102 L36 84 L52 70 L74 56 L96 50 L118 44 L142 38 L168 36 L192 38 L218 44 L238 54 L256 64 L274 78 L286 96 L292 116 L286 132 L292 146 L286 162 L268 176 L250 184 L230 190 L210 194 L184 200 L160 204 L138 200 L116 196 L94 192 L74 186 L56 176 L40 162 L30 146 Z"
        fill="rgba(63, 125, 90, 0.08)"
      />
      <circle cx="178" cy="94" r="3" fill="currentColor" />
      <circle cx="124" cy="120" r="3" fill="currentColor" />
      <circle cx="208" cy="138" r="3" fill="currentColor" />
      <circle cx="246" cy="110" r="3" fill="currentColor" />
      <circle cx="148" cy="170" r="3" fill="currentColor" />
      <circle cx="92" cy="150" r="3" fill="currentColor" />
      <circle cx="220" cy="180" r="3" fill="currentColor" />
    </svg>
  );
}
