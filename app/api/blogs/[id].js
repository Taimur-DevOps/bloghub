import dbConnect from '@/lib/dbConnect';
import Blog from '@/models/Blog';

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const blog = await Blog.findById(id);
        if (!blog) {
          return res.status(404).json({ success: false, message: 'Blog not found' });
        }
        res.status(200).json({ success: true, data: blog });
      } catch (error) {
        res.status(400).json({ success: false, message: 'Invalid blog ID' });
      }
      break;

    case 'PUT':
      try {
        const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!updatedBlog) {
          return res.status(404).json({ success: false, message: 'Blog not found' });
        }
        res.status(200).json({ success: true, data: updatedBlog });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    case 'DELETE':
      try {
        const deletedBlog = await Blog.findByIdAndDelete(id);
        if (!deletedBlog) {
          return res.status(404).json({ success: false, message: 'Blog not found' });
        }
        res.status(200).json({ success: true, message: 'Blog deleted successfully' });
      } catch (error) {
        res.status(400).json({ success: false, message: 'Invalid blog ID' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).json({ success: false, message: `Method ${method} Not Allowed` });
  }
}
