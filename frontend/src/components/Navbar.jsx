import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

// FLAGS
import nlFlag from '../assets/flags/nl.png'
import enFlag from '../assets/flags/en.png'
import frFlag from '../assets/flags/fr.png'
import trFlag from '../assets/flags/tr.webp'

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
  const langRef = useRef(null)

  const currentLang = languages.find(l => l.code === i18n.language) || languages[1]

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    setLangOpen(false)
  }

  // Close dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white text-slate-800 shadow-sm">
        <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-4">

          {/* LOGO */}
          <Link to="/" className="text-lg font-semibold tracking-wide">
            Ocakta
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link className="hover:text-slate-500 transition" to="/">{t('home')}</Link>
            <Link className="hover:text-slate-500 transition" to="/menu">{t('menu')}</Link>
            <Link className="hover:text-slate-500 transition" to="/reservation">{t('reservation')}</Link>
            <Link className="hover:text-slate-500 transition" to="/contact">{t('contact')}</Link>

            {/* LANGUAGE DROPDOWN */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 border rounded-full px-3 py-1.5 hover:bg-gray-100 transition cursor-pointer"
              >
                <img
                  src={currentLang.flag}
                  alt={currentLang.label}
                  className="w-5 h-5 rounded-full"
                />
                <span className="text-xs font-medium">{currentLang.label}</span>
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 bg-white border rounded-xl shadow-lg w-44 overflow-hidden z-50">
                  {languages
                    .filter(l => l.code !== currentLang.code)
                    .map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition cursor-pointer"
                      >
                        <img src={lang.flag} alt={lang.label} className="w-5 h-5 rounded-full" />
                        <span className="text-sm">{lang.label}</span>
                      </button>
                    ))}
                </div>
              )}
            </div>
          </div>

          {/* MOBILE BUTTONS */}
          <div className="md:hidden flex items-center gap-4">
            {/* MOBILE LANGUAGE SELECT */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 border rounded-full px-2 py-1 hover:bg-gray-100 transition"
              >
                <img src={currentLang.flag} alt={currentLang.label} className="w-5 h-5 rounded-full" />
                <span className="text-xs font-medium">{currentLang.label}</span>
              </button>

              {langOpen && (
                <div className="absolute top-12 right-0 bg-white border rounded-xl shadow-lg w-36 overflow-hidden z-50">
                  {languages
                    .filter(l => l.code !== currentLang.code)
                    .map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100 transition cursor-pointer"
                      >
                        <img src={lang.flag} alt={lang.label} className="w-5 h-5 rounded-full" />
                        <span className="text-sm">{lang.label}</span>
                      </button>
                    ))}
                </div>
              )}
            </div>

            {/* HAMBURGER MENU */}
            <button
              onClick={() => setMenuOpen(true)}
              className="active:scale-90 transition"
            >
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed inset-0 z-[100] bg-white/70 backdrop-blur
        flex flex-col items-center justify-center gap-8 text-lg
        transform transition-transform duration-300 md:hidden
        ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <Link onClick={() => setMenuOpen(false)} to="/">{t('home')}</Link>
        <Link onClick={() => setMenuOpen(false)} to="/menu">{t('menu')}</Link>
        <Link onClick={() => setMenuOpen(false)} to="/reservation">{t('reservation')}</Link>
        <Link onClick={() => setMenuOpen(false)} to="/contact">{t('contact')}</Link>

        <button
          onClick={() => setMenuOpen(false)}
          className="mt-8 flex items-center justify-center rounded-md bg-slate-100 hover:bg-slate-200 transition p-3"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </>
  )
}
