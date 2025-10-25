import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <section className="location">
      <div className="location-decoration">
        <img src="/images/decoration-2.svg" alt="Decoration" />
      </div>
      <div className="container">
        <h2>локация</h2>
        <div className="location-info">
          <p className="address">
            <strong>АДРЕС:</strong> 2-й Кожуховский пр., 29, корп. 6
          </p>
          <p className="venue">
            праздник пройдет<br />
            в зале Mondrian (Loft hall)
          </p>
        </div>
        <div className="route-button">
          <button>Маршрут</button>
        </div>
      </div>
    </section>
  );
};

export default Location;
