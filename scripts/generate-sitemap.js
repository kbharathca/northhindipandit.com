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
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// All static routes with strict trailing slash alignment
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly', lastmod: new Date().toISOString().split('T')[0] },
  { path: '/services/', priority: '0.9', changefreq: 'weekly', lastmod: new Date().toISOString().split('T')[0] },
  { path: '/about-us/', priority: '0.85', changefreq: 'monthly', lastmod: new Date().toISOString().split('T')[0] },
  { path: '/contact-us/', priority: '0.85', changefreq: 'monthly', lastmod: new Date().toISOString().split('T')[0] },
  { path: '/privacy-policy/', priority: '0.5', changefreq: 'yearly', lastmod: new Date().toISOString().split('T')[0] },
  { path: '/terms-and-conditions/', priority: '0.5', changefreq: 'yearly', lastmod: new Date().toISOString().split('T')[0] },
  { path: '/refund-policy/', priority: '0.5', changefreq: 'yearly', lastmod: new Date().toISOString().split('T')[0] },
  { path: '/disclaimer/', priority: '0.5', changefreq: 'yearly', lastmod: new Date().toISOString().split('T')[0] },
];

// Service routes (all 15 pujas)
const pujas = [
  'griha-pravesh-puja-bangalore',
  'satyanarayan-puja-bangalore',
  'ganesh-puja-bangalore',
  'maha-mrityunjaya-jaap-bangalore',
  'bhoomi-puja-bangalore',
  'marriage-puja-bangalore',
  'rudrabhishek-puja-bangalore',
  'shraadh-puja-bangalore',
  'hanuman-puja-bangalore',
  'durga-puja-bangalore',
  'lakshmi-puja-bangalore',
  'saraswati-puja-bangalore',
  'ram-puja-bangalore',
  'krishna-puja-bangalore',
  'navagraha-puja-bangalore',
];

// Add service routes with trailing slash
pujas.forEach((slug) => {
  routes.push({
    path: `/services/${slug}/`,
    priority: '0.85',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0],
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
    <lastmod>${route.lastmod}</lastmod>
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
    const sitemapPathOut = path.join(OUT_DIR, 'sitemap.xml');
    const sitemapPathPublic = path.join(PUBLIC_DIR, 'sitemap.xml');

    fs.writeFileSync(sitemapPathOut, sitemapContent, 'utf-8');
    fs.writeFileSync(sitemapPathPublic, sitemapContent, 'utf-8');
    console.log('✓ Generated sitemap.xml');
    console.log(`  📍 Locations: out/sitemap.xml and public/sitemap.xml`);
    console.log(`  🌐 Domain: ${DOMAIN}`);
    console.log(`  📄 Pages: ${routes.length}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
}

// Generate and write sitemap
writeSitemap();
