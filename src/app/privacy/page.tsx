import PrivacyPolicy from '../../old_app/pages/PrivacyPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Lone Star Academy',
  alternates: {
    canonical: 'https://www.lonestaracademy.in/privacy',
  },
};

export default function Page() {
  return <PrivacyPolicy />;
}