'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  AlertCircle,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  HelpCircle,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Tag,
} from 'lucide-react';
import { Footer } from '@/components/Footer';
import { LotusParticles } from '@/components/LotusParticles';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { SiteHeader } from '@/components/SiteHeader';
import { getWhatsAppLink, phoneNumber, pujas } from '@/data/pujas';

const faqs = [
  {
    q: 'Do you provide North Indian pandit in Bangalore for all major pujas?',
    a: 'Yes. We provide Hindi-speaking North Indian pandit services across Bangalore for Griha Pravesh, Satyanarayan, marriage, Rudrabhishek, Bhoomi Puja, Shraadh, Ganesh Puja, and more.',
  },
  {
    q: 'Can I open a separate page for each puja and book directly?',
    a: 'Yes. Every major puja now has its own detailed booking page so families can read the service details and contact us quickly.',
  },
  {
    q: 'Do you provide puja samagri support?',
    a: 'Yes. Depending on the puja and package selected, we guide the family with the list and can also support with samagri arrangements.',
  },
  {
    q: 'Which Bangalore areas do you cover?',
    a: 'We serve Whitefield, HSR Layout, Marathahalli, Electronic City, JP Nagar, Bellandur, Sarjapur, Hebbal, Indiranagar, KR Puram, Yelahanka, and nearby Bangalore locations.',
  },
];

