import User from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    return res.status(200).json({ success: true, data: { users } });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      console.log("No user Found");
      return res.status(404).json({ success: false, message: "No User Found" });
    }

    console.log("User Deleted: ", user);
    return res
      .status(200)
      .json({ success: true, message: "User Deleted", data: { user } });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
