import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Device widths for responsive srcset generation
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    // Image sizes for fill / layout=responsive cards
    imageSizes: [16, 32, 64, 96, 128, 256, 384, 512],
    // Deliver AVIF first (smallest), fall back to WebP
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for 1 year
    minimumCacheTTL: 31536000,
    // Allowed quality levels
    qualities: [60, 75, 85],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        // Static images: cache 1 year, immutable (versioned by Next.js _next/image)
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Next.js optimised image endpoint — allow generous stale-while-revalidate
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
