import React from 'react';
import { TESTIMONIALS_DATA } from '../data/siteData';
import { Testimonial } from '../types';
import { Star, MapPin, CheckCircle2 } from 'lucide-react';

const ReviewCard: React.FC<{ review: Testimonial }> = ({ review }) => {
  return (
    <div className="w-[320px] sm:w-[360px] p-5 sm:p-6 bg-white rounded-2xl border border-[#E2E8F0] shadow-xs flex-shrink-0 flex flex-col justify-between hover:shadow-md hover:border-[#29ABE2]/30 transition-all duration-200">
      <div>
        {/* Profile Header */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full border border-[#BCE4F7] overflow-hidden flex-shrink-0 bg-neutral-100">
              <img 
                src={review.avatar} 
                alt={review.name} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h4 className="font-bold text-sm text-[#1E293B] font-['Outfit']">
                  {review.name}
                </h4>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <p className="text-[11px] text-[#64748B] line-clamp-1">
                {review.role}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-[#FFFBEB] border border-[#FDE68A] px-2 py-0.5 rounded-md flex-shrink-0">
            <span className="text-xs font-bold text-[#F5A623]">{review.rating.toFixed(1)}</span>
            <Star className="w-3.5 h-3.5 text-[#F5A623] fill-[#F5A623]" />
          </div>
        </div>

        {/* Quote */}
        <p className="text-xs sm:text-[13px] text-[#334155] leading-relaxed line-clamp-4 mb-4 font-normal">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>

      <div>
        {/* Divider */}
        <div className="w-full h-[1px] bg-[#E2E8F0] mb-3" />

        {/* Footer info: Location & Date */}
        <div className="flex items-center justify-between text-[11px] text-[#64748B]">
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#29ABE2]" />
            <span>{review.location}</span>
          </div>
          <span className="font-medium text-neutral-400">Cliente Verificado</span>
        </div>
      </div>
    </div>
  );
};

export const ReviewsSection: React.FC = () => {
  const row1Repeated = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E2E8F0] shadow-xs mb-3">
          <span className="w-2 h-2 rounded-full bg-[#29ABE2]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#29ABE2]">Opiniones</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E293B] font-['Outfit'] tracking-tight max-w-2xl mx-auto">
          Respaldado por hogares y comercios en todo Costa Rica
        </h2>
        <p className="text-sm sm:text-base text-[#64748B] mt-3 max-w-xl mx-auto">
          Reseñas reales de clientes atendidos en San José, Santa Ana, Escazú, Heredia, Alajuela y Cartago.
        </p>
      </div>

      {/* Row Marquee with Edge Blur Masks */}
      <div className="relative w-full overflow-hidden space-y-4">
        {/* Left and Right Glow Overlay */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10" />

        {/* Row 1 */}
        <div className="animate-marquee-left flex items-center gap-4 sm:gap-6 py-2">
          {row1Repeated.map((rev, i) => (
            <ReviewCard key={`r1-${rev.id}-${i}`} review={rev} />
          ))}
        </div>
      </div>
    </section>
  );
};
