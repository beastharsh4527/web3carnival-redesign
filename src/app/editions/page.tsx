import { PastEditions } from '@/components/sections/PastEditions';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editions | Web3 Carnival',
  description: 'Learn more about Editions at Web3 Carnival.',
  openGraph: { title: 'Editions | Web3 Carnival', description: 'Learn more about Editions at Web3 Carnival.' }
};

export default function EditionsPage() {
  return (
    <main className="min-h-screen pt-10 pb-20">
      <PastEditions summary={false} />
    </main>
  );
}

