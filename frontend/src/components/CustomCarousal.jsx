import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroBg_images } from "../assets";

const hero_text = [
  "Best Restaurant",
  "Nutritious & tasty",
  "Delicious Specialaties",
];

const CustomCarousal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBg_images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden bg-primary">
      <AnimatePresence mode="wait">
        {heroBg_images.length > 0 && (
          <>
            <motion.img
              key={currentSlide}
              src={heroBg_images[currentSlide]}
              alt={`Slide ${currentSlide}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: [1.05, 1, 1, 1] }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.2 },
                scale: { duration: 0.6, ease: [0.4, 0, 0, 0] },
              }}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 w-full h-full bg-primary/60"></div>

            <div className="absolute bottom-0 w-full h-[150px] bg-gradient-to-t from-bg-primary via-primary/10 to-transparent"></div>

            <div className="text-center absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
              <h1 className="text-[70px] font-great-vibes text-heading">
                ForkCroft
              </h1>
              <motion.h1
                key={currentSlide}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-poppins uppercase text-primary-text font-semibold text-2xl md:text-4xl lg:text-5xl tracking-[3px] whitespace-nowrap"
              >
                {hero_text[currentSlide]}
              </motion.h1>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomCarousal;
