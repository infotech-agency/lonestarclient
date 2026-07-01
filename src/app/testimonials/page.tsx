import TestimonialsPage from '../../old_app/pages/TestimonialsPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials | Lone Star Academy',
  description:" Read real student testimonials and success stories from Lone Star Academy. Discover how our expert training, live projects, and placement support helped learners achieve their career goals.",
  keywords:[
    "Testimonials"
  ],
  alternates: {
    canonical: 'https://www.lonestaracademy.in/testimonials',
  },
};

export default function Page() {
  return <TestimonialsPage />;
}