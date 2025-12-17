import { useTranslation } from 'react-i18next'

// Dish images
import dish1 from '../assets/plat1.jpg'
import dish2 from '../assets/plat2.jpg'
import dish3 from '../assets/plat3.jpg'
import dish4 from '../assets/plat4.jpg'

const dishes = [
  { id: 1, name: 'Grilled Salmon', desc: 'Fresh salmon with herbs', img: dish1 },
  { id: 2, name: 'Steak Frites', desc: 'Juicy steak with fries', img: dish2 },
  { id: 3, name: 'Vegetable Pasta', desc: 'Pasta with seasonal veggies', img: dish3 },
  { id: 4, name: 'Chocolate Dessert', desc: 'Rich chocolate delight', img: dish4 },
]

export default function SpecialDishes() {
  const { t } = useTranslation()

  return (
	<section className="py-20 bg-gray-50 text-gray-900">
	  <div className="max-w-6xl mx-auto px-6 text-center">
		{/* Title */}
 <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">
          {t('our_special_dishes', 'Our Special Dishes')}
        </h2>


		{/* Subtitle */}
		<p className="text-gray-700 text-lg md:text-xl mb-12 tracking-wider italic">
  {t('explore_our_menu', 'A culinary journey of exquisite flavors that are mades for you')}
</p>


		{/* Dishes Grid */}
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
		  {dishes.map(dish => (
			<div
			  key={dish.id}
			  className="overflow-hidden rounded-2xl shadow-lg relative cursor-pointer group"
			>
			  {/* Dish image with permanent slight dark overlay */}
			  <div className="relative">
				<img
				  src={dish.img}
				  alt={dish.name}
				  className="w-full h-64 object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-black/30"></div> {/* permanent opacity */}
			  </div>

			  {/* Dish name always visible at bottom center with skinny premium font */}
			  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-2xl md:text-3xl font-serif font-thin uppercase tracking-widest">
				{dish.name}
			  </div>
			</div>
		  ))}
		</div>

		{/* ALL SPECIAL DISHES button */}
		<div className="mt-12">
		  <button className="px-8 py-3 border border-gray-900 text-gray-900 uppercase tracking-widest hover:bg-gray-900 hover:text-white transition duration-300 rounded-lg">
			{t('all_special_dishes', 'ALL SPECIAL DISHES')}
		  </button>
		</div>
	  </div>
	</section>
  )
}

