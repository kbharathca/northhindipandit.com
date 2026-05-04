// Static export configuration for Cloudflare Pages and similar static hosts.
// `next build` will generate deploy-ready files in the default `out/` folder.

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
