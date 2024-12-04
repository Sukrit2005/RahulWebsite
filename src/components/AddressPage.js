import React from "react";
import { Link } from "react-router-dom";
import DocTitle from "./DocTitle";

const AddressPage = () => {
  DocTitle("Dr. Rahul Kapahi - Address");
  return (
    <>
      <div>
        <section className="section-hero" id="hero">
          <div className="blog-head">
            <h1 className="hero-text">CLINIC ADDRESS</h1>
          </div>
          <div className="hero">
            <div className="hero-text">
              <p className="hero-text-head">
                E.N.T. Care: Where Science Meets Compassion
              </p>
              <p className="hero-text-subhead">
                We offer personalized treatments and advanced solutions to
                address your E.N.T. concerns with precision and compassion.
              </p>
              <a href="#cta" className="btn btn--full margin-right-sm">
                Book Appointment
              </a>
              <Link to="/address" className="btn btn--full">
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

        <section className="section-address" id="address">
          <div className="container address-box grid grid--2-cols">
            <div className="address-text-box">
              <p className="heading-secondary address-title">
                Dr. Rahul Kapahi's
                <br />
                E.N.T. Clinic
              </p>
              <p className="heading-tertiary address-address">
                F-1, Plot No. 2, Manish Twin Plaza,
                <br />
                Aashirwad Chowk, Sector- 4,
                <br />
                Main Market, Dwarka, New Delhi - 110078
              </p>
              <p className="address-map">Map Link &darr;</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14012.28892809999!2d77.0503823!3d28.5976098!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad3c0000001%3A0x733757e167523eaf!2sDr.%20Rahul%20Kapahi!5e0!3m2!1sen!2sin!4v1712902634292!5m2!1sen!2sin"
                allowFullScreen=""
                title="Google location map"
                loading="lazy"
                className="address-map-link"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <p className="address-appt">
                Please take an appointment to avoid inconvenience.
              </p>
            </div>

            <div className="address-timings-box">
              <div className="address-timings">
                <p className="heading-secondary address-title">
                  Clinic is open from Monday to Saturday
                </p>
                <p className="heading-tertiary time">Clinic Timings:</p>

                <ul className="address-timings-list">
                  <li className="address-timings-text">
                    Morning: 10:00 a.m. to 01:00 p.m.
                  </li>
                  <li className="address-timings-text">
                    Evening: 06:30 p.m. to 09:00 p.m.
                  </li>
                </ul>

                <p className="address-note">
                  **Clinic remains closed on Sundays**
                </p>
              </div>

              <div className="address-btn">
                <a href="#cta" className="btn btn--full">
                  Book Appointment
                </a>
              </div>

              <div className="address-tel">
                <p className="or-text">or</p>
                <p className="tel-no">Call us on +91-8800047117</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AddressPage;
