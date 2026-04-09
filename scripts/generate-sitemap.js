#!/usr/bin/env node

/**
 * Sitemap generator for northhindipandit.com
 * Generates sitemap.xml with all pages and service routes
 * Used in static export build process
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuration
const DOMAIN = 'https://northhindipandit.com';
const OUT_DIR = path.join(__dirname, '..', 'out');

// All static routes
const routes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/contact-us', priority: '0.8', changefreq: 'monthly' },
];

// Service routes (pujas)
const pujas = [
  'griha-pravesh-puja-bangalore',
  'satyanarayan-puja-bangalore',
  'ganesh-puja-bangalore',
  'maha-mrityunjaya-jaap-bangalore',
  'bhoomi-puja-bangalore',
  'marriage-puja-bangalore',
  'rudrabhishek-puja-bangalore',
  'shraadh-puja-bangalore',
];

// Add service routes
pujas.forEach((slug) => {
  routes.push({
    path: `/services/${slug}`,
    priority: '0.85',
    changefreq: 'weekly',
  });
});

/**
 * Generate sitemap XML
 */
function generateSitemapXML() {
  const urlEntries = routes
    .map(
      (route) =>
        `  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

/**
 * Write sitemap to out/ directory
 */
function writeSitemap() {
  try {
    // Ensure out directory exists
    if (!fs.existsSync(OUT_DIR)) {
      console.error('❌ Error: out/ directory not found. Build may not have completed.');
      process.exit(1);
    }

    const sitemapContent = generateSitemapXML();
    const sitemapPath = path.join(OUT_DIR, 'sitemap.xml');

    fs.writeFileSync(sitemapPath, sitemapContent, 'utf-8');
    console.log('✓ Generated sitemap.xml');
    console.log(`  📍 Location: out/sitemap.xml`);
    console.log(`  🌐 Domain: ${DOMAIN}`);
    console.log(`  📄 Pages: ${routes.length}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
}

// Generate and write sitemap
writeSitemap();
