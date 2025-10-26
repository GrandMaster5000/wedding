import React from 'react';
import { useLocation } from 'react-router-dom';
import './PersonalInvitation.css';

const PersonalInvitation = () => {
  const location = useLocation();
  let path = location.pathname.slice(1); // убираем первый /
  
  // Декодируем URL-кодирование
  try {
    path = decodeURIComponent(path);
  } catch (e) {
    // Если декодирование не удалось, используем как есть
  }

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
    const name1 = coupleMatch[1];
    const name2 = coupleMatch[2];
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
    guestName = capitalizeFirst(path);
  }

  function capitalizeFirst(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  // Список женских имен (для случаев когда окончание неопределенно)
  const femaleNames = [
    'анна', 'мария', 'елена', 'наталья', 'ольга', 'татьяна', 'ирина', 'екатерина',
    'светлана', 'юлия', 'анастасия', 'дарья', 'алина', 'марина', 'надежда',
    'валентина', 'людмила', 'галина', 'елизавета', 'вероника', 'полина', 'виктория',
    'александра', 'любовь', 'алла', 'лариса', 'тамара', 'раиса', 'генриетта',
    'анита', 'валерия', 'кристина', 'диана', 'яна', 'карина', 'милана', 'милена', "евгения"
  ];

  function isFemaleName(name) {
    const nameLower = name.toLowerCase();
    // Проверяем по списку женских имен
    if (femaleNames.includes(nameLower)) {
      return true;
    }
    // Проверяем окончание - большинство женских имен заканчиваются на 'а' или 'я'
    // Исключения - мужские имена типа Ваня, Дима, Никита, Данила (но они обычно пишутся Никита, Даниил)
    const lastChar = nameLower.slice(-1);
    if (lastChar === 'а' || lastChar === 'я') {
      // Исключения - мужские имена
      const maleExceptions = ['ваня', 'дима', 'коля', 'вася'];
      if (!maleExceptions.includes(nameLower)) {
        return true;
      }
    }
    return false;
  }

  const getGreeting = () => {
    switch (invitationType) {
      case 'couple':
        return `Дорогие ${guestName}!`;
      case 'family':
        return `Дорогие ${guestName}!`;
      case 'single':
        const isFemale = isFemaleName(guestName);
        return isFemale ? `Дорогая ${guestName}!` : `Дорогой ${guestName}!`;
      default:
        return `Дорогой ${guestName}!`;
    }
  };

  const getMessage = () => {
    if (invitationType === 'single') {
      return (
        <>
          Мы очень хотим разделить с тобой этот особенный день нашей любви.
          {' '}
          <br />
          Твоё присутствие сделает наше торжество еще более незабываемым!
        </>
      );
    } else {
      return (
        <>
          Мы очень хотим разделить с вами этот особенный день нашей любви.
          {' '}
          <br />
          Ваше присутствие сделает наше торжество еще более незабываемым!
        </>
      );
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
            {getMessage()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalInvitation;
