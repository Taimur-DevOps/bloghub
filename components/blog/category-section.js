'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { categories, blogs } from '@/lib/data';
import { BlogGrid } from './blog-grid';
import { Button } from '@/components/ui/button';

export function CategorySection() {
  return (
    <>
      {categories.map((category) => {
        const categoryBlogs = blogs
          .filter(blog => blog.category === category.slug)
          .slice(0, 3);

        if (categoryBlogs.length === 0) return null;
        
        return (
          <section key={category.slug} className="space-y-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="text-2xl font-bold">{category.name}</h2>
              </div>
              <Link href={`/category/${category.slug}`}>
                <Button variant="ghost" className="group">
                  More in {category.name}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <BlogGrid blogs={categoryBlogs} />
          </section>
        );
      })}
    </>
  );
}