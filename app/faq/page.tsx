import type { Metadata } from "next";
import { C, F } from "@/lib/theme";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: C.green, color: C.cream }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "40px 22px", textAlign: "center" }}>
          <div
            style={{
              fontFamily: F.label,
              fontWeight: 500,
              fontSize: 11,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: C.gold,
            }}
          >
            Day-of Questions
          </div>
          <h1 style={{ fontFamily: F.display, fontWeight: 400, fontSize: 40, lineHeight: 1.05, color: C.cream, margin: "12px 0 0" }}>
            Everything you
            <br />
            <em style={{ fontStyle: "italic", color: C.gold }}>need to know.</em>
          </h1>
        </div>
      </section>

      <section style={{ background: C.cream }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "36px 22px 52px" }}>
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
