import mongoose from "mongoose";

const FeedbackSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timeStamps: true,
  }
);

const FeedbackModel =
  mongoose.models.Feedback || mongoose.model("Feedback", FeedbackSchema);

export default FeedbackModel;
