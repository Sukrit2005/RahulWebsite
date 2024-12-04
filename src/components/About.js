import React from "react";
import DocTitle from "./DocTitle";
import { Link } from "react-router-dom";

const About = () => {
  DocTitle("Dr. Rahul Kapahi - About Us");
  return (
    <>
      <div>
        <section className="section-hero" id="hero">
          <div className="blog-head">
            <div className="intro">
              <img
                src="./images/mypic.jpg"
                alt="Dr. Rahul Kapahi"
                className="myPic"
              />
              <div>
                <h1 className="intro-head">Dr. RAHUL KAPAHI</h1>
                <h2 className="blog-head">
                  Renowned E.N.T. Specialist || Expertise You Can Trust
                </h2>
              </div>
            </div>
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
              <Link to="/address" target="_blank" className="btn btn--full">
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

        <section className="about container" id="about">
          <section>
            <div className="board-img">
              <img src="./images/myboard.jpg" alt="board" className="board" />
            </div>
            <p className="intro-subtitle">About Dr. Rahul Kapahi</p>
            <p className="intro-text">
              Welcome to the official website of{" "}
              <strong>Dr. Rahul Kapahi</strong>, a highly respected and trusted
              name in E.N.T. (Ear, Nose, and Throat) care in
              <strong> Dwarka, New Delhi</strong>. Dr. Rahul Kapahi has
              established a reputation for providing exceptional healthcare
              services, marked by a blend of expertise, compassion, and
              dedication. With over <strong> 20 years of experience</strong>, he
              has become a beacon of hope for patients seeking effective
              solutions for E.N.T. issues.
            </p>
            <p className="intro-text">
              At the heart of Dr. Rahul Kapahi's practice lies a commitment to
              delivering world-class treatment, personalized attention, and
              comprehensive care. His approach ensures that patients not only
              receive effective medical interventions but also feel supported
              throughout their healthcare journey.
            </p>
            <p className="intro-text">
              <strong>Dr. Rahul Kapahi</strong> is a proud alumnus of the
              renowned{" "}
              <strong>Armed Forces Medical College (AFMC), Pune, India</strong>,
              where he earned his <strong>M.B.B.S.</strong> degree. Driven by a
              passion for specialization, he completed his{" "}
              <strong>DNB (E.N.T.)</strong>, enhancing his expertise and
              solidifying his credentials as an E.N.T. specialist of the highest
              caliber.
            </p>
          </section>
          <section>
            <p className="intro-subtitle">Our Clinic</p>
            <p className="intro-text">
              Located in <strong> Sector - 4</strong>, Main Market, Aashirwaad
              Chowk, <strong> Dwarka</strong>, <strong> New Delhi</strong>, our
              clinic offers a welcoming environment equipped with
              state-of-the-art diagnostic tools and advanced treatment
              technologies. Whether it's a routine check-up or specialized care,
              we ensure a comfortable and efficient healthcare experience for
              every patient.
            </p>
            <ul className="intro-list">
              <li>
                <strong>Hearing Loss and Ear Infections</strong>: Comprehensive
                solutions for both temporary and chronic ear issues.
              </li>
              <li>
                <strong>Sinus and Nasal Disorders</strong>: Advanced treatment
                for conditions like sinusitis, nasal blockages, and allergies.
              </li>
              <li>
                <strong>Throat and Voice Problems</strong>: Expertise in
                managing hoarseness, tonsillitis, and other throat-related
                concerns.
              </li>
              <li>
                <strong>Head and Neck Conditions</strong>: Skilled in diagnosing
                and treating various head and neck abnormalities.
              </li>
              <li>
                <strong>Sleep Apnea and Snoring Disorders</strong>: Effective
                treatments to improve sleep quality and overall health.
              </li>
            </ul>
          </section>
          <section>
            <p className="intro-subtitle">Why Choose Us?</p>
            <p className="intro-text">
              <strong>
                <em>Here's what sets Dr. Rahul Kapahi apart:</em>
              </strong>
            </p>
            <p className="intro-text">
              Dr. Rahul Kapahi combines scientific expertise with a
              compassionate approach to address the root cause of E.N.T.
              problems. Patients trust him for:
            </p>
            <ul className="intro-list">
              <li>
                <strong>Clear and Honest Communication</strong>: Understanding
                your condition and treatment options.
              </li>
              <li>
                <strong>Compassionate Care</strong>: A focus on your comfort and
                well-being at every step.
              </li>
              <li>
                <strong>Expert Guidance</strong>: Leveraging years of experience
                to deliver effective and lasting solutions.
              </li>
              <li>
                <strong>Personalized Treatment Plans</strong>: Customized
                solutions tailored to your specific medical condition and
                lifestyle.
              </li>
              <li>
                <strong>Cutting-Edge Medical Technology</strong>: Leveraging the
                latest advancements in E.N.T. care for accurate diagnosis and
                effective treatment.
              </li>
              <li>
                <strong>A Friendly and Supportive Environment</strong>: Our
                staff is dedicated to making your visit as comfortable as
                possible.
              </li>
            </ul>
          </section>
          <section>
            <p className="intro-subtitle">Book Your Appointment</p>
            <p className="intro-text">
              If you are experiencing discomfort or need expert advice on any
              E.N.T.-related condition, don't hesitate to reach out. With a
              proven track record of success and a focus on delivering
              personalized care, <strong>Dr. Rahul Kapahi</strong> is here to
              help you achieve better health and well-being.
            </p>
          </section>
        </section>
      </div>
    </>
  );
};

export default About;
