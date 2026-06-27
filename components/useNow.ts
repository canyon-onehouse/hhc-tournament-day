"use client";

import { useEffect, useState } from "react";
import { nowMinutesCentral } from "@/lib/time";

// Minutes-since-midnight in Central time, refreshed every 30s. Starts `null`
// on the server / first paint to avoid a hydration mismatch (the prototype
// likewise begins with nowMin = null), then fills in after mount.
export function useNow(): number | null {
  const [nowMin, setNowMin] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNowMin(nowMinutesCentral());
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return nowMin;
}
