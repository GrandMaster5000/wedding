import React from 'react';
import './Timing.css';

const Timing = () => {
  return (
    <section className="timing">
      <div className="timing-decoration-left">
        <img src="/images/decoration-1.svg" alt="Decoration" />
      </div>
      <div className="timing-decoration-right">
        <img src="/images/decoration-3.svg" alt="Decoration" />
      </div>
      <div className="container">
        <h2>ТАЙМИНГ</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="time">15:00</div>
            <div className="event">СБОР ГОСТЕЙ</div>
          </div>
          <div className="timeline-item">
            <div className="time">15:45</div>
            <div className="event">СВАДЕБНАЯ ЦЕРЕМОНИЯ</div>
          </div>
          <div className="timeline-item">
            <div className="time">16:30</div>
            <div className="event">Ужин, вино и танцы</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timing;
