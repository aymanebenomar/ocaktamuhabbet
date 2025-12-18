import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faGlobe } from '@fortawesome/free-solid-svg-icons'

// FLAGS
import nlFlag from '../assets/flags/nl.png'
import enFlag from '../assets/flags/en.png'
import frFlag from '../assets/flags/fr.png'
import trFlag from '../assets/flags/tr.webp'

// LOGO
import logo2 from '../assets/logo.png'

const languages = [
  { code: 'nl', label: 'NL', flag: nlFlag },
  { code: 'en', label: 'EN', flag: enFlag },
  { code: 'fr', label: 'FR', flag: frFlag },
  { code: 'tr', label: 'TR', flag: trFlag },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const langRef = useRef(null)
  const lastScroll = useRef(0)

  const currentLang = languages.find(l => l.code === i18n.language) || languages[1]

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    setLangOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      setVisible(!(current > lastScroll.current && current > 50))
      lastScroll.current = current
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0))' }}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 text-white font-montserrat">
          {/* LOGO */}
          <Link to="/">
            <img src={logo2} alt="Ocakta Muhabbet" className="h-12 w-auto" />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link className="hover:text-gray-300 transition font-medium uppercase tracking-wide" to="/">{t('home')}</Link>
            <Link className="hover:text-gray-300 transition font-medium uppercase tracking-wide" to="/menu">{t('menu')}</Link>
            <Link className="hover:text-gray-300 transition font-medium uppercase tracking-wide" to="/reservation">{t('reservation')}</Link>
            <Link className="hover:text-gray-300 transition font-medium uppercase tracking-wide" to="/contact">{t('contact')}</Link>

            {/* LANGUAGE DROPDOWN */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 border-none bg-transparent text-white cursor-pointer hover:opacity-80 transition"
              >
                <FontAwesomeIcon icon={faGlobe} size="lg" />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 bg-white text-black border rounded-xl shadow-lg w-44 overflow-hidden z-50">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition cursor-pointer"
                    >
                      <img src={lang.flag} alt={lang.label} className="h-5 w-auto" />
                      <span className="text-sm">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* MOBILE BUTTONS */}
          <div className="md:hidden flex items-center gap-4">
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 border-none bg-transparent text-white cursor-pointer hover:opacity-80 transition"
              >
                <FontAwesomeIcon icon={faGlobe} size="lg" />
              </button>

              {langOpen && (
                <div className="absolute top-12 right-0 bg-white text-black border rounded-xl shadow-lg w-36 overflow-hidden z-50">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100 transition cursor-pointer"
                    >
                      <img src={lang.flag} alt={lang.label} className="h-5 w-auto" />
                      <span className="text-sm">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => setMenuOpen(true)} className="active:scale-90 transition">
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 text-lg
        backdrop-blur-md bg-white/30 transition-transform duration-300 md:hidden
        ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <Link onClick={() => setMenuOpen(false)} className="font-montserrat font-medium uppercase tracking-wide" to="/">{t('home')}</Link>
        <Link onClick={() => setMenuOpen(false)} className="font-montserrat font-medium uppercase tracking-wide" to="/menu">{t('menu')}</Link>
        <Link onClick={() => setMenuOpen(false)} className="font-montserrat font-medium uppercase tracking-wide" to="/reservation">{t('reservation')}</Link>
        <Link onClick={() => setMenuOpen(false)} className="font-montserrat font-medium uppercase tracking-wide" to="/contact">{t('contact')}</Link>

        <button
          onClick={() => setMenuOpen(false)}
          className="mt-8 flex items-center justify-center rounded-md bg-white/20 hover:bg-white/30 transition p-3"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </>
  )
}
