"use client";

// Thin wrapper over @phosphor-icons/react so the rest of the app can use
// icons by the same names the prototype used (the `ph ph-*` classes), and so
// server components can render them as a client island without importing the
// icon library (which initializes React context at module load).

import {
  CaretDown,
  PhoneCall,
  Heart,
  NavigationArrow,
  X,
  FlagPennant,
  Warning,
  DeviceMobile,
  Sneaker,
  Sun,
  TShirt,
  Plus,
  Minus,
  HandTap,
  InstagramLogo,
  FacebookLogo,
  YoutubeLogo,
  Globe,
  type Icon as PhosphorIcon,
} from "@phosphor-icons/react";

const ICONS = {
  "caret-down": CaretDown,
  "phone-call": PhoneCall,
  heart: Heart,
  "navigation-arrow": NavigationArrow,
  x: X,
  "flag-pennant": FlagPennant,
  warning: Warning,
  "device-mobile": DeviceMobile,
  sneaker: Sneaker,
  sun: Sun,
  "t-shirt": TShirt,
  plus: Plus,
  minus: Minus,
  "hand-tap": HandTap,
  "instagram-logo": InstagramLogo,
  "facebook-logo": FacebookLogo,
  "youtube-logo": YoutubeLogo,
  globe: Globe,
} satisfies Record<string, PhosphorIcon>;

export type IconName = keyof typeof ICONS;

export function Icon({
  name,
  size = 18,
  color,
  weight = "regular",
  style,
}: {
  name: IconName;
  size?: number;
  color?: string;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  style?: React.CSSProperties;
}) {
  const Cmp = ICONS[name];
  return <Cmp size={size} color={color} weight={weight} style={style} aria-hidden />;
}
