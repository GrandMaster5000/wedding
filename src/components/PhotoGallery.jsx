import React, { useState, useEffect, useRef } from 'react';
import { useScroll } from '../contexts/ScrollContext';
import './PhotoGallery.css';

// Массив фотографий (пока 2, но заложено место для 6)
const photos = [
  {
    id: 1,
    src: '/our-photos/2025-10-25 22.48.11.jpg',
    alt: 'Наше фото 1',
    caption: 'Первый момент вместе'
  },
  {
    id: 2,
    src: '/our-photos/2025-10-25 22.24.53.jpg',
    alt: 'Наше фото 2',
    caption: 'Счастливые моменты'
  },
  {
    id: 3,
    src: '/our-photos/2025-10-25 22.34.04.jpg',
    alt: 'Наше фото 3',
    caption: 'Вместе навсегда'
  },
  {
    id: 4,
    src: '/our-photos/2025-10-25 22.36.38.jpg',
    alt: 'Наше фото 4',
    caption: 'Любовь и счастье',
	objectFit: "fill"
  },
  {
    id: 5,
    src: '/our-photos/2025-10-25 22.24.44.jpg',
    alt: 'Наше фото 5',
    caption: 'Наши лучшие дни'
  },
  {
    id: 6,
    src: '/our-photos/2025-10-25 22.48.17.jpg',
    alt: 'Наше фото 6',
    caption: 'Вечная любовь'
  }
];

export default function PhotoGallery() {
  const { currentSection, scrollToSection } = useScroll();
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [direction, setDirection] = useState('next');
  const galleryRef = useRef(null);
  const autoPlayRef = useRef(null);

//   Автоматическое перелистывание при попадании на секцию
  useEffect(() => {
    if (currentSection === 2 && !hasAnimated) {
      setHasAnimated(true);
      startAutoPlay();
    } else if (currentSection !== 2) {
      stopAutoPlay();
    }
  }, [currentSection, hasAnimated]);

  // Автопрокрутка
  const startAutoPlay = () => {
    autoPlayRef.current = setInterval(() => {
      setDirection('next');
      setCurrentPhotoIndex(prev => (prev + 1) % photos.length);
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  // Очистка при размонтировании
  useEffect(() => {
    return () => {
      stopAutoPlay();
    };
  }, []);

  const nextPhoto = () => {
    if (isAnimating) return;
    setDirection('next');
    setIsAnimating(true);
    setCurrentPhotoIndex(prev => (prev + 1) % photos.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevPhoto = () => {
    if (isAnimating) return;
    setDirection('prev');
    setIsAnimating(true);
    setCurrentPhotoIndex(prev => (prev - 1 + photos.length) % photos.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPhoto = (index) => {
    if (isAnimating || index === currentPhotoIndex) return;
    setDirection(index > currentPhotoIndex ? 'next' : 'prev');
    setIsAnimating(true);
    setCurrentPhotoIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="photo-gallery">
      <div className="photo-gallery-background">
        <div className="decoration decoration-1">
          <img src="/images/decoration-1.svg" alt="Decoration" />
        </div>
        <div className="decoration decoration-2">
          <img src="/images/decoration-2.svg" alt="Decoration" />
        </div>
        <div className="decoration decoration-3">
          <img src="/images/decoration-3.svg" alt="Decoration" />
        </div>
      </div>
      
      <div className="photo-gallery-content">
        <div className="photo-gallery-text">
          <h2 className="section-title">Наши моменты</h2>
          <p className="section-subtitle">
            Дорогие сердцу воспоминания
          </p>
        </div>
        
        <div className="gallery-container" ref={galleryRef}>
          <div className="gallery-wrapper">
            <div 
              className={`photo-slide ${isAnimating ? `slide-${direction}` : ''}`}
              key={currentPhotoIndex}
            >
              <div className="photo-frame">
                <img 
                  src={photos[currentPhotoIndex].src} 
                  alt={photos[currentPhotoIndex].alt}
                  className="photo-image"
				  style={{
					objectFit: photos[currentPhotoIndex].alt ? photos[currentPhotoIndex].objectFit : "cover"
				  }}
                  onError={(e) => {
                    e.target.src = '/images/placeholder-photo.jpg';
                  }}
                />
                <div className="photo-overlay">
                  <div className="photo-caption">
                    {photos[currentPhotoIndex].caption}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Навигационные кнопки */}
          <button 
            className="nav-button nav-prev" 
            onClick={prevPhoto}
            disabled={isAnimating}
            aria-label="Предыдущее фото"
          >
            <span>‹</span>
          </button>
          
          <button 
            className="nav-button nav-next" 
            onClick={nextPhoto}
            disabled={isAnimating}
            aria-label="Следующее фото"
          >
            <span>›</span>
          </button>
        </div>
        
        {/* Индикаторы */}
        <div className="photo-indicators">
          {photos.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentPhotoIndex ? 'active' : ''}`}
              onClick={() => goToPhoto(index)}
              disabled={isAnimating}
              aria-label={`Перейти к фото ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="photo-gallery-hint">
          <p>Нажмите на стрелки или точки для навигации</p>
        </div>
      </div>
    </section>
  );
}
