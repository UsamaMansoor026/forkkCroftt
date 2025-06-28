import React from "react";
import { instaGallery } from "../assets";

const InstagramGallery = () => {
  return (
    <div className="grid grid-cols-3">
      {instaGallery.map((image, index) => (
        <img
          src={image}
          alt=""
          key={index}
          className="w-full h-[100px] object-cover"
        />
      ))}
    </div>
  );
};

export default InstagramGallery;
