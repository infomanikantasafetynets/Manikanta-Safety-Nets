import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Home,
  MapPin,
  Shield,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  Star,
  Award,
  Clock,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { areasData } from "@/utils/areasData";
import { servicesData } from "@/utils/servicesData";
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQPageSchema } from "@/utils/schema";
import MapFrame from "@/components/ui/map-frame";
import ContactForm from "@/components/forms/ContactForm";

interface PageProps {
  params: Promise<{ area: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const areaDetail = areasData[resolvedParams.area];

  if (!areaDetail) {
    return {
      title: "Area Not Found | Manikanta Safety Solutions - Safety Nets & Invisible Grills Bangalore, Karnataka",
    };
  }

  const title = `Safety Nets & Invisible Grills in ${areaDetail.name} | Manikanta Safety Solutions Bangalore, Karnataka`;
  const description = `Manikanta Safety Solutions provides professional balcony safety nets, pigeon netting, and SS316 invisible grills in ${areaDetail.name}, Bangalore, Karnataka. Free doorstep inspection across ${areaDetail.localities.slice(0, 5).join(", ")}. Call +91 95503 18183.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/areas/${resolvedParams.area}`,
    },
    openGraph: {
      title,
      description,
      url: `https://manikantasafetysolutions.in/areas/${resolvedParams.area}`,
      images: [
        {
          url: "/images/og-image.webp",
          width: 1200,
          height: 630,
          alt: `Safety Nets in ${areaDetail.name} - Manikanta Safety Solutions`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.webp"],
    },
  };
}

export const dynamicParams = true;

export async function generateStaticParams() {
  return Object.keys(areasData).map((slug) => ({
    area: slug,
  }));
}

export default async function AreaDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const areaDetail = areasData[resolvedParams.area];

  if (!areaDetail) {
    notFound();
  }

  // Get nearby areas
  const nearbyAreas = areaDetail.nearbySlugs
    .map((slug) => areasData[slug])
    .filter(Boolean);

  // All 18 services
  const allServices = Object.values(servicesData);

  // Local FAQs customized to the area name
  const localFAQs = [
    {
      question: `Do you charge for site inspection visits in ${areaDetail.name}?`,
      answer: `No. Manikanta Safety Solutions offers 100% free site visits, catalog displays, and measurements in ${areaDetail.name} and surrounding Bangalore, Karnataka locations without any payment commitments.`,
    },
    {
      question: `What is the delivery time for safety nets in ${areaDetail.name}?`,
      answer: `Most standard balcony netting setups in ${areaDetail.name} are completed within 2 to 4 hours. Larger residential shafts or commercial nets are completed within a single working day.`,
    },
    {
      question: `Can Manikanta Safety Solutions invisible grills handle the weather in ${areaDetail.name}?`,
      answer: `Yes. Our invisible grills utilize marine-grade SS316 stainless steel wires wrapped in a clear nylon protective casing. They are highly rustproof and resist Bangalore, Karnataka's extreme heat and coastal sea moisture.`,
    },
    {
      question: `Are your bird control spikes and nets safe and humane?`,
      answer: `Yes, 100%. We strictly use non-lethal, harmless exclusion methods that do not trap or injure birds, in full compliance with animal welfare standards.`,
    },
  ];

