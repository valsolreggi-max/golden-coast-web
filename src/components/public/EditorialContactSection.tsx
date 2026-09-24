import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

export const EditorialContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    correoElectronico: '',
    telefonoContacto: '',
    tipoConsulta: 'Quiero vender mi propiedad',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="relative bg-[#F5F2EA] text-[#24211D]">
      
      {/* 1. ENCABEZADO DE CONTACTO (Centrado exacto, tipografía serif elegante coherente con la Home) */}
      <div className="pt-32 sm:pt-40 pb-16 sm:pb-20 border-b border-[#E8E2D5]/80">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
          
          {/* Subtítulo superior */}
          <div className="mb-4 sm:mb-5">
            <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
              GOLDEN COAST PROPERTY ADVISORY
            </span>
          </div>

          {/* Titular principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#24211D] leading-[1.14] tracking-tight mb-6 sm:mb-7 font-normal">
            Contacto · Atención Directa
          </h1>

          {/* Texto descriptivo */}
          <div className="space-y-3 font-sans text-base sm:text-lg text-[#4A463F] leading-relaxed max-w-2xl mx-auto font-light">
            <p>
              Cada proyecto inmobiliario empieza con una conversación.
            </p>
            <p className="text-[#5C574E]">
              Tanto si deseas vender, gestionar tu alquiler o adquirir una propiedad en el Garraf y la Costa Dorada, pongo a tu disposición un asesoramiento cercano, riguroso y personalizado.
            </p>
          </div>

        </div>
      </div>

      {/* 2. GARANTÍA DE SERVICIO (Bloque horizontal sutil de 3 columnas sin tarjetas pesadas ni cajas rígidas) */}
      <div className="py-16 sm:py-20 border-b border-[#E8E2D5]/80">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 md:divide-x md:divide-[#E8E2D5]/80">
            
            {/* Columna 1 */}
            <div className="space-y-3 text-center md:text-left">
              <span className="text-[#D4AF37] text-xs font-sans font-medium tracking-[0.2em] uppercase block">
                01
              </span>
              <h2 className="font-serif text-xl sm:text-2xl text-[#24211D] font-normal leading-snug">
                Sesiones Online & Videollamada
              </h2>
              <p className="font-sans text-sm text-[#5C574E] leading-relaxed font-light">
                Asesoramiento sin desplazamientos. Reuniones por videoconferencia (Google Meet / Zoom) para inversores y propietarios en el extranjero o fuera de Cataluña, con gestión y firma digital avanzada.
              </p>
            </div>

            {/* Columna 2 */}
            <div className="space-y-3 text-center md:text-left md:pl-10 lg:pl-14">
              <span className="text-[#D4AF37] text-xs font-sans font-medium tracking-[0.2em] uppercase block">
                02
              </span>
              <h2 className="font-serif text-xl sm:text-2xl text-[#24211D] font-normal leading-snug">
                Área de Actividad Exclusiva
              </h2>
              <p className="font-sans text-sm text-[#5C574E] leading-relaxed font-light">
                Garraf & Costa Daurada. Especialización local en Sitges, Vilanova i la Geltrú, Cubelles, Cunit, Segur de Calafell y Calafell.
              </p>
            </div>

            {/* Columna 3 */}
            <div className="space-y-3 text-center md:text-left md:pl-10 lg:pl-14">
              <span className="text-[#D4AF37] text-xs font-sans font-medium tracking-[0.2em] uppercase block">
                03
              </span>
              <h2 className="font-serif text-xl sm:text-2xl text-[#24211D] font-normal leading-snug">
                Garantía Pericial & API
              </h2>
              <p className="font-sans text-sm text-[#5C574E] leading-relaxed font-light">
                Doble Check Jurídico. Garantía de cumplimiento estricto de la normativa aplicable (LAU, contención de rentas en Cataluña y normativa turística) en cada operación.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 3. FORMULARIO DE CONSULTA (Minimalista, limpio y sin cajas blancas pesadas) */}
      <div className="py-16 sm:py-24 border-b border-[#E8E2D5]/80">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          
          {/* Título y Subtítulo */}
          <div className="text-center mb-12 sm:mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#24211D] font-normal tracking-tight mb-3">
              Envía tu consulta
            </h2>
            <p className="text-sm text-[#5C574E] font-sans font-light leading-relaxed max-w-lg mx-auto">
              Garantía de confidencialidad, análisis previo y rigor jurídico en cada respuesta.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-5">
              <div className="w-12 h-12 rounded-full bg-[#8FA777]/15 text-[#8FA777] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#24211D] font-normal">
                Consulta enviada correctamente
              </h3>
              <p className="text-sm text-[#5C574E] max-w-md mx-auto leading-relaxed font-sans font-light">
                Gracias por ponerte en contacto. Valeria revisará tu solicitud personalmente a la mayor brevedad.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      nombreCompleto: '',
                      correoElectronico: '',
                      telefonoContacto: '',
                      tipoConsulta: 'Quiero vender mi propiedad',
                      mensaje: '',
                    });
                  }}
                  className="px-7 py-3 bg-[#8FA777] text-[#FBF9F3] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#D4AF37] hover:text-[#24211D] transition-colors cursor-pointer"
                >
                  Enviar otra consulta
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
              {/* Nombre completo * */}
              <div>
                <label className="block text-xs font-sans font-semibold text-[#24211D] uppercase tracking-wider mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nombreCompleto}
                  onChange={(e) => setFormData({ ...formData, nombreCompleto: e.target.value })}
                  placeholder="Tu nombre completo"
                  className="w-full px-4 py-3 bg-[#FAF8F2] border border-[#DCD5C6] text-sm text-[#24211D] focus:outline-none focus:border-[#D4AF37] transition-colors font-sans"
                />
              </div>

              {/* Correo electrónico * y Teléfono de contacto */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-sans font-semibold text-[#24211D] uppercase tracking-wider mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.correoElectronico}
                    onChange={(e) => setFormData({ ...formData, correoElectronico: e.target.value })}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 bg-[#FAF8F2] border border-[#DCD5C6] text-sm text-[#24211D] focus:outline-none focus:border-[#D4AF37] transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold text-[#24211D] uppercase tracking-wider mb-2">
                    Teléfono de contacto
                  </label>
                  <input
                    type="tel"
                    value={formData.telefonoContacto}
                    onChange={(e) => setFormData({ ...formData, telefonoContacto: e.target.value })}
                    placeholder="+34 600 000 000"
                    className="w-full px-4 py-3 bg-[#FAF8F2] border border-[#DCD5C6] text-sm text-[#24211D] focus:outline-none focus:border-[#D4AF37] transition-colors font-sans"
                  />
                </div>
              </div>

              {/* Desplegable "¿En qué puedo ayudarte? (Tipo de consulta) *" */}
              <div>
                <label className="block text-xs font-sans font-semibold text-[#24211D] uppercase tracking-wider mb-2">
                  ¿En qué puedo ayudarte? (Tipo de consulta) *
                </label>
                <select
                  required
                  value={formData.tipoConsulta}
                  onChange={(e) => setFormData({ ...formData, tipoConsulta: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAF8F2] border border-[#DCD5C6] text-sm text-[#24211D] focus:outline-none focus:border-[#D4AF37] transition-colors font-sans cursor-pointer"
                >
                  <option value="Quiero vender mi propiedad">
                    Quiero vender mi propiedad
                  </option>
                  <option value="Quiero gestionar un alquiler (Vacacional, Temporal o Larga Duración)">
                    Quiero gestionar un alquiler (Vacacional, Temporal o Larga Duración)
                  </option>
                  <option value="Quiero comprar una vivienda / Personal Shopper">
                    Quiero comprar una vivienda / Personal Shopper
                  </option>
                  <option value="Servicio de Reubicación (Relocation) en España">
                    Servicio de Reubicación (Relocation) en España
                  </option>
                  <option value="Consulta legal o auditoría de contrato (LAU / Zona Tensionada)">
                    Consulta legal o auditoría de contrato (LAU / Zona Tensionada)
                  </option>
                  <option value="Otros">
                    Otros
                  </option>
                </select>
              </div>

              {/* Mensaje * */}
              <div>
                <label className="block text-xs font-sans font-semibold text-[#24211D] uppercase tracking-wider mb-2">
                  Mensaje *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  placeholder="Cuéntame los detalles de tu consulta o propiedad..."
                  className="w-full px-4 py-3 bg-[#FAF8F2] border border-[#DCD5C6] text-sm text-[#24211D] focus:outline-none focus:border-[#D4AF37] transition-colors resize-y font-sans"
                />
              </div>

              {/* Botón de envío: Enviar consulta */}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto min-w-[220px] py-4 px-9 bg-[#8FA777] border border-[#8FA777] text-[#FBF9F3] text-xs font-sans font-semibold uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#24211D] transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2.5 shadow-xs"
                >
                  <span>Enviar consulta</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}

        </div>
      </div>

      {/* 4. DATOS DIRECTOS DE CONTACTO (Ubicados al final de la página, antes de llegar al footer) */}
      <div className="py-14 sm:py-18">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center md:divide-x md:divide-[#E8E2D5]/70">
            
            {/* Teléfono & WhatsApp */}
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center gap-2 text-[#D4AF37] mb-1">
                <Phone className="w-4 h-4 stroke-[1.75]" />
                <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em]">
                  Teléfono & WhatsApp
                </span>
              </div>
              <div>
                <a
                  href="https://wa.me/34645695194"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-lg sm:text-xl text-[#24211D] hover:text-[#D4AF37] transition-colors block"
                >
                  +34 645 695 194
                </a>
                <span className="text-xs text-[#5C574E] font-sans font-light block mt-1">
                  (Atención directa con Valeria)
                </span>
              </div>
            </div>

            {/* Correo Electrónico */}
            <div className="space-y-2 md:pl-8">
              <div className="inline-flex items-center justify-center gap-2 text-[#D4AF37] mb-1">
                <Mail className="w-4 h-4 stroke-[1.75]" />
                <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em]">
                  Correo Electrónico
                </span>
              </div>
              <div>
                <a
                  href="mailto:realtygoldencoast@gmail.com"
                  className="font-serif text-base sm:text-lg text-[#24211D] hover:text-[#D4AF37] transition-colors break-all block"
                >
                  realtygoldencoast@gmail.com
                </a>
              </div>
            </div>

            {/* Ubicación & Cobertura */}
            <div className="space-y-2 md:pl-8">
              <div className="inline-flex items-center justify-center gap-2 text-[#D4AF37] mb-1">
                <MapPin className="w-4 h-4 stroke-[1.75]" />
                <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em]">
                  Ubicación & Cobertura
                </span>
              </div>
              <div>
                <p className="font-serif text-base sm:text-lg text-[#24211D]">
                  Garraf & Costa Daurada
                </p>
                <span className="text-xs text-[#5C574E] font-sans font-light block mt-1">
                  (Barcelona / Tarragona)
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
