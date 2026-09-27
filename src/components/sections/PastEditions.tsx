'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ExternalLink } from 'lucide-react';
import eventsData from '../../data/events.json';
import { Button } from '../ui/Button';

export function PastEditions({ summary = false }: { summary?: boolean }) {
  const [selectedCity, setSelectedCity] = useState<string>('All');
  
  const cities = ['All', ...Array.from(new Set(eventsData.map(e => {
    if (e.City.includes('Bengaluru')) return 'Bengaluru';
    if (e.City.includes('Dubai')) return 'Dubai';
    if (e.City.includes('Singapore')) return 'Singapore';
    if (e.City.includes('Delhi')) return 'Delhi';
    return e.City;
  })))].filter((value, index, self) => self.indexOf(value) === index);

  const displayEvents = summary ? eventsData.slice(0, 4) : eventsData.filter(e => {
    if (selectedCity === 'All') return true;
    return e.City.includes(selectedCity);
  });

  return (
    <section className="relative py-s6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-[radial-gradient(ellipse_at_center,_var(--tint-warm)_0%,_transparent_50%)] pointer-events-none z-0"></div>
      <div className="relative z-10 max-w-[var(--maxw)] mx-auto px-6">
        
        {summary ? (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-s5">
            <div>
              <h2 className="font-display text-h1 mb-s1">Proof of Scale</h2>
              <p className="text-body text-[var(--text-muted)] max-w-xl">
                We've built a global ecosystem across 14 events in 4 countries.
              </p>
            </div>
          </div>
        ) : (
          <div className="mb-s5">
            <h1 className="font-display text-h1 mb-s1">Past Editions</h1>
            <p className="text-body text-[var(--text-muted)] mb-s4 max-w-xl">
              14 events. 4 countries. A truly global footprint.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {cities.map(city => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-4 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors border ${
                    selectedCity === city 
                      ? 'border-white bg-transparent text-white' 
                      : 'border-[var(--border)] bg-transparent text-[var(--text-muted)] hover:text-white hover:border-white'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-s3 gap-y-s5">
          {displayEvents.map((event, idx) => {
            const num = String(idx + 1).padStart(2, '0');
            return (
              <div key={idx} className="group flex flex-col perspective-[1000px] h-full">
                <div className="aspect-[3/4] relative overflow-hidden bg-black/50 mb-s4 transition-all duration-500 will-change-transform group-hover:[transform:translateY(-8px)_scale(1.03)_rotateX(3deg)_rotateY(-2deg)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-0">
                  {event['Photo File'] && (
                    <Image
                      src={`/events/${event['Photo File']}`}
                      alt={event['Event Name']}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 shadow-[inset_0_0_8px_2px_var(--bg-base)] pointer-events-none" />
                </div>
                <div className="flex-grow flex flex-col relative z-10">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display text-h3 leading-tight uppercase line-clamp-2 pr-2">{event['Event Name']}</h3>
                    <span className="font-mono text-small text-[var(--text-muted)] whitespace-nowrap pt-1">[ {num} ]</span>
                  </div>
                  <div className="mt-auto flex flex-col">
                    <p className="font-mono text-[11px] text-[var(--text-muted)] uppercase mb-2 tracking-wider">
                      {event.Date} {event.City ? `// ${event.City}` : ''}
                    </p>
                    
                    {event.Link && (
                      <div className="pt-2">
                        <a href={event.Link} target="_blank" rel="noreferrer" className="inline-flex items-center font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] hover:text-white transition-colors">
                          View Details <ExternalLink className="w-3 h-3 ml-2" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {summary && (
          <div className="text-center pt-s4 mt-s2">
            <Link href="/editions">
              <Button variant="outline">
                View all editions →
              </Button>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
