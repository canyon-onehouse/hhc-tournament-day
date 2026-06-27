// Sponsor recognition wall, grouped by tier. Ported verbatim from the
// prototype (which draws on "Sponsor Roster by Tier").
//
// ⚠️ OPEN ITEM: spell-check names against the official list before launch
// (e.g. "Huntsville Area Association of Realtors", "Edwards Custom Computers").

export const TITLE_SPONSOR = "American Cabinets";

export const GOLD_SPONSORS = [
  "Huntsville Area Association of Realtors",
  "Dr. Dennis Sehgal — MDVIP",
  "Powerhouse Resources",
];

export type SpecialtyTier = { label: string; name: string };

export const SPECIALTY_SPONSORS: SpecialtyTier[] = [
  { label: "Awards Ceremony", name: "Five Star Painting" },
  { label: "Food & Beverage", name: "Lisa Coleman · Dream Key Realty" },
  { label: "Driving Range", name: "Compass Design Studio" },
];

// Hole-sign sponsors, de-duplicated against the higher tiers above.
export const HOLE_SPONSORS = [
  "Redstone",
  "Vandy's Heating & Air",
  "Tyonek Native",
  "RMD Consulting",
  "Inspiring Smiles",
  "Silver Ivy Publications",
  "Hanu Karlapalem",
  "Winedown Club",
  "Bank Independent",
  "Edwards Custom Computers",
  "Inline Electric",
  "Edward Jones",
  "Lively Roofing",
  "Jared Sluss",
  "RISE Staffing",
  "Wilson Lumber",
  "Wander Lens Photography",
  "Erin Barnes – OWN Real Estate",
  "Lily Flagg Barber Shop",
  "Iron Blade Barber",
  "ACE Tree Service",
  "LNW Cleaning",
  "Neels & Son",
  "Freedom Financial",
  "Attitude of Gratitude",
  "Constant Solutions",
  "Dorian Stewart",
  "Wild Birds Unlimited",
  "Cutco Knives",
  "Rocket City Mobile Health",
  "Global World Wide Ops",
  "Unconditional MESH",
  "Jacqueline Doughty",
];

export const IN_KIND_DONORS = [
  "International Wines & Spirits",
  "Rocket City Trash Pandas",
  "Olive Garden",
  "Costco",
  "Home Depot",
  "Halsey",
  "Buffalo Rock",
];
