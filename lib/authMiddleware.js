import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export default function authMiddleware(handler) {
  return async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded; // Attach user data to request
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }
  };
}
