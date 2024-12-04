import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header id="header" className="header">
        <div className="logo-box">
          <a href="/">
            <img
              className="logo-img"
              src="./images/logo/logo-64px.png"
              alt="logo"
            />
          </a>
          <div>
            <Link to="/about" className="main-nav-link">
              <p className="logo-title">Dr. Rahul Kapahi</p>
              <p className="logo-subtitle">E.N.T. Clinic</p>
            </Link>
          </div>
        </div>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <Link to="/" className="main-nav-link" id="navAddressLink">
                Home
              </Link>
            </li>
            <li>
              <Link to="/address" className="main-nav-link" id="navAddressLink">
                Address
              </Link>
            </li>
            <li>
              <Link to="/blogpage" className="main-nav-link">
                Blogs
              </Link>
            </li>
            <li>
              <Link className="main-nav-link" to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/about" className="main-nav-link" id="navAddressLink">
                About Us
              </Link>
            </li>
            <li>
              <a className="main-nav-link nav-cta" href="#cta">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className="btn-mobile-nav">
          <ion-icon className="icon-mobile-nav" name="menu-outline" />
          <ion-icon className="icon-mobile-nav" name="close-outline" />
        </button>
      </header>
    </>
  );
};

export default Navbar;
