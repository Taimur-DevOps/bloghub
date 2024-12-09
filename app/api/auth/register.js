// Handles user registration (new authors or admins)


import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "POST") {
    const { firstName, lastName, email, password } = req.body;

    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ success: false, message: "User already exists" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });

      res.status(201).json({ success: true, data: newUser });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ success: false, message: `Method ${method} Not Allowed` });
  }
}
