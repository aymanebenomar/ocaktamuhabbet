import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export default function BookTableSection() {
  const { t } = useTranslation()

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 bg-gray-50 text-gray-900">
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUpVariant}
        transition={{ duration: 1 }}
      >
        <h2
          className="text-4xl md:text-5xl font-serif font-thin mb-4 tracking-widest"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          {t('book_a_table', 'BOOK A TABLE')}
        </h2>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-24 h-px bg-gray-900 mx-auto mb-6 opacity-70 origin-center"
        ></motion.div>

        <p
          className="text-lg md:text-xl text-gray-600 mb-12"
          style={{
            fontFamily: 'Open Sans, sans-serif',
            lineHeight: 1.8,
            textTransform: 'uppercase',
          }}
        >
          {t(
            'reserve_your_spot',
            'Reserve your spot and contact us directly via phone or email'
          )}
        </p>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col items-center text-gray-800 space-y-8"
        >
          {/* Phone & Email Row */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Phone */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-gray-900 text-xl" />
                <span className="text-lg md:text-xl">+32 0933 55095</span>
              </div>
              <a
                href="tel:+32093355095"
                className="px-6 py-2 bg-white text-black border border-gray-900 rounded-lg text-sm uppercase tracking-widest hover:bg-gray-100 transition"
              >
                {t('call', 'Call')}
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-gray-900 text-xl" />
                <span className="text-lg md:text-xl">Tezer@outlook.be</span>
              </div>
              <a
                href="mailto:Tezer@outlook.be"
                className="px-6 py-2 bg-white text-black border border-gray-900 rounded-lg text-sm uppercase tracking-widest hover:bg-gray-100 transition"
              >
                {t('email_button', 'Email')}
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}