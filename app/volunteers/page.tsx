import type { Metadata } from "next";
import { C, F } from "@/lib/theme";
import { CONTACTS } from "@/lib/config";
import { ARRIVAL } from "@/lib/schedule";
import { Icon, type IconName } from "@/components/Icon";
import { CoreSections } from "@/components/CoreSections";

export const metadata: Metadata = { title: "Volunteers" };

const BRING: { icon: IconName; title: string; text: string }[] = [
  { icon: "device-mobile", title: "Your Phone", text: "You'll take payments via tap-to-pay — we'll show you how." },
  { icon: "sneaker", title: "Comfort", text: "Comfortable clothes & shoes — you'll be outside and on your feet." },
  { icon: "sun", title: "Sun & Heat Gear", text: "Hat or visor, sunscreen, water bottle. We'll keep drinks stocked too." },
];

const TEAM = [CONTACTS.canyon, CONTACTS.chris, CONTACTS.kenesha, CONTACTS.allison];

export default function VolunteersPage() {
  return (
    <>
      {/* HERO + ARRIVAL */}
      <section style={{ background: C.green, color: C.cream }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "30px 22px 38px" }}>
          <div style={eyebrow}>For Our Volunteers</div>
          <h1 style={{ fontFamily: F.display, fontWeight: 400, fontSize: 40, lineHeight: 1.05, color: C.cream, margin: "12px 0 0" }}>
            You&apos;re the reason
            <br />
            this day <em style={{ fontStyle: "italic", color: C.gold }}>runs.</em>
          </h1>
          <div style={arrivalBox}>
            <div style={{ flex: "none" }}>
              <div style={arrivalLabel}>Your Arrival</div>
              <div style={arrivalTime}>8:00 AM</div>
            </div>
            <div style={{ flex: 1, minWidth: 200, fontFamily: F.body, fontSize: 15, lineHeight: 1.55, color: "rgba(247,243,230,.85)" }}>
              We&apos;ve got you — a branded <strong style={{ color: C.cream }}>One House t-shirt</strong> to wear, plus food and drink all day.
            </div>
          </div>
          <div style={{ marginTop: 14, border: `1px solid ${C.gold}`, padding: "16px 20px", display: "flex", alignItems: "center", gap: 14, background: "rgba(201,168,76,.08)" }}>
            <span style={{ fontFamily: F.label, fontSize: 9, letterSpacing: "1.5px", textTransform: "uppercase", color: C.navy, background: C.gold, padding: "6px 9px", flex: "none" }}>
              Most Important
            </span>
            <div style={{ fontFamily: F.body, fontSize: 15, lineHeight: 1.5, color: "rgba(247,243,230,.9)" }}>
              Be at the <strong style={{ color: C.cream }}>8:30 AM meeting</strong> — it&apos;s where we hand out assignments and train you. If you get one thing right, it&apos;s this.
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO BRING */}
      <section style={{ background: C.cream }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "44px 22px 10px" }}>
          <div style={{ textAlign: "center", marginBottom: 22 }}>
            <div style={{ ...eyebrow, color: C.gold2 }}>What to Bring</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14 }}>
            {BRING.map((b) => (
              <div key={b.title} style={{ background: C.card, border: `1px solid ${C.border}`, padding: 22, textAlign: "center" }}>
                <Icon name={b.icon} size={26} color={C.gold2} />
                <h3 style={{ fontFamily: F.body, fontWeight: 600, fontSize: 18, color: C.green, margin: "10px 0 4px" }}>{b.title}</h3>
                <p style={{ fontFamily: F.body, fontSize: 14, lineHeight: 1.5, color: C.gray, margin: 0 }}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL DO */}
      <section style={{ background: C.cream }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "28px 22px 10px" }}>
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <div style={{ ...eyebrow, color: C.gold2 }}>What You&apos;ll Be Doing</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 14 }}>
            <div style={{ background: C.card, border: `1px solid ${C.border}`, padding: 24 }}>
              <h3 style={{ fontFamily: F.body, fontWeight: 600, fontSize: 19, color: C.green, margin: "0 0 8px" }}>Before the shotgun</h3>
              <p style={{ fontFamily: F.body, fontSize: 15, lineHeight: 1.55, color: C.gray, margin: 0 }}>
                Help our sponsors get their gear out and set up at their holes. (Registration is mostly handled by staff.)
              </p>
            </div>
            <div style={{ background: C.card, border: `1px solid ${C.border}`, padding: 24 }}>
              <h3 style={{ fontFamily: F.body, fontWeight: 600, fontSize: 19, color: C.green, margin: "0 0 8px" }}>During the round</h3>
              <p style={{ fontFamily: F.body, fontSize: 15, lineHeight: 1.55, color: C.gray, margin: 0 }}>
                Stationed at a hole: track mulligans &amp; keep play fair, run the hole&apos;s activity, collect payments, and keep players having a great time. You&apos;re the face of One House at your hole — we train you on the specifics at the meeting.
              </p>
            </div>
          </div>
          <p style={{ fontFamily: F.body, fontStyle: "italic", fontSize: 14, color: C.amber, margin: "18px 0 0", textAlign: "center" }}>
            Keep it fun, keep it fair.
          </p>
        </div>
      </section>

      {/* REACHING TEAM + WRAP */}
      <section style={{ background: C.cream }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "24px 22px 46px" }}>
          <div style={{ background: C.green, padding: 26 }}>
            <div style={{ ...tinyLabel, color: C.gold }}>Reaching the Team</div>
            <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 10 }}>
              {TEAM.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="hhx-border-gold"
                  style={{ textDecoration: "none", border: "1px solid rgba(169,149,96,.5)", padding: "12px 14px" }}
                >
                  <div style={{ fontFamily: F.body, fontWeight: 600, fontSize: 15, color: C.cream }}>
                    {"short" in p ? p.short : p.name}
                  </div>
                  <div style={{ fontFamily: F.label, fontSize: 12, color: C.gold }}>{p.phone}</div>
                </a>
              ))}
            </div>
            <p style={{ fontFamily: F.body, fontSize: 14, lineHeight: 1.5, color: "rgba(247,243,230,.75)", margin: "14px 0 0" }}>
              Or the One House line at{" "}
              <a href={`tel:${CONTACTS.oneHouse.tel}`} style={{ color: C.gold }}>
                {CONTACTS.oneHouse.phone}
              </a>
              . We&apos;ll set up a day-of group text at the 8:30 meeting so the whole team can coordinate instantly (and call a cart when you need one).
            </p>
          </div>
          <div style={{ marginTop: 14, background: C.card, border: `1px solid ${C.border}`, padding: 24 }}>
            <h3 style={{ fontFamily: F.body, fontWeight: 600, fontSize: 19, color: C.green, margin: "0 0 8px" }}>Wrapping up</h3>
            <p style={{ fontFamily: F.body, fontSize: 15, lineHeight: 1.55, color: C.gray, margin: 0 }}>
              Once play ends at your hole, you&apos;re free to head home — after one last assist: help your hole sponsor get their materials back to the clubhouse, or text the group chat to send a cart. The awards ceremony is for players &amp; guests — <strong style={{ color: C.green }}>volunteers aren&apos;t expected to stay.</strong>
            </p>
          </div>
        </div>
      </section>

      <CoreSections arrivalMinute={ARRIVAL.volunteers} />
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
