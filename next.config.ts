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
};

export default nextConfig;
