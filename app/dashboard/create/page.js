"use client";

import { useState } from "react";

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
    author: "",
    category: "",
    isTrending: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const categories = ["tech", "business", "sports", "health", "education"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setSuccess("Blog created successfully!");
        setFormData({
          title: "",
          description: "",
          content: "",
          image: "",
          author: "",
          category: "",
          isTrending: false,
        });
      } else {
        setError(data.message || "Something went wrong!");
      }
    } catch (err) {
      setError("Error creating blog.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Create a New Blog</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="3"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="5"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Author ID</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="isTrending"
              checked={formData.isTrending}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <span className="font-medium">Mark as Trending</span>
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
