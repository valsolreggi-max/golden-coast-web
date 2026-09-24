import React from 'react';
import { useConsultation } from '../components/ConsultationContext';
import { Quote, ArrowRight } from 'lucide-react';

export const TestimoniosPage: React.FC = () => {
  const { openConsultation } = useConsultation();

  return (
    <div className="pt-24 sm:pt-28 bg-[#FBF9F3]">
      {/* 1. ENCABEZADO EDITORIAL DE LA PÁGINA */}
      <div className="bg-[#F5F2EA] border-b border-[#E8E2D5] py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="mb-4">
            <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.24em] uppercase">
              TESTIMONIOS
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#24211D] leading-[1.15] tracking-tight">
            Historias de confianza
          </h1>
          <p className="text-xl sm:text-2xl font-serif text-[#5C574E] italic mt-2">
            Historias que hablan por sí solas.
          </p>

          {/* Texto introductorio solicitado */}
          <div className="mt-8 pt-8 border-t border-[#E8E2D5] space-y-4 text-base sm:text-lg text-[#4A463F] leading-relaxed font-sans font-normal max-w-3xl">
            <p>
              La confianza se construye con cada decisión y permanece mucho después de una operación.
            </p>
            <p>
              Para mí, una relación profesional no termina cuando se firma. Estas historias hablan de clientes que, con el tiempo, siguieron confiando en mí para nuevas decisiones, nuevos proyectos y para cuidar aquello que habían confiado a mis manos.
            </p>
          </div>
        </div>
      </div>

      {/* 2. HISTORIAS REALES (ÚNICAS Y DEFINITIVAS) */}
      <div className="divide-y divide-[#E8E2D5]">
        
        {/* ========================================================
            HISTORIA 1: TONY, RAQUEL E IFFY
            ======================================================== */}
        <section id="tony-raquel-iffy" className="py-16 sm:py-24 bg-[#FBF9F3]">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="bg-[#F5F2EA] border border-[#E8E2D5] p-8 sm:p-12 lg:p-14">
              
              {/* Encabezado del caso */}
              <div className="border-b border-[#E8E2D5] pb-6 mb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <span className="text-[11px] font-sans font-semibold text-[#D4AF37] uppercase tracking-[0.2em] block mb-1">
                    01 · INVERSIÓN & GESTIÓN CONTINUADA
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#24211D]">
                    Tony, Raquel e Iffy
                  </h2>
                </div>
                <span className="text-sm text-[#5C574E] font-sans font-medium">
                  Inversores · Reino Unido
                </span>
              </div>

              {/* Narrativa de la historia */}
              <div className="space-y-5 text-base text-[#4A463F] leading-relaxed font-sans font-normal">
                <p>
                  Cuando conocí a Tony y Raquel buscaban invertir en la Costa Dorada. Durante una visita entendí que la vivienda que estaban viendo no era la mejor opción para ellos.
                </p>
                <p>
                  Escuché cuáles eran sus objetivos y les propuse una alternativa completamente distinta. En lugar de comprar una gran casa para reformar, terminaron adquiriendo una vivienda mucho más adecuada para su proyecto de inversión.
                </p>
                <p>
                  Era una decisión menos evidente, pero también la más acertada para ellos.
                </p>
                <p>
                  Los años pasaron y volvieron a confiar en mí para gestionar el alquiler de esa misma propiedad.
                </p>
                <p>
                  Más tarde, Tony me presentó a su hermana, Iffy, para acompañarla en la búsqueda de su primera inversión inmobiliaria en España.
                </p>
                <p>
                  Para mí, esa recomendación tiene un valor especial. No porque llegara un nuevo cliente, sino porque confirmó algo en lo que siempre he creído: cuando el asesoramiento se basa en la honestidad y en poner los intereses del cliente por delante, la confianza permanece y acaba recomendándote por sí sola.
                </p>
              </div>

              {/* Reseñas Reales en Google asociadas a esta historia */}
              <div className="mt-12 pt-8 border-t border-[#E8E2D5] space-y-6">
                <span className="text-xs font-sans font-semibold text-[#D4AF37] uppercase tracking-[0.2em] block">
                  RESEÑAS REALES DE ESTA EXPERIENCIA
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Reseña de Tony */}
                  <div className="bg-[#FBF9F3] border border-[#E8E2D5] p-6 sm:p-7 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Quote className="w-5 h-5 text-[#D4AF37]" />
                        <div className="flex text-[#D4AF37] text-xs tracking-wider" aria-label="5 estrellas">
                          ★★★★★
                        </div>
                      </div>
                      <p className="text-sm text-[#4A463F] font-sans leading-relaxed italic">
                        «Con Valeria, la experiencia ha sido inmejorable. Nos ayudó con todo: desde la selección del propietario y la búsqueda de inquilinos hasta todos los aspectos legales. Gracias, Valeria. Estamos muy contentos y la recomendamos al 100 %. »
                      </p>
                    </div>

                    <div className="pt-5 mt-6 border-t border-[#E8E2D5] flex items-center justify-between">
                      <div>
                        <h4 className="font-serif text-sm font-semibold text-[#24211D]">
                          Anags A (Tony)
                        </h4>
                        <span className="text-[11px] text-[#5C574E] font-sans">
                          Reseña en Google
                        </span>
                      </div>
                      <span className="text-[10px] uppercase font-sans tracking-wider px-2 py-0.5 bg-[#F5F2EA] border border-[#E8E2D5] text-[#5C574E]">
                        Verificada
                      </span>
                    </div>
                  </div>

                  {/* Reseña de Iffy */}
                  <div className="bg-[#FBF9F3] border border-[#E8E2D5] p-6 sm:p-7 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Quote className="w-5 h-5 text-[#D4AF37]" />
                        <div className="flex text-[#D4AF37] text-xs tracking-wider" aria-label="5 estrellas">
                          ★★★★★
                        </div>
                      </div>
                      <p className="text-sm text-[#4A463F] font-sans leading-relaxed italic">
                        «Valeria es una profesional excepcional que trabaja con verdadera dedicación por sus clientes. Cuenta con una amplia red de contactos que pone al servicio de cada proyecto para encontrar la propiedad más adecuada. Es una persona en la que se puede confiar y está profundamente comprometida con ofrecer un servicio excelente. La recomiendo tanto para encontrar una propiedad como para acompañar todo el proceso y la burocracia asociada. Es una gran aliada.»
                      </p>
                    </div>

                    <div className="pt-5 mt-6 border-t border-[#E8E2D5] flex items-center justify-between">
                      <div>
                        <h4 className="font-serif text-sm font-semibold text-[#24211D]">
                          Iffy Anagor
                        </h4>
                        <span className="text-[11px] text-[#5C574E] font-sans">
                          Reseña en Google
                        </span>
                      </div>
                      <span className="text-[10px] uppercase font-sans tracking-wider px-2 py-0.5 bg-[#F5F2EA] border border-[#E8E2D5] text-[#5C574E]">
                        Verificada
                      </span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ========================================================
            HISTORIA 2: MARCO (PACO)
            ======================================================== */}
        <section id="marco-paco" className="py-16 sm:py-24 bg-[#F5F2EA]">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="bg-[#FBF9F3] border border-[#E8E2D5] p-8 sm:p-12 lg:p-14">
              
              {/* Encabezado del caso */}
              <div className="border-b border-[#E8E2D5] pb-6 mb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <span className="text-[11px] font-sans font-semibold text-[#D4AF37] uppercase tracking-[0.2em] block mb-1">
                    02 · VENTA & ACOMPAÑAMIENTO CONTINUADO
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#24211D]">
                    Marco (Paco)
                  </h2>
                </div>
                <span className="text-sm text-[#5C574E] font-sans font-medium">
                  Propietario · Cubelles
                </span>
              </div>

              {/* Narrativa de la historia */}
              <div className="space-y-5 text-base text-[#4A463F] leading-relaxed font-sans font-normal">
                <p>
                  Cuando Paco decidió vender su vivienda, trabajamos juntos para prepararla y presentarla de la mejor manera posible.
                </p>
                <p>
                  Definimos una estrategia, cuidamos cada detalle de la presentación y acompañé todo el proceso hasta la venta.
                </p>
                <p>
                  Pero lo más importante no fue la operación.
                </p>
                <p>
                  Seis años después seguimos trabajando juntos. Ha vuelto a confiar en mí para nuevos proyectos, consulta conmigo decisiones relacionadas con sus propiedades y, lo que más valoro, sigue recomendándome a familiares y amigos.
                </p>
                <p>
                  Para mí, esa continuidad significa mucho más que una venta. Es la tranquilidad de saber que la confianza se mantiene incluso cuando la operación ya forma parte del pasado.
                </p>
              </div>

              {/* Reseña Real en Google */}
              <div className="mt-12 pt-8 border-t border-[#E8E2D5]">
                <span className="text-xs font-sans font-semibold text-[#D4AF37] uppercase tracking-[0.2em] block mb-6">
                  RESEÑA REAL
                </span>

                <div className="bg-[#F5F2EA] border border-[#E8E2D5] p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-5 h-5 text-[#D4AF37]" />
                    <div className="flex text-[#D4AF37] text-xs tracking-wider" aria-label="5 estrellas">
                      ★★★★★
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-[#4A463F] font-sans leading-relaxed italic">
                    «Valeria es una profesional como pocas,se encarga de todo,tanto de buscarte lo que necesites como alquilarlo o comprarlo o reformarlo incluso, asesora muy bien a la gente, profesional.Muy Recomendable y Profesional de Máster.»
                  </p>
                  <div className="pt-5 mt-6 border-t border-[#E8E2D5] flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-base font-semibold text-[#24211D]">
                        Marco Ramirez
                      </h4>
                      <span className="text-[11px] text-[#5C574E] font-sans">
                        Reseña en Google
                      </span>
                    </div>
                    <span className="text-[10px] uppercase font-sans tracking-wider px-2 py-0.5 bg-[#FBF9F3] border border-[#E8E2D5] text-[#5C574E]">
                      Verificada
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ========================================================
            HISTORIA 3: AMALIA
            ======================================================== */}
        <section id="amalia" className="py-16 sm:py-24 bg-[#FBF9F3]">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="bg-[#F5F2EA] border border-[#E8E2D5] p-8 sm:p-12 lg:p-14">
              
              {/* Encabezado del caso */}
              <div className="border-b border-[#E8E2D5] pb-6 mb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <span className="text-[11px] font-sans font-semibold text-[#D4AF37] uppercase tracking-[0.2em] block mb-1">
                    03 · GESTIÓN INTEGRAL & TRANQUILIDAD A DISTANCIA
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#24211D]">
                    Amalia
                  </h2>
                </div>
                <span className="text-sm text-[#5C574E] font-sans font-medium">
                  Propietaria · Madrid
                </span>
              </div>

              {/* Narrativa de la historia */}
              <div className="space-y-5 text-base text-[#4A463F] leading-relaxed font-sans font-normal">
                <p>
                  Gestionar una vivienda desde otra ciudad requiere algo más que encontrar un buen inquilino.
                </p>
                <p>
                  Requiere la tranquilidad de saber que alguien cuida tu propiedad como si fuera propia.
                </p>
                <p>
                  Amalia vive en Madrid y confía en mí para gestionar el alquiler de su vivienda en Vilanova i la Geltrú.
                </p>
                <p>
                  Me encargo de la selección del inquilino, la documentación, los aspectos legales y el seguimiento de todo el proceso para que no tenga que preocuparse por nada.
                </p>
                <p>
                  Nuestra relación continúa porque entiende que mi trabajo no termina con la firma del contrato.
                </p>
                <p>
                  Sigue cada vez que surge una duda, una gestión o una decisión importante sobre su vivienda.
                </p>
                <p>
                  La verdadera tranquilidad no consiste en delegar una propiedad. Consiste en saber que siempre habrá alguien al otro lado cuando lo necesites.
                </p>
              </div>

              {/* Reseña Real en Google */}
              <div className="mt-12 pt-8 border-t border-[#E8E2D5]">
                <span className="text-xs font-sans font-semibold text-[#D4AF37] uppercase tracking-[0.2em] block mb-6">
                  RESEÑA REAL
                </span>

                <div className="bg-[#FBF9F3] border border-[#E8E2D5] p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-5 h-5 text-[#D4AF37]" />
                    <div className="flex text-[#D4AF37] text-xs tracking-wider" aria-label="5 estrellas">
                      ★★★★★
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-[#4A463F] font-sans leading-relaxed italic">
                    «Estoy encantada con el encargo de alquiler que hice para un apartamento en Vilanova i la Geltrú. Valeria, muy comprometida con el cliente, concienzuda con la gestión del alquiler y atenta en todo momento a los aspectos legales e incluso materiales que evitan problemas futuros tanto para el arrendador como para el inquilino. ¡Cinco estrellas para Golden Coast!»
                  </p>
                  <div className="pt-5 mt-6 border-t border-[#E8E2D5] flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-base font-semibold text-[#24211D]">
                        Amalia Julián
                      </h4>
                      <span className="text-[11px] text-[#5C574E] font-sans">
                        Reseña en Google
                      </span>
                    </div>
                    <span className="text-[10px] uppercase font-sans tracking-wider px-2 py-0.5 bg-[#F5F2EA] border border-[#E8E2D5] text-[#5C574E]">
                      Verificada
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ========================================================
            HISTORIA 4: DIANA
            ======================================================== */}
        <section id="diana" className="py-16 sm:py-24 bg-[#F5F2EA]">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="bg-[#FBF9F3] border border-[#E8E2D5] p-8 sm:p-12 lg:p-14">
              
              {/* Encabezado del caso */}
              <div className="border-b border-[#E8E2D5] pb-6 mb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <span className="text-[11px] font-sans font-semibold text-[#D4AF37] uppercase tracking-[0.2em] block mb-1">
                    04 · COMPRA & CUIDADO PERMANENTE
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#24211D]">
                    Diana
                  </h2>
                </div>
                <span className="text-sm text-[#5C574E] font-sans font-medium">
                  Propietaria · Alemania
                </span>
              </div>

              {/* Versión Principal: Historia Narrativa en Español */}
              <div className="space-y-5 text-base text-[#4A463F] leading-relaxed font-sans font-normal">
                <p>
                  Hay personas en las que confías desde el primer momento. Para nosotros, Valeria es exactamente una de esas personas.
                </p>
                <p>
                  No se limitó a ayudarnos a comprar una casa; nos ayudó a encontrar un lugar en el que pudiéramos sentirnos como en casa desde el primer día. Con su cercanía, su honestidad y su extraordinaria capacidad para entender a las personas, nos acompañó durante todo el proceso de compra y estuvo siempre presente, orientada a encontrar soluciones y siendo absolutamente fiable.
                </p>
                <p>
                  Precisamente porque comprábamos la casa en España, su apoyo fue de un valor incalculable para nosotros. Encontró soluciones junto a nosotros, organizó un intérprete, nos acompañó con mucho tacto en las negociaciones con los vendedores, negoció de manera justa tanto el precio de la propiedad como el de los muebles que queríamos adquirir y posteriormente nos puso en contacto con profesionales y colaboradores locales de confianza. Nunca tuvimos la sensación de estar solos.
                </p>
                <p>
                  Lo que hace especialmente valiosa a Valeria es que su acompañamiento no termina con la entrega de las llaves. Incluso hoy sigue cuidando nuestra casa con la misma atención, responsabilidad y dedicación. Como no estamos permanentemente allí, para nosotros es una tranquilidad enorme saber que nuestro hogar está en las mejores manos.
                </p>

                {/* Cita Editorial Destacada */}
                <div className="my-8 py-5 px-6 sm:px-8 bg-[#F5F2EA] border-l-2 border-[#D4AF37]">
                  <blockquote className="font-serif text-lg sm:text-xl text-[#24211D] italic leading-snug">
                    “La confianza no se puede comprar; hay que ganársela. Valeria consigue precisamente eso. Con verdadera dedicación, profesionalidad y una calidez humana que pocas veces se encuentra.”
                  </blockquote>
                </div>

                <p>
                  A quien busque una profesional que piense mucho más allá de lo habitual y que dé tanta importancia a las personas como a las propiedades, puedo recomendar a Valeria de todo corazón.
                </p>
              </div>

              {/* Testimonio Original en Alemán */}
              <div className="mt-12 pt-8 border-t border-[#E8E2D5]">
                <span className="text-xs font-sans font-semibold text-[#D4AF37] uppercase tracking-[0.2em] block mb-4">
                  TESTIMONIO ORIGINAL EN ALEMÁN
                </span>

                <div className="bg-[#F5F2EA] border border-[#E8E2D5] p-6 sm:p-8 space-y-4 text-sm text-[#4A463F] leading-relaxed font-sans">
                  <p>Es gibt Menschen, denen man vom ersten Moment an vertraut. Für uns ist Valeria genau so ein Mensch.</p>
                  <p>Sie hat uns nicht einfach ein Haus vermittelt – sie hat uns geholfen, einen Ort zu finden, an dem wir uns vom ersten Tag an zuhause fühlen konnten. Mit ihrer Herzlichkeit, ihrer Ehrlichkeit und ihrem außergewöhnlichen Gespür für Menschen hat sie uns durch den gesamten Kaufprozess begleitet und war dabei jederzeit präsent, lösungsorientiert und verlässlich.</p>
                  <p>Gerade weil wir das Haus in Spanien gekauft haben, war ihre Unterstützung für uns von unschätzbarem Wert. Sie hat gemeinsam mit uns Lösungen gefunden, einen Dolmetscher organisiert, die Verhandlungen mit den Verkäufern mit viel Fingerspitzengefühl begleitet, den Preis für die Immobilie sowie für die Möbel, die wir übernehmen wollten, fair verhandelt und uns anschließend mit zuverlässigen Handwerkern und lokalen Ansprechpartnern vernetzt. Dabei hatten wir nie das Gefühl, auf uns allein gestellt zu sein.</p>
                  <p>Was Valeria besonders macht, ist, dass ihre Begleitung nicht mit der Schlüsselübergabe endet. Auch heute kümmert sie sich um unser Haus mit derselben Sorgfalt, Verantwortung und Aufmerksamkeit. Da wir nicht dauerhaft vor Ort sind, ist es für uns ein unschätzbares Gefühl zu wissen, dass unser Zuhause in den besten Händen ist.</p>
                  <p>Vertrauen kann man nicht kaufen – man muss es sich verdienen. Valeria schafft genau das. Mit echter Hingabe, Professionalität und einer Herzenswärme, die man selten findet.</p>
                  <p>Wer eine Maklerin sucht, die weit über das Übliche hinausdenkt und Menschen ebenso wichtig nimmt wie Immobilien, dem kann ich Valeria aus tiefster Überzeugung empfehlen.</p>
                  <p className="text-base select-none">🙏🏼🌸☀️</p>
                  <p className="font-medium text-[#24211D] pt-1">Diana Schepmann</p>
                </div>
              </div>

              {/* Acreditación Transparente: Testimonio Recibido Directamente */}
              <div className="pt-6 mt-8 border-t border-[#E8E2D5] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans">
                <span className="text-[#5C574E]">Costa Dorada · Acompañamiento continuado</span>
                <div className="text-left sm:text-right">
                  <span className="text-[#24211D] font-medium block">Testimonio recibido directamente</span>
                  <span className="text-[#5C574E] text-[11px] block">Diana Schepmann</span>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

      {/* 3. BLOQUE FINAL DE ASESORAMIENTO */}
      <section className="py-20 bg-[#FBF9F3] border-t border-[#E8E2D5]">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-5">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.24em] uppercase block">
            ACOMPAÑAMIENTO PERSONALIZADO
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif text-[#24211D]">
            La tranquilidad de estar en buenas manos
          </h3>
          <p className="text-base text-[#4A463F] leading-relaxed font-sans font-normal">
            Cada decisión inmobiliaria merece cercanía, rigor técnico y un compromiso sincero antes, durante y mucho después de la firma.
          </p>
          <div className="pt-4">
            <button
              onClick={() => openConsultation('general')}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-colors cursor-pointer shadow-xs"
            >
              <span>Conversar con Valeria</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
