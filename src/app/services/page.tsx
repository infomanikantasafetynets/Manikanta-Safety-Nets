import Link from "next/link";
import Image from "next/image";
import { Shield, Eye, Settings, ArrowRight, Home } from "lucide-react";
import { servicesData } from "@/utils/servicesData";
import ServicePromoTicker from "@/components/sections/ServicePromoTicker";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Manikanta Safety Solutions - Safety Nets & Invisible Grills Bangalore, Karnataka",
  description:
    "Explore 18+ safety net solutions, invisible grills, and ceiling cloth hangers by Manikanta Safety Solutions across Bangalore: Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | Manikanta Safety Solutions - Safety Nets & Invisible Grills Bangalore, Karnataka",
    description:
      "Explore 18+ safety net solutions, invisible grills, and ceiling cloth hangers by Manikanta Safety Solutions across Bangalore: Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
    url: "https://manikantasafetysolutions.in/services",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Manikanta Safety Solutions Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Manikanta Safety Solutions - Safety Nets & Invisible Grills Bangalore, Karnataka",
    description:
      "Explore 19+ safety net solutions, invisible grills, and ceiling cloth hangers by Manikanta Safety Solutions across Bangalore serving Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
    images: ["/images/og-image.webp"],
  },
};

export default function ServicesPage() {
  const servicesList = Object.values(servicesData);
  const safetyNetsCount = servicesList.filter((s) => s.category === "safety-nets").length;
  const invisibleGrillsCount = servicesList.filter((s) => s.category === "invisible-grills").length;
  const clothHangersCount = servicesList.filter((s) => s.category === "cloth-hangers").length;

  const categories = [
    {
      id: "safety-nets",
      name: `Safety Nets (${safetyNetsCount} Services)`,
      icon: <Shield className="w-5 h-5 text-[#E8972F]" />,
      description: "Custom-fitted, high-tensile HDPE safety nets for child safety, pet security, mosquito prevention, bird prevention, anti-bird spikes, and sports grounds.",
      items: servicesList.filter((s) => s.category === "safety-nets"),
    },
    {
      id: "invisible-grills",
      name: `Invisible Grills (${invisibleGrillsCount} Services)`,
      icon: <Eye className="w-5 h-5 text-[#E8972F]" />,
      description: "Elegant, marine-grade SS316 cable grills for balconies, windows, staircases, child & pet safety, and commercial complexes.",
      items: servicesList.filter((s) => s.category === "invisible-grills"),
    },
    {
      id: "cloth-hangers",
      name: `Cloth Hangers (${clothHangersCount} Services)`,
      icon: <Settings className="w-5 h-5 text-[#E8972F]" />,
      description: "Rustproof dual-rope pulley and wall-mounted drying systems to optimize balcony floor space.",
      items: servicesList.filter((s) => s.category === "cloth-hangers"),
    },
  ];

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.manikantasafetysolutions.in",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.manikantasafetysolutions.in/services",
      },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Breadcrumb Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation UI */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E8972F] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Services</span>
        </nav>

        {/* Page Title Header */}
        <div className="text-left max-w-3xl mb-8 flex flex-col gap-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Our Installation Services
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Choose from our 19 certified safety netting, structural invisible grills, and drying hanger services in Bangalore. Backed by 10 Years Warranty and Flat 20% Instant Discount!
          </p>
        </div>

        {/* High-Converting 20% OFF & 10 Years Warranty Scrolling Ticker */}
        <ServicePromoTicker />

        {/* Categories Loop */}
        <div className="flex flex-col gap-20">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-28">
              {/* Category Title */}
              <div className="border-b border-slate-200 pb-5 mb-10">
                <h2 className="text-2xl font-extrabold text-slate-800 flex items-center gap-3">
                  <span className="p-2 bg-white rounded-xl shadow-xs border border-slate-100 shrink-0">
                    {cat.icon}
                  </span>
                  <span>{cat.name}</span>
                </h2>
                <p className="text-slate-500 text-sm mt-2 max-w-2xl">{cat.description}</p>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.items.map((service) => (
                  <div
                    key={service.slug}
                    className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-lg border border-slate-100 transition-all duration-300 group flex flex-col h-full"
                  >
                    <div className="relative h-64 w-full bg-slate-200 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`Manikanta Safety Solutions - ${service.name} Installation Bangalore, Karnataka`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      
              loading="lazy"
              quality={75}
            />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#E8972F] transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-grow">
                        {service.description}
                      </p>
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0D5C5C] hover:text-[#E8972F] transition-colors group/btn pt-4 border-t border-slate-50 mt-auto"
                      >
                        <span>View Installation Details</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
