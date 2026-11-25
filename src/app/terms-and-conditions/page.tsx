import type { Metadata } from 'next';
import Link from 'next/link';
import { Scale, CheckCircle2, AlertCircle, Phone, MessageCircle } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';
import { MobileStickyBar } from '@/components/MobileStickyBar';
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

      <section className="relative px-4 sm:px-6 pt-10 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-aura opacity-75" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-saffron shadow-sm mb-4">
            <Scale size={14} /> Service Agreement
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-ink mb-4">
            Terms & Conditions
          </h1>
          <p className="text-base sm:text-lg text-ink/70 leading-relaxed">
            Welcome to <strong>North Hindi Pandit</strong>. By using our website (northhindipandit.com) or scheduling a Vedic ceremony with us in Bangalore, you agree to the following transparent terms.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-4xl mx-auto space-y-8 bg-white/90 backdrop-blur-md rounded-[2rem] border border-ink/8 p-6 sm:p-10 shadow-sm">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">1. Scope of Services</h2>
            <p className="text-ink/75 leading-relaxed text-sm sm:text-base">
              North Hindi Pandit provides authentic North Indian Vedic religious and cultural ritual facilitation across Bangalore. Services include Griha Pravesh, Satyanarayan Puja, Ganesh Puja, Rudrabhishek, Marriage rituals, Maha Mrityunjaya Jaap, Bhoomi Puja, and Shraadh ceremonies performed by qualified Hindi-speaking pandits according to traditional Sanatana Dharma customs.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">2. Booking Confirmation & Timings</h2>
            <p className="text-ink/75 leading-relaxed text-sm sm:text-base">
              Bookings can be requested via phone call, WhatsApp, or through our website contact forms. A booking is confirmed once the date, preferred shubh muhurat, venue address in Bangalore, and scope of puja samagri have been mutually agreed upon. We request families to ensure readiness of basic home setup (clean altar space, mats, and fresh water) prior to Pandit ji's arrival.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">3. Samagri & Preparations</h2>
            <p className="text-ink/75 leading-relaxed text-sm sm:text-base">
              Depending on the package selected, puja samagri (hawan wood, pure ghee, herbs, flowers, fruits) may be arranged completely by our team or coordinated with the host family using a clear checklist provided well in advance.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">4. Religious and Spiritual Nature of Service</h2>
            <p className="text-ink/75 leading-relaxed text-sm sm:text-base">
              All rituals are spiritual ceremonies guided by centuries-old Vedic scriptures and personal faith. As per Google Ads and consumer protection guidelines, our services do not offer superstitious remedies, guaranteed medical cures, supernatural guarantees, or commercial financial promises.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">5. Respectful Code of Conduct</h2>
            <p className="text-ink/75 leading-relaxed text-sm sm:text-base">
              We uphold the utmost sanctity, dignity, and punctuality during all ceremonies. We expect an atmosphere of mutual respect from all participating devotees and event coordinators.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">6. Governing Law & Contact</h2>
            <p className="text-ink/75 leading-relaxed text-sm sm:text-base">
              These terms are governed by the laws of India, under the jurisdiction of the courts of Bangalore, Karnataka.
            </p>
            <div className="mt-3 p-4 bg-paper rounded-xl border border-ink/5 text-sm sm:text-base text-ink/80">
              <p>For questions regarding terms, reach out at <strong>contact@northhindipandit.com</strong> or call <strong>{phoneNumber}</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyBar whatsappLabel="Terms & Conditions Inquiry" />
    </main>
  );
}
