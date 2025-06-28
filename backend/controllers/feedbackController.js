import FeedbackModel from "../models/Feedback.js";

export const addFeedback = async (req, res) => {
  const { userId, message } = req.body;
  try {
    if (!userId || !message) {
      return res
        .status(400)
        .json({ success: false, message: "User ID and message are required" });
    }

    const feedback = new FeedbackModel({
      userId,
      message,
    });

    await feedback.save();
    res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      feedback,
    });
  } catch (error) {
    console.error("Error adding feedback:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const deleteFeedback = async (req, res) => {
  const { id } = req.params;
  try {
    const feedback = await FeedbackModel.findByIdAndDelete(id);
    if (!feedback) {
      return res
        .status(404)
        .json({ success: false, message: "Feedback not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Feedback deleted successfully" });
  } catch (error) {
    console.error("Error deleting feedback:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
