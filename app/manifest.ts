import type { MetadataRoute } from "next";
import { EVENT } from "@/lib/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${EVENT.name} — Day-of`,
    short_name: "Hope Classic",
    description:
      "Your day-of guide to the Huntsville Hope Classic — when to arrive, where to go, and who to call.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#1d3a23",
    theme_color: "#0f1f14",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
