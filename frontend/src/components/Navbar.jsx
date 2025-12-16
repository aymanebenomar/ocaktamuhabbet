import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaGlobe, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLangOpen(false); // close language menu after selection
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-500">
          <Link to="/">{t('brand')}</Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><Link to="/" className="hover:text-yellow-500">{t('home')}</Link></li>
          <li><Link to="/menu" className="hover:text-yellow-500">{t('menu')}</Link></li>
          <li><Link to="/reservation" className="hover:text-yellow-500">{t('reservation')}</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-500">{t('contact')}</Link></li>
          {/* Language desktop */}
          <li className="relative">
            <button onClick={() => setLangOpen(!langOpen)} className="flex items-center space-x-1 hover:text-yellow-500">
              <FaGlobe />
            </button>
            {langOpen && (
              <ul className="absolute right-0 mt-2 bg-white border rounded shadow-lg w-24 text-black">
                <li className="px-3 py-1 hover:bg-gray-200 cursor-pointer" onClick={() => changeLanguage('nl')}>NL</li>
                <li className="px-3 py-1 hover:bg-gray-200 cursor-pointer" onClick={() => changeLanguage('en')}>EN</li>
                <li className="px-3 py-1 hover:bg-gray-200 cursor-pointer" onClick={() => changeLanguage('fr')}>FR</li>
                <li className="px-3 py-1 hover:bg-gray-200 cursor-pointer" onClick={() => changeLanguage('tr')}>TR</li>
              </ul>
            )}
          </li>
        </ul>

        {/* Mobile toggler */}
        <div className="md:hidden flex items-center space-x-2">
          <button onClick={() => setLangOpen(!langOpen)} className="text-yellow-500">
            <FaGlobe />
          </button>
          {langOpen && (
            <div className="absolute top-16 right-4 bg-white border rounded shadow-lg w-32 z-20">
              <ul className="flex flex-col text-black">
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => changeLanguage('nl')}>NL</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => changeLanguage('en')}>EN</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => changeLanguage('fr')}>FR</li>
                <li className="px-3 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => changeLanguage('tr')}>TR</li>
              </ul>
            </div>
          )}

          <button onClick={() => setMenuOpen(!menuOpen)} className="text-yellow-500">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-2 mt-4 text-center text-black">
          <li><Link to="/" className="hover:text-yellow-500" onClick={() => setMenuOpen(false)}>{t('home')}</Link></li>
          <li><Link to="/menu" className="hover:text-yellow-500" onClick={() => setMenuOpen(false)}>{t('menu')}</Link></li>
          <li><Link to="/reservation" className="hover:text-yellow-500" onClick={() => setMenuOpen(false)}>{t('reservation')}</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-500" onClick={() => setMenuOpen(false)}>{t('contact')}</Link></li>
        </ul>
      )}
    </nav>
  );
}
