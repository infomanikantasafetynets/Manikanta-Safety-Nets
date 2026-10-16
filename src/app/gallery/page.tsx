import { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";
import GalleryFilterClient from "./GalleryFilterClient";
import { generateBreadcrumbSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: "Photo Gallery | Manikanta Safety Solutions - Safety Nets & Invisible Grills Bangalore, Karnataka",
  description:
    "Browse photos of safety nets, invisible grills, anti-bird spikes, and ceiling cloth hangers installed by Manikanta Safety Solutions across Bangalore: Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Photo Gallery | Manikanta Safety Solutions - Safety Nets & Invisible Grills Bangalore, Karnataka",
    description:
      "Browse photos of safety nets, invisible grills, anti-bird spikes, and ceiling cloth hangers installed by Manikanta Safety Solutions across Bangalore: Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
    url: "https://manikantasafetysolutions.in/gallery",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Manikanta Safety Solutions Installation Photo Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | Manikanta Safety Solutions - Safety Nets & Invisible Grills Bangalore, Karnataka",
    description:
      "Browse photos of safety nets, invisible grills, anti-bird spikes, and ceiling cloth hangers installed by Manikanta Safety Solutions across Bangalore serving Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
    images: ["/images/og-image.webp"],
  },
};

export default function GalleryPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Gallery", item: "/gallery" },
  ];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Photo Gallery | Manikanta Safety Solutions",
    "url": "https://manikantasafetysolutions.in/gallery",
    "description": "Photo archives of completed netting and invisible grill setups by Manikanta Safety Solutions in Bangalore across Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Inject Structured Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E8972F] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Gallery</span>
        </nav>

        {/* Title Header */}
        <div className="text-left max-w-3xl mb-12 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8972F] bg-[#F0F7F7] px-3.5 py-1.5 rounded-full inline-block self-start">
            Visual Proof
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Installation Gallery & Close-Ups
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Browse through real photographs of Manikanta Safety Solutions installations. Filters include Safety Netting types, Invisible Grills, Hangers, raw materials, and team operations.
          </p>
        </div>

        {/* Dynamic client filter page */}
        <GalleryFilterClient />
      </div>
    </div>
  );
}
