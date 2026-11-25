import type { Metadata } from 'next';
import Link from 'next/link';
import { RefreshCw, CheckCircle2, Clock, Phone, MessageCircle } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';
import { MobileStickyBar } from '@/components/MobileStickyBar';
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

      <section className="relative px-4 sm:px-6 pt-10 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-aura opacity-75" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-saffron shadow-sm mb-4">
            <RefreshCw size={14} /> Fair Customer Policy
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-ink mb-4">
            Refund & Cancellation Policy
          </h1>
          <p className="text-base sm:text-lg text-ink/70 leading-relaxed">
            At <strong>North Hindi Pandit</strong>, we recognize that family schedules, auspicious muhurat timings, and personal emergencies can change unexpectedly. We provide clear, fair, and flexible cancellation and rescheduling guidelines for all devotees.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-4xl mx-auto space-y-8 bg-white/90 backdrop-blur-md rounded-[2rem] border border-ink/8 p-6 sm:p-10 shadow-sm">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">1. Free Date Rescheduling</h2>
            <p className="text-ink/75 leading-relaxed text-sm sm:text-base">
              If your family needs to adjust your puja date or time due to a changed shubh muhurat, travel delays, or personal reasons, we offer <strong>100% free rescheduling</strong> provided you inform us at least 24 hours prior to the scheduled ceremony. We will happily re-assign Pandit ji to your revised preferred date subject to availability.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">2. Cancellation Policy</h2>
            <ul className="list-disc list-inside mt-2 space-y-2 text-ink/75 text-sm sm:text-base">
              <li><strong>Cancellations made 24+ hours in advance:</strong> Any advance booking deposit paid is eligible for a full refund or can be held as full credit for future family rituals.</li>
              <li><strong>Cancellations within 24 hours:</strong> If fresh perishable puja samagri (such as specialized flowers, garlands, and hawan items) has already been procured specifically for your event, actual material costs may be deducted, and the balance refunded immediately.</li>
              <li><strong>Same-Day Cancellations after Pandit Ji has dispatched:</strong> In cases where Pandit ji has already reached the venue or is in transit across Bangalore, a nominal travel conveyance allowance may apply.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">3. Refund Processing Time</h2>
            <p className="text-ink/75 leading-relaxed text-sm sm:text-base">
              Approved refunds are initiated within <strong>24 to 48 working hours</strong> via the original payment method (UPI, Google Pay, PhonePe, or Bank Transfer).
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-3">4. How to Request Rescheduling or Cancellation</h2>
            <p className="text-ink/75 leading-relaxed text-sm sm:text-base">
              Simply call or send a WhatsApp message to our direct booking line:
            </p>
            <div className="mt-3 flex flex-wrap gap-4">
              <a href={`tel:${phoneNumber}`} className="cta-button cta-call text-sm px-6 py-3">
                <Phone size={18} /> Call {phoneNumber}
              </a>
              <a href={getWhatsAppLink('Reschedule or Cancellation Request')} className="cta-button cta-whatsapp text-sm px-6 py-3">
                <MessageCircle size={18} /> WhatsApp Request
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyBar whatsappLabel="Refund Policy Inquiry" />
    </main>
  );
}
