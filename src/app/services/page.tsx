import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ChevronRight, MessageCircle, Phone, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { SiteHeader } from '@/components/SiteHeader';
import { getWhatsAppLink, phoneNumber, pujas } from '@/data/pujas';

export const metadata: Metadata = {
  title: 'Puja Services in Bangalore | North Hindi Pandit',
  description:
    'Explore all 8 authentic North Indian Vedic puja services in Bangalore with Pandit Nilesh Kumar Pandey. Doorstep home visits, shubh muhurat & samagri.',
  alternates: {
    canonical: '/services/',
  },
  openGraph: {
    title: 'All Puja Services in Bangalore | North Hindi Pandit',
    description:
      'Browse all major Vedic puja services in Bangalore. Book directly by call or WhatsApp with Pandit Nilesh Kumar Pandey.',
    url: 'https://northhindipandit.com/services/',
    type: 'website',
    siteName: 'North Hindi Pandit',
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative selection:bg-saffron/30">
      <SiteHeader />

      {/* Header Banner */}
      <section className="relative px-4 sm:px-6 pt-8 md:pt-12 pb-14 overflow-hidden">
        <div className="absolute inset-0 hero-aura opacity-85" />
        <div className="max-w-7xl mx-auto relative z-10 text-center sm:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/85 border border-ink/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-saffron shadow-xs mb-5">
              <Sparkles size={14} />
              <span>Bangalore Vedic Puja Services</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ink leading-[1.08] mb-5">
              Authentic Vedic Puja Services in Bangalore
            </h1>
            <p className="text-base sm:text-lg text-ink/75 leading-relaxed mb-6 font-normal">
              Browse all 8 traditional North Indian ceremonies conducted by Pandit Nilesh Kumar Pandey. From housewarmings and family milestones to sacred wedding rituals and ancestral prayers, we provide sincere vidhi, Sanskrit chanting, and clear Hindi guidance.
            </p>
            <p className="text-sm sm:text-base text-saffron font-serif italic mb-8">
              &ldquo;पूजा केवल विधि नहीं, परिवार की आस्था और मंगल का पवित्र संकल्प है।&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start">
              <a
                href={`tel:${phoneNumber}`}
                className="cta-button cta-call text-sm sm:text-base px-7 py-3.5"
              >
                <Phone size={18} />
                <span>Call for Booking ({phoneNumber})</span>
              </a>
              <a
                href={getWhatsAppLink('All Puja Services Overview')}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button cta-whatsapp text-sm sm:text-base px-7 py-3.5"
              >
                <MessageCircle size={18} />
                <span>WhatsApp All Services</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (8 Pujas) */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pujas.map((puja) => (
              <article
                key={puja.slug}
                className="group flex flex-col rounded-3xl border border-ink/8 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Visual Banner (Clean AI Image, 0 text) */}
                <div className="relative aspect-[16/10] overflow-hidden bg-paper">
                  <Image
                    src={puja.image}
                    alt={`${puja.shortTitle} Bangalore`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
                  <div className="absolute left-4 right-4 bottom-3 flex items-center justify-between text-white text-xs">
                    <span className="font-bold bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-lg">
                      {puja.navLabel}
                    </span>
                    <span className="inline-flex items-center gap-1 text-amber-300 font-semibold">
                      <Star size={12} fill="currentColor" /> Shastriya Vidhi
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-ink mb-2">
                      {puja.shortTitle}
                    </h2>
                    <p className="text-xs sm:text-sm text-ink/70 leading-relaxed mb-4">
                      {puja.tagline}
                    </p>

                    {/* Key Benefits snippet */}
                    <ul className="space-y-1.5 mb-6 text-xs text-ink/75">
                      {puja.benefits.slice(0, 2).map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check size={14} className="text-saffron shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* High-Converting Action Buttons */}
                  <div className="space-y-2 pt-3 border-t border-ink/6">
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={`tel:${phoneNumber}`}
                        className="cta-button cta-call text-xs py-2.5 px-2"
                        aria-label={`Call Pandit Ji for ${puja.shortTitle}`}
                      >
                        <Phone size={14} />
                        <span>Call</span>
                      </a>
                      <a
                        href={getWhatsAppLink(puja.shortTitle)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button cta-whatsapp text-xs py-2.5 px-2"
                        aria-label={`WhatsApp Pandit Ji for ${puja.shortTitle}`}
                      >
                        <MessageCircle size={14} />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                    <Link
                      href={`/services/${puja.slug}/`}
                      className="cta-button cta-saffron w-full text-xs py-2.5"
                    >
                      <Sparkles size={14} />
                      <span>Full Vidhi, Process & Samagri &rarr;</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bangalore Home Service Banner */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-7xl mx-auto rounded-3xl bg-paper border border-ink/8 p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-2">
              Need Help Choosing the Right Puja or Shubh Muhurat?
            </h3>
            <p className="text-sm sm:text-base text-ink/70 leading-relaxed max-w-2xl">
              Pandit Nilesh Kumar Pandey is available to consult on the exact tithi, auspicious nakshatra timings, and custom puja samagri requirements for your family.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`tel:${phoneNumber}`}
              className="cta-button cta-call text-sm px-6 py-3.5"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
            <a
              href={getWhatsAppLink('Muhurat Consultation')}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-whatsapp text-sm px-6 py-3.5"
            >
              <MessageCircle size={16} />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyBar whatsappLabel="Services Page Booking" />
    </main>
  );
}
