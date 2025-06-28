import React, { useContext, useEffect } from "react";
import { NavigationContext } from "../context/NavigationContext";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
import { apiUrls } from "../apiurls";

const PaymentSuccess = () => {
  const { currentUser } = useContext(NavigationContext);
  const placeOrder = async () => {
    const items = JSON.parse(localStorage.getItem("cartItems"));

    try {
      console.log("Items: ", items);
      console.log("User Id: ", currentUser?.id);
      const response = await axios.post(`${apiUrls.placeOrderAPI}`, {
        userId: currentUser.id,
        items,
      });

      console.log("Order placed:", response);
      localStorage.removeItem("cartItems");
    } catch (error) {
      console.log("Error: ", error);
      toast.error("Server Error");
    }
  };
  useEffect(() => {
    if (!currentUser?.id) return;
    placeOrder();
  }, [currentUser]);
  return (
    <section className="global-padding global-section flex flex-col items-center gap-4 pt-32">
      <h1 className="text-center text-primary-text text-xl">
        Payment Successful! Your order has been placed
      </h1>
      <Link to="/orders" className="text-center text-blue-500 underline">
        Go to your Orders
      </Link>
    </section>
  );
};

export default PaymentSuccess;
