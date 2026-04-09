import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, ChevronRight, Clock3, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { LotusParticles } from '@/components/LotusParticles';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { SiteHeader } from '@/components/SiteHeader';
import { getWhatsAppLink, phoneNumber, pujaMap, pujas } from '@/data/pujas';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return pujas.map((puja) => ({ slug: puja.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const puja = pujaMap.get(slug);

  if (!puja) {
    return { title: 'Service | North Hindi Pandit' };
  }

  return {
    title: `${puja.seoTitle} | North Hindi Pandit`,
    description: puja.seoDescription,
    keywords: [
      puja.title,
      `${puja.shortTitle} Bangalore`,
      `${puja.shortTitle} booking Bangalore`,
      `Best ${puja.shortTitle} in Bangalore`,
      'Hindi Pandit Bangalore',
      'North Indian Pandit Bangalore',
    ],
    alternates: {
      canonical: `/services/${puja.slug}/`,
    },
    openGraph: {
      title: `${puja.seoTitle} | North Hindi Pandit`,
      description: puja.seoDescription,
      url: `https://northhindipandit.com/services/${puja.slug}/`,
      type: 'website',
      siteName: 'North Hindi Pandit',
      images: [{ url: puja.image, width: 1200, height: 630, alt: puja.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${puja.seoTitle} | North Hindi Pandit`,
      description: puja.seoDescription,
      images: [puja.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const puja = pujaMap.get(slug);

  if (!puja) notFound();

  const relatedPujas = pujas.filter((item) => item.slug !== puja.slug).slice(0, 3);

  return (
    <main className="min-h-screen relative selection:bg-saffron/30">
      <LotusParticles />
      <SiteHeader />

      <section className="relative overflow-hidden px-6 pt-10 pb-24">
        <div className="absolute inset-0 hero-aura opacity-80" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 py-4">
            <Link href="/services/" className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.18em] uppercase text-ink/70 hover:text-saffron transition-colors">
              <ChevronRight size={16} className="rotate-180" />
              Back to Services
            </Link>
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-ink/50">
              <MapPin size={14} className="text-saffron" />
              Bangalore Home Service
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.9fr] gap-10 items-center pt-8">
            <div className="stagger-rise">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-saffron shadow-soft mb-6">
                <Sparkles size={14} />
                {puja.navLabel}
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-[1.05] text-ink mb-6">{puja.heroTitle}</h1>
              <p className="text-lg md:text-xl text-ink/72 max-w-3xl leading-relaxed mb-8">{puja.heroDescription}</p>
              <p className="text-base md:text-lg text-saffron font-serif italic mb-8">
                "श्रद्धा, शुद्ध मंत्र और सही विधि से किया गया पूजन घर में मंगल ऊर्जा भर देता है।"
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href={getWhatsAppLink(puja.shortTitle)} className="cta-button cta-whatsapp text-base md:text-lg">
                  <MessageCircle size={22} />
                  Book on WhatsApp
                </a>
                <a href={`tel:${phoneNumber}`} className="cta-button cta-call text-base md:text-lg">
                  <Phone size={22} />
                  Call for Booking
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="feature-pill"><Clock3 size={18} className="text-saffron" /> Same-Day Support</div>
                <div className="feature-pill"><ShieldCheck size={18} className="text-saffron" /> Hindi-Speaking Pandit</div>
                <div className="feature-pill"><Star size={18} className="text-saffron" /> Complete Ritual Guidance</div>
              </div>
            </div>

            <div className="relative">
              <div className="service-hero-card">
                <div className="relative aspect-[1800/764] overflow-hidden rounded-[2rem] bg-white">
                  <Image
                    src={puja.image}
                    alt={puja.title}
                    width={1800}
                    height={764}
                    className="h-auto w-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <div className="absolute left-6 right-6 bottom-6 rounded-[1.4rem] bg-white/88 backdrop-blur-md p-5 shadow-soft">
                    <p className="text-xs uppercase tracking-[0.24em] text-saffron font-bold mb-2">North Hindi Pandit</p>
                    <p className="font-serif text-2xl font-bold text-ink">{puja.shortTitle}</p>
                    <p className="text-sm text-ink/65 mt-2">{puja.tagline}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8">
          <div className="content-panel">
            <div className="mb-10">
              <p className="section-kicker">Why Families Book This Service</p>
              <h2 className="section-title">A complete {puja.shortTitle} service in Bangalore</h2>
              <p className="section-copy">Families across Bangalore choose North Hindi Pandit for sincere rituals, calm guidance, proper vidhi, and a smooth booking experience for {puja.shortTitle}.</p>
            </div>
            <div className="grid gap-4">
              {puja.benefits.map((benefit) => (
                <div key={benefit} className="info-card rise-card">
                  <Check size={18} className="text-saffron shrink-0 mt-1" />
                  <p className="text-base text-ink/75 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="booking-highlight-card mt-8">
              <div>
                <p className="section-kicker mb-2">Quick Booking</p>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink">Talk to pandit ji now for {puja.shortTitle}</h3>
                <p className="text-ink/68 mt-3 leading-relaxed">
                  Call directly for fast confirmation or send your details on WhatsApp for date, muhurat, samagri, and booking support in Bangalore.
                </p>
              </div>
              <div className="booking-grid mt-6">
                <a href={`tel:${phoneNumber}`} className="cta-button cta-call-premium text-sm md:text-base px-6 py-4">
                  <Phone size={20} />
                  Call {phoneNumber}
                </a>
                <a href={getWhatsAppLink(`${puja.shortTitle} Fast Booking`)} className="cta-button cta-whatsapp-premium text-sm md:text-base px-6 py-4">
                  <MessageCircle size={20} />
                  WhatsApp Booking
                </a>
              </div>
            </div>
          </div>

          <div className="content-panel soft-cream">
            <p className="section-kicker">Ideal For</p>
            <h2 className="section-title">Perfect occasions for {puja.shortTitle}</h2>
            <div className="space-y-4 mt-8">
              {puja.idealFor.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-ink/8 bg-white/90 px-5 py-4 shadow-soft">
                  <p className="text-base text-ink/75 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="mini-cta-stack mt-8">
              <a href={`tel:${phoneNumber}`} className="cta-button cta-saffron text-sm px-5 py-4">
                <Phone size={18} />
                Speak to Pandit Ji
              </a>
              <a href={getWhatsAppLink(`${puja.shortTitle} Details`)} className="cta-button cta-whatsapp text-sm px-5 py-4">
                <MessageCircle size={18} />
                Send Details on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="service-strip rounded-[2.5rem] px-8 py-10 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10">
              <div>
                <p className="section-kicker text-white/75">What You Receive</p>
                <h2 className="section-title text-white">Everything arranged for a smooth and respectful puja experience</h2>
                <div className="grid gap-4 mt-8">
                  {puja.includes.map((item) => (
                    <div key={item} className="glass-info-card">
                      <Check size={18} className="text-gold shrink-0 mt-1" />
                      <p className="text-white/88 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="section-kicker text-white/75">Simple Booking Process</p>
                <h2 className="section-title text-white">How to confirm your puja in Bangalore</h2>
                <div className="space-y-4 mt-8">
                  {puja.process.map((step, index) => (
                    <div key={step} className="glass-step-card">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-saffron font-bold">{index + 1}</span>
                      <p className="text-white/88 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="booking-grid mt-8">
                  <a href={`tel:${phoneNumber}`} className="cta-button cta-light text-sm md:text-base px-6 py-4">
                    <Phone size={20} />
                    Call for Slot Booking
                  </a>
                  <a href={getWhatsAppLink(`${puja.shortTitle} Puja Date`)} className="cta-button cta-outline-light text-sm md:text-base px-6 py-4">
                    <MessageCircle size={20} />
                    WhatsApp Your Date
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="service-action-band">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/70 mb-3">Book This Puja</p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-[1.08]">
                Reserve {puja.shortTitle} with premium call and WhatsApp support
              </h2>
              <p className="text-white/84 text-lg leading-relaxed mt-4 max-w-3xl">
                Get clear booking guidance, quick response, and trustworthy support from first contact to final puja confirmation for your family.
              </p>
            </div>
            <div className="booking-grid mt-8">
              <a href={`tel:${phoneNumber}`} className="cta-button cta-call-premium text-sm md:text-base px-6 py-4">
                <Phone size={20} />
                Call {phoneNumber}
              </a>
              <a href={getWhatsAppLink(`${puja.shortTitle} Premium Booking`)} className="cta-button cta-whatsapp-premium text-sm md:text-base px-6 py-4">
                <MessageCircle size={20} />
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2.8rem] overflow-hidden border border-ink/8 bg-white shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="px-8 py-12 md:px-12 md:py-16">
                <p className="section-kicker">More Services</p>
                <h2 className="section-title">Explore other puja services in Bangalore</h2>
                <div className="grid gap-4 mt-8">
                  {relatedPujas.map((item) => (
                    <Link key={item.slug} href={`/services/${item.slug}/`} className="related-link-card">
                      <div>
                        <p className="font-serif text-2xl font-bold text-ink">{item.shortTitle}</p>
                        <p className="text-sm text-ink/65 mt-1">{item.tagline}</p>
                      </div>
                      <ChevronRight size={20} className="text-saffron" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="final-cta-panel">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/70 mb-4">North Hindi Pandit</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-5">Book {puja.shortTitle} in Bangalore Today</h2>
                <p className="text-white/82 text-lg leading-relaxed mb-8">Reserve your preferred slot and connect instantly for respectful, traditional, and properly guided puja service in Bangalore.</p>
                <div className="flex flex-col gap-4 w-full">
                  <a href={getWhatsAppLink(puja.shortTitle)} className="cta-button cta-light">
                    <MessageCircle size={20} />
                    Confirm on WhatsApp
                  </a>
                  <a href={`tel:${phoneNumber}`} className="cta-button cta-outline-light">
                    <Phone size={20} />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyBar whatsappLabel={`${puja.shortTitle} Booking`} />
    </main>
  );
}
