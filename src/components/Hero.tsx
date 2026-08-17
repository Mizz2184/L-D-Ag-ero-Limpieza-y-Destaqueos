import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, ShieldCheck, CheckCircle2, Star, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface Props {
  onOpenBooking: () => void;
}

export const Hero: React.FC<Props> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center justify-center pt-28 sm:pt-32 pb-16 overflow-hidden">
      {/* Background Image Container with dark vignette */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm01wh_ILJ-B5_ozq8JzAG3pY-ecE0rWmHQyVRMh_qWuoUiQ8faCqc0j8G38pL5ghKO3cDyjiC7O6ilr3Ka0wDzgjwitI5WTpldFaEQcCXWPJgLG0v6O4aiiqW9Q0Jz5krW66yhBw=w2174-h1440-k-no" 
          alt="L&D Agüero Camión Cisterna Limpieza de Tanques Sépticos y Destaqueos Costa Rica"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-[#0A2540]/85 to-black/70" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center text-left mt-4 sm:mt-8">
        
        {/* Top Avatar Social Proof Pill Badge (Matching video) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 180, delay: 0.1 }}
          className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white mb-5 shadow-xs"
        >
          {/* Overlapping customer avatars */}
          <div className="flex -space-x-2 overflow-hidden">
            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white/40 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80" alt="Cliente" />
            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white/40 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Cliente" />
            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white/40 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" alt="Cliente" />
          </div>
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-white/95">
            <span className="text-[#F5A623]">★★★★★</span>
            <span className="hidden sm:inline">Más de 500+ clientes satisfechos en Costa Rica</span>
            <span className="sm:hidden">+500 clientes en Costa Rica</span>
          </div>
        </motion.div>

        {/* Main Heading (Matching Video Typography and Tone) */}
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 150, delay: 0.2 }}
          className="max-w-3xl font-['Outfit'] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.08] text-white tracking-tight drop-shadow-md"
        >
          ¿Tanque lleno o tubería tapada?{' '}
          <span className="text-[#29ABE2]">Nosotros lo solucionamos rápido</span>
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 150, delay: 0.3 }}
          className="mt-5 max-w-2xl text-sm sm:text-base md:text-lg text-white/85 font-normal leading-relaxed text-balance"
        >
          Servicio profesional de vaciado de tanques sépticos con camión cisterna al vacío, destaqueos con sondas eléctricas de alta potencia, drenajes y fontanería 24/7 en San José y todo Costa Rica.
        </motion.p>

        {/* Action Controls Row (Matching Video: CTA Pill on left + Emergency Call Block on right) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 30, stiffness: 150, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          {/* Main CTA Button: Compact Pill with inner right circular disk */}
          <button
            onClick={onOpenBooking}
            className="group relative inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 sm:py-2 rounded-full bg-[#29ABE2] hover:bg-[#1B8DBE] text-white text-xs sm:text-sm md:text-base font-bold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span className="whitespace-nowrap">Solicitar cotización gratis</span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-[#29ABE2] flex items-center justify-center flex-shrink-0 shadow-xs transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
            </div>
          </button>

          {/* Emergency Call Box (Matching Video Structure with Phone Icon Badge + Big Number) */}
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="group inline-flex items-center gap-3 text-white hover:text-[#29ABE2] transition-colors py-1"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#29ABE2] flex items-center justify-center flex-shrink-0 group-hover:bg-[#29ABE2] group-hover:text-white transition-all duration-200 shadow-xs">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] sm:text-xs text-white/70 font-medium uppercase tracking-wider">
                Emergencias y atención 24/7:
              </span>
              <span className="text-base sm:text-lg md:text-xl font-extrabold text-white font-['Outfit'] tracking-tight group-hover:text-[#29ABE2] transition-colors leading-tight">
                {COMPANY_INFO.phoneDisplay}
              </span>
            </div>
          </a>
        </motion.div>

        {/* Bottom Hero Trust Badges Row (Matching Video: DBS-checked, Rated 4.9, Eco-friendly) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 30, stiffness: 150, delay: 0.55 }}
          className="mt-12 sm:mt-14 pt-6 border-t border-white/15 w-full flex flex-wrap items-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/90 font-medium"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#29ABE2] flex-shrink-0" />
            <ShieldCheck className="w-4 h-4 text-[#29ABE2] flex-shrink-0" />
            <span>Técnicos certificados 24/7</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#29ABE2] flex-shrink-0" />
            <Star className="w-4 h-4 text-[#F5A623] fill-[#F5A623] flex-shrink-0" />
            <span>Calificación 5.0 en Google (500+ reseñas)</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#29ABE2] flex-shrink-0" />
            <CheckCircle2 className="w-4 h-4 text-[#29ABE2] flex-shrink-0" />
            <span>Disposición de residuos 100% ecológica</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
