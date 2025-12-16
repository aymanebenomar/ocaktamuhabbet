import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-yellow-600 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Branding / Copyright */}
        <p className="text-center md:text-left mb-2 md:mb-0">
          {t('footer_text')}
        </p>

        {/* Optional Links */}
        <div className="flex space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/menu" className="hover:underline">Menu</a>
          <a href="/reservation" className="hover:underline">Reservation</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
