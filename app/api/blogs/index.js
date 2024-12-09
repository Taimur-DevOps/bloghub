import dbConnect from '@/lib/dbConnect';
import Blog from '@/models/Blog';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const blogs = await Blog.find();
        res.status(200).json({ success: true, data: blogs });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
      
    case 'POST':
      try {
        const blog = new Blog(req.body);
        await blog.save();
        res.status(201).json({ success: true, data: blog });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
      
    default:
      res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
