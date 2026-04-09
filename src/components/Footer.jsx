import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { FaFacebookSquare , FaInstagramSquare, FaLinkedin , } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, staggerChildren: 0.1 } 
    }
  };

  return (
    <footer className="bg-[#121212] text-white pt-20 pb-10 px-6 md:px-12 lg:px-24 border-t border-[#EED270]/10">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* --- Column 1: Brand Story --- */}
          <div className="space-y-6">
            <h3 className="text-[#EED270] text-2xl font-black tracking-tighter">
              CAFFEINATED<span className="text-white">.</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting the perfect roast since 1979. We align leaders around a shared purpose and a strategic story of flavor.
            </p>
            <div className="flex gap-4">
             <a href="https://wa.me/917004106519" className="p-2 border border-white/10 rounded-full hover:border-[#EED270] hover:text-[#EED270] transition-all">
                <IoLogoWhatsapp size={18} />
              </a>
              <a href="#" className="p-2 border border-white/10 rounded-full hover:border-[#EED270] hover:text-[#EED270] transition-all">
                <FaFacebookSquare size={18} />
              </a>
              <a href="#" className="p-2 border border-white/10 rounded-full hover:border-[#EED270] hover:text-[#EED270] transition-all">
                <FaInstagramSquare size={18} />
              </a>
              <a href="#" className="p-2 border border-white/10 rounded-full hover:border-[#EED270] hover:text-[#EED270] transition-all">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* --- Column 2: Quick Links --- */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#categories" className="hover:text-[#EED270] transition-colors">Categories</a></li>
              <li><a href="#menu" className="hover:text-[#EED270] transition-colors">Menu Selection</a></li>
              <li><a href="#gallery" className="hover:text-[#EED270] transition-colors">Gallery Vibe</a></li>
              <li><a href="#about" className="hover:text-[#EED270] transition-colors">About Story</a></li>
            </ul>
          </div>

          {/* --- Column 3: Contact Info --- */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#EED270] shrink-0" />
                <span>121 Rock Street, 21 Avenue,<br/>New York, NY 10101</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#EED270] shrink-0" />
                <span>+1 (234) 567-891</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#EED270] shrink-0" />
                <span>hello@caffeinated.com</span>
              </li>
            </ul>
          </div>

          {/* --- Column 4: WhatsApp CTA (Green Theme) --- */}
          <div className="space-y-6">
            <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-6">Get Support</h4>
            <p className="text-sm text-gray-400">Have questions? Chat with our baristas directly on WhatsApp.</p>
            <motion.a
              href="https://wa.me/917004106519"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-3 px-6 rounded-none font-bold text-sm tracking-widest hover:bg-[#128C7E] transition-all duration-300"
            >
              <IoLogoWhatsapp size={20} fill="currentColor" />
              WHATSAPP US
            </motion.a>
          </div>

        </div>

        {/* --- Bottom Bar --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs">
            © {currentYear} CAFFEINATED CAFE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-xs text-gray-500">
            <a href="#" className="hover:text-[#EED270]">Privacy Policy</a>
            <a href="#" className="hover:text-[#EED270]">Terms of Service</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;