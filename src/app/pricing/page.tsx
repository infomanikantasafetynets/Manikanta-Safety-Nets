import { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  Ruler,
  Layers,
  FileCheck,
  Maximize,
  Award,
  Building,
  ShieldCheck,
  Phone,
  MessageSquare,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { generateBreadcrumbSchema } from "@/utils/schema";
import ContactForm from "@/components/forms/ContactForm";
import ServicePromoTicker from "@/components/sections/ServicePromoTicker";

export const metadata: Metadata = {
  title: "Pricing Guide & Estimation | Manikanta Safety Solutions Bangalore, Karnataka",
  description:
    "Transparent per-square-foot pricing for balcony safety nets, SS316 invisible grills & drying hangers by Manikanta Safety Solutions in Whitefield, Koramangala, Indiranagar, and all across Bangalore.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing Guide & Estimation | Manikanta Safety Solutions Bangalore, Karnataka",
    description:
      "Transparent per-square-foot pricing for balcony safety nets, SS316 invisible grills & drying hangers by Manikanta Safety Solutions in Whitefield, Koramangala, Indiranagar, and all across Bangalore.",
    url: "https://manikantasafetysolutions.in/pricing",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Manikanta Safety Solutions Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Guide & Estimation | Manikanta Safety Solutions Bangalore, Karnataka",
    description:
      "Transparent per-square-foot pricing for safety nets, invisible grills & cloth hangers across Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
    images: ["/images/og-image.webp"],
  },
};

