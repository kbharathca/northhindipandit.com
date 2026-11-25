import type { Metadata } from 'next';
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Youtube,
} from 'lucide-react';
import { Footer } from '@/components/Footer';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { SiteHeader } from '@/components/SiteHeader';
import {
  BookDivider,
  CloudsDivider,
  CurveDivider,
  MountainsDivider,
  TiltOpacityDivider,
  WavesBrushDivider,
  WavesDivider,
} from '@/components/ShapeDividers';
import { getWhatsAppLink, phoneNumber } from '@/data/pujas';

export const metadata: Metadata = {
  title: 'Contact North Hindi Pandit Bangalore | Call 6206471543',
  description:
    'Contact Pandit Nilesh Kumar Pandey in Koramangala Bangalore. Call 6206471543 or message on WhatsApp for instant puja bookings, muhurat & samagri.',
  alternates: {
    canonical: '/contact-us/',
  },
  openGraph: {
    title: 'Contact Us | North Hindi Pandit Bangalore',
    description:
      'Direct contact, phone number, WhatsApp link, and Bangalore address for Pandit Nilesh Kumar Pandey.',
    url: 'https://northhindipandit.com/contact-us/',
    type: 'website',
  },
};

export default function ContactUsPage() {
  return (
    <main className="min-h-screen relative selection:bg-saffron/30">
      <SiteHeader />

      {/* 1. HEADER SECTION WITH DEVOTIONAL SUNRISE GRADIENT */}
      <section className="relative px-4 sm:px-6 pt-8 md:pt-12 pb-14 overflow-hidden bg-gradient-to-b from-[#fffcf7] via-[#fff4e3] to-[#ffe5c4]">
        <div className="absolute inset-0 hero-aura opacity-85" />
        <div className="max-w-7xl mx-auto relative z-10 text-center sm:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-saffron/25 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-saffron shadow-xs mb-5">
              <Sparkles size={14} />
              <span>Contact North Hindi Pandit</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-ink leading-[1.08] mb-5">
              Get in Touch for Puja Bookings in Bangalore
            </h1>
            <p className="text-base sm:text-lg text-ink/80 leading-relaxed mb-6 font-normal">
              Speak directly with <strong>Pandit Nilesh Kumar Pandey</strong>. We assist North Indian families across Bangalore with immediate date confirmations, shubh muhurat calculations, and complete puja preparations.
            </p>
            <p className="text-sm sm:text-base text-saffron font-serif italic mb-6">
              &ldquo;भक्ति, विश्वास और सही विधि के साथ किया गया पूजन जीवन में मंगल लाता है।&rdquo;
            </p>
          </div>
        </div>

        {/* SHAPE DIVIDER: WAVES BRUSH DIVIDER */}
        <div className="mt-8">
          <WavesBrushDivider position="bottom" fill="#ffffff" height={52} />
        </div>
      </section>

      {/* 2. CONTACT CARDS GRID */}
      <section className="px-4 sm:px-6 py-14 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Direct Contact Details */}
          <div className="rounded-3xl border border-ink/8 bg-paper/60 p-6 sm:p-10 shadow-xs">
            <span className="section-kicker">Direct Contact Information</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink mb-6">
              Book with Complete Confidence
            </h2>

            <div className="space-y-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-ink/6 flex items-start gap-4 shadow-2xs">
                <div className="h-10 w-10 rounded-full bg-saffron/10 text-saffron flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-bold text-ink text-sm sm:text-base">Direct Phone Call</p>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="text-base sm:text-lg text-saffron font-bold hover:underline"
                  >
                    +91 {phoneNumber}
                  </a>
                  <p className="text-xs text-ink/65 mt-0.5">Available 6:00 AM – 9:00 PM Daily</p>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-ink/6 flex items-start gap-4 shadow-2xs">
                <div className="h-10 w-10 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="font-bold text-ink text-sm sm:text-base">WhatsApp Support</p>
                  <a
                    href={getWhatsAppLink('Contact Page WhatsApp')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg text-emerald-700 font-bold hover:underline"
                  >
                    +91 {phoneNumber}
                  </a>
                  <p className="text-xs text-ink/65 mt-0.5">Instant response for date and samagri</p>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-ink/6 flex items-start gap-4 shadow-2xs">
                <div className="h-10 w-10 rounded-full bg-saffron/10 text-saffron flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-bold text-ink text-sm sm:text-base">Official Email</p>
                  <a
                    href="mailto:contact@northhindipandit.com"
                    className="text-sm sm:text-base text-ink/80 hover:text-saffron hover:underline"
                  >
                    contact@northhindipandit.com
                  </a>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-ink/6 flex items-start gap-4 shadow-2xs">
                <div className="h-10 w-10 rounded-full bg-saffron/10 text-saffron flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold text-ink text-sm sm:text-base">Address in Bangalore</p>
                  <p className="text-xs sm:text-sm text-ink/75 leading-relaxed mt-1">
                    National Games Village, Nearby Passport office, Koramangala, Bangalore - 560095
                  </p>
                  <p className="text-xs text-ink/55 mt-1">
                    Doorstep service available across all Bangalore zones.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              <a
                href={`tel:${phoneNumber}`}
                className="cta-button cta-call text-sm sm:text-base py-3.5 px-4 shadow-md"
              >
                <Phone size={18} />
                <span>Call {phoneNumber}</span>
              </a>
              <a
                href={getWhatsAppLink('Contact Page Fast Booking')}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button cta-whatsapp text-sm sm:text-base py-3.5 px-4 shadow-md"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>

          {/* Social Channels & Service Pledge */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-ink/8 bg-paper/70 p-6 sm:p-10 shadow-xs">
              <span className="section-kicker">Verified Channels</span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-4">
                Social Media & Devotional Videos
              </h2>

              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/north.indian.pandit.bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white border border-ink/6 flex items-center justify-between hover:border-saffron/30 hover:shadow-xs transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Instagram size={22} className="text-saffron" />
                    <div>
                      <p className="font-bold text-ink text-sm">Instagram</p>
                      <p className="text-xs text-ink/60">@north.indian.pandit.bangalore</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-saffron">Follow &rarr;</span>
                </a>

                <a
                  href="https://www.facebook.com/nileshkumarpandey46365"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white border border-ink/6 flex items-center justify-between hover:border-saffron/30 hover:shadow-xs transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Facebook size={22} className="text-saffron" />
                    <div>
                      <p className="font-bold text-ink text-sm">Facebook</p>
                      <p className="text-xs text-ink/60">nileshkumarpandey46365</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-saffron">Connect &rarr;</span>
                </a>

                <a
                  href="https://www.youtube.com/@Pandit.Ji.Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white border border-ink/6 flex items-center justify-between hover:border-saffron/30 hover:shadow-xs transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Youtube size={22} className="text-saffron" />
                    <div>
                      <p className="font-bold text-ink text-sm">YouTube</p>
                      <p className="text-xs text-ink/60">@Pandit.Ji.Bangalore</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-saffron">Watch &rarr;</span>
                </a>
              </div>
            </div>

            {/* Google Ads Compliance Box */}
            <div className="rounded-3xl border border-ink/8 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-saffron font-bold text-xs uppercase tracking-wider mb-2">
                <ShieldCheck size={18} />
                <span>Our Service Commitment</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-ink mb-2">
                Pure Vedic Tradition & Punctuality
              </h3>
              <p className="text-xs sm:text-sm text-ink/75 leading-relaxed">
                We believe that performing a puja at home should bring complete peace of mind. Pandit Nilesh Kumar Pandey ensures transparent communication, zero hidden demands, and authentic Vedic rituals following ancient scriptures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyBar whatsappLabel="Contact Page Booking" />
    </main>
  );
}
