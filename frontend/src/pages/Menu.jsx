import React, { useMemo, useState } from 'react';
import { Search, Star, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

// Import existing images
import Plat7 from '../assets/plat10.jpg';
import Soup from '../assets/soup.jpg';
import Fish from '../assets/fish4.jpg';
import Ahtapot from '../assets/ahtapot.jpg';
import ColdMeze from '../assets/coldmeze.jpg';
import Kabab from '../assets/kabab.jpg';
import Salad from '../assets/salade.jpg';

// Import the new image for the sections you're adding
import Plat10 from '../assets/plat10.jpg';
import konafa from '../assets/plat2.jpg';
import starters from '../assets/plat20.jpg';
import kind from '../assets/kinder.jpg';
import Drinks from '../assets/drinks.jpg';
import moules from '../assets/moules.jpg';
import istakos from '../assets/istakoz.jpg';
import lezetler from '../assets/lezzetler.jpg';
import drink3 from '../assets/drinkk.jpg';
import wines from '../assets/wines.jpg';
import ndrink from '../assets/drink.jpg';
import beer from '../assets/beer.jpg';
import caffe from '../assets/plat4.jpg';
import pasta from '../assets/pasta.jpg';
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
    image: kind,
    items: [
      { name: { tr: 'Köfteburger + patates', en: 'Meatball burger + fries', nl: 'Gehaktbal burger + friet', fr: 'Burger de boulettes + frites' }, price: 9.5 },
      { name: { tr: 'Kipstick + patates', en: 'Chicken sticks + fries', nl: 'Kipstick + friet', fr: 'Bâtonnets de poulet + frites' }, price: 9.5 },
      { name: { tr: 'Nuggets + patates', en: 'Nuggets + fries', nl: 'Nuggets + friet', fr: 'Nuggets + frites' }, price: 9.5 }
    ]
  },
  {
    id: 'starters',
    title: { tr: 'ARA SICAKLAR', en: 'STARTERS', nl: 'VOORGERECHTEN', fr: 'ENTRÉES' },
    image: starters,
    items: [
      { name: { tr: 'Sigara böreği', en: 'Cigar pastry rolls', nl: 'Sigaretpasteitjes', fr: 'Rouleaux de pâte feuilletée' }, price: 11.5 },
      { name: { tr: 'Tereyağında karides', en: 'Shrimp in butter', nl: 'Garnalen in boter', fr: 'Crevettes au beurre' }, price: 19.5 },
      { name: { tr: 'Içli köfte', en: 'Stuffed meatballs', nl: 'Gevulde köfte', fr: 'Boulettes de viande farcies' }, price: 8.5 },
      { name: { tr: 'Kalamar tava', en: 'Fried calamari', nl: 'Gebakken calamari', fr: 'Calamars frits' }, price: 14.5 },
      { name: { tr: 'Salyangoz (Escargots)', en: 'Snails', nl: 'Slakken', fr: 'Escargots' }, price: 18.5 },
      { name: { tr: 'Izgara jumbo karides (Jumbo shrimp on the grill)', en: 'Jumbo shrimp on the grill', nl: 'Jumbo garnalen op de grill', fr: 'Crevettes géantes grillées' }, price: 17.5 },
      { name: { tr: 'Hamburger', en: 'Hamburger', nl: 'Hamburger', fr: 'Hamburger' }, price: 7.5 },
      { name: { tr: 'Kroket (Aardappelkroket)', en: 'Potato croquette', nl: 'Aardappelkroket', fr: 'Croquette de pommes de terre' }, price: 6.5 },
      { name: { tr: 'Fırında mantar (Geroosterde champignons)', en: 'Roasted mushrooms', nl: 'Geroosterde champignons', fr: 'Champignons rôtis' }, price: 9.5 }
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
    id: 'mussels',
    title: { tr: 'MIDYELER', en: 'MUSSELS', nl: 'MOSSELEN', fr: 'MOULES' },
    image: moules,
    items: [
      { name: { tr: 'Belçika midyesi', en: 'Belgian mussels', nl: 'Belgische mosselen', fr: 'Moules belges' }, price: 20.0 },
      { name: { tr: 'Sarımsaklı midye', en: 'Garlic mussels', nl: 'Knoflookmosselen', fr: 'Moules à l\'ail' }, price: 21.0 },
      { name: { tr: 'Kremalı midye', en: 'Creamy mussels', nl: 'Romige mosselen', fr: 'Moules à la crème' }, price: 22.0 },
      { name: { tr: 'Cozze alla Tarantina', en: 'Cozze alla Tarantina', nl: 'Cozze alla Tarantina', fr: 'Cozze alla Tarantina' }, price: 26.5 }
    ]
  },
  {
    id: 'lobster',
    title: { tr: 'ISTAKOZ', en: 'LOBSTER', nl: 'KREEFT', fr: 'HOMARD' },
    image: istakos,
    items: [
      { name: { tr: 'Izgara istakoz', en: 'Grilled lobster', nl: 'Gegrilde kreeft', fr: 'Homard grillé' }, price: 45.0 },
      { name: { tr: 'Istakoz Thermidor', en: 'Lobster Thermidor', nl: 'Kreeft Thermidor', fr: 'Homard Thermidor' }, price: 49.0 },
      { name: { tr: 'Sarımsaklı istakoz tava', en: 'Fried garlic lobster', nl: 'Gebakken knoflookkreeft', fr: 'Homard frit à l\'ail' }, price: 47.0 }
    ]
  },
  {
    id: 'paella',
    title: { tr: 'PAELLA', en: 'PAELLA', nl: 'PAELLA', fr: 'PAELLA' },
    image: Plat10,
    items: [
      { name: { tr: 'Balıklı Paella (1 kişilik)', en: 'Fish Paella (1 person)', nl: 'Vispaella (1 persoon)', fr: 'Paella au poisson (1 personne)' }, price: 29.5 },
      { name: { tr: 'Balıklı Paella (2 kişilik)', en: 'Fish Paella (2 persons)', nl: 'Vispaella (2 personen)', fr: 'Paella au poisson (2 personnes)' }, price: 55.0 }
    ]
  },
  {
    id: 'pasta',
    title: { tr: 'MAKARNALAR', en: 'PASTA', nl: 'PASTA', fr: 'PÂTES' },
    image: pasta,
    items: [
      { 
        name: { 
          tr: 'Penne (krema soslu)', 
          en: 'Penne (with cream sauce)', 
          nl: 'Penne (met roomsaus)', 
          fr: 'Penne (avec sauce crème)' 
        }, 
        price: 18.50 
      },
      { 
        name: { 
          tr: 'Spaghetti Bolognese', 
          en: 'Spaghetti Bolognese', 
          nl: 'Spaghetti Bolognese', 
          fr: 'Spaghetti Bolognese' 
        }, 
        price: 19.50 
      }
    ]
  },
  {
    id: 'side-dishes',
    title: { tr: 'YAN LEZZETLER', en: 'SIDE DISHES', nl: 'BIJGERECHTEN', fr: 'ACCOMPAGNEMENTS' },
    image: lezetler,
    items: [
      { name: { tr: 'Patates kızartması', en: 'French fries', nl: 'Friet', fr: 'Frites' }, price: 5.5 },
      { name: { tr: 'Patates püresi', en: 'Mashed potatoes', nl: 'Aardappelpuree', fr: 'Purée de pommes de terre' }, price: 6.5 },
      { name: { tr: 'Pilav', en: 'Rice', nl: 'Rijst', fr: 'Riz' }, price: 5.5 },
      { name: { tr: 'Izgara sebze', en: 'Grilled vegetables', nl: 'Gegrilde groenten', fr: 'Légumes grillés' }, price: 6.5 },
      { name: { tr: 'Fırında kuşkonmaz', en: 'Baked asparagus', nl: 'Gebakken asperges', fr: 'Asperges au four' }, price: 8.5 }
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
      { name: { tr: 'Et şiş', en: 'Beef skewer', nl: 'Rundvleesspies', fr: 'Brochette de bœuf' }, price: 19.0 },
      { name: { tr: 'Tavuk şiş', en: 'Chicken skewer', nl: 'Kippenspies', fr: 'Brochette de poulet' }, price: 17.0 },
      { name: { tr: 'Adana kebap', en: 'Adana kebab', nl: 'Adana kebab', fr: 'Kebab Adana' }, price: 17.5 },
      { name: { tr: 'Urfa kebap', en: 'Urfa kebab', nl: 'Urfa kebab', fr: 'Kebab Urfa' }, price: 17.5 },
      { name: { tr: 'Çökertme kebabı', en: 'Çökertme kebab', nl: 'Çökertme kebab', fr: 'Kebab Çökertme' }, price: 25.0 },
      { name: { tr: 'Beyti sarma', en: 'Beyti wrap', nl: 'Beyti wrap', fr: 'Wrap Beyti' }, price: 21.5 },
      { name: { tr: 'Ali Nazik (kuzu)', en: 'Ali Nazik (lamb)', nl: 'Ali Nazik (lam)', fr: 'Ali Nazik (agneau)' }, price: 23.0 },
      { name: { tr: 'Pirzola', en: 'Lamb chops', nl: 'Lamskoteletten', fr: 'Côtelettes d\'agneau' }, price: 23.0},
      { name: { tr: 'Madalyon şiş', en: 'Medallion skewer', nl: 'Medaillonspiezen', fr: 'Brochette médaillon' }, price: 20.0 },
      { name: { tr: 'Izgara köfte', en: 'Grilled meatballs', nl: 'Gegrilde gehaktballen', fr: 'Boulettes grillées' }, price: 17.0 },
      { name: { tr: 'Tavuk kanat', en: 'Chicken wings', nl: 'Kippenvleugels', fr: 'Ailes de poulet' }, price: 16.0 },
      { name: { tr: 'Ciğer şiş', en: 'Liver skewer', nl: 'Lever spies', fr: 'Brochette de foie' }, price: 17.0 },
      { name: { tr: 'Antrikot', en: 'Ribeye steak', nl: 'Ribeye steak', fr: 'Entrecôte' }, price: 28.0 },
      { name: { tr: 'Karışık ızgara', en: 'Mixed grill', nl: 'Gemengde grill', fr: 'Grill mixte' }, price: 25.0 },
      { name: { tr: 'Sac tava', en: 'Pan sauté', nl: 'Pan gebakken', fr: 'Sauté à la poêle' }, price: 20.0 },
      { name: { tr: 'Fırında güveç', en: 'Oven casserole', nl: 'Ovenschotel', fr: 'Casserole au four' }, price: 19.0 },
      { name: { tr: 'Steak (met champignonssause of peper Saus)', en: 'Steak (with mushroom sauce or pepper sauce)', nl: 'Steak (met champignonsaus of pepersaus)', fr: 'Steak (avec sauce aux champignons ou sauce au poivre)' }, price: 26.0 }
    ]
  },
  {
    id: 'raki',
    title: { tr: 'RAKI', en: 'RAKI', nl: 'RAKI', fr: 'RAKI' },
    image: drink3,
    items: [
      { name: { tr: 'Yeni Rakı Duble', en: 'Yeni Rakı Double', nl: 'Yeni Rakı Dubbel', fr: 'Yeni Rakı Double' }, price: 6.0 },
      { name: { tr: 'Yeni Rakı 35 cl', en: 'Yeni Rakı 35 cl', nl: 'Yeni Rakı 35 cl', fr: 'Yeni Rakı 35 cl' }, price: 45.0 },
      { name: { tr: 'Yeni Rakı 70 cl', en: 'Yeni Rakı 70 cl', nl: 'Yeni Rakı 70 cl', fr: 'Yeni Rakı 70 cl' }, price: 70.0 },
      { name: { tr: 'Tekirdağ Rakı Duble', en: 'Tekirdağ Rakı Double', nl: 'Tekirdağ Rakı Dubbel', fr: 'Tekirdağ Rakı Double' }, price: 8.0 },
      { name: { tr: 'Tekirdağ Rakı 35 cl', en: 'Tekirdağ Rakı 35 cl', nl: 'Tekirdağ Rakı 35 cl', fr: 'Tekirdağ Rakı 35 cl' }, price: 65.0 },
      { name: { tr: 'Tekirdağ Rakı 70 cl', en: 'Tekirdağ Rakı 70 cl', nl: 'Tekirdağ Rakı 70 cl', fr: 'Tekirdağ Rakı 70 cl' }, price: 100.0 },
      { name: { tr: 'Beylerbeyi Rakı Duble', en: 'Beylerbeyi Rakı Double', nl: 'Beylerbeyi Rakı Dubbel', fr: 'Beylerbeyi Rakı Double' }, price: 8.5 },
      { name: { tr: 'Beylerbeyi Rakı 35 cl', en: 'Beylerbeyi Rakı 35 cl', nl: 'Beylerbeyi Rakı 35 cl', fr: 'Beylerbeyi Rakı 35 cl' }, price: 65.0 },
      { name: { tr: 'Beylerbeyi Rakı 70 cl', en: 'Beylerbeyi Rakı 70 cl', nl: 'Beylerbeyi Rakı 70 cl', fr: 'Beylerbeyi Rakı 70 cl' }, price: 120.0 }
    ]
  },
  {
    id: 'wines',
    title: { tr: 'ŞARAPLAR', en: 'WINES', nl: 'WIJNEN', fr: 'VINS' },
    image: wines,
    items: [
      { name: { tr: 'Beyaz şarap (kadeh)', en: 'White wine (glass)', nl: 'Witte wijn (glas)', fr: 'Vin blanc (verre)' }, price: 6.5 },
      { name: { tr: 'Kırmızı şarap (kadeh)', en: 'Red wine (glass)', nl: 'Rode wijn (glas)', fr: 'Vin rouge (verre)' }, price: 6.0 },
      { name: { tr: 'Roze şarap (kadeh)', en: 'Rosé wine (glass)', nl: 'Rosé wijn (glas)', fr: 'Vin rosé (verre)' }, price: 6.5 },
      { name: { tr: 'Cava (kadeh)', en: 'Cava (glass)', nl: 'Cava (glas)', fr: 'Cava (verre)' }, price: 7.0 },
      { name: { tr: 'Şarap (şişe)', en: 'Wine (bottle)', nl: 'Wijn (fles)', fr: 'Vin (bouteille)' }, price: 24.0 },
      { name: { tr: 'Cava (şişe)', en: 'Cava (bottle)', nl: 'Cava (fles)', fr: 'Cava (bouteille)' }, price: 37.0 }
    ]
  },
  {
    id: 'cocktails',
    title: { tr: 'KOKTEYLLER', en: 'COCKTAILS', nl: 'COCKTAILS', fr: 'COCKTAILS' },
    items: [
      { name: { tr: 'Espresso Martini', en: 'Espresso Martini', nl: 'Espresso Martini', fr: 'Espresso Martini' }, price: 12.0 },
      { name: { tr: 'Spritz', en: 'Spritz', nl: 'Spritz', fr: 'Spritz' }, price: 11.0 },
      { name: { tr: 'New York Sour', en: 'New York Sour', nl: 'New York Sour', fr: 'New York Sour' }, price: 17.0 },
      { name: { tr: 'Pink Lady', en: 'Pink Lady', nl: 'Pink Lady', fr: 'Pink Lady' }, price: 9.0 }
    ]
  },
  {
    id: 'non-alcoholic-cocktails',
    title: { tr: 'ALKOLSÜZ KOKTEYLLER', en: 'NON-ALCOHOLIC COCKTAILS', nl: 'ALCOHOLVRIJE COCKTAILS', fr: 'COCKTAILS SANS ALCOOL' },
    image: ndrink,
    items: [
      { name: { tr: 'Strawberry Blue Mocktail', en: 'Strawberry Blue Mocktail', nl: 'Strawberry Blue Mocktail', fr: 'Mocktail Fraise Bleue' }, price: 6.0 },
      { name: { tr: 'Mojito Mocktail', en: 'Mojito Mocktail', nl: 'Mojito Mocktail', fr: 'Mocktail Mojito' }, price: 9.0 },
      { name: { tr: 'Virgin Pina Colada', en: 'Virgin Pina Colada', nl: 'Virgin Pina Colada', fr: 'Pina Colada sans alcool' }, price: 9.0 }
    ]
  },
  {
    id: 'beers',
    title: { tr: 'BIEREN', en: 'BEERS', nl: 'BIEREN', fr: 'BIÈRES' },
    image: beer,
    items: [
      { name: { tr: 'Jupiler / Hoegaarden', en: 'Jupiler / Hoegaarden', nl: 'Jupiler / Hoegaarden', fr: 'Jupiler / Hoegaarden' }, price: 3.5 },
      { name: { tr: 'Duvel', en: 'Duvel', nl: 'Duvel', fr: 'Duvel' }, price: 6.0 }
    ]
  },
  {
    id: 'hot-drinks',
    title: { tr: 'SICAK İÇECEKLER', en: 'HOT DRINKS', nl: 'WARME DRANKEN', fr: 'BOISSONS CHAUDES' },
    image: caffe,
    items: [
      { name: { tr: 'Çay / Tea', en: 'Tea', nl: 'Thee', fr: 'Thé' }, price: 3.0 },
      { name: { tr: 'Türk kahvesi', en: 'Turkish coffee', nl: 'Turkse koffie', fr: 'Café turc' }, price: 3.5 },
      { name: { tr: 'Espresso', en: 'Espresso', nl: 'Espresso', fr: 'Expresso' }, price: 3.0 },
      { name: { tr: 'Koffie', en: 'Coffee', nl: 'Koffie', fr: 'Café' }, price: 3.0 }
    ]
  },
  {
    id: 'drinks',
    title: { tr: 'İÇECEKLER', en: 'DRINKS', nl: 'DRANKEN', fr: 'BOISSONS' },
    image: Drinks,
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
    image: konafa,
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