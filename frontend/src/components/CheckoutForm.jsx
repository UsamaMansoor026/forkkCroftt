import React from "react";
import { useForm } from "react-hook-form";
import { useCartStore } from "../store/store";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { toast } from "react-toastify";
import { apiUrls } from "../apiurls";

const CheckoutForm = () => {
  const total = useCartStore((state) => state.getSubTotal());
  const itemsCount = useCartStore((state) => state.totalItems);
  const cartItems = useCartStore((state) => state.cartItems);
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

  const { handleSubmit } = useForm();

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-primary-text/10 rounded-lg p-6"
    >
      {/* Order Summary and Payment */}
      <div className="space-y-7 mt-7">
        <h2 className="text-xl font-semibold text-primary-text pt-6">
          Order Summary
        </h2>

        <div className="text-primary-text text-sm space-y-6">
          <div className="flex justify-between">
            <span>Total Items</span>
            <span>{itemsCount}</span>
          </div>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-bold text-base border-t mt-2 pt-2">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Payment */}

        <button
          type="submit"
          className="bg-black text-white w-full py-2 rounded hover:bg-gray-900 transition"
        >
          Confirm & Pay
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
