import type { Metadata } from 'next';
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Sparkles, Youtube } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { SiteHeader } from '@/components/SiteHeader';
import { getWhatsAppLink, phoneNumber } from '@/data/pujas';

export const metadata: Metadata = {
  title: 'Contact Us | North Hindi Pandit Bangalore',
  description: 'Contact North Hindi Pandit in Bangalore for puja booking, call support, WhatsApp booking, address details, and social media links.',
  alternates: {
    canonical: '/contact-us/',
  },
};

export default function ContactUsPage() {
  return (
    <main className="min-h-screen relative selection:bg-saffron/30">
      <SiteHeader />

      <section className="relative overflow-hidden px-6 pt-8 md:pt-12 pb-20">
        <div className="absolute inset-0 hero-aura opacity-85" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-saffron shadow-soft mb-6">
              <Sparkles size={14} />
              Contact North Hindi Pandit
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-[1.04] text-ink mb-6">
              Contact Us for Puja Booking in Bangalore
            </h1>
            <p className="text-lg md:text-xl text-ink/72 leading-relaxed max-w-3xl mb-8">
              Call or message us for fast booking support, puja details, date availability, and guidance for family rituals across Bangalore.
            </p>
            <p className="text-base md:text-lg text-saffron font-serif italic mb-8">
              "भक्ति, विश्वास और सही विधि के साथ किया गया पूजन जीवन में मंगल लाता है।"
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="content-panel">
            <p className="section-kicker">Contact Details</p>
            <h2 className="section-title">Book your puja with confidence</h2>
            <div className="grid gap-4 mt-8">
              <div className="info-card">
                <Phone size={20} className="text-saffron shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-ink">Call Us</p>
                  <a href={`tel:${phoneNumber}`} className="text-base text-ink/75">{phoneNumber}</a>
                </div>
              </div>
              <div className="info-card">
                <Mail size={20} className="text-saffron shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-ink">Email</p>
                  <a href="mailto:contact@northhindipandit.com" className="text-base text-ink/75">contact@northhindipandit.com</a>
                </div>
              </div>
              <div className="info-card">
                <MapPin size={20} className="text-saffron shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-ink">Address</p>
                  <p className="text-base text-ink/75 leading-relaxed">
                    National Games Village
                    <br />
                    Nearby Passport office Koramangala Bangalore 560095
                  </p>
                </div>
              </div>
            </div>
            <div className="booking-grid mt-8">
              <a href={`tel:${phoneNumber}`} className="cta-button cta-call-premium text-sm md:text-base px-6 py-4">
                <Phone size={20} />
                Call {phoneNumber}
              </a>
              <a href={getWhatsAppLink('Contact Page Booking')} className="cta-button cta-whatsapp-premium text-sm md:text-base px-6 py-4">
                <MessageCircle size={20} />
                WhatsApp Booking
              </a>
            </div>
          </div>

          <div className="content-panel soft-cream">
            <p className="section-kicker">Social Media</p>
            <h2 className="section-title">Follow and connect with us</h2>
            <div className="grid gap-4 mt-8">
              <a href="https://www.instagram.com/north.indian.pandit.bangalore" target="_blank" rel="noreferrer" className="related-link-card">
                <div className="flex items-center gap-4">
                  <Instagram size={22} className="text-saffron" />
                  <div>
                    <p className="font-bold text-ink">Instagram</p>
                    <p className="text-sm text-ink/65">north.indian.pandit.bangalore</p>
                  </div>
                </div>
              </a>
              <a href="https://www.facebook.com/nileshkumarpandey46365" target="_blank" rel="noreferrer" className="related-link-card">
                <div className="flex items-center gap-4">
                  <Facebook size={22} className="text-saffron" />
                  <div>
                    <p className="font-bold text-ink">Facebook</p>
                    <p className="text-sm text-ink/65">nileshkumarpandey46365</p>
                  </div>
                </div>
              </a>
              <a href="https://www.youtube.com/@Pandit.Ji.Bangalore" target="_blank" rel="noreferrer" className="related-link-card">
                <div className="flex items-center gap-4">
                  <Youtube size={22} className="text-saffron" />
                  <div>
                    <p className="font-bold text-ink">YouTube</p>
                    <p className="text-sm text-ink/65">@Pandit.Ji.Bangalore</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="booking-highlight-card mt-8">
              <p className="font-serif text-2xl font-bold text-ink">North Hindi Pandit</p>
              <p className="text-ink/68 mt-3 leading-relaxed">
                Serving Bangalore families with respectful North Indian puja vidhi, clear guidance, and quick call or WhatsApp support for home bookings.
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
