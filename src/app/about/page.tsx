import { Metadata } from "next";
import Link from "next/link";
import { Home, ShieldCheck, HardHat, Sparkles, CheckCircle2, Building2 } from "lucide-react";
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/utils/schema";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "About Us | Manikanta Safety Solutions - High-Rise Safety Net & Invisible Grill Specialists Bangalore",
  description:
    "Learn about Manikanta Safety Solutions, founded by Manikanta in Bangalore. Discover our engineering-grade balcony safety netting, SS316 marine invisible grills, and certified installation standards.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Manikanta Safety Solutions - High-Rise Safety Net & Invisible Grill Specialists Bangalore",
    description:
      "Learn about Manikanta Safety Solutions, founded by Manikanta in Bangalore. Discover our engineering-grade balcony safety netting, SS316 marine invisible grills, and certified installation standards.",
    url: "https://manikantasafetysolutions.in/about",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "About Manikanta Safety Solutions - Bangalore, Karnataka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Manikanta Safety Solutions - High-Rise Safety Net & Invisible Grill Specialists Bangalore",
    description:
      "Learn about Manikanta Safety Solutions, founded by Manikanta in Bangalore. Discover our engineering-grade balcony safety netting, SS316 marine invisible grills, and certified installation standards.",
    images: ["/images/og-image.webp"],
  },
};

export default function AboutPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "About Us", item: "/about" },
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12">
      {/* Inject Structured Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#0D5C5C] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">About Us</span>
        </nav>

        {/* Hero Section */}
        <div className="text-left max-w-3xl mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0D5C5C] bg-[#F0F7F7] px-3.5 py-1.5 rounded-full inline-block self-start border border-[#B2DCDC]">
            Our Engineering Heritage
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Elevating Safety Standards in Bangalore's Vertical Communities
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Founded by proprietor Manikanta, Manikanta Safety Solutions is a specialized high-altitude safety contracting firm dedicated to eliminating fall hazards and pest bird incursions across high-rise residential towers and commercial properties throughout Bangalore.
          </p>
        </div>

        {/* Split Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          {/* Mission & Story (Left) */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-left">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs flex flex-col gap-5">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#E8972F] shrink-0" />
                <span>Our Founding Mission &amp; Safety Discipline</span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                As Bangalore’s skyline rapidly ascends—from expanding tech corridors like Whitefield, Electronic City, and Sarjapur Road to luxury residential destinations in Koramangala, Indiranagar, and Hebbal—modern architectural blueprints emphasize expansive balconies and wide glass windows. While these open layouts provide wonderful ventilation, they introduce serious fall risks for adventurous toddlers and domestic pets.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Manikanta established Manikanta Safety Solutions with a distinct vision: delivering robust, structural-grade perimeter protection that integrates seamlessly with contemporary architecture without the dark, oppressive feel of obsolete metal bars. By combining 100% virgin copolymer HDPE meshes and marine-grade SS316 stainless wire cables with precision diamond-core drilling, our installations ensure absolute safety and aesthetic refinement.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-[#F0F7F7] rounded-xl text-[#0D5C5C] self-start border border-[#B2DCDC]/40">
                  <HardHat className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Rope-Access Riggers</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Every installer undergoes extensive high-rise rope access, harness safety, and concrete tensile anchoring certification.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-[#F0F7F7] rounded-xl text-[#0D5C5C] self-start border border-[#B2DCDC]/40">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Aviation Metallurgy</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  We install genuine SS316 marine-grade cables enriched with molybdenum alloy to prevent pitting corrosion in all weather.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-[#F0F7F7] rounded-xl text-[#0D5C5C] self-start border border-[#B2DCDC]/40">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Tension Verification</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Every site is vacuum-cleaned of masonry dust and load-tested with multi-point anchor tension calibration before sign-off.
                </p>
              </div>
            </div>
          </div>

          {/* Verification Stats (Right) */}
          <div className="lg:col-span-4 bg-[#0D5C5C] text-white rounded-3xl p-6 sm:p-8 border border-[#1B6868] flex flex-col gap-6 shadow-xl">
            <h3 className="text-base font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#E8972F]" />
              <span>Operational Track Record</span>
            </h3>

            {/* Factual Data */}
            <div className="flex flex-col gap-5 text-left">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-slate-300">Industry Leadership</span>
                <span className="text-xs font-bold text-[#E8972F] uppercase bg-white/10 border border-white/10 px-3 py-1.5 rounded-md self-start">
                  12+ Years Field Expertise
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-slate-300">Verified High-Rise Setups</span>
                <span className="text-xs font-bold text-[#E8972F] uppercase bg-white/10 border border-white/10 px-3 py-1.5 rounded-md self-start">
                  3,850+ Completed Projects
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-slate-300">Quality Compliance</span>
                <span className="text-xs font-bold text-[#E8972F] uppercase bg-white/10 border border-white/10 px-3 py-1.5 rounded-md self-start">
                  ISO Certified &amp; High-Altitude Calibrated
                </span>
              </div>
            </div>

            <p className="text-slate-200 text-[11px] leading-relaxed pt-2 border-t border-white/10">
              Under the direct leadership of Manikanta, our teams deliver dependable same-day service and genuine 5-to-10 year warranty cards across all 14 Bangalore zones.
            </p>
          </div>
        </div>

        {/* Lead Inquiry Form */}
        <ContactForm />
      </div>
    </div>
  );
}
