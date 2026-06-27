// 18-hole reference: par, yardage, hole sponsors (two per hole), and the
// on-course activity. Ported verbatim from the prototype.
//
// ⚠️ OPEN ITEM: hole-sponsor assignments were still being revised at
// prototype time. Confirm these pairings against the final spreadsheet
// before launch (a few differ from the early content briefs).

export type HoleSeed = {
  h: string;
  p: number; // par
  y: number; // yards
  s: string; // sponsors, " · "-separated (two per hole)
  a: string; // activity, or "—" for open play
};

export type Hole = {
  h: string;
  par: string;
  yards: string;
  sponsors: string[];
  activity: string;
  hasActivity: boolean;
};

const SEED: HoleSeed[] = [
  { h: "1", p: 4, y: 410, s: "Redstone · Vandy's Heating & Air", a: "Poker Card Challenge" },
  { h: "2", p: 5, y: 525, s: "Tyonek Native · RMD Consulting", a: "Double or Nothing · Drive" },
  { h: "3", p: 3, y: 175, s: "Inspiring Smiles · Silver Ivy Publications", a: "Closest to the Pin" },
  { h: "4", p: 4, y: 395, s: "Hanu Karlapalem · Winedown Club", a: "Poker Card Challenge" },
  { h: "5", p: 4, y: 440, s: "Inline Electric · Edward Jones", a: "—" },
  { h: "6", p: 4, y: 360, s: "Bank Independent · Edwards Custom Computers", a: "Poker Card Challenge" },
  { h: "7", p: 5, y: 540, s: "Lively Roofing · Jared Sluss", a: "PowerShot" },
  { h: "8", p: 3, y: 165, s: "RISE Staffing · Wilson Lumber", a: "Spin the Wheel" },
  { h: "9", p: 4, y: 420, s: "Wander Lens Photography · Erin Barnes – OWN Real Estate", a: "—" },
  { h: "10", p: 4, y: 405, s: "Dennis Sehgal · Lily Flagg Barber Shop", a: "—" },
  { h: "11", p: 4, y: 385, s: "Iron Blade Barber · ACE Tree Service", a: "Poker Card Challenge" },
  { h: "12", p: 5, y: 510, s: "LNW Cleaning · Neels & Son", a: "—" },
  { h: "13", p: 4, y: 430, s: "Five Star Painting · Freedom Financial", a: "—" },
  { h: "14", p: 3, y: 190, s: "Global WWO · Constant Solutions", a: "Poker Card Challenge" },
  { h: "15", p: 4, y: 415, s: "Dorian Stewart · Wild Birds Unlimited", a: "—" },
  { h: "16", p: 4, y: 370, s: "Cutco Knives · Rocket City Mobile Health", a: "Poker Card Challenge" },
  { h: "17", p: 3, y: 180, s: "Attitude of Gratitude · Unconditional MESH", a: "Double or Nothing · Pin" },
  { h: "18", p: 5, y: 545, s: "Jacqueline Doughty · Powerhouse Resources", a: "Longest Drive" },
];

function mapHole(row: HoleSeed): Hole {
  return {
    h: row.h,
    par: `Par ${row.p}`,
    yards: `${row.y.toLocaleString()} yds`,
    sponsors: row.s.split(" · "),
    activity: row.a,
    hasActivity: row.a !== "—",
  };
}

export const COURSE_FRONT: Hole[] = SEED.slice(0, 9).map(mapHole);
export const COURSE_BACK: Hole[] = SEED.slice(9).map(mapHole);

export const COURSE_STATS = { holes: "18", par: "72", yards: "6,860" } as const;
export const NINE_STATS = "Par 36 · 3,430 yds";
export const POKER_HOLES_NOTE =
  "The Poker Card Challenge spans holes 1, 4, 6, 11, 14, and 16 — collect a card at each.";
