import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Headphones } from 'lucide-react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AudioSection = () => {
  const audioRefs = useRef({});

  // Mobil tarayıcılar için audio context'i başlat
  React.useEffect(() => {
    const initAudioContext = () => {
      if (typeof window !== 'undefined' && window.AudioContext) {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        if (audioContext.state === 'suspended') {
          audioContext.resume();
        }
      }
    };

    // Kullanıcı etkileşimi sonrası audio context'i başlat
    const handleUserInteraction = () => {
      initAudioContext();
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
    };

    document.addEventListener('touchstart', handleUserInteraction);
    document.addEventListener('click', handleUserInteraction);

    return () => {
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  const tracks = [
    {
      id: 1,
      title: 'The Raven (Narrated)',
      duration: '3:45',
      src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav', // Dummy audio
      description: 'A haunting narration of Poe\'s most famous poem'
    },
    {
      id: 2,
      title: 'Annabel Lee (Poetry Reading)',
      duration: '2:30',
      src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav', // Dummy audio
      description: 'The romantic tale of eternal love beyond death'
    },
    {
      id: 3,
      title: 'The Tell-Tale Heart (Audio Drama)',
      duration: '4:15',
      src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav', // Dummy audio
      description: 'A psychological thriller brought to life through sound'
    }
  ];

  const handlePlay = (trackId) => {
    // Pause all other tracks
    Object.keys(audioRefs.current).forEach(id => {
      if (id !== trackId.toString() && audioRefs.current[id]) {
        audioRefs.current[id].audio.current.pause();
      }
    });
  };

  return (
    <section id="audio" className="section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="gothic-title text-3xl md:text-4xl mb-4">Audio Experience</h2>
          <p className="text-secondary text-lg">
            Listen to Poe's works brought to life through audio
          </p>
        </motion.div>

        <div className="space-y-6">
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-gothic text-xl font-semibold text-text">
                    {track.title}
                  </h3>
                  <p className="text-secondary text-sm">
                    {track.description}
                  </p>
                </div>
                <div className="text-secondary text-sm">
                  {track.duration}
                </div>
              </div>

              <div className="custom-audio-player">
                <AudioPlayer
                  ref={(el) => {
                    audioRefs.current[track.id] = el;
                  }}
                  src={track.src}
                  onPlay={() => handlePlay(track.id)}
                  onCanPlay={() => {
                    // Mobil tarayıcılar için audio hazır olduğunda
                    if (audioRefs.current[track.id]?.audio?.current) {
                      audioRefs.current[track.id].audio.current.setAttribute('playsinline', '');
                      audioRefs.current[track.id].audio.current.setAttribute('webkit-playsinline', '');
                    }
                  }}
                  showJumpControls={true}
                  showFilledProgress={true}
                  customProgressBarSection={[
                    'PROGRESS_BAR',
                    'CURRENT_TIME',
                    'DURATION',
                  ]}
                  customControlsSection={[
                    'MAIN_CONTROLS',
                    'VOLUME_CONTROLS',
                  ]}
                  preload="metadata"
                  autoPlayAfterSrcChange={false}
                  showDownloadProgress={true}
                  showFilledVolume={true}
                  defaultCurrentTime="0:00"
                  defaultDuration="0:00"
                  style={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-secondary text-sm">
            * Audio files are for demonstration purposes. Replace with actual Poe readings.
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .custom-audio-player :global(.rhap_container) {
          background: transparent;
          box-shadow: none;
          padding: 0;
          border-radius: 8px;
        }
        
        .custom-audio-player :global(.rhap_main-controls-button) {
          color: #8B0000;
          width: 40px;
          height: 40px;
        }
        
        .custom-audio-player :global(.rhap_progress-filled) {
          background-color: #8B0000;
        }
        
        .custom-audio-player :global(.rhap_progress-indicator) {
          background-color: #8B0000;
          width: 16px;
          height: 16px;
        }
        
        .custom-audio-player :global(.rhap_progress-bar) {
          height: 6px;
          border-radius: 3px;
        }
        
        .custom-audio-player :global(.rhap_time) {
          color: #A9A9A9;
          font-size: 14px;
        }
        
        .custom-audio-player :global(.rhap_volume-controls) {
          color: #8B0000;
        }
        
        .custom-audio-player :global(.rhap_volume-bar) {
          height: 4px;
          border-radius: 2px;
        }
        
        .custom-audio-player :global(.rhap_volume-indicator) {
          width: 12px;
          height: 12px;
        }
        
        /* Mobil için özel stiller */
        @media (max-width: 768px) {
          .custom-audio-player :global(.rhap_container) {
            padding: 8px;
          }
          
          .custom-audio-player :global(.rhap_main-controls-button) {
            width: 36px;
            height: 36px;
          }
          
          .custom-audio-player :global(.rhap_progress-indicator) {
            width: 14px;
            height: 14px;
          }
          
          .custom-audio-player :global(.rhap_time) {
            font-size: 12px;
          }
          
          .custom-audio-player :global(.rhap_volume-controls) {
            display: flex !important;
          }
        }
        
        /* Touch cihazlar için daha büyük dokunma alanları */
        @media (hover: none) and (pointer: coarse) {
          .custom-audio-player :global(.rhap_main-controls-button) {
            min-width: 44px;
            min-height: 44px;
          }
          
          .custom-audio-player :global(.rhap_progress-indicator) {
            min-width: 20px;
            min-height: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default AudioSection; 