import { Inter, Space_Grotesk } from 'next/font/google';
import { Header } from '../components/ui/Header';
import { Footer } from '../components/sections/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web3 Carnival',
  description: 'The premier Web3 event.',
  openGraph: {
    images: [{ url: '/events/web3-signal-after-dark.png', width: 800, height: 800 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/events/web3-signal-after-dark.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className="bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)] selection:text-white flex flex-col min-h-screen overflow-x-hidden">
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
