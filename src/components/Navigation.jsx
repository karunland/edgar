import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, Home, User, Clock, BookOpen, Headphones, Image, Quote, Heart } from 'lucide-react';

const Navigation = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const sections = [
    { id: 'header', name: 'Header', icon: Home },
    { id: 'about', name: 'About', icon: User },
    { id: 'timeline', name: 'Timeline', icon: Clock },
    { id: 'works', name: 'Works', icon: BookOpen },
    { id: 'gallery', name: 'Gallery', icon: Image },
    { id: 'quotes', name: 'Quotes', icon: Quote },
    { id: 'footer', name: 'Footer', icon: Heart },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // More accurate section detection
      let activeSection = 0;
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top;
          const elementBottom = rect.bottom;
          
          // Check if section is more than 50% visible in viewport
          if (elementTop < windowHeight * 0.5 && elementBottom > windowHeight * 0.5) {
            activeSection = index;
          }
        }
      });
      
      setCurrentSection(activeSection);
      
      if (scrollPosition > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToNext = () => {
    const nextSection = Math.min(currentSection + 1, sections.length - 1);
    scrollToSection(sections[nextSection].id);
  };

  const scrollToPrev = () => {
    const prevSection = Math.max(currentSection - 1, 0);
    scrollToSection(sections[prevSection].id);
  };

  return (
    <AnimatePresence>
      {(isVisible || true) && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
        >
          <div className="flex flex-col gap-3">
            {/* Section Indicators */}
            <div className="flex flex-col gap-2 bg-hover/80 backdrop-blur-sm rounded-full p-2 border border-accent/20">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`relative p-2 rounded-full transition-all duration-300 ${
                      index === currentSection
                        ? 'text-accent bg-accent/20'
                        : 'text-secondary hover:text-accent hover:bg-accent/10'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={section.name}
                  >
                    <Icon className="w-4 h-4" />
                    {index === currentSection && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-accent/20 rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navigation; 