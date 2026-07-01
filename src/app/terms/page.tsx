import TermsAndConditions from '../../old_app/pages/TermsPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Lone Star Academy Official Policies',
  description:"Read Lone Star Academy's Terms & Conditions to understand the rules, policies, website usage, admissions, payments, and user responsibilities.",
  keywords:[
    "Terms"
  ],
  alternates: {
    canonical: 'https://www.lonestaracademy.in/terms',
  },
};

export default function Page() {
  return <TermsAndConditions />;
}