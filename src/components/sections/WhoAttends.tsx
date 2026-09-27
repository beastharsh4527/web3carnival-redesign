import Image from 'next/image';
import audienceData from '../../data/audience.json';

export function WhoAttends() {
  return (
    <section className="relative py-s6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-[radial-gradient(ellipse_at_center,_var(--tint-warm)_0%,_transparent_50%)] pointer-events-none z-0"></div>
      <div className="relative z-10 max-w-[var(--maxw)] mx-auto px-6">
        <h2 className="font-display text-h1 mb-s5">Who Attends</h2>
        
        <div className="grid grid-cols-1">
          {audienceData.map((segment, idx) => {
            const num = String(idx + 1).padStart(2, '0');
            return (
              <div 
                key={idx} 
                className="group flex flex-col md:flex-row md:items-start justify-between py-s3 border-b border-[var(--border)] transition-colors duration-[var(--dur)] cursor-pointer"
              >
                <div className="flex gap-4 md:gap-8 items-start md:w-1/2">
                  <span className="font-mono text-small text-[var(--text-muted)] group-hover:text-white transition-colors mt-1">{num} /</span>
                  <h3 className="font-display text-h2 text-white transition-colors uppercase leading-none">
                    {segment.Segment}
                  </h3>
                </div>
                <div className="flex mt-4 md:mt-0 md:w-1/2 md:justify-end md:items-start">
                  <p className="text-body text-[var(--text-muted)] group-hover:text-white transition-colors max-w-sm text-left md:text-right">
                    {segment.Description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
