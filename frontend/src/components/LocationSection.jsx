import { useTranslation } from 'react-i18next'

export default function LocationSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-serif font-thin mb-2 tracking-widest"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          {t('our_location', 'OUR LOCATION')}
        </h2>

        {/* Line under heading */}
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

        {/* Opening Hours */}
        <p
          className="text-lg md:text-xl text-gray-600 mb-12"
          style={{
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 400,
            lineHeight: 1.8,
            textTransform: 'uppercase',
          }}
        >
          {t('opening_hours', 'Open from Tuesday to Sunday: 12:00 - 23:00')}
        </p>

        {/* Map & Address */}
        <div className="grid grid-cols-1 gap-8">
          {/* Embedded Google Map */}
          <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps?q=52.368777,4.905456&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Address + Contact Info */}
          <div className="text-center md:text-left px-4 md:px-0">
            <h3
              className="text-2xl font-serif font-semibold mb-4 tracking-wide"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                textTransform: 'uppercase',
              }}
            >
              {t('address', 'Address')}
            </h3>
            <p
              className="text-gray-700 text-lg mb-4"
              style={{ fontFamily: 'Open Sans, sans-serif', lineHeight: 1.8 }}
            >
              {t(
                'restaurant_address',
                'Restaurant Olijfje, 52.368777, 4.905456 (Amsterdam Area)'
              )}
            </p>

            <h3
              className="text-2xl font-serif font-semibold mb-4 tracking-wide"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                textTransform: 'uppercase',
              }}
            >
              {t('contact', 'Contact')}
            </h3>
            <p
              className="text-gray-700 text-lg mb-6"
              style={{ fontFamily: 'Open Sans, sans-serif', lineHeight: 1.8 }}
            >
              {t('phone_number', 'Phone: +31 6 12345678')}
            </p>

            {/* Button to open Google Maps */}
            <a
              href="https://maps.google.com/?q=52.368777,4.905456"
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
