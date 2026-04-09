import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Phone, Sparkles, Star } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { SiteHeader } from '@/components/SiteHeader';
import { getWhatsAppLink, phoneNumber, pujas } from '@/data/pujas';

export const metadata: Metadata = {
  title: 'Pandit Services in Bangalore | Griha Pravesh, Satyanarayan, Marriage Puja',
  description:
    'Explore puja services in Bangalore with North Hindi Pandit. Book Griha Pravesh, Satyanarayan, Ganesh Puja, Marriage Puja, Rudrabhishek, Bhoomi Puja, Shraadh Puja, and more.',
  alternates: {
    canonical: '/services/',
  },
  openGraph: {
    title: 'Pandit Services in Bangalore | North Hindi Pandit',
    description:
      'Browse all major puja services in Bangalore and book instantly by call or WhatsApp with North Hindi Pandit.',
    url: 'https://northhindipandit.com/services/',
    type: 'website',
    siteName: 'North Hindi Pandit',
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative selection:bg-saffron/30">
      <SiteHeader />
      <section className="relative overflow-hidden px-6 pt-8 md:pt-12 pb-20">
        <div className="absolute inset-0 hero-aura opacity-85" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-saffron shadow-soft mb-6">
              <Sparkles size={14} />
              Puja Services in Bangalore
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-[1.04] text-ink mb-6">
              Book Trusted Puja Services in Bangalore with North Hindi Pandit
            </h1>
            <p className="text-lg md:text-xl text-ink/72 leading-relaxed max-w-3xl mb-10">
              Explore all major pujas in one place and choose the right ritual for your family. From housewarming and marriage puja to Rudrabhishek and Shraadh, we provide respectful North Indian vidhi, Hindi guidance, and easy booking support across Bangalore.
            </p>
            <p className="text-base md:text-lg text-saffron font-serif italic mb-8">
              "पूजा केवल विधि नहीं, परिवार की आस्था और मंगल का पवित्र संकल्प है।"
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={getWhatsAppLink('All Puja Services in Bangalore')} className="cta-button cta-whatsapp text-lg px-10 py-5">
                <MessageCircle size={22} />
                WhatsApp for All Services
              </a>
              <a href={`tel:${phoneNumber}`} className="cta-button cta-saffron text-lg px-10 py-5">
                <Phone size={22} />
                Call for Booking
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {pujas.map((puja, index) => (
              <article
                key={puja.slug}
                className="group relative overflow-hidden rounded-[2.2rem] border border-ink/6 bg-white p-6 shadow-soft hover:-translate-y-2 transition-all duration-500"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="relative aspect-[1800/764] rounded-[1.6rem] overflow-hidden mb-6 bg-paper">
                  <Image
                    src={puja.image}
                    alt={puja.title}
                    width={1800}
                    height={764}
                    className="h-auto w-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/85 font-bold">{puja.navLabel}</p>
                    <div className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 backdrop-blur-md">
                      <Star size={12} className="text-gold" fill="currentColor" />
                      <span className="text-[10px] uppercase tracking-[0.16em] text-white font-bold">Popular</span>
                    </div>
                  </div>
                </div>

                <h2 className="font-serif text-3xl font-bold text-ink mb-3">{puja.shortTitle}</h2>
                <p className="text-base text-ink/68 leading-relaxed mb-4">{puja.heroDescription}</p>
                <p className="text-sm text-ink/62 leading-relaxed mb-8">{puja.tagline}</p>

                <div className="grid gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a href={`tel:${phoneNumber}`} className="cta-button cta-call text-sm px-5 py-4">
                      <Phone size={18} />
                      Call
                    </a>
                    <a href={getWhatsAppLink(puja.shortTitle)} className="cta-button cta-whatsapp text-sm px-5 py-4">
                      <MessageCircle size={18} />
                      WhatsApp
                    </a>
                  </div>
                  <Link href={`/services/${puja.slug}/`} className="cta-button cta-saffron text-sm px-5 py-4">
                    <Sparkles size={18} />
                    View More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyBar whatsappLabel="Services Page Booking" />
    </main>
  );
}
