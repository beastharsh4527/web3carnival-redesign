'use client';
import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Linkedin } from '../uiIcons';
import speakersData from '../../data/speakers.json';
import { Button } from '../ui/Button';

const FEATURED_NAMES = [
  'Kanishka Agiwal',
  'Vinit Sinha',
  'Kunal Kumar',
  'Prashant Kumar',
  'Parth Chaturvedi',
  'Evan Luthra',
  'Hariharan Ramakrishnan',
  'Astha Yadav',
];

export function Speakers({ summary = false }: { summary?: boolean }) {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedTrack, setSelectedTrack] = useState<string>('All');

  const featuredSpeakers = speakersData.filter(s => FEATURED_NAMES.includes(s.Name));
  const remainingSpeakers = speakersData.filter(s => !FEATURED_NAMES.includes(s.Name));

  // Determine Regions
  const regions = useMemo(() => {
    const r = new Set(speakersData.map(s => s.Country).filter(Boolean));
    return ['All', ...Array.from(r)].sort();
  }, []);

  // Determine Tracks (Mocking tracks from roles for now since CSV might not have it)
  const tracks = ['All', 'DeFi', 'Infrastructure', 'Gaming', 'Policy', 'AI'];

  const getMockTrack = (role: string) => {
    const lRole = (role || '').toLowerCase();
    if (lRole.includes('ai') || lRole.includes('data')) return 'AI';
    if (lRole.includes('game') || lRole.includes('play')) return 'Gaming';
    if (lRole.includes('policy') || lRole.includes('legal') || lRole.includes('gov')) return 'Policy';
    if (lRole.includes('defi') || lRole.includes('finance') || lRole.includes('capital')) return 'DeFi';
    return 'Infrastructure';
  };

  const filteredArchive = speakersData.filter(speaker => {
    const matchRegion = selectedRegion === 'All' || speaker.Country === selectedRegion;
    const matchTrack = selectedTrack === 'All' || getMockTrack(speaker.Role) === selectedTrack;
    return matchRegion && matchTrack;
  });

  const SpeakerCard = ({ speaker, idx }: { speaker: typeof speakersData[0], idx: number }) => {
    const num = String(idx + 1).padStart(2, '0');
    return (
      <div className="group relative flex flex-col perspective-[1000px] h-full">
        <div className="aspect-[4/5] relative w-full mb-s3 overflow-hidden bg-black/50 transition-all duration-500 will-change-transform group-hover:[transform:translateY(-8px)_scale(1.02)_rotateX(2deg)_rotateY(-2deg)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)] shadow-none">
          {speaker['Photo File'] && (
            <Image
              src={`/speakers/${speaker['Photo File']}`}
              alt={speaker.Name}
              width={400}
              height={500}
              className="w-full h-full object-cover object-top"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              loading={summary && idx < 4 ? "eager" : "lazy"}
              priority={summary && idx < 4}
            />
          )}
        </div>
        
        <div className="flex flex-col flex-grow min-h-0">
          <div className="flex justify-between items-start mb-2 gap-2">
            <h3 className="font-display text-h3 leading-tight truncate">{speaker.Name}</h3>
            <span className="font-mono text-small text-[var(--text-muted)] whitespace-nowrap flex-shrink-0">[ {num} ]</span>
          </div>
          <p className="font-mono text-[11px] text-[var(--text-muted)] uppercase mb-4 tracking-wider line-clamp-2">
            {speaker.Role} {speaker.Company ? `// ${speaker.Company}` : ''}
          </p>
          <div className="flex gap-3 mt-auto pt-2 text-[var(--text-muted)] opacity-50 group-hover:opacity-100 transition-opacity">
            {speaker.Twitter && (
              <a href={speaker.Twitter} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            )}
            {speaker.LinkedIn && (
              <a href={speaker.LinkedIn} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-s6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-[radial-gradient(ellipse_at_center,_var(--tint-cool)_0%,_transparent_50%)] pointer-events-none z-0"></div>
      <div className="relative z-10 max-w-[var(--maxw)] mx-auto px-6">
        
        {summary ? (
          <>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-s5">
              <div>
                <h2 className="font-display text-h1 mb-s1">Speakers</h2>
                <p className="text-body text-[var(--text-muted)] max-w-xl">
                  Learn directly from the innovators building the decentralized web.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-s3 gap-y-12 md:gap-y-16 mb-s5">
              {featuredSpeakers.map((speaker, idx) => (
                <SpeakerCard key={idx} speaker={speaker} idx={idx} />
              ))}
            </div>

            <div className="text-center pt-s3">
              <Link href="/speakers">
                <Button variant="outline">
                  View all {speakersData.length} speakers →
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="mb-s5">
              <h1 className="font-display text-h1 mb-s2">Speakers</h1>
              <p className="text-body text-[var(--text-muted)] max-w-2xl mb-s5">
                The innovators, policymakers, and builders shaping the future of Web3.
              </p>

              {/* Filters */}
              <div className="flex flex-col md:flex-row gap-s3 mb-s5">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">Region</label>
                  <select 
                    className="bg-transparent border border-[var(--border)] text-white px-4 py-2 font-mono text-small focus:outline-none focus:border-white"
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                  >
                    {regions.map(r => <option key={r} value={r} className="bg-black text-white">{r}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">Track</label>
                  <select 
                    className="bg-transparent border border-[var(--border)] text-white px-4 py-2 font-mono text-small focus:outline-none focus:border-white"
                    value={selectedTrack}
                    onChange={(e) => setSelectedTrack(e.target.value)}
                  >
                    {tracks.map(t => <option key={t} value={t} className="bg-black text-white">{t}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-s3 gap-y-12 md:gap-y-16">
              {filteredArchive.map((speaker, idx) => (
                <SpeakerCard key={idx} speaker={speaker} idx={idx} />
              ))}
              {filteredArchive.length === 0 && (
                <div className="col-span-full text-center py-s5 text-[var(--text-muted)]">
                  No speakers found matching those filters.
                </div>
              )}
            </div>
          </>
        )}

      </div>
    </section>
  );
}
