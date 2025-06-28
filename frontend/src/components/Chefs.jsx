import React from "react";
import { SectionHeading } from "./index";
import { chefs } from "../assets";

const Chefs = () => {
  return (
    <section className="global-padding global-section">
      <SectionHeading
        isCenter={true}
        mainHeading="Chefs"
        subHeading="Our Master Chefs"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-4 mt-16">
        {chefs.map((chef) => (
          <article
            key={chef.id}
            className="bg-white/10 shadow-white/30 shadow-md rounded-md overflow-hidden relative group h-full"
          >
            {/* Image */}
            <div className="">
              <img src={chef.profile} alt="" />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-primary-text font-semibold md:text-xl">
                {chef.name}
              </h3>
              <p className="text-[12px] md:text-sm text-captions">
                {chef.role}
              </p>
            </div>

            {/* Social Handles */}
            <div className="absolute top-0 bottom-0 left-0 md:-left-10 px-3 flex flex-col justify-center bg-gradient-to-r from-primary-text/50 to-primary-text/30 gap-4 md:group-hover:left-0 md:group-hover:duration-700">
              <a
                href={chef.facebookHandle}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-primary transition-all hover:text-heading"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href={chef.inatagramHandle}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-primary transition-all hover:text-heading"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href={chef.twitterHandle}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-primary transition-all hover:text-heading"
              >
                <i className="fa-brands fa-x"></i>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Chefs;
