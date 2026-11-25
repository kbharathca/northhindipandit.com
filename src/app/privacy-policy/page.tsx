import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, FileText, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { WavesBrushDivider } from '@/components/ShapeDividers';
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

      <section className="relative px-4 sm:px-6 pt-10 pb-16 overflow-hidden bg-gradient-to-b from-[#fffcf7] via-[#fff4e3] to-[#ffe5c4]">
        <div className="absolute inset-0 hero-aura opacity-75" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-saffron/25 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-saffron shadow-sm mb-4">
            <Lock size={14} /> Trust & Transparency
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-ink mb-4">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-ink/80 leading-relaxed">
            Last Updated: November 2026. At <strong>North Hindi Pandit</strong> (northhindipandit.com), accessible across Bangalore, safeguarding your privacy and personal data is our utmost priority. This policy outlines our data handling practices in strict compliance with Google Ads user safety policies and data protection standards.
          </p>
        </div>

        <div className="mt-8">
          <WavesBrushDivider position="bottom" fill="#ffffff" height={50} />
        </div>
      </section>

      <section className="px-4 sm:px-6 py-14 bg-white">
        <div className="max-w-4xl mx-auto space-y-8 bg-paper/60 rounded-[2rem] border border-ink/8 p-6 sm:p-10 shadow-xs">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">1. Information We Collect</h2>
            <p className="text-ink/80 leading-relaxed text-sm sm:text-base">
              When you visit our website, request a puja booking, or contact us via phone call or WhatsApp, we collect only the necessary information required to facilitate authentic Vedic services:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-ink/80 text-sm sm:text-base">
              <li><strong>Contact Information:</strong> Your name, phone number, email address, and preferred Bangalore location/address for home puja arrangements.</li>
              <li><strong>Puja Preferences:</strong> Type of puja (e.g., Griha Pravesh, Satyanarayan Katha, Marriage Puja), preferred dates, gotra, family member names for sankalp, and specific ritual requirements.</li>
              <li><strong>Technical Browsing Data:</strong> Standard anonymous server logs, IP addresses, browser types, and referring URLs via Google Tag Manager and Google Analytics to optimize page load speeds and mobile usability.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">2. How We Use Your Data</h2>
            <p className="text-ink/80 leading-relaxed text-sm sm:text-base">
              We use your contact and booking information exclusively to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1.5 text-ink/80 text-sm sm:text-base">
              <li>Coordinate puja dates, timings, and venue routes in Bangalore.</li>
              <li>Provide personalized samagri lists and shubh muhurat details.</li>
              <li>Respond promptly to your calls, inquiries, or WhatsApp messages.</li>
            </ul>
            <p className="mt-3 text-ink/80 text-sm sm:text-base font-semibold">
              We never sell, rent, commercialize, or share your personal information with third-party telemarketers or external entities.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">3. Data Security & Retention</h2>
            <p className="text-ink/80 leading-relaxed text-sm sm:text-base">
              All communications are safeguarded using industry-standard SSL/TLS encryption. We retain client contact records solely for ongoing ceremonial coordination and reference for recurring family rituals upon your request.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">4. Google Advertising & Policy Compliance</h2>
            <p className="text-ink/80 leading-relaxed text-sm sm:text-base">
              In strict adherence to Google Ads Policies, we do not engage in deceptive representations, predatory targeting, or unauthorized personal data collection. Users have full freedom to browse our services without mandatory account creation or invasive disclosures.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">5. Contact Our Privacy Lead</h2>
            <p className="text-ink/80 leading-relaxed text-sm sm:text-base">
              If you have questions regarding this Privacy Policy or wish to request removal of your booking details, please contact Pandit Nilesh Kumar Pandey directly at <strong>{phoneNumber}</strong> or via email at <strong>contact@northhindipandit.com</strong>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyBar whatsappLabel="Privacy Policy Question" />
    </main>
  );
}
