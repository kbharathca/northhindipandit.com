import Link from 'next/link';
import { Facebook, Instagram, MapPin, Youtube } from 'lucide-react';
import { pujas } from '@/data/pujas';

export const Footer = () => {
  return (
    <footer className="py-20 bg-paper border-t border-ink/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="flex flex-col">
          <span className="font-serif text-3xl font-bold tracking-tight text-ink mb-4">North Hindi Pandit</span>
          <p className="text-sm text-ink/60 leading-relaxed max-w-sm">
            Customer-friendly puja booking pages for Bangalore families seeking trusted North Indian rituals, clear guidance, and fast contact support.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-saffron mb-2">Quick Links</h4>
          <Link href="/" className="text-sm hover:text-saffron transition-colors">Home</Link>
          <Link href="/services/" className="text-sm hover:text-saffron transition-colors">Services</Link>
          <Link href="/contact-us/" className="text-sm hover:text-saffron transition-colors">Contact Us</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-saffron mb-2">Popular Puja Pages</h4>
          {pujas.slice(0, 4).map((puja) => (
            <Link key={puja.slug} href={`/services/${puja.slug}/`} className="text-sm hover:text-saffron transition-colors">
              {puja.shortTitle}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-saffron mb-2">Contact Us</h4>
          <p className="text-sm text-ink/60">Serving major Bangalore locations for home and family pujas</p>
          <a href="tel:6206471543" className="text-sm font-bold">6206471543</a>
          <a href="mailto:contact@northhindipandit.com" className="text-sm hover:text-saffron transition-colors">contact@northhindipandit.com</a>
          <div className="flex items-start gap-3 text-sm text-ink/60 leading-relaxed">
            <MapPin size={18} className="text-saffron shrink-0 mt-1" />
            <p>
              National Games Village
              <br />
              Nearby Passport office Koramangala Bangalore 560095
            </p>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <a href="https://www.instagram.com/north.indian.pandit.bangalore" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-ink hover:text-saffron transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/nileshkumarpandey46365" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-ink hover:text-saffron transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://www.youtube.com/@Pandit.Ji.Bangalore" target="_blank" rel="noreferrer" aria-label="YouTube" className="text-ink hover:text-saffron transition-colors">
              <Youtube size={18} />
            </a>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink/40">Pandit Nilesh Kumar Pandey</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-ink/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] uppercase tracking-widest text-ink/40">
          &copy; 2026 North Hindi Pandit. All rights reserved.
        </p>
        <div className="flex gap-6">
          <span className="text-[10px] uppercase tracking-widest text-ink/40">Bangalore Puja Booking</span>
          <span className="text-[10px] uppercase tracking-widest text-ink/40">North Indian Ritual Services</span>
          <a href="/sitemap.xml" className="text-[10px] uppercase tracking-widest text-ink/40 hover:text-saffron transition-colors">Sitemap</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-5 text-center">
        <p className="text-sm text-ink/60">
          Designed by Bharath kattamanchi.
          {' '}
          <a href="https://tirupatihost.in" target="_blank" rel="noreferrer" className="font-semibold text-saffron hover:underline">
            Tirupatihost
          </a>
          {' '}
          and
          {' '}
          <a href="https://hyderabadhost.com" target="_blank" rel="noreferrer" className="font-semibold text-saffron hover:underline">
            Hyderabadhost
          </a>
        </p>
      </div>
    </footer>
  );
};
