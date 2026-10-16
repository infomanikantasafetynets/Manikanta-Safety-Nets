import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/utils/schema";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Case Studies | Manikanta Safety Solutions - Safety Nets & Invisible Grills Bangalore, Karnataka",
  description:
    "Explore case studies & real installation projects by Manikanta Safety Solutions across Bangalore, including Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies | Manikanta Safety Solutions - Safety Nets & Invisible Grills Bangalore, Karnataka",
    description:
      "Explore case studies & real installation projects by Manikanta Safety Solutions across Bangalore, including Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
    url: "https://manikantasafetysolutions.in/case-studies",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Manikanta Safety Solutions Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Manikanta Safety Solutions - Safety Nets & Invisible Grills Bangalore, Karnataka",
    description:
      "Explore case studies & real installation projects by Manikanta Safety Solutions across Bangalore serving Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
    images: ["/images/og-image.webp"],
  },
};

export default function CaseStudiesPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Case Studies", item: "/case-studies" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <CaseStudiesClient />
    </>
  );
}
