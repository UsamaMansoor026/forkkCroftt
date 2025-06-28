import React from "react";
import { SectionHeading, TestimonialSlider } from "./index";

const Testimonials = () => {
  return (
    <section className="global-padding global-section">
      <SectionHeading
        isCenter={true}
        mainHeading="Testimony"
        subHeading="Happy Customers"
      />

      <TestimonialSlider />
    </section>
  );
};

export default Testimonials;
