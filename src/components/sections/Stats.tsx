import statsData from '../../data/stats.json';

export function Stats() {
  return (
    <section className="relative py-s6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-[radial-gradient(ellipse_at_center,_var(--tint-warm)_0%,_transparent_50%)] pointer-events-none z-0"></div>
      <div className="relative z-10 max-w-[var(--maxw)] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-s4">
          {statsData.map((stat, idx) => (
            <div key={idx} className="flex flex-col border-l border-[var(--border)] pl-6">
              <span className="font-display text-[4rem] sm:text-[6rem] md:text-[8rem] text-white leading-none mb-4 tracking-tighter">
                {stat.Number}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                {stat.Label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
