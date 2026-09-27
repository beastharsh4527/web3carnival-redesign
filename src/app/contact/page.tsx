import { Contact } from '@/components/sections/Contact';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Web3 Carnival',
  description: 'Learn more about Contact at Web3 Carnival.',
  openGraph: { title: 'Contact | Web3 Carnival', description: 'Learn more about Contact at Web3 Carnival.' }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-10 pb-20">
      <div className="max-w-[var(--maxw)] mx-auto px-6 mb-8 text-center">
        <h1 className="font-display text-h1 mb-4">Contact Us</h1>
        <p className="text-h3 text-[var(--text-muted)] max-w-2xl mx-auto">
          Have questions? We're here to help. Reach out to our team.
        </p>
      </div>
      <Contact />
    </main>
  );
}

