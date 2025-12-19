import React, { useMemo, useState } from 'react';
import { Search, Star, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';


import { useTranslation } from 'react-i18next';
import Plat7 from '../assets/plat10.jpg';
import Soup from '../assets/soup.jpg';
import Fish from '../assets/plat3.jpg';
import Ahtapot from '../assets/ahtapot.jpg';
import ColdMeze from '../assets/coldmeze.jpg';
import Drink2 from '../assets/drinkk.jpg';
import Kabab from '../assets/kabab.jpg';
import Salad from '../assets/salade.jpg';
import { useEffect } from 'react';

/* ===================== FULL MENU DATA ===================== */
const MENU_DATA = [
  {
    id: 'soup',
    title: { tr: 'GÜNÜN ÇORBASI', en: 'Soup of the Day', nl: 'Soep van de Dag', fr: 'Soupe du Jour' },
    image: Soup,
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
    title: { tr: 'ARA SICAKLAR', en: 'STARTERS', nl: 'VOORGERECHTEN', fr: 'ENTRÉES' },
    items: [
      { name: { tr: 'Sigara böreği', en: 'Cigar pastry rolls', nl: 'Sigaretpasteitjes', fr: 'Rouleaux de pâte feuilletée' }, price: 11.5 },
      { name: { tr: 'Tereyağında karides', en: 'Shrimp in butter', nl: 'Garnalen in boter', fr: 'Crevettes au beurre' }, price: 19.5 },
      { name: { tr: 'Içli köfte', en: 'Stuffed meatballs', nl: 'Gevulde köfte', fr: 'Boulettes de viande farcies' }, price: 8.5 },
      { name: { tr: 'Kalamar tava', en: 'Fried calamari', nl: 'Gebakken calamari', fr: 'Calamars frits' }, price: 14.5 },
      { name: { tr: 'Salyangoz (Escargots)', en: 'Snails', nl: 'Slakken', fr: 'Escargots' }, price: 18.5 }
    ]
  },
  {
    id: 'cold-meze',
    title: { tr: 'SOĞUK MEZELER', en: 'COLD MEZE', nl: 'KOUDE MEZE', fr: 'MEZZÉS FROIDS' },
    image: ColdMeze,
    items: [
      { name: { tr: 'Les Huîtres / İstiridye (6 adet)', en: 'Oysters (6 pieces)', nl: 'Oesters (6 stuks)', fr: 'Huîtres (6 pièces)' }, price: 24 },
      { name: { tr: 'Cacık', en: 'Yogurt with cucumber', nl: 'Yoghurt met komkommer', fr: 'Yaourt au concombre' }, price: 7.5 },
      { name: { tr: 'Haydari', en: 'Thick yogurt dip', nl: 'Dikke yoghurtdip', fr: 'Dip au yaourt épais' }, price: 7.5 },
      { name: { tr: 'Antep ezme', en: 'Spicy tomato dip', nl: 'Pittige tomatendip', fr: 'Dip à la tomate épicée' }, price: 7.5 },
      { name: { tr: 'Humus', en: 'Hummus', nl: 'Hummus', fr: 'Hoummous' }, price: 7.5 },
      { name: { tr: 'Barbunya pilaki', en: 'Bean salad', nl: 'Bonen salade', fr: 'Salade de haricots' }, price: 8.5 },
      { name: { tr: 'Şakşuka', en: 'Fried vegetables in sauce', nl: 'Gebakken groenten in saus', fr: 'Légumes frits en sauce' }, price: 8.5 },
      { name: { tr: 'Atom', en: 'Spicy cheese dip', nl: 'Pittige kaasdip', fr: 'Dip au fromage épicé' }, price: 8.5 },
      { name: { tr: 'Yaprak sarma', en: 'Stuffed vine leaves', nl: 'Gevulde wijnbladeren', fr: 'Feuilles de vigne farcies' }, price: 8.5 },
      { name: { tr: 'Rus salatası', en: 'Russian salad', nl: 'Russische salade', fr: 'Salade russe' }, price: 9.5 },
      { name: { tr: 'Peynir tabağı', en: 'Cheese platter', nl: 'Kaasplank', fr: 'Assiette de fromages' }, price: 18.5 },
      { name: { tr: 'Karışık meze tabağı', en: 'Mixed meze platter', nl: 'Gemengde mezeschotel', fr: 'Assortiment de mezze' }, price: 19.5 }
    ]
  },
  {
    id: 'salads',
    title: { tr: 'SALATALAR', en: 'SALADS', nl: 'SALADES', fr: 'SALADES' },
    image: Salad,
    items: [
      { name: { tr: 'Somon Salatası', en: 'Salmon Salad', nl: 'Zalm Salade', fr: 'Salade de Saumon' }, price: 22.5 },
      { name: { tr: 'Feta Salatası', en: 'Feta Salad', nl: 'Feta Salade', fr: 'Salade Feta' }, price: 17.5 },
      { name: { tr: 'Mevsim Salatası', en: 'Seasonal Salad', nl: 'Seizoenssalade', fr: 'Salade de Saison' }, price: 8.5 },
      { name: { tr: 'Çoban Salatası', en: 'Shepherd Salad', nl: 'Herderssalade', fr: 'Salade du Berger' }, price: 9.5 },
      { name: { tr: 'Muhabbet Special Salata', en: 'Special House Salad', nl: 'Speciale Salade', fr: 'Salade Spéciale' }, price: 24.5 }
    ]
  },
  {
    id: 'fish',
    title: { tr: 'BALIKLAR', en: 'FISH', nl: 'VISGERECHTEN', fr: 'POISSONS' },
    image: Fish,
    items: [
      { name: { tr: 'Levrek', en: 'Sea bass', nl: 'Zeebaars', fr: 'Bar' }, price: 29.5 },
      { name: { tr: 'Çipura', en: 'Gilthead bream', nl: 'Goudbrasem', fr: 'Dorade royale' }, price: 27.5 },
      { name: { tr: 'Somon', en: 'Salmon', nl: 'Zalm', fr: 'Saumon' }, price: 28.5 },
      { name: { tr: 'Ton şiş', en: 'Tuna skewer', nl: 'Tonijn spies', fr: 'Brochette de thon' }, price: 27.5 },
      { name: { tr: 'Mezgit', en: 'Whiting', nl: 'Wijting', fr: 'Merlan' }, price: 26.5 },
      { name: { tr: 'Dil balığı (Tong)', en: 'Sole', nl: 'Tong', fr: 'Sole' }, price: 34.5 }
    ]
  },
  {
    id: 'octopus',
    title: { tr: 'AHTAPOT', en: 'OCTOPUS', nl: 'OCTOPUS', fr: 'POULPE' },
    image: Ahtapot,
    items: [
      { name: { tr: 'Izgara ahtapot', en: 'Grilled octopus', nl: 'Gegrilde octopus', fr: 'Poulpe grillé' }, price: 32.5 },
      { name: { tr: 'Patates yatağında ahtapot', en: 'Octopus on potato bed', nl: 'Octopus op aardappelbed', fr: 'Poulpe sur lit de pommes de terre' }, price: 34.5 },
      { name: { tr: 'Ahtapot tava', en: 'Fried octopus', nl: 'Gebakken octopus', fr: 'Poulpe frit' }, price: 31.5 }
    ]
  },
  {
    id: 'grill',
    title: { tr: 'IZGARA & KEBAPLAR', en: 'GRILL & KEBABS', nl: 'GRILL & KEBABS', fr: 'GRILLADES & KÉBABS' },
    image: Kabab,
    note: { tr: '(Pilav / patates / püre ile servis edilir)', en: '(Served with rice / potatoes / mash)', nl: '(Geserveerd met rijst / aardappelen / puree)', fr: '(Servi avec du riz / pommes de terre / purée)' },
    items: [
      { name: { tr: 'Et şiş', en: 'Beef skewer', nl: 'Rundvleesspies', fr: 'Brochette de bœuf' }, price: 26.5 },
      { name: { tr: 'Tavuk şiş', en: 'Chicken skewer', nl: 'Kippenspies', fr: 'Brochette de poulet' }, price: 22.5 },
      { name: { tr: 'Adana kebap', en: 'Adana kebab', nl: 'Adana kebab', fr: 'Kebab Adana' }, price: 24.5 },
      { name: { tr: 'Urfa kebap', en: 'Urfa kebab', nl: 'Urfa kebab', fr: 'Kebab Urfa' }, price: 23.5 },
      { name: { tr: 'Çökertme kebabı', en: 'Çökertme kebab', nl: 'Çökertme kebab', fr: 'Kebab Çökertme' }, price: 28.5 },
      { name: { tr: 'Beyti sarma', en: 'Beyti wrap', nl: 'Beyti wrap', fr: 'Wrap Beyti' }, price: 26.5 },
      { name: { tr: 'Ali Nazik (kuzu)', en: 'Ali Nazik (lamb)', nl: 'Ali Nazik (lam)', fr: 'Ali Nazik (agneau)' }, price: 29.5 },
      { name: { tr: 'Antrikot', en: 'Ribeye steak', nl: 'Ribeye steak', fr: 'Entrecôte' }, price: 34.5 },
      { name: { tr: 'Karışık ızgara', en: 'Mixed grill', nl: 'Gemengde grill', fr: 'Grill mixte' }, price: 34.5 }
    ]
  },
  {
    id: 'drinks',
    title: { tr: 'İÇECEKLER', en: 'DRINKS', nl: 'DRANKEN', fr: 'BOISSONS' },
    image: Drink2,
    items: [
      { name: { tr: 'Su / Water', en: 'Water', nl: 'Water', fr: 'Eau' }, price: 2 },
      { name: { tr: 'Ayran', en: 'Ayran (yogurt drink)', nl: 'Ayran (yoghurtdrank)', fr: 'Ayran (boisson au yaourt)' }, price: 2 },
      { name: { tr: 'Soda', en: 'Soda water', nl: 'Soda', fr: 'Eau gazeuse' }, price: 2.5 },
      { name: { tr: 'Coca Cola / Zero', en: 'Coca Cola / Zero', nl: 'Coca Cola / Zero', fr: 'Coca Cola / Zero' }, price: 2.5 },
      { name: { tr: 'Fanta', en: 'Fanta', nl: 'Fanta', fr: 'Fanta' }, price: 2.5 },
      { name: { tr: 'Sprite', en: 'Sprite', nl: 'Sprite', fr: 'Sprite' }, price: 2.5 },
      { name: { tr: 'Red Bull', en: 'Red Bull', nl: 'Red Bull', fr: 'Red Bull' }, price: 3 }
    ]
  },
  {
    id: 'desserts',
    title: { tr: 'TATLILAR', en: 'DESSERTS', nl: 'DESSERTS', fr: 'DESSERTS' },
    items: [
      { name: { tr: 'Sütlaç', en: 'Rice pudding', nl: 'Rijstpudding', fr: 'Pudding au riz' }, price: 7.5 },
      { name: { tr: 'Künefe', en: 'Künefe (cheese pastry)', nl: 'Künefe (kaaspastei)', fr: 'Künefe (pâtisserie au fromage)' }, price: 9.5 },
      { name: { tr: 'Dondurma (çeşitli)', en: 'Ice cream (various)', nl: 'IJs (verschillend)', fr: 'Glace (divers)' }, price: 6.5 },
      { name: { tr: 'Çilek Mousse', en: 'Strawberry mousse', nl: 'Aardbeienmousse', fr: 'Mousse à la fraise' }, price: 7.5 }
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
    <h3 className="text-lg md:text-xl font-semibold uppercase tracking-wide pr-2 flex-1 min-w-0">
      {item.name[lang]}
    </h3>
    <span className="text-lg md:text-xl font-bold whitespace-nowrap pl-2">
      {item.price.toFixed(2)} €
    </span>
  </motion.div>
);
/* ===================== MENU COMPONENT ===================== */
export default function Menu() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


   useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

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

        {/* DROPDOWN CATEGORY SELECTOR */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }} 
          className="mb-12 flex justify-center"
        >
          <div className="relative w-full md:w-64">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-4 py-3 border border-zinc-200 rounded-full flex items-center justify-between text-xs uppercase tracking-widest bg-white transition-all hover:border-black"
            >
              <span>
                {selectedCategory === 'all' 
                  ? t('all_special_dishes') 
                  : MENU_DATA.find(cat => cat.id === selectedCategory)?.title[lang]?.toUpperCase() || selectedCategory.toUpperCase()
                }
              </span>
              <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-zinc-200 rounded-xl shadow-lg z-10 max-h-64 overflow-y-auto">
                {categories.map(cat => {
                  let displayText;
                  if (cat === 'all') {
                    displayText = t('all_special_dishes');
                  } else {
                    const category = MENU_DATA.find(c => c.id === cat);
                    displayText = category ? category.title[lang] : cat;
                  }
                  
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-xs uppercase tracking-widest hover:bg-zinc-50 transition-colors ${
                        selectedCategory === cat ? 'bg-black text-white hover:bg-black' : ''
                      }`}
                    >
                      {displayText}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
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
              {cat.image && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 w-full max-w-4xl h-48 md:h-64 overflow-hidden rounded-xl"
                >
                  <img 
                    src={cat.image} 
                    alt={cat.title[lang]} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
              <div className="mb-8 border-b border-black pb-4 w-full max-w-3xl text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star size={12} className="text-zinc-400" />
                  <span className="text-xs tracking-[0.4em] uppercase text-zinc-400">{cat.id}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-thin mb-4 tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {cat.title[lang]}
                </h2>
                {cat.note && (
                  <p className="text-sm text-zinc-500 italic mt-2">{cat.note[lang]}</p>
                )}
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