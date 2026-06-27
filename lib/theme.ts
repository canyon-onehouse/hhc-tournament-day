// Design tokens ported verbatim from the Claude Design prototype
// (Hope Classic - Day-of Site). Colors are the exact RGB values used there.

export const C = {
  green: "rgb(29,58,35)", // primary dark green — text, dark sections, cards
  navy: "rgb(15,31,20)", // deep navy — densest dark backgrounds
  cream: "rgb(247,243,230)", // page background / text on dark
  card: "rgb(251,249,241)", // light card background
  gold: "rgb(201,168,76)", // gold accent — CTAs, highlights, italics
  gold2: "rgb(169,149,96)", // muted gold — secondary accents, labels
  border: "rgb(212,201,168)", // tan border / divider
  border2: "rgb(229,220,198)", // subtle inner divider (schedule/hole rows)
  gray: "rgb(107,107,94)", // body gray
  brown: "rgb(110,90,46)", // very muted label brown
  greenGray: "rgb(107,122,107)", // muted "open play" text
  amber: "rgb(255,172,70)", // warm italic accent line
} as const;

// Font-family stacks resolve to the CSS variables set by next/font in layout.tsx.
export const F = {
  display: "var(--font-playfair), Georgia, serif", // Playfair Display
  body: "var(--font-lora), Georgia, serif", // Lora
  label: "var(--font-poppins), system-ui, sans-serif", // Poppins
} as const;
