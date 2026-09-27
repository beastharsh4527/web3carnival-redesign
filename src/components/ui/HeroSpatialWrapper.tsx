'use client';
import dynamic from 'next/dynamic';

export const HeroSpatialWrapper = dynamic(
  () => import('./HeroSpatial').then((mod) => mod.HeroSpatial),
  { ssr: false }
);
