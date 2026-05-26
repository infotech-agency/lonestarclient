import AdmissionPage from '../../old_app/pages/AdmissionPageSingle';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admission Form | Lone Star Academy',
  alternates: {
    canonical: 'https://www.lonestaracademy.in/admission-form',
  },
};

export default function Page() {
  return <AdmissionPage />;
}