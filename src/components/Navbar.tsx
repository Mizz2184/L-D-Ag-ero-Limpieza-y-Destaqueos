import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ArrowUpRight, Calendar, ShieldCheck, ChevronRight } from 'lucide-react';
import { LDAgueroLogo } from './Icons';
import { COMPANY_INFO } from '../data/siteData';

interface Props {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<Props> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#service' },
    { name: 'Trabajos', href: '#projects' },
    { name: 'Opiniones', href: '#reviews' },
    { name: 'Preguntas', href: '#faq' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-2.5 sm:top-4 left-0 right-0 z-40 px-3 sm:px-6 flex justify-center pointer-events-none">
        <motion.nav 
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 25, stiffness: 180 }}
          className={`pointer-events-auto w-full max-w-7xl px-3 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full border flex items-center justify-between gap-2 sm:gap-4 lg:gap-6 transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/98 backdrop-blur-md border-[#E2E8F0] shadow-md' 
              : 'bg-white/95 backdrop-blur-sm border-[#E2E8F0] shadow-xs'
          }`}
        >
          {/* Brand Logo */}
          <a href="#" className="flex items-center flex-shrink-0 focus:outline-none" aria-label="L&D Agüero Inicio">
            <LDAgueroLogo />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-semibold text-[#475569] whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 text-[#475569] hover:text-[#29ABE2] transition-colors whitespace-nowrap group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#29ABE2] rounded-full transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Action Area: Responsive CTAs + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Desktop Direct Phone Pill */}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-[#1E293B] bg-[#F1F5F9] hover:bg-[#EBF7FC] hover:text-[#29ABE2] border border-[#E2E8F0] hover:border-[#29ABE2] transition-all whitespace-nowrap"
              title="Llamar directamente a L&D Agüero"
            >
              <Phone className="w-3.5 h-3.5 text-[#29ABE2] flex-shrink-0" />
              <span className="whitespace-nowrap">{COMPANY_INFO.phoneDisplay}</span>
            </a>

            {/* Main Header CTA Button (Pill with inner circular disk) */}
            <button
              onClick={onOpenBooking}
              className="group relative inline-flex items-center gap-2 sm:gap-2.5 pl-3.5 sm:pl-4 pr-1.5 py-1.5 rounded-full bg-[#29ABE2] hover:bg-[#1B8DBE] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap flex-shrink-0 cursor-pointer"
              aria-label="Solicitar cotización de servicio"
            >
              <span className="hidden sm:inline whitespace-nowrap">Cotizar Servicio</span>
              <span className="sm:hidden whitespace-nowrap">Cotizar</span>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white text-[#29ABE2] flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 shadow-xs">
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
              </div>
            </button>

            {/* Direct Phone Button (Mobile Quick Call) */}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="xl:hidden hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-[#EBF7FC] hover:bg-[#D8F0FA] text-[#29ABE2] border border-[#BCE4F7] shadow-xs active:scale-95 transition-transform flex-shrink-0 cursor-pointer"
              title={`Llamar al ${COMPANY_INFO.phoneDisplay}`}
              aria-label="Llamar a emergencias 24/7"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F1F5F9] text-[#1E293B] flex items-center justify-center hover:bg-[#E2E8F0] active:scale-95 transition-all flex-shrink-0 cursor-pointer"
              aria-label="Alternar menú móvil"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer with Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40 lg:hidden"
            />

            {/* Floating Navigation Card */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.96 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-16 sm:top-20 left-3 right-3 sm:left-6 sm:right-6 z-50 bg-white/98 backdrop-blur-xl rounded-3xl border border-[#E2E8F0] shadow-2xl p-5 lg:hidden max-h-[85vh] overflow-y-auto"
            >
              {/* Header Info Inside Drawer */}
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#29ABE2] animate-pulse" />
                  <span className="text-xs font-bold text-[#1E293B] uppercase tracking-wider">
                    Atención 24/7 San José &amp; GAM
                  </span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-full text-[#64748B] hover:bg-neutral-100"
                  aria-label="Cerrar menú"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-1 py-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3.5 py-2.5 text-sm font-semibold text-[#1E293B] hover:bg-[#EBF7FC] hover:text-[#29ABE2] rounded-xl transition-colors flex items-center justify-between group"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#29ABE2] transition-colors" />
                  </a>
                ))}
              </div>

              {/* Quick Action Buttons */}
              <div className="pt-4 mt-2 border-t border-[#E2E8F0] flex flex-col gap-2.5">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full py-2.5 px-4 rounded-full bg-[#EBF7FC] hover:bg-[#D8F0FA] text-[#29ABE2] text-sm font-bold flex items-center justify-center gap-2 border border-[#BCE4F7] shadow-xs active:scale-[0.98] transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Llamar Directo: {COMPANY_INFO.phoneDisplay}</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="group w-full py-2 pl-5 pr-2 rounded-full bg-[#29ABE2] hover:bg-[#1B8DBE] text-white text-sm font-bold flex items-center justify-between shadow-md active:scale-[0.98] transition-all"
                >
                  <span>Solicitar Cotización Gratis</span>
                  <div className="w-7 h-7 rounded-full bg-white text-[#29ABE2] flex items-center justify-center flex-shrink-0 transition-transform group-hover:translate-x-0.5">
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
