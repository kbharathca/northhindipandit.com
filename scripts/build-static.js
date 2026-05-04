#!/usr/bin/env node

// Build script for the static export used by Cloudflare Pages and other
// static hosts. It runs the Next.js export build and then writes SEO assets.

import { execSync } from 'child_process';

try {
  console.log('🔨 Building static export...');
  execSync('next build', { stdio: 'inherit' });

  console.log('\n🗺️  Generating sitemap.xml...');
  execSync('node scripts/generate-sitemap.js', { stdio: 'inherit' });

  console.log('\n📊 Generating schema.org structured data...');
  execSync('node scripts/generate-schemas.js', { stdio: 'inherit' });

  console.log('\n✨ Build complete!');
  console.log('📁 Static files are in the "out/" folder');
  console.log('☁️  Ready for Cloudflare Pages deployment');
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}
