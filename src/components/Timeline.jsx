import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Timeline = () => {
  const timelineEvents = [
    {
      year: '1809',
      title: 'Birth in Boston',
      description: 'Edgar Allan Poe is born to actors David and Elizabeth Poe in Boston, Massachusetts.',
      location: 'Boston, MA'
    },
    {
      year: '1811',
      title: 'Orphaned',
      description: 'Both parents die, leaving Edgar and his siblings orphaned. He is taken in by John and Frances Allan.',
      location: 'Richmond, VA'
    },
    {
      year: '1826',
      title: 'University of Virginia',
      description: 'Enrolls at the University of Virginia but leaves after one year due to gambling debts.',
      location: 'Charlottesville, VA'
    },
    {
      year: '1827',
      title: 'First Poetry Collection',
      description: 'Publishes his first collection of poems, "Tamerlane and Other Poems" under the pseudonym "A Bostonian".',
      location: 'Boston, MA'
    },
    {
      year: '1831',
      title: 'West Point',
      description: 'Enrolls at West Point Military Academy but is dismissed for neglecting his duties.',
      location: 'West Point, NY'
    },
    {
      year: '1835',
      title: 'Marriage to Virginia',
      description: 'Marries his 13-year-old cousin Virginia Clemm, who would become the inspiration for many of his works.',
      location: 'Richmond, VA'
    },
    {
      year: '1841',
      title: 'First Detective Story',
      description: 'Publishes "The Murders in the Rue Morgue", considered the first modern detective story.',
      location: 'Philadelphia, PA'
    },
    {
      year: '1845',
      title: 'The Raven',
      description: 'Publishes "The Raven", which brings him national fame and becomes his most famous work.',
      location: 'New York, NY'
    },
    {
      year: '1847',
      title: 'Virginia\'s Death',
      description: 'Virginia dies of tuberculosis, devastating Poe and inspiring some of his darkest works.',
      location: 'New York, NY'
    },
    {
      year: '1849',
      title: 'Mysterious Death',
      description: 'Found delirious in Baltimore and dies under mysterious circumstances at the age of 40.',
      location: 'Baltimore, MD'
    }
  ];

  return (
    <section id="timeline" className="section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="gothic-title text-3xl md:text-4xl mb-4">Life Timeline</h2>
          <p className="text-secondary text-lg">
            A journey through the life of Edgar Allan Poe
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform md:-translate-x-1/2"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full transform md:-translate-x-1/2 z-10"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="card">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="font-gothic text-accent font-semibold">{event.year}</span>
                  </div>
                  <h3 className="font-gothic text-xl font-semibold text-text mb-2">
                    {event.title}
                  </h3>
                  <p className="text-secondary leading-relaxed mb-3">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-2 text-secondary/70">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline; 