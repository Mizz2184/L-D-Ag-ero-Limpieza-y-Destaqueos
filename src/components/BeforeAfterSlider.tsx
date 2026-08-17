import React, { useState, useRef, useCallback } from 'react';
import { BeforeAfterProject } from '../types';
import { MapPin } from 'lucide-react';

interface Props {
  project: BeforeAfterProject;
  className?: string;
}

export const BeforeAfterSlider: React.FC<Props> = ({ project, className = "" }) => {
  const [sliderPos, setSliderPos] = useState<number>(project.defaultSliderPosition ?? 50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className={`flex flex-col gap-3 group select-none ${className}`}>
      {/* Slider Visual Container */}
      <div 
        ref={containerRef}
        className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden cursor-ew-resize bg-neutral-200 border border-[#E2E8F0] shadow-sm"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
        role="slider"
        aria-valuenow={Math.round(sliderPos)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Comparación de antes y después para ${project.title}`}
      >
        {/* Before Image (Base layer - Left side) */}
        <img 
          src={project.beforeImage} 
          alt={`${project.title} - Antes`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* After Image (Top clipped layer - Right side) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
        >
          <img 
            src={project.afterImage} 
            alt={`${project.title} - Después`}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>

        {/* Floating Antes Label */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-black/75 backdrop-blur-md rounded-md border border-white/15 shadow-sm">
            Antes
          </span>
        </div>

        {/* Floating Después Label */}
        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-[#29ABE2]/90 backdrop-blur-md rounded-md border border-white/15 shadow-sm">
            Después
          </span>
        </div>

        {/* Dividing Vertical Line and Handle Button */}
        <div 
          className="absolute top-0 bottom-0 z-20 pointer-events-none flex items-center justify-center -translate-x-1/2"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Vertical white divider line */}
          <div className="w-[2px] h-full bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)]" />

          {/* Central draggable circular thumb */}
          <div className="absolute w-10 h-10 rounded-full bg-white border border-[#CBD5E1] shadow-lg flex items-center justify-center text-[#29ABE2] transition-transform duration-150 group-hover:scale-105">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 3 12 9 6" />
            </svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="-ml-3 rotate-180">
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 3 12 9 6" />
            </svg>
          </div>
        </div>

        {/* Hidden Range Input */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="sr-only"
          aria-label={`${project.title} comparador`}
        />
      </div>

      {/* Project Meta Info */}
      <div className="flex flex-col gap-1 px-1">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-bold text-base text-[#1E293B] font-['Outfit'] line-clamp-1">
            {project.title}
          </h4>
          <div className="flex items-center gap-1 text-xs font-semibold text-[#64748B] flex-shrink-0">
            <MapPin className="w-3.5 h-3.5 text-[#29ABE2]" />
            <span>{project.location}</span>
          </div>
        </div>
        {project.description && (
          <p className="text-xs text-[#64748B] line-clamp-2">
            {project.description}
          </p>
        )}
      </div>
    </div>
  );
};
