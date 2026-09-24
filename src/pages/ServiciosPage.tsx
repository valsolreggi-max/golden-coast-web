import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useConsultation } from '../components/ConsultationContext';
import { Link } from 'react-router-dom';

interface ServiceStep {
  step: string;
  title: string;
  desc: string;
}

interface OwnerServiceItem {
  id: string;
  number: string;
  title: string;
  headline: string;
  intro: string;
  steps: ServiceStep[];
  closing: string;
  ctaText: string;
  consultationType: 'owner';
}

interface BuyerServiceItem {
  id: string;
  number: string;
  title: string;
  headline: string;
  intro: string;
  steps: ServiceStep[];
  ctaText: string;
  consultationType: 'buyer' | 'general';
}

const ownerServices: OwnerServiceItem[] = [
  {
    id: 'alquiler-vacacional',
    number: '1',
    title: 'ALQUILER VACACIONAL',
    headline: 'La tranquilidad de delegar la gestión de tu alquiler vacacional.',
    intro:
      'Cada propietario tiene necesidades diferentes. Por eso adapto el servicio a cada vivienda, ofreciendo desde gestiones puntuales hasta una gestión integral del alquiler vacacional en Sitges, Vilanova i la Geltrú, Cubelles, Cunit, Segur de Calafell y Calafell.',
    steps: [
      {
        step: '01',
        title: 'Analizo tu propiedad',
        desc: 'Valoro la vivienda y definimos el nivel de gestión que mejor se adapta a tus necesidades.',
      },
      {
        step: '02',
        title: 'Preparo tu vivienda',
        desc: 'Te asesoro en todo lo necesario para la puesta a punto de tu propiedad, de forma que esté preparada para ofrecer una excelente experiencia a los huéspedes desde el primer día.',
      },
      {
        step: '03',
        title: 'Gestiono el servicio',
        desc: 'Coordino los check-in y check-out, la elaboración de contratos, los inventarios, la limpieza y lavandería, el control de suministros y contadores y la atención de incidencias 24/7.',
      },
      {
        step: '04',
        title: 'Me adapto a ti',
        desc: 'Puedes contratar servicios concretos o confiarme la gestión integral de tu vivienda. Siempre encontrarás una propuesta adaptada a tus necesidades.',
      },
    ],
    closing: 'Cada propiedad es diferente. Cuéntame qué necesitas y prepararemos una propuesta personalizada.',
    ctaText: 'Solicitar información',
    consultationType: 'owner',
  },
  {
    id: 'alquiler-temporal',
    number: '2',
    title: 'ALQUILER TEMPORAL',
    headline: 'La tranquilidad de un alquiler temporal bien gestionado desde el principio.',
    intro:
      'Cada alquiler temporal responde a una necesidad diferente. Por eso estudio cada caso de forma individual para ofrecer un asesoramiento adaptado tanto al propietario como a la vivienda.',
    steps: [
      {
        step: '01',
        title: 'Analizo tu caso',
        desc: 'Valoro las características del alquiler y definimos la modalidad que mejor se adapta a tus necesidades.',
      },
      {
        step: '02',
        title: 'Preparo la documentación',
        desc: 'Redacto el contrato de alquiler temporal y la documentación necesaria conforme a la normativa vigente.',
      },
      {
        step: '03',
        title: 'Gestiono el proceso',
        desc: 'Si lo deseas, coordino la incorporación del inquilino, la entrega de la vivienda, los inventarios y el seguimiento del alquiler.',
      },
      {
        step: '04',
        title: 'Te acompaño durante todo el proceso',
        desc: 'Como API y Perito Judicial Inmobiliario, te ofrezco un asesoramiento personalizado para que puedas alquilar con tranquilidad y seguridad.',
      },
    ],
    closing: 'Cada alquiler es diferente. Cuéntame tu caso y prepararemos la solución que mejor se adapte a tu vivienda.',
    ctaText: 'Solicitar información',
    consultationType: 'owner',
  },
  {
    id: 'alquiler-larga-duracion',
    number: '3',
    title: 'ALQUILER DE LARGA DURACIÓN',
    headline: 'La tranquilidad de elegir al inquilino adecuado desde el primer momento.',
    intro:
      'Un alquiler de larga duración es una decisión importante. Elegir al inquilino adecuado, estudiar cada candidatura y preparar correctamente toda la documentación es la mejor forma de proteger tu vivienda desde el primer día.',
    steps: [
      {
        step: '01',
        title: 'Analizo tu vivienda',
        desc: 'Valoro la propiedad, el precio del alquiler conforme a la normativa vigente y definimos la estrategia más adecuada para encontrar al inquilino que mejor encaje con tu vivienda.',
      },
      {
        step: '02',
        title: 'Selecciono al inquilino',
        desc: 'Realizo un filtro exhaustivo de cada candidato, estudio su solvencia y, si lo deseas, gestiono el seguro de impago. Además, muchas de las personas que han buscado vivienda conmigo siguen confiando en mí cuando aparece una nueva oportunidad, lo que en muchos casos permite agilizar la búsqueda del perfil adecuado.',
      },
      {
        step: '03',
        title: 'Preparo toda la documentación',
        desc: 'Redacto el contrato de alquiler de vivienda habitual conforme a la legislación vigente y, cuando corresponde, aplico el Índice de Referencia del Precio del Alquiler y la normativa de las zonas tensionadas, para que todo el proceso se desarrolle con seguridad jurídica.',
      },
      {
        step: '04',
        title: 'Te acompaño hasta la firma',
        desc: 'Te asesoro en cada paso del proceso, desde la comercialización de la vivienda hasta la entrega de llaves, para que puedas alquilar con tranquilidad y seguridad.',
      },
    ],
    closing: 'Cada vivienda y cada propietario son diferentes. Cuéntame tu caso y prepararemos una propuesta adaptada a tus necesidades.',
    ctaText: 'Solicitar información',
    consultationType: 'owner',
  },
  {
    id: 'venta-de-propiedades',
    number: '4',
    title: 'VENTA DE PROPIEDADES',
    headline: 'La tranquilidad de vender tu propiedad con una estrategia bien definida.',
    intro:
      'Cada vivienda es diferente. Por eso, antes de salir al mercado, realizo una valoración técnica y diseño una estrategia personalizada para conseguir la mejor venta posible.',
    steps: [
      {
        step: '01',
        title: 'Valoro tu propiedad',
        desc: 'Como API y Perito Judicial Inmobiliario, realizo una valoración técnica que nos permite definir el mejor posicionamiento y la estrategia de venta más adecuada.',
      },
      {
        step: '02',
        title: 'Preparo la vivienda',
        desc: 'Planifico la presentación de la propiedad mediante fotografía profesional y, cuando aporta valor, acciones de home staging para potenciar su atractivo.',
      },
      {
        step: '03',
        title: 'Gestiono la comercialización',
        desc: 'Publico la vivienda, coordino las visitas, realizo el seguimiento de cada comprador y te mantengo informado durante todo el proceso.',
      },
      {
        step: '04',
        title: 'Te acompaño hasta la firma',
        desc: 'Te asesoro durante la negociación, la firma en notaría y la entrega de llaves para que la venta se desarrolle con tranquilidad y seguridad.',
      },
    ],
    closing: 'Cada propiedad es única. Cuéntame tu proyecto y prepararemos una estrategia adaptada a tu vivienda.',
    ctaText: 'Solicitar información',
    consultationType: 'owner',
  },
];

