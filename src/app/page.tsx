import App from '../old_app/App';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.lonestaracademy.in/',
  },
};

export default function Page() {
  return <App />;
}