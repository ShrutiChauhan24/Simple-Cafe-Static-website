import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { FaFacebookSquare , FaInstagramSquare, FaLinkedin} from "react-icons/fa";

// --- Framer Motion Animation Variants ---
// Animates the text container and staggers the children (the contact blocks)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time delay between each block fading in
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Map Animation: Slides in from the right
const mapVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.2, // Slight delay so text starts first
    },
  },
};

const ContactLocationSection = ()=>{
  return (
    <section id='contact' className="relative w-full bg-white">
      {/* --- Main Section Layout --- */}
      {/* Single column on mobile (grid-cols-1), two columns on tablet+ (grid-cols-2) */}
      <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
        
        {/* === Left Column: Contact Details (Dark Background) === */}
        <motion.div 
          className="flex flex-col items-center justify-center bg-[#212529] px-6 py-20 text-center md:items-start md:px-24 md:text-left"
          initial="hidden"
          whileInView="visible" // Trigger when scrolled into view
          viewport={{ once: true, amount: 0.3 }} // Ensures animation runs once
          variants={containerVariants}
        >
          {/* Section Heading (Matching the bold style and orange accent) */}
          <motion.h2 variants={itemVariants} className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-white">CONTACT</span>{' '}
            <span className="text-yellow-500">US</span>
          </motion.h2>

          {/* Intro Paragraph (Light gray text for readability) */}
          <motion.p variants={itemVariants} className="mb-16 max-w-md text-sm leading-relaxed text-gray-400 md:text-base">
            Lorem ipsum doconsectetur adipiscing. Suspense doco. Aenean sodales dictum augue, in faucibus nisi sollicitudin eu.
          </motion.p>

          {/* Contact Blocks Grid (1 column on mobile, 2 columns on tablet+) */}
          <div className="grid w-full grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
            
            {/* ADDRESS */}
            <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 p-2">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h4 className="mb-1 text-xs font-bold tracking-wider text-yellow-500 uppercase">ADDRESS:</h4>
                <p className="text-sm leading-relaxed text-white">121 Rock Street, 21 Avenue, New York, NY 10101-2022</p>
              </div>
            </motion.div>

            {/* EMAIL */}
            <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 p-2">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h4 className="mb-1 text-xs font-bold tracking-wider text-yellow-500 uppercase">EMAIL:</h4>
                <a href="mailto:hello@company.com" className="block text-sm leading-relaxed text-white hover:text-yellow-500 transition">hello@company.com</a>
                <a href="mailto:support@company.com" className="block text-sm leading-relaxed text-white hover:text-yellow-500 transition">support@company.com</a>
              </div>
            </motion.div>

            {/* CALL US */}
            <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 p-2">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h4 className="mb-1 text-xs font-bold tracking-wider text-yellow-500 uppercase">CALL US:</h4>
                <p className="text-sm leading-relaxed text-white">1 (234) 567-891</p>
                <p className="text-sm leading-relaxed text-white">1 (234) 987-654</p>
              </div>
            </motion.div>

            {/* CONNECT & SOCIAL */}
            <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
              {/* No Icon for this specific block as per layout */}
              <div className="h-12 w-12" /> {/* Placeholder for grid spacing */}
              <div>
                <h4 className="mb-2 text-xs font-bold tracking-wider text-yellow-500 uppercase">GET IN TOUCH:</h4>
                <p className="mb-4 text-sm leading-relaxed text-white">Lorem ipsum doconsectetur adipiscing. Suspense.</p>
                
                {/* Social Media Icons */}
                <div className="flex items-center gap-5 justify-center md:justify-start">
                  
                  <a href="#" className="text-white/60 hover:text-yellow-500 transition"><FaFacebookSquare size={18} /></a>
                  <a href="#" className="text-white/60 hover:text-yellow-500 transition"><FaInstagramSquare size={18} /></a>
                  <a href="#" className="text-white/60 hover:text-yellow-500 transition"><FaLinkedin size={18} /></a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* === Right Column: Interactive Map (Placeholder) === */}
        <motion.div 
          className="relative w-full overflow-hidden md:min-h-full"
          style={{minHeight:"400px"}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={mapVariants}
        >
          {/* This is a standard Google Map Iframe. 
              Replace the 'q=' query with your actual business address.
          */}
          <iframe
            title="Business Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175401016896!2d-73.9856!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c1fd%3A0x6b1f2b604b90412e!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus&q=Empire%20State+Building"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default ContactLocationSection;