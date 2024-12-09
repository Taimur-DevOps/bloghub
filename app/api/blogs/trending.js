// Fetches trending blog posts.

import dbConnect from "@/lib/dbConnect";
import Blog from "@/models/Blog";

export default async function handler(req, res) {
  await dbConnect();

  try {
    const trendingBlogs = await Blog.find()
      .sort({ views: -1 }) // Sort by views in descending order
      .limit(5); // Limit to top 5 trending blogs

    res.status(200).json({ success: true, data: trendingBlogs });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch trending blogs" });
  }
}
