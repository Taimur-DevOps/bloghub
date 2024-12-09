// "use client";

// import { useEffect } from "react";

// import { ArrowRight } from "lucide-react";
// import { blogs, categories } from "@/lib/data";
// import { FeaturedPost } from "@/components/blog/featured-post";
// import { BlogGrid } from "@/components/blog/blog-grid";
// import { BlogFlex } from "@/components/blog/blog-flex";
// import { Button } from "@/components/ui/button";
// import { TrendingSection } from "@/components/sections/trending";
// import { AdBanner } from "@/components/ads/ad-banner";
// import { NewsletterSection } from "@/components/sections/newsletter";
// import { TopicsList } from "@/components/sections/topics-list";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { useRef } from "react";

// export default function HomePage() {
//   const featuredBlog = blogs[4];
//   const latestBlogs = blogs.slice(1, 11);
//   const trendingBlogs = blogs.slice(2, 6);

//   const pathname = usePathname();
//   const sectionRef = useRef<HTMLElement | null>(null);

//   const handleScroll = () => {
//     sectionRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <main className="space-y-16 pb-16">
//       <section className="animate-section space-y-8">
//         <div className="text-center space-y-4">
//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//             Stay curious.
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Discover stories, thinking, and expertise from writers on any topic.
//           </p>
//           <Button
//             size="lg"
//             className="rounded-full px-8"
//             onClick={handleScroll}
//           >
//             Start reading
//           </Button>
//         </div>
//       </section>

   

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2 space-y-16">
//           <section ref={sectionRef} className="animate-section">
//             <FeaturedPost blog={featuredBlog} />
//           </section>

//           <section className="animate-section">
//         <TrendingSection blogs={trendingBlogs} />
//       </section>

//           <section className="animate-section space-y-8">
//             <div className="flex justify-between items-center">
//               <h2 className="text-2xl font-bold">Latest Stories</h2>
//               <Button variant="ghost" className="group">
//                 See all
//                 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Button>
//             </div>
//             <BlogFlex blogs={latestBlogs} />
//           </section>

//           <AdBanner className="animate-section" />

//           {categories.map((category) => {
//             const categoryBlogs = blogs
//               .filter((blog) => blog.category === category.slug)
//               .slice(0, 3);

//             if (categoryBlogs.length === 0) return null;

//             return (
//               <section
//                 key={category.slug}
//                 className="animate-section space-y-8"
//               >
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center gap-2">
//                     <span className=" text-lg md:text-2xl">
//                       {category.icon}
//                     </span>
//                     <h2 className=" text-lg md:text-2xl font-bold">
//                       {category.name}
//                     </h2>
//                   </div>
//                   <Link
//                     href={`/category/${category.slug}`}
//                     className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary ${
//                       pathname === `/category/${category.slug}`
//                         ? "text-primary"
//                         : "text-muted-foreground"
//                     }`}
//                   >
//                     <Button variant="ghost" className="group whitespace-nowrap">
//                       More stories
//                       <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                     </Button>
//                   </Link>
//                 </div>
//                 <BlogFlex blogs={categoryBlogs} />
//               </section>
//             );
//           })}
//         </div>

//         <div className="space-y-16">
//           <aside className="animate-section sticky top-24 space-y-16">
//             <NewsletterSection />
//             <TopicsList />
//             <AdBanner variant="sidebar" />
//           </aside>
//         </div>
//       </div>
//     </main>
//   );
// }
