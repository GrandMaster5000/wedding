import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Location from './components/Location';
import Timing from './components/Timing';
import Wishlist from './components/Wishlist';
import DressCode from './components/DressCode';
import RSVPForm from './components/RSVPForm';
import Contacts from './components/Contacts';
import FullScreenParallax from './components/FullScreenParallax';
import ProgressIndicator from './components/ProgressIndicator';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <ProgressIndicator totalSections={7} />
              
              <FullScreenParallax index={0} totalSections={7}>
                <Hero />
              </FullScreenParallax>
              
              <FullScreenParallax index={1} totalSections={7}>
                <Location />
              </FullScreenParallax>
              
              <FullScreenParallax index={2} totalSections={7}>
                <Timing />
              </FullScreenParallax>
              
              <FullScreenParallax index={3} totalSections={7}>
                <Wishlist />
              </FullScreenParallax>
              
              <FullScreenParallax index={4} totalSections={7}>
                <DressCode />
              </FullScreenParallax>
              
              <FullScreenParallax index={5} totalSections={7}>
                <RSVPForm />
              </FullScreenParallax>
              
              <FullScreenParallax index={6} totalSections={7}>
                <Contacts />
              </FullScreenParallax>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
