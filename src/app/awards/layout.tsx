import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Awards | Web3 Carnival',
  description: 'Learn more about Awards at Web3 Carnival.',
  openGraph: { title: 'Awards | Web3 Carnival', description: 'Learn more about Awards at Web3 Carnival.' }
};

export default function AwardsLayout({ children }: { children: React.ReactNode }) {
  return children;
}