import { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";
import SearchCoreClient from "./SearchCoreClient";
import { generateBreadcrumbSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: "Search | Manikanta Safety Solutions - Safety Nets & Invisible Grills Bangalore, Karnataka",
  description:
    "Search across Manikanta Safety Solutions balcony safety nets, invisible grills, anti-bird netting, and service locations in Bangalore: Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
  alternates: {
    canonical: "/search",
  },
  openGraph: {
    title: "Search | Manikanta Safety Solutions - Safety Nets & Invisible Grills Bangalore, Karnataka",
    description:
      "Search across Manikanta Safety Solutions balcony safety nets, invisible grills, anti-bird netting, and service locations in Bangalore.",
    url: "https://manikantasafetysolutions.in/search",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Search Manikanta Safety Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Search | Manikanta Safety Solutions - Safety Nets & Invisible Grills Bangalore, Karnataka",
    description:
      "Search across Manikanta Safety Solutions balcony safety nets, invisible grills, and safety solutions in Bangalore.",
    images: ["/images/og-image.webp"],
  },
};

export default function SearchPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Search", item: "/search" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Inject Structured Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E8972F] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Search</span>
        </nav>

        {/* Title Header */}
        <div className="text-left mb-10 flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8972F] bg-[#F0F7F7] px-3 py-1 rounded-full inline-block self-start">
            Fuzzy Finder
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight leading-none">
            Global Search Engine
          </h1>
        </div>

        {/* Wrap Search client core inside Suspense to satisfy Next.js useSearchParams rule */}
        <Suspense
          fallback={
            <div className="text-center py-12 select-none">
              <div className="w-8 h-8 border-2 border-slate-300 border-t-accent-orange rounded-full animate-spin mx-auto mb-3" />
              <span className="text-xs font-bold text-slate-500">Loading indexes...</span>
            </div>
          }
        >
          <SearchCoreClient />
        </Suspense>
      </div>
    </div>
  );
}
