import React from "react";
import { SectionHeading } from "./index";
import { Cateringservices } from "../assets";
import Service from "./cards/Service";

const Services = () => {
  return (
    <section className="global-padding global-section">
      <SectionHeading
        isCenter={true}
        mainHeading="Services"
        subHeading="Catering Services"
      />

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center mt-12">
        {Cateringservices.map((service) => {
          return <Service service={service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
