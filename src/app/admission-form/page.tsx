import AdmissionPage from '../../old_app/pages/AdmissionPageSingle';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admission Form | Enroll at Lone Star Academy Today',
  description:"Apply online for admission to Lone Star Academy. Enroll in Data Science, Business Analytics, AI, Cloud Computing, and Digital Marketing courses with expert guidance and placement support",
  alternates: {
    canonical: 'https://www.lonestaracademy.in/admission-form',
  },
};

export default function Page() {
  return <AdmissionPage />;
}