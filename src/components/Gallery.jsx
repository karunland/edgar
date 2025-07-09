import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      id: 1,
      src: 'https://placehold.co/600x400/8B0000/FFFFFF?text=Poe+Portrait+1',
      alt: 'Edgar Allan Poe Portrait',
      title: 'The Master Himself',
      description: 'A haunting portrait of the literary genius'
    },
    {
      id: 2,
      src: 'https://placehold.co/600x400/1A1A1A/FFFFFF?text=Gothic+Manor',
      alt: 'Gothic Manor',
      title: 'The House of Usher',
      description: 'Inspired by Poe\'s gothic masterpiece'
    },
    {
      id: 3,
      src: 'https://placehold.co/600x400/0B0C10/FFFFFF?text=Raven+Silhouette',
      alt: 'Raven Silhouette',
      title: 'Nevermore',
      description: 'The iconic raven from Poe\'s most famous poem'
    },
    {
      id: 4,
      src: 'https://placehold.co/600x400/8B0000/FFFFFF?text=Manuscript',
      alt: 'Old Manuscript',
      title: 'Original Manuscript',
      description: 'Poe\'s handwritten notes and drafts'
    },
    {
      id: 5,
      src: 'https://placehold.co/600x400/1A1A1A/FFFFFF?text=Study+Room',
      alt: 'Victorian Study',
      title: 'The Study',
      description: 'Where Poe crafted his dark tales'
    },
    {
      id: 6,
      src: 'https://placehold.co/600x400/0B0C10/FFFFFF?text=Cemetery',
      alt: 'Cemetery Scene',
      title: 'The Final Resting Place',
      description: 'Poe\'s grave and memorial'
    }
  ];

  // Otomatik geçiş için timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 10000); // 10 saniye
    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => {
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img.id === selectedImage.id);
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setSelectedImage(images[prevIndex]);
    }
  };

  return (
    <section id="gallery" className="section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="gothic-title text-3xl md:text-4xl mb-4">Photo Gallery</h2>
          <p className="text-secondary text-lg">
            Visual journey through Poe's world and legacy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-2xl group-hover:shadow-accent/20 transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-gothic text-lg font-semibold text-text mb-1">
                      {image.title}
                    </h3>
                    <p className="text-secondary text-sm">
                      {image.description}
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-accent/80 text-text p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-20 bg-accent/80 hover:bg-accent text-text p-2 rounded-full transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-accent/80 hover:bg-accent text-text p-3 rounded-full transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-accent/80 hover:bg-accent text-text p-3 rounded-full transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image */}
                <div className="relative">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                  />
                  
                  {/* Image Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                    <h3 className="font-gothic text-2xl font-semibold text-text mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-secondary">
                      {selectedImage.description}
                    </p>
                  </div>
                </div>

                {/* Image Counter */}
                <div className="absolute top-4 left-4 bg-accent/80 text-text px-3 py-1 rounded-full text-sm">
                  {images.findIndex(img => img.id === selectedImage.id) + 1} / {images.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery; 