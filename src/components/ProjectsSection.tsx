import React from 'react';
import { motion } from 'motion/react';
import { BEFORE_AFTER_PROJECTS } from '../data/siteData';
import { BeforeAfterSlider } from './BeforeAfterSlider';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Matching Video: Tag with dash bullet + Clean Heading) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E2E8F0] shadow-xs mb-3">
            <span className="w-2 h-2 rounded-full bg-[#29ABE2]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#29ABE2]">Antes y Después</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E293B] font-['Outfit'] tracking-tight">
            Proyectos de calidad en los que puede confiar
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Deslice la barra en cada tarjeta para comparar el estado inicial y la solución definitiva entregada por L&amp;D Agüero.
          </p>
        </div>

        {/* 2x3 Grid of 6 Before & After Cards matching video */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BEFORE_AFTER_PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
            >
              <BeforeAfterSlider project={project} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
