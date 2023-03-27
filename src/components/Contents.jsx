import React from 'react';

import heroImg from "../assets/images/illustration-hero.svg";
import music from "../assets/images/icon-music.svg";

const Contents = () => {
  return (
    <main>
        <div className="container">
          <div className="order-contents">
            <div className="order-image">
              <img src={heroImg} alt="hero" className="hero-img" />
            </div>

            <h1 className="order-title">Order Summary</h1>
            <p className="order-desc">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>

            <div className="order-details">
              <div className="order-details__item">
                <img src={music} alt="music" className="music-img" />
                <div className="music-details">
                  <h1 className="music-title">Annual Plan</h1>
                  <span className="music-desc">$59.99/year</span>
                </div>
                <a href="#" className="music-text__btn">Change</a>
              </div>
            </div>

            <div className="order-payment">
              <button className="payment-btn" type="button">Proceed to Payment</button>
              <button className="cancel-btn" type="button">Cancel Order</button>
            </div>
          </div>
        </div>

      <div className="attribution">
        Challenge by<a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="no-referrer"> Frontend Mentor</a>. 
        Coded by <a href="https://github.com/iEarlG" target="_blank" rel="no-referrer">Earl A. Villapaz</a>.
      </div>
    </main>
  )
}

export default Contents;