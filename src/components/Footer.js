import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <a href="#" className="footer-logo">
            <img
              className="logo"
              alt="clinic logo"
              src="./images/logo/logo-64px.png"
            />
          </a>
          <ul className="social-links">
            <li>
              <a className="footer-link" href="#">
                <ion-icon className="social-icon" name="logo-instagram" />
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                <ion-icon className="social-icon" name="logo-facebook" />
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                <ion-icon className="social-icon" name="logo-twitter" />
              </a>
            </li>
          </ul>
          <p className="copyright">
            © <span className="year">{new Date().getFullYear()}</span> — Dr.
            Rahul Kapahi.
            <br />
            All rights reserved.
          </p>
        </div>
        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <Link className="footer-link" to="/address" target="_blank">
              <p className="footer-link address">
                F-1, Manish Twin Plaza, Plot-2, Aashirwad Chowk, Sec-4, Main
                Market, Dwarka, New Delhi - 110078
              </p>
            </Link>
            <p>
              <a className="footer-link" href="tel:8800047117">
                +91-8800047117
              </a>
              <br />
              <a className="footer-link" href="mailto:entndental@gmail.com">
                entndental@gmail.com
              </a>
            </p>
          </address>
        </div>
        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                Create account - coming soon
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Sign in - coming soon
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                iOS app - coming soon
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Android app - coming soon
              </a>
            </li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Clinic</p>
          <ul className="footer-nav">
            <li>
              <Link className="footer-link" to="/about" target="_blank">
                About us - Dr. Rahul Kapahi
              </Link>
            </li>
            <li>
              <a className="footer-link" href="#">
                For Business - coming soon
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Lab Partners - coming soon
              </a>
            </li>
            <li>
              <a href="#cta" className="footer-link">
                Careers - Contact us
              </a>
            </li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li>
              <Link to="/blogpage" className="footer-link" target="_blank">
                Blog posts
              </Link>
            </li>
            <li>
              <a className="footer-link" href="#">
                Help center - coming soon
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Privacy &amp; terms - coming soon
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
