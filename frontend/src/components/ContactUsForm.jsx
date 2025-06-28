import React, { useContext, useState } from "react";
import { NavigationContext } from "../context/NavigationContext";
import { toast } from "react-toastify";
import axios from "axios";
import { apiUrls } from "../apiurls";
import SmallLoader from "./SmallLoader";

const ContactUsForm = () => {
  const { currentUser } = useContext(NavigationContext);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      if (!currentUser) return;
      const payload = {
        message,
        userId: currentUser?.id,
      };
      const response = await axios.post(`${apiUrls.addFeedbackAPI}`, payload);

      if (!response.data.success) {
        toast.error(response.data.message || "Failed to send message.");
        return;
      }

      toast.success(response.data.message);
    } catch (error) {
      console.log("Error: ", error);
      toast.error("Internal Server Error.");
    } finally {
      setLoading(false);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="font-semibold text-xl mb-6 text-primary-text">
        Leave us a Feedback
      </h3>

      {/* Input container Message */}
      <div className="mb-8">
        <textarea
          name="message"
          id="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message here..."
          className="capitalize w-full outline-none p-3 text-primary-text border border-primary-text/50 focus:border-primary-text/100 transition-all duration-300 ease-in-out resize-y min-h-[150px]"
        />
      </div>

      <button
        type="submit"
        className={`py-2 bg-button w-full duration-200 hover:bg-button-hover hover:shadow-md hover:shadow-button-hover flex justify-center items-center gap-3 ${
          loading
            ? "cursor-not-allowed opacity-80"
            : "cursor-pointer opacity-100"
        }`}
      >
        Send Message {loading && <SmallLoader />}
      </button>
    </form>
  );
};

export default ContactUsForm;
