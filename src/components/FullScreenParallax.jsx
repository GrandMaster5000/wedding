import React, { useEffect, useRef, useState } from 'react';
import './FullScreenParallax.css';

const FullScreenParallax = ({ children, index, totalSections }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Определяем, видна ли секция в viewport
        const isInView = rect.top < windowHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Вызываем сразу для инициализации

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`fullscreen-section ${isVisible ? 'visible' : ''}`}
      style={{
        '--section-index': index,
        '--total-sections': totalSections
      }}
    >
      <div className="section-content">
        {children}
      </div>
    </div>
  );
};

export default FullScreenParallax;
