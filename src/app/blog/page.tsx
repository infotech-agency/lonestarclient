import BlogPage from '../../old_app/pages/BlogPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Lone Star Academy',
  alternates: {
    canonical: 'https://www.lonestaracademy.in/blog',
  },
};

export default function Page() {
  return <BlogPage />;
}