import express from "express";
import {
  deleteOrder,
  getAllOrders,
  getUserOrders,
  handleOrderStatus,
  placeOrder,
  summary,
} from "../controllers/orderController.js";

const orderRoute = express.Router();

orderRoute.post("/placeorder", placeOrder);
orderRoute.get("/getorders/:id", getUserOrders);
orderRoute.get("/getorders", getAllOrders);
orderRoute.put("/handlestatus/:id", handleOrderStatus);
orderRoute.delete("/delete/:id", deleteOrder);
orderRoute.get("/summary", summary);

export default orderRoute;
