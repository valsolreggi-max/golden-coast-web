import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';

export const HomeTestimonialFeatured: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F5F2EA] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Subtítulo de sección */}
        <div className="mb-5 sm:mb-6">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
            TESTIMONIO DESTACADO · RELACIÓN DE CONFIANZA
          </span>
        </div>

        {/* Titular principal */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211D] leading-[1.15] tracking-tight font-normal">
            Historias que hablan por sí solas.
          </h2>
        </div>

        {/* Bloque editorial en 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Columna Izquierda: Ficha y Preámbulo por Valeria */}
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 bg-[#FBF9F3] border border-[#E8E2D5] flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              
              {/* [Ficha] */}
              <div className="border-b border-[#E8E2D5] pb-5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 mb-2">
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#24211D]">
                    Diana, Nick y su familia
                  </h3>
                  <span className="text-xs sm:text-sm text-[#5C574E] font-sans font-medium">
                    Propietarios · Alemania
                  </span>
                </div>
                <p className="text-xs font-sans text-[#D4AF37] font-medium tracking-wide">
                  Costa Dorada · Acompañamiento continuado (Más de 5 años de relación)
                </p>
              </div>

              {/* [Preámbulo por Valeria] */}
              <div className="space-y-4 text-sm sm:text-base text-[#4A463F] leading-relaxed font-sans font-light">
                <p>
                  Conocí a Diana y a Nick cuando buscaban su hogar en la Costa Dorada. Acompañarles en el proceso de compra desde el extranjero supuso coordinar cada detalle con absoluta transparencia: desde la negociación del inmueble y el mobiliario, hasta la organización de intérpretes y la selección de colaboradores locales de confianza para que se sintieran seguros en España desde el primer día.
                </p>
                <p>
                  Sin embargo, la firma en notaría fue solo el comienzo de nuestra relación. Más de cinco años después, Diana y su familia siguen confiando en mí desde Alemania para cuidar y gestionar su propiedad en la Costa Dorada.
                </p>
                <p>
                  Para mí, esa continuidad es lo realmente valioso: demuestra que el trabajo bien hecho no termina cuando se entregan las llaves, sino que construye una relación de confianza que perdura en el tiempo.
                </p>
              </div>

            </div>

            {/* Separador inferior sutil */}
            <div className="pt-6 mt-6 border-t border-[#E8E2D5] flex items-center justify-between text-xs text-[#5C574E] font-sans">
              <span>Acompañamiento integral internacional</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            </div>
          </div>

          {/* Columna Derecha: Cita Destacada y Botones / Llamadas a la acción */}
          <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 bg-[#FBF9F3] border border-[#E8E2D5] flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              
              <div className="border-b border-[#E8E2D5] pb-4 flex items-center justify-between">
                <Quote className="w-7 h-7 text-[#D4AF37]" />
                <span className="text-[11px] font-sans text-[#8FA777] uppercase tracking-[0.16em] font-medium">
                  Testimonio
                </span>
              </div>

              {/* [Cita Destacada] */}
              <div className="space-y-4 pt-1">
                <blockquote className="text-xl sm:text-2xl font-serif italic text-[#24211D] leading-snug">
                  «La confianza no se puede comprar; hay que ganársela. Valeria consigue precisamente eso. Con verdadera dedicación, profesionalidad y una calidez humana que pocas veces se encuentra.»
                </blockquote>
                <p className="text-sm font-sans font-medium text-[#24211D]">
                  — Diana Schepmann
                </p>
              </div>

            </div>

            {/* [Botones / Llamadas a la acción] */}
            <div className="pt-8 mt-8 border-t border-[#E8E2D5] space-y-4">
              <Link
                to="/testimonios#diana"
                className="w-full py-4 px-6 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-sans font-semibold tracking-[0.16em] uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-all duration-200 inline-flex items-center justify-center gap-2 group shadow-xs cursor-pointer text-center"
              >
                <span>Ver testimonio completo de Diana</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="text-center pt-1">
                <Link
                  to="/testimonios"
                  className="text-xs font-sans text-[#5C574E] hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline"
                >
                  Ver todas las experiencias de clientes
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