export default function PricingPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Pricing", item: "/pricing" },
  ];

  const howWePriceSteps = [
    {
      step: "01",
      icon: <Ruler className="w-7 h-7 text-[#E8972F]" />,
      title: "Complimentary Doorstep Laser Measurement",
      description:
        "Our safety technicians evaluate your balcony, window, or building shaft dimensions using precision laser tools across all 14 Bangalore service zones.",
    },
    {
      step: "02",
      icon: <Layers className="w-7 h-7 text-[#E8972F]" />,
      title: "Physical Material Demonstration",
      description:
        "Inspect real samples of copolymer HDPE netting, marine SS316 stainless cables, and aluminium track channels directly at your premises.",
    },
    {
      step: "03",
      icon: <FileCheck className="w-7 h-7 text-[#E8972F]" />,
      title: "Guaranteed Written Quotation",
      description:
        "Receive an upfront, transparent quotation with all hardware, tensioning, and warranty guarantees itemized with zero surprise charges.",
    },
  ];

  const priceFactors = [
    {
      icon: <Maximize className="w-6 h-6 text-[#E8972F]" />,
      title: "Surface Area & Perimeter Span",
      description:
        "Overall square footage of the balcony, open window sills, staircase void, or vertical duct shaft requiring containment.",
    },
    {
      icon: <Award className="w-6 h-6 text-[#E8972F]" />,
      title: "Polymer & Metallurgy Grade",
      description:
        "Selection between UV-stabilized copolymer HDPE mesh or high-tensile SS316 marine stainless steel cables with DuPont nylon coating.",
    },
    {
      icon: <Building className="w-6 h-6 text-[#E8972F]" />,
      title: "Structural Elevation & Access",
      description:
        "Building floor level, external rope rigging requirements, and masonry anchoring substrate characteristics.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#E8972F]" />,
      title: "Cable Spacing Pitch & Spikes",
      description:
        "Choice between 2-inch (50mm) child-safe pitch or 3-inch (75mm) standard pitch, along with optional stainless bird spikes.",
    },
  ];

  const pricingRanges = [
    {
      title: "Balcony & Window Safety Nets",
      category: "HDPE Virgin Copolymer",
      priceRange: "Starting from ₹15 - ₹28 / sq.ft",
      features: [
        "Flat 20% Discount Auto-Applied",
        "100% Virgin UV-Stabilized Polymer Mesh",
        "SS304 Rustproof Concrete Expansion Eyebolts",
        "Tested 140kg+ Knot Breaking Strength",
        "10-Year Stamped Replacement Warranty",
        "Free Doorstep Laser Measurement",
      ],
      popular: true,
    },
    {
      title: "Marine SS316 Invisible Grills",
      category: "Architectural Stainless Wire",
      priceRange: "Starting from ₹120 - ₹180 / sq.ft",
      features: [
        "Flat 20% Discount Auto-Applied",
        "Aerospace SS316 Marine-Grade Multi-Strand Wire",
        "Clear DuPont Anti-UV Nylon Sheathing",
        "T6 Structural Powder-Coated Aluminium Tracks",
        "10-Year Tension Retention & Anti-Rust Guarantee",
        "100% Unobstructed Panoramic Skyline Views",
      ],
      popular: true,
    },
    {
      title: "Ceiling Cloth Drying Hangers",
      category: "Dual-Pulley Hoist System",
      priceRange: "₹1,800 - ₹3,500 / complete set",
      features: [
        "Flat 20% Discount Auto-Applied",
        "6 Independent Seamless SS304 Stainless Tubes",
        "Smooth Dual-Pulley Nylon Bearing Hardware",
        "Reclaims 100% Balcony Walkway Floor Space",
        "10-Year Mechanical & Material Warranty",
        "Prompt Turnkey Installation Included",
      ],
      popular: false,
    },
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12">
      {/* Inject Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-[#0D5C5C] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Pricing Guide</span>
        </nav>

        {/* Page Header */}
        <div className="text-left max-w-3xl mb-12 flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D5C5C] bg-[#F0F7F7] px-3.5 py-1.5 rounded-full inline-block border border-[#B2DCDC]">
              Transparent Estimations
            </span>
            <span className="text-xs font-black uppercase tracking-wider text-amber-900 bg-amber-400 px-3 py-1 rounded-full animate-pulse shadow-sm">
              🔥 Flat 20% OFF Limited Offer
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Clear, Transparent Safety Solutions Pricing
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            At Manikanta Safety Solutions, we maintain an honest, upfront pricing philosophy with zero hidden charges, transparent per-square-foot calculations, official <strong className="text-[#0D5C5C]">10-Year Replacement Warranty</strong>, <strong className="text-amber-600">Flat 20% Discount</strong>, and complimentary doorstep laser measurements across all Bangalore neighborhoods.
          </p>
        </div>

        {/* Scrolling Promo Ticker */}
        <div className="mb-14">
          <ServicePromoTicker />
        </div>

        {/* Indicative Pricing Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricingRanges.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                tier.popular
                  ? "bg-white border-2 border-[#0D5C5C] shadow-xl"
                  : "bg-white border border-slate-200 shadow-xs"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0D5C5C] text-white text-[10px] font-extrabold uppercase tracking-widest py-1 px-3.5 rounded-full shadow-xs">
                  Most Popular
                </span>
              )}

              <div>
                <span className="text-xs font-bold text-[#E8972F] uppercase tracking-wider block mb-1">
                  {tier.category}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mb-4">
                  {tier.title}
                </h3>
                <div className="p-4 bg-[#F0F7F7] rounded-2xl mb-6 border border-[#B2DCDC]/50">
                  <span className="text-lg sm:text-xl font-black text-[#0D5C5C] block">
                    {tier.priceRange}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium mt-0.5 block">
                    *Exact quote confirmed after complimentary on-site measurement
                  </span>
                </div>

                <ul className="space-y-3 mb-8 text-xs sm:text-sm text-slate-600">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0D5C5C] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className={`w-full text-center py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 block ${
                  tier.popular
                    ? "bg-[#0D5C5C] hover:bg-[#4A9B9B] text-white shadow-sm"
                    : "bg-slate-100 hover:bg-[#0D5C5C] hover:text-white text-slate-800"
                }`}
              >
                Schedule Free Site Measurement
              </Link>
            </div>
          ))}
        </div>

        {/* 3-Step Process Breakdown */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D5C5C] bg-[#F0F7F7] px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#B2DCDC]">
              Our Estimation Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              How We Deliver Fixed, Guaranteed Estimates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howWePriceSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col gap-4 relative group hover:border-[#E8972F] transition-all"
              >
                <span className="text-4xl font-black text-slate-100 group-hover:text-[#0D5C5C]/10 transition-colors absolute top-6 right-6 select-none">
                  {step.step}
                </span>
                <div className="p-3 bg-[#F0F7F7] rounded-2xl w-fit border border-[#B2DCDC]/40">
                  {step.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mt-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Factors */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs mb-20">
          <div className="max-w-3xl mb-10 text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Key Factors Influencing Your Project Cost
            </h2>
            <p className="text-slate-600 text-sm">
              We believe in complete transparency. Here are the primary structural and material variables that determine the final investment for your residence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {priceFactors.map((factor, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="p-3 bg-[#F0F7F7] rounded-2xl shrink-0 border border-[#B2DCDC]/40">
                  {factor.icon}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    {factor.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <div className="rounded-3xl bg-[#0D5C5C] text-white p-8 sm:p-12 mb-16 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8972F] bg-[#E8972F]/10 border border-[#E8972F]/30 px-3 py-1 rounded-full inline-block mb-3">
              Zero Commitment
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Book Your Free Laser Inspection Today
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm">
              Our safety advisors are available 7 days a week across Bangalore. Get exact square-foot pricing with physical wire sample demonstrations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="tel:+919550318183"
              className="bg-[#E8972F] hover:bg-[#F5B054] text-slate-900 font-bold px-6 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 95503 18183</span>
            </a>
            <a
              href="https://wa.me/919550318183?text=Hi%20Manikanta%20Safety%20Solutions%2C%20I%20would%20like%20to%20request%20a%20free%20on-site%20measurement%20and%20pricing%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>

        {/* Lead Form */}
        <ContactForm />
      </div>
    </div>
  );
}
