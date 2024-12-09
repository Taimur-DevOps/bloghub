// import './globals.css';
// import { Poppins, Inter } from 'next/font/google';
// import { ThemeProvider } from '@/components/theme-provider';
// import { Layout } from '@/components/layout';

// // Configure the primary font (Poppins)
// const poppins = Poppins({
//   weight: ['400', '500', '600', '700'],
//   subsets: ['latin'],
//   variable: '--font-poppins',
//   display: 'swap',
// });

// // Configure the secondary font (Inter) for better readability in body text
// const inter = Inter({
//   weight: ['400', '500'],
//   subsets: ['latin'],
//   variable: '--font-inter',
//   display: 'swap',
// });

// export const metadata = {
//   title: 'Dynamic Blog',
//   description: 'A modern blog platform',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body 
//         className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
//         suppressHydrationWarning
//       >
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <Layout>{children}</Layout>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }