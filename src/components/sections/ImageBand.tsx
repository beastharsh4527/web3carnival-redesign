import Image from "next/image";

export function ImageBand() {
  const images = [
    { src: '/events/pizza.png', alt: 'Bitcoin Pizza Day' },
    { src: '/events/degen-summit.png', alt: 'DeGen Summit' },
    { src: '/events/founders-funders-night.png', alt: 'Founders & Funders Night' },
    { src: '/events/elevator-pitch-battle.png', alt: 'Elevator Pitch Battle' },
    { src: '/events/w3wc-consortium.png', alt: 'W3WC Consortium' },
    { src: '/events/book-launch.avif', alt: 'Book Launch' },
    { src: '/events/high-tea-timechain.avif', alt: 'High-Tea TimeChain' },
    { src: '/events/cypher-genesis-summit.avif', alt: 'Cypher Genesis Summit' },
  ];

  const marqueeImages = [...images, ...images];

  return (
    <section className="overflow-hidden py-s4 border-y border-[var(--border)] relative bg-[var(--bg)]">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* Gradient masks for smooth fade in/out at edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee will-change-transform">
        {marqueeImages.map((img, i) => (
          <div 
            key={i} 
            className="relative w-[200px] md:w-[280px] aspect-[3/4] mx-2 md:mx-4 flex-shrink-0 cursor-pointer overflow-hidden border border-[var(--border)] rounded-sm group bg-black"
          >
            <Image 
              src={img.src} 
              alt={img.alt} 
              fill 
              sizes="(max-width: 768px) 200px, 280px"
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
            />
          </div>
        ))}
      </div>
    </section>
  );
}
