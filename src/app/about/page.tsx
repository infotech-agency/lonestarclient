import AboutPage from '../../old_app/pages/AboutPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Lone Star Academy | Data Science Training Institute',
  description:
    ' Learn about Lone Star Academy, a leading training institute since 2013 offering Data Science, Business Analytics, AI, and Digital Marketing courses with placement support.',
    keywords: [
    "About Us"
  ],
  alternates: {
    canonical: 'https://www.lonestaracademy.in/about',
  },
};

export default function Page() {
  return <AboutPage />;
}