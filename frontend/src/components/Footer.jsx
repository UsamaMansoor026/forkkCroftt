import React from "react";
import { InstagramGallery } from "./index";

const Footer = () => {
  return (
    <footer className="global-padding py-10 bg-primary text-primary-text grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Title thing */}
      <div className="flex flex-col items-center md:items-start">
        <img src="/logo.png" alt="ForkCroft Logo" className="w-20" />
        <p className="text-[15px] md:text-lg text-captions">
          Where every bite tells a story worth savoring.
        </p>

        {/* Social Icons */}
        <ul className="flex items-center justify-center md:justify-start gap-4 mt-5">
          <li className="bg-primary-text/10 text-primary-text w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-secondary/70 transition-all duration-300 cursor-pointer">
            <i className="fa-brands fa-facebook-f"></i>
          </li>
          <li className="bg-primary-text/10 text-primary-text w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-secondary/70 transition-all duration-300 cursor-pointer">
            <i className="fa-brands fa-instagram"></i>
          </li>
          <li className="bg-primary-text/10 text-primary-text w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-secondary/70 transition-all duration-300 cursor-pointer">
            <i className="fa-brands fa-twitter"></i>
          </li>
        </ul>
      </div>

      {/* Opening Hours */}
      <div className="w-full flex flex-col items-center md:items-start max-w-[70%] mx-auto md:max-w-full">
        <h5 className="font-semibold text-xl mb-3">Open Hours</h5>
        <p className="w-full flex items-center justify-between gap-6 md:gap-4 text-captions text-[15px] mb-2">
          <span>Monday</span> <span>9:00AM - 11:00PM</span>
        </p>
        <p className="w-full flex items-center justify-between gap-6 md:gap-4 text-captions text-[15px] mb-2">
          <span>Tuesday</span> <span>9:00AM - 11:00PM</span>
        </p>
        <p className="w-full flex items-center justify-between gap-6 md:gap-4 text-captions text-[15px] mb-2">
          <span>Wednesday</span> <span>9:00AM - 11:00PM</span>
        </p>
        <p className="w-full flex items-center justify-between gap-6 md:gap-4 text-captions text-[15px] mb-2">
          <span>Thursday</span> <span>9:00AM - 11:00PM</span>
        </p>
        <p className="w-full flex items-center justify-between gap-6 md:gap-4 text-captions text-[15px] mb-2">
          <span>Friday</span> <span>9:00AM - 2:00PM</span>
        </p>
        <p className="w-full flex items-center justify-between gap-6 md:gap-4 text-captions text-[15px] mb-2">
          <span>Saturday</span> <span>9:00AM - 11:00PM</span>
        </p>
        <p className="w-full flex items-center justify-between gap-6 md:gap-4 text-captions text-[15px] mb-2">
          <span>Sunday</span> <span>9:00AM - 11:00PM</span>
        </p>
      </div>

      {/* Instagram Gallery */}
      <div>
        <h5 className="font-semibold text-xl mb-3">Instagram</h5>
        <InstagramGallery />
      </div>

      {/* NewsLetter */}
      <div>
        <h5 className="font-semibold text-xl mb-3">Newsletter</h5>

        <form>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-[50px] px-3 mb-3 rounded-md border border-captions focus:outline-none"
          />
          <button className="w-full h-[50px] bg-secondary text-primary-text font-semibold rounded-md hover:bg-secondary/70 transition-all duration-300 cursor-pointer">
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
