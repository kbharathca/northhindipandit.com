import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'North Hindi Pandit | Hindi Pandit in Bangalore | North Indian Pandit in Bangalore',
  description: 'Northhindipandit.com connects you with trusted Hindi Pandit in Bangalore and North Indian Pandit in Bangalore services for authentic Vedic pujas, same-day booking, and complete puja samagri.',
  keywords: ['Hindi Pandit in Bangalore', 'North Indian Pandit in Bangalore', 'North Hindi Pandit', 'Bangalore puja service', 'Vedic pandit Bangalore'],
  metadataBase: new URL('https://northhindipandit.com'),
  openGraph: {
    title: 'North Hindi Pandit | Hindi Pandit in Bangalore',
    description: 'Book trusted North Indian Pandit in Bangalore with authentic rituals and full puja support.',
    type: 'website',
    siteName: 'North Hindi Pandit',
    url: 'https://northhindipandit.com',
    images: [
      {
        url: '/images/hindi-pandit-all-puja.webp',
        width: 1200,
        height: 630,
        alt: 'North Hindi Pandit in Bangalore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'North Hindi Pandit | Hindi Pandit in Bangalore',
    description: 'Trusted North Indian Pandit in Bangalore for Griha Pravesh, Satyanarayan, wedding pujas and more.',
    images: ['/images/hindi-pandit-all-puja.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
