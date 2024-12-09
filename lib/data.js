// Helper function to generate Unsplash image URLs
const getUnsplashImage = (category, index) => {
  const imageIds = {
    tech: ['qWwpHwip31M', 'iar-afB0QQw', 'XJXWbfSo2f0', 'FO7JIlwjOtU', 'npxXWgQ33ZQ'],
    sports: ['HOtPD7Z_74s', 'DKQr0P3DyMY', 'tq-X9FtFnqY', 'tq-X9FtFnqY', 'tq-X9FtFnqY'],
    health: ['NTyBbu66_SI', 'L8tWZT4CcVQ', 'sMQiL_2v4vs', 'sMQiL_2v4vs', 'sMQiL_2v4vs'],
    education: ['Nwl7dtZLmlc', 'YX9pYhPvIEc', 'TVQFzPPRrIk', 'TVQFzPPRrIk', 'TVQFzPPRrIk'],
    business: ['sYffw0LNr7s', 'VBLHICVh-lI', '5QgIuuBxKwM', '5QgIuuBxKwM', '5QgIuuBxKwM']
  };
  
  const id = imageIds[category][index % imageIds[category].length];
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80`;
};

export const categories = [
  { slug: 'tech', name: 'Tech & Telecom', icon: '💻' },
  { slug: 'sports', name: 'Sports', icon: '⚽' },
  { slug: 'health', name: 'Health', icon: '🏥' },
  { slug: 'education', name: 'Education', icon: '📚' },
  { slug: 'business', name: 'Business', icon: '💼' }
];

// Generate 24 blog posts per category
export const blogs = [
  // Tech blogs
  ...Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    title: `Why New York’s “Canners” Think Those Recyclables Should Be Worth More Than 5 Cents a Pop ${i + 1}`,
    description: 'Exploring how artificial intelligence and new technologies are shaping our future.',
    category: 'tech',
     image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '2024-03-20',
    author: 'John Doe',
    readTime: '5 min read',
    content: "Technology is transforming our world in unprecedented ways, reshaping industries, societies, and the way we live. From the rise of artificial intelligence (AI) to the advancement of renewable energy technologies, the impact of innovation is felt across every sector. The rapid pace of technological advancements has not only changed how we work, but it has also fundamentally altered our daily routines, expectations, and even how we think about the future."
  })),
  // Sports blogs
  ...Array.from({ length: 24 }, (_, i) => ({
    id: i + 25,
    title: `Sports Highlights ${i + 1}`,
    description: 'Latest updates and analysis from the world of sports.',
    category: 'sports',
    image: 'https://images.pexels.com/photos/564094/pexels-photo-564094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '2024-03-19',
    author: 'Jane Smith',
    readTime: '4 min read',
    content: 'The world of sports continues to evolve and amaze...'
  })),
  // Health blogs
  ...Array.from({ length: 24 }, (_, i) => ({
    id: i + 49,
    title: `Why New York’s “Canners” Think Those Recyclables Should Be Worth More Than 5 Cents a Pop ${i + 1}`,
    description: 'Tips and insights for maintaining a healthy lifestyle.',
    category: 'health',
    image: 'https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '2024-03-18',
    author: 'Dr. Sarah Johnson',
    readTime: '6 min read',
    content: 'Maintaining good health is crucial in today\'s fast-paced world...'
  })),
  // Education blogs
  ...Array.from({ length: 24 }, (_, i) => ({
    id: i + 73,
    title: `Education Insights ${i + 1}`,
    description: 'Exploring modern educational methods and technologies.',
    category: 'education',
    image: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '2024-03-17',
    author: 'Prof. Michael Brown',
    readTime: '7 min read',
    content: 'Education continues to evolve with new technologies and methodologies...'
  })),
  // Business blogs
  ...Array.from({ length: 24 }, (_, i) => ({
    id: i + 97,
    title: `Business Trends ${i + 1}`,
    description: 'Analysis of current business trends and market insights.',
    category: 'business',
    image: 'https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '2024-03-16',
    author: 'Emma Wilson',
    readTime: '5 min read',
    content: 'The business landscape is constantly changing with new opportunities...'
  }))
];