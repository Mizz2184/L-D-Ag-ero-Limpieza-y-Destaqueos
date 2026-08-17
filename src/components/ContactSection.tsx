import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      return;
    }
    setStatus('submitting');
    
    // Simulate sending message
    setTimeout(() => {
      setStatus('success');
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF7FC] border border-[#BCE4F7] shadow-xs mb-3">
            <span className="w-2 h-2 rounded-full bg-[#29ABE2]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#29ABE2]">Contacto y Ubicación</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E293B] font-['Outfit'] tracking-tight">
            Comuníquese con L&amp;D Agüero
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-3">
            ¿Tanque lleno o tubería tapada? Llámenos directamente para atención de emergencias o envíenos sus datos para cotizar de inmediato.
          </p>
        </div>

        {/* 2 Column Layout: Left (Form) & Right (Map + Info + Hours) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Form Column */}
          <div className="lg:col-span-6 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-xs">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1E293B] font-['Outfit'] mb-2">
              Formulario de Contacto
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] mb-6">
              Complete los siguientes campos y un especialista se comunicará a la brevedad.
            </p>

            {status === 'success' ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center flex flex-col items-center gap-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                <h4 className="font-bold text-emerald-900 text-lg">¡Mensaje Enviado con Éxito!</h4>
                <p className="text-xs sm:text-sm text-emerald-700 max-w-sm">
                  Gracias por contactar a L&amp;D Agüero. Nos pondremos en contacto con usted en minutos.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 px-5 py-2 rounded-full bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-nombre" className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase tracking-wider">
                    Nombre <span className="text-[#29ABE2]">*</span>
                  </label>
                  <input
                    id="contact-nombre"
                    type="text"
                    required
                    placeholder="Su nombre completo"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent transition-all text-[#1E293B]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase tracking-wider">
                    Email <span className="text-[#29ABE2]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="ejemplo@correo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent transition-all text-[#1E293B]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-asunto" className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase tracking-wider">
                    Asunto
                  </label>
                  <input
                    id="contact-asunto"
                    type="text"
                    placeholder="Ej. Limpieza de tanque séptico / Destaqueo urgente"
                    value={formData.asunto}
                    onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent transition-all text-[#1E293B]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-mensaje" className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase tracking-wider">
                    Mensaje <span className="text-[#29ABE2]">*</span>
                  </label>
                  <textarea
                    id="contact-mensaje"
                    required
                    rows={4}
                    placeholder="Describa el problema, ubicación en Costa Rica y horario de preferencia..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-transparent transition-all text-[#1E293B] resize-y"
                  />
                </div>

                {/* Accent Lime "Enviar" CTA Button with strong dark text for readability */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#D4E82A] hover:bg-[#c2d720] text-[#1E293B] font-bold text-sm shadow-xs transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4 text-[#1E293B]" />
                  <span>{status === 'submitting' ? 'Enviando...' : 'Enviar'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Cards + Location Map (San José - Hatillo / Cristo Rey / Barrio Corazón de Jesús) + Hours */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            
            {/* Quick Contact & Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] flex flex-col justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#29ABE2] mb-1">
                  <Phone className="w-4 h-4" />
                  <span>Teléfono / WhatsApp</span>
                </div>
                <a 
                  href={`tel:${COMPANY_INFO.phoneRaw}`} 
                  className="font-bold text-base text-[#1E293B] hover:text-[#29ABE2] transition-colors"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
                <span className="text-[11px] text-[#64748B] mt-1">Llamadas y emergencias 24/7</span>
              </div>

              {/* Email */}
              <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] flex flex-col justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#29ABE2] mb-1">
                  <Mail className="w-4 h-4" />
                  <span>Correo Electrónico</span>
                </div>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="font-bold text-sm text-[#1E293B] hover:text-[#29ABE2] transition-colors truncate"
                  title={COMPANY_INFO.email}
                >
                  {COMPANY_INFO.email}
                </a>
                <span className="text-[11px] text-[#64748B] mt-1">Presupuestos y facturación</span>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="p-5 bg-white rounded-xl border border-[#E2E8F0] shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1E293B] mb-3">
                <Clock className="w-4 h-4 text-[#29ABE2]" />
                <span>Horario de Atención</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                  <p className="font-semibold text-neutral-800">Lunes a Viernes</p>
                  <p className="text-[#29ABE2] font-bold mt-0.5">7:00 - 21:00</p>
                </div>
                <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                  <p className="font-semibold text-neutral-800">Sábado</p>
                  <p className="text-[#29ABE2] font-bold mt-0.5">7:00 - 19:00</p>
                </div>
                <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                  <p className="font-semibold text-neutral-800">Domingo</p>
                  <p className="text-[#29ABE2] font-bold mt-0.5">9:00 - 17:00</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Servicio de guardia activo para emergencias 24 Horas los 365 días del año.</span>
              </div>
            </div>

            {/* Map Centered on San José / Hatillo / Cristo Rey / Barrio Corazón de Jesús */}
            <div className="rounded-xl overflow-hidden border border-[#E2E8F0] shadow-xs relative bg-neutral-100 h-64 sm:h-72">
              <iframe
                title="Ubicación L&D Agüero San José Costa Rica"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31438.16781219662!2d-84.1089205!3d9.921345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e365cb983377%3A0xb3e7428800f72382!2sHatillo%2C%20San%20Jos%C3%A9!5e0!3m2!1ses!2scr!4v1700000000000!5m2!1es!2scr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#E2E8F0] text-[11px] font-bold text-neutral-800 shadow-md flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#29ABE2]" />
                <span>San José (Hatillo / Cristo Rey / B° Corazón de Jesús)</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
