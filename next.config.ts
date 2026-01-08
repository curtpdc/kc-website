import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [],
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
