import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Award, Users } from 'lucide-react';

const AboutSection = () => {
  // Animation for the text and icons
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden" id='about'>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- Left Column: Visual Story --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200" 
                alt="Our Roastery" 
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "4 / 5" }}
              />
            </div>

            {/* Floating Experience Badge (Builds Trust) */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
              className="absolute -bottom-10 -right-10 z-20 bg-[#212529] p-8 rounded-full border-4 border-[#EED270] hidden md:flex flex-col items-center justify-center text-center w-48 h-48 shadow-xl"
            >
              <span className="text-[#EED270] text-4xl font-black">45+</span>
              <span className="text-white text-xs font-bold tracking-widest uppercase mt-1">Years of<br/>Passion</span>
            </motion.div>

            {/* Decorative Frame Element */}
            <div className="absolute top-10 left-10 w-full h-full border-2 border-[#EED270] z-0 rounded-2xl hidden lg:block" />
          </motion.div>

          {/* --- Right Column: Text Content --- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h4 variants={itemVariants} className="text-[#EED270] font-bold tracking-[0.3em] uppercase text-sm mb-4">
              Our Journey
            </motion.h4>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-black text-[#212529] mb-8 leading-tight">
              CRAFTING MOMENTS <br/> <span className="text-[#EED270]">SINCE 1979</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed mb-10">
              What started as a small corner shop in 1979 has grown into a sanctuary for coffee lovers. We align our craft around a shared purpose: to catalyze your day with the perfect roast. Every bean is ethically sourced and roasted in-house to ensure that strategic story of flavor in every cup.
            </motion.p>

            {/* Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              <motion.div variants={itemVariants} className="flex flex-col gap-3">
                <Coffee className="text-[#EED270]" size={32} />
                <h5 className="font-bold text-[#212529]">Artisan Roast</h5>
                <p className="text-xs text-gray-500">Small-batch roasting for peak flavor profile.</p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col gap-3">
                <Award className="text-[#EED270]" size={32} />
                <h5 className="font-bold text-[#212529]">Ethically Sourced</h5>
                <p className="text-xs text-gray-500">Direct trade with sustainable coffee farms.</p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col gap-3">
                <Users className="text-[#EED270]" size={32} />
                <h5 className="font-bold text-[#212529]">Community First</h5>
                <p className="text-xs text-gray-500">Creating a cozy home away from home.</p>
              </motion.div>
            </div>
            
            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 bg-[#212529] text-white px-10 py-4 font-bold tracking-widest text-sm hover:bg-[#EED270] hover:text-[#212529] transition-all duration-300 rounded-none shadow-lg"
            >
              READ OUR FULL STORY
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;