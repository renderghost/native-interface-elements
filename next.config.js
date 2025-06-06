/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Turbopack configuration (stable in Next.js 15+)
  turbopack: {
    resolveAlias: {
      // Ensure aliases in tsconfig.json are properly resolved
      '@/*': './src/*'
    }
  },
  
  // Handle other config options
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Configure image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
  }
};

module.exports = nextConfig;

