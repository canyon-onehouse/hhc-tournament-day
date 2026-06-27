"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { C, F } from "@/lib/theme";
import { EVENT, CONTACTS, LINKS } from "@/lib/config";
import { liveStatus } from "@/lib/schedule";
import { Icon } from "./Icon";
import { useNow } from "./useNow";

const LABELS: Record<string, string> = {
  "/": "Home",
  "/players": "Players & Teams",
  "/special-guests": "Special Guests",
  "/sponsors": "Sponsors",
  "/volunteers": "Volunteers",
  "/faq": "FAQ",
  "/sponsors-wall": "Our Sponsors",
  "/course": "Hole-by-Hole",
};

const AUDIENCE_LINKS = [
  { href: "/players", label: "Players & Teams" },
  { href: "/special-guests", label: "Special Guests" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/volunteers", label: "Volunteers" },
];

const REFERENCE_LINKS = [
  { href: "/sponsors-wall", label: "Our Sponsors" },
  { href: "/course", label: "Hole-by-Hole" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const nowMin = useNow();
  const live = liveStatus(nowMin);
  const currentLabel = LABELS[pathname ?? "/"] ?? "Menu";

  // Lock background scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        background: "rgba(29,58,35,.97)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 4px 6px -4px rgba(0,0,0,.18)",
      }}
    >
      <div
        style={{
          maxWidth: 920,
          margin: "0 auto",
          padding: "0 18px",
          height: 54,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <Link
          href="/"
          onClick={close}
          style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: 6, flex: "none" }}
        >
          <span style={{ fontFamily: F.display, fontSize: 18, color: C.cream, letterSpacing: ".3px" }}>
            Hope <em style={{ fontStyle: "italic", color: C.gold }}>Classic</em>
          </span>
        </Link>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          className="hhx-tint-strong"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            height: 40,
            minWidth: 0,
            padding: "0 12px 0 14px",
            border: "1px solid rgba(169,149,96,.6)",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              fontFamily: F.label,
              fontSize: 11,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: C.cream,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {currentLabel}
          </span>
          <Icon name="caret-down" size={15} color={C.gold} />
        </button>

        <a
          href={`tel:${CONTACTS.canyon.tel}`}
          aria-label="Call Canyon"
          className="hhx-tint-strong"
          style={{
            width: 40,
            height: 40,
            flex: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(169,149,96,.6)",
            textDecoration: "none",
          }}
        >
          <Icon name="phone-call" size={18} color={C.gold} />
        </a>
      </div>

      {/* date + live status sub-bar */}
      <div style={{ background: C.navy, borderTop: "1px solid rgba(169,149,96,.25)" }}>
        <div
          style={{
            maxWidth: 920,
            margin: "0 auto",
            padding: "7px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: F.display,
              fontSize: 11,
              letterSpacing: "2.5px",
              color: C.gold,
              whiteSpace: "nowrap",
            }}
          >
            {EVENT.microBanner}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: 99,
                background: C.gold,
                animation: "hhpulse 1.8s ease-in-out infinite",
                flex: "none",
              }}
            />
            <span
              style={{
                fontFamily: F.label,
                fontSize: 10,
                letterSpacing: ".5px",
                color: "rgba(247,243,230,.85)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ color: C.gold }}>{live.label}</span> · {live.line}
            </span>
          </span>
        </div>
      </div>
      </header>

      {menuOpen && (
        <div
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 80,
            background: "rgba(15,31,20,.55)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
          }}
        >
          <nav
            onClick={(e) => e.stopPropagation()}
            aria-label="Site menu"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 280,
              maxWidth: "84vw",
              height: "100%",
              background: C.green,
              borderLeft: "1px solid rgba(169,149,96,.4)",
              padding: "22px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              overflowY: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 14,
              }}
            >
              <span
                style={{
                  fontFamily: F.label,
                  fontSize: 11,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: C.gold,
                }}
              >
                Jump To
              </span>
              <button
                onClick={close}
                aria-label="Close menu"
                style={{
                  width: 34,
                  height: 34,
                  border: "1px solid rgba(169,149,96,.5)",
                  background: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name="x" size={16} color={C.gold} />
              </button>
            </div>

            <Link
              href="/"
              onClick={close}
              style={{
                fontFamily: F.body,
                fontWeight: 600,
                fontSize: 18,
                color: C.cream,
                textDecoration: "none",
                padding: "11px 0",
                borderBottom: "1px solid rgba(169,149,96,.2)",
              }}
            >
              Home
            </Link>

            <div style={{ marginTop: 10, paddingTop: 14, borderTop: "1px solid rgba(169,149,96,.2)" }}>
              <div
                style={{
                  fontFamily: F.label,
                  fontSize: 10,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: C.gold,
                }}
              >
                Who Are You?
              </div>
              <div
                style={{
                  fontFamily: F.body,
                  fontStyle: "italic",
                  fontSize: 12.5,
                  color: "rgba(247,243,230,.55)",
                  marginTop: 3,
                }}
              >
                Select the option that best fits you
              </div>
              <div
                style={{
                  borderLeft: "2px solid rgba(169,149,96,.45)",
                  paddingLeft: 16,
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {AUDIENCE_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={close}
                    style={{
                      fontFamily: F.body,
                      fontWeight: 500,
                      fontSize: 16,
                      color: C.cream,
                      textDecoration: "none",
                      padding: "9px 0",
                    }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: 10,
                paddingTop: 14,
                borderTop: "1px solid rgba(169,149,96,.2)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {REFERENCE_LINKS.map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  style={{
                    fontFamily: F.body,
                    fontWeight: 600,
                    fontSize: 18,
                    color: C.cream,
                    textDecoration: "none",
                    padding: "11px 0",
                    borderBottom:
                      i < REFERENCE_LINKS.length - 1 ? "1px solid rgba(169,149,96,.2)" : undefined,
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <a
              href={LINKS.give}
              target="_blank"
              rel="noopener"
              style={{
                marginTop: 18,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: 13,
                background: C.gold,
                color: C.navy,
                fontFamily: F.label,
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              <Icon name="heart" size={15} color={C.navy} />
              Donate
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
