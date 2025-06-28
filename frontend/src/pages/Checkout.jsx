import React from "react";
import { CheckoutForm, PageHeader } from "../components";
import { useCartStore } from "../store/store";

const Checkout = () => {
  const total = useCartStore((state) => state.getSubTotal());
  return (
    <>
      <PageHeader heading="Checkout" targetLink="Checkout" />

      <section className="global-padding global-section">
        <div className="max-w-[700px] mx-auto">
          <CheckoutForm />
        </div>
      </section>
    </>
  );
};

export default Checkout;
