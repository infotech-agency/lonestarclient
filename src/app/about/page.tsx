import AboutPage from '../../old_app/pages/AboutPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Lone Star Academy',
  alternates: {
    canonical: 'https://www.lonestaracademy.in/about',
  },
};

export default function Page() {
  return <AboutPage />;
}