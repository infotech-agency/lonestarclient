import TeamPage from '../../old_app/pages/TeamPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Placement Support | Lone Star Academy Career Assistance',
  description:"Explore Lone Star Academy's placement support, hiring partners, resume building, mock interviews, job referrals, and successful student placements across top companies.",
  keywords:[
    "Our Placement"
  ],
  alternates: {
    canonical: 'https://www.lonestaracademy.in/our-placement',
  },
};

export default function Page() {
  return <TeamPage />;
}