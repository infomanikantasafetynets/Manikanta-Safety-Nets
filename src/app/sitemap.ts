import { MetadataRoute } from "next";
import { servicesData } from "@/utils/servicesData";
import { bangaloreAreasList } from "@/utils/areasData";
import { projectsData } from "@/utils/projectsData";
import { blogData } from "@/utils/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://manikantasafetysolutions.in";

  // 1. Static Pages
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/pricing",
    "/testimonials",
    "/case-studies",
    "/areas",
    "/projects",
    "/gallery",
    "/blog",
    "/search",
    "/privacy-policy",
    "/terms-and-conditions",
    "/thank-you",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route === "/services" || route === "/contact" || route === "/areas" ? 0.9 : 0.8,
  }));

  // 2. Service Category Hubs
  const categoryRoutes = [
    "/services/safety-nets",
    "/services/invisible-grills",
    "/services/cloth-hangers",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // 3. Dynamic Service Pages (All 18 Services)
  const serviceRoutes = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // 4. Dynamic Bangalore Area Hubs (All 110+ Localities)
  const areaRoutes = bangaloreAreasList.map((slug) => ({
    url: `${baseUrl}/areas/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // 5. Dynamic High-Conversion Service + Location Landing Pages (18 services x 110 areas = 1,980 pages)
  const serviceAreaRoutes: MetadataRoute.Sitemap = [];
  Object.keys(servicesData).forEach((serviceSlug) => {
    bangaloreAreasList.forEach((areaSlug) => {
      serviceAreaRoutes.push({
        url: `${baseUrl}/services/${serviceSlug}/${areaSlug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9, // High priority for Local SEO & Google Search Indexing
      });
    });
  });

  // 6. Project Case Studies
  const projectRoutes = Object.keys(projectsData).map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 7. Long-Form Blog Guides
  const blogRoutes = Object.keys(blogData).map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...serviceRoutes,
    ...areaRoutes,
    ...serviceAreaRoutes,
    ...projectRoutes,
    ...blogRoutes,
  ];
}
