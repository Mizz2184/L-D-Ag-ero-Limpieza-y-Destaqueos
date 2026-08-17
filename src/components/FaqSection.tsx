import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { FAQ_DATA, COMPANY_INFO } from '../data/siteData';

interface Props {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<Props> = ({ onOpenBooking }) => {
  const [openId, setOpenId] = useState<string>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(prev => (prev === id ? '' : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (Heading & CTA Button matching video) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E2E8F0] shadow-xs mb-3">
                <span className="w-2 h-2 rounded-full bg-[#29ABE2]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#29ABE2]">Preguntas Frecuentes</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E293B] font-['Outfit'] tracking-tight">
                Respuestas claras, sin sorpresas
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-md">
              Resolvemos sus dudas sobre limpieza de tanques sépticos, destaqueo de tuberías con sonda eléctrica, tiempos de llegada y garantías en Costa Rica.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-between gap-4 pl-6 pr-2 py-2 rounded-full bg-[#29ABE2] hover:bg-[#1B8DBE] text-white text-xs sm:text-sm font-bold shadow-xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-fit"
              >
                <span>¿Tiene más preguntas?</span>
                <div className="w-8 h-8 rounded-full bg-white text-[#29ABE2] flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column (Accordion List) */}
          <div className="lg:col-span-7 space-y-3">
            {FAQ_DATA.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 ${
                    isOpen ? 'border-[#29ABE2] shadow-sm' : 'border-[#E2E8F0] shadow-xs'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(item.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#1E293B] font-['Outfit'] hover:text-[#29ABE2] transition-colors"
                  >
                    <span>{item.question}</span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#29ABE2] text-white' : 'bg-[#F1F5F9] text-[#29ABE2]'
                    }`}>
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-[#E2E8F0]">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
