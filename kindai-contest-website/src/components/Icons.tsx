import React from "react";

type Props = { className?: string };

export function IconSpark({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 2l1.2 5.4L18 9l-4.8 1.6L12 16l-1.2-5.4L6 9l4.8-1.6L12 2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M5 14l.7 3.1L9 18l-3.3 1-0.7 3-0.7-3L1.9 18l3.1-.9L5 14z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCalendar({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M7 3v3M17 3v3M4.5 9.2h15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M6.5 6h11A3 3 0 0 1 20.5 9v10A3 3 0 0 1 17.5 22h-11A3 3 0 0 1 3.5 19V9A3 3 0 0 1 6.5 6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 12.2h3M7.5 15.6h3M13.5 12.2h3M13.5 15.6h3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconGlobe({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M2 12h20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 2c3 2.7 5 6.1 5 10s-2 7.3-5 10c-3-2.7-5-6.1-5-10s2-7.3 5-10z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconUser({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4 21a8 8 0 0 1 16 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconGavel({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M14.5 4.5l5 5-3 3-5-5 3-3zM10.5 8.5l5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M3 21h8M7.5 13.5l-4 4 3 3 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconTrophy({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M8 4h8v4a4 4 0 0 1-8 0V4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M6 6H4a2 2 0 0 0 2 4h1M18 6h2a2 2 0 0 1-2 4h-1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 12v4M9 20h6M10 16h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconMail({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M4.5 7.5h15v10h-15v-10z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M5.2 8.2l6.8 5.4 6.8-5.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
