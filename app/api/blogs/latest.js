// Fetches the latest blog posts.

import dbConnect from "@/lib/dbConnect";
import Blog from "@/models/Blog";

export default async function handler(req, res) {
  await dbConnect();

  try {
    const latestBlogs = await Blog.find()
      .sort({ createdAt: -1 }) // Sort by creation date in descending order
      .limit(5); // Limit to the 5 latest blogs

    res.status(200).json({ success: true, data: latestBlogs });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch latest blogs" });
  }
}
