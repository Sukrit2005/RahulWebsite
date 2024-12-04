import React, { useState } from "react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const testimonials = [
    {
      name: "Radhya",
      image: "./images/deli-img/woman-img-01.png",
      feedback:
        "Exceptional care, from start to finish! The ENT clinic provided me with top-notch service and attention. From scheduling my appointment to the warm welcome at reception, every step was smooth and efficient. Dr. Rahul Kapahi and staff were highly knowledgeable and compassionate. I highly recommend the ENT clinic to anyone in need of specialized care for ear, nose, or throat conditions. Thank you for your outstanding service!",
    },
    {
      name: "Vishal",
      image: "./images/deli-img/man-img-01.png",
      feedback:
        "Amazing! I've been struggling with chronic sinus issues for years until I found Dr. Rahul Kapahi's E.N.T. Clinic. The treatment plan he recommended has significantly improved my quality of life.",
    },
    {
      name: "Hriday",
      image: "./images/deli-img/man-img-03.png",
      feedback:
        "Thanks to the comprehensive care provided by Dr. Rahul Kapahi, I have experienced significant improvement in my health and well-being. I wholeheartedly recommend this clinic.",
    },
    {
      name: "Saisha",
      image: "./images/deli-img/woman-img-02.png",
      feedback:
        "Visiting Dr. Rahul Kapahi was truly a game-changer. From the moment I stepped through the doors, I was greeted with warmth and professionalism. The expertise in diagnosing and treating my ENT issues was evident.",
    },
    {
      name: "Zoony",
      image: "./images/deli-img/customer-1.jpg",
      feedback:
        "Dr. Rahul Kapahi is incredible. His expertise and compassionate approach gave me confidence in the care I was receiving. Highly recommended!",
    },
  ];

  const handlePrev = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const setCurrentSlide = (index) => {
    setSlideIndex(index);
  };

  return (
    <section className="container section-testimonial" id="testimonials">
      <p className="testimonial-super-title">Their Words, Our Pride</p>
      <p className="testimonial-title">PATIENT TESTIMONIALS</p>

      <div className="slideshow-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`mySlides ${index === slideIndex ? "active" : ""}`}
          >
            <div className="testimonial-box">
              <div className="testimonial-text">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s face`}
                  className="testimonial-img"
                />
                <p className="testimonial-name">{testimonial.name}</p>
                <blockquote className="testimonial-data">
                  {testimonial.feedback}
                </blockquote>
              </div>
            </div>
          </div>
        ))}

        <button className="prev" onClick={handlePrev}>
          ❮
        </button>
        <button className="next" onClick={handleNext}>
          ❯
        </button>
      </div>

      <div style={{ textAlign: "center" }}>
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === slideIndex ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
      <div className="blog-footer testimonial-footer">
        <Link
          to="/testimonials"
          className="blog-footer-text"
          rel="noopener noreferrer"
          target="_blank"
        >
          Read More Reviews →
        </Link>
      </div>
    </section>
  );
};

export default Testimonials;
