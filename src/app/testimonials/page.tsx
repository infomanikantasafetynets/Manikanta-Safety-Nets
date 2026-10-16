import { Metadata } from "next";
import { generateBreadcrumbSchema, generateAggregateRatingSchema } from "@/utils/schema";
import TestimonialsClient from "./TestimonialsClient";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials | Manikanta Safety Solutions - Safety Nets & Invisible Grills Bangalore, Karnataka",
  description:
    "Read 150+ verified reviews for Manikanta Safety Solutions across Bangalore, including Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road. Rated 4.9/5 for safety netting and invisible grills.",
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Customer Reviews & Testimonials | Manikanta Safety Solutions - Safety Nets & Invisible Grills Bangalore, Karnataka",
    description:
      "Read 150+ verified reviews for Manikanta Safety Solutions across Bangalore, including Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
    url: "https://manikantasafetysolutions.in/testimonials",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Manikanta Safety Solutions Testimonials & Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Reviews & Testimonials | Manikanta Safety Solutions - Safety Nets & Invisible Grills Bangalore, Karnataka",
    description:
      "Read 150+ verified reviews for Manikanta Safety Solutions across Bangalore serving Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
    images: ["/images/og-image.webp"],
  },
};

export default function TestimonialsPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Testimonials", item: "/testimonials" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateAggregateRatingSchema()) }}
      />
      <TestimonialsClient />
    </>
  );
}
