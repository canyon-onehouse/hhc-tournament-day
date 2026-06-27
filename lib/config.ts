// Single source of truth for event facts, external links, and contacts.
// These are the PRODUCTION values carried over verbatim from the prototype.
// To change any URL or number for the live site, edit it here.

export const EVENT = {
  name: "Huntsville Hope Classic",
  beneficiary: "The One House Project",
  host: "Bo Matthews",
  dateLong: "Monday, June 29, 2026",
  dateShort: "Mon, June 29",
  microBanner: "MON, JUNE 29 · 10AM",
  venue: "Canebrake Club",
  address: "23015 Founders Cir, Athens, AL 35613",
  format: "4-Person Scramble",
  start: "10:00 AM Shotgun",
  timeZone: "America/Chicago", // Athens, AL is US Central
} as const;

export const CONTACTS = {
  canyon: { name: "Canyon Browning", short: "Canyon", phone: "830-708-2317", tel: "8307082317" },
  oneHouse: { name: "One House Project", short: "One House", phone: "256-871-4111", tel: "2568714111" },
  // Day-of volunteer staff line-up
  chris: { name: "Chris", phone: "931-675-9716", tel: "9316759716" },
  kenesha: { name: "Kenesha", phone: "256-527-2026", tel: "2565272026" },
  allison: { name: "Allison", phone: "608-293-1778", tel: "6082931778" },
} as const;

export const LINKS = {
  give: "https://givebutter.com/hhc-tournament-day",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=Canebrake%20Club%2C%2023015%20Founders%20Cir%2C%20Athens%2C%20AL%2035613",
  calendar:
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Huntsville%20Hope%20Classic&dates=20260629T140000Z/20260629T210000Z&location=Canebrake%20Club%2C%2023015%20Founders%20Cir%2C%20Athens%2C%20AL%2035613&details=You're%20confirmed%20for%20the%20Huntsville%20Hope%20Classic%2C%20benefiting%20The%20One%20House%20Project.",
  instagram: "https://www.instagram.com/theonehouseproject/",
  facebook: "https://www.facebook.com/profile.php?id=61582913517584",
  youtube: "https://www.youtube.com/@theonehouseproject",
  website: "https://onehouseproject.com",
} as const;
