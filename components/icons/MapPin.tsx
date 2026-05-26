import { type SVGProps } from "react";

export function MapPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M11 6.2c0 3-4 6.4-4 6.4S3 9.2 3 6.2a4 4 0 1 1 8 0z" />
      <circle cx="7" cy="6.1" r="1.4" />
    </svg>
  );
}
