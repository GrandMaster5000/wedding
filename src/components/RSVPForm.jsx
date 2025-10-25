import React, { useState } from 'react';
import './RSVPForm.css';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    drinks: []
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        drinks: checked 
          ? [...prev.drinks, value]
          : prev.drinks.filter(drink => drink !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет логика отправки формы
  };

  return (
    <section className="rsvp-form">
      <div className="rsvp-decoration">
        <img src="/images/decoration-1.svg" alt="Decoration" />
      </div>
      <div className="container">
        <h2>Анкета</h2>
        <p className="form-description">Просим ответить на приглашение до 27 июня</p>
        
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name">Имя и фамилия *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Подтвердите, пожалуйста, ваше присутствие *</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  checked={formData.attendance === 'yes'}
                  onChange={handleInputChange}
                  required
                />
                <span>Да, приду</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  checked={formData.attendance === 'no'}
                  onChange={handleInputChange}
                  required
                />
                <span>Нет, не смогу прийти</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Ваши предпочтения в напитках</label>
            <div className="checkbox-group">
              {[
                'Игристое вино',
                'Белое вино',
                'Красное вино',
                'Мартини',
                'Водка',
                'Виски',
                'Джин'
              ].map(drink => (
                <label key={drink} className="checkbox-label">
                  <input
                    type="checkbox"
                    name="drinks"
                    value={drink}
                    checked={formData.drinks.includes(drink)}
                    onChange={handleInputChange}
                  />
                  <span>{drink}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVPForm;
