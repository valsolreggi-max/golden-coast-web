import React from 'react';
import { BRAND_IMAGES } from '../../data/images';
import { ArrowRight, ArrowDown, MapPin } from 'lucide-react';

interface EditorialTerritorySectionProps {
  onOpenTerritoryModal: (zone?: string) => void;
}

interface LocalityItem {
  id: string;
  name: string;
  headline: string;
  paragraphs: string[];
  idealPara: string;
  previewTag: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
}

const LOCALITIES: LocalityItem[] = [
  {
    id: 'sitges',
    name: 'SITGES',
    headline: 'Cosmopolita, mediterránea y con una identidad propia',
    previewTag: 'Cosmopolita & cultural',
    image: BRAND_IMAGES.sitges,
    imageAlt: 'Escultura de bronce frente a la bahía y el paseo marítimo de Sitges',
    imageCaption: 'Sitges · Paseo marítimo, arte y arquitectura',
    paragraphs: [
      'Sitges tiene una personalidad difícil de reproducir en otro lugar.',
      'Es una localidad mediterránea con una fuerte presencia internacional, donde conviven el mar, la cultura, la arquitectura, la gastronomía y una intensa vida social durante todo el año.',
      'Destaca especialmente por su fuerte identidad LGTBIQ+, que forma parte de la personalidad contemporánea de Sitges y de su reconocimiento internacional.',
      'Pero Sitges es mucho más que su vida social. Sus calles, sus playas, sus restaurantes, sus galerías, sus festivales y su patrimonio cultural crean una combinación muy particular: un lugar que puede sentirse animado y cosmopolita y, al mismo tiempo, íntimo y mediterráneo.',
      'La comunidad internacional tiene además una presencia muy significativa, algo que se percibe en la vida cotidiana, la gastronomía, los servicios y el carácter abierto de la localidad.',
      'Para quien busca vivir cerca del mar y quiere una localidad con carácter, diversidad, actividad y una identidad propia, Sitges ofrece algo difícil de encontrar en los municipios vecinos.',
    ],
    idealPara:
      'quienes buscan un estilo de vida mediterráneo, internacional y culturalmente activo, sin renunciar a la posibilidad de encontrar también tranquilidad y vida residencial.',
  },
  {
    id: 'vilanova-i-la-geltru',
    name: 'VILANOVA I LA GELTRÚ',
    headline: 'Ciudad mediterránea, marinera y con vida propia',
    previewTag: 'Marinera & servicios',
    image: BRAND_IMAGES.vilanova,
    imageAlt: 'Calle peatonal con plantas y bicicleta en Vilanova i la Geltrú',
    imageCaption: 'Vilanova i la Geltrú · Paseos peatonales y ambiente local',
    paragraphs: [
      'Vilanova i la Geltrú tiene una dimensión diferente.',
      'Es una ciudad mediterránea con servicios, comercio, cultura y actividad durante todo el año, pero mantiene una relación muy estrecha con el mar y con su tradición marinera.',
      'Su puerto, sus playas y su gastronomía forman parte esencial de su identidad. La ciudad combina la actividad propia de una población de mayor tamaño con la cercanía y la escala de una localidad costera.',
      'Aquí es posible desarrollar una vida cotidiana completa sin depender de otra ciudad: colegios, comercios, restaurantes, actividades culturales, deporte y servicios forman parte de su día a día.',
      'Al mismo tiempo, el mar sigue estando muy presente. El puerto, la tradición pesquera y la gastronomía vinculada al Mediterráneo forman parte de la personalidad de Vilanova.',
      'Es una opción especialmente interesante para quienes quieren vivir junto al mar sin renunciar a la sensación de estar en una ciudad real, con actividad durante todo el año.',
    ],
    idealPara:
      'familias, profesionales y compradores que buscan una residencia habitual junto al mar, con servicios, actividad y una vida local consolidada.',
  },
  {
    id: 'cubelles',
    name: 'CUBELLES',
    headline: 'Mediterráneo tranquilo y vida familiar',
    previewTag: 'Tranquilidad & espacios',
    image: BRAND_IMAGES.cubelles,
    imageAlt: 'Playa abierta y entorno costero familiar en Cubelles',
    imageCaption: 'Cubelles · Playas amplias y entorno natural',
    paragraphs: [
      'Cubelles marca un cambio de ritmo.',
      'Aquí el Mediterráneo se vive de una manera más pausada. Sus playas, su entorno natural y su escala más tranquila hacen que sea especialmente atractiva para quienes buscan espacio, calma y una vida familiar.',
      'El municipio combina el litoral con espacios naturales y un núcleo histórico que conserva una identidad propia.',
      'No necesita competir con Sitges ni con Vilanova. Su atractivo está precisamente en otra cosa: tener el mar cerca sin necesitar que todo suceda alrededor.',
      'Es una localidad donde el espacio exterior, la tranquilidad y la posibilidad de disfrutar de una vida cotidiana sencilla adquieren especial importancia.',
      'Para muchas familias, esa combinación puede ser más interesante que vivir en una localidad con una actividad social mucho más intensa.',
    ],
    idealPara:
      'familias, quienes buscan tranquilidad, compradores que valoran el espacio exterior y personas que prefieren un estilo de vida mediterráneo más relajado.',
  },
  {
    id: 'cunit',
    name: 'CUNIT',
    headline: 'Una forma sencilla y tranquila de vivir junto al mar',
    previewTag: 'Calas & vida sencilla',
    image: BRAND_IMAGES.cunit,
    imageAlt: 'Huellas en la arena húmeda junto a la orilla del mar en Cunit',
    imageCaption: 'Cunit · Calas apacibles y calma en el litoral',
    paragraphs: [
      'Cunit continúa ese carácter residencial y familiar, pero con una personalidad propia.',
      'Su litoral tiene una configuración muy característica y su relación con el mar forma parte de la vida cotidiana, mientras que hacia el interior aparecen zonas de montaña y espacios naturales.',
      'Cunit tiene ese equilibrio que muchas personas buscan cuando quieren trasladarse a la costa: mar cerca, vida tranquila y un entorno que invita a bajar el ritmo.',
      'Es una localidad especialmente adecuada para quienes no necesitan una gran oferta urbana a la puerta de casa y valoran, en cambio, poder disfrutar del exterior, de la playa y de un entorno residencial más pausado.',
      'Su proximidad a otras localidades permite además acceder fácilmente a una oferta más amplia de servicios, comercio y ocio cuando se necesita.',
      'No intenta ser Sitges ni Vilanova. Su atractivo está precisamente en ofrecer otra manera de vivir el Mediterráneo.',
    ],
    idealPara:
      'familias, quienes buscan una segunda residencia tranquila o compradores que valoran una relación sencilla y cotidiana con el mar y la naturaleza.',
  },
  {
    id: 'segur-de-calafell',
    name: 'SEGUR DE CALAFELL',
    headline: 'Mar, puerto y una vida mediterránea activa',
    previewTag: 'Náutica & dinamismo',
    image: BRAND_IMAGES.segurDeCalafell,
    imageAlt: 'Barca de pesca tradicional sobre la arena dorada en Segur de Calafell',
    imageCaption: 'Segur de Calafell · Puerto deportivo y tradición marinera',
    paragraphs: [
      'Al entrar en Segur de Calafell cambia nuevamente el ambiente.',
      'El puerto deportivo introduce una dimensión náutica muy marcada, con restaurantes, servicios, comercios y actividades alrededor del mar.',
      'La localidad combina esa vida vinculada al puerto con playas, paseos y un ambiente más activo que el de Cubelles o Cunit.',
      'Aquí el Mediterráneo no es solamente paisaje. También es una parte activa de la vida social: salir a comer, navegar, practicar deporte, pasear por el puerto o disfrutar de las actividades que se desarrollan alrededor de él.',
      'Segur de Calafell ofrece así un punto intermedio interesante: mantiene un carácter residencial y familiar, pero incorpora más movimiento, más actividad y una mayor presencia de la vida náutica.',
    ],
    idealPara:
      'compradores que buscan una vida costera activa, amantes del mar y la náutica, familias y quienes quieren combinar tranquilidad residencial con una mayor oferta de ocio y gastronomía.',
  },
  {
    id: 'calafell',
    name: 'CALAFELL',
    headline: 'Mediterráneo, gastronomía y variedad',
    previewTag: 'Gastronomía & variedad',
    image: BRAND_IMAGES.calafell,
    imageAlt: 'Paseo marítimo con palmeras y terrazas en Calafell',
    imageCaption: 'Calafell · Paseo marítimo, palmeras y vida costera',
    paragraphs: [
      'Calafell ofrece uno de los perfiles más completos del recorrido.',
      'Tiene playa y vida costera, pero también patrimonio, gastronomía, comercio, deporte y diferentes zonas residenciales que se extienden hacia el interior.',
      'Su identidad gastronómica está especialmente vinculada al mar y a la tradición pesquera. La cocina local y los restaurantes forman parte importante de la vida del municipio.',
      'Pero Calafell no se limita a la costa. Su patrimonio, sus zonas de montaña, las actividades deportivas y las diferentes áreas residenciales permiten encontrar estilos de vida bastante distintos dentro del mismo municipio.',
      'Esa variedad es precisamente uno de sus atractivos.',
      'Es una localidad más dinámica que Cubelles o Cunit, pero sin alcanzar la dimensión urbana de Vilanova i la Geltrú.',
    ],
    idealPara:
      'quienes buscan variedad, servicios, gastronomía, playa y actividades durante todo el año, sin renunciar a un entorno mediterráneo.',
  },
];

