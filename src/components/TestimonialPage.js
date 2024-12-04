import React, { useState } from "react";
import DocTitle from "./DocTitle";
import Feedback from "./Feedback";
import { Link } from "react-router-dom";

const reviews = [
  {
    name: "Vishu",
    text: "Dr. Rahul was fantastic! He listened to my concerns attentively and provided thorough explanations. Highly recommend!",
    img: "./images/deli-img/man-img-01.png",
  },
  {
    name: "Sunita",
    text: "I had a great experience at the ENT clinic. Dr. Rahul was very knowledgeable and took the time to answer all my questions.",
    img: "./images/deli-img/customer-1.jpg",
  },
  {
    name: "Y.K.",
    text: "Excellent ENT clinic. He diagnosed my sinus issues accurately and recommended effective treatment options.",
    img: "./images/deli-img/man-img-02.png",
  },
  {
    name: "Sujoy",
    text: "Efficient appointment scheduling and minimal wait times. Received valuable advice.",
    img: "./images/deli-img/man-img-03.png",
  },
  {
    name: "AA",
    text: "Friendly and welcoming atmosphere from the moment you walk in.",
  },
  {
    name: "AB",
    text: "The doctor was gentle and took the time to explain everything.",
  },
  {
    name: "AC",
    text: "Efficient appointment scheduling and minimal wait times.",
  },
  {
    name: "AD",
    text: "I felt comfortable and at ease throughout my entire visit.",
  },
  {
    name: "AE",
    text: "Impressed by the attention to detail and personalized care.",
  },
  { name: "AF", text: "Convenient location and ample parking available." },
  {
    name: "AG",
    text: "Professional yet compassionate approach to patient care.",
  },
  { name: "AH", text: "The receptionist was helpful and accommodating." },
  { name: "AI", text: "Painless procedure with great results." },
  {
    name: "AJ",
    text: "The clinic adheres to strict safety and sterilization protocols.",
  },
  { name: "AK", text: "Appreciate the follow-up call after my appointment." },
  {
    name: "AL",
    text: "I would highly recommend this clinic to family and friends.",
  },
  { name: "AM", text: "Competitive pricing for quality E.N.T. care." },
  {
    name: "AN",
    text: "Dr. Rahul Kapahi addressed all my concerns with patience.",
  },
  { name: "AO", text: "Beautiful facility with a calming ambiance." },
  { name: "AP", text: "Extremely satisfied with the outcome of my treatment." },
  {
    name: "AQ",
    text: "Received prompt and effective treatment for an ear emergency.",
  },
  { name: "AR", text: "The staff went above and beyond to ensure my comfort." },
  {
    name: "AS",
    text: "I trust this clinic and Dr. Rahul for all my E.N.T. needs.",
  },
  {
    name: "AT",
    text: "Clear explanations of treatment options and associated costs.",
  },
  { name: "AU", text: "Child-friendly environment, great for families." },
  { name: "AV", text: "Minimal discomfort during and after the procedure." },
  { name: "AW", text: "The clinic follows up on appointments and reminders." },
  {
    name: "AX",
    text: "Impressed by the commitment to ongoing education and training.",
  },
  { name: "AY", text: "The doctor has a gentle and a reassuring demeanor." },
  { name: "AZ", text: "Efficient billing process." },
  { name: "BA", text: "Modern amenities and comfortable waiting area." },
  { name: "BB", text: "The staff is courteous and professional." },
  { name: "BC", text: "Thorough examination and attention to detail." },
  { name: "BD", text: "Accommodating scheduling options for busy patients." },
  { name: "BE", text: "Received excellent care during my visit." },
  { name: "BF", text: "I appreciate the emphasis on preventive medicine." },
  { name: "BG", text: "The clinic is equipped with the latest gadgets." },
  { name: "BH", text: "The treatment plan was tailored to my specific needs." },
  { name: "BI", text: "Great communication throughout the entire process." },
  {
    name: "BJ",
    text: "The clinic facilities are modern, and the staff is efficient.",
  },
  {
    name: "BK",
    text: "I felt well-informed and involved in my treatment decisions.",
  },
  {
    name: "BL",
    text: "The clinic respects appointment times and doesn't keep patients waiting.",
  },
  {
    name: "BM",
    text: "Impressed by the professionalism and expertise of the entire staff.",
  },
  { name: "BN", text: "Received personalized attention and care." },
  {
    name: "BO",
    text: "The clinic takes patient feedback seriously and strives for improvement.",
  },
  {
    name: "BP",
    text: "Excellent follow-up care and post-treatment instructions.",
  },
  {
    name: "BQ",
    text: "Overall, a top-notch E.N.T. experience. Highly recommended!",
  },
  {
    name: "BR",
    text: "I felt comfortable and at ease throughout my entire visit.",
  },
];

const Review = ({ name, text, img }) => (
  <figure className="review">
    {img ? (
      <img className="review-img" src={img} alt="customer" />
    ) : (
      <p className="review-data">{name.charAt(0) + name.charAt(1)}</p>
    )}
    <blockquote className="review-text">{text}</blockquote>
    <p className="review-name">— {name}</p>
  </figure>
);

const App = () => {
  const [showMore, setShowMore] = useState(false);
  DocTitle("Dr. Rahul Kapahi - Testimonials");

  return (
    <>
      <section className="section-hero" id="hero">
        <div className="blog-head">
          <h1 className="hero-text">TESTIMONIALS</h1>
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
                src="../images/reception1.jpg"
                alt="clinic reception"
                className="hero-img"
              />
            </picture>
          </div>
        </div>
      </section>

      <section className="reviews mb-0" id="reviews">
        <div className="reviews-container">
          <div className="thanks-box">
            <p className="thanks">Thanks to all of you!!</p>
            <p className="thanks-span">
              "Your belief in us has been a driving force in our success."
            </p>
          </div>
          <span className="reviews-subheading">Testimonials</span>
          <p className="reviews-heading-secondary">
            Appreciation and Love — from our patients
          </p>
          <div className="reviews-box">
            {reviews
              .slice(0, showMore ? reviews.length : 4)
              .map((review, index) => (
                <Review key={index} {...review} />
              ))}
          </div>
          <div className="reviews-more">
            <button
              type="button"
              className="collapsible"
              onClick={() => setShowMore(!showMore)}
            >
              <h3>{showMore ? "▲ Show Less ▲" : "▼ Show More ▼"}</h3>
            </button>
          </div>
        </div>
      </section>
      <Feedback />
    </>
  );
};

export default App;
