import React from 'react';
import { EditorialHeroSection } from '../components/public/EditorialHeroSection';
import { HomeServicesSummary } from '../components/public/HomeServicesSummary';
import { HomeTerritorySummary } from '../components/public/HomeTerritorySummary';
import { HomeAboutSummary } from '../components/public/HomeAboutSummary';
import { HomeTestimonialFeatured } from '../components/public/HomeTestimonialFeatured';
import { HomeContactCta } from '../components/public/HomeContactCta';
import { useConsultation } from '../components/ConsultationContext';

export const HomePage: React.FC = () => {
  const { openConsultation } = useConsultation();

  return (
    <>
      {/* 1. Presentación (Hero) */}
      <EditorialHeroSection onOpenConsultation={(type) => openConsultation(type)} />

      {/* 2. Resumen de Servicios (con referencia breve a Relocation y enlace a /servicios) */}
      <HomeServicesSummary />

      {/* 3. Resumen de Zonas (Costa Dorada & Garraf con enlace a /zonas) */}
      <HomeTerritorySummary />

      {/* 4. Resumen de Sobre mí (Valeria, trayectoria y acreditaciones con enlace a /sobre-mi) */}
      <HomeAboutSummary />

      {/* 5. Un testimonio destacado (Diana, Nick & familia con enlace a /testimonios) */}
      <HomeTestimonialFeatured />

      {/* 6. CTA de contacto (enlace a /contacto y consulta directa) */}
      <HomeContactCta />
    </>
  );
};
