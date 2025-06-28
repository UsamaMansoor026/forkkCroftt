import React, { useContext, useState } from "react";
import { NavigationContext } from "../context/NavigationContext";
import { toast } from "react-toastify";
import axios from "axios";
import SmallLoader from "./SmallLoader";
import { apiUrls } from "../apiurls";

const ReservationForm = () => {
  const [loading, SetLoading] = useState(false);
  const { currentUser } = useContext(NavigationContext);
  const [formData, setFormData] = useState({
    customerName: "",
    phoneNo: "",
    date: "",
    time: "",
    persons: 0,
    tableNo: 0,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser?.id) {
      toast.error("No User Found");
      return;
    }

    const payload = {
      ...formData,
      userId: currentUser?.id,
    };

    console.log("Form Data: ", payload);
    console.log("User: ", currentUser);

    try {
      SetLoading(true);
      const response = await axios.post(
        `${apiUrls.addReservationAPI}`,
        payload
      );

      console.log("Response: ", response);
      if (!response.data.success) {
        toast.error(response.data.message);
      }

      toast.success(response.data.message);
    } catch (error) {
      console.log("Error: ", error);
      toast.error("Internal Server Error");
    } finally {
      setFormData({
        customerName: "",
        phoneNo: "",
        date: "",
        time: "",
        persons: 0,
        tableNo: 0,
      });
      SetLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="global-section py-10 px-4 md:px-10 bg-white/10 shadow-md shadow-white/40 max-w-[95%] md:max-w-[650px] mx-auto"
    >
      {/* Input Container Name and Phone No field */}
      <div className="input-container flex items-center justify-between gap-4 mb-7">
        {/* Name */}
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="customerName"
            className="text-sm text-captions font-semibold"
          >
            Full Name
          </label>
          <input
            type="text"
            name="customerName"
            id="customerName"
            placeholder="Maan Mansoor"
            required
            value={formData.customerName}
            onChange={handleChange}
            className="outline-none border border-primary-text text-primary-text px-2 py-1.5"
          />
        </div>
        {/* Email */}
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="phoneNo"
            className="text-sm text-captions font-semibold"
          >
            Phone No
          </label>
          <input
            type="tel"
            name="phoneNo"
            id="phoneNo"
            placeholder="+92 333 3333333"
            required
            value={formData.phoneNo}
            onChange={handleChange}
            className="outline-none border border-primary-text text-primary-text px-2 py-1.5"
          />
        </div>
      </div>

      {/* Input Container Table No and Date field */}
      <div className="input-container flex items-center justify-between gap-4 mb-7">
        {/* Table No */}
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="tableNo"
            className="text-sm text-captions font-semibold"
          >
            Table No
          </label>
          <select
            id="tableNo"
            required
            value={formData.tableNo}
            onChange={handleChange}
            className="outline-none border border-primary-text text-primary-text px-2 py-1.5"
          >
            <option value="" defaultChecked>
              Select Table No
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        {/* Date */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="date" className="text-sm text-captions font-semibold">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="example@gmail.com"
            required
            value={formData.date}
            onChange={handleChange}
            className="outline-none border border-primary-text text-primary-text px-2 py-1.5"
          />
        </div>
      </div>

      {/* Input Container Time and Person field */}
      <div className="input-container flex items-center justify-between gap-4 mb-7">
        {/* Time */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="time" className="text-sm text-captions font-semibold">
            Time
          </label>
          <select
            name="time"
            id="time"
            required
            value={formData.time}
            onChange={handleChange}
            className="outline-none border bg-transparent border-primary-text text-primary-text px-2 py-1.5 placeholder:text-captions"
          >
            <option value="" defaultChecked>
              Select Time
            </option>
            <option value="8:00AM">8:00AM</option>
            <option value="9:00AM">9:00AM</option>
            <option value="10:00AM">10:00AM</option>
            <option value="11:00AM">11:00AM</option>
            <option value="12:00PM">12:00PM</option>
            <option value="1:00PM">1:00PM</option>
            <option value="2:00PM">2:00PM</option>
            <option value="3:00PM">3:00PM</option>
            <option value="4:00PM">4:00PM</option>
            <option value="5:00PM">5:00PM</option>
            <option value="6:00PM">6:00PM</option>
            <option value="7:00PM">7:00PM</option>
            <option value="8:00PM">8:00PM</option>
            <option value="9:00PM">9:00PM</option>
            <option value="10:00PM">10:00PM</option>
            <option value="11:00PM">11:00PM</option>
          </select>
        </div>

        {/* Person */}
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="persons"
            className="text-sm text-captions font-semibold"
          >
            Person
          </label>
          <select
            name="persons"
            id="persons"
            required
            value={formData.persons}
            onChange={handleChange}
            className="outline-none border border-primary-text text-primary-text px-2 py-1.5"
          >
            <option value="" defaultChecked>
              Select No of Person
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={`bg-button w-full py-2.5 px-4 text-primary-text font-semibold rounded-md hover:shadow-md hover:shadow-button-hover transition-all duration-300 ease-in-out cursor-pointer flex items-center gap-3 justify-center ${
          loading ? "opacity-70" : "opacity-100"
        }`}
      >
        Make Reservation {loading && <SmallLoader />}
      </button>
    </form>
  );
};

export default ReservationForm;
