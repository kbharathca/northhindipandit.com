import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Youtube } from 'lucide-react';
import { getWhatsAppLink, phoneNumber, pujas } from '@/data/pujas';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-ink/8 pt-16 pb-24 lg:pb-16 text-ink/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Identity & Pandit Details */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ink block">
                North Hindi Pandit
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-saffron font-bold block mt-0.5">
                Bangalore Vedic Puja Services
              </span>
            </Link>
            <p className="text-sm text-ink/70 leading-relaxed">
              Authentic North Indian Vedic pujas performed at your doorstep across Bangalore by Pandit Nilesh Kumar Pandey. 15+ years of Vedic ritual expertise with pure Sanskrit chanting and clear Hindi explanations.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-ink/70">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span>Verified Local Service &bull; Koramangala, Bangalore</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-extrabold text-saffron mb-3">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-saffron transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services/" className="hover:text-saffron transition-colors">
                  All Puja Services (8)
                </Link>
              </li>
              <li>
                <Link href="/about-us/" className="hover:text-saffron transition-colors">
                  About Pandit Ji
                </Link>
              </li>
              <li>
                <Link href="/contact-us/" className="hover:text-saffron transition-colors">
                  Contact & Bookings
                </Link>
              </li>
            </ul>

            <h4 className="text-xs uppercase tracking-[0.2em] font-extrabold text-saffron pt-3 mb-2">
              Google Ads Compliance
            </h4>
            <ul className="space-y-1.5 text-xs text-ink/65">
              <li>
                <Link href="/privacy-policy/" className="hover:text-saffron transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions/" className="hover:text-saffron transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy/" className="hover:text-saffron transition-colors">
                  Refund & Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer/" className="hover:text-saffron transition-colors">
                  Spiritual Service Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Pujas */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-extrabold text-saffron mb-3">
              Vedic Puja Services
            </h4>
            <ul className="space-y-2 text-sm">
              {pujas.map((puja) => (
                <li key={puja.slug}>
                  <Link
                    href={`/services/${puja.slug}/`}
                    className="hover:text-saffron transition-colors"
                  >
                    {puja.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Location Details */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-extrabold text-saffron mb-3">
              Bangalore Contact
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2 font-bold text-ink hover:text-saffron transition-colors"
              >
                <Phone size={16} className="text-saffron" />
                <span>+91 {phoneNumber}</span>
              </a>
              <a
                href={getWhatsAppLink('Footer Quick Inquiry')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <MessageCircle size={16} className="text-emerald-600" />
                <span>WhatsApp: +91 {phoneNumber}</span>
              </a>
              <a
                href="mailto:contact@northhindipandit.com"
                className="flex items-center gap-2 hover:text-saffron transition-colors"
              >
                <Mail size={16} className="text-saffron" />
                <span>contact@northhindipandit.com</span>
              </a>
              <div className="flex items-start gap-2 pt-1 text-xs text-ink/70 leading-relaxed">
                <MapPin size={16} className="text-saffron shrink-0 mt-0.5" />
                <p>
                  National Games Village, Nearby Passport office, Koramangala, Bangalore - 560095
                </p>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs font-semibold text-ink/60 mb-2">Connect with Pandit Ji:</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/north.indian.pandit.bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="h-8 w-8 rounded-full bg-paper flex items-center justify-center hover:bg-saffron hover:text-white transition-all text-ink/70"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://www.facebook.com/share/1EZDZJnDFo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="h-8 w-8 rounded-full bg-paper flex items-center justify-center hover:bg-saffron hover:text-white transition-all text-ink/70"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://www.youtube.com/@Pandit.Ji.Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="h-8 w-8 rounded-full bg-paper flex items-center justify-center hover:bg-saffron hover:text-white transition-all text-ink/70"
                >
                  <Youtube size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Ads Compliance Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-paper/80 border border-ink/6 mb-8 text-xs text-ink/65 leading-relaxed">
          <p className="font-bold text-ink/80 mb-1">
            Faith-Based Vedic Services Transparency Disclosure:
          </p>
          <p>
            All rituals, homas, kathas, and ceremonies conducted by North Hindi Pandit in Bangalore are religious services rooted in ancient Sanatana Dharma scriptures and personal devotion. In strict compliance with Google Ads policies and consumer protection regulations, we do not claim, promise, or guarantee supernatural events, medical cures, instant wealth, or superstitious outcomes. Satisfaction comes from authentic ritual devotion and family peace of mind.
          </p>
        </div>

        {/* Bottom Legal & Attribution */}
        <div className="pt-6 border-t border-ink/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink/50">
          <p>&copy; 2026 North Hindi Pandit. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <Link href="/privacy-policy/" className="hover:text-saffron transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/terms-and-conditions/" className="hover:text-saffron transition-colors">
              Terms
            </Link>
            <span>&bull;</span>
            <Link href="/refund-policy/" className="hover:text-saffron transition-colors">
              Refunds
            </Link>
            <span>&bull;</span>
            <Link href="/disclaimer/" className="hover:text-saffron transition-colors">
              Disclaimer
            </Link>
            <span>&bull;</span>
            <a href="/sitemap.xml" className="hover:text-saffron transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
