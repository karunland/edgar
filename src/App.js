import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Timeline from './components/Timeline';
import Works from './components/Works';
// import AudioSection from './components/AudioPlayer';
import Gallery from './components/Gallery';
import Quotes from './components/Quotes';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import BackgroundMusic from './components/BackgroundMusic';
import MusicPrompt from './components/MusicPrompt';
import './App.css';

function App() {
  const [shouldPlayMusic, setShouldPlayMusic] = useState(null);

  const handleMusicChoice = (wantsMusic) => {
    setShouldPlayMusic(wantsMusic);
  };

  return (
    <div className="App smooth-scroll">
      <MusicPrompt onMusicChoice={handleMusicChoice} />
      <BackgroundMusic shouldPlayMusic={shouldPlayMusic} />
      <Navigation />
      <Header />
      <About />
      <Timeline />
      <Works />
      {/* <AudioSection /> */}
      <Gallery />
      <Quotes />
      <Footer />
    </div>
  );
}

export default App;
