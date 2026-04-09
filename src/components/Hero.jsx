import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const slides = [
  { id: 1, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80', title: 'TIME FOR A COFFEE', tagline: 'Fresh Coffee, Cozy Vibes', description: 'Experience the rich aroma and artisanal craft of our signature blends, perfected since 1979.' },
  { id: 2, image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80', title: 'THE PERFECT ROAST', tagline: 'Hand-Picked Beans', description: 'We source only the finest organic beans from sustainable farms across the globe.' },
  { id: 3, image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80', title: 'BORN IN 1979', tagline: 'A Legacy of Flavor', description: 'Join us in our cozy corner where every cup tells a story of tradition and passion.' }
];

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'MENU', href: '#menu' },
  { name: 'GALLERY', href: '#gallery' },
  { name: 'CONTACT', href: '#contact' },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Lock body scroll when menu is open to prevent width shifts
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none'; // Extra protection for mobile
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
    }
  }, [isMenuOpen]);

  return (
    // Changed h-screen to h-[100dvh] for perfect mobile height
    <section className="relative h-dvh w-full overflow-hidden bg-black text-white" id='home'>
      
{/* --- Navigation Bar --- */}
<nav className="absolute top-0 left-0 w-full z-100 flex items-center justify-between px-6 py-6 md:px-12">
  <div className="flex items-center gap-2">
    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border-2 border-white bg-transparent text-[8px] md:text-[10px] font-bold leading-none shrink-0">
      <span className="text-center">CAFFE<br/>1979</span>
    </div>
    <span className="text-lg font-bold tracking-widest md:text-2xl truncate uppercase">CAFFEINATED</span>
  </div>

  {/* Desktop Menu */}
  <div className="hidden space-x-8 text-sm font-medium tracking-wide md:flex">
    {navLinks.map((link) => (
      <a key={link.name} href={link.href} className="hover:text-yellow-500 transition-colors uppercase">
        {link.name}
      </a>
    ))}
  </div>
</nav>

{/* --- FIXED TOGGLE BUTTON --- */}
{/* Moving this outside the <nav> ensures it stays on top of the overlay */}
<button 
  className="fixed right-6 top-7 z-120 md:hidden p-2 outline-none" 
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  {isMenuOpen ? (
    <X size={32} className="text-yellow-500" /> 
  ) : (
    <Menu size={32} className="text-white" />
  )}
</button>

{/* --- Mobile Menu Overlay --- */}
<AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-110 flex flex-col items-center justify-center bg-black/98 backdrop-blur-xl md:hidden"
    >
      <div className="flex flex-col items-center space-y-10">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-black tracking-widest text-white hover:text-yellow-500 uppercase"
          >
            {link.name}
          </motion.a>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>

      {/* --- Carousel Background --- */}
      {/* Fixed: Added inset-0 and w-full to prevent width bleed */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- Hero Content --- */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center md:items-start md:px-24 md:text-left">
        <div className="w-full max-w-4xl">
          <motion.p 
            key={`tagline-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-2 text-xs font-semibold tracking-[0.3em] text-yellow-500 md:text-lg uppercase"
          >
            {slides[current].tagline}
          </motion.p>
          
          <motion.h1 
            key={`title-${current}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-4xl font-extrabold tracking-tight md:text-7xl lg:text-8xl leading-[1.1]"
          >
            {slides[current].title}
          </motion.h1>

          <motion.p 
            key={`desc-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 max-w-md mx-auto md:mx-0 text-sm leading-relaxed text-gray-300 md:text-base"
          >
            {slides[current].description}
          </motion.p>

          <div className="flex justify-center md:justify-start">
            <motion.a 
              href="#menu"
              whileTap={{ scale: 0.95 }}
              className="border-2 border-yellow-500 px-8 py-3 text-sm font-bold tracking-widest text-yellow-500 active:bg-yellow-500 active:text-black transition-all"
            >
              VIEW MENU
            </motion.a>
          </div>
        </div>

        {/* --- Carousel Indicators --- */}
        <div className="absolute bottom-10 left-0 w-full flex justify-center md:justify-start md:left-24 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                current === index ? 'bg-yellow-500 w-10' : 'bg-white/30 w-4'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;