import ReservationModel from "../models/Reservation.js";

export const addReservation = async (req, res) => {
  const { userId, customerName, phoneNo, date, time, persons, tableNo } =
    req.body;

  try {
    const reservation = await ReservationModel({
      userId,
      customerName,
      phoneNo,
      date,
      time,
      persons,
      tableNo,
    });

    await reservation.save();
    // console.log("Reservation: ", reservation);
    res.status(200).json({ success: true, message: "Reservation added" });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

/* Fetching all Reservations */
export const fetchAll = async (req, res) => {
  try {
    const reservations = await ReservationModel.find();

    if (reservations.length === 0) {
      return res.json({
        success: false,
        message: "No reservations Found",
        reservations,
      });
    }
    return res.status(200).json({ success: true, reservations });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

/* Fetching reservation based on UserId */
export const fetchUserReservations = async (req, res) => {
  const { id } = req.params;

  try {
    const reservations = await ReservationModel.find({ userId: id });

    if (!reservations || reservations.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No Reservations Found" });
    }

    return res.status(200).json({ success: true, reservations });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

/* Delete Reservation */
export const deleteReservation = async (req, res) => {
  const { id } = req.params;

  try {
    const reservation = await ReservationModel.findByIdAndDelete(id);

    if (!reservation) {
      return res
        .status(404)
        .json({ success: false, message: "No Reservation Found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Reservation Deleted", reservation });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
