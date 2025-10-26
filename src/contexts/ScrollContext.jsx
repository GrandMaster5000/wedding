import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const ScrollContext = createContext();

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};

export const ScrollProvider = ({ children, totalSections = 7 }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const currentSectionRef = useRef(0);
  const lastWheelTime = useRef(0);

  // Обновляем ref при изменении currentSection
  useEffect(() => {
    currentSectionRef.current = currentSection;
  }, [currentSection]);

  // Сбрасываем текущую секцию если она выходит за пределы totalSections
  useEffect(() => {
    if (currentSection >= totalSections) {
      setCurrentSection(totalSections - 1);
    }
  }, [totalSections, currentSection]);

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;

    const handleWheel = (e) => {
      e.preventDefault();
      
      const now = Date.now();
      // Защита от множественных событий тачпада - минимум 500ms между переключениями
      if (now - lastWheelTime.current < 500) {
        return;
      }
      
      const delta = e.deltaY;
      const direction = delta > 0 ? 1 : -1;
      const newSection = Math.max(0, Math.min(totalSections - 1, currentSectionRef.current + direction));
      
      if (newSection !== currentSectionRef.current) {
        lastWheelTime.current = now;
        setCurrentSection(newSection);
        setScrollProgress(0);
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
    };

    const handleTouchEnd = (e) => {
      touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      
      if (Math.abs(deltaY) > 30) { // Минимальное расстояние свайпа
        const direction = deltaY > 0 ? 1 : -1;
        const newSection = Math.max(0, Math.min(totalSections - 1, currentSectionRef.current + direction));
        
        if (newSection !== currentSectionRef.current) {
          setCurrentSection(newSection);
          setScrollProgress(0);
        }
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        const newSection = Math.min(totalSections - 1, currentSectionRef.current + 1);
        if (newSection !== currentSectionRef.current) {
          setCurrentSection(newSection);
          setScrollProgress(0);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        const newSection = Math.max(0, currentSectionRef.current - 1);
        if (newSection !== currentSectionRef.current) {
          setCurrentSection(newSection);
          setScrollProgress(0);
        }
      }
    };

    // Предотвращаем обычный скролл
    document.body.style.overflow = 'hidden';
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [totalSections]);

  const scrollToSection = (index) => {
    const newSection = Math.max(0, Math.min(totalSections - 1, index));
    if (newSection !== currentSectionRef.current) {
      setCurrentSection(newSection);
      setScrollProgress(0);
    }
  };

  const value = {
    currentSection,
    scrollProgress,
    totalSections,
    scrollToSection
  };

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
};
