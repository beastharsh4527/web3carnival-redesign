'use client';
import Link from 'next/link';
import { Twitter, Linkedin, Instagram } from '../uiIcons';

export function Footer() {
  return (
    <footer className="bg-[var(--bg-base)] pt-16 pb-8 border-t border-[var(--border)]">
      <div className="max-w-[var(--maxw)] mx-auto px-6">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-s5 mb-16">
          
          {/* Logo & Socials */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-s4">
              <div className="font-display font-bold text-h4 leading-none tracking-tight text-white">
                WEB3<br/>CARNIVAL
              </div>
            </Link>
            <p className="text-small text-gray-400 mb-s4">
              World's Premier Web3 & Blockchain Event.
            </p>
            <div className="flex flex-wrap gap-4 text-gray-400">
              {/* Using generic texts/SVG placeholders for WhatsApp/Telegram if standard lucide missing.
                  Wait, we created uiIcons for Twitter, Linkedin, Instagram. Let's assume WhatsApp/Telegram/Linktree 
                  are just links or we can reuse uiIcons if we expand it. For now, text/links or simple paths */}
              <a href="https://chat.whatsapp.com/CiSjo3ZtmB71gn9CtTb9J1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 -ml-2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center" aria-label="WhatsApp">WhatsApp</a>
              <a href="https://t.me/web3carnival2023" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center" aria-label="Telegram">Telegram</a>
              <a href="https://x.com/web3carnival" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
              <a href="https://instagram.com/web3carnival" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/company/web3carnival" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
              <a href="https://linktr.ee/web3carnival2023" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center" aria-label="Linktree">Linktr.ee</a>
            </div>
          </div>

          {/* Links Column 2: Web3 Carnival */}
          <div>
            <h4 className="font-bold mb-s4 text-white">Web3 Carnival</h4>
            <ul className="space-y-s2 text-small text-gray-400">
              <li><Link href="/why-web3-carnival" className="hover:text-white transition-colors block py-2 -my-2">Why Web3 Carnival?</Link></li>
              <li><Link href="/awards" className="hover:text-white transition-colors block py-2 -my-2">Awards</Link></li>
              <li><Link href="/demo-night" className="hover:text-white transition-colors block py-2 -my-2">Demo Night</Link></li>
            </ul>
          </div>

          {/* Links Column 3: Get Involved */}
          <div>
            <h4 className="font-bold mb-s4 text-white">Get involved</h4>
            <ul className="space-y-s2 text-small text-gray-400">
              <li><Link href="/sponsors" className="hover:text-white transition-colors block py-2 -my-2">Sponsors</Link></li>
              <li><Link href="/speakers" className="hover:text-white transition-colors block py-2 -my-2">Speakers</Link></li>
              <li><Link href="/get-involved#volunteer" className="hover:text-white transition-colors block py-2 -my-2">Volunteer</Link></li>
              <li><Link href="/get-involved#media" className="hover:text-white transition-colors block py-2 -my-2">Media</Link></li>
              <li><Link href="/get-involved#community" className="hover:text-white transition-colors block py-2 -my-2">Community</Link></li>
              <li><Link href="/get-involved#affiliate" className="hover:text-white transition-colors block py-2 -my-2">Affiliate</Link></li>
            </ul>
          </div>

          {/* Links Column 4: More */}
          <div>
            <h4 className="font-bold mb-s4 text-white">More</h4>
            <ul className="space-y-s2 text-small text-gray-400">
              <li><Link href="/contact" className="hover:text-white transition-colors block py-2 -my-2">Contact</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors block py-2 -my-2">About Us</Link></li>
              <li><Link href="/faqs" className="hover:text-white transition-colors block py-2 -my-2">FAQs</Link></li>
              <li><a href="https://linktr.ee/web3carnival2023" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block py-2 -my-2">Linktr.ee</a></li>
            </ul>
          </div>

          {/* Links Column 5: Legal */}
          <div>
            <h4 className="font-bold mb-s4 text-white">Legal</h4>
            <ul className="space-y-s2 text-small text-gray-400">
              <li><a href="https://www.web3carnival.world/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block py-2 -my-2">Terms of service</a></li>
              <li><a href="https://www.web3carnival.world/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block py-2 -my-2">Privacy Policy</a></li>
              <li><a href="https://www.web3carnival.world/cancellation-and-refund-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block py-2 -my-2">Cancellation and Refund</a></li>
            </ul>
          </div>

        </div>

        {/* Newsletter Section */}
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-h3 text-white mb-2">Subscribe to our newsletter</h3>
            <p className="text-small text-gray-400">The latest news, articles, and resources, sent to your inbox weekly.</p>
          </div>
          
          <form className="flex w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full md:w-64 bg-transparent border border-gray-700 rounded-l-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent)]"
            />
            <button 
              type="submit" 
              className="bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white font-bold px-6 py-3 rounded-r-md transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
}
