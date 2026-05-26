import TestimonialsPage from '../../old_app/pages/TestimonialsPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials | Lone Star Academy',
  alternates: {
    canonical: 'https://www.lonestaracademy.in/testimonials',
  },
};

export default function Page() {
  return <TestimonialsPage />;
}