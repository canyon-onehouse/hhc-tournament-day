import type { Metadata } from "next";
import { C, F } from "@/lib/theme";
import {
  TITLE_SPONSOR,
  GOLD_SPONSORS,
  SPECIALTY_SPONSORS,
  HOLE_SPONSORS,
  IN_KIND_DONORS,
} from "@/lib/sponsors";

export const metadata: Metadata = { title: "Our Sponsors" };

export default function SponsorsWallPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: C.green, color: C.cream }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "40px 22px", textAlign: "center" }}>
          <div style={eyebrow}>With Gratitude</div>
          <h1 style={{ fontFamily: F.display, fontWeight: 400, fontSize: 40, lineHeight: 1.05, color: C.cream, margin: "12px 0 0" }}>
            Our <em style={{ fontStyle: "italic", color: C.gold }}>Sponsors</em>
          </h1>
          <p style={{ fontFamily: F.body, fontStyle: "italic", fontSize: 16, color: "rgba(247,243,230,.82)", margin: "14px auto 0", maxWidth: 460 }}>
            Thank you for investing in families across North Alabama.
          </p>
        </div>
      </section>

      <section style={{ background: C.cream }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "40px 22px 52px" }}>
          {/* Title */}
          <TierHeading label="Title Sponsor" margin="8px 0 14px" />
          <div style={{ maxWidth: 460, margin: "0 auto" }}>
            <div style={{ position: "relative", border: `2px solid ${C.gold2}`, background: "#fff", minHeight: 130, display: "flex", alignItems: "center", justifyContent: "center", padding: "26px 30px", textAlign: "center" }}>
              <span style={{ position: "absolute", inset: -6, border: "1px solid rgba(169,149,96,.4)", pointerEvents: "none" }} />
              <img src={TITLE_SPONSOR.logo} alt={TITLE_SPONSOR.name} style={{ maxWidth: "100%", maxHeight: 88, objectFit: "contain" }} />
            </div>
          </div>

          {/* Gold */}
          <TierHeading label="Gold Sponsors" margin="36px 0 14px" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 12 }}>
            {GOLD_SPONSORS.map((s) => (
              <div key={s.name} style={{ border: `1px solid ${C.gold2}`, background: "#fff", height: 122, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, textAlign: "center" }}>
                <img src={s.logo} alt={s.name} style={{ maxWidth: "100%", maxHeight: 84, objectFit: "contain" }} />
              </div>
            ))}
          </div>

          {/* Specialty tiers */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 18, marginTop: 36 }}>
            {SPECIALTY_SPONSORS.map((t) => (
              <div key={t.label}>
                <div style={{ textAlign: "center", marginBottom: 10 }}>
                  <div style={{ fontFamily: F.label, fontWeight: 500, fontSize: 10, letterSpacing: "2.5px", textTransform: "uppercase", color: C.gold2 }}>
                    {t.label}
                  </div>
                </div>
                <div style={{ border: `1px solid ${C.border}`, background: "#fff", height: 96, display: "flex", alignItems: "center", justifyContent: "center", padding: 16, textAlign: "center" }}>
                  <img src={t.logo} alt={t.name} style={{ maxWidth: "100%", maxHeight: 62, objectFit: "contain" }} />
                </div>
                {t.person && (
                  <div style={{ textAlign: "center", marginTop: 8, fontFamily: F.body, fontStyle: "italic", fontSize: 13, color: C.gray }}>
                    {t.person}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Hole sponsors */}
          <TierHeading label="Hole Sponsors" margin="40px 0 16px" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 8 }}>
            {HOLE_SPONSORS.map((s) => (
              <div key={s.name} style={{ border: `1px solid ${C.border}`, background: "#fff", padding: 12, height: 78, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                {s.logo ? (
                  <img src={s.logo} alt={s.name} style={{ maxWidth: "100%", maxHeight: 50, objectFit: "contain" }} />
                ) : (
                  <span style={{ fontFamily: F.body, fontWeight: 600, fontSize: 13, color: C.green }}>{s.name}</span>
                )}
              </div>
            ))}
          </div>

          {/* In-kind donors */}
          <TierHeading label="In-Kind Donors" margin="42px 0 16px" />
          <p style={{ fontFamily: F.body, fontStyle: "italic", fontSize: 15, lineHeight: 1.6, color: C.gray, margin: "0 auto 18px", maxWidth: 600, textAlign: "center" }}>
            With gratitude to the local partners whose in-kind generosity helped make the day special.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 10 }}>
            {IN_KIND_DONORS.map((name) => (
              <div key={name} style={{ border: `1px solid ${C.border}`, background: C.card, padding: 16, minHeight: 58, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                <div style={{ fontFamily: F.body, fontWeight: 600, fontSize: 15, color: C.green }}>{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function TierHeading({ label, margin }: { label: string; margin: string }) {
  return (
    <div style={{ textAlign: "center", margin }}>
      <div style={{ fontFamily: F.label, fontWeight: 500, fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", color: C.gold2 }}>
        {label}
      </div>
      <hr style={{ width: 40, height: 1, background: C.gold2, border: 0, margin: "10px auto 0" }} />
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
