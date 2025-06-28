import React from "react";

import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import { testimonies } from "../assets";

const TestimonialSlider = () => {
  return (
    <Swiper
      modules={[Pagination, A11y]}
      spaceBetween={50}
      //   slidesPerView={3}
      loop={true}
      autoplay={true}
      pagination={{
        clickable: true,
        bulletClass: "swiper-pagination-bullet custom-bullet",
        bulletActiveClass:
          "swiper-pagination-bullet-active custom-bullet-active",
      }}
      onSwiper={() => {}}
      onSlideChange={() => {}}
      className="my-swiper relative my-20"
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {testimonies.map((item) => (
        <SwiperSlide
          key={item.id}
          className="pb-4 bg-white/10 shadow-2xs shadow-white/70 backdrop-blur-2xl p-5"
        >
          <div className="overflow-hidden flex items-center justify-center">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-56 object-cover aspect-square rounded-full"
            />
          </div>

          <div className="flex flex-col gap-4 text-center py-5">
            <h4 className="text-captions">{item.feedback}</h4>
            <h2 className="font-medium text-2xl">{item.name}</h2>

            <p className="text-sm text-captions">Customer</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
