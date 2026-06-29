// Sponsor recognition wall, grouped by tier. Ported verbatim from the
// prototype (which draws on "Sponsor Roster by Tier").
//
// Each sponsor carries an optional `logo` (a path under /public/sponsors/).
// When present, the wall renders the logo; sponsors without one (a handful of
// individuals, plus the in-kind donors) render as their name in text.
//
// ⚠️ OPEN ITEM: spell-check names against the official list before launch
// (e.g. "Huntsville Area Association of Realtors", "Edwards Custom Computers").

export type Sponsor = { name: string; logo?: string };

export const TITLE_SPONSOR: Sponsor = {
  name: "American Cabinets",
  logo: "/sponsors/american-cabinets.webp",
};

export const GOLD_SPONSORS: Sponsor[] = [
  { name: "Huntsville Area Association of Realtors", logo: "/sponsors/haar.png" },
  { name: "Dr. Dennis Sehgal — MDVIP", logo: "/sponsors/mdvip-sehgal.png" },
  { name: "Powerhouse Resources", logo: "/sponsors/powerhouse.png" },
];

// `person` is the individual behind the sponsoring business, shown as a small
// caption under the logo (e.g. Lisa Coleman is the named Food & Beverage sponsor).
export type SpecialtyTier = { label: string; name: string; logo?: string; person?: string };

export const SPECIALTY_SPONSORS: SpecialtyTier[] = [
  { label: "Awards Ceremony", name: "Five Star Painting", logo: "/sponsors/five-star-painting.jpg" },
  { label: "Food & Beverage", name: "Dream Key Realty", logo: "/sponsors/dream-key.png", person: "Lisa Coleman" },
  { label: "Driving Range", name: "Compass Design Studio", logo: "/sponsors/compass.png" },
];

// Hole-sign sponsors, de-duplicated against the higher tiers above.
// Individuals without a business logo are kept as name-only text.
export const HOLE_SPONSORS: Sponsor[] = [
  { name: "Redstone", logo: "/sponsors/redstone.png" },
  { name: "Vandy's Heating & Air", logo: "/sponsors/vandys.png" },
  { name: "Tyonek Native", logo: "/sponsors/tyonek.png" },
  { name: "RMD Consulting", logo: "/sponsors/rmd.png" },
  { name: "Inspiring Smiles", logo: "/sponsors/inspiring-smiles.png" },
  { name: "Silver Ivy Publications" },
  { name: "Hanu Karlapalem" },
  { name: "Winedown Club" },
  { name: "Bank Independent", logo: "/sponsors/bank-independent.png" },
  { name: "Edwards Custom Computers", logo: "/sponsors/eccr.png" },
  { name: "Inline Electric", logo: "/sponsors/inline.png" },
  { name: "Edward Jones", logo: "/sponsors/edward-jones.webp" },
  { name: "Lively Roofing", logo: "/sponsors/lively-roofing.svg" },
  { name: "Jared Sluss" },
  { name: "RISE Staffing", logo: "/sponsors/rise.png" },
  { name: "Wilson Lumber", logo: "/sponsors/wilson-lumber.png" },
  { name: "Wander Lens Photography", logo: "/sponsors/wander-lens.jpeg" },
  { name: "Erin Barnes – OWN Real Estate", logo: "/sponsors/own-real-estate.jpeg" },
  { name: "Lily Flagg Barber Shop", logo: "/sponsors/lily-flagg.png" },
  { name: "Iron Blade Barber", logo: "/sponsors/iron-blade.webp" },
  { name: "ACE Tree Service", logo: "/sponsors/ace-tree.webp" },
  { name: "LNW Cleaning", logo: "/sponsors/lnw.png" },
  { name: "Neels & Son", logo: "/sponsors/neels.png" },
  { name: "Freedom Financial", logo: "/sponsors/freedom-financial.jpg" },
  { name: "Attitude of Gratitude", logo: "/sponsors/attitude-gratitude.png" },
  { name: "Constant Solutions", logo: "/sponsors/constant-solutions.png" },
  { name: "Dorian Stewart", logo: "/sponsors/dorian-inspires.png" },
  { name: "Wild Birds Unlimited", logo: "/sponsors/wild-birds.jpg" },
  { name: "Cutco Knives", logo: "/sponsors/cutco.png" },
  { name: "Rocket City Mobile Health", logo: "/sponsors/rocket-city-mh.png" },
  { name: "Global World Wide Ops", logo: "/sponsors/global-wwo.png" },
  { name: "Unconditional MESH" },
  { name: "Jacqueline Doughty" },
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
