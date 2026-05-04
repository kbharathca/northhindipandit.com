import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import './globals.css';

const gtmId = 'GTM-TQLL35MP';

export const metadata: Metadata = {
  title: 'North Hindi Pandit | Hindi Pandit in Bangalore | North Indian Pandit in Bangalore',
  description: 'Northhindipandit.com connects you with trusted Hindi Pandit in Bangalore and North Indian Pandit in Bangalore services for authentic Vedic pujas, same-day booking, and complete puja samagri.',
  keywords: ['Hindi Pandit in Bangalore', 'North Indian Pandit in Bangalore', 'North Hindi Pandit', 'Bangalore puja service', 'Vedic pandit Bangalore', 'Griha Pravesh Puja', 'Satyanarayan Puja', 'Wedding Puja', 'Puja Booking'],
  metadataBase: new URL('https://northhindipandit.com'),
  alternates: {
    canonical: 'https://northhindipandit.com',
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
    description: 'Book trusted North Indian Pandit in Bangalore with authentic rituals and full puja support.',
    type: 'website',
    siteName: 'North Hindi Pandit',
    url: 'https://northhindipandit.com',
    locale: 'en_IN',
    alternateLocale: 'hi_IN',
    images: [
      {
        url: '/images/hindi-pandit-all-puja.webp',
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
    description: 'Trusted North Indian Pandit in Bangalore for Griha Pravesh, Satyanarayan, wedding pujas and more.',
    images: ['/images/hindi-pandit-all-puja.webp'],
    creator: '@PanditBangalore',
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
  verification: {
    google: 'add-your-google-search-console-code-here',
    other: {
      'msvalidate.01': 'add-your-bing-webmaster-tools-code-here',
      'yandex-verification': 'add-your-yandex-code-here',
    },
  },
  other: {
    'sitemap': 'https://northhindipandit.com/sitemap.xml',
    'mobile-web-app-capable': 'yes',
    'mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'North Hindi Pandit',
    'theme-color': '#FF6321',
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
