'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import partnersData from '../../data/partners.json';
import { Button } from '../ui/Button';

export function Sponsors({ summary = false }: { summary?: boolean }) {
  const tiers = [
    { title: 'Past Sponsors', key: 'sponsor', data: partnersData.sponsor },
    { title: 'VCs & Investors', key: 'vc', data: partnersData.vc },
    { title: 'Media Partners', key: 'media', data: partnersData.media },
    { title: 'Community Partners', key: 'community', data: partnersData.community },
    { title: 'Crypto Payment', key: 'payment', data: partnersData.payment },
    { title: 'Ticketing', key: 'ticketing', data: partnersData.ticketing }
  ];

  const displayTiers = summary ? tiers.slice(0, 1) : tiers; // Only show top tier in summary

  const TierGroup = ({ title, items, forceShowAll, hideButton }: { title: string, items: string[], forceShowAll: boolean, hideButton: boolean }) => {
    const [showAll, setShowAll] = useState(false);
    if (!items || items.length === 0) return null;
    
    // In summary mode or if forceShowAll is false, limit to 12. Otherwise limit to 12 unless showAll clicked
    const displayItems = (showAll || forceShowAll) ? items : items.slice(0, 12);
    
    return (
      <div className="mb-s5">
        <h3 className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-s3 text-left">
          [ {title} ]
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-0 border-t border-l border-[var(--border)] mb-s3">
          {displayItems.map((fileName, idx) => (
            <div key={idx} className="aspect-video relative border-b border-r border-[var(--border)] overflow-hidden group flex items-center justify-center p-4">
              <Image 
                src={`/partners/${fileName}`} 
                alt={`${title} logo`}
                width={200}
                height={100}
                className="w-full h-full object-contain p-4 opacity-70 group-hover:opacity-100 transition-all duration-[var(--dur)]"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 25vw, 16vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {items.length > 12 && !showAll && !forceShowAll && !hideButton && (
          <div className="text-left">
            <Button variant="outline" size="sm" onClick={() => setShowAll(true)}>
              Show all {items.length}
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="relative py-s6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-[radial-gradient(ellipse_at_center,_var(--tint-warm)_0%,_transparent_50%)] pointer-events-none z-0"></div>
      <div className="relative z-10 max-w-[var(--maxw)] mx-auto px-6">
        <h2 className="font-display text-h1 mb-s1 text-left">Trusted by the Ecosystem</h2>
        <p className="text-body text-[var(--text-muted)] mb-s5 text-left max-w-2xl">
          Over 750 global partners have joined Web3 Carnival to accelerate the decentralized future.
        </p>

        {displayTiers.map((tier) => (
          <TierGroup key={tier.key} title={tier.title} items={tier.data} forceShowAll={summary ? false : false} hideButton={summary} />
        ))}

        {summary && (
          <div className="text-center pt-s4 mt-s2">
            <Link href="/sponsors">
              <Button variant="outline">
                View all sponsors and partners →
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
