'use client';

import { Navbar } from './navbar';
import { Footer } from './footer';
import { Container } from '../ui/container';

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Container as="main" className="flex-1 py-8">
        {children}
      </Container>
      <Footer />
    </div>
  );
}