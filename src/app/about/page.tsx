
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Web3 Carnival',
  description: 'Learn more about About at Web3 Carnival.',
  openGraph: { title: 'About | Web3 Carnival', description: 'Learn more about About at Web3 Carnival.' }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20 pb-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="font-display text-h1 mb-6">About Us</h1>
        <p className="text-body text-[var(--text-muted)] mb-8">
          Web3 Carnival is built by Threeway Studio with a singular mission: to accelerate the adoption of decentralized technologies by connecting the brightest minds in the ecosystem. 
          We believe in fostering an environment where innovation thrives through open dialogue, strategic partnerships, and community-driven initiatives.
        </p>
      </div>
    </main>
  );
}

