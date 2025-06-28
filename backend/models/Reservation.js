import mongoose from "mongoose";

const reservationSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    customerName: { type: String, required: true },
    date: { type: String, required: true },
    persons: { type: Number, required: true },
    time: { type: String, required: true },
    phoneNo: { type: String, required: true },
    tableNo: { type: Number, required: true },
  },
  { timeStamps: true }
);

const ReservationModel =
  mongoose.models.Reservation ||
  mongoose.model("Reservation", reservationSchema);

export default ReservationModel;
