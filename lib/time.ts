import { EVENT } from "./config";

// Minutes since midnight in the event's local timezone (US Central),
// independent of the viewer's device timezone. Used by the live status bar
// and schedule highlight so they're correct for out-of-town viewers too.
export function nowMinutesCentral(date: Date = new Date()): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: EVENT.timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
  // Intl renders "24" for midnight in some runtimes; normalize to 0.
  return (hour % 24) * 60 + minute;
}
