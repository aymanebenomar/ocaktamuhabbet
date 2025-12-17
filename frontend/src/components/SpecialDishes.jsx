import { useTranslation } from 'react-i18next'

// Dish images
import dish1 from '../assets/plat9.jpg'
import dish2 from '../assets/plat2.jpg'
import dish3 from '../assets/plat3.jpg'
import dish4 from '../assets/plat8.jpg'

const dishes = [
  { id: 1, key: 'cold meze', img: dish1 },
  { id: 2, key: 'tatli', img: dish2 },
  { id: 3, key: 'kezartma deniz ûrûnleri', img: dish3 },
  { id: 4, key: 'ahtapot', img: dish4 },
]

export default function SpecialDishes() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2
          className="text-4xl md:text-5xl font-serif font-thin mb-4 tracking-widest"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          {t('our_special_dishes', 'Our Special Dishes')}
        </h2>

        {/* Line under heading */}
        <div className="w-24 h-px bg-gray-900 mx-auto mb-6 opacity-70"></div>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-gray-600 mb-12"
          style={{
            fontFamily: 'Open Sans, sans-serif',
            lineHeight: 1.8,
            textTransform: 'uppercase',
          }}
        >
          {t(
            'explore_our_menu',
            'A culinary journey of exquisite flavors that are made for you'
          )}
        </p>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="overflow-hidden rounded-2xl shadow-lg relative cursor-pointer group"
            >
              {/* Dish image */}
              <div className="relative">
                <img
                  src={dish.img}
                  alt={t(dish.key)}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Stronger, taller bottom gradient shadow */}
                <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-black/95 to-transparent"></div>
              </div>

              {/* Dish name always visible at bottom center */}
              <div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-2xl md:text-3xl font-thin uppercase tracking-widest"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              >
                {t(dish.key)}
              </div>
            </div>
          ))}
        </div>

        {/* ALL SPECIAL DISHES button */}
        <div className="mt-12">
          <button
            className="px-8 py-3 border border-gray-900 text-gray-900 uppercase tracking-widest hover:bg-gray-900 hover:text-white transition duration-300 rounded-lg"
            style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}
          >
            {t('all_special_dishes', 'ALL SPECIAL DISHES')}
          </button>
        </div>
      </div>
    </section>
  )
}
