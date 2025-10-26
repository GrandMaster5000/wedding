import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ScrollProvider } from './contexts/ScrollContext';
import Hero from './components/Hero';
import PersonalInvitation from './components/PersonalInvitation';
import Location from './components/Location';
import PhotoGallery from './components/PhotoGallery';
import Timing from './components/Timing';
import Wishlist from './components/Wishlist';
import Contacts from './components/Contacts';
import FullScreenParallax from './components/FullScreenParallax';
import ProgressIndicator from './components/ProgressIndicator';
import ScrollHint from './components/ScrollHint';
import './App.css';

function MainContent() {
  const location = useLocation();
  const path = location.pathname.slice(1);
  const hasPersonalInvitation = path && path.length > 0;
  
  const totalSections = hasPersonalInvitation ? 7 : 6;
  
  // Определяем индексы секций
  let currentIndex = 0;
  const heroIndex = currentIndex++;
  const personalInvitationIndex = hasPersonalInvitation ? currentIndex++ : -1;
  const timingIndex = currentIndex++;
  const locationIndex = currentIndex++;
  const wishlistIndex = currentIndex++;
  const photoGalleryIndex = currentIndex++;
  const contactsIndex = currentIndex++;
  
  return (
    <>
      {/* <DebugControls /> */}
      <ProgressIndicator totalSections={totalSections} />
      <ScrollHint />
      
      <FullScreenParallax index={heroIndex} totalSections={totalSections}>
        <Hero />
      </FullScreenParallax>
      
      {hasPersonalInvitation && personalInvitationIndex !== -1 && (
        <FullScreenParallax index={personalInvitationIndex} totalSections={totalSections}>
          <PersonalInvitation />
        </FullScreenParallax>
      )}
      
      <FullScreenParallax index={timingIndex} totalSections={totalSections}>
        <Timing />
      </FullScreenParallax>

      <FullScreenParallax index={locationIndex} totalSections={totalSections}>
        <Location />
      </FullScreenParallax>
      
      
      <FullScreenParallax index={wishlistIndex} totalSections={totalSections}>
        <Wishlist />
      </FullScreenParallax>
      
      {/* <FullScreenParallax index={dressCodeIndex} totalSections={totalSections}>
        <DressCode />
      </FullScreenParallax> */}
      
      {/* <FullScreenParallax index={rsvpFormIndex} totalSections={totalSections}>
        <RSVPForm />
      </FullScreenParallax> */}

       <FullScreenParallax index={photoGalleryIndex} totalSections={totalSections}>
        <PhotoGallery />
      </FullScreenParallax>
      
      <FullScreenParallax index={contactsIndex} totalSections={totalSections}>
        <Contacts />
      </FullScreenParallax>
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const path = location.pathname.slice(1);
  const hasPersonalInvitation = path && path.length > 0;
  const totalSections = hasPersonalInvitation ? 7 : 6;
  
  return (
    <ScrollProvider totalSections={totalSections}>
      <div className="app">
        <MainContent />
      </div>
    </ScrollProvider>
  );
}

function App() {
  return (
    <Router basename="/wedding">
      <Routes>
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;
