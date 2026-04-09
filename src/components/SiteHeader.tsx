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
  Mail,
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
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            {/* Menu Header */}
            <div className="mobile-menu-header">
              <div>
                <h2 className="font-serif text-2xl font-bold text-ink">Menu</h2>
                <p className="text-xs uppercase tracking-widest text-saffron font-bold mt-1">Puja Booking Service</p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="mobile-menu-nav">
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)} 
                className="mobile-menu-link"
              >
                <div className="flex items-center gap-3 w-full">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-saffron/10 text-saffron">
                    <Sparkles size={20} />
                  </span>
                  <span className="text-lg font-semibold text-ink">Home</span>
                </div>
              </Link>

              {/* Services Section */}
              <div className="mobile-menu-section">
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen((value) => !value)}
                  className="mobile-menu-section-title"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <ScrollText size={20} />
                    </span>
                    <span>Services</span>
                  </div>
                  <ChevronDown size={22} className={`service-chevron ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMobileServicesOpen && (
                  <div className="mobile-menu-submenu">
                    <Link 
                      href="/services/" 
                      onClick={() => setIsMenuOpen(false)} 
                      className="mobile-menu-submenu-item main-service"
                    >
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-saffron text-white">
                        <Sparkles size={16} />
                      </span>
                      <span className="font-bold">All Puja Services</span>
                    </Link>
                    
                    {pujas.map((puja, index) => {
                      const Icon = pujaIcons[index % pujaIcons.length];
                      return (
                        <Link
                          key={puja.slug}
                          href={`/services/${puja.slug}/`}
                          onClick={() => setIsMenuOpen(false)}
                          className="mobile-menu-submenu-item"
                        >
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-saffron/10 text-saffron">
                            <Icon size={16} />
                          </span>
                          <span className="font-medium text-sm">{puja.shortTitle}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link 
                href="/contact-us/" 
                onClick={() => setIsMenuOpen(false)} 
                className="mobile-menu-link"
              >
                <div className="flex items-center gap-3 w-full">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink/10 text-ink">
                    <Mail size={20} />
                  </span>
                  <span className="text-lg font-semibold text-ink">Contact Us</span>
                </div>
              </Link>
            </nav>

            {/* Social Media Links */}
            <div className="mobile-menu-section mt-6">
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-ink/50 mb-4 px-4">Follow Us</p>
              <div className="flex items-center justify-center gap-4 px-4">
                <a 
                  href="https://www.instagram.com/north.indian.pandit.bangalore" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Instagram" 
                  className="mobile-social-button"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://www.facebook.com/nileshkumarpandey46365" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Facebook" 
                  className="mobile-social-button"
                >
                  <Facebook size={24} />
                </a>
                <a 
                  href="https://www.youtube.com/@Pandit.Ji.Bangalore" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="YouTube" 
                  className="mobile-social-button"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mobile-menu-cta">
              <a href={`tel:${phoneNumber}`} className="cta-button cta-call-premium w-full text-lg py-5 justify-center">
                <Phone size={22} />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
