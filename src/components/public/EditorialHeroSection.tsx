import React from 'react';
import { BRAND_IMAGES } from '../../data/images';
import { ArrowRight } from 'lucide-react';

interface EditorialHeroSectionProps {
  onOpenConsultation: (type: 'owner' | 'buyer') => void;
}

export const EditorialHeroSection: React.FC<EditorialHeroSectionProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section id="inicio" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-[#F5F2EA] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Eyebrow */}
        <div className="mb-6">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
            PROPERTY ADVISORY · COSTA DORADA & GARRAF
          </span>
        </div>

        {/* 2-Column Symmetrical Grid Layout with bottom-aligned CTA matching photo baseline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Typography, Narrative & Credentials, with CTAs pinned to the bottom */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#24211D] leading-[1.12] tracking-tight">
                La tranquilidad de estar bien asesorado.
              </h1>

              <p className="text-base sm:text-lg text-[#4A463F] leading-relaxed font-sans font-normal">
                Golden Coast acompaña a propietarios, compradores e inversores con un asesoramiento inmobiliario personalizado basado en la confianza, el conocimiento local y una relación que continúa mucho después de cada operación.
              </p>

              {/* Official Credentials Box: API (Agente de la propiedad inmobiliaria), Perito Judicial (inmobiliario), Especialista (Ley de Arrendamientos Urbanos - LAU) */}
              <div className="p-5 bg-[#FBF9F3] border border-[#E8E2D5] rounded-none">
                <div className="text-[10px] font-sans uppercase tracking-[0.22em] text-[#D4AF37] font-semibold mb-3">
                  Credenciales Oficiales
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans text-[#24211D]">
                  <div className="border-l-2 border-[#D4AF37] pl-3">
                    <div className="font-semibold text-sm">API</div>
                    <div className="text-[11px] text-[#5C574E] mt-0.5 leading-snug">
                      Agente de la propiedad inmobiliaria
                    </div>
                  </div>
                  <div className="border-l-2 border-[#D4AF37] pl-3">
                    <div className="font-semibold text-sm">Perito judicial</div>
                    <div className="text-[11px] text-[#5C574E] mt-0.5 leading-snug">
                      inmobiliario
                    </div>
                  </div>
                  <div className="border-l-2 border-[#D4AF37] pl-3">
                    <div className="font-semibold text-sm">Especialista</div>
                    <div className="text-[11px] text-[#5C574E] mt-0.5 leading-snug">
                      Ley de Arrendamientos Urbanos (LAU)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons: Identical, Verde Salvia (#8FA777) changing to Dorado Champagne (#D4AF37) on click/hover, aligned with photo bottom edge */}
            <div className="pt-4 lg:pt-0 mt-auto flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onOpenConsultation('owner')}
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-all duration-200 cursor-pointer group shadow-xs"
              >
                <span>Quiero gestionar mi propiedad</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenConsultation('buyer')}
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-all duration-200 cursor-pointer group shadow-xs"
              >
                <span>Quiero encontrar una propiedad</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Photography Plate */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative border border-[#E8E2D5] p-2.5 sm:p-3.5 bg-[#FBF9F3] shadow-xs flex-1 flex flex-col">
              <img
                src={BRAND_IMAGES.arquitecturaCasa}
                alt="Arquitectura y estilo de vida en la Costa Dorada y el Garraf"
                className="w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[500px] object-cover object-center"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="mt-2.5 text-[11px] font-sans text-[#5C574E] tracking-wider uppercase flex justify-between">
                <span>Arquitectura & Estilo de Vida</span>
                <span>Costa Dorada & Garraf</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
