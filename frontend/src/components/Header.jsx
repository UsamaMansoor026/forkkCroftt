import React, { useEffect, useState } from "react";
import NavLinks from "./NavLinks";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="border-b border-primary-text/10 absolute top-0 left-0 right-0 z-50">
      {/* Upper Header */}
      <div className="global-padding py-5 hidden text-white text-sm md:flex justify-between items-center bg-white/20">
        {/* Tele-Phone Number */}
        <div className="flex items-center justify-center gap-3">
          <i className="fa-solid fa-phone"></i>
          <span>+92 333 3333333</span>
        </div>

        {/* Email Address */}
        <div className="flex items-center justify-center gap-3">
          <i className="fa-solid fa-paper-plane"></i>
          <span>forkcroft@gmail.com</span>
        </div>

        {/* Open Hours */}
        <p className="font-semibold">
          Open hours: Monday - Sunday 8:00AM - 11:00PM
        </p>
      </div>

      {/* Navbar */}
      <nav
        className={`${
          isFixed
            ? "fixed top-0 left-0 right-0 z-50 bg-primary shadow-md"
            : "bg-primary md:bg-transparent"
        } global-padding py-1 flex flex-col md:flex-row items-start md:items-center justify-between `}
      >
        <img src="/logo.png" alt="ForkCroft Logo" className="w-20" />

        <NavLinks />
      </nav>
    </header>
  );
};

export default Header;
