import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Mulish } from "next/font/google";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const SITE_TITLE = "Kinsey Lawrence — Coherence Reflection & Energetic Clarity";
const SITE_DESCRIPTION =
  "Intuitive guidance with Kinsey Lawrence — a translator between your higher self and your conscious mind. Coherence reflection & energetic clarity sessions.";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mulish",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Kinsey Lawrence",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    images: ["/images/hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/hero.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#515e4c",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${mulish.variable}`}>
      <body>{children}</body>
    </html>
  );
}
