import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Dish images
import dish1 from '../assets/dish9.jpg'
import dish2 from '../assets/plat2.jpg'
import dish3 from '../assets/plat3.jpg'
import dish4 from '../assets/plat8.jpg'

// Dish keys should match your translation JSON
const dishes = [
  { id: 1, key: 'dish_cold_meze', img: dish1 },
  { id: 2, key: 'dish_tatli', img: dish2 },
  { id: 3, key: 'dish_kezartma_deniz_urunleri', img: dish3 },
  { id: 4, key: 'dish_ahtapot', img: dish4 },
]

// Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function SpecialDishes() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-serif font-thin mb-4 tracking-widest"
          style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}
        >
          {t('our_special_dishes')}
        </motion.h2>

        {/* Line under heading */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="w-24 h-px bg-gray-900 mx-auto mb-6 opacity-70 origin-center"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-600 mb-12"
          style={{ fontFamily: 'Open Sans, sans-serif', lineHeight: 1.8, textTransform: 'uppercase' }}
        >
          {t('explore_our_menu')}
        </motion.p>

        {/* Dishes Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {dishes.map((dish) => (
            <motion.div
              key={dish.id}
              variants={itemVariants}
              className="overflow-hidden rounded-2xl shadow-xl relative cursor-pointer group"
            >
              {/* Dish image */}
              <div className="relative">
                <img
                  src={dish.img}
                  alt={t(dish.key)}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-black/95 to-transparent"></div>
              </div>

              {/* Dish name */}
              <div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-2xl md:text-3xl font-thin uppercase tracking-widest"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              >
                {t(dish.key)}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ALL SPECIAL DISHES button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12"
        >
          <Link
            to="/menu"
            className="px-8 py-3 border border-gray-900 text-gray-900 uppercase tracking-widest hover:bg-gray-900 hover:text-white transition duration-300 rounded-lg inline-block"
            style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}
          >
            {t('all_special_dishes')}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
