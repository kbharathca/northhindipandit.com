import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ShieldCheck, Heart, Phone, MessageCircle } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { WavesBrushDivider } from '@/components/ShapeDividers';
import { phoneNumber, getWhatsAppLink } from '@/data/pujas';

export const metadata: Metadata = {
  title: 'Disclaimer & Faith-Based Service Disclosure | North Hindi Pandit',
  description: 'Spiritual and religious service disclosure for North Hindi Pandit Bangalore, ensuring transparency and 100% compliance with Google Ads policies.',
  alternates: {
    canonical: '/disclaimer/',
  },
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen relative selection:bg-saffron/30">
      <SiteHeader />

      <section className="relative px-4 sm:px-6 pt-10 pb-16 overflow-hidden bg-gradient-to-b from-[#fffcf7] via-[#fff4e3] to-[#ffe5c4]">
        <div className="absolute inset-0 hero-aura opacity-75" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-saffron/25 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-saffron shadow-sm mb-4">
            <ShieldCheck size={14} /> Full Transparency
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-ink mb-4">
            Disclaimer & Religious Service Disclosure
          </h1>
          <p className="text-base sm:text-lg text-ink/80 leading-relaxed">
            In compliance with <strong>Google Ads Misrepresentation and Unrealistic Claims Policies</strong>, as well as Indian consumer protection guidelines, this page provides a clear declaration regarding the nature of Vedic and Hindu ritual services offered on northhindipandit.com.
          </p>
        </div>

        <div className="mt-8">
          <WavesBrushDivider position="bottom" fill="#ffffff" height={50} />
        </div>
      </section>

      <section className="px-4 sm:px-6 py-14 bg-white">
        <div className="max-w-4xl mx-auto space-y-8 bg-paper/60 rounded-[2rem] border border-ink/8 p-6 sm:p-10 shadow-xs">
          <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-4">
            <AlertTriangle size={24} className="text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-950 text-base sm:text-lg mb-1">Important Notice on Religious Beliefs</h3>
              <p className="text-amber-900 text-sm sm:text-base leading-relaxed">
                All pujas, homas, kathas, and jaap ceremonies performed by North Hindi Pandit are sacred, devotional Vedic religious practices conducted in accordance with ancient Hindu scriptures and tradition. They are intended for personal devotion, family cultural occasions, and spiritual peace.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">1. No Guarantees of Supernatural or Material Outcomes</h2>
            <p className="text-ink/80 leading-relaxed text-sm sm:text-base">
              We strictly <strong>do NOT claim, promise, or guarantee</strong> specific life outcomes, instant financial windfalls, miraculous cures, supernatural interventions, or guaranteed astrological results. Vedic ceremonies are expressions of faith, sankalp, prayer, and reverence to the divine; individual experiences and peace of mind depend on personal devotion and beliefs.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">2. No Medical, Legal, or Financial Advice</h2>
            <p className="text-ink/80 leading-relaxed text-sm sm:text-base">
              Maha Mrityunjaya Jaap, Rudrabhishek, or peace rituals are spiritual prayers for well-being. They are <strong>never a substitute for professional medical, psychological, legal, or financial advice</strong>. Always seek the advice of licensed medical practitioners or qualified professionals for health, financial, or legal matters.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">3. Professional Integrity & Cultural Service</h2>
            <p className="text-ink/80 leading-relaxed text-sm sm:text-base">
              Our service charge (dakshina) is solely compensation for Pandit ji's time, Vedic knowledge, travel across Bangalore, and samagri preparation. We take pride in providing transparent, respectful, and family-friendly rituals with no hidden fees or superstitious pressures.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">4. Questions & Direct Contact</h2>
            <p className="text-ink/80 leading-relaxed text-sm sm:text-base">
              If you have any questions regarding the traditional vidhi, chanting process, or guidelines of any ceremony, please speak directly with Pandit Nilesh Kumar Pandey at <strong>{phoneNumber}</strong>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyBar whatsappLabel="Disclaimer Question" />
    </main>
  );
}
