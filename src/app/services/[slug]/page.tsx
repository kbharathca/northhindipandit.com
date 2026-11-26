import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  AlertCircle,
  CalendarCheck,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  HelpCircle,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react';
import { Footer } from '@/components/Footer';
import { LotusParticles } from '@/components/LotusParticles';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { SiteHeader } from '@/components/SiteHeader';
import {
  BookDivider,
  CloudsDivider,
  CurveDivider,
  DropsDivider,
  MountainsDivider,
  TiltDivider,
  TriangleDivider,
  WavesBrushDivider,
  WavesDivider,
  WavesPatternDivider,
} from '@/components/ShapeDividers';
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
    return { title: 'Puja Service | North Hindi Pandit' };
  }

  return {
    title: puja.seoTitle,
    description: puja.seoDescription,
    keywords: [
      puja.title,
      `${puja.shortTitle} Bangalore`,
      `${puja.shortTitle} booking Bangalore`,
      `North Indian ${puja.shortTitle} in Bangalore`,
      'Hindi Pandit Bangalore',
      'North Indian Pandit Bangalore',
    ],
    alternates: {
      canonical: `/services/${puja.slug}/`,
    },
    openGraph: {
      title: puja.seoTitle,
      description: puja.seoDescription,
      url: `https://northhindipandit.com/services/${puja.slug}/`,
      type: 'website',
      siteName: 'North Hindi Pandit',
      images: [{ url: puja.image, width: 1200, height: 630, alt: puja.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: puja.seoTitle,
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

  // Schema for individual puja service, breadcrumbs, and FAQs
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `https://northhindipandit.com/services/${puja.slug}/#service`,
        name: puja.title,
        description: puja.heroDescription,
        provider: {
          '@type': 'LocalBusiness',
          name: 'North Hindi Pandit',
          telephone: '+91-6206471543',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'National Games Village, Nearby Passport office, Koramangala',
            addressLocality: 'Bangalore',
            postalCode: '560095',
            addressCountry: 'IN',
          },
        },
        areaServed: {
          '@type': 'City',
          name: 'Bangalore',
        },
        serviceType: 'Vedic Hindu Religious Ceremony',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://northhindipandit.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://northhindipandit.com/services/',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: puja.shortTitle,
            item: `https://northhindipandit.com/services/${puja.slug}/`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: puja.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen relative selection:bg-saffron/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <LotusParticles />
      <SiteHeader />

      {/* 1. HERO SECTION WITH DEVOTIONAL SUNRISE GRADIENT */}
      <section className="relative px-4 sm:px-6 pt-6 sm:pt-8 md:pt-10 pb-16 overflow-hidden bg-gradient-to-b from-[#fffcf7] via-[#fff4e3] to-[#ffe5c4]">
        <div className="absolute inset-0 hero-aura opacity-85" />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb row */}
          <div className="flex flex-wrap items-center justify-between gap-3 py-3 text-xs">
            <Link
              href="/services/"
              className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-ink/75 hover:text-saffron transition-colors"
            >
              <ChevronRight size={14} className="rotate-180" />
              <span>All Puja Services</span>
            </Link>
            <div className="inline-flex items-center gap-1.5 font-semibold text-ink/70">
              <MapPin size={13} className="text-saffron" />
              <span>Bangalore Home & Office Visits</span>
            </div>
          </div>

          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center pt-4 sm:pt-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-saffron/10 border border-saffron/25 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-saffron mb-4 shadow-xs">
                <Sparkles size={14} />
                <span>{puja.navLabel} &bull; Bangalore</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-[1.1] text-ink mb-4">
                {puja.heroTitle}
              </h1>

              <p className="text-base sm:text-lg text-ink/80 leading-relaxed mb-6 font-normal">
                {puja.heroDescription}
              </p>

              <p className="text-sm sm:text-base text-saffron font-serif italic mb-7">
                &ldquo;श्रद्धा, शुद्ध मंत्र और सही विधि से किया गया पूजन घर में मंगल ऊर्जा भर देता है।&rdquo;
              </p>

              {/* Conversion Buttons with Vibrant Gradients */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
                <a
                  href={`tel:${phoneNumber}`}
                  className="cta-button cta-call text-sm sm:text-base px-6 py-4 shadow-md"
                  aria-label={`Call to book ${puja.shortTitle}`}
                >
                  <Phone size={18} className="animate-pulse" />
                  <span>Call to Book: {phoneNumber}</span>
                </a>

                <a
                  href={getWhatsAppLink(puja.shortTitle)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button cta-whatsapp text-sm sm:text-base px-6 py-4 shadow-md"
                  aria-label={`Book ${puja.shortTitle} on WhatsApp`}
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Booking</span>
                </a>
              </div>

              {/* Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="feature-pill">
                  <Clock3 size={15} className="text-saffron shrink-0" />
                  <span>Same-Day Muhurat</span>
                </div>
                <div className="feature-pill">
                  <ShieldCheck size={15} className="text-saffron shrink-0" />
                  <span>Hindi Guidance</span>
                </div>
                <div className="feature-pill">
                  <Star size={15} className="text-saffron shrink-0" />
                  <span>Complete Samagri</span>
                </div>
              </div>
            </div>

            {/* Puja Image Banner (Clean AI Image, 0 text) */}
            <div className="relative">
              <div className="relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg bg-paper border border-ink/8">
                <Image
                  src={puja.image}
                  alt={`${puja.title} in Bangalore`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
                <div className="absolute left-4 right-4 bottom-4 rounded-xl bg-white/95 backdrop-blur-md p-3.5 shadow-sm">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-saffron font-extrabold">
                    Authentic North Indian Vidhi
                  </p>
                  <p className="font-serif text-lg font-bold text-ink">{puja.shortTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SHAPE DIVIDER: WAVES BRUSH DIVIDER */}
        <div className="mt-10">
          <WavesBrushDivider position="bottom" fill="#fffcf7" height={52} />
        </div>
      </section>

      {/* 2. 5-STAGE VEDIC VIDHI & IMAGE GALLERY (At least 5 AI Images per Puja) */}
      <section className="px-4 sm:px-6 py-14 bg-gradient-to-b from-[#fffcf7] via-[#fff5e6] to-[#fde9cb] relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-kicker">Visual Ritual Journey</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-ink mb-3">
              5 Sacred Stages of {puja.shortTitle}
            </h2>
            <p className="text-sm sm:text-base text-ink/75 leading-relaxed">
              Every step is conducted with complete Vedic authenticity, Sanskrit chanting, and clear Hindi guidance by Pandit Nilesh Kumar Pandey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {puja.steps &&
              puja.steps.map((st) => (
                <div
                  key={st.step}
                  className="group rounded-3xl border border-amber-900/10 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-paper">
                    <Image
                      src={st.image}
                      alt={`${st.title} - ${puja.shortTitle}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-saffron text-white rounded-xl px-2.5 py-1 text-xs font-extrabold shadow-sm">
                      Step {st.step} of 5
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-ink mb-2">
                        {st.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-ink/75 leading-relaxed">
                        {st.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-ink/6 flex items-center justify-between text-xs">
                      <span className="text-saffron font-bold flex items-center gap-1">
                        <Sparkles size={13} />
                        <span>Vedic Vidhi</span>
                      </span>
                      <a
                        href={getWhatsAppLink(`${puja.shortTitle} - ${st.title}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-bold hover:underline flex items-center gap-1"
                      >
                        <MessageCircle size={13} />
                        <span>Inquire</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* SHAPE DIVIDER: BOOK DIVIDER (Sacred scripture arch transitioning to deep hawan background) */}
      <BookDivider position="bottom" fill="#200a03" height={58} />

      {/* 3. BENEFITS AND INCLUSIONS ON DEEP DEVOTIONAL HAVAN BACKGROUND (HIGH CONTRAST) */}
      <section className="px-4 sm:px-6 py-16 bg-gradient-to-br from-[#200a03] via-[#4d1606] to-[#7f2608] text-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 relative z-10">
          {/* Col 1: Benefits */}
          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-6 sm:p-10 shadow-xl text-white">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-300/30 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={13} /> Vedic Vidhi & Benefits
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
              Why Devotees Arrange {puja.shortTitle}
            </h2>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-6">
              Conducted with strict adherence to Vedic Shastras, holy hawan, and Sanskrit mantras by Pandit Nilesh Kumar Pandey.
            </p>

            <div className="space-y-3">
              {puja.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-white/10 border border-white/15 flex items-start gap-3"
                >
                  <div className="h-7 w-7 rounded-full bg-amber-400 text-ink flex items-center justify-center shrink-0 mt-0.5 font-bold shadow-xs">
                    <Check size={16} />
                  </div>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>

            {/* In-content Booking Card */}
            <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-500/20 via-saffron/20 to-emerald-500/20 border border-amber-400/30">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                Have a date in mind for {puja.shortTitle}?
              </h3>
              <p className="text-xs sm:text-sm text-white/85 mb-4 leading-relaxed">
                Connect instantly to check shubh muhurat and discuss the exact samagri list.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${phoneNumber}`}
                  className="cta-button bg-white text-ink hover:bg-amber-50 text-xs sm:text-sm py-3 px-4 font-bold shadow-md"
                >
                  <Phone size={16} className="text-saffron" />
                  <span>Call {phoneNumber}</span>
                </a>
                <a
                  href={getWhatsAppLink(`${puja.shortTitle} Fast Booking`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button cta-whatsapp text-xs sm:text-sm py-3 px-4 shadow-md"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Ideal For & Inclusions */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-6 sm:p-8 shadow-xl text-white">
              <span className="text-xs uppercase tracking-[0.24em] font-bold text-amber-300 mb-3 block">
                Auspicious Occasions
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-4">
                When to Perform This Puja
              </h2>
              <div className="space-y-2.5">
                {puja.idealFor.map((item, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm text-white/90 flex items-center gap-2.5"
                  >
                    <CalendarCheck size={16} className="text-amber-300 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-6 sm:p-8 shadow-xl text-white">
              <span className="text-xs uppercase tracking-[0.24em] font-bold text-amber-300 mb-3 block">
                What We Arrange
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-4">
                Ceremony Inclusions
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-white/90">
                {puja.includes.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SHAPE DIVIDER: WAVES PATTERN (Leading into FAQs) */}
      <WavesPatternDivider position="bottom" fill="#fffbf5" height={60} />

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="px-4 sm:px-6 py-14 bg-[#fffbf5]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="section-kicker">Common Questions</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink">
              {puja.shortTitle} FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {puja.faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-ink/8 bg-white p-5 shadow-xs"
              >
                <h3 className="font-bold text-sm sm:text-base text-ink mb-2 flex items-start gap-2.5">
                  <HelpCircle size={18} className="text-saffron shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-ink/75 leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHAPE DIVIDER: CURVE DIVIDER */}
      <CurveDivider position="bottom" fill="#200a03" height={52} />

      {/* 5. RELATED PUJAS & FINAL ACTION STRIP */}
      <section className="px-4 sm:px-6 py-16 bg-gradient-to-br from-[#200a03] via-[#521706] to-[#992807] text-white">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden bg-white/5 border border-white/15 text-white p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-300/30 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={14} /> Immediate Bangalore Slot Confirmation
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-3">
                Book {puja.shortTitle} Today
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6">
                Speak directly with Pandit Nilesh Kumar Pandey. Discuss your family preferences, gotra sankalp details, and shubh muhurat with one direct call or WhatsApp message.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${phoneNumber}`}
                  className="cta-button bg-white text-ink hover:bg-paper text-sm sm:text-base px-6 py-3.5 font-bold shadow-lg"
                >
                  <Phone size={17} className="text-saffron" />
                  <span>Call {phoneNumber}</span>
                </a>
                <a
                  href={getWhatsAppLink(`${puja.shortTitle} Booking Now`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button cta-whatsapp text-sm sm:text-base px-6 py-3.5 shadow-lg"
                >
                  <MessageCircle size={17} />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>

            {/* Related Pujas list */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/20">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3">
                Other Popular Pujas in Bangalore:
              </p>
              <div className="space-y-2">
                {relatedPujas.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/services/${rp.slug}/`}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white text-xs sm:text-sm"
                  >
                    <span className="font-semibold">{rp.shortTitle}</span>
                    <ChevronRight size={16} className="text-amber-300" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyBar whatsappLabel={`${puja.shortTitle} Mobile Booking`} />
    </main>
  );
}
