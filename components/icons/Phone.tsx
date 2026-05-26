import { type SVGProps } from "react";

export function Phone(props: SVGProps<SVGSVGElement>) {
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
      <path d="M11.5 9.6v1.3a1 1 0 0 1-1.1 1 9.8 9.8 0 0 1-4.2-1.5 9.7 9.7 0 0 1-3-3A9.8 9.8 0 0 1 1.7 3.1a1 1 0 0 1 1-1.1H4a1 1 0 0 1 1 .9c.05.5.16 1 .31 1.4a1 1 0 0 1-.23 1.05l-.55.55a8 8 0 0 0 3 3l.55-.55a1 1 0 0 1 1.05-.23c.4.15.9.26 1.4.31a1 1 0 0 1 .87 1z" />
    </svg>
  );
}
