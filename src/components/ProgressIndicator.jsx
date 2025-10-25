import React from 'react';
import { useScroll } from '../contexts/ScrollContext';
import './ProgressIndicator.css';

const ProgressIndicator = ({ totalSections }) => {
  const { currentSection, scrollProgress, scrollToSection } = useScroll();

  const progressPercentage = ((currentSection + scrollProgress) / totalSections) * 100;

  return (
    <div className="progress-indicator">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      
      <div className="section-dots">
        {Array.from({ length: totalSections }, (_, index) => (
          <button
            key={index}
            className={`section-dot ${index === currentSection ? 'active' : ''}`}
            onClick={() => scrollToSection(index)}
            aria-label={`Перейти к секции ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
