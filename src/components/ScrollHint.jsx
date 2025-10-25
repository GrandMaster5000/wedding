import React, { useState, useEffect } from 'react';
import { useScroll } from '../contexts/ScrollContext';
import './ScrollHint.css';

const ScrollHint = () => {
  const { currentSection, totalSections, scrollProgress } = useScroll();
  const [showHint, setShowHint] = useState(true);
  const [hintDirection, setHintDirection] = useState('down');

  useEffect(() => {
    // Скрываем подсказку после первого взаимодействия
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Определяем направление подсказки
    if (currentSection === 0) {
      setHintDirection('down');
    } else if (currentSection === totalSections - 1) {
      setHintDirection('up');
    } else {
      setHintDirection('both');
    }
  }, [currentSection, totalSections]);

  if (!showHint) return null;

  return (
    <div className={`scroll-hint ${hintDirection}`}>
      <div className="scroll-hint-content">
        <div className="scroll-hint-text">
          {hintDirection === 'down' && 'Прокрутите вниз'}
          {hintDirection === 'up' && 'Прокрутите вверх'}
          {hintDirection === 'both' && 'Прокрутите вверх или вниз'}
        </div>
        <div className="scroll-hint-arrows">
          {hintDirection !== 'down' && (
            <div className="scroll-arrow up">↑</div>
          )}
          {hintDirection !== 'up' && (
            <div className="scroll-arrow down">↓</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScrollHint;
