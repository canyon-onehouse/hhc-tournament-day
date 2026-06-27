import type { Metadata } from "next";
import { C, F } from "@/lib/theme";
import {
  COURSE_FRONT,
  COURSE_BACK,
  COURSE_STATS,
  NINE_STATS,
  POKER_HOLES_NOTE,
  type Hole,
} from "@/lib/holes";

export const metadata: Metadata = { title: "Hole-by-Hole" };

export default function CoursePage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: C.green, color: C.cream }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "40px 22px", textAlign: "center" }}>
          <div style={eyebrow}>On the Course</div>
          <h1 style={{ fontFamily: F.display, fontWeight: 400, fontSize: 40, lineHeight: 1.05, color: C.cream, margin: "12px 0 0" }}>
            Hole-by-<em style={{ fontStyle: "italic", color: C.gold }}>Hole</em>
          </h1>
          <p style={{ fontFamily: F.body, fontStyle: "italic", fontSize: 16, color: "rgba(247,243,230,.82)", margin: "14px auto 0", maxWidth: 440 }}>
            Every hole on the card — its par, its yardage, who&apos;s there, and what you can play.
          </p>
          <div style={{ display: "flex", maxWidth: 420, width: "100%", margin: "24px auto 0", border: "1px solid rgba(169,149,96,.45)" }}>
            <Stat value={COURSE_STATS.holes} label="Holes" divider />
            <Stat value={COURSE_STATS.par} label="Par" divider />
            <Stat value={COURSE_STATS.yards} label="Yards" />
          </div>
        </div>
      </section>

      <section style={{ background: C.cream }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "40px 22px 52px" }}>
          <NineHeading title="Front Nine" />
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 36 }}>
            {COURSE_FRONT.map((h) => (
              <HoleCard key={h.h} hole={h} />
            ))}
          </div>

          <NineHeading title="Back Nine" />
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {COURSE_BACK.map((h) => (
              <HoleCard key={h.h} hole={h} />
            ))}
          </div>

          <p style={{ fontFamily: F.body, fontStyle: "italic", fontSize: 14, color: C.greenGray, margin: "24px 0 0", textAlign: "center" }}>
            {POKER_HOLES_NOTE}
          </p>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label, divider }: { value: string; label: string; divider?: boolean }) {
  return (
    <div style={{ flex: 1, padding: "12px 10px", borderRight: divider ? "1px solid rgba(169,149,96,.3)" : undefined }}>
      <div style={{ fontFamily: F.display, fontSize: 24, color: C.cream, lineHeight: 1 }}>{value}</div>
      <div style={{ fontFamily: F.label, fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", color: C.gold, marginTop: 4 }}>
        {label}
      </div>
    </div>
  );
}

function NineHeading({ title }: { title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 14, paddingBottom: 10, borderBottom: `1px solid ${C.border}` }}>
      <h2 style={{ fontFamily: F.body, fontWeight: 600, fontSize: 24, color: C.green, margin: 0 }}>{title}</h2>
      <span style={{ fontFamily: F.label, fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: C.gold2 }}>
        {NINE_STATS}
      </span>
    </div>
  );
}

function HoleCard({ hole }: { hole: Hole }) {
  return (
    <div className="hhx-border-gold2" style={{ border: `1px solid ${C.border}`, background: C.card, display: "flex", flexWrap: "wrap" }}>
      <div style={{ background: C.green, padding: "18px 20px", minWidth: 118, display: "flex", flexDirection: "column", justifyContent: "center", gap: 8, flex: "none" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{ fontFamily: F.label, fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", color: C.gold }}>Hole</span>
          <span style={{ fontFamily: F.display, fontSize: 38, lineHeight: 0.85, color: C.cream }}>{hole.h}</span>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={chip}>{hole.par}</span>
          <span style={chip}>{hole.yards}</span>
        </div>
      </div>
      <div style={{ flex: 1, minWidth: 200, padding: "16px 22px" }}>
        <div style={{ fontFamily: F.label, fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", color: C.gold2 }}>Hole Sponsors</div>
        <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 6 }}>
          {hole.sponsors.map((sp) => (
            <div key={sp} style={{ fontFamily: F.body, fontSize: 15, color: C.green, borderLeft: `2px solid ${C.gold2}`, paddingLeft: 12 }}>
              {sp}
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: "none", minWidth: 170, padding: "16px 22px", display: "flex", alignItems: "center", borderTop: `1px solid ${C.border2}`, background: "rgba(29,58,35,.025)" }}>
        {hole.hasActivity ? (
          <div>
            <div style={{ fontFamily: F.label, fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", color: C.gold2, marginBottom: 6 }}>Activity</div>
            <span style={{ display: "inline-block", fontFamily: F.label, fontSize: 12, letterSpacing: ".5px", color: C.navy, background: C.gold, padding: "7px 13px" }}>
              {hole.activity}
            </span>
          </div>
        ) : (
          <span style={{ fontFamily: F.body, fontStyle: "italic", fontSize: 14, color: C.greenGray }}>Open play</span>
        )}
      </div>
    </div>
  );
}

const eyebrow: React.CSSProperties = {
  fontFamily: F.label,
  fontWeight: 500,
  fontSize: 11,
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: C.gold,
};

const chip: React.CSSProperties = {
  border: "1px solid rgba(169,149,96,.6)",
  padding: "3px 8px",
  fontFamily: F.label,
  fontSize: 10,
  letterSpacing: ".5px",
  color: C.gold,
  whiteSpace: "nowrap",
};
