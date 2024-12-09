// components/dashboard/BlogCard.js
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold">{blog.title}</h2>
      <p className="text-gray-700">{blog.excerpt}</p>
      <Link href={`/blog/${blog._id}`} className="text-blue-500">Read more</Link>
    </div>
  );
};

export default BlogCard;
