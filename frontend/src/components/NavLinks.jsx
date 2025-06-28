import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { NavigationContext } from "../context/NavigationContext";
import { toast } from "react-toastify";

const NavLinks = () => {
  const { activeLink, currentUser, logoutUser } = useContext(NavigationContext);
  // const [activeLink, setActiveLink] = useState("home");
  const [mobNav, setMobNav] = useState(false);

  const handleMobNav = () => {
    setMobNav(!mobNav);
  };

  const handleNavLinkClick = () => {
    // handleSetActiveLink(link);
    setMobNav(false);
  };

  const handleLogout = () => {
    logoutUser();
    toast.success("Logged Out successfully!");
  };

  return (
    <>
      <div className="flex items-center gap-5">
        <ul
          className={`w-[98%] md:w-[max-content] ${
            mobNav ? "flex" : "hidden md:flex"
          } flex-col md:flex-row items-start md:items-center justify-center transition-all duration-200`}
        >
          <Link
            to="/"
            className={`${
              activeLink === "home" ? "bg-primary-text/10 text-white" : ""
            } text-primary-text text-[14px] duration-200 hover:text-white  hover:bg-primary-text/10 cursor-pointer px-5 py-2 w-full md:w-[max-content]`}
            onClick={handleNavLinkClick}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`${
              activeLink === "about" ? "bg-primary-text/10 text-white" : ""
            } text-primary-text text-[14px] duration-200 hover:text-white  hover:bg-primary-text/10 cursor-pointer px-5 py-2 w-full md:w-[max-content]`}
            onClick={handleNavLinkClick}
          >
            About
          </Link>
          <Link
            to="/menu"
            className={`${
              activeLink === "menu" ? "bg-primary-text/10 text-white" : ""
            } text-primary-text text-[14px] duration-200 hover:text-white  hover:bg-primary-text/10 cursor-pointer px-5 py-2 w-full md:w-[max-content]`}
            onClick={handleNavLinkClick}
          >
            Menu
          </Link>
          <Link
            to="/story"
            className={`${
              activeLink === "stories" ? "bg-primary-text/10 text-white" : ""
            } text-primary-text text-[14px] duration-200 hover:text-white  hover:bg-primary-text/10 cursor-pointer px-5 py-2 w-full md:w-[max-content]`}
            onClick={handleNavLinkClick}
          >
            Stories
          </Link>
          <Link
            to="/contact"
            className={`${
              activeLink === "contact" ? "bg-primary-text/10 text-white" : ""
            } text-primary-text text-[14px] duration-200 hover:text-white  hover:bg-primary-text/10 cursor-pointer px-5 py-2 w-full md:w-[max-content]`}
            onClick={handleNavLinkClick}
          >
            Contact
          </Link>

          {!currentUser && (
            <Link
              to="/login"
              className="bg-button px-10 py-3 shadow-sm hover:shadow-button-hover ml-3 cursor-pointer text-primary-text duration-200 hover:bg-button-hover w-full md:w-[max-content]"
            >
              Login
            </Link>
          )}
        </ul>

        {/* User Profile */}
        {currentUser && (
          <div className="absolute top-5 right-4 md:relative md:top-0 md:right-0 group">
            <div className="">
              <i className="fa-solid fa-user text-primary-text text-xl border border-primary-text rounded-full w-[40px] h-[40px] flex justify-center items-center text-center p-1 pt-2 backdrop-blur-xl cursor-pointer" />
            </div>

            <div className="bg-transparent absolute top-9 right-0 hidden group-hover:block transition-all duration-200 z-50">
              <ul className="mt-8 w-64 bg-primary-text text-primary shadow-lg rounded-lg p-4 space-y-3">
                <li className="font-semibold text-lg">{currentUser?.name}</li>
                <li className="text-sm text-captions">{currentUser?.email}</li>
                <hr />
                <li>
                  <Link
                    to="/orders"
                    className="text-primary block hover:underline"
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/reservation"
                    className="cursor-pointer text-primary text-left duration-200 hover:underline"
                  >
                    Reservations
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-red-500 hover:underline cursor-pointer w-full text-left"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Hamburger Menu */}
      <div
        className="block md:hidden text-xl text-primary-text px-4 py-2 bg-primary-text/10 cursor-pointer shadow-sm hover:shadow-primary-text/30 absolute right-16 top-5"
        onClick={handleMobNav}
      >
        {mobNav ? (
          <>
            <i className="fa-solid fa-close"></i> Menu
          </>
        ) : (
          <>
            <i className="fa-solid fa-bars"></i> Menu
          </>
        )}
      </div>
    </>
  );
};

export default NavLinks;
