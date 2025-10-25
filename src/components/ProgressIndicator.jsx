import React, { useEffect, useState } from 'react';
import './ProgressIndicator.css';

const ProgressIndicator = ({ totalSections }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      
      // Вычисляем общий прогресс скролла
      const scrollProgress = scrollTop / documentHeight;
      setProgress(scrollProgress);
      
      // Определяем текущую секцию
      const sectionHeight = window.innerHeight;
      const current = Math.min(Math.floor(scrollTop / sectionHeight), totalSections - 1);
      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Инициализация

    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalSections]);

  const scrollToSection = (index) => {
    const sectionHeight = window.innerHeight;
    const targetScroll = index * sectionHeight;
    
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <div className="progress-indicator">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${progress * 100}%` }}
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
