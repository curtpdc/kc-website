import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    formats: ['image/webp', 'image/avif'],
  },
  // Enable static exports if needed
  // output: 'export',
};

export default nextConfig;
