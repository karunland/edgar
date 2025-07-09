import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, X, Quote } from 'lucide-react';

const Works = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  const works = [
    {
      id: 1,
      title: 'The Raven',
      type: 'Poem',
      year: '1845',
      description: 'A narrative poem about a talking raven\'s mysterious visit to a distraught lover.',
      quote: '"Quoth the Raven, Nevermore."',
      fullQuote: '"Quoth the Raven, Nevermore." - The most famous line from Poe\'s masterpiece, symbolizing the narrator\'s descent into madness and the permanence of loss.',
      genre: 'Gothic Poetry'
    },
    {
      id: 2,
      title: 'The Tell-Tale Heart',
      type: 'Short Story',
      year: '1843',
      description: 'A psychological thriller about a murderer haunted by the sound of his victim\'s heartbeat.',
      quote: '"It is impossible to say how first the idea entered my brain."',
      fullQuote: '"It is impossible to say how first the idea entered my brain; but once conceived, it haunted me day and night." - The opening lines that set the tone for this masterpiece of psychological horror.',
      genre: 'Psychological Horror'
    },
    {
      id: 3,
      title: 'The Murders in the Rue Morgue',
      type: 'Short Story',
      year: '1841',
      description: 'The first modern detective story featuring C. Auguste Dupin.',
      quote: '"The analytical power should not be confounded with simple ingenuity."',
      fullQuote: '"The analytical power should not be confounded with simple ingenuity; for while the analyst is necessarily ingenious, the ingenious man is often remarkably incapable of analysis." - Poe\'s philosophy on detective work.',
      genre: 'Detective Fiction'
    },
    {
      id: 4,
      title: 'Annabel Lee',
      type: 'Poem',
      year: '1849',
      description: 'A romantic poem about the death of a beautiful woman and the narrator\'s undying love.',
      quote: '"But we loved with a love that was more than love."',
      fullQuote: '"But we loved with a love that was more than love—I and my Annabel Lee—With a love that the wingèd seraphs of Heaven Coveted her and me." - A testament to eternal love beyond death.',
      genre: 'Romantic Poetry'
    },
    {
      id: 5,
      title: 'The Fall of the House of Usher',
      type: 'Short Story',
      year: '1839',
      description: 'A gothic tale about the decline of a family and their ancestral home.',
      quote: '"During the whole of a dull, dark, and soundless day."',
      fullQuote: '"During the whole of a dull, dark, and soundless day in the autumn of the year, when the clouds hung oppressively low in the heavens." - The atmospheric opening that sets the gothic mood.',
      genre: 'Gothic Fiction'
    },
    {
      id: 6,
      title: 'The Pit and the Pendulum',
      type: 'Short Story',
      year: '1842',
      description: 'A tale of torture and survival during the Spanish Inquisition.',
      quote: '"I was sick—sick unto death with that long agony."',
      fullQuote: '"I was sick—sick unto death with that long agony; and when they at length unbound me, and I was permitted to sit, I felt that my senses were leaving me." - The intense opening that immediately draws readers into the horror.',
      genre: 'Horror'
    }
  ];

  return (
    <section id="works" className="section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="gothic-title text-3xl md:text-4xl mb-4">Literary Works</h2>
          <p className="text-secondary text-lg">
            Masterpieces that shaped the landscape of horror, mystery, and poetry
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setSelectedWork(work)}
            >
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-accent" />
                <div>
                  <span className="text-accent text-sm font-semibold">{work.type}</span>
                  <span className="text-secondary text-sm ml-2">• {work.year}</span>
                </div>
              </div>
              
              <h3 className="font-gothic text-xl font-semibold text-text mb-3">
                {work.title}
              </h3>
              
              <p className="text-secondary text-sm leading-relaxed mb-4">
                {work.description}
              </p>
              
              <div className="flex items-center gap-2 text-accent/70">
                <Quote className="w-4 h-4" />
                <span className="text-sm italic">{work.quote}</span>
              </div>
              
              <div className="mt-4">
                <span className="inline-block bg-accent/20 text-accent text-xs px-3 py-1 rounded-full">
                  {work.genre}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedWork && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedWork(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="card max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="gothic-title text-2xl mb-2">{selectedWork.title}</h3>
                    <div className="flex items-center gap-4 text-secondary">
                      <span>{selectedWork.type}</span>
                      <span>•</span>
                      <span>{selectedWork.year}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedWork(null)}
                    className="text-secondary hover:text-text transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <p className="text-secondary leading-relaxed">
                    {selectedWork.description}
                  </p>
                  
                  <div className="border-l-4 border-accent pl-4 py-2">
                    <p className="text-text italic text-lg leading-relaxed">
                      "{selectedWork.fullQuote}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-accent font-semibold">Genre:</span>
                    <span className="text-secondary">{selectedWork.genre}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Works; 