import HeroCarousel from "@/components/sections/HeroCarousel";
import MarqueeTicker from "@/components/sections/MarqueeTicker";
import Stats from "@/components/sections/Stats";
import ServiceCategories from "@/components/sections/ServiceCategories";
import CostCalculator from "@/components/sections/CostCalculator";

import FeaturedServices from "@/components/sections/FeaturedServices";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import InstallationProcess from "@/components/sections/InstallationProcess";
import Materials from "@/components/sections/Materials";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Team from "@/components/sections/Team";
import ServiceAreas from "@/components/sections/ServiceAreas";
import CustomerReviews from "@/components/sections/CustomerReviews";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ContactForm from "@/components/forms/ContactForm";

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
