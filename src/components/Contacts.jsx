import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="contacts-decoration">
        <img src="/images/decoration-2.svg" alt="Decoration" />
      </div>
      <div className="container">
        <h2>контакты</h2>
        <div className="contacts-content">
          <p>если у вас остались вопросы, напишите нам в любой мессенджер</p>
          
          <div className="contact-cards">
            <div className="contact-card">
              <h3>Илья</h3>
              <a href="tel:+79990000000">+7 999 000 00 00</a>
            </div>
            <div className="contact-card">
              <h3>Полина</h3>
              <a href="tel:+79680000000">+7 968 000 00 00</a>
            </div>
          </div>
        </div>
        
        <div className="footer-message">
          <h3>Ждём встречи</h3>
          <p>С любовью, илья и полина</p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
