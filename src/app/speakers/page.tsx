import { Speakers } from '@/components/sections/Speakers';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Speakers | Web3 Carnival',
  description: 'Learn more about Speakers at Web3 Carnival.',
  openGraph: { title: 'Speakers | Web3 Carnival', description: 'Learn more about Speakers at Web3 Carnival.' }
};

export default function SpeakersPage() {
  return (
    <main className="min-h-screen pt-10 pb-20">
      <Speakers summary={false} />
    </main>
  );
}

