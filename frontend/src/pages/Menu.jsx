import React, { useMemo, useState } from 'react';
import { Search, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Plat7 from '../assets/plat10.jpg';

/* ===================== FULL MENU DATA ===================== */
const MENU_DATA = [
  {
    id: 'soup',
    title: { tr: 'GÜNÜN ÇORBASI', en: 'Soup of the Day', nl: 'Soep van de Dag', fr: 'Soupe du Jour' },
    items: [{ name: { tr: 'Günün çorbası', en: 'Daily Soup', nl: 'Dagsoep', fr: 'Soupe du Jour' }, price: 7.5 }]
  },
  {
    id: 'kids',
    title: { tr: 'ÇOCUK MENÜLERİ', en: 'Kids Menu', nl: 'Kindermenu', fr: 'Menu Enfants' },
    items: [
      { name: { tr: 'Köfteburger + patates', en: 'Meatball burger + fries', nl: 'Gehaktbal burger + friet', fr: 'Burger de boulettes + frites' }, price: 9.5 },
      { name: { tr: 'Kipstick + patates', en: 'Chicken sticks + fries', nl: 'Kipstick + friet', fr: 'Bâtonnets de poulet + frites' }, price: 9.5 },
      { name: { tr: 'Nuggets + patates', en: 'Nuggets + fries', nl: 'Nuggets + friet', fr: 'Nuggets + frites' }, price: 9.5 }
    ]
  },
  {
    id: 'starters',
    title: { tr: 'ARA SICAKLAR', en: 'Starters', nl: 'Voorgerechten', fr: 'Entrées' },
    items: [
      { name: { tr: 'Sigara böreği', en: 'Crispy Rolls', nl: 'Crispy Rolls', fr: 'Rouleaux croustillants' }, price: 11.5 },
      { name: { tr: 'Tereyağında karides', en: 'Shrimp in Butter', nl: 'Garnalen in Boter', fr: 'Crevettes au beurre' }, price: 19.5 },
      { name: { tr: 'İçli köfte', en: 'Stuffed Bulgur', nl: 'Gevulde Bulgur', fr: 'Boulgour farci' }, price: 8.5 },
      { name: { tr: 'Kalamar tava', en: 'Fried Calamari', nl: 'Gefrituurde Inktvis', fr: 'Calamars frits' }, price: 14.5 },
      { name: { tr: 'Salyangoz', en: 'Escargots', nl: 'Slakken', fr: 'Escargots' }, price: 18.5 }
    ]
  },
  {
    id: 'meze',
    title: { tr: 'SOĞUK MEZELER', en: 'Cold Meze', nl: 'Koude Meze', fr: 'Mezzé Froid' },
    items: [
      { name: { tr: 'İstiridye (6 adet)', en: 'Oysters (6 pcs)', nl: 'Oesters (6 st)', fr: 'Huitres (6 pcs)' }, price: 24 },
      { name: { tr: 'Cacık', en: 'Tzatziki', nl: 'Cacık', fr: 'Tzatziki' }, price: 7.5 },
      { name: { tr: 'Haydari', en: 'Haydari', nl: 'Haydari', fr: 'Haydari' }, price: 7.5 },
      { name: { tr: 'Antep ezme', en: 'Spicy Dip', nl: 'Spicy Dip', fr: 'Dip épicé' }, price: 7.5 },
      { name: { tr: 'Humus', en: 'Hummus', nl: 'Hummus', fr: 'Houmous' }, price: 7.5 },
      { name: { tr: 'Barbunya pilaki', en: 'Pinto Beans', nl: 'Pinto Bonen', fr: 'Haricots Pinto' }, price: 8.5 },
      { name: { tr: 'Şakşuka', en: 'Veggie Medley', nl: 'Saksuka', fr: 'Légumes sautés' }, price: 8.5 },
      { name: { tr: 'Atom', en: 'Hot Yogurt', nl: 'Hete Yogurt', fr: 'Yaourt chaud' }, price: 8.5 },
      { name: { tr: 'Yaprak sarma', en: 'Stuffed Leaves', nl: 'Gevulde Bladeren', fr: 'Feuilles farcies' }, price: 8.5 },
      { name: { tr: 'Rus salatası', en: 'Russian Salad', nl: 'Russische Salade', fr: 'Salade Russe' }, price: 9.5 },
      { name: { tr: 'Peynir tabağı', en: 'Cheese Plate', nl: 'Kaasplank', fr: 'Plateau de Fromages' }, price: 18.5 },
      { name: { tr: 'Karışık meze tabağı', en: 'Mixed Meze Plate', nl: 'Gemengde Meze', fr: 'Assiette Mezzé Mixte' }, price: 19.5 }
    ]
  },
  {
    id: 'salads',
    title: { tr: 'SALATALAR', en: 'Salads', nl: 'Salades', fr: 'Salades' },
    items: [
      { name: { tr: 'Somon Salatası', en: 'Salmon Salad', nl: 'Zalm Salade', fr: 'Salade de Saumon' }, price: 22.5 },
      { name: { tr: 'Feta Salatası', en: 'Feta Salad', nl: 'Feta Salade', fr: 'Salade Feta' }, price: 17.5 },
      { name: { tr: 'Mevsim Salatası', en: 'Seasonal Salad', nl: 'Seizoenssalade', fr: 'Salade de Saison' }, price: 8.5 },
      { name: { tr: 'Çoban Salatası', en: 'Shepherd Salad', nl: 'Herderssalade', fr: 'Salade du Berger' }, price: 9.5 },
      { name: { tr: 'Muhabbet Special Salata', en: 'Special House Salad', nl: 'Speciale Salade', fr: 'Salade Spéciale' }, price: 24.5 }
    ]
  },
  {
    id: 'desserts',
    title: { tr: 'TATLILAR', en: 'Desserts', nl: 'Desserts', fr: 'Desserts' },
    items: [
      { name: { tr: 'Sütlaç', en: 'Rice Pudding', nl: 'Rijstpudding', fr: 'Riz au Lait' }, price: 7.5 },
      { name: { tr: 'Künefe', en: 'Kunefe', nl: 'Kunefe', fr: 'Kunefe' }, price: 9.5 },
      { name: { tr: 'Dondurma', en: 'Ice Cream', nl: 'Ijs', fr: 'Glace' }, price: 6.5 }
    ]
  }
];

/* ===================== MENU ITEM ===================== */
const MenuItem = ({ item, lang }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="py-5 border-b border-zinc-100 flex justify-between items-center rounded-xl"
  >
    <h3 className="text-lg md:text-xl font-semibold uppercase tracking-wide">{item.name[lang]}</h3>
    <span className="text-lg md:text-xl font-bold">{item.price.toFixed(2)} €</span>
  </motion.div>
);

/* ===================== MENU COMPONENT ===================== */
export default function Menu() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language; // navbar-selected language

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredData = useMemo(() => {
    return MENU_DATA.map(cat => {
      if (selectedCategory !== 'all' && cat.id !== selectedCategory) return null;

      const q = search.toLowerCase();
      const titleMatch =
        cat.title.tr.toLowerCase().includes(q) ||
        cat.title.en.toLowerCase().includes(q) ||
        cat.title.nl.toLowerCase().includes(q) ||
        cat.title.fr.toLowerCase().includes(q);

      const items = cat.items.filter(
        i =>
          i.name.tr.toLowerCase().includes(q) ||
          i.name.en.toLowerCase().includes(q) ||
          i.name.nl.toLowerCase().includes(q) ||
          i.name.fr.toLowerCase().includes(q)
      );

      return titleMatch ? cat : { ...cat, items };
    })
      .filter(Boolean)
      .filter(cat => cat.items.length);
  }, [search, selectedCategory]);

  const categories = ['all', ...MENU_DATA.map(cat => cat.id)];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&family=Open+Sans:wght@400;600&display=swap');
      `}</style>

      {/* HERO IMAGE */}
      <div className="relative w-full h-80 md:h-[500px] overflow-hidden">
        <img src={Plat7} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl text-white font-thin uppercase tracking-widest"
          >
            {t('our_menu')}
          </motion.h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-12 pt-12 pb-20">

        {/* SEARCH */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8 flex justify-center">
          <div className="relative w-full md:w-96">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={lang === 'tr' ? 'ARA...' : lang === 'en' ? 'SEARCH...' : lang === 'nl' ? 'ZOEKEN...' : 'RECHERCHER...'}
              className="w-full pl-12 pr-4 py-4 border border-zinc-200 rounded-full uppercase tracking-widest text-sm outline-none focus:border-black focus:shadow-md transition-all"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            />
          </div>
        </motion.div>

        {/* CATEGORY PILLS */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-12 flex flex-wrap gap-3 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-widest rounded-full transition-all ${selectedCategory === cat ? 'bg-black text-white shadow-lg' : 'bg-zinc-100 text-zinc-500 hover:text-black'}`}
            >
              {cat === 'all' ? t('all_special_dishes') : cat.toUpperCase()}
            </button>
          ))}
        </motion.div>

        {/* MENU SECTIONS */}
        <div>
          {filteredData.map((cat, idx) => (
            <motion.section
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="mb-20 flex flex-col items-center"
            >
              <div className="mb-8 border-b border-black pb-4 w-full max-w-3xl text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star size={12} className="text-zinc-400" />
                  <span className="text-xs tracking-[0.4em] uppercase text-zinc-400">{cat.id}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-thin mb-4 tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {cat.title[lang]}
                </h2>
              </div>
              <div className="w-full max-w-3xl">
                {cat.items.map((item, i) => <MenuItem key={i} item={item} lang={lang} />)}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
