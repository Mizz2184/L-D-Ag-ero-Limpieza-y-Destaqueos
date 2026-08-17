import React from 'react';
import { COVERAGE_ZONES } from '../data/siteData';
import { MapPin, ShieldCheck } from 'lucide-react';

export const BrandTicker: React.FC = () => {
  const repeatedZones = [...COVERAGE_ZONES, ...COVERAGE_ZONES, ...COVERAGE_ZONES];

  return (
    <section className="py-7 sm:py-9 bg-white border-b border-[#E2E8F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-5">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#64748B]">
            Respaldado por personas, condominios y comercios que valoran la calidad
          </p>
        </div>

        {/* Ticker Container */}
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="animate-marquee-left flex items-center gap-4 sm:gap-6 py-1">
            {repeatedZones.map((zone, index) => (
              <div 
                key={`${zone.name}-${index}`} 
                className="flex-shrink-0 flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs sm:text-sm font-semibold text-[#1E293B] shadow-xs hover:border-[#29ABE2]/50 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#29ABE2] flex-shrink-0" />
                <span>{zone.name}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#EBF7FC] text-[#29ABE2] font-bold uppercase">
                  {zone.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
