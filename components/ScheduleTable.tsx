"use client";

import { C, F } from "@/lib/theme";
import { SCHEDULE, currentIndex } from "@/lib/schedule";
import { useNow } from "./useNow";

// The master schedule with two live highlights:
//  • "NOW"        — the event currently underway (ticks in Central time)
//  • "YOU ARRIVE" — this audience's arrival row (from the route)
export function ScheduleTable({ arrivalMinute = null }: { arrivalMinute?: number | null }) {
  const nowMin = useNow();
  const nowIdx = currentIndex(nowMin);

  return (
    <div style={{ border: `1px solid ${C.border}` }}>
      {SCHEDULE.map((row, i) => {
        const isArrival = arrivalMinute != null && row.t === arrivalMinute;
        const isNow = i === nowIdx;
        const bg = isNow
          ? "rgba(201,168,76,.18)"
          : isArrival
            ? "rgba(201,168,76,.07)"
            : "transparent";
        const pill = isArrival ? "YOU ARRIVE" : isNow ? "NOW" : "";

        return (
          <div
            key={row.t}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "13px 16px",
              borderBottom: `1px solid ${C.border2}`,
              background: bg,
            }}
          >
            <span
              style={{
                fontFamily: F.display,
                fontSize: 15,
                letterSpacing: ".5px",
                color: C.gold2,
                minWidth: 74,
                flex: "none",
              }}
            >
              {row.time}
            </span>
            <span style={{ fontFamily: F.body, fontSize: 15, color: C.green, flex: 1 }}>{row.ev}</span>
            {pill && (
              <span
                style={{
                  fontFamily: F.label,
                  fontSize: 8.5,
                  letterSpacing: "1.5px",
                  color: C.brown,
                  border: `1px solid ${C.gold2}`,
                  padding: "3px 7px",
                  whiteSpace: "nowrap",
                  flex: "none",
                }}
              >
                {pill}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
