import { motion } from 'framer-motion'
import BookTableSection from '../components/BookTableSection'
import drink2 from '../assets/drink2.jpg'
import { useTranslation } from 'react-i18next'

export default function Contact() {

  const { t } = useTranslation()
  return (
    <>
      {/* HERO IMAGE */}
      <section className="relative h-[38vh] w-full overflow-hidden">
        <img
          src={drink2}
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Centered Text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 h-full flex items-center justify-center"
        >
          <h1
            className="text-white text-4xl md:text-6xl font-thin uppercase"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              letterSpacing: '0.15em',
            }}
          >
            {t('contact_title', 'CONTACT')}
          </h1>

        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <BookTableSection />
    </>
  )
}
