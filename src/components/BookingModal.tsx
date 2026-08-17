import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Phone, Mail, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES_DATA, COMPANY_INFO } from '../data/siteData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<Props> = ({ isOpen, onClose, initialServiceId = 'destaqueo-tuberias' }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
    telefono: '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const selectedService = SERVICES_DATA.find(s => s.id === selectedServiceId) || SERVICES_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      return;
    }
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="fixed inset-0 bg-black/65 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden z-10 my-auto"
        >
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#E2E8F0] flex items-center justify-between bg-[#F8FAFC]">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#29ABE2]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#29ABE2]">
                  Atención Inmediata Costa Rica
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#1E293B] font-['Outfit'] mt-0.5">
                Solicitud de Servicio — L&amp;D Agüero
              </h3>
            </div>
            <button 
              onClick={handleResetAndClose}
              className="w-9 h-9 rounded-full bg-neutral-200/80 hover:bg-neutral-300 text-neutral-600 flex items-center justify-center transition-colors"
              aria-label="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {isSubmitted ? (
            <div className="p-8 text-center flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-[#1E293B] font-['Outfit']">
                ¡Solicitud Recibida con Éxito!
              </h4>
              <p className="text-[#64748B] max-w-md text-sm leading-relaxed">
                Estimado(a) <strong>{formData.nombre || 'cliente'}</strong>, hemos recibido su mensaje para el servicio de <strong>{selectedService.title}</strong>. Nuestro equipo técnico se pondrá en contacto con usted en minutos.
              </p>

              <div className="w-full max-w-md bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 text-left text-sm space-y-2 mt-2">
                <div className="flex justify-between text-neutral-600">
                  <span>Servicio:</span>
                  <span className="font-semibold text-neutral-900">{selectedService.title}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Atención Telefónica 24/7:</span>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-bold text-[#29ABE2]">
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Email:</span>
                  <span className="font-medium text-neutral-900">{COMPANY_INFO.email}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
                <a
                  href={`https://wa.me/50670962848?text=Hola%20L%26D%20Ag%C3%BCero,%20necesito%20atenci%C3%B3n%20para%20${encodeURIComponent(selectedService.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-full shadow transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Escribir por WhatsApp</span>
                </a>
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 bg-[#29ABE2] hover:bg-[#1B8DBE] text-white font-semibold text-xs rounded-full shadow transition-all"
                >
                  Volver al Sitio
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[78vh] overflow-y-auto">
              
              {/* Emergency Call Banner */}
              <div className="p-3.5 bg-[#EBF7FC] border border-[#BCE4F7] rounded-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-[#0F3854] font-medium">
                  <Phone className="w-4 h-4 text-[#29ABE2] flex-shrink-0 animate-bounce" />
                  <span>¿Emergencia urgente de tanque o tubería tapada?</span>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-3.5 py-1.5 bg-[#29ABE2] hover:bg-[#1B8DBE] text-white text-xs font-bold rounded-lg whitespace-nowrap shadow-xs transition-colors"
                >
                  Llamar Ya
                </a>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Seleccione el Servicio
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICES_DATA.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => {
                        setSelectedServiceId(service.id);
                        if (!formData.asunto) {
                          setFormData({ ...formData, asunto: `Cotización de ${service.title}` });
                        }
                      }}
                      className={`p-3 text-left rounded-xl border text-xs font-medium transition-all ${
                        selectedServiceId === service.id 
                          ? 'border-[#29ABE2] bg-[#EBF7FC] text-[#1E293B] ring-1 ring-[#29ABE2]' 
                          : 'border-[#E2E8F0] bg-white text-neutral-700 hover:border-neutral-400'
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm text-neutral-900">{service.title}</div>
                      <div className="text-[11px] text-[#64748B] mt-0.5 line-clamp-1">{service.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Fields: Nombre, Email, Asunto, Mensaje */}
              <div className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="modal-nombre" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                      Nombre Completo <span className="text-[#29ABE2]">*</span>
                    </label>
                    <input 
                      id="modal-nombre"
                      type="text" 
                      placeholder="Ej. Juan Pérez" 
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                      className="w-full px-3.5 py-2.5 text-sm border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#29ABE2] focus:ring-1 focus:ring-[#29ABE2] bg-white text-[#1E293B]"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-email" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                      Email <span className="text-[#29ABE2]">*</span>
                    </label>
                    <input 
                      id="modal-email"
                      type="email" 
                      placeholder="ejemplo@correo.com" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3.5 py-2.5 text-sm border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#29ABE2] focus:ring-1 focus:ring-[#29ABE2] bg-white text-[#1E293B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="modal-asunto" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                      Asunto
                    </label>
                    <input 
                      id="modal-asunto"
                      type="text" 
                      placeholder="Ej. Limpieza urgente de tanque séptico" 
                      value={formData.asunto}
                      onChange={(e) => setFormData({...formData, asunto: e.target.value})}
                      className="w-full px-3.5 py-2.5 text-sm border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#29ABE2] focus:ring-1 focus:ring-[#29ABE2] bg-white text-[#1E293B]"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-telefono" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                      Teléfono de Contacto
                    </label>
                    <input 
                      id="modal-telefono"
                      type="tel" 
                      placeholder="+506 ...." 
                      value={formData.telefono}
                      onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                      className="w-full px-3.5 py-2.5 text-sm border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#29ABE2] focus:ring-1 focus:ring-[#29ABE2] bg-white text-[#1E293B]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-mensaje" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Mensaje <span className="text-[#29ABE2]">*</span>
                  </label>
                  <textarea 
                    id="modal-mensaje"
                    required
                    rows={3}
                    placeholder="Describa la situación, dirección o zona (ej. Hatillo, Santa Ana, Escazú) y horario de preferencia..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    className="w-full px-3.5 py-2.5 text-sm border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#29ABE2] focus:ring-1 focus:ring-[#29ABE2] bg-white text-[#1E293B] resize-y"
                  />
                </div>
              </div>

              {/* Bottom Summary Bar & Action: Lime "Enviar" CTA button */}
              <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                <div className="text-xs text-[#64748B]">
                  <span className="font-semibold text-neutral-800">Atención Garantizada</span>
                  <p className="text-[11px] text-neutral-500">San José y GAM • 24 Horas</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4E82A] hover:bg-[#c2d720] text-[#1E293B] font-bold text-xs sm:text-sm shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="w-4 h-4 text-[#1E293B]" />
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar'}</span>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
