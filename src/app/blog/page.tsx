import BlogPage from '../../old_app/pages/BlogPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lone Star Academy Blogs | Career, Data Science & Marketing',
  description:" Explore expert blogs on Data Science, AI, Business Analytics, Digital Marketing, career tips, industry trends, and job-ready skills from Lone Star Academy",
  keywords:[
    "Our Blogs"
  ],
  alternates: {
    canonical: 'https://www.lonestaracademy.in/blog',
  },
};

export default function Page() {
  return <BlogPage />;
}