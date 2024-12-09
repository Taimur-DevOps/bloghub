'use client';

import { useEffect, useRef } from 'react';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { blogs } from '@/lib/data';

export function ClientBlogPost({ blog }) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.opacity = '1';
      contentRef.current.style.transform = 'translateY(0)';
    }
  }, []);

  // Get related articles from the same category
  const relatedArticles = blogs
    .filter(b => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-block mb-8">
          <Button variant="ghost" className="group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <header className="blog-header mb-8 opacity-0 translate-y-4 animate-fade-in">
              <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {blog.category}
                </span>
                <div className="flex items-center whitespace-nowrap">
                  <Calendar className="mr-1 h-4 w-4" />
                  {blog.date}
                </div>
                {/* <div className="flex items-center whitespace-nowrap">
                  <Clock className="mr-1 h-4 w-4" />
                  {blog.readTime}
                </div> */}
                <div className='whitespace-nowrap' >By: {blog.author}</div>
              </div>
            </header>

            <div 
              ref={contentRef} 
              className="blog-content opacity-0 translate-y-4 transition-all duration-700 ease-out"
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {blog.content}
                </p>
              </div>
            </div>
          </article>

          {/* Related Articles Sidebar */}
          <aside className="space-y-8">
            <div className="sticky top-24 bg-card rounded-lg p-6 border">
              <h2 className="text-xl font-bold mb-6">Related Articles</h2>
              <div className="space-y-6">
                {relatedArticles.map((article) => (
                  <Link 
                    key={article.id} 
                    href={`/blog/${article.id}`}
                    className="group block"
                  >
                    <div className="aspect-video rounded-md overflow-hidden mb-3">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {article.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}