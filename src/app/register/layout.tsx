import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register | Web3 Carnival',
  description: 'Learn more about Register at Web3 Carnival.',
  openGraph: { title: 'Register | Web3 Carnival', description: 'Learn more about Register at Web3 Carnival.' }
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return children;
}