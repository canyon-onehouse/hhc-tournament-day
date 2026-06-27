import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lora, Poppins } from "next/font/google";
import "./globals.css";
import { EVENT } from "@/lib/config";
import { siteUrl } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceWorker } from "@/components/ServiceWorker";

// Self-hosted via next/font — no runtime CDN request, no layout shift.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_DESCRIPTION =
  "You're confirmed for the Huntsville Hope Classic — when to arrive, where to go, and who to call. Monday, June 29, 2026 at Canebrake Club, benefiting The One House Project.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: `${EVENT.name} — Day-of`,
    template: `%s · ${EVENT.name}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: EVENT.name,
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Hope Classic",
  },
  icons: {
    icon: "/icon-ohp-square-color.svg",
    apple: "/icon-ohp-square-color.svg",
  },
  openGraph: {
    title: `${EVENT.name} — Day-of`,
    description: SITE_DESCRIPTION,
    siteName: EVENT.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${EVENT.name} — Day-of`,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1f14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lora.variable} ${poppins.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ServiceWorker />
      </body>
    </html>
  );
}
