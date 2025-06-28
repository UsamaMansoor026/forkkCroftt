import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  About,
  Cart,
  Checkout,
  ContactPage,
  Home,
  Login,
  MenuPage,
  Orders,
  PaymentSuccess,
  Register,
  Reservation,
  Stories,
  Story,
} from "./pages";
import MainLayout from "./components/layouts/MainLayout";
import AuthLayout from "./components/layouts/AuthLayout";

import { Bounce, ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/story" element={<Stories />} />
          <Route path="/story/:id" element={<Story />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
        </Route>

        {/* AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
