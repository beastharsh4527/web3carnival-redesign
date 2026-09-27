import { Sponsors } from '@/components/sections/Sponsors';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsors | Web3 Carnival',
  description: 'Learn more about Sponsors at Web3 Carnival.',
  openGraph: { title: 'Sponsors | Web3 Carnival', description: 'Learn more about Sponsors at Web3 Carnival.' }
};

export default function SponsorsPage() {
  return (
    <main className="min-h-screen pt-10 pb-20">
      <Sponsors summary={false} />
    </main>
  );
}

