import React from 'react';
import './Wishlist.css';

const Wishlist = () => {
  return (
    <section className="wishlist">
      <div className="wishlist-decoration wishlist-decoration-left">
        <img src="/images/decoration-2.svg" alt="Decoration" />
      </div>
      <div className="wishlist-decoration wishlist-decoration-bow">
        <img src="/images/weddin-image.svg" alt="Decoration" />
      </div>
      <div className="container">
        <h2>вишлист</h2>
        <div className="wishlist-content">
          <p>
            Приносите веселье в душе, радость в сердце, а подарки – в конверте!
          </p>
          <p>
            Будем благодарны, если вместо цветов вы решите подарить нам бутылочку хорошего коньяка.
          </p>
          <p>
            Очень надеемся, что у вас будет возможность оставить детей на этот вечер под присмотром 
            и полностью погрузиться в атмосферу праздника вместе с нами.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