const buyerServices: BuyerServiceItem[] = [
  {
    id: 'compra-de-vivienda',
    number: '5',
    title: 'COMPRA DE VIVIENDA PERSONALIZADA',
    headline: 'La tranquilidad de entender tu proyecto y encontrar la vivienda adecuada.',
    intro:
      'Cada compra es diferente. Por eso empiezo escuchando qué necesitas y cuál es tu objetivo. A partir de ahí realizo una búsqueda personalizada, analizo cada oportunidad y te acompaño durante todo el proceso de compra en la Costa Dorada y el Garraf, para que puedas tomar cada decisión con seguridad.',
    steps: [
      {
        step: '01',
        title: 'Analizo tu proyecto',
        desc: 'Conozco tus necesidades, tu presupuesto y el objetivo de la compra para definir la mejor estrategia de búsqueda.',
      },
      {
        step: '02',
        title: 'Selecciono las mejores oportunidades',
        desc: 'Busco, analizo y organizo visitas a las propiedades que realmente encajan contigo.',
      },
      {
        step: '03',
        title: 'Valoro y negocio por ti',
        desc: 'Reviso la documentación, realizo una valoración técnica cuando es necesario y negocio las mejores condiciones en tu nombre.',
      },
      {
        step: '04',
        title: 'Te acompaño hasta la firma',
        desc: 'Te asesoro durante todo el proceso, desde la reserva hasta la notaría, para que compres con tranquilidad y seguridad.',
      },
    ],
    ctaText: 'Solicitar asesoramiento',
    consultationType: 'buyer',
  },
  {
    id: 'reubicacion-espana',
    number: '6',
    title: 'REUBICACIÓN EN ESPAÑA',
    headline: 'La tranquilidad de empezar una nueva etapa con el acompañamiento adecuado.',
    intro:
      'Mudarse a otro país implica mucho más que encontrar una vivienda. Te acompaño antes, durante y después de tu llegada a España para que todo el proceso sea más sencillo, tanto si vienes a vivir, invertir o pasar una larga temporada en la Costa Dorada o el Garraf.',
    steps: [
      {
        step: '01',
        title: 'Analizo tu proyecto',
        desc: 'Conozco tu situación familiar, laboral y personal para ayudarte a elegir la zona que mejor se adapta a tu estilo de vida.',
      },
      {
        step: '02',
        title: 'Organizo la búsqueda de vivienda',
        desc: 'Te ayudo a encontrar la mejor opción de compra, alquiler temporal o larga duración según tus necesidades.',
      },
      {
        step: '03',
        title: 'Coordino todo el proceso',
        desc: 'Te acompaño con la documentación, visitas, gestiones y los profesionales necesarios durante la operación.',
      },
      {
        step: '04',
        title: 'Te acompaño también después',
        desc: 'Si lo necesitas, puedo ayudarte con colegios, servicios, proveedores y todo lo necesario para instalarte con tranquilidad.',
      },
    ],
    ctaText: 'Solicitar asesoramiento',
    consultationType: 'general',
  },
];

