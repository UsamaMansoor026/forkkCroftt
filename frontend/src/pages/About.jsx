import React from "react";
import {
  AboutUs,
  Chefs,
  Counter,
  PageHeader,
  Services,
  Testimonials,
} from "../components";

const About = () => {
  return (
    <>
      <PageHeader heading="About" targetLink="About" />
      <AboutUs />
      <Counter />
      <Services />
      <Chefs />
      <Testimonials />
    </>
  );
};

export default About;
