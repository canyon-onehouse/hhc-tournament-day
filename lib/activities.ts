// Players & Teams: on-course activities and prizes. Copy ported verbatim
// from the prototype. The bespoke "featured" cards (Champion Package, 50/50,
// Mulligans) live in the page; the repeatable game cards and prize tags are
// data here so they're easy to edit.

export const CHAMPION = {
  price: "$150",
  unit: " / team",
  title: "Champion Package",
  blurb: "The one upgrade every team wants — it turns a good round into a winning one.",
  includes: ["2 Mulligans", "Red Tee Advantage", "12 Drink Tickets"],
  exclusiveInto: ["Closest to the Pin · Hole 3", "Longest Drive · Hole 18"],
} as const;

export type GameCard = {
  tag: string;
  price: string;
  title: string;
  desc: string;
  footLabel: string;
  footText: string;
  footPrice?: string;
};

export const GAME_CARDS: GameCard[] = [
  {
    tag: "Hole 7",
    price: "$50",
    title: "PowerShot",
    desc: "Advance one player to the Red tee for a ~150-yard edge off the tee.",
    footLabel: "Add-On · NFL PowerShot",
    footText: "An NFL pro tees off from the Red tee too — keep the better ball.",
    footPrice: "+$50",
  },
  {
    tag: "Hole 8",
    price: "$10",
    title: "Spin the Wheel",
    desc: "12 slots — a shot at an auto hole-in-one, an auto birdie, wine, gift cards, or a miss.",
    footLabel: "Good to Know",
    footText: "Keep your final spin — and a chance at the prize table.",
  },
  {
    tag: "Hole 2 · vs Pro",
    price: "$5 → $10",
    title: "Double or Nothing · Drive",
    desc: "Out-drive an NFL pro off the tee. Beat them and your money doubles.",
    footLabel: "Miss?",
    footText: "Your $5 becomes a donation.",
  },
  {
    tag: "Hole 17 · vs Pro",
    price: "$5 → $10",
    title: "Double or Nothing · Pin",
    desc: "Beat an NFL pro at closest-to-the-pin. Land it closer and your money doubles.",
    footLabel: "Miss?",
    footText: "Your $5 becomes a donation.",
  },
];

export const PRIZE_TABLE_WINS = [
  "Poker — pair or better",
  "Closest to the Pin",
  "Longest Drive",
  "Spin the Wheel",
  "Champion Package raffle",
];
