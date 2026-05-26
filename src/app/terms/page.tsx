import TermsAndConditions from '../../old_app/pages/TermsPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Lone Star Academy',
  alternates: {
    canonical: 'https://www.lonestaracademy.in/terms',
  },
};

export default function Page() {
  return <TermsAndConditions />;
}