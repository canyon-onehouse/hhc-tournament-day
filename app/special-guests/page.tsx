import type { Metadata } from "next";
import { C, F } from "@/lib/theme";
import { ARRIVAL } from "@/lib/schedule";
import { CoreSections } from "@/components/CoreSections";

export const metadata: Metadata = { title: "Special Guests" };

export default function SpecialGuestsPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: C.green, color: C.cream }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "34px 22px 42px", textAlign: "center" }}>
          <div style={eyebrow}>For Our Special Guests</div>
          <h1 style={{ fontFamily: F.display, fontWeight: 400, fontSize: 42, lineHeight: 1.05, color: C.cream, margin: "14px 0 0" }}>
            You&apos;re in.
          </h1>
          <p style={{ fontFamily: F.body, fontStyle: "italic", fontSize: 17, lineHeight: 1.55, color: "rgba(247,243,230,.85)", margin: "16px auto 0", maxWidth: 480 }}>
            Just show up ready to have fun — we&apos;ll take care of the rest.
          </p>
          <div style={{ marginTop: 26, display: "inline-flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
            <div style={{ border: `2px solid ${C.gold2}`, background: C.navy, padding: "16px 28px" }}>
              <div style={miniLabel}>Please Arrive By</div>
              <div style={miniValue}>9:00 AM</div>
            </div>
            <div style={{ border: "1px solid rgba(169,149,96,.5)", padding: "16px 28px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={miniLabel}>It Costs You</div>
              <div style={miniValue}>Nothing</div>
            </div>
          </div>
          <p style={{ fontFamily: F.body, fontSize: 14, color: "rgba(247,243,230,.7)", margin: "18px auto 0", maxWidth: 420 }}>
            Green fees, cart, lunch, and drinks are all covered. Mon, June 29 · Canebrake Club · 10:00 AM shotgun.
          </p>
        </div>
      </section>

      {/* NOTE FROM BO */}
      <section style={{ background: C.cream }}>
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "48px 22px" }}>
          <div style={{ textAlign: "center", marginBottom: 8 }}>
            <img src="/symbol-ohp-glyph.svg" alt="" style={{ width: 40, height: 40 }} />
          </div>
          <div style={{ ...eyebrow, color: C.gold2, textAlign: "center" }}>A Note from Bo</div>
          <p style={{ fontFamily: F.body, fontSize: 18, lineHeight: 1.65, color: C.green, margin: "20px 0 0", textAlign: "center" }}>
            You said yes — and I can&apos;t thank you enough. You don&apos;t need to prepare a thing.
          </p>
          <p style={{ fontFamily: F.body, fontSize: 16, lineHeight: 1.65, color: C.gray, margin: "16px 0 0", textAlign: "center" }}>
            Show up ready to enjoy the day, and we&apos;ll walk you through everything the moment you arrive — including the hole you&apos;ll call home. Having you out here is what makes this day matter.
          </p>
          <p style={{ fontFamily: F.body, fontStyle: "italic", fontSize: 16, color: C.green, margin: "22px 0 0", textAlign: "center" }}>
            See you on the tee. — Bo Matthews,
            <br />
            <span style={{ fontStyle: "normal", fontFamily: F.label, fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: C.gold2 }}>
              Founder &amp; Board Chairman
            </span>
          </p>
        </div>
      </section>

      {/* YOUR ROLE */}
      <section style={{ background: C.card, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "40px 22px", textAlign: "center" }}>
          <div style={{ ...eyebrow, color: C.gold2 }}>Your Role</div>
          <p style={{ fontFamily: F.body, fontSize: 16, lineHeight: 1.6, color: C.gray, margin: "16px 0 0" }}>
            For most of the day you&apos;ll be stationed at a hole, taking a shot alongside each team as they come through — so every group gets a little time with you. Relaxed and fun.{" "}
            <strong style={{ color: C.green }}>We&apos;ll give you the full rundown, including your hole, when you arrive.</strong> Nothing to memorize.
          </p>
          <p style={{ fontFamily: F.body, fontStyle: "italic", fontSize: 14, color: C.amber, margin: "18px 0 0" }}>
            Every group you meet is helping raise money for North Alabama families.
          </p>
        </div>
      </section>

      <CoreSections arrivalMinute={ARRIVAL.guests} />
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

const miniLabel: React.CSSProperties = {
  fontFamily: F.label,
  fontSize: 10,
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: C.gold,
};

const miniValue: React.CSSProperties = {
  fontFamily: F.display,
  fontSize: 34,
  color: C.cream,
  lineHeight: 1,
  marginTop: 4,
};