export const ServiciosPage: React.FC = () => {
  const { openConsultation } = useConsultation();

  return (
    <div className="pt-24 sm:pt-28 bg-[#F5F2EA]">
      {/* Editorial Page Header */}
      <div className="bg-[#F5F2EA] border-b border-[#E8E2D5] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="mb-4">
            <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
              SERVICIOS
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211D] leading-[1.15] tracking-tight max-w-4xl">
            Un acompañamiento personalizado para cada etapa de tu proyecto inmobiliario.
          </h1>
        </div>
      </div>

      {/* BLOQUE 1: ¿TIENES UNA PROPIEDAD? */}
      <section className="py-16 sm:py-24 border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="mb-12 sm:mb-16">
            <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase block mb-3">
              ¿TIENES UNA PROPIEDAD?
            </span>
            <div className="w-12 h-px bg-[#D4AF37]" />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {ownerServices.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="p-8 sm:p-10 lg:p-12 bg-[#FBF9F3] border border-[#E8E2D5] shadow-xs"
              >
                {/* Number & Service Title */}
                <div className="mb-4">
                  <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
                    {service.number}. {service.title}
                  </span>
                </div>

                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#24211D] leading-snug tracking-tight mb-5">
                  {service.headline}
                </h2>

                {/* Introductory Narrative */}
                <p className="text-base text-[#4A463F] leading-relaxed font-sans font-normal max-w-3xl mb-8">
                  {service.intro}
                </p>

                {/* ¿Cómo puedo ayudarte? */}
                <div className="border-t border-[#E8E2D5] pt-6 mb-8">
                  <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-6">
                    ¿Cómo puedo ayudarte?
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {service.steps.map((item) => (
                      <div
                        key={item.step}
                        className="p-5 bg-[#F5F2EA] border border-[#E8E2D5]/80 flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-xs font-sans font-semibold text-[#8FA777] tracking-wider block mb-2">
                            {item.step} · {item.title}
                          </span>
                          <p className="text-xs sm:text-sm text-[#4A463F] leading-relaxed font-sans font-normal">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Closing and CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#E8E2D5]">
                  <p className="text-sm text-[#5C574E] font-serif italic max-w-xl">
                    {service.closing}
                  </p>
                  <button
                    onClick={() => openConsultation(service.consultationType)}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-colors cursor-pointer group shadow-xs whitespace-nowrap"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOQUE 2: ¿BUSCAS UNA PROPIEDAD? */}
      <section className="py-16 sm:py-24 border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="mb-12 sm:mb-16">
            <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase block mb-3">
              ¿BUSCAS UNA PROPIEDAD?
            </span>
            <div className="w-12 h-px bg-[#D4AF37]" />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {buyerServices.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="p-8 sm:p-10 lg:p-12 bg-[#FBF9F3] border border-[#E8E2D5] shadow-xs"
              >
                {/* Number & Service Title */}
                <div className="mb-4">
                  <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
                    {service.number}. {service.title}
                  </span>
                </div>

                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#24211D] leading-snug tracking-tight mb-5">
                  {service.headline}
                </h2>

                {/* Introductory Narrative */}
                <p className="text-base text-[#4A463F] leading-relaxed font-sans font-normal max-w-3xl mb-8">
                  {service.intro}
                </p>

                {/* ¿Cómo puedo ayudarte? */}
                <div className="border-t border-[#E8E2D5] pt-6 mb-8">
                  <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-6">
                    ¿Cómo puedo ayudarte?
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {service.steps.map((item) => (
                      <div
                        key={item.step}
                        className="p-5 bg-[#F5F2EA] border border-[#E8E2D5]/80 flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-xs font-sans font-semibold text-[#8FA777] tracking-wider block mb-2">
                            {item.step} · {item.title}
                          </span>
                          <p className="text-xs sm:text-sm text-[#4A463F] leading-relaxed font-sans font-normal">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-4 pt-6 border-t border-[#E8E2D5]">
                  <button
                    onClick={() => openConsultation(service.consultationType)}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-colors cursor-pointer group shadow-xs whitespace-nowrap"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-16 sm:py-20 bg-[#FBF9F3] border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center space-y-6">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase block">
            ASESORAMIENTO OFICIAL & RIGOR JURÍDICO
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#24211D] max-w-2xl mx-auto leading-tight">
            ¿Tienes dudas sobre qué modalidad de gestión se adapta mejor a tu vivienda?
          </h2>
          <p className="text-sm sm:text-base text-[#4A463F] max-w-xl mx-auto font-sans">
            Analizamos tu propiedad y objetivos para diseñar una propuesta jurídica y comercial personalizada.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openConsultation('owner')}
              className="px-8 py-3.5 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-colors cursor-pointer shadow-xs"
            >
              Consultar sobre mi propiedad
            </button>
            <Link
              to="/contacto"
              className="px-8 py-3.5 bg-transparent border border-[#8FA777] text-[#8FA777] text-xs font-semibold tracking-wider uppercase hover:bg-[#8FA777] hover:text-[#FBF9F3] transition-colors"
            >
              Ir a formulario de contacto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

