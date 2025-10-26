import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src="/images/hero-bg.svg" alt="Background decoration" className="bg-image" />
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
      <div className="hero-content">
        <div className="names">
          <h1 className="name">Анатолий</h1>
          <div className="save-date">
            <p>save the date</p>
            <h2>29.11.25</h2>
          </div>
          <h1 className="name">Алина</h1>
        </div>
        <div className="ampersand">&</div>
        <div className="invitation-text">
          <h3>Дорогие и любимые</h3>
          <p>
            Наша свадьба без вас не будет такой счастливой, уютной и веселой! 
            Приглашаем отметить этот день вместе с нами!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
