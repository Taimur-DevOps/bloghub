import { blogs } from '@/lib/data';
import { ClientBlogPost } from '@/components/blog/client-blog-post';

export function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

export default function BlogPost({ params }) {
  const blog = blogs.find(b => b.id === parseInt(params.id));

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <ClientBlogPost blog={blog} />
  );
}