import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, BookOpen, CheckCircle, Heart, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles, Star, Users } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import {
  BookDivider,
  CloudsDivider,
  CurveDivider,
  MountainsDivider,
  WavesBrushDivider,
  WavesPatternDivider,
} from '@/components/ShapeDividers';
import { phoneNumber, getWhatsAppLink, pujas } from '@/data/pujas';

export const metadata: Metadata = {
  title: 'About Us | Pandit Nilesh Kumar Pandey | North Hindi Pandit Bangalore',
  description: 'Learn about Pandit Nilesh Kumar Pandey and North Hindi Pandit. 15+ years of Vedic tradition, Sanskrit chanting, and trusted North Indian puja services across Bangalore.',
  alternates: {
    canonical: '/about-us/',
  },
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen relative selection:bg-saffron/30">
      <SiteHeader />

      {/* 1. HERO SECTION WITH DEVOTIONAL SUNRISE GRADIENT */}
      <section className="relative px-4 sm:px-6 pt-10 pb-16 overflow-hidden bg-gradient-to-b from-[#fffcf7] via-[#fff4e3] to-[#ffe5c4]">
        <div className="absolute inset-0 hero-aura opacity-80" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-saffron/25 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-saffron shadow-sm mb-4">
            <Sparkles size={14} /> Vedic Lineage & Authenticity
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-ink mb-4">
            About Pandit Nilesh Kumar Pandey & North Hindi Pandit
          </h1>
          <p className="text-base sm:text-lg text-ink/80 leading-relaxed max-w-2xl mx-auto">
            Connecting North Indian families across Bangalore with authentic Vedic pujas, pure Sanskrit mantras, clear Hindi explanations, and respectful spiritual traditions.
          </p>
        </div>

        {/* SHAPE DIVIDER: WAVES BRUSH DIVIDER */}
        <div className="mt-8">
          <WavesBrushDivider position="bottom" fill="#ffffff" height={52} />
        </div>
      </section>

      {/* 2. MAIN STORY CARD */}
      <section className="px-4 sm:px-6 py-14 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Main Story Card */}
          <div className="bg-paper/70 rounded-[2.5rem] border border-ink/8 p-6 sm:p-12 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-saffron mb-2">Our Mission</p>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink mb-4">
                Bridging Sacred Vedic Traditions for Bangalore Families
              </h2>
              <p className="text-ink/75 leading-relaxed mb-4 text-sm sm:text-base">
                Moving to a vibrant cosmopolitan city like Bangalore often leaves families searching for an experienced, Hindi-speaking pandit who understands authentic North Indian customs, whether from Uttar Pradesh, Bihar, Madhya Pradesh, Rajasthan, or Delhi-NCR.
              </p>
              <p className="text-ink/75 leading-relaxed mb-6 text-sm sm:text-base">
                <strong>Pandit Nilesh Kumar Pandey</strong> has dedicated over 15 years to performing authentic Vedic ceremonies. Trained in traditional Vedic Gurukuls, Pandit ji recites pure Sanskrit mantras while patiently guiding each family member through the spiritual significance of every step in clear, fluent Hindi.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${phoneNumber}`} className="cta-button cta-call text-sm px-6 py-3.5 shadow-md">
                  <Phone size={18} /> Call {phoneNumber}
                </a>
                <a href={getWhatsAppLink('About Us Inquiry')} className="cta-button cta-whatsapp text-sm px-6 py-3.5 shadow-md">
                  <MessageCircle size={18} /> WhatsApp Booking
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-ink/6 flex items-start gap-4 shadow-xs">
                <div className="h-10 w-10 rounded-full bg-saffron/10 flex items-center justify-center shrink-0 text-saffron">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-ink text-base">Authentic Vedic Vidhi</h3>
                  <p className="text-sm text-ink/70 mt-1">Conducted strictly adhering to Vedic Shastras, proper hawan, and correct shubh muhurat calculations.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-ink/6 flex items-start gap-4 shadow-xs">
                <div className="h-10 w-10 rounded-full bg-saffron/10 flex items-center justify-center shrink-0 text-saffron">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-ink text-base">Family-Inclusive Guidance</h3>
                  <p className="text-sm text-ink/70 mt-1">Clear explanations in Hindi so elders, youth, and children feel spiritually involved and blessed.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-ink/6 flex items-start gap-4 shadow-xs">
                <div className="h-10 w-10 rounded-full bg-saffron/10 flex items-center justify-center shrink-0 text-saffron">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-ink text-base">All Bangalore Locations</h3>
                  <p className="text-sm text-ink/70 mt-1">Serving Whitefield, Koramangala, HSR Layout, Electronic City, Indiranagar, Bellandur, Sarjapur, Hebbal, and beyond.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHAPE DIVIDER: BOOK DIVIDER */}
      <BookDivider position="bottom" fill="#200a03" height={56} />

      {/* 3. CORE VALUES ON DEEP DEVOTIONAL HAVAN BACKGROUND */}
      <section className="px-4 sm:px-6 py-16 bg-gradient-to-br from-[#200a03] via-[#4d1606] to-[#7f2608] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-300/30 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={13} /> Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">
              Our Spiritual Commitments
            </h2>
            <p className="text-sm sm:text-base text-white/85">
              Rooted in reverence, discipline, and sincere Sanatana Dharma values.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-xl text-white">
              <div className="h-12 w-12 rounded-full bg-amber-400 text-ink flex items-center justify-center mx-auto mb-4 font-bold shadow-md">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">Purity & Devotion</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">Pure samagri, disciplined preparation, and strict Vedic adherence for every household.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-xl text-white">
              <div className="h-12 w-12 rounded-full bg-amber-400 text-ink flex items-center justify-center mx-auto mb-4 font-bold shadow-md">
                <Star size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">3,500+ Blessings</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">Hundreds of 5-star reviews from satisfied North Indian families across Bangalore.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-xl text-white">
              <div className="h-12 w-12 rounded-full bg-amber-400 text-ink flex items-center justify-center mx-auto mb-4 font-bold shadow-md">
                <Heart size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">Transparent Support</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">Clear pricing, free date rescheduling, and complete guidance from start to finish.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyBar whatsappLabel="About Us Inquiry" />
    </main>
  );
}
