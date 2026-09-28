"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  // 01 Cover
  function Slide1() {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-12">
        <Image src="/logos/logo.svg" alt="Web3 Carnival" width={400} height={100} className="mb-8" />
        <h1 className="text-h2 font-display mb-12">World&apos;s Premier Blockchain & Crypto Event</h1>
        <div className="w-full max-w-3xl aspect-[16/9] relative rounded-2xl overflow-hidden border border-[var(--border)]">
          <Image src="/events/pizza.png" alt="Event Poster" fill className="object-cover" />
        </div>
      </div>
    );
  },
  // 02 What is Web3 Carnival
  function Slide2() {
    return (
      <div className="flex flex-col justify-center h-full p-24 max-w-5xl mx-auto">
        <h2 className="text-h3 font-display text-[var(--accent)] mb-8 font-mono tracking-widest uppercase text-sm">02 &mdash; Introduction</h2>
        <h1 className="text-h1 font-display mb-8 leading-tight">What is Web3 Carnival?</h1>
        <p className="text-h3 leading-relaxed text-[var(--text-muted)]">
          Web3 Carnival is the World&apos;s Premier Blockchain & Crypto Event, connecting builders, investors, and communities across major tech hubs. We provide a platform for genuine innovation and scale, stripping away the noise to focus on real-world impact. Join thousands of attendees as we shape the future of decentralized technology together.
        </p>
      </div>
    );
  },
  // 03 The numbers
  function Slide3() {
    const stats = [
      { num: "5000+", label: "Attendees" },
      { num: "250+", label: "Investors & Accelerators" },
      { num: "1000+", label: "Web3 Developers" },
      { num: "500+", label: "KOLs" },
      { num: "750+", label: "Partners" },
      { num: "1500+", label: "Potential Web3 Startups" },
    ];
    return (
      <div className="flex flex-col justify-center h-full p-24">
        <h2 className="text-h3 font-display text-[var(--accent)] mb-16 font-mono tracking-widest uppercase text-sm">03 &mdash; By The Numbers</h2>
        <div className="grid grid-cols-3 gap-y-16 gap-x-12">
          {stats.map((stat, i) => (
            <div key={i} className="border-t border-[var(--border)] pt-8">
              <div className="text-hero font-display text-[var(--text)] leading-none mb-4">{stat.num}</div>
              <div className="text-h3 text-[var(--text-muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  },
  // 04 The seven tracks
  function Slide4() {
    const tracks = [
      "Blockchain & its Infrastructure Con",
      "DAO & Governance Con",
      "Metaverse & GameFi Con",
      "ZK & Security Con",
      "CeFi DeFi & Staking Con",
      "Enterprise Blockchain Con",
      "NFT & Utilities Con",
    ];
    return (
      <div className="flex flex-col justify-center h-full p-24">
        <h2 className="text-h3 font-display text-[var(--accent)] mb-16 font-mono tracking-widest uppercase text-sm">04 &mdash; The Seven Tracks</h2>
        <div className="grid gap-6">
          {tracks.map((track, i) => (
            <div key={i} className="flex items-center gap-8 border-b border-[var(--border)] pb-6 last:border-0">
              <span className="text-h2 font-mono text-[var(--accent-light)] opacity-50">0{i + 1}</span>
              <h3 className="text-h2 font-display">{track}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  },
  // 05 Global footprint
  function Slide5() {
    return (
      <div className="flex flex-col justify-center h-full p-24 text-center items-center">
        <h2 className="text-h3 font-display text-[var(--accent)] mb-16 font-mono tracking-widest uppercase text-sm">05 &mdash; Global Footprint</h2>
        <div className="text-[12rem] font-display font-black leading-none mb-8 text-transparent bg-clip-text bg-[var(--accent-grad)]">
          14
        </div>
        <h3 className="text-h1 font-display mb-12">Editions Worldwide</h3>
        <div className="flex gap-8 justify-center text-h3 text-[var(--text-muted)] border-t border-b border-[var(--border)] py-8 px-16">
          <span>Bengaluru</span>
          <span>&bull;</span>
          <span>Dubai</span>
          <span>&bull;</span>
          <span>Singapore</span>
          <span>&bull;</span>
          <span>Delhi</span>
        </div>
      </div>
    );
  },
  // 06 Past speakers
  function Slide6() {
    const speakers = [
      { name: "Raj Kapoor", role: "Founder, Web3 On The Sea", company: "India Blockchain Alliance", img: "/speakers/raj-kapoor.png" },
      { name: "Prashant Kumar", role: "Head of Generative AI", company: "Accenture Song", img: "/speakers/prashant-kumar.jpeg" },
      { name: "Jong-Chan Chung", role: "Venture Manager", company: "Blockchain Founders Group", img: "/speakers/jong-chan-chung.jpg" },
      { name: "Femina Pulliyil", role: "Blockchain Consultant", company: "Independent", img: "/speakers/femina-pulliyil.jpeg" },
      { name: "John Eggleston", role: "Serial Entrepreneur", company: "Artysan Accelerator", img: "/speakers/john-eggleston.jpeg" },
      { name: "Vinit Sinha", role: "Director - Cybersecurity", company: "Mastercard", img: "/speakers/vinit-sinha.jpeg" },
      { name: "Hariharan R.", role: "Senior Engineering Manager", company: "Ford Credit IT", img: "/speakers/hariharan-ramakrishnan.jpeg" },
      { name: "Zach Marks", role: "Founder & CEO", company: "Jia", img: "/speakers/zach-marks.jpeg" },
    ];
    return (
      <div className="flex flex-col justify-center h-full p-24">
        <h2 className="text-h3 font-display text-[var(--accent)] mb-12 font-mono tracking-widest uppercase text-sm">06 &mdash; Past Speakers</h2>
        <div className="grid grid-cols-4 gap-8">
          {speakers.map((s, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="w-full aspect-square relative rounded-xl overflow-hidden border border-[var(--border)] grayscale hover:grayscale-0 transition-all duration-[var(--dur)] ease-[var(--ease)]">
                <Image src={s.img} alt={s.name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="text-body font-bold">{s.name}</h4>
                <p className="text-small text-[var(--text-muted)] line-clamp-1">{s.role}</p>
                <p className="text-small text-[var(--accent-light)]">{s.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
  // 07 Who attends
  function Slide7() {
    const segments = [
      "Startups",
      "Web3 Enthusiasts",
      "Developers",
      "Investors",
      "Policy Makers",
      "Enterprises",
      "Academia and Institutions",
      "Incubators and Accelerators"
    ];
    return (
      <div className="flex flex-col justify-center h-full p-24">
        <h2 className="text-h3 font-display text-[var(--accent)] mb-16 font-mono tracking-widest uppercase text-sm">07 &mdash; Who Attends</h2>
        <div className="grid grid-cols-2 gap-x-16 gap-y-12">
          {segments.map((seg, i) => (
            <div key={i} className="border-l-4 border-[var(--accent)] pl-8 py-2">
              <h3 className="text-h2 font-display">{seg}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  },
  // 08 Partners
  function Slide8() {
    return (
      <div className="flex flex-col justify-center h-full p-24 text-center">
        <h2 className="text-h3 font-display text-[var(--accent)] mb-12 font-mono tracking-widest uppercase text-sm">08 &mdash; Partners</h2>
        <div className="space-y-12 max-w-5xl mx-auto w-full">
          <div>
            <h4 className="text-small font-mono text-[var(--text-muted)] uppercase mb-6 tracking-widest border-b border-[var(--border)] pb-2 inline-block">Title Sponsors</h4>
            <div className="flex justify-center gap-12 items-center opacity-80 mix-blend-screen h-24">
              <Image src="/partners/sponsor-outdefine.svg" alt="Sponsor" width={200} height={80} className="object-contain max-h-16 w-auto" />
              <Image src="/partners/sponsor-casanft.svg" alt="Sponsor" width={200} height={80} className="object-contain max-h-16 w-auto" />
            </div>
          </div>
          <div>
            <h4 className="text-small font-mono text-[var(--text-muted)] uppercase mb-6 tracking-widest border-b border-[var(--border)] pb-2 inline-block">Media & Ticketing</h4>
            <div className="flex justify-center gap-12 items-center opacity-60 mix-blend-screen h-20 flex-wrap">
              <Image src="/partners/media-cryptonewsz.svg" alt="Partner" width={160} height={60} className="object-contain max-h-12 w-auto" />
              <Image src="/partners/ticketing-explara.svg" alt="Partner" width={160} height={60} className="object-contain max-h-12 w-auto" />
              <Image src="/partners/media-cryptotimes.svg" alt="Partner" width={160} height={60} className="object-contain max-h-12 w-auto" />
              <Image src="/partners/media-incrypted.svg" alt="Partner" width={160} height={60} className="object-contain max-h-12 w-auto" />
            </div>
          </div>
          <div>
            <h4 className="text-small font-mono text-[var(--text-muted)] uppercase mb-6 tracking-widest border-b border-[var(--border)] pb-2 inline-block">VCs & Community</h4>
            <div className="flex justify-center gap-10 items-center opacity-50 mix-blend-screen h-16 flex-wrap">
              <Image src="/partners/vc-outdefine.webp" alt="VC" width={120} height={40} className="object-contain max-h-10 w-auto grayscale" />
              <Image src="/partners/vc-brinc.png" alt="VC" width={120} height={40} className="object-contain max-h-10 w-auto grayscale" />
              <Image src="/partners/community-metakraft.svg" alt="VC" width={120} height={40} className="object-contain max-h-10 w-auto grayscale" />
              <Image src="/partners/community-securedapp.svg" alt="VC" width={120} height={40} className="object-contain max-h-10 w-auto grayscale" />
            </div>
          </div>
        </div>
      </div>
    );
  },
  // 09 Get involved
  function Slide9() {
    const paths = [
      { label: "Sponsor", url: "https://tally.so/r/nraYpv" },
      { label: "Speaker", url: "https://tally.so/r/w8ar2x" },
      { label: "Media", url: "https://tally.so/r/mY09gd" },
      { label: "Community Partner", url: "https://tally.so/r/mVQNdv" },
      { label: "Volunteer", url: "https://tally.so/r/w2aoZV" },
      { label: "Affiliate", url: "https://tally.so/r/woezp1" },
    ];
    return (
      <div className="flex flex-col justify-center h-full p-24">
        <h2 className="text-h3 font-display text-[var(--accent)] mb-16 font-mono tracking-widest uppercase text-sm">09 &mdash; Get Involved</h2>
        <div className="grid grid-cols-2 gap-8 max-w-5xl">
          {paths.map((p, i) => (
            <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="block p-8 border border-[var(--border)] rounded-xl hover:border-[var(--accent)] hover:bg-[var(--tint-cool)] transition-colors">
              <h3 className="text-h3 font-display mb-2">{p.label}</h3>
              <p className="text-small font-mono text-[var(--accent-light)] break-all">{p.url}</p>
            </a>
          ))}
        </div>
      </div>
    );
  },
  // 10 Contact
  function Slide10() {
    const socials = [
      { name: "Twitter/X", url: "https://x.com/web3carnival" },
      { name: "LinkedIn", url: "https://www.linkedin.com/company/web3carnival" },
      { name: "Instagram", url: "https://instagram.com/web3carnival" },
      { name: "Telegram", url: "https://t.me/web3carnival2023" },
      { name: "WhatsApp", url: "https://chat.whatsapp.com/CiSjo3ZtmB71gn9CtTb9J1" },
      { name: "Linktree", url: "https://linktr.ee/web3carnival2023" },
    ];
    return (
      <div className="flex flex-col justify-center items-center h-full p-24 text-center">
        <h2 className="text-h3 font-display text-[var(--accent)] mb-12 font-mono tracking-widest uppercase text-sm">10 &mdash; Contact & Connect</h2>
        <h1 className="text-hero font-display leading-none mb-12">Ready to Join?</h1>
        <a href="https://calendly.com/web3carnival" target="_blank" rel="noopener noreferrer" className="inline-block bg-[var(--accent)] text-white px-12 py-6 rounded-full text-h3 font-bold hover:bg-[var(--accent-light)] transition-colors mb-16 shadow-[0_0_40px_rgba(168,85,247,0.4)]">
          Book a Call
        </a>
        <div className="text-body text-[var(--text-muted)] mb-8">
          contact@threewaystudio.world <br />
          Powered by Threeway Studio
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-small font-mono uppercase tracking-widest text-[var(--accent-light)]">
          {socials.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{s.name}</a>
          ))}
        </div>
      </div>
    );
  }
];

export default function Deck() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        setCurrent((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setCurrent((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @page {
          size: 1920px 1080px landscape;
          margin: 0;
        }

        @media print {
          html, body { margin: 0; padding: 0; background: #0A0A0C; }
          .slide {
            width: 100%;
            height: 100vh;
            page-break-after: always;
            break-after: page;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .slide:last-child { page-break-after: auto; }
          nav, .deck-controls, .pagination { display: none; }
        }
      `}} />
      
      {/* Screen view */}
      <div 
        className="fixed inset-0 z-[100] bg-[var(--bg-base)] text-[var(--text)] overflow-hidden print:hidden"
        onClick={(e) => {
          // allow clicking links
          if ((e.target as HTMLElement).tagName === 'A') return;
          setCurrent((prev) => Math.min(prev + 1, slides.length - 1));
        }}
      >
        <div className="w-full h-full flex flex-col justify-between">
          <div className="flex-grow relative">
            {slides.map((Slide, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 transition-opacity duration-500 ${current === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
              >
                <Slide />
              </div>
            ))}
          </div>
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20 pointer-events-none">
            {slides.map((_, index) => (
              <div 
                key={index}
                className={`w-12 h-1 rounded-full transition-colors duration-300 ${current === index ? 'bg-[var(--accent)]' : 'bg-[var(--border)]'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Print view */}
      <div className="hidden print:block print-slides bg-[var(--bg-base)] text-[var(--text)] absolute inset-0 z-[100]">
        {slides.map((Slide, index) => (
          <div key={index} className="slide w-screen h-screen flex flex-col justify-center relative bg-[var(--bg-base)]">
            <Slide />
          </div>
        ))}
      </div>
    </>
  );
}
