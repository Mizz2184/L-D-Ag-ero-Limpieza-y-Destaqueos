import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Phone, CheckCircle2, ShieldCheck, Wrench } from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/siteData';

interface Props {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<Props> = ({ onSelectService }) => {
  return (
    <section id="service" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E2E8F0] shadow-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-[#29ABE2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#29ABE2]">Nuestros Servicios</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E293B] font-['Outfit'] tracking-tight">
              Servicios diseñados a la medida de sus necesidades
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              Tecnología de succión al vacío, sondas mecánicas e hidrojet para hogares, condominios, comercios e industrias en todo Costa Rica.
            </p>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="group inline-flex items-center justify-between gap-3 pl-5 pr-2 py-2 rounded-full bg-white border border-[#E2E8F0] text-xs sm:text-sm font-bold text-[#1E293B] hover:text-[#29ABE2] hover:border-[#29ABE2] shadow-xs transition-colors self-start md:self-auto"
          >
            <span>Emergencias: {COMPANY_INFO.phoneDisplay}</span>
            <div className="w-8 h-8 rounded-full bg-[#EBF7FC] text-[#29ABE2] flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-[#29ABE2] group-hover:text-white">
              <Phone className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

        {/* Services Grid (5 primary requested services + 1 custom inquiry card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => onSelectService(service.id)}
              className="group cursor-pointer bg-white rounded-2xl border border-[#E2E8F0] p-5 shadow-xs hover:shadow-xl hover:border-[#29ABE2]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 bg-neutral-100">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#29ABE2]" />
                    <span>Garantizado</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-lg sm:text-xl text-[#1E293B] font-['Outfit'] group-hover:text-[#29ABE2] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-[#F1F5F9] text-neutral-600 flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-[#29ABE2] group-hover:text-white">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed line-clamp-3 mb-4">
                    {service.description}
                  </p>

                  {service.features && (
                    <ul className="space-y-1.5 pt-3 border-t border-neutral-100 text-xs text-[#64748B]">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#29ABE2] flex-shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-medium text-neutral-500">
                  Respuesta inmediata 24/7
                </span>
                <span className="text-xs font-bold text-[#29ABE2] group-hover:underline">
                  Solicitar Cotización →
                </span>
              </div>
            </motion.div>
          ))}

          {/* 6th Interactive CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-gradient-to-br from-[#0F2A4A] to-[#1E3A5F] text-white rounded-2xl border border-[#234A78] p-6 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#29ABE2] text-white flex items-center justify-center mb-5 shadow-lg">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl sm:text-2xl text-white font-['Outfit'] leading-tight">
                ¿Necesita una solución personalizada?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200 mt-2 leading-relaxed">
                Atendemos proyectos de construcción, condominios, fábricas y restaurantes con presupuestos y visitas técnicas sin compromiso.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="group w-full py-2.5 pl-5 pr-2 rounded-full bg-[#29ABE2] hover:bg-[#1B8DBE] text-white text-xs sm:text-sm font-bold flex items-center justify-between shadow-xs transition-all"
              >
                <span>Llamar al {COMPANY_INFO.phoneDisplay}</span>
                <div className="w-7 h-7 rounded-full bg-white text-[#29ABE2] flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
                  <Phone className="w-3.5 h-3.5" />
                </div>
              </a>
              <button
                onClick={() => onSelectService('destaqueo-tuberias')}
                className="w-full py-2.5 px-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Enviar formulario de contacto</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
