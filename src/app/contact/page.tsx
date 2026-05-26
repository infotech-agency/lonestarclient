import ContactPage from '../../old_app/pages/ContactPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Lone Star Academy',
  alternates: {
    canonical: 'https://www.lonestaracademy.in/contact',
  },
};

export default function Page() {
  return <ContactPage />;
}