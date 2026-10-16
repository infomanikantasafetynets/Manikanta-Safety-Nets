export interface SchemaBreadcrumb {
  name: string;
  item: string;
}

export const CITIES_BANGALORE = [
  "Whitefield",
  "Koramangala",
  "Indiranagar",
  "HSR Layout",
  "Electronic City",
  "Marathahalli",
  "Jayanagar",
  "Yelahanka",
  "JP Nagar",
  "Bannerghatta Road",
  "Sarjapur Road",
  "BTM Layout",
  "Hebbal",
  "RHSR Layout",
];

export const CITIES_ANDHRA_PRADESH = CITIES_BANGALORE; // Backwards compatibility alias

export const ALL_18_SERVICES = [
  "Balcony Safety Nets",
  "Children Safety Nets",
  "Pet Safety Nets",
  "Pigeon Safety Nets",
  "Monkey Safety Nets",
  "Cricket Nets",
  "Sports Nets",
  "Construction Safety Nets",
  "Duct Area Safety Nets",
  "Anti-Bird Spikes",
  "Balcony Invisible Grills",
  "Window Invisible Grills",
  "Staircase Invisible Grills",
  "Custom Invisible Grills",
  "Ceiling Cloth Hangers",
  "Balcony Cloth Hangers",
  "Wall Mounted Cloth Hangers",
  "Pull Down Cloth Hangers",
];

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Manikanta Safety Solutions",
    "url": "https://manikantasafetysolutions.in",
    "logo": "https://manikantasafetysolutions.in/images/logo/manikanta-safety-solutions-logo-light.svg",
    "image": "https://manikantasafetysolutions.in/images/og-image.webp",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 95503 18183",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Tamil", "Telugu", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91 70138 18183",
        "contactType": "technical support",
        "areaServed": "IN",
        "availableLanguage": ["English", "Tamil", "Telugu", "Hindi"],
      },
    ],
  };
}

export function generateLocalBusinessSchema(areaName?: string) {
  const citiesServed = areaName
    ? [areaName]
    : CITIES_BANGALORE;

  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": `https://manikantasafetysolutions.in/#localbusiness${areaName ? `-${areaName.toLowerCase().replace(/\s+/g, "-")}` : ""}`,
    "name": areaName ? `Manikanta Safety Solutions - ${areaName}` : "Manikanta Safety Solutions",
    "url": areaName
      ? `https://manikantasafetysolutions.in/areas/${areaName.toLowerCase().replace(/\s+/g, "-")}`
      : "https://manikantasafetysolutions.in",
    "telephone": "+91 95503 18183",
    "alternatePhone": "+91 70138 18183",
    "email": "info.manikantasafetynets@gmail.com",
    "image": "https://manikantasafetysolutions.in/images/og-image.webp",
    "logo": "https://manikantasafetysolutions.in/images/logo/manikanta-safety-solutions-logo-light.svg",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": areaName ? `${areaName}, Bangalore, Karnataka` : "Bangalore, Karnataka",
      "addressLocality": areaName || "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946,
    },
    "areaServed": citiesServed.map((city) => ({
      "@type": "City",
      "name": `${city}, Bangalore, Karnataka`,
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Safety Nets, Invisible Grills & Cloth Hangers Installation Services",
      "itemListElement": ALL_18_SERVICES.map((srv, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": srv,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Manikanta Safety Solutions",
          },
        },
        "position": idx + 1,
      })),
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.96",
      "reviewCount": "385",
      "bestRating": "5",
      "worstRating": "1",
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "08:00",
      "closes": "20:00",
    },
    "sameAs": [
      "https://facebook.com/manikantasafetysolutionsbangalore",
      "https://instagram.com/manikantasafetysolutionsbangalore",
      "https://wa.me/919550318183",
    ],
  };
}

