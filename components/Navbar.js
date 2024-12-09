'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { categories } from '@/lib/data';
import { Button } from '../ui/button';
import { Container } from '../ui/container';

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

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
          
          {/* Desktop Menu */}
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

          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="block md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary ${
                    pathname === `/category/${category.slug}` ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
