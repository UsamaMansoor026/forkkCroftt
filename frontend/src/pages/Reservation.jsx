import { useContext, useEffect, useState } from "react";
import { PageHeader, ReservationForm } from "../components";
import { NavigationContext } from "../context/NavigationContext";
import axios from "axios";
import { toast } from "react-toastify";
import { apiUrls } from "../apiurls";

const Reservation = () => {
  const { currentUser } = useContext(NavigationContext);
  const [toggler, setToggler] = useState("reservations");
  const [reservations, setReservations] = useState([]);

  const isReservationValid = (date, time) => {
    const [timePart, modifier] = time
      .trim()
      .toUpperCase()
      .split(/(AM|PM)/);
    let [hours, minutes] = timePart.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) {
      hours += 12;
    } else if (modifier === "AM" && hours === 12) {
      hours = 0;
    }

    // Format hours and minutes as 2-digit strings
    const hoursStr = hours.toString().padStart(2, "0");
    const minutesStr = minutes.toString().padStart(2, "0");

    const reservationDateTime = new Date(`${date}T${hoursStr}:${minutesStr}`);
    const now = new Date();

    if (reservationDateTime < now) return "not-valid";
    return "valid";
  };

  const fetchReservations = async () => {
    try {
      const id = currentUser?.id;

      const response = await axios.get(
        `${apiUrls.fetchUserReservationsAPI}/${id}`
      );
      console.log("Reservations: ", response.data);
      if (!response.data.success && response.data.reservations.length === 0) {
        toast.error(response.data.message);
        setReservations([]);
        return;
      }
      setReservations(response.data.reservations);
    } catch (error) {
      console.log("Error: ", error);
      // toast.error("Internal Server Error");
    }
  };

  useEffect(() => {
    if (!currentUser?.id) return;
    fetchReservations();
  }, [currentUser]);

  return (
    <>
      <PageHeader heading="Reservations" targetLink="Reservations" />

      <section className="global-padding global-section">
        {/* Toggler for reservations and reservation form */}
        <div className="mb-7 flex items-center justify-center border border-primary-text w-fit mx-auto rounded-lg overflow-hidden">
          <button
            type="button"
            className={`${
              toggler === "reservations"
                ? "bg-button text-white"
                : "text-captions"
            } px-6 py-3 cursor-pointer w-fit md:w-[220px]`}
            onClick={() => setToggler("reservations")}
          >
            Reservations
          </button>
          <button
            type="button"
            className={`${
              toggler === "form" ? "bg-button text-white" : "text-captions"
            } px-6 py-3 cursor-pointer w-fit md:w-[220px]`}
            onClick={() => setToggler("form")}
          >
            Add New Reservation
          </button>
        </div>
        {toggler === "reservations" ? (
          <div className="overflow-x-auto">
            <table className="table-scrollbar min-w-full text-sm text-white bg-primary-text/10 rounded-lg p-4 mt-6">
              <thead>
                <tr className="text-left border-b border-captions text-captions">
                  <th className="py-4 px-4">S. No</th>
                  <th className="py-4 px-4">Name on Reservation</th>
                  <th className="py-5 px-4">Table No</th>
                  <th className="py-5 px-4">Date</th>
                  <th className="py-5 px-4">Time</th>
                  <th className="py-5 px-4 text-center">Persons</th>
                  <th className="py-4 px-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {reservations?.length > 0 &&
                  reservations.map((reservation, index) => (
                    <tr
                      key={reservation._id}
                      className="border-b border-captions duration-200"
                    >
                      <td className="py-4 px-4">{index + 1}</td>
                      <td className="py-4 px-4">{reservation.customerName}</td>
                      <td className="py-4 px-4">{reservation.tableNo}</td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        {reservation.date}
                      </td>
                      <td className="py-4 px-4">{reservation.time}</td>
                      <td className="py-4 px-4 text-center">
                        {reservation.persons}
                      </td>
                      {isReservationValid(
                        reservation.date,
                        reservation.time
                      ) === "valid" ? (
                        <td className="py-4 px-4 flex justify-center">
                          <button
                            type="button"
                            className="bg-red-500 px-2 py-1 cursor-pointer rounded-lg duration-200 hover:shadow-md hover:shadow-red-700"
                          >
                            Cancel
                          </button>
                        </td>
                      ) : (
                        <></>
                      )}
                    </tr>
                  ))}
              </tbody>
            </table>

            {reservations?.length === 0 && (
              <div className="text-center text-captions py-10">
                No Reservations Found
              </div>
            )}
          </div>
        ) : (
          <ReservationForm />
        )}
      </section>
    </>
  );
};

export default Reservation;
