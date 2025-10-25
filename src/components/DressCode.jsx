import React from 'react';
import './DressCode.css';

const DressCode = () => {
  return (
    <section className="dress-code">
      <div className="dress-code-decoration">
        <img src="/images/decoration-3.svg" alt="Decoration" />
      </div>
      <div className="container">
        <h2>дресс-код</h2>
        <div className="dress-code-content">
          <p>
            Мы старались сделать праздник красивым и будем рады, если в своих нарядах 
            вы поддержите цветовую гамму нашей свадьбы
          </p>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