const reviews = [
  {
    name: 'Rahul Sharma',
    text: 'Very professional Hindi pandit in Bangalore. The Griha Pravesh puja was beautifully performed and the whole family felt guided throughout.',
    location: 'Whitefield',
  },
  {
    name: 'Priya Verma',
    text: 'We booked Satyanarayan Puja and the entire vidhi was handled with devotion, punctuality, and clear Hindi explanations.',
    location: 'HSR Layout',
  },
  {
    name: 'Amit Gupta',
    text: 'Highly recommended for North Indian marriage rituals in Bangalore. Calm, knowledgeable, and very respectful with both families.',
    location: 'Electronic City',
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen relative selection:bg-saffron/30">
      <LotusParticles />
      <SiteHeader />

      <section className="relative pt-28 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 hero-aura opacity-90" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="hero-banner-shell">
            <div className="relative rounded-[2.2rem] overflow-hidden bg-white aspect-[1800/764]">
              <Image
                src="/images/hindi-pandit-all-puja.webp"
                alt="North Hindi Pandit in Bangalore"
                width={1800}
                height={764}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1c170f]/88 via-[#1c170f]/58 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c170f]/62 via-transparent to-transparent" />
            </div>

            <div className="hero-banner-content stagger-rise">
              <div className="inline-flex items-center gap-2 bg-white/85 text-saffron px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.24em] mb-6 shadow-soft">
                <ShieldCheck size={14} /> Trusted North Indian Pandit in Bangalore
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-[1.02] mb-6 text-white max-w-3xl">
                Book Trusted Hindi Pandit in Bangalore for Every Important Puja and Family Ritual
              </h1>
              <p className="text-lg md:text-xl text-white/88 max-w-2xl mb-8 leading-relaxed font-medium">
                We provide authentic North Indian puja services in Bangalore for Griha Pravesh, Satyanarayan, Ganesh Puja, Maha Mrityunjaya Jaap, Bhoomi Puja, Marriage Puja, Rudrabhishek, and Shraadh Puja with clear guidance, respectful rituals, and easy booking support for families.
              </p>
              <p className="text-base md:text-lg text-[#ffd48b] font-serif italic mb-8">
                "श्रद्धा से किया गया पूजन, घर में सुख, शांति और मंगल लाता है।"
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/services/" className="cta-button cta-saffron text-lg px-10 py-5">
                  <Sparkles size={22} /> Explore Services
                </Link>
                <a href={getWhatsAppLink('Premium Puja Booking')} className="cta-button cta-whatsapp text-lg px-10 py-5">
                  <MessageCircle size={22} /> Book on WhatsApp
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
                <div className="feature-pill">
                  <Check size={18} className="text-saffron" /> All Major Pujas Available
                </div>
                <div className="feature-pill">
                  <Check size={18} className="text-saffron" /> Bangalore Home Service
                </div>
                <div className="feature-pill">
                  <Check size={18} className="text-saffron" /> Fast Booking Support
                </div>
              </div>
            </div>
            <div className="absolute -top-10 right-0 h-36 w-36 rounded-full bg-gold/25 blur-3xl" />
            <div className="absolute -bottom-10 left-0 h-44 w-44 rounded-full bg-saffron/15 blur-3xl" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-ink/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { icon: <Star className="text-gold" />, title: '8 Major Pujas', desc: 'Home Service Available' },
              { icon: <CheckCircle className="text-saffron" />, title: 'Authentic Vidhi', desc: 'Hindi Guidance' },
              { icon: <Clock className="text-ink" />, title: 'Quick Booking', desc: 'Call or WhatsApp' },
              { icon: <Tag className="text-saffron" />, title: 'Clear Guidance', desc: 'Easy Booking Support' },
              { icon: <ShieldCheck className="text-gold" />, title: 'Bangalore', desc: 'City Coverage' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <div className="mb-4">{item.icon}</div>
                <p className="font-bold text-sm uppercase tracking-widest mb-1">{item.title}</p>
                <p className="text-[10px] uppercase tracking-widest opacity-50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-saffron text-white py-3 px-6 text-center font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3">
        <AlertCircle size={18} /> Same-day and advance puja booking available across Bangalore.
      </div>

      <section className="py-28 px-6 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-18">
            <span className="text-saffron font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Puja Services</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Choose the Right Puja for Your Home and Family</h2>
            <p className="text-ink/62 max-w-3xl mx-auto text-lg">
              Read about each service, view the puja details, and contact us directly for fast booking, samagri guidance, and date confirmation in Bangalore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
            {pujas.map((puja, index) => (
              <article
                key={puja.slug}
                className="group relative overflow-hidden rounded-[2rem] border border-ink/6 bg-white p-5 shadow-soft hover:-translate-y-2 transition-all duration-500"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="relative aspect-[1800/764] rounded-[1.5rem] overflow-hidden mb-5 bg-paper">
                  <Image
                    src={puja.image}
                    alt={puja.title}
                    width={1800}
                    height={764}
                    className="h-auto w-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                  <div className="absolute left-4 right-4 bottom-4">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/85 font-bold">North Hindi Pandit</p>
                  </div>
                </div>

                <p className="text-[10px] uppercase tracking-[0.22em] text-saffron font-bold mb-3">{puja.navLabel}</p>
                <h3 className="font-serif text-2xl font-bold text-ink mb-3">{puja.shortTitle}</h3>
                <p className="text-sm text-ink/65 leading-relaxed mb-6 min-h-[72px]">{puja.tagline}</p>

                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a href={`tel:${phoneNumber}`} className="cta-button cta-call text-sm px-5 py-4">
                      <Phone size={18} /> Call
                    </a>
                    <a href={getWhatsAppLink(puja.shortTitle)} className="cta-button cta-whatsapp text-sm px-5 py-4">
                      <MessageCircle size={18} /> WhatsApp
                    </a>
                  </div>
                  <Link href={`/services/${puja.slug}/`} className="cta-button cta-saffron text-sm px-5 py-4">
                    <Sparkles size={18} /> View More
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services/" className="cta-button cta-saffron text-lg px-10 py-5">
              <Sparkles size={22} /> Open Full Services Page
            </Link>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8">
          <div className="content-panel">
            <p className="section-kicker">Why Families Choose Us</p>
            <h2 className="section-title">A smoother booking experience for every puja</h2>
            <div className="grid gap-4 mt-8">
              {[
                'Authentic North Indian puja rituals performed in Hindi with clear and respectful guidance for every family member.',
                'Timely service, simple booking support, and easy coordination for homes, apartments, wedding halls, and sites in Bangalore.',
                'Fast WhatsApp and call support for date confirmation, muhurat discussion, and puja preparation.',
                'Trusted service for families looking for calm, traditional, and sincere pandit ji support in Bangalore.',
              ].map((item) => (
                <div key={item} className="info-card rise-card">
                  <Check size={18} className="text-saffron shrink-0 mt-1" />
                  <p className="text-base text-ink/74 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="content-panel soft-cream">
            <p className="section-kicker">Popular Bangalore Areas</p>
            <h2 className="section-title">Serving homes across the city</h2>
            <div className="flex flex-wrap gap-4 mt-8">
              {['Whitefield', 'Marathahalli', 'Electronic City', 'HSR Layout', 'JP Nagar', 'Indiranagar', 'Bellandur', 'Sarjapur', 'Hebbal', 'KR Puram', 'Yelahanka', 'BTM Layout'].map((area) => (
                <div key={area} className="px-5 py-4 bg-white rounded-full border border-ink/6 shadow-soft hover:-translate-y-1 transition-transform flex items-center gap-3">
                  <MapPin className="text-saffron" size={17} />
                  <span className="font-bold text-sm uppercase tracking-widest">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-paper">
        <div className="max-w-5xl mx-auto text-center">
          <p className="section-kicker">Fast Contact</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-ink mb-6">Share your puja requirement and get quick booking support</h2>
          <p className="text-lg text-ink/65 max-w-3xl mx-auto mb-10">
            Call us directly or send your name, location, puja type, and preferred date on WhatsApp for quick confirmation.
          </p>
          <p className="text-base md:text-lg text-saffron font-serif italic mb-8">
            "जहाँ मंत्रों की शुद्धता होती है, वहाँ घर में शुभता अपने आप आती है।"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={getWhatsAppLink('All Puja Services')} className="cta-button cta-whatsapp text-lg px-10 py-5">
              <MessageCircle size={22} /> WhatsApp All Services
            </a>
            <Link href="/services/" className="cta-button cta-saffron text-lg px-10 py-5">
              <Sparkles size={22} /> View Services
            </Link>
            <a href={`tel:${phoneNumber}`} className="cta-button cta-call text-lg px-10 py-5">
              <Phone size={22} /> Call for Booking
            </a>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-saffron font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Customer Reviews</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold">What Families in Bangalore Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.name} className="rounded-[2rem] border border-ink/6 bg-paper p-8 shadow-soft relative hover:-translate-y-1 transition-transform">
                <Quote className="absolute top-7 right-7 text-saffron/10" size={46} />
                <div className="flex text-gold mb-6">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg italic text-ink/80 leading-relaxed mb-7">"{review.text}"</p>
                <div>
                  <p className="font-bold text-ink">{review.name}</p>
                  <p className="text-xs uppercase tracking-widest opacity-40">{review.location}, Bangalore</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-paper">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-saffron font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Common Questions</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold">Frequently Asked</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.q} className="border border-ink/6 rounded-[1.8rem] overflow-hidden bg-white shadow-soft">
                <button
                  className="w-full flex items-center justify-between gap-4 p-6 text-left font-bold text-lg hover:bg-paper transition-all"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="flex items-center gap-4">
                    <HelpCircle size={20} className="text-saffron shrink-0" />
                    {faq.q}
                  </span>
                  {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === index && (
                  <div className="p-6 bg-paper/60 text-ink/70 leading-relaxed border-t border-ink/5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto final-cta-shell">
          <div className="final-cta-panel wide">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/70 mb-4">North Hindi Pandit</p>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white leading-[1.06] mb-6">
              Book the right puja in Bangalore with one clear click
            </h2>
            <p className="text-white/82 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
              Connect with North Hindi Pandit for trusted family pujas, wedding rituals, griha pravesh, and devotional ceremonies across Bangalore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services/" className="cta-button cta-light text-lg px-10 py-5">
                <Sparkles size={22} /> View All Services
              </Link>
              <a href={`tel:${phoneNumber}`} className="cta-button cta-outline-light text-lg px-10 py-5">
                <Phone size={22} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <a
        href={getWhatsAppLink('Website Booking')}
        className="floating-whatsapp group"
      >
        <MessageCircle size={30} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold whitespace-nowrap">
          Book on WhatsApp
        </span>
      </a>

      <MobileStickyBar whatsappLabel="Home Page Booking" />

      <Footer />
    </main>
  );
}