export const EditorialTerritorySection: React.FC<EditorialTerritorySectionProps> = ({
  onOpenTerritoryModal,
}) => {
  const scrollToLocality = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="zonas" className="py-16 sm:py-24 bg-[#F5F2EA] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Eyebrow */}
        <div className="mb-4">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
            ZONAS · GOLDEN COAST
          </span>
        </div>

        {/* 2-Column Spread: Intro & Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Left Column: Heading & Editorial Text */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211D] leading-[1.15] tracking-tight">
              Vivir entre el Garraf y la Costa Dorada
            </h1>

            <div className="space-y-4 text-base text-[#4A463F] leading-relaxed font-sans font-normal pt-2">
              <p>
                No todas las localidades de este tramo del Mediterráneo ofrecen lo mismo.
              </p>
              <p>
                En pocos kilómetros cambia el ritmo de vida, la relación con el mar, el entorno, el tipo de vivienda y la actividad durante todo el año.
              </p>
              <p>
                En Golden Coast entendemos las zonas desde la experiencia de vivirlas, no solamente desde un mapa. Cada localidad tiene una personalidad diferente y puede responder a necesidades muy distintas.
              </p>
              <p>
                Por eso, antes de elegir una propiedad, creemos que es importante entender cómo se vive en cada lugar y qué tipo de vida permite construir allí.
              </p>
            </div>
          </div>

          {/* Right Column: Mediterranean Lifestyle & Architecture Photo */}
          <div className="lg:col-span-6">
            <div className="border border-[#E8E2D5] p-2.5 sm:p-3.5 bg-[#FBF9F3] shadow-xs">
              <img
                src={BRAND_IMAGES.zonasGeneral}
                alt="Vivir entre el Garraf y la Costa Dorada · Zonas Golden Coast"
                className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="mt-2.5 text-[11px] font-sans text-[#5C574E] tracking-wider uppercase flex justify-between">
                <span>Café frente al mar · Zonas</span>
                <span>Garraf & Costa Dorada</span>
              </div>
            </div>
          </div>

        </div>

        {/* 6 Zones Symmetrical Grid / Jump Navigation */}
        <div className="border-t border-[#E8E2D5] pt-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-xs font-sans font-semibold tracking-[0.2em] uppercase text-[#D4AF37]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Explora las 6 localidades</span>
            </div>
            <span className="text-xs font-sans text-[#5C574E] tracking-wider uppercase">
              Acceso directo
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCALITIES.map((loc) => (
              <a
                key={loc.id}
                href={`#${loc.id}`}
                onClick={(e) => scrollToLocality(e, loc.id)}
                className="bg-[#FBF9F3] border border-[#E8E2D5] hover:border-[#D4AF37] transition-colors cursor-pointer group flex flex-col justify-between overflow-hidden shadow-xs"
              >
                <div className="relative h-44 sm:h-48 w-full overflow-hidden border-b border-[#E8E2D5] bg-[#E8E2D5]/30">
                  <img
                    src={loc.image}
                    alt={loc.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-[#24211D]/80 backdrop-blur-xs text-[#FBF9F3] text-[10px] uppercase font-sans font-semibold tracking-wider px-2.5 py-1">
                    {loc.previewTag}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-2xl font-serif text-[#24211D] group-hover:text-[#8FA777] transition-colors">
                        {loc.name}
                      </h2>
                      <ArrowDown className="w-4 h-4 text-[#D4AF37] opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all" />
                    </div>
                    <p className="text-xs sm:text-sm text-[#5C574E] leading-relaxed font-sans font-normal">
                      {loc.headline}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#E8E2D5]/70 flex items-center justify-between gap-2 text-xs font-sans">
                    <span className="text-[#5C574E] font-medium tracking-wider uppercase inline-flex items-center gap-1.5 group-hover:text-[#8FA777] transition-colors">
                      <span>Ver detalles de la zona</span>
                      <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                    </span>
                    <span className="text-[11px] text-[#D4AF37] font-semibold uppercase tracking-wider">
                      Explorar ↓
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* DESARROLLO DE LAS SEIS LOCALIDADES */}
        <div className="mt-16 sm:mt-24 space-y-12 sm:space-y-16">
          {LOCALITIES.map((loc) => (
            <div
              key={loc.id}
              id={loc.id}
              className="scroll-mt-28 p-8 sm:p-10 lg:p-12 bg-[#FBF9F3] border border-[#E8E2D5] shadow-xs"
            >
              {/* Eyebrow / Town name */}
              <div className="mb-3">
                <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
                  {loc.name}
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#24211D] leading-snug tracking-tight mb-8">
                {loc.headline}
              </h2>

              {/* Grid: Left Narrative + Right Zone Photography */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-8">
                {/* Left Column: Narrative paragraphs & Ideal para */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-4 text-base text-[#4A463F] leading-relaxed font-sans font-normal">
                    {loc.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {/* Ideal para */}
                  <div className="p-5 bg-[#F5F2EA] border border-[#E8E2D5]/80">
                    <p className="text-xs sm:text-sm text-[#24211D] leading-relaxed font-sans font-normal">
                      <strong className="text-[#8FA777] font-semibold">Ideal para:</strong>{' '}
                      <span className="text-[#4A463F]">{loc.idealPara}</span>
                    </p>
                  </div>
                </div>

                {/* Right Column: Framed Zone Photography */}
                <div className="lg:col-span-5">
                  <div className="border border-[#E8E2D5] p-2.5 sm:p-3 bg-[#F5F2EA] shadow-xs sticky top-28">
                    <img
                      src={loc.image}
                      alt={loc.imageAlt}
                      className="w-full h-[260px] sm:h-[320px] lg:h-[360px] object-cover object-center"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="mt-2.5 text-[11px] font-sans text-[#5C574E] tracking-wider uppercase flex justify-between items-center">
                      <span className="truncate pr-2">{loc.imageCaption}</span>
                      <span className="shrink-0 text-[#D4AF37] font-semibold">{loc.name}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation / Contact Link without replacing access to zone content */}
              <div className="pt-6 border-t border-[#E8E2D5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-[#5C574E] font-serif italic">
                  ¿Te interesa esta localidad para vivir, alquilar o invertir?
                </p>
                <button
                  onClick={() => onOpenTerritoryModal(loc.name)}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] active:bg-[#D4AF37] active:border-[#D4AF37] active:text-[#24211D] transition-colors cursor-pointer group shadow-xs whitespace-nowrap"
                >
                  <span>Consultar sobre {loc.name}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* EL TERRITORIO GOLDEN COAST */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-10 lg:p-12 bg-[#FBF9F3] border border-[#E8E2D5] shadow-xs">
          <div className="mb-4">
            <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
              EL TERRITORIO GOLDEN COAST
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#24211D] leading-snug tracking-tight mb-6">
            Seis localidades. Seis maneras diferentes de vivir el Mediterráneo.
          </h2>

          <div className="space-y-4 text-base text-[#4A463F] leading-relaxed font-sans font-normal max-w-3xl">
            <p>
              Desde la personalidad cosmopolita de Sitges, pasando por la dimensión urbana y marinera de Vilanova i la Geltrú, hasta la tranquilidad residencial de Cubelles y Cunit, el territorio cambia poco a poco.
            </p>
            <p>
              Después, en Segur de Calafell y Calafell, aparece un Mediterráneo algo más activo, con mayor presencia náutica, gastronómica y de ocio.
            </p>
            <p>
              No existe una localidad mejor que otra.
            </p>
            <p>
              Existe una localidad que encaja mejor con cada persona.
            </p>
            <p>
              Y entender esa diferencia es una parte fundamental de nuestro trabajo.
            </p>
            <p>
              En Golden Coast no se trata únicamente de encontrar una propiedad.
            </p>
            <p className="font-serif italic text-lg sm:text-xl text-[#24211D] pt-2">
              Se trata de encontrar el lugar que encaja con la forma de vida que quieres construir.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

