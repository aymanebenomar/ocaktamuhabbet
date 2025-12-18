import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
            <a
              href="https://www.instagram.com/ocakta_muhabbet_restaurant?igsh=MXRzbTQ3eHVnM3Vubg=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.tiktok.com/@muhabbetgent12?_r=1&_t=ZS-92KBl5Y4Rzr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition"
            >
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
            dangerouslySetInnerHTML={{
              __html: t(
                'restaurant_address',
                'Heilig-Hartstraat 74<br />Sint-Amandsberg 9040<br />Gent, België'
              ),
            }}
          />
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
            <span>{t('phone', '+32 0933 55095')}</span>
          </div>
          <div className="flex justify-center items-center gap-3 text-sm">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>{t('email', 'Tezer@outlook.be')}</span>
          </div>
        </div>

        {/* RESTAURANT NAME INSTEAD OF LOGO */}
        <div className="flex items-center justify-center gap-6 my-14">
          <div className="flex-1 h-px bg-white/30"></div>
          <h2
            className="text-2xl font-serif tracking-widest uppercase"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            OCAKTA MUHABBET
          </h2>
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
