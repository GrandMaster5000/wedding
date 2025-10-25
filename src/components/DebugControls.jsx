import React from 'react';
import { useScroll } from '../contexts/ScrollContext';

const DebugControls = () => {
  const { currentSection, scrollToSection, totalSections } = useScroll();

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      left: '10px',
      zIndex: 9999,
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '12px'
    }}>
      <div>Current Section: {currentSection}</div>
      <div>Total Sections: {totalSections}</div>
      <div style={{ marginTop: '10px' }}>
        {Array.from({ length: totalSections }, (_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            style={{
              margin: '2px',
              padding: '5px 10px',
              backgroundColor: index === currentSection ? '#d4af37' : '#333',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer'
            }}
          >
            {index}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DebugControls;
