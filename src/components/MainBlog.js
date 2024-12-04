import React from "react";
import { Link } from "react-router-dom";
import DocTitle from "./DocTitle";

const MainBlog = () => {
  DocTitle("Dr. Rahul Kapahi - Blogs");
  return (
    <>
      <section className="section-hero" id="hero">
        <div className="blog-head">
          <h1 className="hero-text">WELCOME TO MY BLOG PAGE</h1>
        </div>
        <div className="hero">
          <div>
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
            <Link to="/address" target="_blank" className="btn btn--full">
              Address
            </Link>
          </div>
          <div className="hero-img-box">
            <picture>
              <img
                lazy=""
                src="../images/reception1.jpg"
                alt="clinic reception"
                className="hero-img"
              />
            </picture>
          </div>
        </div>
      </section>
      <section className="section-blog-page" id="blog-page">
        <div className="container blog-page">
          <div className="blog-index flex-shrink-0 p-3" style={{ width: 280 }}>
            <a
              href="#"
              className="d-flex align-items-center pb-3 mb-3 text-decoration-none border-bottom"
            >
              <span className="index-title">Blog Index</span>
            </a>
            <ul className="blog-index-list">
              <li className="mb-3">
                <button
                  className="list-title btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#home-collapse"
                  aria-expanded="false"
                >
                  Home
                </button>
                <div className="collapse" id="home-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                      <Link
                        to="/"
                        target="_blank"
                        className="blog-list-item d-inline-flex rounded"
                      >
                        Home Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/address"
                        target="_blank"
                        className="blog-list-item d-inline-flex text-decoration-none rounded"
                      >
                        Address
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-1">
                <button
                  className="list-title btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#dashboard-collapse"
                  aria-expanded="false"
                >
                  Dashboard
                </button>
                <div className="collapse" id="dashboard-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                      <Link
                        to="/earwax"
                        target="_blank"
                        className="blog-list-item d-inline-flex text-decoration-none rounded"
                      >
                        Ear Wax
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ar"
                        target="_blank"
                        className="blog-list-item d-inline-flex text-decoration-none rounded"
                      >
                        Allergic Rhinitis
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/septoplasty"
                        target="_blank"
                        className="blog-list-item d-inline-flex text-decoration-none rounded"
                      >
                        Septoplasty
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/voice"
                        target="_blank"
                        className="blog-list-item d-inline-flex text-decoration-none rounded"
                      >
                        Voice Disorders
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/endoscopy"
                        target="_blank"
                        className="blog-list-item d-inline-flex text-decoration-none rounded"
                      >
                        Endoscopy
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="blog-page-boxes">
            <div className="featured-blog">
              <div className="main-page-blog">
                <p className="main-page-blog-tag">Ear</p>
                <Link
                  to="/earwax"
                  className="main-page-blog-link"
                  target="_blank"
                >
                  <p className="main-page-blog-title">EAR WAX</p>
                  <p className="main-page-blog-text">
                    Ear wax may not be the most glamorous topic, but it's an
                    essential part of our body's defense system. By
                    understanding its purpose, dispelling myths, and practicing
                    good ear hygiene, you can maintain healthy ears...
                  </p>
                  <p className="main-page-blog-foot">→ read full article ←</p>
                </Link>
              </div>
              <div>
                <img
                  src="../images/ear/ear-model-sq-1200.jpg"
                  alt="ear"
                  className="main-page-blog-img"
                />
              </div>
            </div>
            <div className="more-blogs">
              <div className="main-page-blog">
                <p className="main-page-blog-tag">Nose</p>
                <Link className="main-page-blog-link" to="/ar" target="_blank">
                  <p className="other-blog-title">Allergic Rhinitis</p>
                  <p className="other-blog-text">
                    How to diagnose and why to treat upper repiratory tract
                    allergies? An insight into allergies...
                  </p>
                  <p className="main-page-blog-foot">→ read full article ←</p>
                </Link>
              </div>
            </div>
            <div className="more-blogs">
              <div className="main-page-blog">
                <p className="main-page-blog-tag">Nose</p>
                <Link
                  className="main-page-blog-link"
                  to="/septoplasty"
                  target="_blank"
                >
                  <p className="other-blog-title">Septoplasty</p>
                  <p className="other-blog-text">
                    Most frequently asked - Do we need to undergo septoplasty?
                    The myths and facts are abound......
                  </p>
                  <p className="main-page-blog-foot">→ read full article ←</p>
                </Link>
              </div>
            </div>
            <div className="blog-lists">
              <div className="blog-list">
                <Link
                  to="/voice"
                  className="blog-list-link"
                  aria-current="true"
                  target="_blank"
                >
                  <img
                    src="../images/logo/logo-64px.png"
                    alt="logo"
                    className="blog-list-img"
                  />
                  <div className="blog-list-text-box">
                    <div>
                      <h6 className="blog-list-text">Voice Disorders</h6>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/endoscopy"
                  className="blog-list-link"
                  aria-current="true"
                  target="_blank"
                >
                  <img
                    src="../images/logo/logo-64px.png"
                    alt="logo"
                    className="blog-list-img"
                  />
                  <div className="blog-list-text-box">
                    <div>
                      <h6 className="blog-list-text">Endoscopy</h6>
                    </div>
                  </div>
                </Link>
                <a href="#" className="blog-list-link" aria-current="true">
                  <img
                    src="../images/logo/logo-64px.png"
                    alt="logo"
                    className="blog-list-img"
                  />
                  <div className="blog-list-text-box">
                    <div>
                      <h6 className="blog-list-text">Coming soon...</h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="blog-lists">
              <div className="blog-list">
                <a href="#" className="blog-list-link" aria-current="true">
                  <img
                    src="../images/logo/logo-64px.png"
                    alt="logo"
                    className="blog-list-img"
                  />
                  <div className="blog-list-text-box">
                    <div>
                      <h6 className="blog-list-text">Coming soon...</h6>
                    </div>
                  </div>
                </a>
                <a href="#" className="blog-list-link" aria-current="true">
                  <img
                    src="../images/logo/logo-64px.png"
                    alt="logo"
                    className="blog-list-img"
                  />
                  <div className="blog-list-text-box">
                    <div>
                      <h6 className="blog-list-text">Coming soon...</h6>
                    </div>
                  </div>
                </a>
                <a href="#" className="blog-list-link" aria-current="true">
                  <img
                    src="../images/logo/logo-64px.png"
                    alt="logo"
                    className="blog-list-img"
                  />
                  <div className="blog-list-text-box">
                    <div>
                      <h6 className="blog-list-text">Coming soon...</h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainBlog;
