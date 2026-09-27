'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';


export default function AwardsPage() {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const categories = [
    { award: "Oracle Excellence Award", tagline: "Bridging Real-World Data to Blockchain" },
    { award: "Interoperability Pioneer Award", tagline: "Bridging Blockchains Seamlessly" },
    { award: "Metaverse Maestro Award", tagline: "Leading Innovation in Blockchain VR" },
    { award: "Web3 Education Evangelist Award", tagline: "Fostering Global Understanding" },
    { award: "Social Impact Soldier Award", tagline: "Transforming Lives Through Blockchain" },
    { award: "Security Sentinel Award", tagline: "Safeguarding the Decentralized Frontier" },
    { award: "Gaming Guru Award", tagline: "Redefining Fun in Web3" },
    { award: "Community Catalyst Award", tagline: "Fostering Vibrant Web3 Communities" },
    { award: "Layer-2 Luminary Award", tagline: "Elevating Blockchain Efficiency" },
    { award: "Whisperers of Web3 Award", tagline: "Excellence in Web3 Journalism" },
    { award: "UX/UI Unicorn Award", tagline: "Streamlined Web3 Adoption" },
    { award: "Staking Star Award", tagline: "Excellence in Staking Solutions" },
    { award: "Best DWeb Pioneer Award", tagline: "Advancing Decentralized Privacy" },
    { award: "ZKP Zenith Award", tagline: "Innovating Web3 Privacy with ZKPs" },
    { award: "Web3 Wallet Wizard Award", tagline: "Mastering Wallet Versatility" },
    { award: "Collaboration Catalyst Award", tagline: "Transforming Web3 Interaction" },
    { award: "Decentralized Identity Innovator Award", tagline: "Empowering User Privacy" },
    { award: "Frontier Financier Award", tagline: "Leading DeFi Excellence" },
    { award: "Governance Guru Award", tagline: "Empowering DAO Excellence" },
    { award: "DeFi Derivative Dynamo Award", tagline: "Pioneering Innovation" },
    { award: "Yield Farming Phenom Award", tagline: "Innovating Rewards" },
    { award: "P2P Powerhouse Award", tagline: "Upholding Decentralization Ideals" },
    { award: "Web3 Analytics Ace Award", tagline: "Unveiling Insights" }
  ];

  const visibleCategories = showAllCategories ? categories : categories.slice(0, 8);

  const goals = [
    { title: "Global Impact", text: "Showcase projects that have made a positive impact on industries, communities, and society as a whole, setting new standards for Web3 solutions." },
    { title: "Recognition for Efforts", text: "Acknowledge the hard work, dedication, and ingenuity of individuals and teams who have dedicated themselves to advancing the Web3 space." },
    { title: "Amplifying Voices", text: "Offer a stage for visionary speakers to share insights, experiences, and visions that inspire collective action and drive Web3 transformation." },
    { title: "Inspire Future Leaders", text: "Inspire the next generation of Web3 pioneers by highlighting remarkable success stories and breakthroughs that motivate others to drive change." },
    { title: "Community Building", text: "Foster connections and collaborations among participants, creating a vibrant ecosystem that supports growth and innovation in the Web3 space." }
  ];

  return (
    <main className="min-h-screen relative">
      {/* Proper Hero Section */}
      <section className="relative pt-32 pb-24 border-b border-[var(--border)] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-[radial-gradient(ellipse_at_center,_var(--tint-warm)_0%,_transparent_50%)] pointer-events-none z-0 opacity-40"></div>
        <div className="max-w-[var(--maxw)] mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 text-left">
            <span className="font-mono text-small text-[var(--text-muted)] uppercase tracking-wider mb-4 block">[ RECOGNIZING EXCELLENCE ]</span>
            <h1 className="font-display text-h1 mb-6">KOL Awards</h1>
            <p className="text-[1.25rem] text-[var(--text-muted)] mb-10 max-w-xl leading-snug">
              Recognizing the most influential voices and thought leaders in the Web3 ecosystem. The KOL Awards celebrate those who educate, build, and drive the decentralized community forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://tally.so/r/wL7Og1" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="md">Nominate Yourself</Button>
              </a>
              <a href="https://tally.so/r/npyzMb" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="md">Nominate Others</Button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="relative aspect-[4/3] w-full border border-[var(--border)] bg-black p-2 shadow-2xl">
              <Image src="/events/kol-awards-night.png" alt="KOL Awards Event" fill className="object-cover opacity-90" priority />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[var(--maxw)] mx-auto px-6 text-left relative z-10 py-24">
        {/* Categories */}
        <section className="mb-24 pb-24 border-b border-[var(--border)]">
          <div className="mb-12">
            <span className="font-mono text-small text-[var(--text-muted)] block mb-4">01 /</span>
            <h2 className="font-display text-h3 mb-4 text-white">Award Categories</h2>
            <p className="text-[var(--text-muted)] text-body max-w-2xl">
              23 specific categories to recognize excellence across the entire Web3 ecosystem.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {visibleCategories.map((cat, idx) => (
              <div key={idx} className="bg-[var(--surface-2)] border border-[var(--border)] radius-global p-6">
                <h3 className="font-display text-h5 text-white mb-2">{cat.award}</h3>
                <p className="text-[var(--text-muted)] text-small">{cat.tagline}</p>
              </div>
            ))}
          </div>
          {!showAllCategories && (
            <div className="flex justify-center">
              <Button variant="outline" onClick={() => setShowAllCategories(true)}>
                Show all 23 Categories
              </Button>
            </div>
          )}
        </section>

        {/* Awards Process */}
        <section className="mb-24 pb-24 border-b border-[var(--border)]">
          <div className="mb-12">
            <span className="font-mono text-small text-[var(--text-muted)] block mb-4 text-center">02 /</span>
            <h2 className="font-display text-h3 text-white text-center">Awards Process</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8 relative">
            {/* Simple connecting line for desktop */}
            <div className="hidden md:block absolute top-[24px] left-8 right-8 h-px bg-[var(--border)] z-0"></div>
            
            <div className="flex-1 bg-[var(--surface-2)] border border-[var(--border)] radius-global p-8 relative z-10">
              <div className="w-12 h-12 rounded-full bg-[var(--bg-base)] border border-[var(--border)] flex items-center justify-center font-mono text-[var(--text)] mb-6 mx-auto">1</div>
              <h3 className="font-display text-h4 mb-3 text-white text-center">Nomination Carnival</h3>
              <p className="text-[var(--text-muted)] text-small text-center">Nomination fever ignites, stories of excellence flood in, and remarkable achievements come to light. A carnival of nominations unfolds, shortlisting the gems that radiate.</p>
            </div>
            
            <div className="flex-1 bg-[var(--surface-2)] border border-[var(--border)] radius-global p-8 relative z-10">
              <div className="w-12 h-12 rounded-full bg-[var(--bg-base)] border border-[var(--border)] flex items-center justify-center font-mono text-[var(--text)] mb-6 mx-auto">2</div>
              <h3 className="font-display text-h4 mb-3 text-white text-center">Assessment Voyage</h3>
              <p className="text-[var(--text-muted)] text-small text-center">Deep-dive into the world of nominees. Our Prestigious Jury gets started with rigorous evaluation commences, uncovering the profound impact of each contender. Deliberations forge a path to distinguish the exceptional from the extraordinary.</p>
            </div>

            <div className="flex-1 bg-[var(--surface-2)] border border-[var(--border)] radius-global p-8 relative z-10">
              <div className="w-12 h-12 rounded-full bg-[var(--bg-base)] border border-[var(--border)] flex items-center justify-center font-mono text-[var(--text)] mb-6 mx-auto">3</div>
              <h3 className="font-display text-h4 mb-3 text-white text-center">Victory Soiree</h3>
              <p className="text-[var(--text-muted)] text-small text-center">The crescendo arrives. The gala night approaches, a virtual stage of recognition. Envelopes are unsealed, unveiling the victors of magnificence. A grand finale, etching their names in the annals of greatness.</p>
            </div>
          </div>
        </section>

        {/* Awards Goals */}
        <section className="mb-24 pb-24 border-b border-[var(--border)]">
          <div className="mb-12">
            <span className="font-mono text-small text-[var(--text-muted)] block mb-4">03 /</span>
            <h2 className="font-display text-h3 text-white">Awards Goals</h2>
          </div>
          <div className="space-y-6">
            {goals.map((goal, idx) => (
              <div key={idx} className="pb-6 border-b border-[var(--border)]">
                <h4 className="font-display text-h4 text-white mb-2">{goal.title}</h4>
                <p className="text-[var(--text-muted)] text-body">{goal.text}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Related events */}
        <section className="mb-24 bg-[var(--surface-2)] border border-[var(--border)] radius-global p-8">
          <span className="font-mono text-small text-[var(--text-muted)] block mb-4">04 /</span>
          <h2 className="font-display text-h4 mb-4 text-white">Past Editions</h2>
          <ul className="list-disc pl-5 text-[var(--text-muted)] space-y-2 font-mono text-small">
            <li>KOL Awards Night - DeGen Summit (16 Sep 2024, Singapore)</li>
          </ul>
        </section>

      </div>
    </main>
  );
}

