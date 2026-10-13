import type { NextConfig } from "next";

const nextConfig: NextConfig = {

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
