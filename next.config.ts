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
};

export default nextConfig;
