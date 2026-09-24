import React, { useState } from 'react';
import { useConsultation } from '../components/ConsultationContext';
import { ChevronDown, ArrowRight } from 'lucide-react';

export const FAQPage: React.FC = () => {
  const { openConsultation } = useConsultation();
  // Permite mantener varias respuestas abiertas simultáneamente mientras se consulta
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([1]));

  const toggleItem = (id: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenItems(new Set(Array.from({ length: 12 }, (_, i) => i + 1)));
  };

  const collapseAll = () => {
    setOpenItems(new Set());
  };

  const scrollToBlock = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pt-24 sm:pt-28 bg-[#FBF9F3]">
      {/* Header Editorial de la Página */}
      <div className="bg-[#F5F2EA] border-b border-[#E8E2D5] py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="mb-4">
            <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
              PREGUNTAS FRECUENTES · GOLDEN COAST
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#24211D] leading-[1.12] tracking-tight max-w-4xl">
            Respuestas claras y rigor jurídico para cada duda.
          </h1>
          <p className="text-base sm:text-lg text-[#4A463F] leading-relaxed font-sans font-normal mt-4 max-w-3xl">
            La información transparente es la base de la tranquilidad. Aquí resolvemos las preguntas más habituales sobre la gestión, compraventa y alquiler de propiedades.
          </p>

          {/* Barra de navegación rápida por bloques y control de visualización */}
          <div className="mt-10 pt-8 border-t border-[#E8E2D5] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => scrollToBlock('bloque-1')}
                className="px-4 py-2 bg-[#FBF9F3] border border-[#E8E2D5] text-[#24211D] hover:border-[#D4AF37] text-xs font-sans font-medium tracking-wide transition-colors cursor-pointer"
              >
                1. Alquileres y Normativa
              </button>
              <button
                type="button"
                onClick={() => scrollToBlock('bloque-2')}
                className="px-4 py-2 bg-[#FBF9F3] border border-[#E8E2D5] text-[#24211D] hover:border-[#D4AF37] text-xs font-sans font-medium tracking-wide transition-colors cursor-pointer"
              >
                2. Venta, Valoración y Staging
              </button>
              <button
                type="button"
                onClick={() => scrollToBlock('bloque-3')}
                className="px-4 py-2 bg-[#FBF9F3] border border-[#E8E2D5] text-[#24211D] hover:border-[#D4AF37] text-xs font-sans font-medium tracking-wide transition-colors cursor-pointer"
              >
                3. Comprador, Relocation y Legal
              </button>
            </div>

            <div className="flex items-center gap-3 text-xs font-sans text-[#5C574E]">
              <button
                type="button"
                onClick={expandAll}
                className="hover:text-[#24211D] hover:underline cursor-pointer transition-colors"
              >
                Abrir todas
              </button>
              <span className="text-[#E8E2D5]">|</span>
              <button
                type="button"
                onClick={collapseAll}
                className="hover:text-[#24211D] hover:underline cursor-pointer transition-colors"
              >
                Cerrar todas
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          BLOQUE 1: ALQUILERES Y NORMATIVA
          ======================================================== */}
      <section id="bloque-1" className="py-16 sm:py-24 bg-[#FBF9F3] border-b border-[#E8E2D5]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          
          {/* Cabecera del Bloque 1 */}
          <div className="mb-10 pb-6 border-b border-[#E8E2D5]">
            <span className="text-[11px] font-sans font-semibold text-[#D4AF37] uppercase tracking-[0.2em] block mb-2">
              BLOQUE 1
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#24211D] leading-snug">
              Bloque 1: Alquileres (Vacacional, Temporal y Larga Duración) y Normativa
            </h2>
          </div>

          <div className="space-y-4">
            
            {/* Pregunta 1 */}
            <div className="bg-[#F5F2EA] border border-[#E8E2D5]">
              <button
                type="button"
                onClick={() => toggleItem(1)}
                className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#EFECE3]/70 transition-colors"
                aria-expanded={openItems.has(1)}
              >
                <div className="flex items-start gap-4">
                  <span className="text-[#D4AF37] font-serif text-lg sm:text-xl font-medium leading-none mt-1 shrink-0">
                    01
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#24211D] leading-snug">
                    1. ¿Si mi piso está en zona tensionada, estoy obligado a bajar el alquiler al precio del Índice de Referencia? ¿O puedo subirlo si el Índice marca más de lo que cobraba?
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 mt-1.5 ${
                    openItems.has(1) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openItems.has(1) && (
                <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#E8E2D5] space-y-6 text-[#4A463F] text-sm sm:text-base leading-relaxed font-sans">
                  <p className="font-medium text-[#24211D]">
                    Respuesta:
                  </p>
                  
                  <p>
                    Depende de tu perfil de propietario y del historial del inmueble (Ley 12/2023 por el Derecho a la Vivienda y Ley de Arrendamientos Urbanos):
                  </p>

                  {/* Caso 1: Índice Inferior */}
                  <div className="p-5 sm:p-6 bg-[#FBF9F3] border-l-2 border-[#D4AF37] border-y border-r border-[#E8E2D5] space-y-3">
                    <p className="font-serif text-[#24211D] font-semibold text-base sm:text-lg leading-snug">
                      Si el Índice marca un precio INFERIOR al contrato anterior (Ejemplo: Alquilabas a 850 € y el Índice marca 780 €):
                    </p>
                    <p>
                      Si eres un pequeño propietario (menos de 5 o 10 inmuebles según la delimitación de la zona) y la vivienda ha estado alquilada en los últimos 5 años, NO estás obligado a bajar la renta inicial a 780 €. La ley te autoriza a tomar como techo la renta fijada en el contrato anterior (850 €). La obligación de bajar imperativamente al tope del Índice aplica únicamente a grandes tenedores o a viviendas sin contratos previos en los últimos 5 años. La actualización anual por índice solo procederá al cumplir el primer año del nuevo contrato.
                    </p>
                  </div>

                  {/* Caso 2: Índice Superior */}
                  <div className="p-5 sm:p-6 bg-[#FBF9F3] border-l-2 border-[#8FA777] border-y border-r border-[#E8E2D5] space-y-3">
                    <p className="font-serif text-[#24211D] font-semibold text-base sm:text-lg leading-snug">
                      Si el Índice marca un precio SUPERIOR al contrato anterior (Ejemplo: Alquilabas a 780 € y el Índice marca 850 €):
                    </p>
                    <p>
                      En este supuesto, la renta del contrato anterior (780 €) actúa como un techo infranqueable. No puedes incrementar la renta a 850 € escudándote en el Índice. La única excepción para aumentar hasta un 10 % adicional exige acreditar obras importantes de rehabilitación, mejoras de eficiencia energética acreditadas (mínimo 30 %), accesibilidad o la firma de un contrato de larga duración (10+ años).
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Pregunta 2 */}
            <div className="bg-[#F5F2EA] border border-[#E8E2D5]">
              <button
                type="button"
                onClick={() => toggleItem(2)}
                className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#EFECE3]/70 transition-colors"
                aria-expanded={openItems.has(2)}
              >
                <div className="flex items-start gap-4">
                  <span className="text-[#D4AF37] font-serif text-lg sm:text-xl font-medium leading-none mt-1 shrink-0">
                    02
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#24211D] leading-snug">
                    2. ¿Puedo cobrar al inquilino los gastos de IBI, comunidad y tasa de basuras en un contrato nuevo?
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 mt-1.5 ${
                    openItems.has(2) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openItems.has(2) && (
                <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#E8E2D5] space-y-4 text-[#4A463F] text-sm sm:text-base leading-relaxed font-sans">
                  <p className="font-medium text-[#24211D]">
                    Respuesta:
                  </p>
                  <p className="p-4 bg-[#FBF9F3] border-l-2 border-[#D4AF37] border-y border-r border-[#E8E2D5] text-[#24211D] font-medium">
                    Únicamente si esos mismos gastos ya se encontraban pactados y repercutidos de forma explícita en el contrato anterior.
                  </p>
                  <p>
                    Si en el contrato previo no se cobraban, pretendes introducirlos en un nuevo contrato sujeto a zona tensionada para compensar la limitación del precio se califica legalmente como un aumento fraudulento de la renta y resulta una cláusula nula de pleno derecho (Art. 6 y 20.1 LAU). Si un gasto ya figuraba previamente (por ejemplo, la tasa de basuras), se puede seguir repercutiendo actualizando únicamente su importe según el incremento real devengado del tributo.
                  </p>
                </div>
              )}
            </div>

            {/* Pregunta 3 */}
            <div className="bg-[#F5F2EA] border border-[#E8E2D5]">
              <button
                type="button"
                onClick={() => toggleItem(3)}
                className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#EFECE3]/70 transition-colors"
                aria-expanded={openItems.has(3)}
              >
                <div className="flex items-start gap-4">
                  <span className="text-[#D4AF37] font-serif text-lg sm:text-xl font-medium leading-none mt-1 shrink-0">
                    03
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#24211D] leading-snug">
                    3. ¿Se están concediendo licencias turísticas actualmente? ¿Y es real que la licencia "se transmite" al comprar un piso?
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 mt-1.5 ${
                    openItems.has(3) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openItems.has(3) && (
                <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#E8E2D5] space-y-4 text-[#4A463F] text-sm sm:text-base leading-relaxed font-sans">
                  <p className="font-medium text-[#24211D]">
                    Respuesta:
                  </p>
                  <p>
                    Es fundamental distinguir el marco legal real frente a los ganchos publicitarios engañosos:
                  </p>
                  
                  <div className="space-y-3 pt-1">
                    <p className="pl-4 border-l-2 border-[#D4AF37]">
                      <strong className="text-[#24211D] font-semibold">Concesión de nuevas licencias:</strong> En más de 260 municipios catalanes declarados tensionados (incluyendo Sitges, Vilanova, Calafell, Cubelles, etc.), el Decreto Ley 3/2023 congeló la entrega de títulos, exigiendo una licencia urbanística previa sujeta a planes municipales muy restrictivos.
                    </p>
                    <p className="pl-4 border-l-2 border-[#D4AF37]">
                      <strong className="text-[#24211D] font-semibold">Comprar un piso con "licencia turística":</strong> La licencia turística no es un título patrimonial que se venda o transfiera automáticamente. Administrativamente solo se realiza un trámite de cambio de titularidad de la actividad, el cual carece de validez si el municipio no permite el uso turístico.
                    </p>
                    <p className="pl-4 border-l-2 border-[#D4AF37]">
                      <strong className="text-[#24211D] font-semibold">Caducidad obligatoria en 2028:</strong> Las antiguas licencias que antes se consideraban "vitalicias" han pasado a estar sujetas al régimen transitorio del Decreto Ley 3/2023: caducan obligatoriamente a los 5 años (noviembre de 2028). Para continuar la actividad a partir de esa fecha, el Ayuntamiento deberá otorgar una nueva licencia urbanística bajo su planeamiento. Si no lo prevé, la actividad turística se extinguirá.
                    </p>
                  </div>

                  <p className="p-4 bg-[#FBF9F3] border border-[#E8E2D5] text-[#24211D]">
                    Antes de formalizar la compra de una propiedad turística en el Garraf o Costa Daurada, en Golden Coast realizamos una auditoría urbanística previa para comprobar si la actividad se mantendrá legalmente.
                  </p>
                </div>
              )}
            </div>

            {/* Pregunta 4 */}
            <div className="bg-[#F5F2EA] border border-[#E8E2D5]">
              <button
                type="button"
                onClick={() => toggleItem(4)}
                className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#EFECE3]/70 transition-colors"
                aria-expanded={openItems.has(4)}
              >
                <div className="flex items-start gap-4">
                  <span className="text-[#D4AF37] font-serif text-lg sm:text-xl font-medium leading-none mt-1 shrink-0">
                    04
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#24211D] leading-snug">
                    4. ¿Puedo contratar únicamente servicios puntuales para mi alquiler vacacional o de temporada sin delegar la gestión integral?
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 mt-1.5 ${
                    openItems.has(4) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openItems.has(4) && (
                <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#E8E2D5] space-y-4 text-[#4A463F] text-sm sm:text-base leading-relaxed font-sans">
                  <p className="font-medium text-[#24211D]">
                    Respuesta:
                  </p>
                  <p>
                    Sí. En Golden Coast adaptamos la propuesta a lo que realmente necesitas. En alquiler vacacional (hasta 31 noches) y en alquiler de temporada (desde 32 noches o 1 mes hasta 12 meses) en municipios como Sitges, Vilanova i la Geltrú, Cubelles, Cunit, Segur de Calafell y Calafell, puedes contratar la gestión integral 360° o solicitar servicios a la carta: recepción y entrega de llaves (check-in/check-out), elaboración de contratos de temporada conforme a ley, inventarios con control de suministros, servicio de limpieza y lavandería o atención de incidencias 24/7.
                  </p>
                </div>
              )}
            </div>

            {/* Pregunta 5 */}
            <div className="bg-[#F5F2EA] border border-[#E8E2D5]">
              <button
                type="button"
                onClick={() => toggleItem(5)}
                className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#EFECE3]/70 transition-colors"
                aria-expanded={openItems.has(5)}
              >
                <div className="flex items-start gap-4">
                  <span className="text-[#D4AF37] font-serif text-lg sm:text-xl font-medium leading-none mt-1 shrink-0">
                    05
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#24211D] leading-snug">
                    5. Si vivo fuera (Madrid, Alemania, Reino Unido...), ¿cómo gestiona Golden Coast mi propiedad sin que yo tenga que desplazarme?
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 mt-1.5 ${
                    openItems.has(5) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openItems.has(5) && (
                <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#E8E2D5] space-y-4 text-[#4A463F] text-sm sm:text-base leading-relaxed font-sans">
                  <p className="font-medium text-[#24211D]">
                    Respuesta:
                  </p>
                  <p>
                    Ofrecemos un servicio de gestión integral "llave en mano" diseñado para propietarios con residencia remota o internacional:
                  </p>
                  <div className="space-y-3 pt-1">
                    <p className="pl-4 border-l-2 border-[#D4AF37]">
                      <strong className="text-[#24211D] font-semibold">Gestión a distancia:</strong> Realizamos la valoración, preparación del inmueble, reportajes y selección de candidatos con total transparencia y comunicación constante.
                    </p>
                    <p className="pl-4 border-l-2 border-[#D4AF37]">
                      <strong className="text-[#24211D] font-semibold">Firma Digital Avanzada:</strong> Coordinamos las reuniones por videoconferencia, la entrega de llaves y la firma del contrato mediante herramientas de firma digital avanzada con plena validez y seguridad jurídica (Reglamento EIDAS), sin necesidad de desplazamientos ni trámites presenciales.
                    </p>
                    <p className="pl-4 border-l-2 border-[#D4AF37]">
                      <strong className="text-[#24211D] font-semibold">Administración Total:</strong> Tramitamos el depósito de fianzas en el INCASÒL, cobros, liquidaciones y mantenimiento, ofreciendo un seguimiento periódico para tu total tranquilidad.
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          BLOQUE 2: VENTA DE PROPIEDADES, VALORACIÓN Y HOME STAGING
          ======================================================== */}
      <section id="bloque-2" className="py-16 sm:py-24 bg-[#F5F2EA] border-b border-[#E8E2D5]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          
          {/* Cabecera del Bloque 2 */}
          <div className="mb-10 pb-6 border-b border-[#E8E2D5]">
            <span className="text-[11px] font-sans font-semibold text-[#D4AF37] uppercase tracking-[0.2em] block mb-2">
              BLOQUE 2
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#24211D] leading-snug">
              Bloque 2: Venta de Propiedades, Valoración y Home Staging
            </h2>
          </div>

          <div className="space-y-4">
            
            {/* Pregunta 6 */}
            <div className="bg-[#FBF9F3] border border-[#E8E2D5]">
              <button
                type="button"
                onClick={() => toggleItem(6)}
                className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#F5F2EA]/70 transition-colors"
                aria-expanded={openItems.has(6)}
              >
                <div className="flex items-start gap-4">
                  <span className="text-[#D4AF37] font-serif text-lg sm:text-xl font-medium leading-none mt-1 shrink-0">
                    06
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#24211D] leading-snug">
                    6. ¿Cómo calculáis el valor real de mercado de mi vivienda para venderla al mejor precio?
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 mt-1.5 ${
                    openItems.has(6) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openItems.has(6) && (
                <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#E8E2D5] space-y-4 text-[#4A463F] text-sm sm:text-base leading-relaxed font-sans">
                  <p className="font-medium text-[#24211D]">
                    Respuesta:
                  </p>
                  <p>
                    A diferencia de las valoraciones automáticas de portales inmobiliarios basadas en precios de oferta inflados, en Golden Coast combinamos nuestra capacitación como Peritos Judiciales Inmobiliarios y API con un análisis comparativo de transacciones reales cerradas en el Registro de la Propiedad. Evaluamos el estado técnico, la situación legal, la eficiencia energética y la demanda solvente activa para fijar un precio competitivo que maximice el rendimiento financiero sin estancar la propiedad.
                  </p>
                </div>
              )}
            </div>

            {/* Pregunta 7 */}
            <div className="bg-[#FBF9F3] border border-[#E8E2D5]">
              <button
                type="button"
                onClick={() => toggleItem(7)}
                className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#F5F2EA]/70 transition-colors"
                aria-expanded={openItems.has(7)}
              >
                <div className="flex items-start gap-4">
                  <span className="text-[#D4AF37] font-serif text-lg sm:text-xl font-medium leading-none mt-1 shrink-0">
                    07
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#24211D] leading-snug">
                    7. ¿Por qué es indispensable preparar la vivienda (Home Staging) antes de hacer las fotos y publicarla?
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 mt-1.5 ${
                    openItems.has(7) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openItems.has(7) && (
                <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#E8E2D5] space-y-4 text-[#4A463F] text-sm sm:text-base leading-relaxed font-sans">
                  <p className="font-medium text-[#24211D]">
                    Respuesta:
                  </p>
                  <p>
                    La primera impresión determina el valor percibido. Publicar una propiedad con desorden, sobrecargada o con fotografía no profesional genera ofertas a la baja y prolonga el tiempo en el mercado. Un trabajo planificado de despersonalización, orden y preparación estética (Home Staging) combinado con fotografía profesional resalta el potencial del espacio, atrae a compradores cualificados y permite cerrar la venta al mejor precio posible.
                  </p>
                </div>
              )}
            </div>

            {/* Pregunta 8 */}
            <div className="bg-[#FBF9F3] border border-[#E8E2D5]">
              <button
                type="button"
                onClick={() => toggleItem(8)}
                className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#F5F2EA]/70 transition-colors"
                aria-expanded={openItems.has(8)}
              >
                <div className="flex items-start gap-4">
                  <span className="text-[#D4AF37] font-serif text-lg sm:text-xl font-medium leading-none mt-1 shrink-0">
                    08
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#24211D] leading-snug">
                    8. ¿En cuánto tiempo se vende una propiedad si la gestión se hace correctamente desde el primer día?
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 mt-1.5 ${
                    openItems.has(8) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openItems.has(8) && (
                <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#E8E2D5] space-y-4 text-[#4A463F] text-sm sm:text-base leading-relaxed font-sans">
                  <p className="font-medium text-[#24211D]">
                    Respuesta:
                  </p>
                  <p>
                    Una propiedad con una valoración técnica rigurosa, una puesta a punto impecable y una estrategia de comercialización dirigida no debe tardar más de 3 meses en venderse. Superar este plazo suele ser síntoma de un error en la fijación de precio inicial o en la presentación y filtrado del cliente comprador.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          BLOQUE 3: SERVICIO AL COMPRADOR, RELOCATION Y SEGURIDAD JURÍDICA
          ======================================================== */}
      <section id="bloque-3" className="py-16 sm:py-24 bg-[#FBF9F3] border-b border-[#E8E2D5]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          
          {/* Cabecera del Bloque 3 */}
          <div className="mb-10 pb-6 border-b border-[#E8E2D5]">
            <span className="text-[11px] font-sans font-semibold text-[#D4AF37] uppercase tracking-[0.2em] block mb-2">
              BLOQUE 3
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#24211D] leading-snug">
              Bloque 3: Servicio al Comprador, Reubicación (Relocation) y Seguridad Jurídica
            </h2>
          </div>

          <div className="space-y-4">
            
            {/* Pregunta 9 */}
            <div className="bg-[#F5F2EA] border border-[#E8E2D5]">
              <button
                type="button"
                onClick={() => toggleItem(9)}
                className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#EFECE3]/70 transition-colors"
                aria-expanded={openItems.has(9)}
              >
                <div className="flex items-start gap-4">
                  <span className="text-[#D4AF37] font-serif text-lg sm:text-xl font-medium leading-none mt-1 shrink-0">
                    09
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#24211D] leading-snug">
                    9. Si quiero COMPRAR una vivienda en el Garraf o Costa Daurada, ¿cómo me ayuda Golden Coast?
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 mt-1.5 ${
                    openItems.has(9) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openItems.has(9) && (
                <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#E8E2D5] space-y-4 text-[#4A463F] text-sm sm:text-base leading-relaxed font-sans">
                  <p className="font-medium text-[#24211D]">
                    Respuesta:
                  </p>
                  <p>
                    Actuamos como tu Personal Shopper Inmobiliario para proteger tus intereses frente a las agencias vendedoras. Analizamos tus necesidades y presupuesto, realizamos la búsqueda personalizada, filtramos las opciones que realmente encajan, auditamos la documentación legal de la finca (cargas, nota simple, situación urbanística) y negociamos el mejor precio y condiciones en tu nombre hasta la firma en notaría.
                  </p>
                </div>
              )}
            </div>

            {/* Pregunta 10 */}
            <div className="bg-[#F5F2EA] border border-[#E8E2D5]">
              <button
                type="button"
                onClick={() => toggleItem(10)}
                className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#EFECE3]/70 transition-colors"
                aria-expanded={openItems.has(10)}
              >
                <div className="flex items-start gap-4">
                  <span className="text-[#D4AF37] font-serif text-lg sm:text-xl font-medium leading-none mt-1 shrink-0">
                    10
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#24211D] leading-snug">
                    10. Vengo a vivir o invertir desde el extranjero o de otra comunidad, ¿en qué consiste el Servicio de Reubicación (Relocation)?
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 mt-1.5 ${
                    openItems.has(10) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openItems.has(10) && (
                <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#E8E2D5] space-y-4 text-[#4A463F] text-sm sm:text-base leading-relaxed font-sans">
                  <p className="font-medium text-[#24211D]">
                    Respuesta:
                  </p>
                  <p>
                    Mudarse implica mucho más que encontrar una casa. Nuestro servicio de Relocation acompaña a clientes e inversores internacionales (Reino Unido, Alemania, Francia...) y nacionales durante todo el proceso de llegada a España:
                  </p>
                  <div className="space-y-2.5 pt-1">
                    <div className="flex items-start gap-3">
                      <span className="text-[#D4AF37] mt-1 shrink-0">—</span>
                      <p>Asesoramiento en la elección de la zona según tu perfil personal o familiar.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#D4AF37] mt-1 shrink-0">—</span>
                      <p>Búsqueda de vivienda (compra, alquiler de temporada o larga duración).</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#D4AF37] mt-1 shrink-0">—</span>
                      <p>Coordinación de trámites, documentación y profesionales locales.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#D4AF37] mt-1 shrink-0">—</span>
                      <p>Acompañamiento posterior a la llegada (búsqueda de colegios, suministros, contratación de servicios).</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Pregunta 11 */}
            <div className="bg-[#F5F2EA] border border-[#E8E2D5]">
              <button
                type="button"
                onClick={() => toggleItem(11)}
                className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#EFECE3]/70 transition-colors"
                aria-expanded={openItems.has(11)}
              >
                <div className="flex items-start gap-4">
                  <span className="text-[#D4AF37] font-serif text-lg sm:text-xl font-medium leading-none mt-1 shrink-0">
                    11
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#24211D] leading-snug">
                    11. ¿Qué documentos y requisitos legales son estrictamente obligatorios para alquilar o vender un inmueble en Cataluña?
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 mt-1.5 ${
                    openItems.has(11) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openItems.has(11) && (
                <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#E8E2D5] space-y-4 text-[#4A463F] text-sm sm:text-base leading-relaxed font-sans">
                  <p className="font-medium text-[#24211D]">
                    Respuesta:
                  </p>
                  <div className="space-y-4 pt-1">
                    <p className="p-4 bg-[#FBF9F3] border-l-2 border-[#D4AF37] border-y border-r border-[#E8E2D5]">
                      <strong className="text-[#24211D] font-semibold">Para Venta o Alquiler:</strong> Es obligatorio disponer de la Cédula de Habitabilidad vigente (cuyo número de registro y entrega formal se debe hacer constar en el contrato o escritura para evitar infracciones graves según la Ley 18/2007 de Cataluña) y el Certificado de Eficiencia Energética (CEE).
                    </p>
                    <p className="p-4 bg-[#FBF9F3] border-l-2 border-[#8FA777] border-y border-r border-[#E8E2D5]">
                      <strong className="text-[#24211D] font-semibold">Para Alquiler:</strong> Es imperativo el justificante del depósito de la fianza en el INCASÒL (Decreto Ley 14/2010), la incorporación del certificado del Índice de Referencia de Precios en zonas tensionadas y el desglose explícito de los gastos repercutidos.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Pregunta 12 */}
            <div className="bg-[#F5F2EA] border border-[#E8E2D5]">
              <button
                type="button"
                onClick={() => toggleItem(12)}
                className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#EFECE3]/70 transition-colors"
                aria-expanded={openItems.has(12)}
              >
                <div className="flex items-start gap-4">
                  <span className="text-[#D4AF37] font-serif text-lg sm:text-xl font-medium leading-none mt-1 shrink-0">
                    12
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#24211D] leading-snug">
                    12. ¿En qué consiste el servicio de doble check jurídico y pericial de Golden Coast frente a una inmobiliaria tradicional?
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 mt-1.5 ${
                    openItems.has(12) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openItems.has(12) && (
                <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#E8E2D5] space-y-4 text-[#4A463F] text-sm sm:text-base leading-relaxed font-sans">
                  <p className="font-medium text-[#24211D]">
                    Respuesta:
                  </p>
                  <p>
                    La mayoría de agencias intermediarias emplean contratos estándar y descuidan la comprobación técnica. En Golden Coast operamos con el rigor de un despacho pericial inmobiliario: auditamos el historial de contratos anteriores, comprobamos notas simples, cargas, estatutos de comunidad, concordancia catastral y la normativa vigente (LAU y decretos de contención de rentas en Cataluña). Redactamos contratos a medida para garantizar que la operación sea inatacable jurídicamente y prevea cualquier riesgo de sanción administrativa o litigio.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Bloque de Contacto / Consulta Específica */}
      <section className="py-20 bg-[#F5F2EA] border-t border-[#E8E2D5]">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-5">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.24em] uppercase block">
            ASESORAMIENTO RIGUROSO
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif text-[#24211D]">
            ¿Tienes una consulta específica sobre tu propiedad?
          </h3>
          <p className="text-base text-[#4A463F] leading-relaxed font-sans font-normal">
            Cada caso patrimonial es único. Analizo tu situación de forma confidencial y sin compromiso para ofrecerte la máxima seguridad técnica y legal.
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => openConsultation('general')}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-colors cursor-pointer shadow-xs"
            >
              <span>Hacer una consulta con Valeria</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
