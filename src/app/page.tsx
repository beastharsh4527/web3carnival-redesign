import { Hero } from '../components/sections/Hero';
import { Stats } from '../components/sections/Stats';
import { ImageBand } from '../components/sections/ImageBand';
import { About } from '../components/sections/About';
import { Tracks } from '../components/sections/Tracks';
import { Speakers } from '../components/sections/Speakers';
import { PastEditions } from '../components/sections/PastEditions';
import { WhoAttends } from '../components/sections/WhoAttends';
import { Sponsors } from '../components/sections/Sponsors';
import { GetInvolved } from '../components/sections/GetInvolved';
import { Contact } from '../components/sections/Contact';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Web3 Carnival',
  description: 'Learn more about Home at Web3 Carnival.',
  openGraph: { title: 'Home | Web3 Carnival', description: 'Learn more about Home at Web3 Carnival.' }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Hero />
      <Stats />
      <ImageBand />
      <About />
      <Tracks />
      <Speakers summary={true} />
      <PastEditions summary={true} />
      <WhoAttends />
      <Sponsors summary={true} />
      <GetInvolved />
      <Contact />
    </main>
  );
}

