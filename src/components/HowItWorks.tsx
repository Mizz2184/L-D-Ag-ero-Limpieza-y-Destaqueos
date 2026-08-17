import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, Truck, Wrench, CheckCircle2 } from 'lucide-react';
import { LDAgueroLogo } from './Icons';
import { COMPANY_INFO } from '../data/siteData';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF7FC] border border-[#BCE4F7] shadow-xs mb-3">
            <span className="w-2 h-2 rounded-full bg-[#29ABE2]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#29ABE2]">Pasos de atención</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E293B] font-['Outfit'] tracking-tight">
            Pasos sencillos para solucionar su emergencia
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-3">
            Atendemos su llamado de inmediato y despachamos una unidad móvil a su ubicación.
          </p>
        </div>

        {/* 3-Column Layout: Left Column (Steps 1 & 2), Center Emblem, Right Column (Steps 3 & 4) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          
          {/* Left Column (Steps 1 & 2) */}
          <div className="flex flex-col gap-6">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] shadow-xs hover:border-[#29ABE2]/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EBF7FC] border border-[#BCE4F7] text-[#29ABE2] font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5 font-['Outfit']">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#1E293B] font-['Outfit'] mb-1">
                    Cuéntenos su necesidad
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed">
                    Comuníquese por teléfono o WhatsApp al <strong className="text-[#1E293B]">{COMPANY_INFO.phoneDisplay}</strong> indicándonos la emergencia o servicio requerido.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-6 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] shadow-xs hover:border-[#29ABE2]/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EBF7FC] border border-[#BCE4F7] text-[#29ABE2] font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5 font-['Outfit']">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#1E293B] font-['Outfit'] mb-1">
                    Coordinamos la visita o emergencia
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed">
                    Nuestra unidad móvil se traslada puntualmente a su domicilio en San José o GAM con equipo adecuado para inspeccionar la red.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Center L&D Agüero Badge Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl border-2 border-[#29ABE2]/30 shadow-md min-h-[260px] text-center"
          >
            <div className="mb-4">
              <LDAgueroLogo className="scale-110" />
            </div>
            <div className="w-full mt-4 pt-4 border-t border-[#E2E8F0] text-xs text-[#64748B] space-y-1.5">
              <p className="font-bold text-[#1E293B]">Servicio Rápido y Garantizado</p>
              <p>Atención en Hatillo, Santa Ana, Escazú, Heredia, Alajuela, Cartago y todo el GAM.</p>
            </div>
          </motion.div>

          {/* Right Column (Steps 3 & 4) */}
          <div className="flex flex-col gap-6">
            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-6 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] shadow-xs hover:border-[#29ABE2]/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EBF7FC] border border-[#BCE4F7] text-[#29ABE2] font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5 font-['Outfit']">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#1E293B] font-['Outfit'] mb-1">
                    Llegamos 100% equipados
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed">
                    Realizamos el vaciado de tanque con camión cisterna o el destape con sondas eléctricas sin romper pisos ni generar desorden.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="p-6 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] shadow-xs hover:border-[#29ABE2]/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5 font-['Outfit']">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#1E293B] font-['Outfit'] mb-1">
                    Disfrute su espacio con garantía
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed">
                    Verificamos el flujo total del agua, desinfectamos el área tratada y le entregamos su comprobante con garantía total.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
