import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollProvider } from './contexts/ScrollContext';
import Hero from './components/Hero';
import Location from './components/Location';
import PhotoGallery from './components/PhotoGallery';
import Timing from './components/Timing';
import Wishlist from './components/Wishlist';
import DressCode from './components/DressCode';
import RSVPForm from './components/RSVPForm';
import Contacts from './components/Contacts';
import FullScreenParallax from './components/FullScreenParallax';
import ProgressIndicator from './components/ProgressIndicator';
import ScrollHint from './components/ScrollHint';
import DebugControls from './components/DebugControls';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollProvider totalSections={8}>
        <div className="app">
          <Routes>
            <Route path="/" element={
              <>
                {/* <DebugControls /> */}
                <ProgressIndicator totalSections={8} />
                <ScrollHint />
                
                <FullScreenParallax index={0} totalSections={8}>
                  <Hero />
                </FullScreenParallax>
                
                <FullScreenParallax index={1} totalSections={8}>
                  <PhotoGallery />
                </FullScreenParallax>

                 <FullScreenParallax index={2} totalSections={8}>
                  <Location />
                </FullScreenParallax>
                
                <FullScreenParallax index={3} totalSections={8}>
                  <Timing />
                </FullScreenParallax>
                
                <FullScreenParallax index={4} totalSections={8}>
                  <Wishlist />
                </FullScreenParallax>
                
                <FullScreenParallax index={5} totalSections={8}>
                  <DressCode />
                </FullScreenParallax>
                
                <FullScreenParallax index={6} totalSections={8}>
                  <RSVPForm />
                </FullScreenParallax>
                
                <FullScreenParallax index={7} totalSections={8}>
                  <Contacts />
                </FullScreenParallax>
              </>
            } />
          </Routes>
        </div>
      </ScrollProvider>
    </Router>
  );
}

export default App;
