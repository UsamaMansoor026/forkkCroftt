import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    /* Hasing the password using bycryptjs */
    const hashedPassword = await bcrypt.hash(password, 10);

    /* Creating a User in DB */
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    /* Generating a JWT token */
    const token = generateToken({ email });

    res.status(201).json({
      message: "User is created successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        token: token,
      },
    });
  } catch (err) {
    console.log("Error in registerUser: ", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    // console.log("User: ", existingUser);
    if (!existingUser) {
      res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken({
      email: existingUser.email,
      id: existingUser._id,
    });

    res.status(200).json({
      message: "Login successful",
      user: {
        id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
        token,
      },
    });
  } catch (err) {
    console.error("Error in loginUser:", err);
    res.status(500).json({ message: "Server error" });
  }
};
