"use client";

import { useEffect } from "react";

// Registers the PWA service worker so the app shell + assets are cached and
// the site loads on flaky / no signal once it's been visited. Production only
// (avoids stale-cache surprises during local dev).
export function ServiceWorker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;
    const register = () => navigator.serviceWorker.register("/sw.js").catch(() => {});
    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });
  }, []);

  return null;
}
