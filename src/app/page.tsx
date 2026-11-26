'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  AlertCircle,
  Award,
  BookOpen,
  CalendarCheck,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  HeartHandshake,
  HelpCircle,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import { Footer } from '@/components/Footer';
import { LotusParticles } from '@/components/LotusParticles';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { SiteHeader } from '@/components/SiteHeader';
import {
  ArrowDivider,
  BookDivider,
  CloudsDivider,
  CurveAsymmetricDivider,
  CurveDivider,
  DropsDivider,
  FanOpacityDivider,
  MountainsDivider,
  PyramidsDivider,
  TiltDivider,
  TiltOpacityDivider,
  TriangleDivider,
  WavesBrushDivider,
  WavesDivider,
  WavesPatternDivider,
  ZigzagDivider,
} from '@/components/ShapeDividers';
import { getWhatsAppLink, phoneNumber, pujas } from '@/data/pujas';

const faqs = [
  {
    q: 'Do you provide North Indian Hindi Pandit in Bangalore for all major pujas?',
    a: 'Yes. Pandit Nilesh Kumar Pandey provides authentic North Indian Vedic rituals in Hindi across Bangalore for Griha Pravesh, Satyanarayan Katha, Ganesh Puja, Rudrabhishek, Marriage ceremonies, Maha Mrityunjaya Jaap, Bhoomi Puja, and Shraadh rituals.',
  },
  {
    q: 'How does the puja booking process work?',
    a: 'Simply call us or tap the WhatsApp button to share your preferred date, Bangalore location, and puja type. We guide you on the shubh muhurat, provide a complete samagri checklist, and confirm Pandit ji’s arrival time.',
  },
  {
    q: 'Can you arrange same-day or urgent puja booking in Bangalore?',
    a: 'Yes. We accommodate same-day and urgent puja requests depending on muhurat timing and pandit availability in your Bangalore neighborhood.',
  },
  {
    q: 'Do you provide complete puja samagri?',
    a: 'Yes. Based on your convenience, we can either provide a simple shopping checklist or arrange the complete Vedic samagri (pure ghee, hawan samagri, dry fruits, sacred herbs, etc.) directly.',
  },
  {
    q: 'Which locations in Bangalore do you cover?',
    a: 'We serve all Bangalore localities including Whitefield, HSR Layout, Koramangala, Electronic City, Marathahalli, Bellandur, Sarjapur, Indiranagar, Hebbal, JP Nagar, BTM Layout, Yelahanka, and surrounding areas.',
  },
  {
    q: 'Are the mantras recited in pure Sanskrit with Hindi explanations?',
    a: 'Yes. All mantras are recited with authentic Vedic pronunciation in pure Sanskrit, while every ritual step and its spiritual meaning is explained warmly in Hindi so the entire family participates with devotion.',
  },
];

