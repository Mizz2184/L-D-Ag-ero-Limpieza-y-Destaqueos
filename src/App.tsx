import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandTicker } from './components/BrandTicker';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProjectsSection } from './components/ProjectsSection';
import { HowItWorks } from './components/HowItWorks';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { BlogSection } from './components/BlogSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { BlogModal } from './components/BlogModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BlogPost } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('destaqueo-tuberias');
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    setIsBookingOpen(true);
  };

  const handleSelectBlog = (post: BlogPost) => {
    setSelectedBlogPost(post);
  };

  return (
    <div className="min-h-screen bg-white text-[#1E293B] flex flex-col antialiased selection:bg-[#29ABE2] selection:text-white relative">
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Sections matching video structure */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Cobertura San José & GAM Ticker */}
        <BrandTicker />

        {/* 3. Por Qué Nosotros (Why choose us - 2 column with 2x2 grid) */}
        <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Antes y Después (Before & After - 6 Interactive sliders) */}
        <ProjectsSection />

        {/* 5. Pasos de atención (How it works - 3 columns / 4 numbered steps) */}
        <HowItWorks />

        {/* 6. Nuestros Servicios (Our services - 6 cards grid) */}
        <ServicesSection onSelectService={(serviceId) => handleOpenBooking(serviceId)} />

        {/* 7. Opiniones / Testimonios (Reviews marquee) */}
        <ReviewsSection />

        {/* 8. Blog & Consejos (2x2 grid cards) */}
        <BlogSection onSelectBlog={handleSelectBlog} />

        {/* 9. Preguntas Frecuentes (FAQ - Left headline & right accordion) */}
        <FaqSection onOpenBooking={() => handleOpenBooking()} />

        {/* 10. Formulario de Contacto, Horarios y Mapa de Ubicación */}
        <ContactSection />

        {/* 11. Banner de Llamado a la Acción 24/7 */}
        <CtaBanner onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Booking & Quick Quote Modal */}
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={selectedServiceId}
      />

      {/* Rich Blog Reader Modal */}
      <BlogModal
        post={selectedBlogPost}
        onClose={() => setSelectedBlogPost(null)}
        onBookNow={() => handleOpenBooking()}
      />
    </div>
  );
}
