import React from "react";
import SectionHeading from "./SectionHeading";
import { about_images } from "../assets";

const AboutUs = () => {
  return (
    <section className="global-padding global-padding mt-16 text-primary-text grid grid-cols-1 md:grid-cols-2 items-start gap-6 md:gap-10 lg:gap-16">
      {/* Left Text Portion */}
      <div className="order-2 md:order-1">
        <SectionHeading mainHeading="About" subHeading="ForkCroft Restaurant" />
        <p className="text-captions mb-5 mt-3 md:mt-8 leading-[2]">
          Welcome to ForkCraft — where food meets heart. From comforting bites
          to gourmet delights, we blend tradition with creativity to serve you
          meals that feel like home, but taste like a dream. Our team is
          dedicated to crafting moments around food, whether you're here for a
          quick bite or a cozy evening with loved ones. Come hungry, leave
          happy.
        </p>

        <p className="text-primary-text">
          MON - SUN <span className="font-semibold">8:00 AM - 11:00 PM</span>
        </p>

        <h2 className="text-heading text-3xl mt-4">+92 333 33333333</h2>
      </div>

      {/* Right Images Portion */}
      <div className="order-1 md:order-2 flex items-center justify-center gap-5 h-[400px] md:h-full overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            background: `url(${about_images.about1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        />
        <div
          className="w-full h-full"
          style={{
            background: `url(${about_images.about2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        />
      </div>
    </section>
  );
};

export default AboutUs;
