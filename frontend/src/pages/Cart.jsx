import React, { useContext } from "react";
import { CartItemsTable, PageHeader } from "../components";
import { NavigationContext } from "../context/NavigationContext";
import { useCartStore } from "../store/store";
import { loadStripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { apiUrls } from "../apiurls";

const Cart = () => {
  const { currentUser } = useContext(NavigationContext);
  const subTotal = useCartStore((state) => state.getSubTotal());
  const itemsCount = useCartStore((state) => state.totalItems);
  const cartItems = useCartStore((state) => state.cartItems);

  /* Stripe things */
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  const onSubmit = async (data) => {
    // console.log("Form Data: ", data);

    const stripe = await stripePromise;
    // console.log("Stripe: ", stripe);

    // console.log("Cart Items: ", cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    try {
      const response = await axios.post(`${apiUrls.paymentAPI}`, {
        cartItems,
      });

      // toast.success("Payment Success");
      window.location.href = response.data.url;
    } catch (err) {
      console.log("Error: ", err);
      toast.error("Error Occured");
    }
  };

  return (
    <div>
      <PageHeader heading={`${currentUser?.name}'s Cart`} targetLink="" />

      <section className="global-padding global-section">
        <CartItemsTable />

        {/* Cart Summary Details */}
        {cartItems?.length > 0 && (
          <div className="bg-primary-text/10 text-primary-text p-6 rounded-lg shadow-md w-full md:max-w-sm">
            <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subTotal.toFixed(2)}</span>
            </div>

            <hr className="my-2" />

            <div className="flex justify-between font-semibold text-lg mb-4">
              <span>Total</span>
              <span>${subTotal.toFixed(2)}</span>
            </div>

            <button
              type="button"
              onClick={onSubmit}
              className="bg-button text-white px-4 py-2 rounded-lg block text-center w-full hover:bg-button-hover transition cursor-pointer"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cart;
