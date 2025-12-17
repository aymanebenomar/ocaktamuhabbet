import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import logo from '../assets/logo.png'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* FIND US */}
        <div className="space-y-4">
          <h3
            className="text-lg uppercase tracking-widest"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {t('find_us_on', 'Find us on')}
          </h3>

          <div className="flex justify-center gap-6 text-xl">
            <a href="#" className="hover:opacity-70 transition">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="hover:opacity-70 transition">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-white/40 mx-auto my-10"></div>

        {/* ADDRESS */}
        <div className="space-y-3">
          <h3
            className="text-sm uppercase tracking-widest opacity-80"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {t('address', 'Address')}
          </h3>

          <p
            className="uppercase tracking-wide text-sm leading-relaxed"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            {t('restaurant_address', 'Heilig-Hartstraat 74<br />Sint-Amandsberg 9040<br />Gent, België')}
          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-white/40 mx-auto my-10"></div>

        {/* OPENING HOURS */}
        <div className="space-y-3">
          <h3
            className="text-sm uppercase tracking-widest opacity-80"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {t('opening_hours', 'Opening Hours')}
          </h3>

          <p
            className="uppercase tracking-wide text-sm leading-relaxed"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            {t('opening_hours_text', 'Tuesday – Sunday 12:00 – 23:00')}
          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-white/40 mx-auto my-10"></div>

        {/* ASSISTANCE */}
        <div className="space-y-4">
          <h3
            className="text-sm uppercase tracking-widest opacity-80"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {t('assistance', 'Assistance')}
          </h3>

          <div className="flex justify-center items-center gap-3 text-sm">
            <FontAwesomeIcon icon={faPhone} />
            <span>{t('phone', '+32 4 12 34 56 78')}</span>
          </div>

          <div className="flex justify-center items-center gap-3 text-sm">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>{t('email', 'contact@restaurant.com')}</span>
          </div>
        </div>

        {/* LOGO WITH SIDE LINES ONLY */}
        <div className="flex items-center justify-center gap-6 my-14">
          <div className="flex-1 h-px bg-white/30"></div>

          <img
            src={logo}
            alt="Logo"
            className="h-14 object-contain"
          />

          <div className="flex-1 h-px bg-white/30"></div>
        </div>

        {/* COPYRIGHT */}
        <div className="text-xs uppercase tracking-widest opacity-60">
          © {new Date().getFullYear()} {t('footer_text', 'All Rights Reserved')}
        </div>

      </div>
    </footer>
  )
}