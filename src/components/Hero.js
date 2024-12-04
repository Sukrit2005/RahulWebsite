import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="section-hero" id="hero">
      <div className="blog-head">
        <p className="hero-text-tag">HEAR, SMELL, TASTE THE WORLD.</p>
      </div>
      <div className="hero">
        <div className="hero-text">
          <p className="hero-text-head">
            E.N.T. Care: Where Science Meets Compassion
          </p>
          <p className="hero-text-subhead">
            We offer personalized treatments and advanced solutions to address
            your E.N.T. concerns with precision and compassion.
          </p>
          <a href="#cta" className="btn btn--full margin-right-sm">
            Book Appointment
          </a>
          <Link to="/address" className="btn btn--full" target="_blank">
            Address
          </Link>
        </div>
        <div className="hero-img-box">
          <picture>
            <img
              lazy="true"
              src="./images/reception1.jpg"
              alt="clinic reception"
              className="hero-img"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
