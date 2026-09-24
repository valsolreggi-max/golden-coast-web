import React, { useState } from 'react';
import { GALLERY_PHOTOS, BrandPhoto } from '../../data/images';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const BrandGallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<BrandPhoto | null>(null);

  const categories = [
    { id: 'all', label: 'Todo el archivo' },
    { id: 'interior', label: 'Interiores & Arquitectura' },
    { id: 'coast', label: 'Mar & Litoral' },
    { id: 'lifestyle', label: 'Estilo de Vida' },
    { id: 'territory', label: 'Territorio' },
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category === selectedCategory);

  const handleNext = () => {
    if (!activePhoto) return;
    const currentIndex = GALLERY_PHOTOS.findIndex(p => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % GALLERY_PHOTOS.length;
    setActivePhoto(GALLERY_PHOTOS[nextIndex]);
  };

  const handlePrev = () => {
    if (!activePhoto) return;
    const currentIndex = GALLERY_PHOTOS.findIndex(p => p.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
    setActivePhoto(GALLERY_PHOTOS[prevIndex]);
  };

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-[#F5F2EA] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Eyebrow */}
        <div className="mb-6">
          <span className="text-[#D4AF37] text-xs font-sans font-semibold tracking-[0.22em] uppercase">
            GALERÍA · ARQUITECTURA & MEDITERRÁNEO
          </span>
        </div>

        {/* Header Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211D] leading-[1.15] tracking-tight">
              La mirada visual de Golden Coast.
            </h2>
            <p className="text-base text-[#4A463F] font-sans mt-3">
              Atmósferas, luz natural y arquitectura entre el Garraf y la Costa Dorada.
            </p>
          </div>

          {/* Categories Bar */}
          <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-sans transition-colors cursor-pointer border ${
                  selectedCategory === cat.id
                    ? 'bg-[#8FA777] text-[#FBF9F3] border-[#8FA777]'
                    : 'bg-[#FBF9F3] text-[#5C574E] border-[#E8E2D5] hover:border-[#D4AF37] hover:text-[#24211D]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Symmetrical 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.slice(0, 9).map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="p-3 bg-[#FBF9F3] border border-[#E8E2D5] hover:border-[#D4AF37] transition-colors cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#EAE4D7]">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#24211D]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 bg-[#F5F2EA] text-[#24211D] text-xs font-sans font-semibold tracking-wider uppercase flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ampliar</span>
                  </span>
                </div>
              </div>

              <div className="pt-3 pb-1 flex items-baseline justify-between text-xs font-sans">
                <span className="font-serif text-sm text-[#24211D] font-medium">{photo.title}</span>
                <span className="text-[#D4AF37] text-[11px] uppercase tracking-wider">Ver foto</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-[#24211D]/90 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
          <div className="relative max-w-4xl w-full bg-[#FBF9F3] border border-[#E8E2D5] overflow-hidden flex flex-col">
            
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-3 right-3 z-10 p-2 bg-[#8FA777] text-[#FBF9F3] hover:bg-[#D4AF37] hover:text-[#24211D] transition-colors cursor-pointer"
              title="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Main Image */}
            <div className="relative bg-black flex items-center justify-center min-h-[300px] sm:min-h-[450px]">
              <img
                src={activePhoto.url}
                alt={activePhoto.title}
                className="max-h-[70vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />

              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-[#24211D]/80 hover:bg-[#8FA777] text-[#F5F2EA] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-[#24211D]/80 hover:bg-[#8FA777] text-[#F5F2EA] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Caption bar */}
            <div className="p-4 sm:p-5 bg-[#FBF9F3] border-t border-[#E8E2D5] flex items-center justify-between">
              <div>
                <h4 className="font-serif text-lg text-[#24211D]">{activePhoto.title}</h4>
                <p className="text-xs text-[#5C574E] font-sans mt-0.5">{activePhoto.caption}</p>
              </div>
              <span className="text-[11px] font-sans text-[#D4AF37] uppercase tracking-wider">
                Archivo Golden Coast
              </span>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
