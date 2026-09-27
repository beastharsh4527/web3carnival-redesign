import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Faqs | Web3 Carnival',
  description: 'Learn more about Faqs at Web3 Carnival.',
  openGraph: { title: 'Faqs | Web3 Carnival', description: 'Learn more about Faqs at Web3 Carnival.' }
};

export default function FAQsPage() {
  const faqs = [
    {
      q: "What is Web3 Carnival?",
      a: "Web3 Carnival is the world's premier blockchain and crypto event, bringing together innovators, policymakers, and builders shaping the decentralized future."
    },
    {
      q: "Where does Web3 Carnival take place?",
      a: "Web3 Carnival is a global event series. Past editions have been held in Dubai, Singapore, and Bengaluru. Check our Past Editions archive for a full list of events."
    },
    {
      q: "Who attends the event?",
      a: "Our attendees include founders, VCs, developers, KOLs, and Web3 enthusiasts from around the world."
    },
    {
      q: "How can I pitch my startup?",
      a: "You can apply for the Super Demo, where selected startups pitch to a curated room of 250+ top-tier VCs. Applications can be submitted through our Get Involved page."
    },
    {
      q: "How do I get a ticket?",
      a: "You can secure your spot by clicking the Register button. We offer various passes depending on whether you are an attendee, builder, investor, or VIP."
    }
  ];

  return (
    <main className="min-h-screen relative">
      {/* Proper Hero Section */}
      <section className="relative pt-32 pb-24 border-b border-[var(--border)] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-[radial-gradient(ellipse_at_center,_var(--tint-cool)_0%,_transparent_50%)] pointer-events-none z-0 opacity-40"></div>
        <div className="max-w-[var(--maxw)] mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 text-left">
            <span className="font-mono text-small text-[var(--text-muted)] uppercase tracking-wider mb-4 block">[ SUPPORT & INFO ]</span>
            <h1 className="font-display text-h1 mb-6">FAQs</h1>
            <p className="text-[1.25rem] text-[var(--text-muted)] mb-10 max-w-xl leading-snug">
              Everything you need to know about Web3 Carnival. Discover how our global event series brings together innovators, policymakers, and builders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button variant="primary" size="md">Contact Support</Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="relative aspect-[4/3] w-full border border-[var(--border)] bg-black p-2 shadow-2xl">
              <Image src="/events/degen-summit.png" alt="FAQ Hero" fill className="object-cover opacity-90" priority />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[var(--maxw)] mx-auto px-6 text-left relative z-10 py-24">
        {/* FAQs */}
        <section className="mb-24 pb-24 border-b border-[var(--border)]">
          <div className="mb-12">
            <span className="font-mono text-small text-[var(--text-muted)] block mb-4">01 /</span>
            <h2 className="font-display text-h3 mb-4 text-white">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[var(--border)] pb-8">
                <h3 className="font-display text-h4 mb-3 text-white">{faq.q}</h3>
                <p className="text-[var(--text-muted)] text-body leading-relaxed max-w-3xl">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Block */}
        <section className="text-center bg-[var(--bg-base)] border border-[var(--border)] radius-global p-12 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-[radial-gradient(ellipse_at_center,_var(--tint-warm)_0%,_transparent_70%)] pointer-events-none opacity-20 z-0"></div>
          
          <span className="relative z-10 text-[var(--text)] font-mono uppercase tracking-wider mb-4 block">Still have questions?</span>
          <h2 className="text-h2 font-display mb-6 relative z-10">Reach out to our team directly.</h2>
          <p className="text-[var(--text-muted)] mb-10 max-w-2xl mx-auto relative z-10 text-body">
            If you couldn't find the answer to your question, feel free to contact us and we'll get back to you as soon as possible.
          </p>
          
          <div className="flex justify-center relative z-10">
            <Link href="/contact">
              <Button variant="primary" size="lg">Contact Us</Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

