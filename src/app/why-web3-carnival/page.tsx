import { Button } from '@/components/ui/Button';
import Image from 'next/image';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Web3 Carnival | Web3 Carnival',
  description: 'Learn more about Why Web3 Carnival at Web3 Carnival.',
  openGraph: { title: 'Why Web3 Carnival | Web3 Carnival', description: 'Learn more about Why Web3 Carnival at Web3 Carnival.' }
};

export default function WhyWeb3CarnivalPage() {
  const stats = [
    { value: "5000+", label: "Attendees" },
    { value: "250+", label: "Investors & Accelerators" },
    { value: "1000+", label: "Web3 Developers" },
    { value: "500+", label: "KOLs" },
    { value: "750+", label: "Partners" },
    { value: "1500+", label: "Potential Web3 Startups" }
  ];

  return (
    <main className="min-h-screen relative">
      {/* Proper Hero Section */}
      <section className="relative pt-32 pb-24 border-b border-[var(--border)] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-[radial-gradient(ellipse_at_center,_var(--tint-cool)_0%,_transparent_50%)] pointer-events-none z-0 opacity-40"></div>
        <div className="max-w-[var(--maxw)] mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 text-left">
            <span className="font-mono text-small text-[var(--text-muted)] uppercase tracking-wider mb-4 block">[ ABOUT THE CARNIVAL ]</span>
            <h1 className="font-display text-h1 mb-6">Why Web3 Carnival?</h1>
            <p className="text-[1.25rem] text-[var(--text-muted)] mb-10 max-w-xl leading-snug">
              Web3 Carnival is a groundbreaking Mega tech event across the globe, and amidst all possibilities,
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com/web3carnival" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="md">Host your own Side Event</Button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="relative aspect-[4/3] w-full border border-[var(--border)] bg-black p-2 shadow-2xl">
              <Image src="/events/w3wc-consortium.png" alt="Web3 Carnival Event" fill className="object-cover opacity-90" priority />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[var(--maxw)] mx-auto px-6 text-left relative z-10 py-24">
        {/* Stats Grid */}
        <section className="mb-24 pb-24 border-b border-[var(--border)]">
          <div className="mb-12">
            <span className="font-mono text-small text-[var(--text-muted)] block mb-4">01 /</span>
            <h2 className="font-display text-h3 mb-4 text-white">By the Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-[var(--surface-2)] border border-[var(--border)] radius-global p-4 md:p-8 text-center">
                <div className="font-mono text-h3 text-white mb-2">{stat.value}</div>
                <div className="text-[var(--text-muted)] text-[10px] sm:text-small uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Value Propositions */}
        <section className="mb-24 pb-24 border-b border-[var(--border)]">
          <div className="mb-12">
            <span className="font-mono text-small text-[var(--text-muted)] block mb-4">02 /</span>
            <h2 className="font-display text-h3 mb-4 text-white">Value Proposition</h2>
          </div>
          <div className="space-y-12">
            <div className="pb-8 border-b border-[var(--border)]">
              <h3 className="font-display text-h4 mb-4 text-white">Exponential Reach</h3>
              <p className="text-[var(--text-muted)] text-body leading-relaxed max-w-3xl">
                Join the 5000+ attendees and collaborate with Web3 Carnival to access an extensive engaged audience, propelling your media company's influence and expanding your reach across the dynamic blockchain arena.
              </p>
            </div>
            <div className="pb-8 border-b border-[var(--border)]">
              <h3 className="font-display text-h4 mb-4 text-white">Undeniable Credibility</h3>
              <p className="text-[var(--text-muted)] text-body leading-relaxed max-w-3xl">
                Gain an undeniable boost with top-tier industry leaders by aligning your media company with this major event. This event is your gateway to elevate your credibility as a trusted source of reach, insights, and cutting-edge information.
              </p>
            </div>
            <div className="pb-8 border-b border-[var(--border)]">
              <h3 className="font-display text-h4 mb-4 text-white">Exclusive Coverage</h3>
              <p className="text-[var(--text-muted)] text-body leading-relaxed max-w-3xl">
                Partnering with Web3 Carnival opens doors to a pool of exclusive interviews, behind-the-scenes insights, and captivating content that is sure to create a buzz online.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Block */}
        <section className="text-center bg-[var(--bg-base)] border border-[var(--border)] radius-global p-12 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tint-warm)_0%,_transparent_70%)] pointer-events-none opacity-20"></div>
          
          <h2 className="text-h2 font-display mb-6 relative z-10">Join the Future at Web3 Carnival</h2>
          <p className="text-[var(--text-muted)] mb-10 max-w-2xl mx-auto relative z-10 text-body">
            Gear up to be captivated by the ultimate fusion of the latest technology, culture, and innovation at Web3 Carnival. This event series is your gateway to a world where possibilities are endless.
          </p>
          
          <div className="flex justify-center relative z-10">
            <a href="https://calendly.com/web3carnival" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg">Host your own Side Event</Button>
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}