const reviews = [
  {
    name: 'Rahul Sharma',
    text: 'Booked Pandit ji for our new flat Griha Pravesh in Whitefield. The entire havan and vastu puja was conducted with utmost sincerity and proper Hindi guidance. Our family felt truly blessed.',
    location: 'Whitefield',
    puja: 'Griha Pravesh Puja',
  },
  {
    name: 'Priya Verma',
    text: 'We arranged Satyanarayan Katha at our home in HSR Layout. Pandit Nilesh Kumar Pandey arrived right on time, explained the katha beautifully, and conducted the aarti with great devotion.',
    location: 'HSR Layout',
    puja: 'Satyanarayan Katha',
  },
  {
    name: 'Amit & Neha Gupta',
    text: 'Highly recommended for North Indian wedding rituals in Bangalore. Pandit ji handled every ceremony with great dignity, clear sanskar explanations, and wonderful patience.',
    location: 'Electronic City',
    puja: 'Marriage Puja',
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen relative selection:bg-saffron/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />
      <LotusParticles />
      <SiteHeader />

      {/* 1. HERO SECTION WITH DEVOTIONAL SUNRISE AURA */}
      <section className="relative pt-4 sm:pt-6 md:pt-8 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#fffcf7] via-[#fff4e3] to-[#ffe5c4]">
        <div className="absolute inset-0 hero-aura opacity-80" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="rounded-[2.2rem] sm:rounded-[2.6rem] overflow-hidden bg-white/95 border border-ink/8 shadow-xl p-5 sm:p-8 lg:p-12 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
              {/* Left Column: Text & Primary CTAs */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-saffron/10 border border-saffron/25 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-saffron mb-5 shadow-xs">
                  <ShieldCheck size={15} />
                  <span>Verified North Indian Pandit in Bangalore</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-bold leading-[1.1] text-ink mb-5">
                  Book Experienced <span className="text-saffron">Hindi Pandit</span> in Bangalore for Vedic Pujas & Rituals
                </h1>

                <p className="text-base sm:text-lg text-ink/80 leading-relaxed mb-6 font-normal">
                  Authentic Sanatana Dharma ceremonies conducted at your home by <strong>Pandit Nilesh Kumar Pandey</strong>. Pure Sanskrit mantras, clear Hindi explanations, shubh muhurat guidance, and complete samagri support across Bangalore.
                </p>

                <p className="text-sm sm:text-base text-saffron font-serif italic mb-7">
                  &ldquo;पूजा केवल विधि नहीं, परिवार की सुख, शांति और मंगल का पावन संकल्प है।&rdquo;
                </p>

                {/* Primary Conversion CTA Buttons with Rich Gradients & Icons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="cta-button cta-call text-sm sm:text-base px-6 py-4"
                  >
                    <Phone size={19} className="animate-pulse" />
                    <span>Call Now: {phoneNumber}</span>
                  </a>

                  <a
                    href={getWhatsAppLink('Home Page Primary Booking')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button cta-whatsapp text-sm sm:text-base px-6 py-4"
                  >
                    <MessageCircle size={19} />
                    <span>WhatsApp Booking</span>
                  </a>

                  <Link
                    href="/services/"
                    className="cta-button cta-saffron text-sm sm:text-base px-6 py-4"
                  >
                    <Sparkles size={19} />
                    <span>Explore All Pujas</span>
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                  <div className="feature-pill">
                    <CheckCircle size={16} className="text-saffron shrink-0" />
                    <span>15+ Yrs Vedic Experience</span>
                  </div>
                  <div className="feature-pill">
                    <CheckCircle size={16} className="text-saffron shrink-0" />
                    <span>Hindi & Sanskrit Vidhi</span>
                  </div>
                  <div className="feature-pill">
                    <CheckCircle size={16} className="text-saffron shrink-0" />
                    <span>Doorstep Bangalore Service</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual (Clean AI Generated, 0 text) */}
              <div className="relative">
                <div className="relative aspect-[16/9] sm:aspect-[4/3] lg:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg bg-paper border border-ink/8">
                  <Image
                    src="/images/banners/hindi-pandit-bangalore.webp"
                    alt="Authentic North Indian Vedic Pandit conducting sacred puja ceremony in Bangalore"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between text-white">
                    <div className="bg-white/20 backdrop-blur-md rounded-xl px-3 py-1.5 text-xs font-semibold">
                      Pandit Nilesh Kumar Pandey
                    </div>
                    <div className="bg-emerald-600/90 rounded-xl px-3 py-1.5 text-xs font-bold flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-white animate-ping" />
                      <span>Available Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SHAPE DIVIDER 1: CLOUDS DIVIDER transitioning into Highlights */}
        <div className="mt-8">
          <CloudsDivider position="bottom" fill="#ffffff" height={52} />
        </div>
      </section>

      {/* 2. GOOGLE ADS COMPLIANCE & 5 HIGHLIGHTS STRIP */}
      <section className="bg-white px-4 sm:px-6 pt-4 pb-12">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Google Ads Compliance Trust Notice */}
          <div className="rounded-2xl bg-gradient-to-r from-amber-500/10 via-saffron/10 to-amber-500/10 border border-amber-500/25 px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink/85 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <AlertCircle size={16} className="text-saffron shrink-0" />
              <span>
                <strong>Devotional Vedic Assurance:</strong> Authentic Sanatana Dharma rituals performed for family well-being and spiritual peace. No superstitious or unrealistic guarantees.
              </span>
            </div>
            <Link
              href="/disclaimer/"
              className="text-saffron font-bold hover:underline shrink-0"
            >
              Read Service Policy &rarr;
            </Link>
          </div>

          {/* 5 Highlights Strip with Devotional Accents */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: <Star className="text-amber-500" size={20} />, title: '8 Major Pujas', desc: 'Home & Office Visits' },
              { icon: <BookOpen className="text-saffron" size={20} />, title: 'Vedic Shastriya Vidhi', desc: 'Sanskrit & Hindi' },
              { icon: <CalendarCheck className="text-emerald-600" size={20} />, title: 'Shubh Muhurat', desc: 'Same-Day Guidance' },
              { icon: <Clock className="text-ink" size={20} />, title: '100% Punctual', desc: 'Arrives On Time' },
              { icon: <MapPin className="text-saffron" size={20} />, title: 'All Bangalore', desc: 'Doorstep Service' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-paper/70 rounded-2xl border border-ink/6 p-4 text-center shadow-xs hover:-translate-y-1 transition-transform"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xs mb-2">
                  {item.icon}
                </div>
                <p className="font-bold text-xs sm:text-sm text-ink">{item.title}</p>
                <p className="text-[11px] text-ink/65 mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHAPE DIVIDER 2: MOUNTAINS DIVIDER (Himalayan / Kailash peaks leading to Puja Services) */}
      <MountainsDivider position="top" fill="#fcf6ec" height={60} />

      {/* 3. PUJA SERVICES GRID ON DEVOTIONAL DAWN GRADIENT */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-[#fcf6ec] via-[#fdf1df] to-[#fae6cc] relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-kicker">Sacred Ceremonies</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-ink mb-4">
              Explore Our Authentic Puja Services
            </h2>
            <p className="text-base sm:text-lg text-ink/75 leading-relaxed">
              Every puja is conducted with dedicated Vedic sequence, holy hawan, and clear Hindi guidance. Select any ritual below to view complete details, samagri requirements, and instant booking options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pujas.map((puja) => (
              <article
                key={puja.slug}
                className="group flex flex-col rounded-3xl border border-amber-900/10 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Image Card (Zero text burned in) */}
                <div className="relative aspect-[16/10] overflow-hidden bg-paper">
                  <Image
                    src={puja.image}
                    alt={`${puja.shortTitle} in Bangalore`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
                  <div className="absolute left-3 right-3 bottom-3 flex items-center justify-between text-white text-xs">
                    <span className="font-bold bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-lg">
                      {puja.navLabel}
                    </span>
                    <span className="text-[11px] font-semibold text-amber-300">
                      Vedic Vidhi
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink mb-2">
                      {puja.shortTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink/70 leading-relaxed mb-5 line-clamp-3">
                      {puja.tagline}
                    </p>
                  </div>

                  {/* Action Buttons for High Conversion */}
                  <div className="space-y-2 pt-2 border-t border-ink/6">
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={`tel:${phoneNumber}`}
                        className="cta-button cta-call text-xs py-2.5 px-2"
                        aria-label={`Call to book ${puja.shortTitle}`}
                      >
                        <Phone size={14} />
                        <span>Call</span>
                      </a>
                      <a
                        href={getWhatsAppLink(puja.shortTitle)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button cta-whatsapp text-xs py-2.5 px-2"
                        aria-label={`WhatsApp to book ${puja.shortTitle}`}
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
                      <span>View Details & Samagri</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services/"
              className="cta-button cta-saffron text-sm sm:text-base px-8 py-4 shadow-md"
            >
              <Sparkles size={18} />
              <span>View All 15 Puja Services Overview</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SHAPE DIVIDER 3: BOOK DIVIDER (Twin sacred sanctum arch transitioning into Deep Vedic Havan) */}
      <BookDivider position="bottom" fill="#220b04" height={60} />

      {/* 4. WHY FAMILIES CHOOSE US (DEEP DEVOTIONAL HAVAN BACKGROUND WITH HIGH CONTRAST) */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#220b04] via-[#4d1706] to-[#7f2608] text-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/15 border border-amber-300/30 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-300 mb-4 shadow-xs">
              <Sparkles size={14} /> Sanatana Dharma Integrity
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Why North Indian Families in Bangalore Choose Us
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: '15+ Years Gurukul Experience',
                  desc: 'Pandit Nilesh Kumar Pandey brings deep traditional training in Vedic scriptures, proper hawan sequence, and Sanskrit mantra chanting.',
                },
                {
                  title: 'Pure Sanskrit Mantras with Hindi Explanation',
                  desc: 'Every sankalp, mantra, and ritual step is explained patiently in clear Hindi so your entire family understands and connects with the blessing.',
                },
                {
                  title: 'Punctual & Complete Samagri Support',
                  desc: 'We arrive on time at your venue with clear checklists and guidance, ensuring a completely stress-free puja experience for your family.',
                },
                {
                  title: 'Covering Homes & Offices Across Bangalore',
                  desc: 'From apartments and independent villas to newly launched commercial spaces and wedding banquet halls, we serve all Bangalore areas.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex items-start gap-3.5 hover:bg-white/15 transition-colors"
                >
                  <div className="h-8 w-8 rounded-full bg-amber-400 text-ink font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-white/80 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href={`tel:${phoneNumber}`}
                className="cta-button bg-white text-ink hover:bg-amber-50 text-sm px-6 py-3.5 font-bold shadow-md"
              >
                <Phone size={18} className="text-saffron" />
                <span>Call Pandit Ji ({phoneNumber})</span>
              </a>
              <Link
                href="/about-us/"
                className="cta-button cta-outline-light text-sm px-6 py-3.5 font-bold"
              >
                <Award size={18} />
                <span>Read About Pandit Ji</span>
              </Link>
            </div>
          </div>

          {/* About Pandit Ji Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-xl text-white">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-paper/20 border border-white/20">
              <Image
                src="/images/banners/about-pandit-ji.webp"
                alt="Pandit Nilesh Kumar Pandey portrait"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Pandit Nilesh Kumar Pandey
                  </h3>
                  <p className="text-xs text-amber-300 font-bold uppercase tracking-wider">
                    Vedic Priest & Ritual Specialist
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-amber-400 text-ink shadow-xs flex items-center justify-center">
                  <Star size={20} fill="currentColor" />
                </div>
              </div>
              <p className="text-sm text-white/85 leading-relaxed">
                Based in Koramangala, Bangalore, Pandit ji has solemnized over 3,500+ pujas, housewarmings, marriages, and sacred kathas for devotees from Uttar Pradesh, Bihar, Delhi-NCR, Rajasthan, and Madhya Pradesh residing in Bangalore.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-white/80">
                <span className="flex items-center gap-1">
                  <MapPin size={14} className="text-amber-300" /> Koramangala, Bangalore
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck size={14} className="text-emerald-400" /> 100% Shastriya Vidhi
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHAPE DIVIDER 4: WAVES PATTERN (Sacred flowing river waves transitioning to Devotee Reviews) */}
      <WavesPatternDivider position="bottom" fill="#fff9ef" height={64} />

      {/* 5. DEVOTEE EXPERIENCES ON SANDALWOOD DEVOTIONAL GRADIENT */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#fff9ef] via-[#fff3de] to-[#ffeac9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-kicker">Devotee Experiences</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-ink mb-3">
              What Families in Bangalore Say
            </h2>
            <p className="text-sm sm:text-base text-ink/75">
              Trusted by hundreds of North Indian families across Bangalore for punctuality, authentic vidhi, and respectful ceremonies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-3xl border border-amber-900/10 p-6 sm:p-7 shadow-sm relative flex flex-col justify-between hover:-translate-y-1 transition-transform"
              >
                <div>
                  <div className="flex text-amber-500 gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-ink/80 italic leading-relaxed mb-6">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-ink/6 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-ink text-sm">{review.name}</p>
                    <p className="text-xs text-ink/55">{review.location}, Bangalore</p>
                  </div>
                  <span className="text-[11px] font-semibold text-saffron bg-saffron/10 px-2.5 py-1 rounded-full">
                    {review.puja}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHAPE DIVIDER 5: DROPS DIVIDER (Sacred kalash amrit droplets) */}
      <DropsDivider position="bottom" fill="#ffffff" height={54} />

      {/* 6. BANGALORE LOCATIONS SERVED STRIP */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="section-kicker">Local Coverage</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink mb-6">
            Providing Home Puja Services Across Bangalore
          </h2>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto mb-8">
            {[
              'Whitefield',
              'HSR Layout',
              'Koramangala',
              'Electronic City',
              'Bellandur',
              'Marathahalli',
              'Sarjapur Road',
              'Indiranagar',
              'Hebbal',
              'JP Nagar',
              'BTM Layout',
              'Yelahanka',
              'KR Puram',
              'Banashankari',
              'Malleshwaram',
              'Jayanagar',
            ].map((area) => (
              <div
                key={area}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-paper/80 border border-ink/6 text-xs font-semibold text-ink/85 shadow-2xs hover:border-saffron/40 transition-colors"
              >
                <MapPin size={13} className="text-saffron" />
                <span>{area}</span>
              </div>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-ink/70">
            Need pandit ji in another area? Call <strong>{phoneNumber}</strong> for immediate route confirmation.
          </p>
        </div>
      </section>

      {/* SHAPE DIVIDER 6: ZIGZAG DIVIDER leading into FAQs */}
      <ZigzagDivider position="bottom" fill="#fdfaf4" height={42} />

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#fdfaf4]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-kicker">Answers & Guidance</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-ink/70">
              Clear answers regarding shubh muhurat, samagri, and booking procedures.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-ink/8 bg-white overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-ink hover:text-saffron transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-saffron shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  {openFaq === index ? (
                    <ChevronUp size={18} className="text-saffron shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-ink/40 shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-ink/75 leading-relaxed border-t border-ink/5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHAPE DIVIDER 7: CURVE DIVIDER transitioning into final CTA */}
      <CurveDivider position="bottom" fill="#200a03" height={54} />

      {/* 8. FINAL CALL TO ACTION CONVERSION BANNER (DEEP SURYA AURORA) */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-[#200a03] via-[#521706] to-[#992807] text-white">
        <div className="max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl bg-white/5 border border-white/15 p-8 sm:p-12 lg:p-16 text-center sm:text-left relative backdrop-blur-sm">
          <div className="max-w-3xl relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 border border-amber-300/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-300 mb-4">
              <Sparkles size={14} /> Immediate Booking Support
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight mb-4 text-white">
              Plan Your Puja in Bangalore with North Hindi Pandit
            </h2>
            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
              Speak directly with Pandit Nilesh Kumar Pandey. Discuss your preferred dates, shubh muhurat, and complete puja preparations with one simple call or WhatsApp message.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start">
              <a
                href={`tel:${phoneNumber}`}
                className="cta-button bg-white text-ink hover:bg-paper text-sm sm:text-base px-8 py-4 font-bold shadow-lg"
              >
                <Phone size={18} className="text-saffron" />
                <span>Call Now: {phoneNumber}</span>
              </a>
              <a
                href={getWhatsAppLink('Final Banner Booking')}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button cta-whatsapp text-sm sm:text-base px-8 py-4 shadow-lg"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Pandit Ji</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Bar */}
      <MobileStickyBar whatsappLabel="Home Page Mobile Booking" />

      {/* Redesigned Footer */}
      <Footer />
    </main>
  );
}
