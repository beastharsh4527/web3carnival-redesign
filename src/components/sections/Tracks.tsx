import { ArrowRight } from 'lucide-react';
import tracksData from '../../data/tracks.json';

export function Tracks() {
  return (
    <section className="relative py-s6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-[radial-gradient(ellipse_at_center,_var(--tint-cool)_0%,_transparent_50%)] pointer-events-none z-0"></div>
      <div className="relative z-10 max-w-[var(--maxw)] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-s5 gap-6">
          <h2 className="font-display text-h1">Tracks</h2>
          <p className="text-body text-[var(--text-muted)] max-w-lg md:text-right">
            Our 2023 flagship event ran Dec 4-10 at Palm Meadows Resort, Bangalore as a 7-day format, featuring one conference theme per day matching these 7 core tracks.
          </p>
        </div>
        
        <div className="flex flex-col">
          {tracksData.map((track, idx) => {
            const num = String(idx + 1).padStart(2, '0');
            return (
              <div 
                key={idx} 
                className="group flex flex-col md:flex-row md:items-center justify-between py-s4 md:py-s5 border-b border-[var(--border)] transition-colors duration-[var(--dur)] cursor-pointer px-4"
              >
                <div className="flex gap-4 md:gap-8 items-center md:w-1/2 pr-4">
                  <span className="font-mono text-small text-[var(--text-muted)] group-hover:text-white transition-colors w-10 shrink-0">{num} /</span>
                  <h3 className="font-display text-h3 text-white transition-colors">
                    {track.Track}
                  </h3>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between md:w-1/2 mt-4 md:mt-0 gap-4 md:pl-8">
                  <p className="text-body text-[var(--text-muted)] group-hover:text-white transition-colors max-w-sm">
                    {track.Description}
                  </p>
                  <ArrowRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-white transition-colors hidden md:block shrink-0" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
