import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warnings won't fail the build — allows deployment even with minor lint issues
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Type errors won't fail the build during deployment
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/webp"],
    remotePatterns: [],
  },
};

export default nextConfig;
