import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Azure Static Web Apps deployment
  output: 'export',
  images: {
    // Disable Next.js Image optimization for static export
    // Image optimization requires a server, which is not available in static sites
    unoptimized: true,
    remotePatterns: [],
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
