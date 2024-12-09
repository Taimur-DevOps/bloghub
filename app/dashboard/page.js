"use client";
import { useEffect, useState } from "react";
import BlogCard from "@/components/dashboard/BlogCard";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("/api/blogs");
      const data = await response.json();
      if (data.success) {
        setBlogs(data.data);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {blogs.length > 0 ? (
            blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
          ) : (
            <p className="text-gray-600">No blogs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
