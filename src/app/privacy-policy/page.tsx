import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, FileText, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { phoneNumber, getWhatsAppLink } from '@/data/pujas';

export const metadata: Metadata = {
  title: 'Privacy Policy | North Hindi Pandit Bangalore',
  description: 'Privacy Policy for North Hindi Pandit Bangalore. Transparent information on how we collect, use, and protect your contact and booking data in compliance with Google Ads policies.',
  alternates: {
    canonical: '/privacy-policy/',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen relative selection:bg-saffron/30">
      <SiteHeader />

      <section className="relative px-4 sm:px-6 pt-10 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-aura opacity-75" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-saffron shadow-sm mb-4">
            <Lock size={14} /> Trust & Transparency
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-ink mb-4">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-ink/70 leading-relaxed">
            Last Updated: November 2026. At <strong>North Hindi Pandit</strong> (northhindipandit.com), accessible across Bangalore, safeguarding your privacy and personal data is our utmost priority. This policy outlines our data handling practices in strict compliance with Google Ads user safety policies and data protection standards.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-4xl mx-auto space-y-8 bg-white/90 backdrop-blur-md rounded-[2rem] border border-ink/8 p-6 sm:p-10 shadow-sm">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">1. Information We Collect</h2>
            <p className="text-ink/75 leading-relaxed text-sm sm:text-base">
              When you visit our website, request a puja booking, or contact us via phone call or WhatsApp, we collect only the necessary information required to facilitate authentic Vedic services:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-ink/75 text-sm sm:text-base">
              <li><strong>Contact Information:</strong> Your name, phone number, email address, and preferred Bangalore location/address for home puja arrangements.</li>
              <li><strong>Puja Preferences:</strong> Type of puja (e.g., Griha Pravesh, Satyanarayan Katha, Marriage Puja), preferred dates, gotra, family member names for sankalp, and specific ritual requirements.</li>
              <li><strong>Technical Browsing Data:</strong> Standard anonymous server logs, IP addresses, browser types, and referring URLs via Google Tag Manager and Google Analytics to optimize page load speeds and mobile usability.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">2. How We Use Your Information</h2>
            <p className="text-ink/75 leading-relaxed text-sm sm:text-base">
              We process your details exclusively for legitimate service communication:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-ink/75 text-sm sm:text-base">
              <li>To confirm puja schedules, shubh muhurat, and samagri requirements.</li>
              <li>To allow Pandit Nilesh Kumar Pandey and our team to arrive punctually at your Bangalore venue.</li>
              <li>To answer questions submitted via our contact forms, phone calls, or WhatsApp queries.</li>
              <li>To ensure our advertising complies strictly with Google Ads policies against deceptive or spam communications.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">3. No Sale or Unauthorized Sharing of Data</h2>
            <p className="text-ink/75 leading-relaxed text-sm sm:text-base">
              We <strong>NEVER</strong> sell, rent, trade, or distribute your personal phone numbers or names to third-party telemarketers or external advertising networks. Your contact information is solely accessed by Pandit Nilesh Kumar Pandey and our direct support team to service your scheduled Vedic rituals.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">4. Cookies and Advertising Disclosures</h2>
            <p className="text-ink/75 leading-relaxed text-sm sm:text-base">
              Our website uses basic analytics and Google advertising tags to measure campaign effectiveness and deliver relevant local search ads. You can manage or disable cookies via your browser settings at any time without restricting your access to browse our puja details or contact us directly.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">5. Data Security & Retention</h2>
            <p className="text-ink/75 leading-relaxed text-sm sm:text-base">
              We employ industry-standard SSL encryption across northhindipandit.com. Personal details shared for sankalp are kept confidential and respectful of Vedic traditions.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">6. Contact Data Controller</h2>
            <p className="text-ink/75 leading-relaxed text-sm sm:text-base">
              For any queries or requests to update or delete your contact details, please contact:
            </p>
            <div className="mt-3 p-4 bg-paper rounded-xl border border-ink/5 text-sm sm:text-base text-ink/80 space-y-1">
              <p><strong>North Hindi Pandit</strong></p>
              <p>Pandit Nilesh Kumar Pandey</p>
              <p>Address: National Games Village, Nearby Passport office, Koramangala, Bangalore 560095</p>
              <p>Phone: <a href={`tel:${phoneNumber}`} className="text-saffron font-bold">{phoneNumber}</a></p>
              <p>Email: <a href="mailto:contact@northhindipandit.com" className="text-saffron font-bold">contact@northhindipandit.com</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyBar whatsappLabel="Privacy Policy Inquiry" />
    </main>
  );
}
