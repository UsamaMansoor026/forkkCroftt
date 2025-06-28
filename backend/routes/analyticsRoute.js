import express from "express";
import {
  getRevenueData,
  getTopSellingProducts,
} from "../controllers/analyticsController.js";

const analyticsRouter = express.Router();

analyticsRouter.get("/revenue", getRevenueData);
analyticsRouter.get("/topProducts", getTopSellingProducts);

export default analyticsRouter;
