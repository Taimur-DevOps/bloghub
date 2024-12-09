import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const BlogForm = ({ blogId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (blogId) {
      const fetchBlog = async () => {
        const res = await fetch(`/api/blogs/${blogId}`);
        const data = await res.json();
        setTitle(data.blog.title);
        setDescription(data.blog.description);
        setCategory(data.blog.category);
      };
      fetchBlog();
    }
  }, [blogId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = { title, description, category, image };

    const res = await fetch(blogId ? `/api/blogs/${blogId}` : "/api/blogs", {
      method: blogId ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    });

    const data = await res.json();

    if (data.success) {
      router.push("/dashboard/blogs");
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-12 bg-white dark:bg-gray-800 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">{blogId ? "Edit Blog" : "Create Blog"}</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">Title</label>
          <input
            type="text"
            id="title"
            className="mt-1 p-2 w-full border rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium">Description</label>
          <textarea
            id="description"
            className="mt-1 p-2 w-full border rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium">Category</label>
          <input
            type="text"
            id="category"
            className="mt-1 p-2 w-full border rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="image" className="block text-sm font-medium">Image URL</label>
          <input
            type="text"
            id="image"
            className="mt-1 p-2 w-full border rounded-md"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md">
          {blogId ? "Update Blog" : "Create Blog"}
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
