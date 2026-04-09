#!/usr/bin/env node

/**
 * Generate JSON-LD Schema.org structured data for pages
 * Helps Google and search engines understand content better
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'out');

const DOMAIN = 'https://northhindipandit.com';
const phoneNumber = '6206471543';
const phoneNumberIntl = '+91-62-0647-1543';

// Organization Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${DOMAIN}/#organization`,
  name: 'North Hindi Pandit',
  url: DOMAIN,
  telephone: phoneNumberIntl,
  areaServed: {
    '@type': 'City',
    name: 'Bangalore',
    'sameAs': 'https://en.wikipedia.org/wiki/Bangalore',
  },
  description:
    'Trusted Hindi Pandit and North Indian Pandit services in Bangalore for authentic Vedic pujas, same-day booking, and complete puja support.',
  image: `${DOMAIN}/images/hindi-pandit-all-puja.webp`,
  sameAs: [
    'https://www.instagram.com/north.indian.pandit.bangalore',
    'https://www.facebook.com/nileshkumarpandey46365',
    'https://www.youtube.com/@Pandit.Ji.Bangalore',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'National Games Village, Nearby Passport office Koramangala',
    addressLocality: 'Bangalore',
    postalCode: '560095',
    addressCountry: 'IN',
  },
  priceRange: '₹₹',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '06:00',
    closes: '21:00',
  },
};

// Person Schema for Pandit
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pandit Nilesh Kumar Pandey',
  jobTitle: 'Hindu Priest / Vedic Pandit',
  description: 'Expert North Indian Pandit with deep knowledge of Vedic rituals and pujas',
  telephone: phoneNumberIntl,
  areaServed: 'Bangalore',
  knowsAbout: [
    'Vedic Rituals',
    'Griha Pravesh Puja',
    'Satyanarayan Puja',
    'Wedding Ceremonies',
    'Hindu Traditions',
    'Sanskrit Chanting',
  ],
};

// Homepage BreadcrumbList Schema
const homepageBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: DOMAIN,
    },
  ],
};

// Services BreadcrumbList Schema
const servicesBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: DOMAIN,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: `${DOMAIN}/services`,
    },
  ],
};

// Service Page Breadcrumb Template
const serviceBreadcrumbTemplate = (serviceSlug, serviceTitle) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: DOMAIN,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: `${DOMAIN}/services`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: serviceTitle,
      item: `${DOMAIN}/services/${serviceSlug}`,
    },
  ],
});

// Puja Service Schema Template
const pujaServiceTemplate = (title, description, serviceSlug) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${DOMAIN}/services/${serviceSlug}`,
  name: title,
  description: description,
  provider: {
    '@type': 'LocalBusiness',
    name: 'North Hindi Pandit',
    url: DOMAIN,
  },
  areaServed: {
    '@type': 'City',
    name: 'Bangalore',
  },
  serviceType: 'Religious Ceremony',
  offers: {
    '@type': 'Offer',
    availabilityStarts: new Date().toISOString(),
    priceCurrency: 'INR',
    priceRange: '₹₹',
    availability: 'InStock',
  },
});

// FAQPage Schema
const createFAQSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

// Write schemas to JSON files for inclusion in pages
function writeSchemas() {
  try {
    // Ensure out directory exists
    if (!fs.existsSync(outDir)) {
      console.error('❌ Error: out/ directory not found. Run build first.');
      process.exit(1);
    }

    // Create schemas directory
    const schemasDir = path.join(outDir, '_schemas');
    if (!fs.existsSync(schemasDir)) {
      fs.mkdirSync(schemasDir, { recursive: true });
    }

    // Write organizational schemas
    fs.writeFileSync(
      path.join(schemasDir, 'organization.json'),
      JSON.stringify(organizationSchema, null, 2)
    );

    fs.writeFileSync(
      path.join(schemasDir, 'person.json'),
      JSON.stringify(personSchema, null, 2)
    );

    fs.writeFileSync(
      path.join(schemasDir, 'breadcrumb-home.json'),
      JSON.stringify(homepageBreadcrumb, null, 2)
    );

    fs.writeFileSync(
      path.join(schemasDir, 'breadcrumb-services.json'),
      JSON.stringify(servicesBreadcrumb, null, 2)
    );

    console.log('✓ Generated schema.org structured data files');
    console.log(`  📁 Location: out/_schemas/`);
    console.log(`  📄 Files: organization.json, person.json, breadcrumb-*.json`);
    console.log(`  ✅ These schemas improve Google indexing and SERP rankings`);
  } catch (error) {
    console.error('❌ Error generating schemas:', error.message);
    process.exit(1);
  }
}

// Generate schemas
writeSchemas();
