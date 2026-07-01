import PrivacyPolicy from '../../old_app/pages/PrivacyPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Lone Star Academy Data Protection',
  description:"Read Lone Star Academy's Privacy Policy to learn how we collect, use, protect, and manage your personal information when you use our website and services.",
  keywords:[
    "Privacy"
  ],
  alternates: {
    canonical: 'https://www.lonestaracademy.in/privacy',
  },
};

export default function Page() {
  return <PrivacyPolicy />;
}