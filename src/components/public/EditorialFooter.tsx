import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { X, ArrowUp } from 'lucide-react';

interface EditorialFooterProps {
  onOpenConsultation?: () => void;
}

export const EditorialFooter: React.FC<EditorialFooterProps> = () => {
  const [activeLegalTab, setActiveLegalTab] = useState<'aviso' | 'privacidad' | 'cookies' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const territoryList = [
    'Sitges',
    'Vilanova i la Geltrú',
    'Cubelles',
    'Cunit',
    'Segur de Calafell',
    'Calafell',
  ];

  return (
    <footer className="bg-[#8FA777] text-[#F5F2EA] border-t border-[#7E9667] relative">
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-16 sm:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-[#7E9667]/80 items-start">
          
          {/* Columna 1 */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="inline-block">
              <Logo variant="salvia" size="md" />
            </Link>

            <h3 className="font-serif text-lg sm:text-xl text-[#F5F2EA] tracking-wide pt-1">
              GOLDEN COAST · PROPERTY ADVISORY
            </h3>

            <p className="text-sm sm:text-base text-[#F5F2EA]/90 leading-relaxed font-sans font-light max-w-md">
              Asesoramiento inmobiliario personalizado basado en la confianza, el conocimiento pericial del territorio y un acompañamiento continuo que va más allá de la firma.
            </p>
          </div>

          {/* Columna 2 */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-sans uppercase tracking-[0.22em] text-[#D4AF37] font-semibold pb-1 border-b border-[#7E9667]/80">
              Área de Actividad
            </h4>
            <ul className="text-sm text-[#F5F2EA]/90 space-y-2.5 font-sans font-normal">
              {territoryList.map((town) => (
                <li key={town} className="flex items-center gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  <Link
                    to="/zonas"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    {town}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 */}
          <div className="lg:col-span-4 space-y-7">
            {/* Contacto Directo */}
            <div className="space-y-3">
              <h4 className="text-xs font-sans uppercase tracking-[0.22em] text-[#D4AF37] font-semibold pb-1 border-b border-[#7E9667]/80">
                Contacto Directo
              </h4>
              <ul className="text-sm text-[#F5F2EA]/90 space-y-2 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] shrink-0 mt-0.5">•</span>
                  <span>
                    Tel / WhatsApp:{' '}
                    <a
                      href="https://wa.me/34645695194"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D4AF37] underline decoration-[#D4AF37]/50 underline-offset-4 transition-colors"
                    >
                      +34 645 695 194
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] shrink-0 mt-0.5">•</span>
                  <span>
                    Email:{' '}
                    <a
                      href="mailto:realtygoldencoast@gmail.com"
                      className="hover:text-[#D4AF37] underline decoration-[#D4AF37]/50 underline-offset-4 transition-colors"
                    >
                      realtygoldencoast@gmail.com
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] shrink-0 mt-0.5">•</span>
                  <span>Modalidad: Cita previa y atención online</span>
                </li>
              </ul>
            </div>

            {/* Acreditaciones Oficiales */}
            <div className="space-y-3">
              <h4 className="text-xs font-sans uppercase tracking-[0.22em] text-[#D4AF37] font-semibold pb-1 border-b border-[#7E9667]/80">
                Acreditaciones Oficiales
              </h4>
              <ul className="text-sm text-[#F5F2EA]/90 space-y-2 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] shrink-0 mt-0.5">•</span>
                  <span>API (Agente de la Propiedad Inmobiliaria)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] shrink-0 mt-0.5">•</span>
                  <span>Perito Judicial Inmobiliario</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] shrink-0 mt-0.5">•</span>
                  <span>Especialista en Arrendamientos Urbanos y Normativa Catalana</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Línea Final de Cierre */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-[#F5F2EA]/85">
          <div className="text-center md:text-left leading-relaxed">
            <span>© 2026 GOLDEN COAST PROPERTY ADVISORY. Todos los derechos reservados.</span>
            {' | '}
            <button
              type="button"
              onClick={() => setActiveLegalTab('aviso')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer underline md:no-underline md:hover:underline"
            >
              Aviso Legal
            </button>
            {' | '}
            <button
              type="button"
              onClick={() => setActiveLegalTab('privacidad')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer underline md:no-underline md:hover:underline"
            >
              Política de Privacidad
            </button>
            {' | '}
            <button
              type="button"
              onClick={() => setActiveLegalTab('cookies')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer underline md:no-underline md:hover:underline"
            >
              Política de Cookies
            </button>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs text-[#F5F2EA]/80 hover:text-[#D4AF37] transition-colors cursor-pointer shrink-0"
            aria-label="Volver arriba"
          >
            <span>Subir al inicio</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Modal Informativo para Textos Legales */}
      {activeLegalTab && (
        <div
          className="fixed inset-0 z-50 bg-[#24211D]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#FBF9F3] border border-[#E8E2D5] text-[#24211D] max-w-2xl w-full p-6 sm:p-8 relative max-h-[85vh] overflow-y-auto shadow-xl">
            <button
              type="button"
              onClick={() => setActiveLegalTab(null)}
              className="absolute top-5 right-5 text-[#5C574E] hover:text-[#24211D] p-1 cursor-pointer"
              aria-label="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>

            {activeLegalTab === 'aviso' && (
              <div className="space-y-4">
                <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider block">
                  INFORMACIÓN LEGAL
                </span>
                <h3 className="font-serif text-2xl text-[#24211D]">Aviso Legal</h3>
                <div className="text-xs sm:text-sm text-[#4A463F] leading-relaxed space-y-3 font-sans">
                  <p>
                    En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de que este sitio web es propiedad de Golden Coast Property Advisory (Valeria), con actividad profesional en asesoramiento inmobiliario, peritaje judicial y gestión de propiedades en el Garraf y Costa Dorada (Barcelona / Tarragona).
                  </p>
                  <p>
                    Contacto directo:{' '}
                    <a href="mailto:realtygoldencoast@gmail.com" className="text-[#24211D] font-medium underline">
                      realtygoldencoast@gmail.com
                    </a>{' '}
                    | Tel / WhatsApp: +34 645 695 194.
                  </p>
                  <p>
                    Acreditaciones profesionales oficiales: Agente de la Propiedad Inmobiliaria (API) y Perito Judicial Inmobiliario con competencia en normativa catalana de arrendamientos urbanos (LAU).
                  </p>
                </div>
              </div>
            )}

            {activeLegalTab === 'privacidad' && (
              <div className="space-y-4">
                <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider block">
                  PROTECCIÓN DE DATOS
                </span>
                <h3 className="font-serif text-2xl text-[#24211D]">Política de Privacidad</h3>
                <div className="text-xs sm:text-sm text-[#4A463F] leading-relaxed space-y-3 font-sans">
                  <p>
                    De acuerdo con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), los datos personales remitidos a través de los formularios o canales de contacto son tratados con estricta confidencialidad por Golden Coast Property Advisory exclusivamente para responder a su consulta inmobiliaria y prestar los servicios solicitados.
                  </p>
                  <p>
                    No se ceden datos a terceros sin consentimiento expreso previo, salvo obligación legal. Podrá ejercer en todo momento sus derechos de acceso, rectificación, supresión y limitación escribiendo a{' '}
                    <a href="mailto:realtygoldencoast@gmail.com" className="text-[#24211D] font-medium underline">
                      realtygoldencoast@gmail.com
                    </a>.
                  </p>
                </div>
              </div>
            )}

            {activeLegalTab === 'cookies' && (
              <div className="space-y-4">
                <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider block">
                  TRANSPARENCIA DIGITAL
                </span>
                <h3 className="font-serif text-2xl text-[#24211D]">Política de Cookies</h3>
                <div className="text-xs sm:text-sm text-[#4A463F] leading-relaxed space-y-3 font-sans">
                  <p>
                    Este sitio web utiliza únicamente cookies técnicas estrictamente necesarias para garantizar la navegación segura, la correcta visualización tipográfica y el funcionamiento del formulario de contacto. No se emplean cookies invasivas de seguimiento publicitario de terceros.
                  </p>
                  <p>
                    Puede configurar o restringir el uso de cookies en cualquier momento a través de los ajustes de privacidad de su navegador web.
                  </p>
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-[#E8E2D5] text-right">
              <button
                type="button"
                onClick={() => setActiveLegalTab(null)}
                className="px-5 py-2.5 bg-[#8FA777] text-[#FBF9F3] text-xs font-semibold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#24211D] transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