export function generateServiceProductSchema(serviceName: string, serviceSlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${serviceName} Installation in Bangalore`,
    "description": `Top-rated ${serviceName.toLowerCase()} and certified installation by Manikanta Safety Solutions across Bangalore, Karnataka.`,
    "brand": {
      "@type": "Brand",
      "name": "Manikanta Safety Solutions",
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "15",
      "highPrice": "180",
      "offerCount": "100+",
      "availability": "https://schema.org/InStock",
      "url": `https://manikantasafetysolutions.in/services/${serviceSlug}`,
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.95",
      "reviewCount": "240",
      "bestRating": "5",
      "worstRating": "1",
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Manikanta Safety Solutions",
    "url": "https://manikantasafetysolutions.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://manikantasafetysolutions.in/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(items: SchemaBreadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.name,
      "item": crumb.item.startsWith("http")
        ? crumb.item
        : `https://manikantasafetysolutions.in${crumb.item}`,
    })),
  };
}

export function generateServiceSchema(serviceName: string, categoryName?: string, description?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": categoryName || serviceName,
    "name": serviceName,
    "description": description || `${serviceName} by Manikanta Safety Solutions in Bangalore, Karnataka.`,
    "provider": {
      "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
      "name": "Manikanta Safety Solutions",
      "telephone": "+91 95503 18183",
      "email": "info.manikantasafetynets@gmail.com",
      "url": "https://manikantasafetysolutions.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bangalore, Karnataka",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560001",
        "addressCountry": "IN",
      },
    },
    "areaServed": {
      "@type": "City",
      "name": "Bangalore, Karnataka",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.96",
      "reviewCount": "180",
      "bestRating": "5",
      "worstRating": "1",
    },
  };
}

export function generateServiceAreaSchema(serviceName: string, areaName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "name": `${serviceName} in ${areaName}, Bangalore`,
    "provider": {
      "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
      "name": "Manikanta Safety Solutions",
      "telephone": "+91 95503 18183",
      "email": "info.manikantasafetynets@gmail.com",
      "url": "https://manikantasafetysolutions.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": `${areaName}, Bangalore, Karnataka`,
        "addressLocality": areaName,
        "addressRegion": "Karnataka",
        "postalCode": "560001",
        "addressCountry": "IN",
      },
    },
    "areaServed": {
      "@type": "City",
      "name": `${areaName}, Bangalore, Karnataka`,
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.96",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1",
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

export const generateFAQPageSchema = generateFAQSchema;

export function generateAggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Manikanta Safety Solutions",
    "url": "https://manikantasafetysolutions.in",
    "image": "https://manikantasafetysolutions.in/images/og-image.webp",
    "telephone": "+91 95503 18183",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bangalore, Karnataka",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.96",
      "reviewCount": "385",
      "bestRating": "5",
      "worstRating": "1",
    },
  };
}

export function generateArticleSchema(
  articleOrTitle:
    | string
    | {
        title: string;
        description: string;
        slug?: string;
        datePublished: string;
        authorName?: string;
        image?: string;
      },
  description?: string,
  image?: string,
  datePublished?: string
) {
  if (typeof articleOrTitle === "object") {
    const article = articleOrTitle;
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": article.description,
      "mainEntityOfPage": article.slug ? `https://manikantasafetysolutions.in/blog/${article.slug}` : "https://manikantasafetysolutions.in",
      "datePublished": article.datePublished,
      "dateModified": article.datePublished,
      "author": {
        "@type": "Organization",
        "name": article.authorName || "Manikanta Safety Solutions",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Manikanta Safety Solutions",
        "logo": {
          "@type": "ImageObject",
          "url": "https://manikantasafetysolutions.in/images/logo/manikanta-safety-solutions-logo-light.svg",
        },
      },
      "image": article.image || "https://manikantasafetysolutions.in/images/og-image.webp",
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleOrTitle,
    "description": description || "",
    "mainEntityOfPage": "https://manikantasafetysolutions.in",
    "datePublished": datePublished || new Date().toISOString(),
    "dateModified": datePublished || new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Manikanta Safety Solutions",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Manikanta Safety Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://manikantasafetysolutions.in/images/logo/manikanta-safety-solutions-logo-light.svg",
      },
    },
    "image": image || "https://manikantasafetysolutions.in/images/og-image.webp",
  };
}
