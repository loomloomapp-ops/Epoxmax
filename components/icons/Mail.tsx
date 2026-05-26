import { type SVGProps } from "react";

export function Mail(props: SVGProps<SVGSVGElement>) {
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
      <rect x="2" y="3" width="10" height="8" rx="1.2" />
      <path d="M2.4 3.6 7 7.4l4.6-3.8" />
    </svg>
  );
}
