import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: "String", required: true },
    email: { type: "String", required: true, unique: true, lowercase: true },
    password: { type: "String", required: true },
  },
  { timeStamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
