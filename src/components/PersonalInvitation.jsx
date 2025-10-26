import React from 'react';
import { useLocation } from 'react-router-dom';
import './PersonalInvitation.css';

const PersonalInvitation = () => {
  const location = useLocation();
  const path = location.pathname.slice(1); // убираем первый /

  if (!path) {
    return null; // нет персонализации
  }

  // Парсинг URL
  let invitationType = null;
  let guestName = null;

  // Проверка на пару (формат: имя1+имя2)
  const coupleMatch = path.match(/^(.+)\+(.+)$/);
  if (coupleMatch) {
    invitationType = 'couple';
    const name1 = decodeURIComponent(coupleMatch[1]);
    const name2 = decodeURIComponent(coupleMatch[2]);
    guestName = `${capitalizeFirst(name1)} и ${capitalizeFirst(name2)}`;
  } 
  // Проверка на семью (формат: семья-фамилия)
  else if (path.startsWith('семья-') || path.match(/^family-/i)) {
    invitationType = 'family';
    const surname = path.replace(/^(семья-|family-)/i, '');
    guestName = `Семья ${capitalizeFirst(surname)}`;
  } 
  // Одиночное приглашение
  else {
    invitationType = 'single';
    guestName = capitalizeFirst(decodeURIComponent(path));
  }

  function capitalizeFirst(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  const getGreeting = () => {
    switch (invitationType) {
      case 'couple':
        return `Дорогие ${guestName}!`;
      case 'family':
        return `Дорогие ${guestName}!`;
      case 'single':
        return `Дорогой ${guestName}!`;
      default:
        return `Дорогой ${guestName}!`;
    }
  };

  return (
    <section className="personal-invitation">
      <div className="personal-invitation-background">
        <div className="decoration decoration-bow">
          <img src="/images/8841c9a06bac25647e5e.png" alt="Bow decoration" />
        </div>
        <div className="decoration decoration-left">
          <img src="/images/decoration-1.svg" alt="Decoration" />
        </div>
        <div className="decoration decoration-right">
          <img src="/images/decoration-2.svg" alt="Decoration" />
        </div>
        <div className="decoration decoration-bottom">
          <img src="/images/decoration-3.svg" alt="Decoration" />
        </div>
        <div className="decoration decoration-candelabra">
          <img src="/images/photo_2024-06-16_230.png" alt="Candelabra" />
        </div>
      </div>
      
      <div className="personal-invitation-content">
        <div className="personal-invitation-text">
          <h2 className="greeting">
            {getGreeting()}
          </h2>
          <p className="invitation-message">
            Мы очень хотим разделить с вами этот особенный день нашей любви.
            Ваше присутствие сделает наше торжество еще более незабываемым!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalInvitation;
