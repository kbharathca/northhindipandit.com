import type { Metadata } from 'next';
import Link from 'next/link';
import { RefreshCw, CheckCircle2, Clock, Phone, MessageCircle } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { WavesBrushDivider } from '@/components/ShapeDividers';
import { phoneNumber, getWhatsAppLink } from '@/data/pujas';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | North Hindi Pandit Bangalore',
  description: 'Fair and transparent refund and cancellation policies for puja bookings with North Hindi Pandit in Bangalore.',
  alternates: {
    canonical: '/refund-policy/',
  },
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen relative selection:bg-saffron/30">
      <SiteHeader />

      <section className="relative px-4 sm:px-6 pt-10 pb-16 overflow-hidden bg-gradient-to-b from-[#fffcf7] via-[#fff4e3] to-[#ffe5c4]">
        <div className="absolute inset-0 hero-aura opacity-75" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-saffron/25 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-saffron shadow-sm mb-4">
            <RefreshCw size={14} /> Fair Customer Policy
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-ink mb-4">
            Refund & Cancellation Policy
          </h1>
          <p className="text-base sm:text-lg text-ink/80 leading-relaxed">
            At <strong>North Hindi Pandit</strong>, we recognize that family schedules, auspicious muhurat timings, and personal emergencies can change unexpectedly. We provide clear, fair, and flexible cancellation and rescheduling guidelines for all devotees.
          </p>
        </div>

        <div className="mt-8">
          <WavesBrushDivider position="bottom" fill="#ffffff" height={50} />
        </div>
      </section>

      <section className="px-4 sm:px-6 py-14 bg-white">
        <div className="max-w-4xl mx-auto space-y-8 bg-paper/60 rounded-[2rem] border border-ink/8 p-6 sm:p-10 shadow-xs">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">1. Free Date Rescheduling</h2>
            <p className="text-ink/80 leading-relaxed text-sm sm:text-base">
              If your family needs to adjust your puja date or time due to a changed shubh muhurat, travel delays, or personal reasons, we offer <strong>100% free rescheduling</strong> provided you inform us at least 24 hours prior to the scheduled ceremony. We will happily re-assign Pandit ji to your revised preferred date subject to availability.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">2. Cancellation Policy</h2>
            <ul className="list-disc list-inside mt-2 space-y-2 text-ink/80 text-sm sm:text-base">
              <li><strong>Cancellations made 24+ hours in advance:</strong> Any advance booking deposit paid is eligible for a full refund or can be held as full credit for future family rituals.</li>
              <li><strong>Cancellations within 24 hours:</strong> If fresh perishable puja samagri (such as specialized flowers, garlands, and hawan items) has already been procured specifically for your event, actual material costs may be deducted, and the balance refunded immediately.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">3. Refund Processing Timeline</h2>
            <p className="text-ink/80 leading-relaxed text-sm sm:text-base">
              Approved refunds are processed via UPI, bank transfer, or original payment mode within <strong>24 to 48 hours</strong> of cancellation request.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">4. How to Request Rescheduling or Cancellation</h2>
            <p className="text-ink/80 leading-relaxed text-sm sm:text-base">
              Simply reach out to us via direct phone call or WhatsApp at <strong>{phoneNumber}</strong> with your booking details. We will assist you promptly with maximum flexibility.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyBar whatsappLabel="Refund Policy Question" />
    </main>
  );
}
