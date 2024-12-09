import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET; // Secret key from environment variables

// Function to sign a new JWT
export const signToken = (payload, expiresIn = "1h") => {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
};

// Function to verify a JWT
export const verifyToken = (token) => {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};

// Function to decode a JWT without verifying (optional)
export const decodeToken = (token) => {
  return jwt.decode(token);
};
