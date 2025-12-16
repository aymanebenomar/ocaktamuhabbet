import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Menu() {
  const { t } = useTranslation();

  // Example coffee items
  const coffees = [
    { name: 'Espresso', price: '€2.50' },
    { name: 'Latte', price: '€3.50' },
    { name: 'Cappuccino', price: '€3.00' },
    { name: 'Americano', price: '€2.80' },
  ];

  return (
    <section className="py-20 px-4 md:px-20 bg-white">
      <h2 className="text-4xl font-bold mb-10 text-center">{t('menu_title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {coffees.map((coffee, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{coffee.name}</h3>
            <p className="text-lg">{coffee.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
