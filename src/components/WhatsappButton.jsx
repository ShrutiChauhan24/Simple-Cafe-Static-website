import React from 'react';
import { motion } from 'framer-motion';
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsAppButton = () => {
  // Replace with your actual phone number (include country code, no + or spaces)
  const phoneNumber = "917004106519"; 
  const message = "Hello! I'd like to inquire about your cafe.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      // Entry Animation
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      // Continuous "Breathing" Pulse Effect
      transition={{ 
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-colors duration-300"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip visible on desktop hover */}
      <span className="absolute right-16 hidden md:group-hover:block bg-[#212529] text-white text-xs py-2 px-4 rounded-lg whitespace-nowrap shadow-xl border border-[#EED270]/20">
        Chat with us
      </span>

      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <IoLogoWhatsapp size={32} fill="currentColor" />
      </motion.div>
      
      {/* Notification Dot */}
      <span className="absolute top-0 right-0 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;