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
            <div className="time">14:45</div>
            <div className="event">СБОР ГОСТЕЙ В ЗАГСЕ</div>
          </div>
          <div className="timeline-divider timeline-divider-2"></div>
          <div className="timeline-item">
            <div className="time">15:00</div>
            <div className="event">СВАДЕБНАЯ ЦЕРЕМОНИЯ</div>
          </div>
          <div className="timeline-divider timeline-divider-3"></div>
          <div className="timeline-item">
            <div className="time">16:30</div>
            <div className="event">РЕСТОРАН, КОНЬЯК И ТАНЦЫ</div>
          </div>
          <div className="timeline-divider timeline-divider-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Timing;
