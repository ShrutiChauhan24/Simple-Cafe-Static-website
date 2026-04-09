import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { Heart } from 'lucide-react'; // Example Icon

// --- Mock Data ---
// Replicating the structure and content from your reference image.
const menuData = [
  {
    category: 'Coffee',
    items: [
      { id: 'CB-1', name: 'Cold Coffee', price: '₹150', desc: 'Ethically sourced, medium roast', rating: 95 },
      { id: 'CB-2', name: 'Caramel Coffee', price: '₹200', desc: 'Robust flavor, smoky finish', rating: 88 },
      { id: 'CB-3', name: 'Iced Coffee', price: '₹180', desc: 'Water-processed, rich taste', rating: 92 },
    ],
  },
  {
    category: 'Drinks',
    items: [
      { id: 'D-1', name: '1/ Cappuccino', price: '₹200', desc: 'Lorem ipsum Culpa in autea dolor minim irure.', rating: 60 },
      { id: 'D-2', name: '2/ Fappuccino', price: '₹150', desc: 'Lorem ipsum Culpa in autea dolor minim irure.', rating: 80 },
      { id: 'D-3', name: '3/ Espresso', price: '₹180', desc: 'Lorem ipsum Culpa in autea dolor minim irure.', rating: 55 },
      { id: 'D-4', name: '4/ Mocha', price: '₹250', desc: 'Lorem ipsum Culpa in autea dolor minim irure.', rating: 45 },
      { id: 'D-5', name: '5/ Apple Juice', price: '₹280', desc: 'Lorem ipsum Culpa in autea dolor minim irure.', rating: 32 },
      { id: 'D-6', name: '6/ Macchiato', price: '₹300', desc: 'Lorem ipsum Culpa in autea dolor minim irure.', rating: 78 },
    ],
  },
  {
    category: 'Breakfast',
    items: [
      { id: 'B-1', name: 'Avocado Toast', price: '₹250', desc: 'Sourdough, chili flakes', rating: 98 },
      { id: 'B-2', name: 'Acai Bowl', price: '350', desc: 'Fresh berries, granola, honey', rating: 91 },
    ],
  },
];

// --- Framer Motion Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.1, // Stagger effect on list items
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } },
};

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('Drinks');

  // Find data for the active category
  const activeMenu = menuData.find((menu) => menu.category === activeCategory);

  return (
    <motion.section
      id='menu'
      className="bg-[#121212] py-24 px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 overflow-hidden"
      initial="hidden"
      whileInView="visible" // Triggers animation on scroll
      viewport={{ once: true, amount: 0.3 }} // Ensures animation runs once
      variants={sectionVariants}
    >
      {/* --- Left Column: Menu Text Content --- */}
      <div className="space-y-12">
        {/* --- Section Title --- */}
        <h2 className="text-4xl font-extrabold tracking-widest text-center md:text-left text-[#EED270]">
          MENU
        </h2>

        {/* --- Category Selector Tabs --- */}
        <div className="flex items-center justify-center md:justify-start gap-4 flex-wrap">
          {menuData.map((menu) => {
            const isActive = menu.category === activeCategory;
            return (
              <button
                key={menu.category}
                onClick={() => setActiveCategory(menu.category)}
                className={`relative px-8 py-3 text-sm font-semibold tracking-wide border transition-all duration-300 ${
                  isActive
                    ? 'bg-[#EED270] text-[#121212] border-[#EED270]'
                    : 'bg-transparent text-[#EED270] border-[#EED270]/40 hover:border-[#EED270]'
                }`}
              >
                {menu.category}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#121212]"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* --- Dynamic Menu List --- */}
        <div className="relative"
          style={{ minHeight: '400px' }}
        >
          {/* AnimatePresence handles the exit animation of old content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory} // Unique key ensures re-render and re-animation
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, x: 20 }} // Exit effect when changing category
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
            >
              {activeMenu?.items.map((item) => (
                <motion.div
                  key={item.id}
                  className="flex flex-col gap-1.5 group border-b border-[#EED270]/20 pb-6 last:border-0"
                  variants={listItemVariants}
                >
                  {/* Title & Price Row */}
                  <div className="flex items-end justify-between gap-4">
                    <h4 className="text-xl font-bold tracking-wider text-white group-hover:text-[#EED270] transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-2xl font-black text-[#EED270] whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="max-w-xs text-sm leading-relaxed text-gray-400 group-hover:text-gray-100 transition-colors">
                    {item.desc}
                  </p>

                  {/* Rating / Likes with Icon placeholder */}
                  <div className="flex items-center gap-2 pt-2 text-[#EED270]">
                    {/* <Heart size={16} className="fill-[#EED270]/40 text-[#EED270]/40" /> */}
                    {/* Placeholder Icon */}
                    <span className="text-xs">❤</span>
                    <span className="text-xs font-medium tracking-tight text-gray-400">
                      {item.rating} Likes
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* --- Right Column: Static Background Image --- */}
      <motion.div
        className="hidden md:block w-full h-full bg-cover bg-center rounded-xl"
        style={{
          backgroundImage:
            'url(https://img.freepik.com/premium-photo/latte-art-beverage-coffee-person_53876-633687.jpg)',
             minHeight: '600px'
        }}
        variants={imageVariants}
      />
    </motion.section>
  );
}