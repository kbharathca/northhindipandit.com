#!/usr/bin/env node

// Build script for static HTML export (cPanel/Plesk deployment)
// This script temporarily uses next.config.static.mjs for the build

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const configPath = path.join(__dirname, '..', 'next.config.mjs');
const staticConfigPath = path.join(__dirname, '..', 'next.config.static.mjs');
const backupPath = path.join(__dirname, '..', 'next.config.mjs.backup');

try {
  // Backup original config
  if (fs.existsSync(configPath)) {
    fs.copyFileSync(configPath, backupPath);
    console.log('✓ Backed up next.config.mjs');
  }

  // Use static config
  fs.copyFileSync(staticConfigPath, configPath);
  console.log('✓ Using next.config.static.mjs for build');

  // Run build
  console.log('🔨 Building static HTML export...');
  execSync('next build', { stdio: 'inherit' });

  // Generate sitemap.xml after build
  console.log('\n🗺️  Generating sitemap.xml...');
  execSync('node scripts/generate-sitemap.js', { stdio: 'inherit' });

  console.log('\n✨ Build complete!');
  console.log('📁 Static files are in the "out/" folder');
  console.log('🚀 Ready to upload to cPanel or Plesk');
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
} finally {
  // Restore original config
  if (fs.existsSync(backupPath)) {
    fs.copyFileSync(backupPath, configPath);
    fs.unlinkSync(backupPath);
    console.log('✓ Restored next.config.mjs');
  }
}
