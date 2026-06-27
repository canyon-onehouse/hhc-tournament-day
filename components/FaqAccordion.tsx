"use client";

import { useState } from "react";
import { C, F } from "@/lib/theme";
import { FAQS } from "@/lib/faq";
import { Icon } from "./Icon";

// Day-of FAQ — one item open at a time, matching the prototype.
export function FaqAccordion() {
  const [open, setOpen] = useState<number>(-1);

  return (
    <>
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            style={{ border: `1px solid ${C.border}`, marginBottom: 10, background: C.card }}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                background: "transparent",
                border: 0,
                padding: "18px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 14,
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span style={{ fontFamily: F.body, fontWeight: 600, fontSize: 17, color: C.green }}>
                {item.q}
              </span>
              <Icon name={isOpen ? "minus" : "plus"} size={18} color={C.gold2} style={{ flex: "none" }} />
            </button>
            {isOpen && (
              <div style={{ padding: "0 20px 20px" }}>
                <p style={{ fontFamily: F.body, fontSize: 15, lineHeight: 1.6, color: C.gray, margin: 0 }}>
                  {item.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
