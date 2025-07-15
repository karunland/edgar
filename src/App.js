import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import OGImage from './components/OGImage';
import './App.css';

function App() {
  const [shouldPlayMusic, setShouldPlayMusic] = useState(null);

  const handleMusicChoice = (wantsMusic) => {
    setShouldPlayMusic(wantsMusic);
  };

  return (
    <Router>
      <Routes>
        <Route path="/og-image" element={<OGImage />} />
        <Route path="/" element={
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
        } />
      </Routes>
    </Router>
  );
}

export default App;
