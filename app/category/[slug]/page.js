import { blogs, categories } from '@/lib/data';
import { ClientCategory } from '@/components/category/client-category';

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default function CategoryPage({ params }) {
  const category = categories.find(cat => cat.slug === params.slug);
  const categoryBlogs = blogs.filter(blog => blog.category === params.slug);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="category-content space-y-8">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{category.icon}</span>
        <h1 className="text-4xl font-bold">{category.name}</h1>
      </div>
      
      <ClientCategory blogs={categoryBlogs} />
    </div>
  );
}