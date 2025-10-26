import React from 'react';
import './Location.css';

const Location = () => {
  const handleRestRouteClick = (e) => {
    e.preventDefault();
    window.open(
      'https://yandex.ru/profile/1832763340?lang=ru&source=wizbiz_new_map_single&mode=routes&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D1832763340&type=auto&profile-mode=1&no-distribution=1&rtext=~45.014478%2C39.084811',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleRouteClick = (e) => {
    e.preventDefault();
    window.open(
      'https://yandex.ru/profile/128066017990?lang=ru&source=wizbiz_new_map_single&mode=routes&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D128066017990&type=auto&profile-mode=1&no-distribution=1&rtext=~45.059945%2C38.987466',
      '_blank',
      'noopener,noreferrer'
    );
  };

  

  return (
    <section className="location">
      <div className="location-decoration location-decoration-bow">
        <img src="/images/Group_58.svg" alt="Decoration" />
      </div>
      <div className="container">
        <h2>локация</h2>
        <div className="location-places">
          <div className="location-card">
            <div className="location-card-header">
              <h3>ЗАГС</h3>
            </div>
            <p className="address">
              <strong>АДРЕС:</strong> Офицерская ул., 47
            </p>
             <p className="venue">
              Дворец бракосочетания Екатерининский зал
            </p>
            <div className="route-button">
              <button onClick={handleRouteClick}>Маршрут</button>
            </div>
          </div>
          <div className="location-decoration location-decoration-left">
        <img src="/images/decoration-2.svg" alt="Decoration" />
      </div>
          
          <div className="location-card">
            <div className="location-card-header">
              <h3>Праздник</h3>
            </div>
            <p className="address">
              <strong>АДРЕС:</strong> ул. имени В.Н. Мачуги, 111
            </p>
            <p className="venue">
              Старый Город
            </p>
            <div className="route-button">
              <button onClick={handleRestRouteClick}>Маршрут</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
