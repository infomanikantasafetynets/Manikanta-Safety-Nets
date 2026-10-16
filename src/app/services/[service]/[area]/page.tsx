import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  MapPin,
  ShieldCheck,
  Award,
  Clock,
  Phone,
  MessageSquare,
  CheckCircle2,
  Star,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  Layers,
  Wrench,
  FileCheck,
} from "lucide-react";
import { servicesData, ServiceDetail } from "@/utils/servicesData";
import { areasData, AreaDetail } from "@/utils/areasData";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateLocalBusinessSchema,
  generateFAQPageSchema,
} from "@/utils/schema";
import QuickLeadForm from "@/components/forms/QuickLeadForm";
import ServicePromoTicker from "@/components/sections/ServicePromoTicker";

interface PageProps {
  params: Promise<{ service: string; area: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { service, area } = await params;
  const serviceDetail = servicesData[service];
  const areaDetail = areasData[area];

  if (!serviceDetail || !areaDetail) {
    return {
      title: "Service Location Not Found | Manikanta Safety Solutions",
    };
  }

  const title = `${serviceDetail.name} in ${areaDetail.name} | Flat 20% OFF & 10-Yr Warranty - Manikanta Safety Solutions`;
  const description = `Get expert ${serviceDetail.name} installation in ${areaDetail.name}, Bangalore, Karnataka. UV-treated virgin HDPE mesh, SS316 marine invisible grills, 10-year warranty, Flat 20% discount, and free doorstep measurement across ${areaDetail.localities.slice(0, 5).join(", ")}. Call +91 95503 18183.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${service}/${area}`,
    },
    openGraph: {
      title,
      description,
      url: `https://manikantasafetysolutions.in/services/${service}/${area}`,
      images: [
        {
          url: serviceDetail.image || "/images/og-image.webp",
          width: 1200,
          height: 630,
          alt: `${serviceDetail.name} in ${areaDetail.name} - Manikanta Safety Solutions`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [serviceDetail.image || "/images/og-image.webp"],
    },
  };
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const serviceKeys = Object.keys(servicesData);
  const topAreas = Object.keys(areasData).slice(0, 25);

  const params: { service: string; area: string }[] = [];

  for (const service of serviceKeys) {
    for (const area of topAreas) {
      params.push({ service, area });
    }
  }

  return params;
}

export default async function ServiceLocationPage({ params }: PageProps) {
  const { service, area } = await params;
  const serviceDetail = servicesData[service];
  const areaDetail = areasData[area];

  if (!serviceDetail || !areaDetail) {
    notFound();
  }

  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: serviceDetail.categoryName, item: `/services/${serviceDetail.category}` },
    { name: serviceDetail.name, item: `/services/${serviceDetail.slug}` },
    { name: `${areaDetail.name}`, item: `/services/${serviceDetail.slug}/${areaDetail.slug}` },
  ];

  // Tailored localized FAQs
  const localFAQs = [
    {
      question: `What is the cost of ${serviceDetail.name} in ${areaDetail.name}?`,
      answer: `Pricing for ${serviceDetail.name} in ${areaDetail.name} starts transparently based on per-square-foot dimensions, material thickness selection, and anchoring complexity. We provide 100% free doorstep measurements across ${areaDetail.name} with a zero-advance quote.`,
    },
    {
      question: `How quickly can you install ${serviceDetail.name} in ${areaDetail.name}?`,
      answer: `We offer same-day and next-day installation across all major residential sectors in ${areaDetail.name} (${areaDetail.localities.slice(0, 4).join(", ")}). Most residential installations are finished cleanly within 2 to 4 hours.`,
    },
    {
      question: `How does your ${serviceDetail.name} withstand the climate in ${areaDetail.name}?`,
      answer: `Our installations in ${areaDetail.name} utilize UV-stabilized virgin polymer netting and marine-grade SS316 stainless steel hardware designed to resist local weather conditions, heat, and monsoon climate without sagging or corroding.`,
    },
    {
      question: `Do you provide a warranty on ${serviceDetail.name} in ${areaDetail.name}?`,
      answer: `Yes, every ${serviceDetail.name} installation by Manikanta Safety Solutions in ${areaDetail.name} includes an official 10 Years Replacement Warranty Card and Flat 20% Discount auto-applied.`,
    },
    {
      question: `Is your bird netting and spike installation 100% humane and safe?`,
      answer: `Yes, absolutely. Manikanta Safety Solutions strictly adheres to non-lethal, eco-friendly bird exclusion methods complying with Indian animal welfare regulations. Our nets and blunt spikes create a harmless physical barrier with zero harm to pigeons or other wildlife.`,
    },
    {
      question: `Do you require permissions from apartment associations in ${areaDetail.name}?`,
      answer: `Our installations use high-tensile invisible anchoring techniques that preserve the building's exterior aesthetic and structural strength, making them fully compliant with high-rise apartment association standards across ${areaDetail.name}.`,
    },
  ];

  // Related other services in this same area
  const otherServicesInArea = Object.values(servicesData)
    .filter((s) => s.slug !== serviceDetail.slug)
    .slice(0, 6);

  // Same service in other Bangalore, Karnataka cities
  const sameServiceInOtherAreas = areaDetail.nearbySlugs
    .map((slug) => areasData[slug])
    .filter(Boolean);

  const whatsappMessage = encodeURIComponent(
    `Hello Manikanta Safety Solutions! I would like to claim the Flat 20% Discount and 10 Years Warranty for ${serviceDetail.name} in ${areaDetail.name}. Please confirm my free site visit.`
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema(
              `${serviceDetail.name} in ${areaDetail.name}`,
              serviceDetail.categoryName,
              serviceDetail.description
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema(areaDetail.name)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQPageSchema(localFAQs)),
        }}
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#06182C] via-[#0D5C5C] to-[#0D3B66] text-white pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
        {/* Background Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold text-amber-200/70 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <span>/</span>
            <Link href={`/services/${serviceDetail.slug}`} className="hover:text-white">
              {serviceDetail.name}
            </Link>
            <span>/</span>
            <span className="text-[#E8972F] font-bold">{areaDetail.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Conversion Copy & Triggers */}
            <div className="lg:col-span-7 space-y-6">
              {/* Top Badges: Flat 20% OFF + Reviews */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md animate-pulse">
                  🔥 Flat 20% OFF Today
                </span>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-amber-200">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span>4.9/5 Rated in {areaDetail.name} (1,200+ Homes)</span>
                </div>
              </div>

              {/* Dynamic H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                Professional <span className="text-[#E8972F]">{serviceDetail.name}</span> in {areaDetail.name}
              </h1>

              {/* Localized Subheading */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Protect your home and loved ones with certified, heavy-duty {serviceDetail.name.toLowerCase()} in{" "}
                <strong>{areaDetail.name}</strong>. Virgin UV-stabilized materials, rustproof SS316 marine-grade hardware, 10-Year Replacement Warranty card, Flat 20% Discount, and 100% free doorstep inspection across {areaDetail.localities.slice(0, 4).join(", ")}.
              </p>

              {/* Key Selling Points Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">Free Laser Measurement</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <Award className="w-5 h-5 text-[#E8972F] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">10-Year Replacement Warranty</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <Sparkles className="w-5 h-5 text-amber-300 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-amber-200">Flat 20% Discount Included</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <Clock className="w-5 h-5 text-[#E8972F] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">Same-Day 2-3 Hr Installation</span>
                </div>
              </div>

              {/* Instant Call & WhatsApp CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href="tel:+919550318183"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#E8972F] to-[#01579B] hover:from-[#039BE5] hover:to-[#E8972F] text-white font-extrabold text-sm rounded-2xl shadow-xl shadow-sky-950/40 hover:scale-[1.02] transition-transform"
                >
                  <Phone className="w-4 h-4 animate-bounce" />
                  <span>Call Now: +91 95503 18183 (Save 20%)</span>
                </a>
                <a
                  href={`https://wa.me/919550318183?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-sm rounded-2xl shadow-xl shadow-emerald-950/30 hover:scale-[1.02] transition-transform"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp 20% Quote</span>
                </a>
              </div>
            </div>

            {/* Right Column: Instant High-Converting Lead Form */}
            <div className="lg:col-span-5">
              <QuickLeadForm
                serviceName={serviceDetail.name}
                serviceSlug={serviceDetail.slug}
                cityName={areaDetail.name}
                citySlug={areaDetail.slug}
              />
            </div>
          </div>
        </div>
      </div>

      {/* High-Converting 20% Discount & 10 Years Warranty Scrolling Ticker */}
      <ServicePromoTicker />

      {/* Localities & Neighborhoods We Serve in This City */}
      <section className="py-12 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8972F] bg-[#F0F7F7] px-3 py-1 rounded-full inline-block mb-2">
              Local Service Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Same-Day {serviceDetail.name} Across All Localities in {areaDetail.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Our mobile technician vans are stationed across {areaDetail.name} for immediate site inspection, measurement, and installation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {areaDetail.localities.map((locality, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-3 bg-slate-50 hover:bg-[#F0F7F7]/70 border border-slate-200/70 rounded-xl transition-colors text-slate-800"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E8972F] shrink-0" />
                <span className="text-xs font-bold truncate">{locality}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Specifications & Engineering Overview */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: About Service in City Context */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8972F] bg-emerald-50/60 px-3 py-1 rounded-full inline-block">
                Built for {areaDetail.name} High-Rises
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Why {areaDetail.name} Homeowners Trust Manikanta Safety Solutions
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {serviceDetail.longDescription}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-white p-4 rounded-2xl border border-slate-200">
                <strong>Climate &amp; Structural Note for {areaDetail.name}:</strong> {areaDetail.weatherDetails}
              </p>

              {/* Benefits Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {serviceDetail.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technical Specs Table */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-100 mb-4">
                <Layers className="w-5 h-5 text-[#E8972F]" />
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {serviceDetail.name} Technical Specifications
                </h3>
              </div>

              <div className="divide-y divide-slate-100 text-xs">
                {serviceDetail.specsTable.map((spec, idx) => (
                  <div key={idx} className="py-2.5 flex justify-between items-center gap-4">
                    <span className="text-slate-500 font-semibold">{spec.label}</span>
                    <span className="text-slate-900 font-bold text-right">{spec.value}</span>
                  </div>
                ))}
                <div className="py-2.5 flex justify-between items-center gap-4">
                  <span className="text-slate-500 font-semibold">Service Region</span>
                  <span className="text-[#E8972F] font-bold text-right">{areaDetail.name}, Bangalore, Karnataka</span>
                </div>
                <div className="py-2.5 flex justify-between items-center gap-4">
                  <span className="text-slate-500 font-semibold">Warranty Provided</span>
                  <span className="text-emerald-600 font-bold text-right">10 Years Replacement Card</span>
                </div>
                <div className="py-2.5 flex justify-between items-center gap-4">
                  <span className="text-slate-500 font-semibold">Special Promotion</span>
                  <span className="text-amber-600 font-bold text-right">Flat 20% OFF Auto-Applied</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Simple Installation Workflow */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8972F] bg-[#F0F7F7] px-3 py-1 rounded-full inline-block mb-2">
              Hassle-Free Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How We Work in {areaDetail.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              From free inspection to clean, certified installation in 3 transparent steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 relative">
              <span className="w-10 h-10 rounded-2xl bg-[#E8972F] text-white font-extrabold flex items-center justify-center text-base mb-4 shadow-md shadow-sky-800/20">
                1
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                1. Free Doorstep Measurement
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our certified technician visits your apartment in {areaDetail.name} with authentic material samples, performs laser measurements, and discusses your exact needs. 100% free with no booking obligation.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 relative">
              <span className="w-10 h-10 rounded-2xl bg-[#E8972F] text-white font-extrabold flex items-center justify-center text-base mb-4 shadow-md shadow-sky-800/20">
                2
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                2. Transparent Written Quote
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You receive a transparent per-square-foot quote with zero hidden charges. We confirm the exact material thickness, anchor type, and installation schedule that fits your availability.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 relative">
              <span className="w-10 h-10 rounded-2xl bg-[#E8972F] text-white font-extrabold flex items-center justify-center text-base mb-4 shadow-md shadow-sky-800/20">
                3
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                3. Expert Clean Installation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our trained height-safety technicians complete the anchoring in 2 to 4 hours, vacuum-clean the drill area, test the tension, and hand over your signed 10-Year Replacement Warranty Certificate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews from this specific city */}
      {areaDetail.customerReviews && areaDetail.customerReviews.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8972F] bg-emerald-50/60 px-3 py-1 rounded-full inline-block mb-2">
                Verified Resident Feedback
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                What Customers in {areaDetail.name} Say About Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {areaDetail.customerReviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                      &ldquo;{rev.review}&rdquo;
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{rev.name}</h4>
                      <p className="text-[11px] text-slate-500">{rev.locality}</p>
                    </div>
                    <span className="text-[10px] font-bold text-[#E8972F] bg-[#F0F7F7] px-2 py-0.5 rounded-md">
                      Verified
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Localized FAQ Section */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8972F] bg-[#F0F7F7] px-3 py-1 rounded-full inline-block mb-2">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions in {areaDetail.name}
            </h2>
          </div>

          <div className="space-y-4">
            {localFAQs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-slate-50 rounded-2xl border border-slate-200 p-5 [&_summary::-webkit-details-marker]:hidden"
                open={idx === 0}
              >
                <summary className="flex items-center justify-between cursor-pointer font-bold text-sm text-slate-900">
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#E8972F] shrink-0" />
                    {faq.question}
                  </span>
                  <span className="text-xs font-bold text-[#E8972F] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 pt-3 border-t border-slate-200/60 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Interlinking: Other Services in City & Same Service in other Cities */}
      <section className="py-14 bg-slate-100/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Other Services in this city */}
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-800 mb-4 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#E8972F]" />
                Other Popular Services in {areaDetail.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {otherServicesInArea.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}/${areaDetail.slug}`}
                    className="p-3 bg-white hover:bg-[#F0F7F7] rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:text-[#E8972F] flex items-center justify-between transition-colors shadow-2xs"
                  >
                    <span>{s.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Same service in nearby Bangalore, Karnataka cities */}
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-800 mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E8972F]" />
                {serviceDetail.name} in Other Bangalore, Karnataka Cities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {sameServiceInOtherAreas.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/services/${serviceDetail.slug}/${city.slug}`}
                    className="p-3 bg-white hover:bg-[#F0F7F7] rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:text-[#E8972F] flex items-center justify-between transition-colors shadow-2xs"
                  >
                    <span>{serviceDetail.name} in {city.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile Bottom Conversion Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-3 flex items-center gap-2 shadow-2xl">
        <a
          href="tel:+919550318183"
          className="flex-1 py-3 px-3 bg-[#E8972F] text-white text-xs font-extrabold rounded-xl flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4" />
          <span>Call: 9550318183</span>
        </a>
        <a
          href={`https://wa.me/919550318183?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-3 bg-[#25D366] text-white text-xs font-extrabold rounded-xl flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Quote</span>
        </a>
      </div>
    </div>
  );
}
