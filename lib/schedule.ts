// Master day-of schedule + the per-audience arrival times.
// `t` = minutes since midnight (Central), used to compute the live "NOW" row
// and the next-up status. Ported verbatim from the prototype.

export type ScheduleEvent = {
  t: number;
  time: string;
  ev: string;
};

export const SCHEDULE: ScheduleEvent[] = [
  { t: 480, time: "8:00 AM", ev: "Volunteers arrive" },
  { t: 510, time: "8:30 AM", ev: "Staff & volunteer meeting" },
  { t: 525, time: "8:45 AM", ev: "Hole sponsors arrive" },
  { t: 540, time: "9:00 AM", ev: "Registration opens — players & guests" },
  { t: 570, time: "9:30 AM", ev: "Last call for hole sponsors" },
  { t: 585, time: "9:45 AM", ev: "Opening ceremonies — lot by 18th green" },
  { t: 600, time: "10:00 AM", ev: "Shotgun start" },
  { t: 840, time: "2:00 PM", ev: "Lunch in the clubhouse" },
  { t: 900, time: "~3:00 PM", ev: "Awards ceremony" },
  { t: 960, time: "4:00 PM", ev: "End of day" },
];

// Each audience's arrival time (minutes since midnight) → the row to mark
// "YOU ARRIVE" on that audience's schedule view.
export const ARRIVAL: Record<string, number> = {
  players: 540, // 9:00 AM
  guests: 540, // 9:00 AM
  sponsors: 525, // 8:45 AM
  volunteers: 480, // 8:00 AM
};

// Index of the most recent event that has already started, given "now" (in
// minutes since midnight, Central). Returns -1 before the day begins / when
// now is unknown (server render).
export function currentIndex(nowMin: number | null): number {
  if (nowMin == null) return -1;
  let idx = -1;
  SCHEDULE.forEach((row, i) => {
    if (row.t <= nowMin) idx = i;
  });
  return idx;
}

// The live status line shown in the header sub-bar.
export function liveStatus(nowMin: number | null): { label: string; line: string } {
  if (nowMin == null) return { label: "Up Next", line: "10:00 AM — Shotgun start" };
  const next = SCHEDULE.find((row) => row.t > nowMin);
  if (next) return { label: "Up Next", line: `${next.time} — ${next.ev}` };
  return { label: "Status", line: "That's a wrap — thank you" };
}
