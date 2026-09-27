import { Button } from '../ui/Button';

export function GetInvolved() {
  const cards = [
    { id: 'sponsors', title: 'Sponsor', desc: 'Position your brand in front of 5000+ targeted attendees and investors.', cta: 'Become a Sponsor', link: 'https://tally.so/r/nraYpv' },
    { id: 'speakers', title: 'Speak', desc: 'Share your technical insights or strategic vision on the main stage.', cta: 'Apply to Speak', link: 'https://tally.so/r/w8ar2x' },
    { id: 'media', title: 'Media', desc: 'Cover the biggest announcements and interview ecosystem leaders.', cta: 'Media Pass', link: 'https://tally.so/r/mY09gd' },
    { id: 'community', title: 'Community Partner', desc: 'Bring your local DAO or developer community to the carnival.', cta: 'Partner with Us', link: 'https://tally.so/r/mVQNdv' },
    { id: 'volunteer', title: 'Volunteer', desc: 'Go behind the scenes and help make the definitive Web3 event happen.', cta: 'Join the Team', link: 'https://tally.so/r/w2aoZV' },
    { id: 'affiliate', title: 'Affiliate', desc: 'Earn rewards by bringing top talent and attendees to Web3 Carnival.', cta: 'Become an Affiliate', link: 'https://tally.so/r/woezp1' },
    { id: 'demo-night', title: 'Super Demo', desc: 'Pitch your startup to a curated room of 250+ top-tier VCs.', cta: 'Apply to Pitch', link: 'https://tally.so/r/nP1r4b' }
  ];

  return (
    <section className="relative py-s6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-[radial-gradient(ellipse_at_center,_var(--tint-warm)_0%,_transparent_50%)] pointer-events-none z-0"></div>
      <div className="relative z-10 max-w-[var(--maxw)] mx-auto px-6">
        <h2 className="font-display text-h1 mb-s5">Get Involved</h2>
        
        <div className="flex flex-col">
          {cards.map((card, idx) => {
            const num = String(idx + 1).padStart(2, '0');
            return (
              <div 
                key={idx}
                id={card.id}
                className="group flex flex-col md:flex-row md:items-start justify-between py-s3 border-b border-[var(--border)] transition-colors duration-[var(--dur)] cursor-pointer scroll-mt-24"
              >
                <div className="flex gap-4 md:gap-8 items-baseline md:w-1/2">
                  <span className="font-mono text-small text-[var(--text-muted)] group-hover:text-white transition-colors">{num} /</span>
                  <h3 className="font-display text-h3 text-white transition-colors uppercase">
                    {card.title}
                  </h3>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between md:w-1/2 mt-4 md:mt-0 gap-4">
                  <p className="text-body text-[var(--text-muted)] group-hover:text-white transition-colors max-w-sm">
                    {card.desc}
                  </p>
                  <a href={card.link} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full">
                      {card.cta}
                    </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
