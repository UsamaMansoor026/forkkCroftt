import React from "react";
import {
  AboutUs,
  Blogs,
  Chefs,
  Counter,
  CustomCarousal,
  Menu,
  Reservation,
  Services,
  Testimonials,
} from "../components";

const Home = () => {
  return (
    <>
      <CustomCarousal />
      <AboutUs />
      <Counter />
      <Services />
      <Menu />
      <Chefs />
      <Reservation />
      <Testimonials />
      <Blogs />
    </>
  );
};

export default Home;
