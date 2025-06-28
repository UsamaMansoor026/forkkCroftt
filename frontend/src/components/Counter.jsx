import React, { useEffect, useRef, useState } from "react";

const Counter = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const targetNumbers = [18, 100, 50, 15000];
  const duration = 2000;
  const steps = 100;

  useEffect(() => {
    const handleScroll = () => {
      const top = ref.current?.getBoundingClientRect().top;
      if (top < window.innerHeight * 0.9 && !inView) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [inView]);

  useEffect(() => {
    if (!inView) return;

    let currentStep = 0;
    const interval = duration / steps;

    const timer = setInterval(() => {
      currentStep++;
      setCounts(
        targetNumbers.map((num) => Math.floor((num / steps) * currentStep))
      );

      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="global-section bg-tags/40 text-primary-text px-6 md:px-20 lg:px-32 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-7"
    >
      {/* Years */}
      <div className="flex flex-col items-center md:items-start gap-1">
        <h2 className="text-5xl font-semibold text-heading">
          {counts[0].toLocaleString()}
        </h2>
        <p className="text-sm uppercase tracking-[1.4px]">
          Years of experience
        </p>
      </div>

      {/* Menu/Dish */}
      <div className="flex flex-col gap-1 items-center md:items-start">
        <h2 className="text-5xl font-semibold text-heading">
          {counts[1].toLocaleString()}
        </h2>
        <p className="text-sm uppercase tracking-[1.4px]">Menus/dish</p>
      </div>

      {/* Staff */}
      <div className="flex flex-col gap-1 items-center md:items-start">
        <h2 className="text-5xl font-semibold text-heading">
          {counts[2].toLocaleString()}
        </h2>
        <p className="text-sm uppercase tracking-[1.4px]">Staffs</p>
      </div>

      {/* Customers */}
      <div className="flex flex-col gap-1 items-center md:items-start">
        <h2 className="text-5xl font-semibold text-heading">
          {counts[3].toLocaleString()}
        </h2>
        <p className="text-sm uppercase tracking-[1.4px]">Happy customers</p>
      </div>
    </section>
  );
};

export default Counter;
