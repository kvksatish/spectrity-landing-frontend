import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'spectrity.bio',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.spectrity.bio',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  
  // Static export configuration for build storage
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  
  // Disable features not supported in static export
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;