import React from 'react';
import { ArrowUpRight, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { LDAgueroLogoLight } from './Icons';
import { COMPANY_INFO } from '../data/siteData';

interface Props {
  onOpenBooking: () => void;
}

export const Footer: React.FC<Props> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#29ABE2] text-white pt-16 sm:pt-20 pb-10 border-t border-[#1B8DBE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14">
          
          {/* Left Column (Brand info & Emergency action) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white/10 p-3 rounded-2xl w-fit backdrop-blur-xs border border-white/20">
              <LDAgueroLogoLight className="scale-100 origin-left" />
            </div>

            <p className="text-white/90 text-xs sm:text-sm leading-relaxed max-w-sm">
              Empresa líder en Costa Rica especializada en limpieza de tanques sépticos, destaqueos de tuberías con sonda eléctrica, construcción de drenajes y fontanería integral.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="group inline-flex items-center justify-between gap-3 pl-5 pr-2 py-1.5 rounded-full bg-white hover:bg-neutral-100 text-[#29ABE2] text-xs sm:text-sm font-bold shadow-xs transition-all hover:scale-[1.02]"
              >
                <span>Llamar: {COMPANY_INFO.phoneDisplay}</span>
                <div className="w-7 h-7 rounded-full bg-[#EBF7FC] text-[#29ABE2] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
              </a>

              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-between gap-3 pl-4 pr-2 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-semibold transition-colors border border-white/30"
              >
                <span>Solicitar Servicio</span>
                <div className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center flex-shrink-0">
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Columns (Servicios, Enlaces, Contacto & Horarios) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 text-xs">
            
            {/* Los Servicios */}
            <div>
              <h4 className="font-bold text-white font-['Outfit'] text-sm mb-3.5 tracking-wide underline underline-offset-4 decoration-white/40">
                Los Servicios
              </h4>
              <ul className="space-y-2 text-white/90">
                <li><a href="#service" className="hover:text-white hover:underline transition-all">Destaqueo de tuberías</a></li>
                <li><a href="#service" className="hover:text-white hover:underline transition-all">Limpieza de tanques</a></li>
                <li><a href="#service" className="hover:text-white hover:underline transition-all">Construcción de drenajes</a></li>
                <li><a href="#service" className="hover:text-white hover:underline transition-all">Instalación de tuberías</a></li>
                <li><a href="#service" className="hover:text-white hover:underline transition-all">Fontanería general</a></li>
              </ul>
            </div>

            {/* Enlaces Rápidos */}
            <div>
              <h4 className="font-bold text-white font-['Outfit'] text-sm mb-3.5 tracking-wide underline underline-offset-4 decoration-white/40">
                Enlaces Rápidos
              </h4>
              <ul className="space-y-2 text-white/90">
                <li><a href="#hero" className="hover:text-white hover:underline transition-all">Inicio</a></li>
                <li><a href="#why-choose-us" className="hover:text-white hover:underline transition-all">Por Qué Nosotros</a></li>
                <li><a href="#projects" className="hover:text-white hover:underline transition-all">Antes y Después</a></li>
                <li><a href="#testimonials" className="hover:text-white hover:underline transition-all">Opiniones de Clientes</a></li>
                <li><a href="#faq" className="hover:text-white hover:underline transition-all">Preguntas Frecuentes</a></li>
                <li><a href="#contact" className="hover:text-white hover:underline transition-all">Contacto y Mapa</a></li>
              </ul>
            </div>

            {/* Contacto & Cobertura */}
            <div>
              <h4 className="font-bold text-white font-['Outfit'] text-sm mb-3.5 tracking-wide underline underline-offset-4 decoration-white/40">
                Contacto &amp; Horario
              </h4>
              <ul className="space-y-2.5 text-white/90">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-white flex-shrink-0 mt-0.5" />
                  <span>San José (Hatillo, Cristo Rey, B° Corazón de Jesús, GAM)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-white flex-shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:underline transition-colors font-semibold">
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-white flex-shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline transition-colors truncate" title={COMPANY_INFO.email}>
                    {COMPANY_INFO.email}
                  </a>
                </li>
                <li className="pt-1 text-white/80 text-[11px]">
                  Lun-Vie: 7:00-21:00 | Sáb: 7:00-19:00 | Dom: 9:00-17:00
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Line */}
        <div className="w-full h-[1px] bg-white/20 mb-6" />

        {/* Footer Sub-Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/90">
          <p>© 2025 L&amp;D Agüero. Creado por Jesús Agüero. Todos los derechos reservados.</p>
          
          <div className="flex items-center gap-4">
            <a href="#faq" className="hover:text-white transition-colors">Política de Privacidad</a>
            <span>•</span>
            <a href="#faq" className="hover:text-white transition-colors">Términos del Servicio</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors group px-3 py-1 rounded-full bg-white/10 border border-white/20"
          >
            <ArrowUp className="w-3.5 h-3.5 text-white group-hover:-translate-y-0.5 transition-transform" />
            <span>Volver arriba</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
