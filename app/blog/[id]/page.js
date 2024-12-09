export async function generateStaticParams() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  // Fetch all blog IDs from your API or database
  const response = await fetch(`${API_URL}/api/blogs`);
  const data = await response.json();

  // Ensure you handle errors or empty data gracefully
  if (!data.success) return [];

  return data.data.map((blog) => ({
    id: blog._id,
  }));
}

export default async function BlogPage({ params }) {
  const { id } = params;
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  // Fetch the blog details for the specific ID
  const response = await fetch(`${API_URL}/api/blogs/${id}`);
  const data = await response.json();

  // Handle errors or missing blog
  if (!data.success) {
    return (
      <div className="p-4 text-red-500">
        <h1>Blog not found</h1>
        <p>The blog you're looking for might have been deleted or does not exist.</p>
      </div>
    );
  }

  const blog = data.data;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-6">{blog.description}</p>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full rounded-lg mb-6"
      />
      <div className="prose">
        <p>{blog.content}</p>
      </div>
      <p className="mt-6 text-sm text-gray-500">
        Written by: {blog.author?.firstName} {blog.author?.lastName}
      </p>
      <p className="text-sm text-gray-500">Category: {blog.category}</p>
      <p className="text-sm text-gray-500">Views: {blog.views}</p>
    </div>
  );
}
