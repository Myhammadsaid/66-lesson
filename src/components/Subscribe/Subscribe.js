import React from "react";
import "./Subscribe.css";
import logo from "../../assets/images/noteboock.png";

function Subscribe() {
  return (
    <div>
      <section className="subscribe">
        <div className="container">
          <div className="subscribe-style">
            <div className="subscribe-content">
              <p className="subs-text">
                Stay home & get your daily needs from our shop
              </p>
              <p className="subs-par">
                Start You'r Daily Shopping with Nest Mart
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
            <img src={logo} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Subscribe;
