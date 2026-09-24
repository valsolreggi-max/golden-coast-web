import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Key, Calendar, Compass, MoveRight } from 'lucide-react';

export const HomeServicesSummary: React.FC = () => {
  const services = [
    {
      num: '01',
      title: 'Venta de viviendas',
      desc: 'Valoración rigurosa, Home Staging y comercialización selectiva con acompañamiento jurídico.',
      icon: Home,
    },
    {
      num: '02',
      title: 'Alquiler turístico & temporal',
      desc: 'Gestión cuidada para maximizar rendimiento protegiendo en todo momento el valor de la vivienda.',
      icon: Calendar,
    },
    {
      num: '03',
      title: 'Alquiler de larga duración',
      desc: 'Contratos redactados por especialista en LAU y análisis pericial de solvencia del inquilino.',
      icon: Key,
    },
    {
      num: '04',
      title: 'Búsqueda personalizada',
      desc: 'Personal Shopper con representación exclusiva, filtro integral de mercado y negociación.',
      icon: Compass,
    },
    {
      num: '05',
      title: 'Reubicación en España',
      desc: 'Acompañamiento personalizado para familias y clientes internacionales que quieren instalarse en la Costa Dorada y el Garraf.',
      icon: MoveRight,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F5F2EA] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Eyebrow */}
        <div className="mb-6">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
            SERVICIOS · RESUMEN GENERAL
          </span>
        </div>

        {/* Headline Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211D] leading-[1.15] tracking-tight">
              Soluciones a medida para cada etapa patrimonial.
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="text-base text-[#4A463F] leading-relaxed font-sans font-normal">
              Acompaño a propietarios que desean vender o rentabilizar su inmueble, a compradores en busca de un nuevo hogar y a quienes preparan su traslado al litoral catalán.
            </p>
          </div>
        </div>

        {/* 5 Compact Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.num}
                className="p-6 bg-[#FBF9F3] border border-[#E8E2D5] hover:border-[#D4AF37] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-sans font-semibold text-[#D4AF37] tracking-widest uppercase">
                      {service.num}
                    </span>
                    <Icon className="w-4 h-4 text-[#8FA777] group-hover:text-[#D4AF37] transition-colors" />
                  </div>

                  <h3 className="text-lg font-serif text-[#24211D] mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#5C574E] leading-relaxed font-sans font-normal">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to Full Services Page */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E8E2D5]">
          <span className="text-xs text-[#5C574E] font-sans">
            Desarrollo detallado, etapas de trabajo y modalidades completas
          </span>

          <Link
            to="/servicios"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-all duration-200 group shadow-xs"
          >
            <span>Ver todos los servicios al detalle</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