  // Dynamic Schemas
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Areas We Serve", item: "/areas" },
    { name: areaDetail.name, item: `/areas/${areaDetail.slug}` },
  ];

  const whatsappMessage = encodeURIComponent(
    `Hello Manikanta Safety Solutions! I would like to request a free site inspection for safety nets / invisible grills in ${areaDetail.name}.`
  );

  return (
    <div className="bg-slate-50 min-h-screen py-8 md:py-12">
      {/* Dynamic Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema(areaDetail.name)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQPageSchema(localFAQs)) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E8972F] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/areas" className="hover:text-[#E8972F]">
            Areas
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-bold">{areaDetail.name}</span>
        </nav>

        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#063333] via-[#0D5C5C] to-[#1B6868] text-white p-8 sm:p-12 mb-12 shadow-xl">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-amber-200 border border-white/15">
              <MapPin className="w-3.5 h-3.5 text-[#E8972F]" />
              <span>Doorstep Service across {areaDetail.name}, Bangalore</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Safety Nets &amp; Invisible Grills in <span className="text-[#E8972F]">{areaDetail.name}</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Premium protective netting, bird exclusion structures, and space-saving cloth hangers installed by certified professionals across all neighborhoods in {areaDetail.name}.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="tel:+919550318183"
                className="flex items-center justify-center gap-2 bg-[#E8972F] text-white font-extrabold px-6 py-3 rounded-full hover:bg-amber-200 text-xs shadow-lg transition-transform hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 95503 18183</span>
              </a>
              <a
                href={`https://wa.me/919550318183?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-extrabold px-6 py-3 rounded-full hover:bg-[#1EBE5D] text-xs shadow-lg transition-transform hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Free Quote</span>
              </a>
            </div>
          </div>
        </div>

        {/* Localities Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-12">
          <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Key Localities &amp; Residential Sectors Served in {areaDetail.name}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Same-day inspection available with certified height technicians across these neighborhoods.
              </p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Same-Day Dispatch</span>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {areaDetail.localities.map((loc, idx) => (
              <div
                key={idx}
                className="p-3 bg-slate-50 border border-slate-200/70 rounded-xl text-xs font-bold text-slate-700 flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E8972F] shrink-0" />
                <span className="truncate">{loc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content & Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Left Column: Local Overview & Services */}
          <div className="lg:col-span-8 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Apartment Living &amp; Safety Requirements in {areaDetail.name}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">{areaDetail.overview}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{areaDetail.apartmentLiving}</p>
            </div>

            {/* All Services Dedicated Landing Pages in this City */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-bold text-slate-900">
                  All Specialized Services Available in {areaDetail.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Click any service below to view custom pricing, specs, and instant quote options in {areaDetail.name}.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {allServices.map((srv) => (
                  <Link
                    key={srv.slug}
                    href={`/services/${srv.slug}/${areaDetail.slug}`}
                    className="p-3.5 bg-slate-50 hover:bg-[#F0F7F7]/70 border border-slate-200/80 rounded-2xl flex flex-col justify-between group transition-all"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8972F] block mb-1">
                        {srv.categoryName}
                      </span>
                      <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#E8972F] transition-colors line-clamp-2">
                        {srv.name} in {areaDetail.name}
                      </h4>
                    </div>
                    <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-[#E8972F]">
                      <span>Get Free Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Weather Notes */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-base font-bold text-slate-900">
                Weather-Proofing &amp; Material Selection for {areaDetail.name}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{areaDetail.weatherDetails}</p>
            </div>
          </div>

          {/* Right Column: Sidebar Map & Nearby Cities */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                Service Zone Map
              </h3>
              <MapFrame areaName={areaDetail.name} />
            </div>

            {/* Nearby Areas */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">
                Other Service Hubs in Bangalore
              </h3>
              <div className="space-y-2">
                {nearbyAreas.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/areas/${city.slug}`}
                    className="flex items-center justify-between p-3 bg-slate-50 hover:bg-[#F0F7F7] rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:text-[#E8972F] transition-colors"
                  >
                    <span>{city.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews for this City */}
        {areaDetail.customerReviews && areaDetail.customerReviews.length > 0 && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs mb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">
              Customer Reviews from {areaDetail.name} Residents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {areaDetail.customerReviews.map((rev, idx) => (
                <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-600 italic leading-relaxed">&ldquo;{rev.review}&rdquo;</p>
                  </div>
                  <div className="pt-3 border-t border-slate-200 mt-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800">{rev.name}</span>
                    <span className="text-[10px] text-slate-500">{rev.locality}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs mb-16 max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">
            Frequently Asked Questions in {areaDetail.name}
          </h2>
          <div className="space-y-4">
            {localFAQs.map((faq, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/70">
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 mb-1.5">{faq.question}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* General Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
}
