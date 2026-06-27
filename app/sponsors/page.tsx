import type { Metadata } from "next";
import Link from "next/link";
import { C, F } from "@/lib/theme";
import { ARRIVAL } from "@/lib/schedule";
import { Icon } from "@/components/Icon";
import { CoreSections } from "@/components/CoreSections";

export const metadata: Metadata = { title: "Sponsors" };

const PROVIDED = [
  "Your branded booth / hole sign",
  "Your assigned spot — we show you exactly where",
  "Breakfast for booth sponsors",
  "Food & drink throughout the day",
];

const BRING = [
  "Table(s) and chairs",
  "An umbrella or canopy for shade (it will be hot)",
  "Banners & branded merch",
  "Giveaways or lead magnets",
  "Your staff and your setup — your booth is yours to own",
];

export default function SponsorsPage() {
  return (
    <>
      {/* HERO + ARRIVAL */}
      <section style={{ background: C.green, color: C.cream }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "30px 22px 38px" }}>
          <div style={eyebrow}>For Our Sponsors</div>
          <h1 style={{ fontFamily: F.display, fontWeight: 400, fontSize: 38, lineHeight: 1.06, color: C.cream, margin: "12px 0 0" }}>
            Come early, and
            <br />
            let us do the <em style={{ fontStyle: "italic", color: C.gold }}>heavy lifting.</em>
          </h1>
          <div style={arrivalBox}>
            <div style={{ flex: "none" }}>
              <div style={arrivalLabel}>Your Arrival</div>
              <div style={arrivalTime}>8:45 AM</div>
            </div>
            <div style={{ flex: 1, minWidth: 200, fontFamily: F.body, fontSize: 15, lineHeight: 1.55, color: "rgba(247,243,230,.85)" }}>
              Arrive in the 8:45–9:00 window and our staff &amp; volunteers help move your gear to your spot.{" "}
              <strong style={{ color: C.cream }}>Breakfast is on us.</strong>
            </div>
          </div>
          <div style={{ marginTop: 14, border: `1px solid ${C.gold}`, padding: "16px 20px", display: "flex", alignItems: "flex-start", gap: 14, background: "rgba(201,168,76,.08)" }}>
            <Icon name="warning" size={24} color={C.gold} style={{ flex: "none" }} />
            <div style={{ fontFamily: F.body, fontSize: 15, lineHeight: 1.5, color: "rgba(247,243,230,.9)" }}>
              <strong style={{ color: C.cream }}>Last call is 9:30 AM.</strong>
              <span style={{ display: "block", marginTop: 4 }}>
                After 9:30, our staff is focused on running the tournament, so we can&apos;t help at your hole.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PROVIDED VS BRING */}
      <section style={{ background: C.cream }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "46px 22px 10px" }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <div style={{ ...eyebrow, color: C.gold2 }}>Your Booth</div>
            <h2 style={sectionH2}>What&apos;s provided · what to bring</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 14 }}>
            <div style={{ background: C.green, padding: 26 }}>
              <div style={{ ...tinyLabel, color: C.gold }}>We Provide</div>
              <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
                {PROVIDED.map((item) => (
                  <div key={item} style={{ fontFamily: F.body, fontSize: 15, color: "rgba(247,243,230,.9)", borderLeft: `2px solid ${C.gold2}`, paddingLeft: 12 }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: C.card, border: `1px solid ${C.border}`, padding: 26 }}>
              <div style={tinyLabel}>You Bring</div>
              <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
                {BRING.map((item) => (
                  <div key={item} style={{ fontFamily: F.body, fontSize: 15, color: C.green, borderLeft: `2px solid ${C.border}`, paddingLeft: 12 }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAXIMIZE */}
      <section style={{ background: C.cream }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "24px 22px 46px" }}>
          <div style={{ background: C.card, border: `1px solid ${C.border}`, padding: 28, textAlign: "center" }}>
            <div style={tinyLabel}>Maximize Your Investment</div>
            <p style={{ fontFamily: F.body, fontSize: 18, lineHeight: 1.6, color: C.green, margin: "14px auto 0", maxWidth: 560 }}>
              It&apos;s a shotgun scramble — so <strong>every team plays every hole.</strong> The entire field passes your booth over the round. Bring something memorable, and you&apos;re welcome to stay for lunch and the awards ceremony.
            </p>
            <p style={{ fontFamily: F.body, fontSize: 14, lineHeight: 1.5, color: C.gray, margin: "16px auto 0", maxWidth: 560 }}>
              Break down once the last team has passed (early afternoon); wear branded gear or business-casual. Got a playing team? See the{" "}
              <Link href="/players" style={{ color: C.gold2 }}>
                Players &amp; Teams
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      <CoreSections arrivalMinute={ARRIVAL.sponsors} />
    </>
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

const sectionH2: React.CSSProperties = {
  fontFamily: F.body,
  fontWeight: 600,
  fontSize: 30,
  color: C.green,
  margin: "10px 0 0",
};

const tinyLabel: React.CSSProperties = {
  fontFamily: F.label,
  fontSize: 10,
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: C.gold2,
};

const arrivalBox: React.CSSProperties = {
  position: "relative",
  marginTop: 26,
  border: `2px solid ${C.gold2}`,
  background: C.navy,
  padding: "24px 26px",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 20,
};

const arrivalLabel: React.CSSProperties = {
  fontFamily: F.label,
  fontSize: 10,
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: C.gold,
};

const arrivalTime: React.CSSProperties = {
  fontFamily: F.display,
  fontSize: 42,
  color: C.cream,
  lineHeight: 1,
  marginTop: 4,
};
