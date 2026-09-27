'use client';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { LazyMotion, domAnimation, m, useSpring, useTransform, useReducedMotion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function HeroSpatial() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(true);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle click outside to defocus (not needed when lightbox covers screen, but good fallback)
  useEffect(() => {
    const handleOutsideClick = () => setFocusedIndex(null);
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  // Mouse Parallax (Throttled with requestAnimationFrame)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number>(0);

  useEffect(() => {
    if (shouldReduceMotion || isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
        const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1
        setMousePosition({ x, y });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [shouldReduceMotion, isMobile]);

  // Springs for smooth mouse movement
  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    mouseX.set(mousePosition.x);
    mouseY.set(mousePosition.y);
  }, [mousePosition, mouseX, mouseY]);

  // We rotate the entire scene based on mouse movement
  const rotateX = useTransform(mouseY, [-1, 1], [5, -5]);
  const rotateY = useTransform(mouseX, [-1, 1], [-5, 5]);

  const sceneRotateX = shouldReduceMotion || isMobile ? 0 : rotateX;
  const sceneRotateY = shouldReduceMotion || isMobile ? 0 : rotateY;

  const posters = [
    // Background layer (Far)
    {
      src: "/events/kol-awards-night.png",
      alt: "Background Poster 1",
      className: "top-[5%] right-[35%] xl:right-[38%] w-[100px] xl:w-[160px]",
      translateZ: -400,
      rotateY: -20,
      rotateX: 5,
      blur: 0,
      opacity: 0.5,
    },
    {
      src: "/events/pitch-fest.png",
      alt: "Background Poster 2",
      className: "bottom-[5%] right-[-5%] xl:right-[2%] w-[100px] xl:w-[160px]",
      translateZ: -350,
      rotateY: 20,
      rotateX: -5,
      blur: 0,
      opacity: 0.5,
    },
    
    // Midground layer (Mid)
    {
      src: "/events/web3-signal-after-dark.png",
      alt: "Medium Poster 1",
      className: "top-[40%] right-[25%] xl:right-[28%] w-[140px] xl:w-[240px]",
      translateZ: -150,
      rotateY: -15,
      rotateX: 3,
      blur: isMobile ? 0 : 1,
      opacity: 0.8,
    },
    {
      src: "/events/elevator-pitch-battle.png",
      alt: "Medium Poster 2",
      className: "bottom-[35%] right-[0%] xl:right-[6%] w-[140px] xl:w-[240px]",
      translateZ: -150,
      rotateY: 15,
      rotateX: -2,
      blur: isMobile ? 0 : 1,
      opacity: 0.8,
    },

    // Foreground layer (Near)
    {
      src: "/events/gala-dinner-ton.avif",
      alt: "Large Poster 1",
      className: "top-[15%] right-[-10%] xl:right-[8%] w-[200px] xl:w-[350px]",
      translateZ: 0,
      rotateY: 25,
      rotateX: 2,
      blur: 0,
      opacity: 1,
    },
    {
      src: "/events/degen-summit.png",
      alt: "Large Poster 2",
      className: "bottom-[10%] right-[15%] xl:right-[22%] w-[200px] xl:w-[350px]",
      translateZ: 50,
      rotateY: -25,
      rotateX: -2,
      blur: 0,
      opacity: 1,
    }
  ];

  return (
    <div 
      className="absolute inset-0 z-0 pointer-events-none" 
      style={{ perspective: '1200px' }}
    >
      <LazyMotion features={domAnimation}>
      
      {/* Soft Radial Backlight for Mid Plane */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(96,46,166,0.06)_0%,transparent_60%)] pointer-events-none mix-blend-screen" />

      {/* SCENE WRAPPER: Rotates the entire room */}
      <m.div
        className="absolute inset-0 w-full h-full"
        style={{
          rotateX: sceneRotateX,
          rotateY: sceneRotateY,
          transformStyle: 'preserve-3d'
        }}
      >
        {posters.map((poster, idx) => {
          const isFocused = focusedIndex === idx;
          const isOtherFocused = focusedIndex !== null && focusedIndex !== idx;
          const isHovered = hoveredIndex === idx && !isFocused;

          let currentTranslateZ = poster.translateZ;
          let currentRotateY = poster.rotateY;
          let currentRotateX = poster.rotateX;
          let currentOpacity = poster.opacity;
          let currentBlur = poster.blur;
          let currentScale = 1;
          let currentBoxShadow = 'inset 1px 1px 0px rgba(255,255,255,0.15), 0 30px 60px rgba(0,0,0,0.6)';

          if (isOtherFocused) {
            currentTranslateZ = poster.translateZ - 100;
            currentOpacity = poster.opacity * 0.4;
            currentBlur = poster.blur + 2;
          } else if (isHovered && !shouldReduceMotion) {
            currentTranslateZ = poster.translateZ + 50;
            currentRotateY = poster.rotateY * 0.8;
            currentRotateX = poster.rotateX * 0.8;
            currentOpacity = 1;
            currentBlur = 0;
            currentScale = 1.05;
            currentBoxShadow = 'inset 1px 1px 0px rgba(255,255,255,0.2), 0 40px 80px rgba(0,0,0,0.8)';
          }

          return (
            <m.div 
              key={idx}
              layoutId={`poster-${idx}`}
              className={`absolute ${poster.className} aspect-[3/4] group pointer-events-auto cursor-pointer`}
              animate={{
                z: currentTranslateZ,
                rotateX: currentRotateX,
                rotateY: currentRotateY,
                opacity: isFocused ? 0 : currentOpacity,
                filter: `blur(${currentBlur}px)`,
                scale: currentScale,
                boxShadow: currentBoxShadow,
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
                mass: 1,
              }}
              style={{ zIndex: idx }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={(e) => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
                setFocusedIndex(isFocused ? null : idx);
              }}
            >
              <div className="relative w-full h-full bg-black">
                <Image 
                  src={poster.src} 
                  alt={poster.alt} 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 1280px) 200px, 350px"
                  priority={idx >= 4} // prioritize loading foreground images
                />
              </div>
            </m.div>
          );
        })}
      </m.div>

      {/* Hint Text */}
      <div className="absolute bottom-[8%] right-[25%] text-[11px] font-mono tracking-widest text-[var(--text-muted)] opacity-60 pointer-events-none">
        [ CLICK TO VIEW ]
      </div>

      {/* LIGHTBOX PORTAL */}
      {mounted && createPortal(
        <AnimatePresence>
          {focusedIndex !== null && (
            <m.div 
              className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 pointer-events-auto backdrop-blur-md w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => {
                e.stopPropagation();
                setFocusedIndex(null);
              }}
            >
              <m.div 
                className="relative bg-black flex-shrink-0"
                style={{
                  width: 'auto',
                  height: '80vh',
                  maxWidth: '80vw',
                  aspectRatio: '3/4',
                  boxShadow: 'inset 1px 1px 0px rgba(255,255,255,0.2), 0 50px 100px rgba(0,0,0,0.9)',
                }}
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: 50, opacity: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image 
                  src={posters[focusedIndex].src} 
                  alt={posters[focusedIndex].alt} 
                  fill 
                  className="object-contain" 
                  priority
                />
              </m.div>
              <m.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-6 text-[12px] font-mono tracking-widest text-[var(--text-muted)] cursor-pointer hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setFocusedIndex(null);
                }}
              >
                [ CLICK TO CLOSE ]
              </m.div>
            </m.div>
          )}
        </AnimatePresence>,
        document.body
      )}
      </LazyMotion>
    </div>
  );
}
