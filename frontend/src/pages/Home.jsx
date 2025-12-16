import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('welcome_message')}</h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-xl">
        {t('home_intro', 'Enjoy our finest coffee and cozy atmosphere.')}
      </p>
      <img
        src="/assets/coffee-home.jpg"
        alt="Coffee"
        className="mt-8 w-full max-w-2xl rounded-lg shadow-lg"
      />
    </section>
  );
}
