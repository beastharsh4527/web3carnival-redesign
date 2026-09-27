import { Button } from '../ui/Button';
import eventsData from '../../data/events.json';
import { HeroSpatialWrapper } from '../ui/HeroSpatialWrapper';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative pt-s7 pb-s6 min-h-[90vh] flex items-center">
      <div className="absolute top-1/2 left-[-20%] -translate-y-1/2 w-[120vw] h-[150vh] bg-[radial-gradient(ellipse_at_center,_var(--tint-warm)_0%,_transparent_60%)] opacity-40 pointer-events-none z-0"></div>
      
      {/* SPATIAL BACKGROUND - Confined to right 40% on md, full screen on xl */}
      <div className="absolute inset-y-0 right-0 z-0 hidden md:block md:w-[40%] xl:w-full xl:left-0">
        <HeroSpatialWrapper />
      </div>
      
      {/* NEAR PLANE: Content */}
      <div className="relative z-30 max-w-[var(--maxw)] mx-auto px-6 w-full h-full flex flex-col justify-center pointer-events-none">
        
        {/* LEFT COLUMN: 60% (md), 40% (xl) */}
        <div className="w-full md:w-[60%] xl:w-[40%] flex flex-col justify-center text-left pointer-events-auto md:pr-8 xl:pr-12">
          <p className="text-[var(--text-muted)] font-mono text-[12px] uppercase tracking-wider mb-s3">
            [ The proof is in the scale ]
          </p>
          <h1 className="text-hero font-display text-[var(--text)] mb-s5 leading-[0.85] uppercase tracking-tight drop-shadow-2xl -ml-1">
            Web3 <br/>
            Carnival
          </h1>
          <p className="text-[1.25rem] sm:text-[1.5rem] text-[var(--text)] max-w-xl mb-s6 leading-snug drop-shadow-md">
            World's Premier Blockchain & Crypto Event.<br />
            Join the definitive ecosystem shaping the decentralized future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-s3 mb-s7">
            <Button variant="primary" size="lg" href="/register">
              Register now
            </Button>
            <Button variant="secondary" size="lg" href="/why-web3-carnival">
              Explore ecosystem
            </Button>
          </div>

          {/* MOBILE ONLY POSTER */}
          <div className="w-full relative aspect-[3/4] mb-s7 md:hidden border border-[var(--border)] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/events/gala-dinner-ton.avif"
              alt="Gala Dinner Poster"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 0vw"
              priority
            />
          </div>

          {/* Archive Index moved below buttons in the left column */}
          <div className="flex flex-col border-t border-[var(--border)] pt-s5">
            <div className="font-mono text-[13px] uppercase tracking-widest text-[var(--text-muted)] mb-s4">
              Archive Index // Past Editions
            </div>
            <div className="flex flex-col gap-4">
              {eventsData.slice(0, 14).map((e, idx) => {
                const num = String(14 - idx).padStart(2, '0');
                return (
                  <div key={idx} className="flex justify-between items-baseline font-mono text-[13px] uppercase tracking-wider group hover:text-[var(--text)] transition-colors cursor-default">
                    <span className="text-[var(--text-muted)] group-hover:text-[var(--text)] truncate pr-4">
                      <span className="opacity-50 mr-3">[{num}]</span>
                      {e['Event Name']}
                    </span>
                    <span className="text-[var(--text-muted)] shrink-0 opacity-50 group-hover:opacity-100">{e.Date.split(',')[0]}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
