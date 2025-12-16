import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 md:px-20 bg-white">
      <h2 className="text-4xl font-bold mb-10 text-center">{t('contact_title')}</h2>

      <div className="max-w-xl mx-auto space-y-4 text-center">
        <p>📍 123 Coffee Street, Amsterdam</p>
        <p>📞 +31 123 456 789</p>
        <p>✉️ contact@onscafe.nl</p>
      </div>

      {/* Optional Contact Form */}
      <form className="mt-10 max-w-xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
        {['name', 'email', 'message'].map((field) => (
          <div className="mb-4" key={field}>
            <label className="block text-gray-700 mb-2 capitalize">{field}</label>
            {field === 'message' ? (
              <textarea
                name={field}
                rows="4"
                className="w-full border px-3 py-2 rounded"
                required
              />
            ) : (
              <input
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                className="w-full border px-3 py-2 rounded"
                required
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
        >
          Send
        </button>
      </form>
    </section>
  );
}
