import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './i18n';
import { ConsultationProvider } from './components/ConsultationContext';
import { EditorialLayout } from './components/layout/EditorialLayout';
import { HomePage } from './pages/HomePage';
import { ServiciosPage } from './pages/ServiciosPage';
import { ZonasPage } from './pages/ZonasPage';
import { SobreMiPage } from './pages/SobreMiPage';
import { TestimoniosPage } from './pages/TestimoniosPage';
import { FAQPage } from './pages/FAQPage';
import { ContactoPage } from './pages/ContactoPage';

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ConsultationProvider>
          <Routes>
            <Route element={<EditorialLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/servicios" element={<ServiciosPage />} />
              <Route path="/zonas" element={<ZonasPage />} />
              <Route path="/sobre-mi" element={<SobreMiPage />} />
              <Route path="/testimonios" element={<TestimoniosPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contacto" element={<ContactoPage />} />
              {/* Fallback route to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </ConsultationProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
