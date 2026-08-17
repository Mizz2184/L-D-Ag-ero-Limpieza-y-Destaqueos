import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface Props {
  onOpenBooking: () => void;
}

export const CtaBanner: React.FC<Props> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full py-20 sm:py-28 overflow-hidden">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlCarbA9rZIY9HP9hf5-UQ7HH5wgBMUn-mZ8OLkgbPYWJUcvrNcfRxHMpJ9JlVa_hScRzUxfOI2pnH0i43rYxF1fTPEg4keCj-1TztGPtLNogkdCEFHUqmgXB4DWG3Xhh1YrJ_Uog7AAeUS=w1171-h659-k-no" 
          alt="L&D Agüero Tuberías y Tanques Costa Rica" 
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        {/* Dark contrast gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/85 to-black/65" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-start sm:justify-end">
        <div className="max-w-xl text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#29ABE2]" />
              <span>Atención 24 Horas en Costa Rica</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-tight mb-4">
              Mantenga sus tuberías y tanques al 100% hoy mismo
            </h2>

            <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-8">
              No espere a que su tanque colapse o cause malos olores en su hogar o negocio. En L&amp;D Agüero le atendemos de inmediato con equipo profesional y garantía total.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary Pill Button with inner right circular icon disk */}
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-between gap-4 pl-6 pr-2 py-2 rounded-full bg-[#29ABE2] hover:bg-[#1B8DBE] text-white text-sm sm:text-base font-bold shadow-xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Coordinar servicio hoy</span>
                <div className="w-9 h-9 rounded-full bg-white text-[#29ABE2] flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </button>

              {/* Direct Phone Call Button */}
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="group inline-flex items-center justify-between gap-3 pl-5 pr-2 py-2 rounded-full bg-white/95 hover:bg-white text-[#1E293B] text-xs sm:text-sm font-bold shadow-xs border border-white/20 transition-all hover:scale-[1.02]"
              >
                <span>Llamar: {COMPANY_INFO.phoneDisplay}</span>
                <div className="w-8 h-8 rounded-full bg-[#EBF7FC] text-[#29ABE2] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
