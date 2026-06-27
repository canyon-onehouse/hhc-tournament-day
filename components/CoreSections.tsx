import { C, F } from "@/lib/theme";
import { LINKS, CONTACTS } from "@/lib/config";
import { Icon } from "./Icon";
import { ScheduleTable } from "./ScheduleTable";

// The shared "Core" block that appears on Home and all four audience pages:
// Directions & Parking → Schedule → Mission (Home only) → Day-of Contact.
export function CoreSections({
  arrivalMinute = null,
  showMission = false,
}: {
  arrivalMinute?: number | null;
  showMission?: boolean;
}) {
  const sectionMax = { maxWidth: 920, margin: "0 auto" } as const;

  return (
    <>
      {/* GETTING THERE */}
      <section style={{ background: C.green, color: C.cream }}>
        <div style={{ ...sectionMax, padding: "46px 22px" }}>
          <div style={{ textAlign: "center", marginBottom: 26 }}>
            <h2 style={{ fontFamily: F.body, fontWeight: 600, fontSize: 30, color: C.cream, margin: 0 }}>
              Directions &amp; Parking
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
              gap: 2,
              border: "1px solid rgba(169,149,96,.4)",
            }}
          >
            {[
              <>
                Reach the <strong style={{ color: C.cream }}>roundabout</strong> with Hope Classic
                signage and a One House volunteer directing traffic.
              </>,
              <>
                They&apos;ll point you to the{" "}
                <strong style={{ color: C.cream }}>parking lot next to the 18th green.</strong>
              </>,
              <>
                Our <strong style={{ color: C.cream }}>staff will greet you</strong> there and get you
                checked in.
              </>,
              <>
                <strong style={{ color: C.cream }}>Opening ceremonies</strong> are held in that lot at
                9:45 AM.
              </>,
            ].map((copy, i, arr) => (
              <div
                key={i}
                style={{
                  padding: 20,
                  borderRight: i < arr.length - 1 ? "1px solid rgba(169,149,96,.25)" : undefined,
                }}
              >
                <div style={{ fontFamily: F.display, fontSize: 24, color: C.gold }}>{i + 1}</div>
                <p
                  style={{
                    fontFamily: F.body,
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: "rgba(247,243,230,.85)",
                    margin: "8px 0 0",
                  }}
                >
                  {copy}
                </p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 22 }}>
            <a
              href={LINKS.directions}
              target="_blank"
              rel="noopener"
              className="hhx-dir"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "14px 28px",
                border: `2px solid ${C.gold}`,
                color: C.gold,
                fontFamily: F.label,
                fontWeight: 500,
                fontSize: 12,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              <Icon name="navigation-arrow" size={16} color={C.gold} />
              <span>Get Directions to Canebrake</span>
            </a>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section style={{ background: C.cream }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "46px 22px" }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <h2 style={{ fontFamily: F.body, fontWeight: 600, fontSize: 30, color: C.green, margin: 0 }}>
              Schedule
            </h2>
          </div>
          <ScheduleTable arrivalMinute={arrivalMinute} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 12,
              marginTop: 16,
            }}
          >
            <InfoCard icon="t-shirt" label="Dress Code" text="Collared shirt, no denim, soft spikes." />
            <InfoCard icon="sun" label="Beat the Heat" text="Hat, sunscreen, and plenty of water." />
          </div>
        </div>
      </section>

      {/* MISSION (Home only) */}
      {showMission && (
        <section style={{ background: C.card, borderTop: `1px solid ${C.border}` }}>
          <div style={{ maxWidth: 680, margin: "0 auto", padding: "52px 22px", textAlign: "center" }}>
            <img src="/symbol-ohp-glyph.svg" alt="The One House Project" style={{ width: 44, height: 44 }} />
            <h2
              style={{
                fontFamily: F.body,
                fontWeight: 600,
                fontSize: 28,
                lineHeight: 1.25,
                color: C.green,
                margin: "18px 0 0",
              }}
            >
              Every swing supports a family
              <br />
              <em style={{ fontStyle: "italic" }}>rebuilding their life.</em>
            </h2>
            <p
              style={{
                fontFamily: F.body,
                fontSize: 16,
                lineHeight: 1.65,
                color: C.gray,
                margin: "16px 0 0",
              }}
            >
              Every dollar raised helps The One House Project move North Alabama families from
              instability to stability — faster, and with dignity.
            </p>
          </div>
        </section>
      )}

      {/* CONTACT */}
      <section style={{ background: C.cream, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "44px 22px", textAlign: "center" }}>
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
            Day-of Contact
          </div>
          <h2 style={{ fontFamily: F.body, fontWeight: 600, fontSize: 26, color: C.green, margin: "8px 0 18px" }}>
            Lost or running late? Call us.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 12,
            }}
          >
            <ContactCard name={CONTACTS.canyon.name} phone={CONTACTS.canyon.phone} tel={CONTACTS.canyon.tel} />
            <ContactCard
              name={CONTACTS.oneHouse.name}
              phone={CONTACTS.oneHouse.phone}
              tel={CONTACTS.oneHouse.tel}
            />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon, label, text }: { icon: "t-shirt" | "sun"; label: string; text: string }) {
  return (
    <div
      style={{
        background: C.card,
        border: `1px solid ${C.border}`,
        padding: "18px 20px",
        display: "flex",
        alignItems: "center",
        gap: 14,
      }}
    >
      <Icon name={icon} size={26} color={C.gold2} style={{ flex: "none" }} />
      <div>
        <div
          style={{
            fontFamily: F.label,
            fontSize: 10,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: C.gold2,
          }}
        >
          {label}
        </div>
        <div style={{ fontFamily: F.body, fontSize: 14, color: C.green, marginTop: 2 }}>{text}</div>
      </div>
    </div>
  );
}

function ContactCard({ name, phone, tel }: { name: string; phone: string; tel: string }) {
  return (
    <a
      href={`tel:${tel}`}
      className="hhx-border-gold2"
      style={{
        textDecoration: "none",
        border: `1px solid ${C.border}`,
        padding: 18,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
      }}
    >
      <Icon name="phone-call" size={22} color={C.gold2} />
      <span>
        <span style={{ display: "block", fontFamily: F.body, fontWeight: 600, fontSize: 16, color: C.green }}>
          {name}
        </span>
        <span style={{ display: "block", fontFamily: F.label, fontSize: 13, color: C.gray }}>{phone}</span>
      </span>
    </a>
  );
}
