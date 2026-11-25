import type { Metadata } from 'next';
import Link from 'next/link';
import { Scale, CheckCircle2, AlertCircle, Phone, MessageCircle } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { WavesBrushDivider } from '@/components/ShapeDividers';
import { phoneNumber, getWhatsAppLink } from '@/data/pujas';

export const metadata: Metadata = {
  title: 'Terms and Conditions | North Hindi Pandit Bangalore',
  description: 'Terms and conditions for booking authentic Vedic puja services in Bangalore with North Hindi Pandit.',
  alternates: {
    canonical: '/terms-and-conditions/',
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen relative selection:bg-saffron/30">
      <SiteHeader />

      <section className="relative px-4 sm:px-6 pt-10 pb-16 overflow-hidden bg-gradient-to-b from-[#fffcf7] via-[#fff4e3] to-[#ffe5c4]">
        <div className="absolute inset-0 hero-aura opacity-75" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-saffron/25 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-saffron shadow-sm mb-4">
            <Scale size={14} /> Service Agreement
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-ink mb-4">
            Terms & Conditions
          </h1>
          <p className="text-base sm:text-lg text-ink/80 leading-relaxed">
            Welcome to <strong>North Hindi Pandit</strong>. By using our website (northhindipandit.com) or scheduling a Vedic ceremony with us in Bangalore, you agree to the following transparent terms.
          </p>
        </div>

        <div className="mt-8">
          <WavesBrushDivider position="bottom" fill="#ffffff" height={50} />
        </div>
      </section>

      <section className="px-4 sm:px-6 py-14 bg-white">
        <div className="max-w-4xl mx-auto space-y-8 bg-paper/60 rounded-[2rem] border border-ink/8 p-6 sm:p-10 shadow-xs">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">1. Scope of Services</h2>
            <p className="text-ink/80 leading-relaxed text-sm sm:text-base">
              North Hindi Pandit provides authentic North Indian Vedic religious and cultural ritual facilitation across Bangalore. Services include Griha Pravesh, Satyanarayan Puja, Ganesh Puja, Rudrabhishek, Marriage rituals, Maha Mrityunjaya Jaap, Bhoomi Puja, and Shraadh ceremonies performed by qualified Hindi-speaking pandits according to traditional Sanatana Dharma customs.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">2. Booking Confirmation & Timings</h2>
            <p className="text-ink/80 leading-relaxed text-sm sm:text-base">
              Bookings can be requested via phone call, WhatsApp, or through our website contact forms. A booking is confirmed once the date, preferred shubh muhurat, venue address in Bangalore, and scope of puja samagri have been mutually agreed upon. We request families to ensure readiness of basic home setup (clean altar space, mats, and fresh water) prior to Pandit ji's arrival.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">3. Samagri & Preparations</h2>
            <p className="text-ink/80 leading-relaxed text-sm sm:text-base">
              Depending on client preference, we either provide a comprehensive shopping checklist for the family to arrange or bring pure, authentic Vedic samagri directly. All consumables such as pure ghee, dry fruits, and sacred herbs are procured fresh.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">4. Conduct & Sanctity</h2>
            <p className="text-ink/80 leading-relaxed text-sm sm:text-base">
              We uphold the utmost sanctity, dignity, and punctuality during all ceremonies. We expect an atmosphere of mutual respect from all participating devotees and event coordinators.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">5. Inquiries & Escalations</h2>
            <p className="text-ink/80 leading-relaxed text-sm sm:text-base">
              For any clarifications regarding our service terms, please contact us at <strong>{phoneNumber}</strong> or email <strong>contact@northhindipandit.com</strong>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyBar whatsappLabel="Terms & Conditions Question" />
    </main>
  );
}
