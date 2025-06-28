import { createContext, useEffect, useState } from "react";

export const NavigationContext = createContext();

export const NavigationContextProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [currentUser, setCurrentUser] = useState(null);

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  const loginUser = (userData) => {
    localStorage.setItem("forkcroftuser", JSON.stringify(userData));
    setCurrentUser(userData);
  };

  const logoutUser = () => {
    localStorage.removeItem("forkcroftuser");
    setCurrentUser(null);
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("forkcroftuser"));
    if (storedUser) setCurrentUser(storedUser);
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        activeLink,
        handleSetActiveLink,
        currentUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
