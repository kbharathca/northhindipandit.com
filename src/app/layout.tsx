import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import './globals.css';

const gtmId = 'GTM-TQLL35MP';

export const metadata: Metadata = {
  title: 'North Hindi Pandit | Hindi Pandit in Bangalore',
  description:
    'Book trusted Hindi Pandit in Bangalore for authentic Griha Pravesh, Satyanarayan Katha, Marriage & Rudrabhishek. Same-day booking & samagri support.',
  keywords: [
    'Hindi Pandit in Bangalore',
    'North Indian Pandit in Bangalore',
    'North Hindi Pandit',
    'Satyanarayan Puja Bangalore',
    'Grihapravesh Puja Bangalore',
    'Griha Pravesh Puja Bangalore',
    'Rudrabhishek Puja Bangalore',
    'Marriage Puja Bangalore',
    'Navgrah Shanti Puja Bangalore',
    'Mooli shanti puja Bangalore',
    'Antim Sanskar Bangalore',
    'Shradh Puja Bangalore',
    'Pitar Paksh Puja Bangalore',
    'Vedic pandit Bangalore',
    'North Indian Wedding Pandit Bangalore',
    'Puja Booking Bangalore',
  ],
  metadataBase: new URL('https://northhindipandit.com'),
  alternates: {
    canonical: 'https://northhindipandit.com',
  },
  verification: {
    google: 'ASQfLJbRbbtdcVdUq9dovR6m6q8LJzpZrr0Uu-4ZbJ4',
  },
  authors: [
    {
      name: 'Pandit Nilesh Kumar Pandey',
      url: 'https://northhindipandit.com',
    },
  ],
  creator: 'Pandit Nilesh Kumar Pandey',
  openGraph: {
    title: 'North Hindi Pandit | Hindi Pandit in Bangalore',
    description:
      'Book trusted North Indian Pandit in Bangalore with authentic Vedic rituals, shubh muhurat guidance, and complete puja support.',
    type: 'website',
    siteName: 'North Hindi Pandit',
    url: 'https://northhindipandit.com',
    locale: 'en_IN',
    alternateLocale: 'hi_IN',
    images: [
      {
        url: '/images/banners/hindi-pandit-bangalore.webp',
        width: 1200,
        height: 630,
        alt: 'North Hindi Pandit in Bangalore',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'North Hindi Pandit | Hindi Pandit in Bangalore',
    description:
      'Trusted North Indian Pandit in Bangalore for Griha Pravesh, Satyanarayan, wedding pujas, and all family rituals.',
    images: ['/images/banners/hindi-pandit-bangalore.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/manifest.json',
  other: {
    sitemap: 'https://northhindipandit.com/sitemap.xml',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-title': 'North Hindi Pandit',
    'theme-color': '#FF6321',
    'format-detection': 'telephone=no',
  },
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://northhindipandit.com/#organization',
      name: 'North Hindi Pandit',
      url: 'https://northhindipandit.com',
      logo: 'https://northhindipandit.com/favicon.svg',
      image: 'https://northhindipandit.com/images/banners/hindi-pandit-bangalore.webp',
      telephone: '+91-6206471543',
      priceRange: '₹₹',
      description:
        'Trusted Hindi Pandit and North Indian Pandit services in Bangalore for authentic Vedic pujas, same-day booking, and complete puja samagri.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'National Games Village, Nearby Passport office, Koramangala',
        addressLocality: 'Bangalore',
        postalCode: '560095',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.9352',
        longitude: '77.6245',
      },
      areaServed: [
        'Bangalore',
        'Koramangala',
        'HSR Layout',
        'Whitefield',
        'Electronic City',
        'Bellandur',
        'Marathahalli',
        'Sarjapur',
        'Indiranagar',
        'Hebbal',
        'JP Nagar',
        'Yelahanka',
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '06:00',
          closes: '21:00',
        },
      ],
      sameAs: [
        'https://www.instagram.com/north.indian.pandit.bangalore',
        'https://www.facebook.com/share/1EZDZJnDFo/',
        'https://www.youtube.com/@Pandit.Ji.Bangalore',
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://northhindipandit.com/#person',
      name: 'Pandit Nilesh Kumar Pandey',
      jobTitle: 'Vedic Hindu Priest & Pandit',
      telephone: '+91-6206471543',
      worksFor: {
        '@id': 'https://northhindipandit.com/#organization',
      },
      knowsAbout: [
        'Vedic Rituals',
        'Griha Pravesh Puja',
        'Satyanarayan Puja',
        'North Indian Wedding Puja',
        'Rudrabhishek',
        'Havan & Yagya',
        'Shubh Muhurat',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://northhindipandit.com/#website',
      url: 'https://northhindipandit.com',
      name: 'North Hindi Pandit',
      publisher: {
        '@id': 'https://northhindipandit.com/#organization',
      },
      inLanguage: ['en-IN', 'hi-IN'],
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="ASQfLJbRbbtdcVdUq9dovR6m6q8LJzpZrr0Uu-4ZbJ4"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
