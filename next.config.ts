import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@base-ui/react",
      "@hugeicons/react",
      "@hugeicons/core-free-icons",
    ],
  },

  images: {
    // Responsive image candidate widths served by Next.js image optimisation.
    // Covers mobile (320–480), tablet (640–768), desktop (1024–1600).
    deviceSizes: [320, 480, 640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Allow remote images from Vercel Blob public endpoints.
    // Restricted to the blob.vercel-storage.com hostname only.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
    ],
    // Prefer AVIF, then WebP — Next.js negotiates via Accept header.
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      // Legacy journal slug redirect to canonical published article
      {
        source: "/journal/improve-website-search-visibility",
        destination: "/journal/website-development-search-visibility-conversions",
        permanent: true,
      },
      // Services sub-route redirects to dedicated service pages
      {
        source: "/services/web-development",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/services/seo-services",
        destination: "/seo-services",
        permanent: true,
      },
      {
        source: "/services/seo",
        destination: "/seo-services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
