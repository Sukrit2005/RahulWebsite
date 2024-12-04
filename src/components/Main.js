import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
import Feedback from "./Feedback";
import DocTitle from "./DocTitle";

const Main = () => {
  DocTitle("Dr. Rahul Kapahi - Welcome");
  return (
    <>
      <Hero />
      <Services />
      <Blog />
      <Testimonials />
      <Feedback />
    </>
  );
};

export default Main;
