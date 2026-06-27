// Resolve the canonical site origin for metadata, robots, and sitemap.
// Set NEXT_PUBLIC_SITE_URL once the final domain is connected in Vercel;
// otherwise we fall back to the Vercel-provided production/preview URL.
export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProd) return `https://${vercelProd}`;

  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}
