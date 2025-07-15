import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, X, Volume2, Headphones } from 'lucide-react';

const MusicPrompt = ({ onMusicChoice }) => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Show prompt after a short delay when site loads
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const handleChoice = (wantsMusic) => {
    setShowPrompt(false);
    onMusicChoice(wantsMusic);
  };

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.5, type: "spring", damping: 25 }}
            className="relative max-w-md w-full"
          >
            {/* Close Button */}
            <button
              onClick={() => handleChoice(false)}
              className="absolute -top-4 -right-4 bg-accent/80 hover:bg-accent text-text p-2 rounded-full transition-all duration-300 z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Main Modal */}
            <div className="bg-hover border border-accent/30 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <Headphones className="w-8 h-8 text-accent" />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-gothic text-2xl font-semibold text-text text-center mb-4">
                Background Music
              </h3>

              {/* Description */}
              <p className="text-secondary text-center mb-8 leading-relaxed">
                Would you like to listen to atmospheric music while browsing?
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleChoice(true)}
                  className="flex-1 bg-accent hover:bg-accent/90 text-text py-3 px-6 rounded-lg transition-all duration-300 font-gothic flex items-center justify-center gap-2"
                >
                  <Music className="w-5 h-5" />
                  Yes
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleChoice(false)}
                  className="flex-1 bg-hover border border-accent/30 hover:bg-accent/10 text-text py-3 px-6 rounded-lg transition-all duration-300 font-gothic"
                >
                  No
                </motion.button>
              </div>

              {/* Additional Info */}
              <p className="text-secondary/70 text-xs text-center mt-6">
                You can control music from the top-right corner.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MusicPrompt; 