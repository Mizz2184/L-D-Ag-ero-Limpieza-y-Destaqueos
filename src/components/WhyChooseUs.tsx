import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, Clock, CheckCircle2, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface Props {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<Props> = ({ onOpenBooking }) => {
  const features = [
    {
      title: 'Personal técnico de confianza',
      desc: 'Técnicos verificados, asegurados y con amplia experiencia en fontanería sanitaria y tanques sépticos.',
      icon: <ShieldCheck className="w-5 h-5 text-[#29ABE2]" />
    },
    {
      title: 'Horarios que se adaptan a usted',
      desc: 'Atención programada o de emergencia las 24 horas del día, los 7 días de la semana en todo el GAM.',
      icon: <Clock className="w-5 h-5 text-[#29ABE2]" />
    },
    {
      title: 'Calidad consistente y garantizada',
      desc: 'Camión cisterna al vacío y equipos especializados de alto poder para resultados efectivos y duraderos.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#29ABE2]" />
    },
    {
      title: 'Soporte que responde de inmediato',
      desc: 'Atención directa por WhatsApp o llamada sin intermediarios, con presupuestos claros y honestos.',
      icon: <PhoneCall className="w-5 h-5 text-[#29ABE2]" />
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 sm:py-28 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Tag, Headline & Action Button) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {/* Tag with dash bullet */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF7FC] border border-[#BCE4F7] shadow-xs mb-4">
                <span className="w-2 h-2 rounded-full bg-[#29ABE2]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#29ABE2]">Por qué nosotros</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E293B] font-['Outfit'] tracking-tight leading-[1.15]">
                Servicio que respeta su tiempo, espacio y tranquilidad
              </h2>
            </div>

            <div>
              {/* Pill Button matching video */}
              <a
                href="#service"
                className="group inline-flex items-center justify-between gap-4 pl-6 pr-2 py-2 rounded-full bg-[#29ABE2] hover:bg-[#1B8DBE] text-white text-xs sm:text-sm font-bold shadow-xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-fit"
              >
                <span>Ver nuestros servicios</span>
                <div className="w-8 h-8 rounded-full bg-white text-[#29ABE2] flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </a>
            </div>

            {/* Real Fleet & Equipment Highlight Card */}
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm bg-neutral-100 mt-6 aspect-[16/10]">
              <img 
                src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn0H_IWv0B0KwclbO1kFXcBN9CU7-7bApsM-G5LnfTaIXEHd7-d1RoDWMerpORDxZOkiuTiMH7wBuBFHj_SGm5u6VA4CdCms29Yz3Pqb4yZkjVMTB3x0oN0NCf9rE-sAvltYNE7qQ=w1600-h1200-k-no" 
                alt="Camión cisterna al vacío y equipo de L&D Agüero"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                <span className="text-xs font-bold text-[#29ABE2] uppercase tracking-wider">Flota Propia de Succión</span>
                <p className="text-xs text-white/90 font-medium">Equipos de vacío de alto poder para tanques sépticos en todo San José y GAM</p>
              </div>
            </div>
          </div>

          {/* Right Column (Intro paragraph + 2x2 Feature Grid) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Intro text */}
            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
              No solo nos presentamos a destaquear, cuidamos su propiedad. Desde técnicos certificados hasta precios honestos y resultados garantizados, L&amp;D Agüero está hecho para personas y comercios que buscan fiabilidad sin pagar de más.
            </p>

            {/* 2x2 Grid with clean subtle borders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs flex flex-col justify-between hover:border-[#29ABE2]/50 hover:bg-white transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EBF7FC] border border-[#BCE4F7] flex items-center justify-center mb-4">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#1E293B] font-['Outfit'] mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
