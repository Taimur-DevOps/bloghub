import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { signToken } from "@/lib/jwt";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "POST") {
    const { email, password } = req.body;

    try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ success: false, message: "Invalid credentials" });
      }

      // Compare password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ success: false, message: "Invalid credentials" });
      }

      // Generate JWT using the `signToken` utility
      const token = signToken({ id: user._id, email: user.email }, "1h");

      res.status(200).json({ success: true, token });
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ success: false, message: `Method ${method} Not Allowed` });
  }
}
