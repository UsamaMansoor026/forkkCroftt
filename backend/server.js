import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import paymentRouter from "./routes/paymentRoutes.js";
import menuItemRouter from "./routes/menuItemRoute.js";
import path from "path";
import orderRoute from "./routes/orderRoutes.js";
import userRouter from "./routes/userRoute.js";
import reservationRouter from "./routes/reservationRoutes.js";
import analyticsRouter from "./routes/analyticsRoute.js";
import feedbackRouter from "./routes/feedbackRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));
const PORT = 2632;

connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to the forkCroft");
});

/* Routers */
app.use("/api/auth", authRouter);
app.use("/api/payment", paymentRouter);
app.use("/api/menu", menuItemRouter);
app.use("/api/order", orderRoute);
app.use("/api/user", userRouter);
app.use("/api/reservation", reservationRouter);
app.use("/api/analytics", analyticsRouter);
app.use("/api/feedback", feedbackRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}`);
});
