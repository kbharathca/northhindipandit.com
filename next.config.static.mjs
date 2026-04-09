// Static export configuration for cPanel/Plesk hosting
// Use: npm run build:static
// Creates static HTML files in ./out/ folder

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  distDir: 'out',
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
