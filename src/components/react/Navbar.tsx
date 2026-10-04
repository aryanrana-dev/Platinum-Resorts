import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Menu, X, Sparkles, ChevronRight, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP animation for mobile drawer opening & closing
  useGSAP(() => {
    if (isOpen && drawerRef.current) {
      gsap.fromTo(
        drawerRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
      );
      if (menuLinksRef.current) {
        gsap.fromTo(
          menuLinksRef.current.children,
          { opacity: 0, x: -15 },
          { opacity: 1, x: 0, duration: 0.3, stagger: 0.05, ease: 'power2.out', delay: 0.1 }
        );
      }
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Spaces', href: '#spaces' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Inquiries', href: '#inquiries' },
    { name: 'Location', href: '#location' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0C]/90 backdrop-blur-md py-3.5 border-b border-white/10 shadow-2xl'
          : 'bg-[#0A0A0C]/60 backdrop-blur-sm py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-[#D4AF37] rounded-lg p-1"
            aria-label="Platinum Hotel and Resort Home"
          >
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/60 bg-gradient-to-br from-[#1B1C22] to-[#0A0A0C] flex items-center justify-center text-[#D4AF37] shadow-md group-hover:border-[#E8C86A] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300">
              <span className="font-serif font-bold text-lg tracking-widest text-[#E8C86A]">P</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg tracking-[0.2em] text-white leading-tight group-hover:text-[#F5E8C7] transition-colors">
                PLATINUM
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.3em] text-[#D4AF37] font-semibold uppercase">
                Hotel & Resort
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-medium tracking-wider text-neutral-300 hover:text-[#E8C86A] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action & Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919815786936"
              className="flex items-center gap-2 text-xs font-semibold tracking-wider text-neutral-400 hover:text-[#E8C86A] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="hidden xl:inline">+91 98157 86936</span>
            </a>
            <a
              href="#inquiries"
              className="gold-button-gradient px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest text-[#0A0A0C] uppercase shadow-lg shadow-[#D4AF37]/20 flex items-center gap-1.5 focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#0A0A0C]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Venue</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="#inquiries"
              className="gold-button-gradient px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider text-[#0A0A0C] uppercase"
            >
              Book
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-lg border border-white/15 bg-[#1B1C22]/80 flex items-center justify-center text-[#E8C86A] hover:text-white hover:border-[#D4AF37]/50 focus:outline-none transition-colors"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Glass Drawer */}
      {isOpen && (
        <div
          ref={drawerRef}
          className="md:hidden bg-[#0A0A0C]/98 backdrop-blur-xl border-b border-white/15 shadow-2xl px-6 py-8"
        >
          <div ref={menuLinksRef} className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-2.5 text-base font-medium tracking-wide text-neutral-200 hover:text-[#E8C86A] border-b border-white/5 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#inquiries"
                onClick={() => setIsOpen(false)}
                className="w-full text-center gold-button-gradient py-3 rounded-xl text-xs font-bold tracking-widest text-[#0A0A0C] uppercase shadow-lg shadow-[#D4AF37]/20"
              >
                Check Availability &amp; Get a Quote
              </a>
              <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 py-2">
                <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call: +91 98157 86936</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
