import type { Metadata } from "next";
import { C, F } from "@/lib/theme";
import { LINKS } from "@/lib/config";
import { ARRIVAL } from "@/lib/schedule";
import { CHAMPION, GAME_CARDS, PRIZE_TABLE_WINS } from "@/lib/activities";
import { Icon } from "@/components/Icon";
import { CoreSections } from "@/components/CoreSections";

export const metadata: Metadata = { title: "Players & Teams" };

export default function PlayersPage() {
  return (
    <>
      {/* HERO + ARRIVAL */}
      <section style={{ background: C.green, color: C.cream }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "30px 22px 40px" }}>
          <div style={eyebrow}>For Players &amp; Teams</div>
          <h1 style={{ fontFamily: F.display, fontWeight: 400, fontSize: 40, lineHeight: 1.05, color: C.cream, margin: "12px 0 0" }}>
            Grab your team.
            <br />
            <em style={{ fontStyle: "italic", color: C.gold }}>Play</em> with the pros.
          </h1>
          <div style={arrivalBox}>
            <div style={{ flex: "none" }}>
              <div style={arrivalLabel}>Your Arrival</div>
              <div style={arrivalTime}>9:00 AM</div>
            </div>
            <div style={{ flex: 1, minWidth: 200, fontFamily: F.body, fontSize: 15, lineHeight: 1.55, color: "rgba(247,243,230,.85)" }}>
              Registration and the range are open — grab a drink and settle in. You&apos;ll be{" "}
              <strong style={{ color: C.cream }}>directed to your starting hole at check-in</strong>.
            </div>
          </div>
        </div>
      </section>

      {/* PRIMARY CTA */}
      <section style={{ background: C.navy }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "30px 22px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <div style={eyebrow}>Pay On the Course</div>
          <a
            href={LINKS.give}
            target="_blank"
            rel="noopener"
            className="hhx-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 11,
              padding: "19px 46px",
              background: C.gold,
              color: C.navy,
              fontFamily: F.label,
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            <Icon name="hand-tap" size={18} color={C.navy} />
            Buy In — Raffle, Mulligans &amp; Games
          </a>
          <div style={{ fontFamily: F.body, fontSize: 14, color: "rgba(247,243,230,.7)", maxWidth: 440 }}>
            Card, phone, or cash — every staffer &amp; volunteer can take tap-to-pay on the spot.
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section style={{ background: C.cream }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "46px 22px 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 26 }}>
            <div style={{ ...eyebrow, color: C.gold2 }}>On the Course</div>
            <h2 style={sectionH2}>Activities &amp; Challenges</h2>
            <p style={{ fontFamily: F.body, fontSize: 15, color: C.gray, margin: "8px auto 0", maxWidth: 460 }}>
              Every entry is a fundraiser — and a chance to win.
            </p>
          </div>

          {/* Champion Package — featured */}
          <div style={{ position: "relative", background: C.green, border: `2px solid ${C.gold2}`, padding: 28, marginBottom: 16 }}>
            <span style={{ position: "absolute", inset: -6, border: "1px solid rgba(201,168,76,.4)", pointerEvents: "none" }} />
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: 10 }}>
              <div style={{ ...tinyLabel, color: C.gold }}>★ Best Value</div>
              <div style={{ fontFamily: F.display, fontSize: 30, color: C.gold }}>
                {CHAMPION.price}
                <span style={{ fontSize: 14, color: "rgba(247,243,230,.6)" }}>{CHAMPION.unit}</span>
              </div>
            </div>
            <h3 style={{ fontFamily: F.body, fontWeight: 600, fontSize: 24, color: C.cream, margin: "6px 0 0" }}>
              {CHAMPION.title}
            </h3>
            <p style={{ fontFamily: F.body, fontSize: 15, lineHeight: 1.5, color: "rgba(247,243,230,.8)", margin: "10px 0 16px" }}>
              {CHAMPION.blurb}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {CHAMPION.includes.map((c) => (
                <span key={c} style={{ fontFamily: F.label, fontSize: 12, letterSpacing: ".5px", color: C.navy, background: C.gold, padding: "8px 14px" }}>
                  {c}
                </span>
              ))}
            </div>
            <div style={{ ...tinyLabel, color: C.gold, margin: "18px 0 8px" }}>Plus Exclusive Entry Into</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {CHAMPION.exclusiveInto.map((c) => (
                <span key={c} style={{ fontFamily: F.label, fontSize: 12, letterSpacing: ".5px", color: C.gold, border: `1px solid ${C.gold2}`, padding: "8px 14px" }}>
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* 50/50 + Mulligans */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16, marginBottom: 16 }}>
            <div style={{ background: C.card, border: `2px solid ${C.gold2}`, padding: 24 }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: 8 }}>
                <div>
                  <span style={tinyLabel}>Crowd Favorite</span>
                  <h3 style={{ fontFamily: F.body, fontWeight: 600, fontSize: 22, color: C.green, margin: "4px 0 0" }}>50/50 Raffle</h3>
                </div>
                <div style={{ fontFamily: F.display, fontSize: 26, color: C.green }}>$20</div>
              </div>
              <p style={{ fontFamily: F.body, fontSize: 14, lineHeight: 1.55, color: C.gray, margin: "10px 0 0" }}>
                We draw a name at awards — the winner takes <strong style={{ color: C.green }}>half the pot</strong>, the rest goes to the cause.
              </p>
            </div>
            <div style={{ background: C.green, border: `2px solid ${C.gold2}`, padding: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Icon name="flag-pennant" size={22} color={C.gold} />
                <h3 style={{ fontFamily: F.body, fontWeight: 600, fontSize: 22, color: C.cream, margin: 0 }}>Mulligans</h3>
              </div>
              <p style={{ fontFamily: F.body, fontSize: 15, lineHeight: 1.55, color: "rgba(247,243,230,.85)", margin: "12px 0 0" }}>
                <strong style={{ color: C.gold }}>Tee shots only.</strong> A mulligan replays a tee shot — never a putt or fairway shot. Two are included in the Champion Package.
              </p>
            </div>
          </div>

          {/* Game cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(330px,1fr))", gap: 14 }}>
            {GAME_CARDS.map((g) => (
              <div key={g.title} className="hhx-border-gold2" style={{ background: C.card, border: `1px solid ${C.border}`, display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "20px 20px 16px", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 12 }}>
                    <span style={{ fontFamily: F.label, fontSize: 9, letterSpacing: "1.5px", textTransform: "uppercase", color: C.brown, border: `1px solid ${C.gold2}`, padding: "5px 9px", whiteSpace: "nowrap" }}>
                      {g.tag}
                    </span>
                    <span style={{ fontFamily: F.display, fontSize: 22, color: C.green, whiteSpace: "nowrap" }}>{g.price}</span>
                  </div>
                  <h3 style={{ fontFamily: F.body, fontWeight: 600, fontSize: 19, color: C.green, margin: 0 }}>{g.title}</h3>
                  <p style={{ fontFamily: F.body, fontSize: 14, lineHeight: 1.5, color: C.gray, margin: "8px 0 0" }}>{g.desc}</p>
                </div>
                <div style={{ borderTop: `1px solid ${C.border}`, padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, background: "rgba(29,58,35,.035)" }}>
                  <span style={{ minWidth: 0 }}>
                    <span style={{ display: "block", fontFamily: F.label, fontSize: 9, letterSpacing: "1.5px", textTransform: "uppercase", color: C.gold2 }}>{g.footLabel}</span>
                    <span style={{ display: "block", fontFamily: F.body, fontSize: 13, lineHeight: 1.4, color: C.gray, marginTop: 2 }}>{g.footText}</span>
                  </span>
                  {g.footPrice && <span style={{ fontFamily: F.display, fontSize: 16, color: C.green, whiteSpace: "nowrap" }}>{g.footPrice}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Poker Card Challenge */}
          <div className="hhx-border-gold2" style={{ marginTop: 14, background: C.card, border: `1px solid ${C.border}`, padding: 22, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <div style={{ flex: 1, minWidth: 240 }}>
              <span style={{ fontFamily: F.label, fontSize: 9, letterSpacing: "1.5px", textTransform: "uppercase", color: C.gold2 }}>Across 6 Holes</span>
              <h3 style={{ fontFamily: F.body, fontWeight: 600, fontSize: 19, color: C.green, margin: "4px 0 6px" }}>Poker Card Challenge</h3>
              <p style={{ fontFamily: F.body, fontSize: 14, lineHeight: 1.5, color: C.gray, margin: 0 }}>
                Collect a card at six holes; make a <strong style={{ color: C.green }}>pair or better</strong> to earn a pick from the prize table.
              </p>
            </div>
            <span style={{ fontFamily: F.display, fontSize: 24, color: C.green, whiteSpace: "nowrap" }}>$25</span>
          </div>
        </div>
      </section>

      {/* PRIZES */}
      <section style={{ background: C.cream }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "30px 22px 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <div style={{ ...eyebrow, color: C.gold2 }}>What&apos;s Up for Grabs</div>
            <h2 style={sectionH2}>Prizes</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 14 }}>
            <div style={{ background: C.green, border: `1px solid ${C.gold2}`, padding: 26, textAlign: "center" }}>
              <div style={{ ...tinyLabel, color: C.gold }}>1st Place Team</div>
              <div style={{ fontFamily: F.display, fontSize: 44, color: C.cream, lineHeight: 1.1, margin: "8px 0 4px" }}>$10,000</div>
              <p style={{ fontFamily: F.body, fontSize: 13, color: "rgba(247,243,230,.7)", margin: 0 }}>Four $2,500 vouchers to Club Champion</p>
            </div>
            <div style={{ background: C.card, border: `1px solid ${C.border}`, padding: 26, textAlign: "center" }}>
              <div style={tinyLabel}>2nd Place Team</div>
              <div style={{ fontFamily: F.display, fontSize: 44, color: C.green, lineHeight: 1.1, margin: "8px 0 4px" }}>$1,200</div>
              <p style={{ fontFamily: F.body, fontSize: 13, color: C.gray, margin: 0 }}>Four $300 gift certificates to the Canebrake Club Pro Shop</p>
            </div>
          </div>
          <div style={{ marginTop: 14, background: C.card, border: `1px solid ${C.border}`, padding: 24 }}>
            <h3 style={{ fontFamily: F.body, fontWeight: 600, fontSize: 20, color: C.green, margin: 0 }}>The Prize Table</h3>
            <p style={{ fontFamily: F.body, fontSize: 15, lineHeight: 1.55, color: C.gray, margin: "10px 0 14px" }}>
              Win a challenge, then pick your prize. You earn a pick by taking:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {PRIZE_TABLE_WINS.map((w) => (
                <span key={w} style={{ fontFamily: F.label, fontSize: 12, color: C.green, border: `1px solid ${C.gold2}`, padding: "8px 14px" }}>
                  {w}
                </span>
              ))}
            </div>
          </div>
          <p style={{ fontFamily: F.body, fontSize: 14, lineHeight: 1.5, color: C.gray, margin: "18px 0 0", textAlign: "center" }}>
            Good to know — every player takes home a <strong style={{ color: C.green }}>gift bag</strong>.
          </p>
        </div>
      </section>

      <CoreSections arrivalMinute={ARRIVAL.players} />
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
  marginTop: 28,
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
