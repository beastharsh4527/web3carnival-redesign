import { GetInvolved } from '@/components/sections/GetInvolved';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Involved | Web3 Carnival',
  description: 'Learn more about Get Involved at Web3 Carnival.',
  openGraph: { title: 'Get Involved | Web3 Carnival', description: 'Learn more about Get Involved at Web3 Carnival.' }
};

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen pt-10 pb-20">
      <div className="max-w-[var(--maxw)] mx-auto px-6 mb-8 text-center">
        <h1 className="font-display text-h1 mb-4">Get Involved</h1>
        <p className="text-h3 text-[var(--text-muted)] max-w-2xl mx-auto">
          Whether you're looking to sponsor, speak, volunteer, or partner with us, find all the ways you can contribute to the Web3 Carnival.
        </p>
      </div>
      <GetInvolved />
    </main>
  );
}

