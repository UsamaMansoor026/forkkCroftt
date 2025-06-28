import express from "express";
import {
  addFeedback,
  deleteFeedback,
} from "../controllers/feedbackController.js";

const feedbackRouter = express.Router();

feedbackRouter.post("/add", addFeedback);
feedbackRouter.delete("/delete/:id", deleteFeedback);

export default feedbackRouter;
