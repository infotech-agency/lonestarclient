import ContactPage from '../../old_app/pages/ContactPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Lone Star Academy | Enquire About Our Courses',
  description:"Contact Lone Star Academy for course enquiries, admissions, free career counselling, and training details. Visit our Janakpuri, Delhi centre or call our expert team today.",
  keywords:[
    "Contact Us"
  ],
  alternates: {
    canonical: 'https://www.lonestaracademy.in/contact',
  },
};

export default function Page() {
  return <ContactPage />;
}