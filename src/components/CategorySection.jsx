import React from 'react';
import { motion } from 'framer-motion';

const categoryData = [
  {
    id: 1,
    image: 'https://img.freepik.com/free-photo/top-view-hot-espresso-with-brown-coffee-seeds-brown-wooden-desk-coffee-cup-drink_140725-28168.jpg?semt=ais_hybrid&w=740&q=80', 
    title: 'COFFEE',
    description: 'Aenean sodales dictum augue, in faucibus nisi sollicitudin eu. Nulla semper arcu. Nam molestie sem eu quam fermentum a tempus nisi aliquet.',
  },
  {
    id: 2,
    image: 'https://img.freepik.com/free-photo/glass-cola-with-ice-cubes_23-2152002414.jpg', 
    title: 'DRINKS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop', 
    title: 'FOOD',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default function CategoriesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24" id='categories'>
      <div className="max-w-7xl mx-auto text-center">
        {/* --- Heading --- */}
        <h2 className="mb-6 text-4xl font-bold tracking-widest md:text-5xl lg:text-6xl">
          <span className="text-black">OUR</span>{' '}
          <span className="text-yellow-500">CATEGORIES</span>
        </h2>

        <p className="mb-20 max-w-2xl mx-auto text-sm leading-relaxed text-gray-700 md:text-base">
          Explore our meticulously crafted menu, featuring artisanal blends, refreshing beverages, and delicious bites.
        </p>

        {/* --- Categories Grid --- */}
        <motion.div
          className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {categoryData.map((category) => (
            <motion.div
              key={category.id}
              className="flex flex-col items-center group"
              variants={itemVariants}
            >
              {/* --- Circular Image with Cream Border --- */}
              <div className="relative mb-10 h-64 w-64 md:h-56 md:w-56 lg:h-72 lg:w-72 overflow-hidden rounded-full border-4 border-yellow-500/20 p-1.5 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full rounded-full object-cover"
                />
              </div> {/* FIXED: Removed the stray "}" that was here */}

              <h3 className="mb-5 text-2xl font-bold tracking-wider text-black md:text-xl lg:text-2xl group-hover:text-yellow-500 transition-colors">
                {category.title}
              </h3>

              <p className="max-w-xs text-sm leading-relaxed text-gray-800 md:text-xs lg:text-sm">
                {category.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}