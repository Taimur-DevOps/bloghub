"use client"

import { blogs, categories } from "@/lib/data";
import { BlogFlex } from "@/components/blog/blog-flex";
import { usePathname } from "next/navigation";


const page = () => {

  const featuredBlog = blogs[4];
  const latestBlogs = blogs.slice(1, 11);
  const trendingBlogs = blogs.slice(2, 6);

  const pathname = usePathname();


  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      {categories.map((category) => {
        const categoryBlogs = blogs
          .filter((blog) => blog.category === category.slug)
          .slice(0, 3);

        if (categoryBlogs.length === 0) return null;

        return (
          <section
            key={category.slug}
            className="animate-section  my-8"
          >
            <BlogFlex blogs={categoryBlogs} />
          </section>
        );
      })}
    </div>
  )
}

export default page