import dynamic from "next/dynamic";
import HeroCarousel from "@/components/sections/HeroCarousel";
import MarqueeTicker from "@/components/sections/MarqueeTicker";
import Stats from "@/components/sections/Stats";
import ServiceCategories from "@/components/sections/ServiceCategories";
import CostCalculator from "@/components/sections/CostCalculator";

const FeaturedServices = dynamic(() => import("@/components/sections/FeaturedServices"));
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"));
const InstallationProcess = dynamic(() => import("@/components/sections/InstallationProcess"));
const Materials = dynamic(() => import("@/components/sections/Materials"));
const BeforeAfter = dynamic(() => import("@/components/sections/BeforeAfter"));
const Team = dynamic(() => import("@/components/sections/Team"));
const ServiceAreas = dynamic(() => import("@/components/sections/ServiceAreas"));
const CustomerReviews = dynamic(() => import("@/components/sections/CustomerReviews"));
const FAQAccordion = dynamic(() => import("@/components/sections/FAQAccordion"));
const ContactForm = dynamic(() => import("@/components/forms/ContactForm"));

export default function Home() {
  const searchActionSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://manikantasafetysolutions.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://manikantasafetysolutions.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      {/* SearchAction Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(searchActionSchema) }}
      />

      {/* Varied Homepage Flow */}
      <HeroCarousel />
      <MarqueeTicker />
      <Stats />
      <WhyChooseUs />
      <FeaturedServices />
      <ServiceCategories />
      <BeforeAfter />
      <Materials />
      <CostCalculator />
      <InstallationProcess />
      <CustomerReviews />
      <ServiceAreas />
      <FAQAccordion />
      <Team />
      <ContactForm />
    </>
  );
}
