import { useState, useEffect } from "react";
import Link from "next/link";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data.blogs);
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
    if (res.ok) {
      setBlogs(blogs.filter((blog) => blog._id !== id));
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Blogs</h2>
      <Link href="/dashboard/blogs/new">
        <a className="mb-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md">Create New Blog</a>
      </Link>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id} className="mb-4 p-4 bg-white dark:bg-gray-800 shadow-md rounded-md">
            <h3 className="text-lg font-semibold">{blog.title}</h3>
            <p>{blog.description}</p>
            <div className="mt-4 flex justify-between">
              <Link href={`/dashboard/blogs/${blog._id}`}>
                <a className="text-blue-600">Edit</a>
              </Link>
              <button onClick={() => handleDelete(blog._id)} className="text-red-600">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
