'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  ChevronDown,
  Facebook,
  Flower2,
  HeartHandshake,
  HousePlus,
  Instagram,
  Landmark,
  Menu,
  Mountain,
  Phone,
  ScrollText,
  Sparkles,
  Users,
  X,
  Youtube,
} from 'lucide-react';
import { phoneNumber, pujas } from '@/data/pujas';

const pujaIcons = [
  HousePlus,
  Landmark,
  Flower2,
  Mountain,
  Sparkles,
  HeartHandshake,
  ScrollText,
  Users,
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-paper/88 backdrop-blur-xl py-3 shadow-soft' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-4">
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-xl md:text-[30px] font-bold tracking-tight text-ink">North Hindi Pandit</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-saffron font-bold">Trusted Puja Booking Service in Bangalore</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            <Link href="/" className={`text-sm uppercase tracking-widest font-semibold transition-colors ${pathname === '/' ? 'text-saffron' : 'hover:text-saffron text-ink'}`}>
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsServicesOpen((value) => !value)}
                className={`inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold transition-colors ${pathname.startsWith('/services') ? 'text-saffron' : 'hover:text-saffron text-ink'}`}
              >
                Services
                <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute left-1/2 top-full z-[160] w-[24rem] -translate-x-1/2 pt-3">
                  <div className="rounded-[1.8rem] border border-ink/8 bg-white/96 p-4 shadow-[0_30px_80px_rgba(28,23,15,0.16)] backdrop-blur-xl">
                    <Link
                      href="/services/"
                      onClick={() => setIsServicesOpen(false)}
                      className="mb-3 flex items-center justify-between rounded-[1.2rem] bg-paper px-4 py-3 text-sm font-bold text-ink transition-colors hover:text-saffron"
                    >
                      <span>All Puja Services</span>
                      <Sparkles size={16} className="text-saffron" />
                    </Link>
                    <div className="grid gap-2">
                      {pujas.map((puja, index) => {
                        const Icon = pujaIcons[index % pujaIcons.length];
                        return (
                          <Link
                            key={puja.slug}
                            href={`/services/${puja.slug}/`}
                            onClick={() => setIsServicesOpen(false)}
                            className="flex items-center gap-3 rounded-[1.2rem] px-4 py-3 text-sm text-ink transition-all hover:bg-paper hover:text-saffron"
                          >
                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-saffron/10 text-saffron">
                              <Icon size={16} />
                            </span>
                            <span className="font-semibold">{puja.shortTitle}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link href="/contact-us/" className={`text-sm uppercase tracking-widest font-semibold transition-colors ${pathname === '/contact-us/' ? 'text-saffron' : 'hover:text-saffron text-ink'}`}>
              Contact Us
            </Link>
            <a
              href="https://www.instagram.com/north.indian.pandit.bangalore"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-ink shadow-soft transition-all hover:-translate-y-1 hover:text-saffron"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/nileshkumarpandey46365"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-ink shadow-soft transition-all hover:-translate-y-1 hover:text-saffron"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.youtube.com/@Pandit.Ji.Bangalore"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-ink shadow-soft transition-all hover:-translate-y-1 hover:text-saffron"
            >
              <Youtube size={18} />
            </a>
            <a href={`tel:${phoneNumber}`} className="cta-button cta-call px-6 py-3 text-sm">
              <Phone size={16} /> Call Now
            </a>
          </nav>

          <button className="lg:hidden text-ink" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[95] bg-paper/95 backdrop-blur-xl overflow-y-auto p-6">
          <div className="flex flex-col items-center justify-center gap-6 min-h-screen pt-20">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif">
              Home
            </Link>
            <div className="w-full max-w-md rounded-[2rem] border border-ink/8 bg-white/90 p-4 shadow-soft">
              <button
                type="button"
                onClick={() => setIsMobileServicesOpen((value) => !value)}
                className="flex w-full items-center justify-between text-2xl font-serif text-ink"
              >
                <span>Services</span>
                <ChevronDown size={22} className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileServicesOpen && (
                <div className="mt-4 grid gap-2">
                  <Link href="/services/" onClick={() => setIsMenuOpen(false)} className="rounded-[1.2rem] bg-paper px-4 py-3 font-bold text-ink">
                    All Puja Services
                  </Link>
                  {pujas.map((puja, index) => {
                    const Icon = pujaIcons[index % pujaIcons.length];
                    return (
                      <Link
                        key={puja.slug}
                        href={`/services/${puja.slug}/`}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 rounded-[1.2rem] px-4 py-3 text-ink transition-colors hover:bg-paper hover:text-saffron"
                      >
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-saffron/10 text-saffron">
                          <Icon size={16} />
                        </span>
                        <span className="font-semibold">{puja.shortTitle}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
            <Link href="/contact-us/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif">
              Contact Us
            </Link>
          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/north.indian.pandit.bangalore" target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink shadow-soft transition-all hover:-translate-y-1 hover:text-saffron">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/nileshkumarpandey46365" target="_blank" rel="noreferrer" aria-label="Facebook" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink shadow-soft transition-all hover:-translate-y-1 hover:text-saffron">
              <Facebook size={24} />
            </a>
            <a href="https://www.youtube.com/@Pandit.Ji.Bangalore" target="_blank" rel="noreferrer" aria-label="YouTube" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink shadow-soft transition-all hover:-translate-y-1 hover:text-saffron">
              <Youtube size={24} />
            </a>
          </div>
          <a href={`tel:${phoneNumber}`} className="cta-button cta-call text-lg px-10 py-4">
            <Phone size={22} /> Call Now
          </a>
          </div>
        </div>
      )}
    </>
  );
}
