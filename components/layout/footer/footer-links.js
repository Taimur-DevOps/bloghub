'use client';

import Link from 'next/link';
import { categories } from '@/lib/data';

// Footer navigation links component
export function FooterLinks() {
  const links = {
    Categories: categories.map(cat => ({
      label: cat.name,
      href: `/category/${cat.slug}`
    })),
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press Kit', href: '/press' },
    ],
    Resources: [
      { label: 'Help Center', href: '/help' },
      { label: 'Writing Guidelines', href: '/guidelines' },
      { label: 'Style Guide', href: '/style-guide' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {Object.entries(links).map(([title, items]) => (
        <div key={title}>
          <h3 className="font-semibold mb-4">{title}</h3>
          <ul className="space-y-2">
            {items.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}