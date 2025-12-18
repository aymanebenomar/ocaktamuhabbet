import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Logo from '../assets/logo.png' // make sure the path is correct

export default function LocationSection() {
  const { t } = useTranslation()

  // Motion variant for fade-up
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-serif font-thin mb-4 tracking-widest"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          transition={{ duration: 1 }}
        >
          {t('our_location', 'OUR LOCATION')}
        </motion.h2>

        {/* Line */}
        <motion.div
          className="w-24 h-px bg-gray-900 mx-auto mb-6 opacity-70"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-8"
          style={{
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 400,
            lineHeight: 1.8,
            textTransform: 'uppercase',
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {t(
            'visit_us_at',
            'Visit us and enjoy our exquisite cuisine in a warm and cozy atmosphere'
          )}
        </motion.p>

        {/* Logo Image */}
        <motion.div
          className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img
            src={Logo}
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Map & Contact */}
        <motion.div
          className="grid grid-cols-1 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          transition={{ duration: 1, delay: 0.5 }}
        >
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
              {t('phone', 'Phone: +32 4 12 34 56 78')}
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
        </motion.div>
      </div>
    </section>
  )
}
