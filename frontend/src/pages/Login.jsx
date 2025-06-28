import React, { useContext, useState } from "react";
import { BackButton, SmallLoader } from "../components";
import { heroBg_images } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { NavigationContext } from "../context/NavigationContext";
import { apiUrls } from "../apiurls";

const Login = () => {
  const { loginUser } = useContext(NavigationContext);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("data: ", data);

    try {
      setLoading(true);
      const response = await axios.post(`${apiUrls.loginAPI}`, data);
      console.log("Response: ", response);
      if (response.status === 200) {
        loginUser(response.data.user);
        toast.success(response.data.message);

        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      console.error("Login failed:", err.response.data.message);
      toast.error("Something went wrong!!");
    } finally {
      setLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  return (
    <section
      className="min-h-screen relative flex justify-center items-center"
      style={{
        background: `url(${heroBg_images[1]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Mask Image */}
      <div className="absolute inset-0 bg-primary/50" />

      <BackButton className="absolute top-2 left-2 z-10" />

      {/* Login Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[500px] w-full text-primary-text mx-auto border border-primary-text/20 backdrop-blur-sm p-5"
      >
        {/* Logo */}
        <img src="/logo.png" alt="Fork Croft" className="w-16 h-16" />
        <h3 className="font-semibold text-xl">Welcome to ForkCroft</h3>

        <hr className="border-none h-[1px] bg-primary-text/20 my-5" />

        {/* Input Container Email */}
        <div className="flex flex-col gap-1 mb-5">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-primary-text/80"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            {...register("email", { required: true })}
            className="border border-primary-text/20 rounded-md px-2 py-3 focus:outline-none focus:border-primary-text/50 transition duration-200"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">Email is required</p>
          )}
        </div>

        {/* Input Container Password */}
        <div className="flex flex-col gap-1 mb-5 relative">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-primary-text/80"
            >
              Password
            </label>

            <Link to="/" className="text-sm text-cta underline">
              Forgot Password?
            </Link>
          </div>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            className="border border-primary-text/20 rounded-md px-2 py-3 focus:outline-none focus:border-primary-text/50 transition duration-200"
          />
          <i
            className={`fa-solid ${
              showPassword ? "fa-eye" : "fa-eye-slash"
            } absolute right-4 bottom-4 cursor-pointer`}
            onClick={() => setShowPassword(!showPassword)}
          />

          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className={`border border-primary-text/20 bg-button w-full rounded-md px-2 py-3 focus:outline-none focus:border-primary-text/50 transition duration-200 hover:bg-button-hover mb-5 flex items-center justify-center gap-3 ${
            loading
              ? "cursor-not-allowed opacity-60"
              : "cursor-pointer opacity-100"
          }`}
          disabled={loading}
        >
          Login {loading && <SmallLoader />}
        </button>

        <p className="text-sm text-captions">
          Don't have an account?{" "}
          <Link to="/register" className="ml-1 text-cta underline">
            Register now
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
