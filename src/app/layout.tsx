import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
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
    default: "Manikanta Safety Solutions | Safety Nets & Invisible Grills Bangalore, Karnataka",
    template: "%s | Manikanta Safety Solutions - Safety Nets & Invisible Grills Bangalore, Karnataka",
  },
  description:
    "Manikanta Safety Solutions provides premium balcony safety nets, anti-bird netting, child fall protection, and SS316 invisible grills across Bangalore, including Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, Jayanagar, Yelahanka, JP Nagar, and Sarjapur Road.",
  keywords: [
    "Safety Nets Bangalore, Karnataka",
    "Invisible Grills Bangalore, Karnataka",
    "Balcony Safety Nets Bangalore, Karnataka",
    "Pigeon Safety Nets Bangalore, Karnataka",
    "Window Invisible Grills Bangalore, Karnataka",
    "Ceiling Cloth Hangers Bangalore, Karnataka",
    "Anti Bird Spikes Bangalore, Karnataka",
    "Manikanta Safety Solutions Bangalore, Karnataka",
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
    title: "Manikanta Safety Solutions | Safety Nets & Invisible Grills Bangalore, Karnataka",
    description:
      "Expert safety netting and modern invisible grill installation in Bangalore across Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, Jayanagar, Yelahanka, JP Nagar, and Sarjapur Road.",
    url: "https://manikantasafetysolutions.in",
    siteName: "Manikanta Safety Solutions",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Manikanta Safety Solutions - Safety Nets & Invisible Grills Bangalore, Karnataka",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manikanta Safety Solutions | Safety Nets & Invisible Grills Bangalore, Karnataka",
    description:
      "Premium safety nets and invisible grill installers in Bangalore serving Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, Jayanagar, and Yelahanka.",
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
        <main className="flex-grow pt-[84px] sm:pt-[92px]">{children}</main>
        <Footer />
        <FloatingCTA />
        <CookieConsent />
      </body>
    </html>
  );
}
