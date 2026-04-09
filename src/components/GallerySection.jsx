import React from "react";
import { motion } from "framer-motion";

const galleryData = [
  {
    id: 1,
    url: "https://img.freepik.com/premium-photo/artisan-coffee-cozy-cafe-4k-hd-photo-delicious-brewed-beverages-atmosphere_1192771-3302.jpg?semt=ais_hybrid&w=740&q=80",
    title: "Cozy Interior",
    size: "tall", // Vertical image
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800",
    title: "Signature Brew",
    size: "square",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800",
    title: "The Vibe",
    size: "square",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800",
    title: "Fresh Breakfast",
    size: "tall",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800",
    title: "Roasted Beans",
    size: "square",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=800",
    title: "Evening Vibe",
    size: "square",
  },
];

export default function GallerySection() {
  // Animation for the container (stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Animation for individual items
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section className="bg-[#121212] py-24 px-6 md:px-12 lg:px-24 overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto">
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-widest text-[#EED270] mb-4"
          >
            OUR ATMOSPHERE
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-[#EED270] mx-auto mb-6"
          />
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            From the rich aroma of our freshly roasted beans to the cozy corners
            of our 1979-inspired interior.
          </p>
        </div>

        {/* --- Gallery Grid --- */}
        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {galleryData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative group overflow-hidden rounded-xl break-inside-avoid shadow-2xl"
            >
              {/* Image with Tilt Effect */}
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-110 transition-all duration-700 ease-in-out"
              />
              {/* Hover Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2), transparent)",
                }}
              >
                <span className="text-[#EED270] text-xs font-bold tracking-[0.3em] uppercase mb-2">
                  Explore
                </span>
                <h3 className="text-white text-2xl font-bold tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Thin Border Frame (Caffeinated Style) */}
              <div className="absolute inset-4 border border-[#EED270]/0 group-hover:border-[#EED270]/30 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* --- Footer CTA --- */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
          {/* Instagram Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto border-2 border-[#EED270] text-[#EED270] px-10 py-4 font-bold tracking-[0.2em] text-sm hover:bg-[#EED270] hover:text-[#121212] transition-all duration-300 shadow-lg"
          >
            FOLLOW ON INSTAGRAM
          </motion.button>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/917004106519" // Replace with your number
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(37, 211, 102, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-transparent border-2 border-[#EED270] text-[#EED270] px-10 py-4 font-bold tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:bg-[#EED270] hover:text-[#121212] transition-all duration-300 shadow-lg"
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            CONTACT ON WHATSAPP
          </motion.a>
        </div>
      </div>
    </section>
  );
}
