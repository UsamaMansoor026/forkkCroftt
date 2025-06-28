import React from "react";
import { motion } from "framer-motion";

const Service = ({ service }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 * service.id }}
      viewport={{ once: true, amount: 0.05 }}
      key={service.id}
      className="flex flex-col gap-4 h-full bg-transparent backdrop-blur-2xl shadow-md shadow-primary p-6 rounded-xl duration-200 hover:shadow-lg"
    >
      <div className="text-center mb-4 text-captions text-6xl">
        <i className={service.icon}></i>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-4 text-justify">
        <h3 className="text-2xl font-semibold text-primary-text">
          {service.title}
        </h3>
        <p className="text-primary-text/70 font-light text-[14px] leading-[1.8]">
          {service.description}
        </p>
      </div>
    </motion.article>
  );
};

export default Service;
