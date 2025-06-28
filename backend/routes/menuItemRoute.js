import express from "express";
import upload from "../config/multer.js";
import {
  addMenuItem,
  deleteItem,
  getMenuItems,
  getSingleItem,
  updateMenuItem,
} from "../controllers/menuItemController.js";

const menuItemRouter = express.Router();

menuItemRouter.post("/add", upload.single("image"), addMenuItem);
menuItemRouter.get("/getallitems", getMenuItems);
menuItemRouter.delete("/deleteItem/:id", deleteItem);
menuItemRouter.get("/getSingleItem/:id", getSingleItem);
menuItemRouter.put("/update/:id", updateMenuItem);

export default menuItemRouter;
