'use client';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Button } from './Button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-[var(--maxw)] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="font-display font-bold text-h4 leading-none tracking-tight">
            WEB3<br/>CARNIVAL
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-small font-medium">
          <Link href="/why-web3-carnival" className="text-[var(--text)] hover:text-[var(--accent-light)] transition-colors">
            Why Web3 Carnival
          </Link>
          
          <div className="relative group py-2">
            <Link href="/get-involved" className="flex items-center gap-1 text-[var(--text)] hover:text-[var(--accent-light)] transition-colors">
              Get Involved <ChevronDown className="w-4 h-4 opacity-70" />
            </Link>
            <div className="absolute top-full left-0 mt-2 w-48 bg-[var(--surface-2)] border border-[var(--border)] radius-global p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <a href="/get-involved#media" className="block px-3 py-3 text-[var(--text-muted)] hover:text-[var(--accent-light)] hover:bg-[var(--surface)] radius-global">Media</a>
              <a href="/get-involved#community" className="block px-3 py-3 text-[var(--text-muted)] hover:text-[var(--accent-light)] hover:bg-[var(--surface)] radius-global">Community</a>
              <a href="/get-involved#sponsors" className="block px-3 py-3 text-[var(--text-muted)] hover:text-[var(--accent-light)] hover:bg-[var(--surface)] radius-global">Sponsors</a>
              <a href="/get-involved#speakers" className="block px-3 py-3 text-[var(--text-muted)] hover:text-[var(--accent-light)] hover:bg-[var(--surface)] radius-global">Speakers</a>
              <a href="/get-involved#volunteer" className="block px-3 py-3 text-[var(--text-muted)] hover:text-[var(--accent-light)] hover:bg-[var(--surface)] radius-global">Volunteer</a>
              <a href="/get-involved#affiliate" className="block px-3 py-3 text-[var(--text-muted)] hover:text-[var(--accent-light)] hover:bg-[var(--surface)] radius-global">Affiliate</a>
            </div>
          </div>

          <Link href="/sponsors" className="text-[var(--text)] hover:text-[var(--accent-light)] transition-colors">
            Sponsors
          </Link>
          
          <Link href="/speakers" className="text-[var(--text)] hover:text-[var(--accent-light)] transition-colors">
            Speakers
          </Link>

          <Link href="/demo-night" className="text-[var(--text)] hover:text-[var(--accent-light)] transition-colors">
            Demo Night
          </Link>

          <Link href="/awards" className="text-[var(--text)] hover:text-[var(--accent-light)] transition-colors">
            Awards
          </Link>

          <div className="relative group py-2">
            <span className="cursor-pointer flex items-center gap-1 text-[var(--text)] hover:text-[var(--accent-light)] transition-colors">
              More <ChevronDown className="w-4 h-4 opacity-70" />
            </span>
            <div className="absolute top-full left-0 mt-2 w-48 bg-[var(--surface-2)] border border-[var(--border)] radius-global p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link href="/about" className="block px-3 py-3 text-[var(--text-muted)] hover:text-[var(--accent-light)] hover:bg-[var(--surface)] radius-global">About Us</Link>
              <Link href="/contact" className="block px-3 py-3 text-[var(--text-muted)] hover:text-[var(--accent-light)] hover:bg-[var(--surface)] radius-global">Contact</Link>
              <Link href="/faqs" className="block px-3 py-3 text-[var(--text-muted)] hover:text-[var(--accent-light)] hover:bg-[var(--surface)] radius-global">FAQs</Link>
            </div>
          </div>
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-4">
          <a href="https://calendly.com/web3carnival" target="_blank" rel="noopener noreferrer" className="hidden sm:block text-small font-bold text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
            Book a Call
          </a>
          <Link href="/register">
            <Button variant="primary" size="md">
              Register
            </Button>
          </Link>
        </div>

      </div>
    </header>
  );
}
