import Link from "next/link";
import { C, F } from "@/lib/theme";
import { EVENT, CONTACTS, LINKS } from "@/lib/config";
import { Icon, type IconName } from "@/components/Icon";
import { CoreSections } from "@/components/CoreSections";

const QUICK_ACTIONS: { href: string; label: string; icon: IconName; external?: boolean }[] = [
  { href: `tel:${CONTACTS.canyon.tel}`, label: "Call", icon: "phone-call" },
  { href: LINKS.directions, label: "Directions", icon: "navigation-arrow", external: true },
];

const ESSENTIALS: { label: string; value: string; sub?: string }[] = [
  { label: "Date", value: "Monday, June 29, 2026" },
  { label: "Location", value: "Canebrake Club", sub: EVENT.address },
  { label: "Format", value: "4-Person Scramble" },
  { label: "Start", value: "10:00 AM Shotgun" },
];

const AUDIENCES = [
  { href: "/players", title: "Players & Teams", blurb: "Activities, prizes & how to play", arrive: "9:00" },
  { href: "/special-guests", title: "Special Guests", blurb: "A note from Bo & your welcome", arrive: "9:00" },
  { href: "/sponsors", title: "Sponsors", blurb: "Setup, what to bring & timing", arrive: "8:45" },
  { href: "/volunteers", title: "Volunteers", blurb: "Your meeting, role & checklist", arrive: "8:00" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: C.green, color: C.cream }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "48px 22px 44px", textAlign: "center" }}>
          <div
            style={{
              fontFamily: F.label,
              fontWeight: 500,
              fontSize: 11,
              letterSpacing: "3.5px",
              textTransform: "uppercase",
              color: C.gold,
            }}
          >
            Inaugural Event · You&apos;re Confirmed
          </div>
          <h1
            style={{
              fontFamily: F.display,
              fontWeight: 400,
              fontSize: 46,
              lineHeight: 1.04,
              color: C.cream,
              margin: "16px 0 0",
              letterSpacing: "-.01em",
            }}
          >
            Huntsville
            <br />
            <em style={{ fontStyle: "italic", color: C.gold }}>Hope</em> Classic
          </h1>
          <div
            style={{
              display: "inline-block",
              position: "relative",
              margin: "30px 0 22px",
              border: `2px solid ${C.gold2}`,
              padding: "18px 34px",
              background: C.card,
            }}
          >
            <span style={{ position: "absolute", inset: -6, border: "1px solid rgba(201,168,76,.45)", pointerEvents: "none" }} />
            <img src="/golfer.svg" alt="Golfer mid-swing" style={{ display: "block", width: 88, height: "auto" }} />
            <span
              style={{
                position: "absolute",
                bottom: -11,
                left: "50%",
                transform: "translateX(-50%)",
                background: C.green,
                padding: "0 12px",
                fontFamily: F.display,
                fontSize: 11,
                letterSpacing: "3px",
                color: C.gold,
                whiteSpace: "nowrap",
              }}
            >
              JUNE 29, 2026
            </span>
          </div>
          <p
            style={{
              fontFamily: F.body,
              fontStyle: "italic",
              fontSize: 16,
              lineHeight: 1.55,
              color: "rgba(247,243,230,.82)",
              margin: "0 auto",
              maxWidth: 440,
            }}
          >
            Your guide to tournament day — when to arrive, where to go, and who to call.
          </p>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section style={{ background: C.card, borderBottom: `1px solid ${C.border}` }}>
        <div
          style={{
            maxWidth: 920,
            margin: "0 auto",
            padding: "18px 22px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))",
            gap: 10,
          }}
        >
          {QUICK_ACTIONS.map((a) => (
            <a
              key={a.label}
              href={a.href}
              {...(a.external ? { target: "_blank", rel: "noopener" } : {})}
              className="hhx-tint"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 9,
                padding: 14,
                border: `1px solid ${C.gold2}`,
                textDecoration: "none",
              }}
            >
              <Icon name={a.icon} size={18} color={C.gold2} />
              <span
                style={{
                  fontFamily: F.label,
                  fontSize: 11,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: C.green,
                }}
              >
                {a.label}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ESSENTIALS */}
      <section style={{ background: C.cream }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "40px 22px 8px", textAlign: "center" }}>
          <div
            style={{
              fontFamily: F.label,
              fontWeight: 500,
              fontSize: 11,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: C.gold2,
            }}
          >
            The Essentials
          </div>
          <hr style={{ width: 54, height: 2, background: C.gold2, border: 0, margin: "14px auto 0" }} />
        </div>
        <div style={{ maxWidth: 920, margin: "24px auto 0", padding: "0 22px" }}>
          <div
            style={{
              border: `1px solid ${C.border}`,
              background: C.border,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
              gap: 1,
            }}
          >
            {ESSENTIALS.map((e) => (
              <div
                key={e.label}
                style={{
                  padding: "18px 20px",
                  background: C.cream,
                }}
              >
                <div
                  style={{
                    fontFamily: F.label,
                    fontSize: 10,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: C.gold2,
                  }}
                >
                  {e.label}
                </div>
                <div style={{ fontFamily: F.body, fontWeight: 600, fontSize: 17, color: C.green, marginTop: 5 }}>
                  {e.value}
                </div>
                {e.sub && <div style={{ fontFamily: F.body, fontSize: 13, color: C.gray }}>{e.sub}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE ROUTER */}
      <section style={{ background: C.cream }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "44px 22px 48px" }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <h2 style={{ fontFamily: F.body, fontWeight: 600, fontSize: 30, color: C.green, margin: 0 }}>
              Who Are You?
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14 }}>
            {AUDIENCES.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="hhx-border-gold"
                style={{
                  background: C.green,
                  border: "1px solid rgba(169,149,96,.55)",
                  padding: 22,
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  minHeight: 150,
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontFamily: F.body, fontWeight: 600, fontSize: 21, color: C.cream }}>{a.title}</div>
                  <div style={{ fontFamily: F.body, fontSize: 14, color: "rgba(247,243,230,.7)", marginTop: 4 }}>
                    {a.blurb}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                  <span
                    style={{
                      fontFamily: F.label,
                      fontSize: 9,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: "rgba(247,243,230,.5)",
                    }}
                  >
                    Arrive by
                  </span>
                  <span style={{ fontFamily: F.display, fontSize: 26, color: C.gold, lineHeight: 1 }}>{a.arrive}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CoreSections showMission arrivalMinute={null} />
    </>
  );
}
