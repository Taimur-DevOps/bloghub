'use client';

import Link from 'next/link';
import { categories } from '@/lib/data';

export function TopicsList() {
  return (
    <div className="space-y-4">
      <h3 className="font-bold">Discover more topics</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            className="px-4 py-2 rounded-full border hover:bg-muted transition-colors text-sm"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}