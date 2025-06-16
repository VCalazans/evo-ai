/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Ensure environment variables are available in production
  env: {
    NEXT_PUBLIC_PLATFORM_LOGO_URL: process.env.NEXT_PUBLIC_PLATFORM_LOGO_URL,
    NEXT_PUBLIC_PLATFORM_FAVICON_URL: process.env.NEXT_PUBLIC_PLATFORM_FAVICON_URL,
  },
  // Enable experimental features for better env var handling
  experimental: {
    // This ensures that env vars are properly injected at build time
    forceSwcTransforms: true,
  },
}

export default nextConfig
