import TeamPage from '../../old_app/pages/TeamPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Placements | Lone Star Academy',
  alternates: {
    canonical: 'https://www.lonestaracademy.in/our-placement',
  },
};

export default function Page() {
  return <TeamPage />;
}