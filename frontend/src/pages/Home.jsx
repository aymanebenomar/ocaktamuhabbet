import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import heroBg from '../assets/plat3.jpg'
import logo from '../assets/logo.png'
import SpecialDishes from '../components/SpecialDishes'
import DrinksSection from '../components/DrinksSection'
import BookTableSection from '../components/BookTableSection'
import LocationSection from '../components/LocationSection'

export default function Home() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="text-white">
      {/* IMPORT FONTS */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap');
        `}
      </style>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex flex-col items-center justify-center gap-8 md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>{t('home')}</Link>
          <Link to="/menu" onClick={() => setMenuOpen(false)}>{t('menu')}</Link>
          <Link to="/reservation" onClick={() => setMenuOpen(false)}>{t('reservation')}</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>{t('contact')}</Link>

          <button
            onClick={() => setMenuOpen(false)}
            className="mt-6 border px-6 py-2 rounded"
          >
            ✕
          </button>
        </div>
      )}

      {/* HERO */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex items-center justify-center text-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-4xl px-6">

          {/* WELCOME */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="uppercase tracking-[0.4em] text-sm md:text-base text-gray-300 mb-6"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            {t('welcome_to', 'Welcome to')}
          </motion.p>

          {/* BRAND LOGO */}
          <motion.img
            src={logo}
            alt="Ocakta Muhabbet Logo"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mx-auto w-48 md:w-60 lg:w-72" // smaller size
          />

          {/* DIVIDER */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="w-24 h-px bg-white mx-auto my-8 opacity-70 origin-center"
          ></motion.div>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-lg md:text-xl tracking-widest text-gray-200 uppercase"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            {t('hero_subtitle', 'Your Prestigious Lounge Restaurant')}
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-14 flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Link
              to="/menu"
              className="px-8 py-3 border border-white text-white uppercase tracking-widest hover:bg-white hover:text-black transition duration-300 rounded-lg"
            >
              {t('hero_button_menu', 'Our Menu')}
            </Link>

            <Link
              to="/reservation"
              className="px-8 py-3 border border-white bg-white text-black uppercase tracking-widest hover:bg-black hover:text-white transition duration-300 rounded-lg"
            >
              {t('hero_button_reservation', 'Reservation')}
            </Link>
          </motion.div>

        </div>
      </motion.main>

      <SpecialDishes />
      <DrinksSection />
      <BookTableSection />
      <LocationSection />
    </section>
  )
}
