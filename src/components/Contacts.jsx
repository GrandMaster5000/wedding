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
              <h3>Анатолий</h3>
              <a href="tel:+79990000000">+7 999 632 14 74</a>
              <a href="https://t.me/GrandMaster5000" className="telegram-link" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
            </div>
            <div className="contact-card">
              <h3>Алина</h3>
              <a href="tel:+79680000000">+7 900 983 69 63</a>
              <a href="https://t.me/dolcecyati" className="telegram-link" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-message">
          <h3>Ждём встречи</h3>
          <p>С любовью, Анатолий и Алина</p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
