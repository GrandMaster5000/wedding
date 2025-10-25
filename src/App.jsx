import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Location from './components/Location';
import Timing from './components/Timing';
import Wishlist from './components/Wishlist';
import DressCode from './components/DressCode';
import RSVPForm from './components/RSVPForm';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div className="section-divider">
                <img src="/images/divider.svg" alt="Divider" />
              </div>
              <Location />
              <div className="section-divider">
                <img src="/images/divider.svg" alt="Divider" />
              </div>
              <Timing />
              <div className="section-divider">
                <img src="/images/divider.svg" alt="Divider" />
              </div>
              <Wishlist />
              <div className="section-divider">
                <img src="/images/divider.svg" alt="Divider" />
              </div>
              <DressCode />
              <div className="section-divider">
                <img src="/images/divider.svg" alt="Divider" />
              </div>
              <RSVPForm />
              <div className="section-divider">
                <img src="/images/divider.svg" alt="Divider" />
              </div>
              <Contacts />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
