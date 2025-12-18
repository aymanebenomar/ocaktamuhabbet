import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

// Images
import drinkImg from '../assets/drink.jpg'
import plat3Img from '../assets/plat6.jpg'

export default function DrinksSection() {
  const { t } = useTranslation()

  // Common fade-up variant
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="text-gray-900">
      {/* DISCOVER OUR DRINKS */}
      <div
        className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${drinkImg})` }}
      >
        {/* Darker Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-center px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={fadeUpVariant}
        >
          <h2
            className="text-3xl md:text-5xl text-white mb-2"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {t('drinks_menu', 'DRINKS MENU')}
          </h2>

          {/* Line under heading */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-24 h-px bg-white mx-auto mb-4 opacity-70 origin-center"
          ></motion.div>

          <p
            className="text-lg md:text-xl text-gray-200 mb-6"
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: 400,
              lineHeight: 1.8,
            }}
          >
            {t(
              'refresh_with_our_drinks',
              'Refresh yourself with our exquisite beverages'
            )}
          </p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="px-8 py-3 border border-white text-white uppercase tracking-widest hover:bg-white hover:text-black transition duration-300 rounded-lg"
          >
            {t('view_menu', 'View our wines')}
          </motion.button>
        </motion.div>
      </div>

      {/* FOOD MENU */}
      <div
        className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${plat3Img})` }}
      >
        {/* Darker Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-center px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={fadeUpVariant}
        >
          <h2
            className="text-3xl md:text-5xl text-white mb-2"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {t('food_menu', 'FOOD MENU')}
          </h2>

          {/* Line under heading */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-24 h-px bg-white mx-auto mb-4 opacity-70 origin-center"
          ></motion.div>

          <p
            className="text-lg md:text-xl text-white mb-6"
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: 400,
              lineHeight: 1.8,
            }}
          >
            {t(
              'discover_our_food',
              'Explore our delicious culinary food selection'
            )}
          </p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="px-8 py-3 border border-white text-white uppercase tracking-widest hover:bg-white hover:text-black transition duration-300 rounded-lg"
          >
            {t('view_menu', 'View our food')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
