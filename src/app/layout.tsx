import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import SideFloatingContact from "@/components/shared/SideFloatingContact";
import CookieConsent from "@/components/ui/CookieConsent";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

import { generateLocalBusinessSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: {
    default: "Safety Nets & Invisible Grills in Bangalore | Manikanta Safety Solutions",
    template: "%s",
  },
  description:
    "Looking for safety nets, invisible grills, or cloth drying hangers in Bangalore? Explore 19 services from Manikanta Safety Solutions and contact us for an enquiry.",
  keywords: [
    "Safety Nets in Bangalore",
    "Invisible Grills in Bangalore",
    "Balcony Safety Nets Bangalore",
    "Pigeon Safety Nets Bangalore",
    "Window Invisible Grills Bangalore",
    "Ceiling Cloth Hangers Bangalore",
    "Anti Bird Spikes Bangalore",
    "Manikanta Safety Solutions",
    "Safety Nets Whitefield",
    "Safety Nets Koramangala",
    "Safety Nets Indiranagar",
    "Safety Nets HSR Layout",
    "Safety Nets Electronic City",
    "Invisible Grills Whitefield",
    "Invisible Grills Koramangala",
  ],
  metadataBase: new URL("https://manikantasafetysolutions.in"),
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Safety Nets & Invisible Grills in Bangalore | Manikanta Safety Solutions",
    description:
      "Looking for safety nets, invisible grills, or cloth drying hangers in Bangalore? Explore 19 services from Manikanta Safety Solutions and contact us for an enquiry.",
    url: "https://manikantasafetysolutions.in",
    siteName: "Manikanta Safety Solutions",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Safety Nets & Invisible Grills in Bangalore - Manikanta Safety Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safety Nets & Invisible Grills in Bangalore | Manikanta Safety Solutions",
    description:
      "Looking for safety nets, invisible grills, or cloth drying hangers in Bangalore? Explore 19 services from Manikanta Safety Solutions and contact us for an enquiry.",
    images: ["/images/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon SVG tag */}
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/icon.svg" />
      </head>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900 flex flex-col min-h-screen selection:bg-[#E8972F] selection:text-white`}
      >
        {/* LocalBusiness JSON-LD Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        <Navbar />
        <main className="flex-grow pt-[96px] sm:pt-[102px] lg:pt-[108px]">{children}</main>
        <Footer />
        <FloatingCTA />
        <SideFloatingContact />
        <CookieConsent />
      </body>
    </html>
  );
}
