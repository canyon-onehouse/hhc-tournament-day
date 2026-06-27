import Link from "next/link";
import { C, F } from "@/lib/theme";
import { CONTACTS, LINKS } from "@/lib/config";
import { Icon, type IconName } from "./Icon";

const FOOTER_NAV = [
  { href: "/", label: "Home" },
  { href: "/players", label: "Players" },
  { href: "/special-guests", label: "Guests" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/volunteers", label: "Volunteers" },
  { href: "/sponsors-wall", label: "Our Sponsors" },
  { href: "/course", label: "Hole-by-Hole" },
  { href: "/faq", label: "FAQ" },
];

const SOCIALS: { href: string; label: string; icon: IconName }[] = [
  { href: LINKS.instagram, label: "Instagram", icon: "instagram-logo" },
  { href: LINKS.facebook, label: "Facebook", icon: "facebook-logo" },
  { href: LINKS.youtube, label: "YouTube", icon: "youtube-logo" },
  { href: LINKS.website, label: "Website", icon: "globe" },
];

export function Footer() {
  return (
    <footer style={{ background: C.navy, color: C.cream }}>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "46px 22px 30px", textAlign: "center" }}>
        <img src="/logo-ohp-white.svg" alt="The One House Project" style={{ width: 170, height: "auto" }} />
        <p
          style={{
            fontFamily: F.body,
            fontStyle: "italic",
            fontSize: 15,
            lineHeight: 1.55,
            color: "rgba(247,243,230,.7)",
            margin: "18px auto 0",
            maxWidth: 440,
          }}
        >
          Moving North Alabama families from instability to stability — faster, and with dignity.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 22px", marginTop: 24 }}>
          <a
            href={`tel:${CONTACTS.canyon.tel}`}
            style={{ fontFamily: F.label, fontSize: 13, color: C.gold, textDecoration: "none" }}
          >
            Canyon · {CONTACTS.canyon.phone}
          </a>
          <a
            href={`tel:${CONTACTS.oneHouse.tel}`}
            style={{ fontFamily: F.label, fontSize: 13, color: C.gold, textDecoration: "none" }}
          >
            One House · {CONTACTS.oneHouse.phone}
          </a>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 22 }}>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener"
              aria-label={s.label}
              className="hhx-tint-strong"
              style={{
                width: 42,
                height: 42,
                border: "1px solid rgba(169,149,96,.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <Icon name={s.icon} size={19} color={C.gold} />
            </a>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "8px 16px",
            marginTop: 26,
            paddingTop: 22,
            borderTop: "1px solid rgba(169,149,96,.25)",
          }}
        >
          {FOOTER_NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: F.label,
                fontSize: 11,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "rgba(247,243,230,.7)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <p style={{ fontFamily: F.label, fontSize: 11, color: "rgba(247,243,230,.45)", margin: "22px 0 0" }}>
          © 2026 One House Project, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
