import React, { useContext, useEffect } from "react";
import { Footer, Header } from "../index";
import { Link, Outlet, useLocation } from "react-router-dom";
import { NavigationContext } from "../../context/NavigationContext";
import { useCartStore } from "../../store/store";

const MainLayout = () => {
  const location = useLocation();
  const { handleSetActiveLink, currentUser } = useContext(NavigationContext);
  const totalItems = useCartStore((state) => state.getTotalItems);
  const itemsCount = useCartStore((state) => state.totalItems);
  const cartItems = useCartStore((state) => state.cartItems);

  useEffect(() => {
    totalItems();
  }, [cartItems]);

  useEffect(() => {
    const handleNavigationActive = () => {
      const currentPath = location.pathname;

      if (currentPath.startsWith("/story/")) {
        handleSetActiveLink("stories");
      } else if (currentPath === "/story") {
        handleSetActiveLink("stories");
      } else if (currentPath === "/menu") {
        handleSetActiveLink("menu");
      } else if (currentPath === "/about") {
        handleSetActiveLink("about");
      } else if (currentPath === "/contact") {
        handleSetActiveLink("contact");
      } else if (currentPath === "/") {
        handleSetActiveLink("home");
      }
    };

    handleNavigationActive();
  }, [location.pathname, handleSetActiveLink]);
  return (
    <>
      <Header />
      {/* Cart Button */}
      {currentUser && (
        <Link
          to="/cart"
          onClick={() => handleSetActiveLink("menu")}
          className="fixed z-20 text-primary-text right-5 top-28 md:top-40 w-[50px] h-[50px] bg-primary-text/30 flex justify-center items-center rounded-full shadow-lg hover:bg-primary-text/50 transition-all duration-300 ease-in-out cursor-pointer backdrop-blur-xl"
        >
          <i className="fa-solid fa-shopping-cart"></i>

          {itemsCount > 0 && (
            <span className="absolute right-1 top-0 w-[15px] h-[15px] bg-cta flex justify-center items-center rounded-full text-xs p-2">
              {itemsCount}
            </span>
          )}
        </Link>
      )}
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
