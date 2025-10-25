import React, { useEffect, useRef, useState } from 'react';
import { useScroll } from '../contexts/ScrollContext';
import './FullScreenParallax.css';

const FullScreenParallax = ({ children, index, totalSections }) => {
  const sectionRef = useRef(null);
  const { currentSection, scrollProgress, isScrolling } = useScroll();
  const [isActive, setIsActive] = useState(index === 0);

  useEffect(() => {
    const isCurrentSection = currentSection === index;
    setIsActive(isCurrentSection);
  }, [currentSection, index]);

  return (
    <div 
      ref={sectionRef}
      className={`fullscreen-section ${isActive ? 'active' : ''} ${isScrolling ? 'scrolling' : ''}`}
      style={{
        '--section-index': index,
        '--total-sections': totalSections,
        '--scroll-progress': scrollProgress,
        '--is-active': isActive ? 1 : 0
      }}
    >
      <div className="section-content">
        {children}
      </div>
    </div>
  );
};

export default FullScreenParallax;
