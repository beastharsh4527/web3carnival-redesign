import { Button } from '@/components/ui/Button';
import Image from 'next/image';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo Night | Web3 Carnival',
  description: 'Learn more about Demo Night at Web3 Carnival.',
  openGraph: { title: 'Demo Night | Web3 Carnival', description: 'Learn more about Demo Night at Web3 Carnival.' }
};

export default function DemoNightPage() {
  const vcLogos = [
    '/partners/vc-1.jpg',
    '/partners/vc-2.png',
    '/partners/vc-3.jpg',
    '/partners/vc-4.png',
    '/partners/vc-5.png',
    '/partners/vc-6.jpeg',
    '/partners/vc-bl.jpeg',
    '/partners/vc-brinc.png',
    '/partners/vc-gr.png',
    '/partners/vc-logo8.jpg',
    '/partners/vc-m1.jpeg',
    '/partners/vc-p1.jpeg',
  ];

  return (
    <main className="min-h-screen relative">
      
      {/* Proper Hero Section */}
      <section className="relative pt-32 pb-24 border-b border-[var(--border)] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-[radial-gradient(ellipse_at_center,_var(--tint-cool)_0%,_transparent_50%)] pointer-events-none z-0"></div>
        <div className="max-w-[var(--maxw)] mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 text-left">
            <span className="font-mono text-small text-[var(--text-muted)] uppercase tracking-wider mb-4 block">[ SUPER DEMO ]</span>
            <h1 className="font-display text-h1 mb-6">Introducing Web3 Carnival Demo Night</h1>
            <p className="text-[1.25rem] text-[var(--text-muted)] mb-10 max-w-xl leading-snug">
              An extraordinary event that brings together visionary startups and enthusiastic investors, all under one roof with one agenda: To push through the limits of the Web3 arena.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://tally.so/r/nP1r4b" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="md">Web3 Startup</Button>
              </a>
              <a href="https://tally.so/r/n994xY" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="md">Investor</Button>
              </a>
              <a href="https://tally.so/r/wkezgM" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="md">Incubators & Accelerators</Button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="relative aspect-[4/3] w-full border border-[var(--border)] bg-black p-2 shadow-2xl">
              <Image src="/events/pitch-fest.png" alt="Demo Night Event" fill className="object-cover opacity-90" priority />
            </div>
          </div>
        </div>
      </section>
      
      <div className="max-w-[var(--maxw)] mx-auto px-6 text-left relative z-10 py-24">
        
        {/* What to Expect & Why Fundraise */}
        <section className="grid md:grid-cols-2 gap-12 mb-24 pb-24 border-b border-[var(--border)]">
          <div>
            <span className="font-mono text-small text-[var(--text-muted)] block mb-4">01 /</span>
            <h2 className="font-display text-h3 mb-4 text-white">What to Expect?</h2>
            <p className="text-[var(--text-muted)] text-body leading-relaxed">
              Get ready to be amazed as the brightest minds in the Web3 space showcase their cutting-edge innovations. Demo Night is your chance to get an exclusive first look at the technologies and solutions that are shaping the future of industries.
            </p>
          </div>
          <div>
            <span className="font-mono text-small text-[var(--text-muted)] block mb-4">02 /</span>
            <h2 className="font-display text-h3 mb-4 text-white">Why Fundraise Here?</h2>
            <p className="text-[var(--text-muted)] text-body leading-relaxed">
              Experience the electric atmosphere as passionate founders present their ideas and seek the support they need to transform industries. Be part of the momentum driving Web3 innovation forward.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="mb-24 pb-24 border-b border-[var(--border)]">
          <div className="mb-12">
            <span className="font-mono text-small text-[var(--text-muted)] block mb-4 text-center">03 /</span>
            <h2 className="font-display text-h3 text-white text-center">How it works?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--surface-2)] border border-[var(--border)] radius-global p-8 text-center">
              <div className="font-mono text-h4 text-[var(--text)] mb-4">1</div>
              <h3 className="font-display text-h4 mb-3 text-white">Explore</h3>
              <p className="text-[var(--text-muted)] text-small">Engage with startups showcasing their products, technologies, and visions.</p>
            </div>
            <div className="bg-[var(--surface-2)] border border-[var(--border)] radius-global p-8 text-center">
              <div className="font-mono text-h4 text-[var(--text)] mb-4">2</div>
              <h3 className="font-display text-h4 mb-3 text-white">Connect</h3>
              <p className="text-[var(--text-muted)] text-small">Network with founders, exchange insights, and evaluate investment prospects.</p>
            </div>
            <div className="bg-[var(--surface-2)] border border-[var(--border)] radius-global p-8 text-center">
              <div className="font-mono text-h4 text-[var(--text)] mb-4">3</div>
              <h3 className="font-display text-h4 mb-3 text-white">Invest</h3>
              <p className="text-[var(--text-muted)] text-small">Identify the projects that align with your investment goals and contribute to shaping the Web3 landscape.</p>
            </div>
          </div>
        </section>

        {/* Who Should Attend */}
        <section className="mb-24 pb-24 border-b border-[var(--border)]">
          <div className="mb-12">
            <span className="font-mono text-small text-[var(--text-muted)] block mb-4">04 /</span>
            <h2 className="font-display text-h3 text-white">Who Should Attend?</h2>
          </div>
          <div className="space-y-6">
            <div className="pb-6 border-b border-[var(--border)]">
              <h4 className="font-display text-h4 text-white mb-2">Startups</h4>
              <p className="text-[var(--text-muted)] text-body">If you're a Web3 startup looking to gain exposure, attract investors, and make your mark, Demo Night is the platform you need.</p>
            </div>
            <div className="pb-6 border-b border-[var(--border)]">
              <h4 className="font-display text-h4 text-white mb-2">Investors</h4>
              <p className="text-[var(--text-muted)] text-body">Discover the next big thing in Web3 and explore investment opportunities in a diverse range of industries.</p>
            </div>
            <div className="pb-6">
              <h4 className="font-display text-h4 text-white mb-2">Innovators</h4>
              <p className="text-[var(--text-muted)] text-body">Whether you're a developer, entrepreneur, or industry enthusiast, Demo Night is the place to witness the forefront of Web3 innovation.</p>
            </div>
          </div>
        </section>

        {/* Past VCs */}
        <section className="mb-24 pb-24 border-b border-[var(--border)] text-center">
          <div className="mb-12">
            <span className="font-mono text-small text-[var(--text-muted)] block mb-4">05 /</span>
            <h2 className="font-display text-h3 text-white">Past VCs</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {vcLogos.map((logo, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center w-[120px] h-[80px]">
                <div className="relative w-full h-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <Image src={logo} alt={`VC Partner ${idx+1}`} fill className="object-contain" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related events */}
        <section className="mb-24 bg-[var(--surface-2)] border border-[var(--border)] radius-global p-8">
          <span className="font-mono text-small text-[var(--text-muted)] block mb-4">06 /</span>
          <h2 className="font-display text-h4 mb-4 text-white">Past Demo Events</h2>
          <ul className="list-disc pl-5 text-[var(--text-muted)] space-y-2 font-mono text-small">
            <li>Pitch Fest - DeGen Summit '24 (16 Sep 2024, Singapore)</li>
            <li>Demo Night at Web3 Carnival - Brinc (6 Dec 2023, Palm Meadows Bengaluru)</li>
          </ul>
        </section>

        {/* Closing Block */}
        <section className="text-center bg-[var(--bg-base)] border border-[var(--border)] radius-global p-12 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-[radial-gradient(ellipse_at_center,_var(--tint-cool)_0%,_transparent_50%)] pointer-events-none opacity-40 z-0"></div>
          
          <h2 className="text-h3 font-display mb-6 relative z-10">Mark your calendar and be part of an evening that celebrates the power of innovation.</h2>
          <p className="text-[var(--text-muted)] mb-10 max-w-2xl mx-auto relative z-10">
            Don't miss out on this unparalleled opportunity to witness the future unfold before your eyes. Secure your spot at Web3 Carnival's Demo Night now and be part of the next wave of Web3 innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <a href="https://tally.so/r/nP1r4b" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md">Web3 Startup</Button>
            </a>
            <a href="https://tally.so/r/n994xY" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="md">Investor</Button>
            </a>
            <a href="https://tally.so/r/wkezgM" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="md">Incubators & Accelerators</Button>
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}

