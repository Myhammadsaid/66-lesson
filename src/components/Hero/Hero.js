import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero-style">
            <div className="hero-content">
              <p className="hero-title">
                <span>100%</span> Organic Vegetables
              </p>
              <p className="hero-text">The best way to stuff your wallet.</p>
              <p className="hero-par">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                reiciendis beatae consequuntur.
              </p>
              <form className="hero-form" action="">
                <input
                  className="email"
                  type="text"
                  placeholder="Your emaill address"
                />
                <button className="hero-btn">Subscribe</button>
              </form>
            </div>
            <div className="hero-btns">
              <button className="hero-btn1">Shopping</button>
              <button className="hero-btn1">Recips</button>
              <button className="hero-btn1">Kitchen</button>
              <button className="hero-btn1">News</button>
              <button className="hero-btn1">Food</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
