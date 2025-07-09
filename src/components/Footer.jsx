import React from 'react';
import { motion } from 'framer-motion';
import { Heart, BookOpen, Moon } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="section bg-hover border-t border-accent/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex justify-center items-center gap-2 mb-6">
            <BookOpen className="w-6 h-6 text-accent" />
            <h3 className="font-gothic text-2xl font-semibold text-text">
              Edgar Allan Poe
            </h3>
            <Moon className="w-6 h-6 text-accent" />
          </div>
          
          <p className="text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            "All that we see or seem is but a dream within a dream." 
            <br />
            The legacy of Edgar Allan Poe continues to inspire and haunt readers across generations.
          </p>
          
          <div className="flex justify-center items-center gap-4 text-secondary">
            <span>1809</span>
            <Heart className="w-4 h-4 text-accent" />
            <span>1849</span>
          </div>
          
          <div className="border-t border-accent/20 pt-6">
            <p className="text-secondary/70 text-sm">
              © 2024 Edgar Allan Poe Tribute. Created with passion for gothic literature.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 