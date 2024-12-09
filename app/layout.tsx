import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Layout } from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dynamic Blog',
  description: 'A modern blog platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}