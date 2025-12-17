import { useTranslation } from 'react-i18next'

export default function LocationSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-serif font-thin mb-4 tracking-widest"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          {t('our_location', 'OUR LOCATION')}
        </h2>

        {/* Line */}
        <div className="w-24 h-px bg-gray-900 mx-auto mb-6 opacity-70"></div>

        {/* Description */}
        <p
          className="text-lg md:text-xl text-gray-600 mb-6"
          style={{
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 400,
            lineHeight: 1.8,
            textTransform: 'uppercase',
          }}
        >
          {t(
            'visit_us_at',
            'Visit us and enjoy our exquisite cuisine in a warm and cozy atmosphere'
          )}
        </p>

        {/* Map & Contact */}
        <div className="grid grid-cols-1 gap-8">
          {/* Google Map */}
          <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps?q=Heilig-Hartstraat+74+Sint-Amandsberg+9040+Gent+België&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3
              className="text-2xl mb-3"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {t('contact', 'Contact')}
            </h3>

            <p
              className="text-gray-700 text-lg mb-8"
              style={{
                fontFamily: 'Open Sans, sans-serif',
                lineHeight: 1.8,
                textTransform: 'uppercase',
              }}
            >
              {t('phone_number', 'Phone: +32 4 12 34 56 78')}
            </p>

            {/* Google Maps Button */}
            <a
              href="https://maps.app.goo.gl/upMAhCjb8nKn58946"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-gray-900 text-gray-900 uppercase tracking-widest hover:bg-gray-900 hover:text-white transition duration-300 rounded-lg"
            >
              {t('open_in_google_maps', 'Open in Google Maps')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
