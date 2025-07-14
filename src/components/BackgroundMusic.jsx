import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Volume1, Volume, Play, Pause, SlidersHorizontal } from 'lucide-react';
import backgroundMusic from '../assets/TheFalloftheHouseofUsher-AlanParsonsProject02.mp3';

const BackgroundMusic = ({ shouldPlayMusic }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize audio when component mounts
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
    }
  }, [volume]);

  useEffect(() => {
    // Start music if user chose to listen
    if (shouldPlayMusic && audioRef.current && !isPlaying) {
      const startMusic = () => {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.log('Audio autoplay prevented:', error);
          // If autoplay fails, try to start on first user interaction
          const handleUserInteraction = () => {
            audioRef.current.play().then(() => {
              setIsPlaying(true);
            }).catch((err) => {
              console.log('Audio still cannot play:', err);
            });
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('keydown', handleUserInteraction);
            document.removeEventListener('touchstart', handleUserInteraction);
          };
          
          document.addEventListener('click', handleUserInteraction);
          document.addEventListener('keydown', handleUserInteraction);
          document.addEventListener('touchstart', handleUserInteraction);
        });
      };
      
      // Try to start immediately
      startMusic();
    }
  }, [shouldPlayMusic, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0) {
      setIsMuted(false);
    }
  };

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return VolumeX;
    if (volume < 0.3) return Volume;
    if (volume < 0.7) return Volume1;
    return Volume2;
  };

  const VolumeIcon = getVolumeIcon();

  return (
    <>
      <audio ref={audioRef} src={backgroundMusic} preload="auto" />
      
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed top-6 right-6 z-50 flex items-center gap-2"
      >
        {/* Play/Pause Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlayPause}
          className="bg-accent/20 hover:bg-accent/40 text-accent hover:text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-accent/30"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </motion.button>

        {/* Volume Control Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMute}
          className="bg-accent/20 hover:bg-accent/40 text-accent hover:text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-accent/30"
        >
          <VolumeIcon className="w-5 h-5" />
        </motion.button>

        {/* Volume Slider */}
        <AnimatePresence>
          {showVolumeSlider && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 120 }}
              exit={{ opacity: 0, width: 0 }}
              className="bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full p-2"
            >
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full h-2 bg-accent/30 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #8B0000 0%, #8B0000 ${volume * 100}%, rgba(139, 0, 0, 0.3) ${volume * 100}%, rgba(139, 0, 0, 0.3) 100%)`
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Volume Slider Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowVolumeSlider(!showVolumeSlider)}
          className="bg-accent/20 hover:bg-accent/40 text-accent hover:text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-accent/30"
        >
          <SlidersHorizontal className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Custom CSS for slider */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #8B0000;
          cursor: pointer;
          border: 2px solid rgba(139, 0, 0, 0.3);
        }
        
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #8B0000;
          cursor: pointer;
          border: 2px solid rgba(139, 0, 0, 0.3);
        }
      `}</style>
    </>
  );
};

export default BackgroundMusic; 