import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, ArrowRight, Phone } from 'lucide-react';
import { BlogPost } from '../types';
import { COMPANY_INFO } from '../data/siteData';

interface Props {
  post: BlogPost | null;
  onClose: () => void;
  onBookNow: () => void;
}

export const BlogModal: React.FC<Props> = ({ post, onClose, onBookNow }) => {
  if (!post) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden z-10 my-auto max-h-[88vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between bg-[#F8FAFC] flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-semibold text-[#29ABE2] bg-[#EBF7FC] rounded-full border border-[#BCE4F7]">
                {post.category}
              </span>
              <span className="text-xs text-neutral-400">•</span>
              <span className="text-xs text-[#64748B] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-neutral-200/80 hover:bg-neutral-300 text-neutral-600 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-medium text-[#64748B] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#29ABE2]" />
                Publicado el {post.date} por el equipo técnico de L&amp;D Agüero
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1E293B] font-['Outfit'] leading-tight">
                {post.title}
              </h2>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden bg-neutral-100 border border-[#E2E8F0]">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Article Text Content */}
            <div className="prose prose-neutral max-w-none text-[#1E293B] text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
              {post.content}
            </div>

            {/* Bottom Recommendation Box */}
            <div className="mt-8 p-6 bg-[#EBF7FC] border border-[#BCE4F7] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-[#1E293B] font-['Outfit'] text-base">
                  ¿Tiene este problema en su hogar o negocio?
                </h4>
                <p className="text-xs text-[#64748B] mt-0.5">
                  L&amp;D Agüero llega en minutos a cualquier zona de San José y GAM con equipo profesional.
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-5 py-2.5 bg-white border border-[#BCE4F7] text-[#29ABE2] font-bold text-xs rounded-full shadow-sm hover:bg-[#F0F9FF] transition-all flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
                <button
                  onClick={() => {
                    onClose();
                    onBookNow();
                  }}
                  className="px-5 py-2.5 bg-[#29ABE2] hover:bg-[#1B8DBE] text-white font-semibold text-xs rounded-full shadow transition-all flex items-center gap-1.5"
                >
                  <span>Solicitar Servicio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
