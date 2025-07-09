import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Portd from '../assets/portd.jpg';
import Portda from '../assets/porta.webp';
import Portdb from '../assets/portb.jpg';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    { id: 1, src: Portd, alt: 'Edgar Allan Poe Portrait 1' },
    { id: 2, src: Portda, alt: 'Edgar Allan Poe Portrait 2' },
    { id: 3, src: Portdb, alt: 'Edgar Allan Poe Portrait 3' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 10000); // 10 saniye
    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Photo Slider */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="w-full h-96 md:h-[500px] object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            
            {/* Navigation Buttons - Sadece hover'da görünür */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-white"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-white"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-accent' : 'bg-secondary/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Biography */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="gothic-title text-3xl md:text-4xl">About the Master</h2>
          <div className="space-y-4 text-secondary leading-relaxed text-lg">
            <p>
              Edgar Allan Poe was born on January 19, 1809, in Boston, Massachusetts. 
              His life was marked by tragedy and brilliance, creating a legacy that 
              would forever change the landscape of American literature.
            </p>
            <p>
              Orphaned at a young age, Poe was taken in by John and Frances Allan of 
              Richmond, Virginia. His tumultuous relationship with his foster father 
              and his struggles with gambling and alcohol would shape much of his 
              later work and life.
            </p>
            <p>
              Despite his personal demons, Poe's literary genius was undeniable. 
              He pioneered the detective fiction genre with "The Murders in the 
              Rue Morgue" and created some of the most haunting poetry and short 
              stories ever written.
            </p>
            <p>
              His mysterious death in 1849 at the age of 40 only added to the 
              legend of this literary master, whose works continue to inspire 
              and terrify readers to this day.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 