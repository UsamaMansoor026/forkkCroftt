import React, { useState } from "react";
import { motion } from "framer-motion";
import { testimonies } from "../assets";

const CustomSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleSlides = 3;

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? testimonies.length - visibleSlides : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + visibleSlides >= testimonies.length ? 0 : prev + 1
    );
  };

  const currentSlides = testimonies.slice(
    startIndex,
    startIndex + visibleSlides
  );

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden px-4">
      <div className="flex items-center justify-between mb-4">
        {/* Control Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      {/* Slides */}
      <motion.div
        className="flex gap-6 transition-transform"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4 }}
      >
        {currentSlides.map((slide) => (
          <article
            key={slide.id}
            className="flex-1 min-w-0 h-48 rounded-xl flex items-center justify-center text-white font-bold text-xl"
          >
            {slide.feedback}
          </article>
        ))}
      </motion.div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: testimonies.length - visibleSlides + 1 }).map(
          (_, idx) => (
            <button
              key={idx}
              onClick={() => setStartIndex(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === startIndex ? "bg-primary-text" : "bg-gray-400"
              }`}
            ></button>
          )
        )}
      </div>
    </div>
  );
};

export default CustomSlider;
