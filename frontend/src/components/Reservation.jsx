import React from "react";
import { ReservationForm, SectionHeading } from "./index";

const Reservation = () => {
  return (
    <section className="global-padding global-section ">
      <div className="max-w-[95%] md:max-w-[650px] mx-auto ">
        <SectionHeading
          isCenter={true}
          mainHeading="Book a table"
          subHeading="Make Reservation"
        />

        <ReservationForm />
      </div>
    </section>
  );
};

export default Reservation;
