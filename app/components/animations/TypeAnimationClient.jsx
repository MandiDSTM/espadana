// components/TypeAnimationClient.jsx
'use client'; // ضروری برای JSX در App Router

import dynamic from 'next/dynamic';

// بارگیری پویا با غیرفعال‌سازی SSR
const TypeAnimation = dynamic(
  () => import('react-type-animation').then((mod) => mod.TypeAnimation),
  { 
    ssr: false,
    loading: () => <span></span> // حالت بارگذاری
  }
);

export default function AnimatedText({ sequence }) {
  return (
    <TypeAnimation
      sequence={sequence}
      speed={50}
      style={{ display: 'inline-block' }}
    />
  );
}