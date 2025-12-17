import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import heroBg from '../assets/plat3.jpg'
import SpecialDishes from '../components/SpecialDishes'
import DrinksSection from '../components/DrinksSection'
import BookTableSection from '../components/BookTableSection'
import LocationSection from '../components/LocationSection'

export default function Home() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="text-white">

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
      <main
        className="min-h-screen flex items-center justify-center text-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-4xl px-6">

          {/* WELCOME */}
          <p className="uppercase tracking-[0.4em] text-sm md:text-base text-gray-300 mb-6">
            {t('welcome_to', 'Welcome to')}
          </p>

          {/* BRAND */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wide font-light">
            Ocakta
          </h1>

          {/* DIVIDER */}
          <div className="w-24 h-px bg-white mx-auto my-8 opacity-70"></div>

          {/* SUBTITLE */}
          <p className="font-serif text-lg md:text-xl tracking-widest text-gray-200 uppercase">
            {t('hero_subtitle', 'Your Prestigious Lounge Restaurant')}
          </p>

          {/* BUTTONS */}
          <div className="mt-14 flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/menu"
              className="px-10 py-3 border border-white uppercase tracking-widest hover:bg-white hover:text-black transition duration-300"
            >
              {t('hero_button_menu', 'Our Menu')}
            </Link>

            <Link
              to="/reservation"
              className="px-10 py-3 bg-white text-black uppercase tracking-widest hover:bg-gray-200 transition duration-300"
            >
              {t('hero_button_reservation', 'Reservation')}
            </Link>
          </div>

        </div>
      </main>

      <SpecialDishes />
      <DrinksSection />
      <BookTableSection />
      <LocationSection />
    </section>
  )
}
