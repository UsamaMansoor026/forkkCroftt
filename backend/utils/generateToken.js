import jwt from "jsonwebtoken";

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "4d",
  });
};

export default generateToken;
