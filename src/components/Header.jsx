import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import PoePortrait from '../assets/portre1.avif';

const Header = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="header" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80 z-10"></div>
      <div className="relative z-20 text-center max-w-4xl mx-auto">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="w-48 h-64 md:w-56 md:h-72 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl">
              <img
                src={PoePortrait}
                alt="Edgar Allan Poe Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-accent/20 animate-pulse"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="gothic-title mb-4">
            Edgar Allan Poe
          </h1>
          <p className="gothic-subtitle mb-8">
            Master of the Macabre & Father of the Detective Story
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl text-secondary leading-relaxed mb-8">
            "All that we see or seem is but a dream within a dream."
          </p>
          <p className="text-base md:text-lg text-secondary/80 leading-relaxed">
            A literary genius whose dark imagination shaped the landscape of horror, 
            mystery, and poetry. His works continue to haunt and inspire readers 
            across generations.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12"
        >
          <motion.button
            onClick={scrollToAbout}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <ChevronDown className="w-8 h-8 text-accent mx-auto animate-bounce" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Header; 