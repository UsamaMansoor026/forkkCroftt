import React from "react";
import { motion } from "framer-motion";

const SectionHeading = (props) => {
  const { mainHeading, subHeading, isCenter } = props;
  return (
    <div
      className={`relative mb-4 my-5 md:my-0 ${isCenter ? "text-center" : ""}`}
    >
      <h1 className="font-great-vibes text-heading text-[80px] md:text-[100px] absolute top-0 left-0 right-0 -z-10 block my-0">
        {mainHeading}
      </h1>
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className={`max-w-[93%] text-primary-text text-[32px] pt-[70px] leading-[1.2] md:text-5xl font-semibold ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        {subHeading}
      </motion.h3>
    </div>
  );
};

export default SectionHeading;
