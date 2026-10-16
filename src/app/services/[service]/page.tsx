import { notFound } from "next/navigation";
import Link from "next/link";
import { Home } from "lucide-react";
import { servicesData } from "@/utils/servicesData";
import { ServiceHero, ServiceStickyBar, ServiceTrustBar } from "@/components/sections/service-page/ServiceHero";
import { ServiceAbout, ServiceImages, ServiceBenefits, ServiceSpecs } from "@/components/sections/service-page/ServiceContent";
import { ServiceTimeline, ServiceWhyChoose, ServiceRelated, ServiceFAQs } from "@/components/sections/service-page/ServiceProcess";
import BeforeAfterSlider from "@/components/ui/before-after-slider";
import LightboxGallery from "@/components/ui/lightbox-gallery";
import ContactForm from "@/components/sections/ContactForm";
import ServicePromoTicker from "@/components/sections/ServicePromoTicker";

import { generateBreadcrumbSchema, generateServiceSchema } from "@/utils/schema";

interface PageProps {
  params: Promise<{ service: string }>;
}

// Generate Dynamic SEO Metadata
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const serviceDetail = servicesData[resolvedParams.service];

  if (!serviceDetail) {
    return {
      title: "Service Not Found | Manikanta Safety Solutions - Safety Nets & Invisible Grills Bangalore, Karnataka",
    };
  }

  const title = `${serviceDetail.name} | Manikanta Safety Solutions - Safety Nets & Invisible Grills Bangalore, Karnataka`;
  const description = `${serviceDetail.description} Professional installation by Manikanta Safety Solutions in Bangalore across Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${resolvedParams.service}`,
    },
    openGraph: {
      title,
      description,
      url: `https://manikantasafetysolutions.in/services/${resolvedParams.service}`,
      images: [
        {
          url: serviceDetail.image,
          width: 1200,
          height: 630,
          alt: `Manikanta Safety Solutions - ${serviceDetail.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [serviceDetail.image],
    },
  };
}

// Generate static params for Next.js static page generation (SSG)
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    service: slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const serviceDetail = servicesData[resolvedParams.service];

  if (!serviceDetail) {
    notFound();
  }

  // Related Services (5 related services from same category, excluding current service)
  const relatedServices = Object.values(servicesData)
    .filter((s) => s.category === serviceDetail.category && s.slug !== serviceDetail.slug)
    .slice(0, 5);

  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: serviceDetail.categoryName, item: `/services/${serviceDetail.category}` },
    { name: serviceDetail.name, item: `/services/${serviceDetail.slug}` },
  ];

  // Dynamic Service Schema details
  const serviceSchema = generateServiceSchema(
    serviceDetail.name,
    serviceDetail.categoryName,
    serviceDetail.description
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Inject Dynamic Service and Breadcrumb Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Sticky Bottom/Top Contact Bar */}
      <ServiceStickyBar name={serviceDetail.name} />

      {/* Hero Section */}
      <ServiceHero
        name={serviceDetail.name}
        categoryName={serviceDetail.categoryName}
        title={serviceDetail.title}
        subtitle={serviceDetail.description}
        aiOverview={serviceDetail.aiOverview}
        image={serviceDetail.image}
      />

      {/* Trust Badges Bar */}
      <ServiceTrustBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* High-Converting 20% Discount & 10 Years Warranty Scrolling Ticker */}
        <ServicePromoTicker serviceName={serviceDetail.name} />

        {/* Localized Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E8972F] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-[#E8972F]">
            Services
          </Link>
          <span>/</span>
          <Link href={`/services/${serviceDetail.category}`} className="hover:text-[#E8972F] capitalize">
            {serviceDetail.categoryName}
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold truncate max-w-[200px]">
            {serviceDetail.name}
          </span>
        </nav>
      </div>

      {/* About Section */}
      <ServiceAbout
        name={serviceDetail.name}
        longDescription={serviceDetail.longDescription}
        benefits={serviceDetail.benefits}
      />

      {/* Collage Gallery Section */}
      <ServiceImages
        name={serviceDetail.name}
        image={serviceDetail.image}
        supportingImages={serviceDetail.supportingImages}
      />

      {/* Benefits Card Grid */}
      <ServiceBenefits benefits={serviceDetail.benefits} />

      {/* 6-Step Installation Process Timeline */}
      <ServiceTimeline />

      {/* Technical Specifications Table */}
      <ServiceSpecs specsTable={serviceDetail.specsTable} />

      {/* Why Choose Manikanta Safety Solutions Section */}
      <ServiceWhyChoose />

      {/* Interactive Before & After Comparison Slider */}
      <section className="bg-white py-20 scroll-mt-12" id="comparison-slider">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8972F] bg-[#F0F7F7] px-3.5 py-1.5 rounded-full inline-block self-center">
              Visual Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
              Interactive Before & After Demonstration
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Drag the central divider bar to see the direct aesthetic difference between unprotected spaces and a secure Manikanta Safety Solutions setup.
            </p>
          </div>
          <BeforeAfterSlider
            beforeImage={serviceDetail.beforeImage}
            afterImage={serviceDetail.afterImage}
          />
        </div>
      </section>

      {/* Interactive Lightbox 6-Image Grid */}
      <section className="bg-slate-50 py-20 scroll-mt-12" id="lightbox-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8972F] bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block self-center">
              Installation Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
              Photo Gallery & Close-Ups
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Click on any thumbnail below to expand the image in high-resolution, navigate through options, or toggle escape.
            </p>
          </div>
          <LightboxGallery images={serviceDetail.gallery} serviceName={serviceDetail.name} />
        </div>
      </section>

      {/* 12-Item Voice Search Friendly FAQs Accordion */}
      <ServiceFAQs faqs={serviceDetail.faqs} serviceName={serviceDetail.name} />

      {/* Related Services, Areas, and Blog list */}
      <ServiceRelated
        related={relatedServices}
        categoryName={serviceDetail.categoryName}
        currentServiceSlug={serviceDetail.slug}
      />

      {/* Inquiry Contact Form */}
      <ContactForm />
    </div>
  );
}
