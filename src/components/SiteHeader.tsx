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
  Info,
  Instagram,
  Landmark,
  Mail,
  Menu,
  MessageCircle,
  Mountain,
  Phone,
  Scale,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Youtube,
} from 'lucide-react';
import { getWhatsAppLink, phoneNumber, pujas } from '@/data/pujas';

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
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-2.5 shadow-sm border-b border-ink/5'
            : 'bg-paper/90 backdrop-blur-sm py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center gap-4">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex flex-col group">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-ink group-hover:text-saffron transition-colors">
              North Hindi Pandit
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-saffron font-extrabold">
              Bangalore Vedic Puja Service
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors ${
                pathname === '/' ? 'text-saffron font-bold' : 'text-ink/80 hover:text-saffron'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsServicesOpen((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                  pathname.startsWith('/services') ? 'text-saffron font-bold' : 'text-ink/80 hover:text-saffron'
                }`}
                aria-expanded={isServicesOpen}
              >
                Services
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute left-1/2 top-full z-[160] w-80 -translate-x-1/2 pt-2">
                  <div className="rounded-2xl border border-ink/8 bg-white/98 p-3 shadow-xl backdrop-blur-xl">
                    <Link
                      href="/services/"
                      onClick={() => setIsServicesOpen(false)}
                      className="mb-2 flex items-center justify-between rounded-xl bg-paper px-3.5 py-2.5 text-xs font-bold text-ink hover:text-saffron transition-colors"
                    >
                      <span>View All 8 Puja Services</span>
                      <Sparkles size={14} className="text-saffron" />
                    </Link>
                    <div className="grid gap-1">
                      {pujas.map((puja, index) => {
                        const Icon = pujaIcons[index % pujaIcons.length];
                        return (
                          <Link
                            key={puja.slug}
                            href={`/services/${puja.slug}/`}
                            onClick={() => setIsServicesOpen(false)}
                            className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-ink/85 hover:bg-paper hover:text-saffron transition-colors"
                          >
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-saffron/10 text-saffron shrink-0">
                              <Icon size={14} />
                            </span>
                            <span>{puja.shortTitle}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about-us/"
              className={`text-sm font-semibold transition-colors ${
                pathname === '/about-us/' ? 'text-saffron font-bold' : 'text-ink/80 hover:text-saffron'
              }`}
            >
              About Us
            </Link>

            <Link
              href="/contact-us/"
              className={`text-sm font-semibold transition-colors ${
                pathname === '/contact-us/' ? 'text-saffron font-bold' : 'text-ink/80 hover:text-saffron'
              }`}
            >
              Contact
            </Link>

            {/* Header Call & WhatsApp Action Buttons */}
            <div className="flex items-center gap-3 ml-2">
              <a
                href={getWhatsAppLink('Header Quick Booking')}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button cta-whatsapp px-4 py-2 text-xs"
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="cta-button cta-call px-4 py-2 text-xs"
              >
                <Phone size={15} />
                <span>Call Now</span>
              </a>
            </div>
          </nav>

          {/* Mobile Right Controls: Call Button + Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2.5">
            <a
              href={`tel:${phoneNumber}`}
              className="cta-button cta-call px-3.5 py-1.5 text-xs"
              aria-label="Call Pandit Ji"
            >
              <Phone size={14} />
              <span>Call</span>
            </a>

            <button
              type="button"
              className="p-2 text-ink hover:text-saffron rounded-lg transition-colors"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Native Mobile App Style Drawer Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          {/* Backdrop overlay */}
          <div
            className="mobile-drawer-overlay"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Sheet */}
          <aside
            className="mobile-drawer-sheet"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            {/* Sheet Top Header */}
            <div className="p-4 border-b border-ink/8 flex items-center justify-between bg-paper/50">
              <div>
                <p className="font-serif text-lg font-bold text-ink">North Hindi Pandit</p>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 mt-0.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                  <span>Available across Bangalore</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-ink/5 text-ink/70"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Quick Action Conversion Strip */}
            <div className="p-4 bg-gradient-to-r from-saffron/10 via-amber-50 to-emerald-50 border-b border-ink/8 grid grid-cols-2 gap-2">
              <a
                href={`tel:${phoneNumber}`}
                className="cta-button cta-call text-xs py-2.5 px-3"
              >
                <Phone size={15} />
                <span>Call Now</span>
              </a>
              <a
                href={getWhatsAppLink('Mobile Menu Quick Contact')}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button cta-whatsapp text-xs py-2.5 px-3"
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Scrollable Navigation Body */}
            <div className="p-4 space-y-4 flex-1">
              <div className="space-y-1">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-sm transition-colors ${
                    pathname === '/' ? 'bg-saffron/10 text-saffron' : 'text-ink/80 hover:bg-paper'
                  }`}
                >
                  <Sparkles size={18} className="text-saffron" />
                  <span>Home</span>
                </Link>

                <Link
                  href="/about-us/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-sm transition-colors ${
                    pathname === '/about-us/' ? 'bg-saffron/10 text-saffron' : 'text-ink/80 hover:bg-paper'
                  }`}
                >
                  <Info size={18} className="text-saffron" />
                  <span>About Pandit Ji</span>
                </Link>

                <Link
                  href="/contact-us/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-sm transition-colors ${
                    pathname === '/contact-us/' ? 'bg-saffron/10 text-saffron' : 'text-ink/80 hover:bg-paper'
                  }`}
                >
                  <Mail size={18} className="text-saffron" />
                  <span>Contact Us</span>
                </Link>
              </div>

              {/* Puja Services Accordion */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-paper/70 text-sm font-bold text-ink"
                >
                  <div className="flex items-center gap-2.5">
                    <ScrollText size={18} className="text-saffron" />
                    <span>Puja Services in Bangalore</span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      isMobileServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isMobileServicesOpen && (
                  <div className="mt-2 pl-2 space-y-1 border-l-2 border-saffron/20">
                    <Link
                      href="/services/"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2.5 p-2 rounded-lg text-xs font-bold text-saffron hover:bg-paper"
                    >
                      <Sparkles size={14} />
                      <span>All Services Overview</span>
                    </Link>

                    {pujas.map((puja, index) => {
                      const Icon = pujaIcons[index % pujaIcons.length];
                      return (
                        <Link
                          key={puja.slug}
                          href={`/services/${puja.slug}/`}
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex items-center gap-2.5 p-2 rounded-lg text-xs font-medium transition-colors ${
                            pathname === `/services/${puja.slug}/`
                              ? 'text-saffron font-bold bg-saffron/10'
                              : 'text-ink/75 hover:bg-paper hover:text-ink'
                          }`}
                        >
                          <Icon size={14} className="text-saffron/70 shrink-0" />
                          <span>{puja.shortTitle}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Trust & Legal Links */}
              <div className="pt-3 border-t border-ink/6">
                <p className="text-[11px] uppercase tracking-wider font-bold text-ink/40 mb-2 px-2">
                  Legal & Google Ads Policies
                </p>
                <div className="grid grid-cols-2 gap-1.5 text-xs text-ink/65">
                  <Link
                    href="/privacy-policy/"
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-paper hover:text-ink"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms-and-conditions/"
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-paper hover:text-ink"
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    href="/refund-policy/"
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-paper hover:text-ink"
                  >
                    Refund Policy
                  </Link>
                  <Link
                    href="/disclaimer/"
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-paper hover:text-ink"
                  >
                    Service Disclaimer
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Social & Contact Info */}
            <div className="p-4 bg-paper/60 border-t border-ink/8 space-y-3">
              <div className="flex items-center justify-around text-ink/70">
                <a
                  href="https://www.instagram.com/north.indian.pandit.bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white hover:text-saffron transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/nileshkumarpandey46365"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white hover:text-saffron transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@Pandit.Ji.Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white hover:text-saffron transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
              <p className="text-[11px] text-center text-ink/50">
                Pandit Nilesh Kumar Pandey &bull; Koramangala, Bangalore
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
