import express from "express";
import {
  addReservation,
  deleteReservation,
  fetchAll,
  fetchUserReservations,
} from "../controllers/reservationController.js";

const reservationRouter = express.Router();

reservationRouter.post("/add", addReservation);
reservationRouter.get("/user/:id", fetchUserReservations);
reservationRouter.get("/", fetchAll);
reservationRouter.delete("/delete/:id", deleteReservation);

export default reservationRouter;
