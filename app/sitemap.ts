import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const ROUTES = [
  "",
  "/players",
  "/special-guests",
  "/sponsors",
  "/volunteers",
  "/sponsors-wall",
  "/course",
  "/faq",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  return ROUTES.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
