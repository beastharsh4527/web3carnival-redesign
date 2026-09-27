'use client';
import { Button } from '../ui/Button';

export function Contact() {
  return (
    <section className="py-s6">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-[5rem] md:text-hero mb-s4 leading-[0.85] uppercase tracking-tight">
          Join the <br/> Decentralized Future
        </h2>
        <p className="text-body text-[var(--text-muted)] mb-s5 leading-relaxed">
          Join thousands of builders shaping the decentralized future.<br/>Secure your spot at the World's Premier Blockchain & Crypto Event.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-s2">
          <Button variant="primary" size="lg">
            Register Now
          </Button>
          <Button variant="secondary" size="lg">
            Book a Call
          </Button>
        </div>
      </div>
    </section>
  );
}
