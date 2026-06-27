# Huntsville Hope Classic — Day-of Site

A mobile-first web app used **on the day of** the Huntsville Hope Classic charity
golf tournament (Monday, June 29, 2026 · Canebrake Club, Athens, AL), benefiting
The One House Project. It tells every audience — players, special guests,
sponsors, volunteers — when to arrive, where to go, how the day flows, and who to
call, then drills into each audience's specifics.

This is **not** the public marketing/registration site
(`onehouseproject.com/golf`); it's the "here's exactly what to do on Monday" site
for already-confirmed participants.

Built from a high-fidelity Claude Design prototype as the visual + content spec.

## Stack

- **Next.js (App Router) + React + TypeScript**, deployed on **Vercel**
- Self-hosted fonts via `next/font` (Playfair Display, Lora, Poppins) and
  self-hosted Phosphor icons (`@phosphor-icons/react`) — **no runtime CDN**, so it
  stays fast and reliable on flaky day-of connections
- A light **PWA**: installable (web manifest + icons) with a service worker that
  caches the app shell so visited/precached pages load offline
- Live "Up Next / Now" status and the per-audience schedule highlight are pinned
  to **US Central time** (the event's timezone), independent of the device clock

## Routes

| Route | Page |
|-------|------|
| `/` | Home — essentials, audience router, directions, schedule, mission, contact |
| `/players` | Players & Teams — activities, prizes, the Buy-In link |
| `/special-guests` | Special Guests — Bo's welcome, your role |
| `/sponsors` | Sponsors — arrival/last-call, provided vs. bring, maximize value |
| `/volunteers` | Volunteers — 8:30 meeting, what to bring/do, team contacts |
| `/sponsors-wall` | Our Sponsors — recognition wall by tier |
| `/course` | Hole-by-Hole — par/yardage/sponsors/activity for all 18 |
| `/faq` | Day-of FAQ |

Home and the four audience pages share a "Core" block (Directions, Schedule,
Contact — plus Mission on Home). Each audience page highlights its own arrival row
on the schedule.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (typecheck + static export of all routes)
npm run start    # serve the production build
npm run lint
```

## Content & configuration

All copy and data are ported verbatim from the prototype and live in typed,
editable modules under `lib/`:

- `lib/config.ts` — event facts, **all external links** (Givebutter, Google Maps,
  Add-to-Calendar), phone numbers, socials. Change any URL/number here.
- `lib/schedule.ts` — master schedule + per-audience arrival times + live-status logic
- `lib/holes.ts` — the 18-hole reference table
- `lib/sponsors.ts` — recognition wall by tier
- `lib/activities.ts` — players activities/prizes
- `lib/faq.ts` — FAQ items
- `lib/theme.ts` — color + font tokens

Set `NEXT_PUBLIC_SITE_URL` to the final domain (used for canonical/OG URLs,
`robots.txt`, and `sitemap.xml`); without it we fall back to the Vercel-provided
URL.

## Deploy (Vercel)

Import the repo into Vercel — it's a standard Next.js app, no special config
needed. Set `NEXT_PUBLIC_SITE_URL` to the production domain once connected.

## ⚠️ Confirm before launch (carried over from the planning docs)

These values come straight from the prototype and were flagged as still-in-flux:

1. **Hole-sponsor assignments** (`lib/holes.ts`) — a few pairings were being
   revised; verify against the final spreadsheet (e.g. holes 5/6, hole 14
   "Global WWO", hole 17 "Attitude of Gratitude · Unconditional MESH").
2. **Sponsor-name spelling** (`lib/sponsors.ts`) against the official list.
3. **Lunch wording** — the schedule/FAQ say "Lunch in the clubhouse" (prototype);
   the original Core brief said "veranda." Using the prototype's wording.
4. **Givebutter handle + social URLs** (`lib/config.ts`) — confirmed as production
   values; left as-is.
