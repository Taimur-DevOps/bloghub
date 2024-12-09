'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { categories } from '@/lib/data';
import { Button } from '../ui/button';
import { Container } from '../ui/container';

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <nav className="sticky top-0 z-50 bg-background border-b">
        <Container>
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold">BlogHub</div>
          </div>
        </Container>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-50 bg-background border-b">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold">
            BlogHub
          </Link>
          
          <div className="hidden md:flex space-x-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary ${
                  pathname === `/category/${category.slug}` ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </Container>
    </nav>
  );
}