import express from "express";
import { deleteUser, getUsers } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/getall", getUsers);
userRouter.delete("/delete/:id", deleteUser);

export default userRouter;
