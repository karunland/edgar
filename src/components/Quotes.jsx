import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Quotes = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const quotes = [
    {
      id: 1,
      text: "All that we see or seem is but a dream within a dream.",
      source: "A Dream Within a Dream",
      year: "1849"
    },
    {
      id: 2,
      text: "I became insane, with long intervals of horrible sanity.",
      source: "Letter to George W. Eveleth",
      year: "1848"
    },
    {
      id: 3,
      text: "The boundaries which divide Life from Death are at best shadowy and vague. Who shall say where the one ends, and where the other begins?",
      source: "The Premature Burial",
      year: "1844"
    },
    {
      id: 4,
      text: "Words have no power to impress the mind without the exquisite horror of their reality.",
      source: "The Fall of the House of Usher",
      year: "1839"
    },
    {
      id: 5,
      text: "I have no faith in human perfectibility. I think that human exertion will have no appreciable effect upon humanity. Man is now only more active—not more happy—nor more wise, than he was 6000 years ago.",
      source: "Letter to James Russell Lowell",
      year: "1844"
    },
    {
      id: 6,
      text: "The death of a beautiful woman is, unquestionably, the most poetical topic in the world.",
      source: "The Philosophy of Composition",
      year: "1846"
    },
    {
      id: 7,
      text: "I was never really insane except upon occasions when my heart was touched.",
      source: "Letter to Annie Richmond",
      year: "1848"
    },
    {
      id: 8,
      text: "The scariest moment is always just before you start.",
      source: "On Writing",
      year: "1846"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  const nextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuoteIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section id="quotes" className="section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="gothic-title text-3xl md:text-4xl mb-4">Memorable Quotes</h2>
          <p className="text-secondary text-lg">
            The haunting words that echo through time
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuoteIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="card max-w-3xl mx-auto relative">
                <div className="absolute top-6 left-6 text-accent/30">
                  <Quote className="w-8 h-8" />
                </div>
                <div className="absolute top-6 right-6 text-accent/30">
                  <Quote className="w-8 h-8 transform rotate-180" />
                </div>
                
                <div className="px-16 py-12">
                  <blockquote className="text-2xl md:text-3xl font-serif italic text-text leading-relaxed mb-8">
                    "{quotes[currentQuoteIndex].text}"
                  </blockquote>
                  
                  <div className="text-center">
                    <cite className="font-gothic text-lg text-accent">
                      — {quotes[currentQuoteIndex].source}
                    </cite>
                    <div className="text-secondary text-sm mt-2">
                      {quotes[currentQuoteIndex].year}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={prevQuote}
              className="bg-accent/20 hover:bg-accent/40 text-accent p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex space-x-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuoteIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentQuoteIndex ? 'bg-accent' : 'bg-secondary/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextQuote}
              className="bg-accent/20 hover:bg-accent/40 text-accent p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-secondary text-sm">
            Quotes automatically rotate every 10 seconds
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Quotes; 