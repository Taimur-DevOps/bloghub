import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const EditBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        const response = await fetch(`/api/blogs/${id}`);
        const data = await response.json();
        if (data.success) {
          setTitle(data.data.title);
          setContent(data.data.content);
        }
      };
      fetchBlog();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    const data = await response.json();
    if (data.success) {
      router.push('/dashboard');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border border-gray-300 p-2 w-full"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
