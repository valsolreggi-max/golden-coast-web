import React from 'react';
import { EditorialTerritorySection } from '../components/public/EditorialTerritorySection';
import { BrandGallerySection } from '../components/public/BrandGallerySection';
import { useConsultation } from '../components/ConsultationContext';
import { Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ZonasPage: React.FC = () => {
  const { openConsultation } = useConsultation();

  return (
    <div className="pt-20 sm:pt-24">
      {/* Main Territory Section with Photo, 6 Destinations & Detailed Localities */}
      <EditorialTerritorySection
        onOpenTerritoryModal={(zone) => openConsultation('territory', zone)}
      />

      {/* Visual Territory Gallery */}
      <BrandGallerySection />

      {/* Action / Consultation Section */}
      <section className="py-16 sm:py-20 bg-[#FBF9F3] border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center space-y-6">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase block">
            CONOCIMIENTO LOCAL · SELECCIÓN DE ENTORNO
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#24211D] max-w-2xl mx-auto leading-tight">
            ¿Buscas comprar o alquilar en alguna de estas zonas?
          </h2>
          <p className="text-sm sm:text-base text-[#4A463F] max-w-xl mx-auto font-sans">
            Elegir la zona adecuada es tan importante como elegir la vivienda. Te ayudo a encontrar el lugar que encaja con tus tiempos y estilo de vida.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openConsultation('buyer')}
              className="px-8 py-3.5 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
            >
              <Compass className="w-4 h-4" />
              <span>Explorar oportunidades</span>
            </button>
            <Link
              to="/contacto"
              className="px-8 py-3.5 bg-transparent border border-[#8FA777] text-[#8FA777] text-xs font-semibold tracking-wider uppercase hover:bg-[#8FA777] hover:text-[#FBF9F3] transition-colors"
            >
              Contactar con Valeria
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
