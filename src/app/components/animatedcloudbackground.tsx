// app/components/AnimatedCloudBackground.tsx
'use client';

import React from 'react';

export default function AnimatedCloudBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sky gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-300 to-sky-200"></div>
      
      {/* Cloud layers for depth */}
      <div className="absolute inset-0">
        {/* Layer 1 - Large background clouds */}
        <div className="absolute w-full h-full animate-drift-slow">
          <div className="absolute top-10 left-0 w-96 h-32 bg-white/60 rounded-full blur-xl transform -translate-x-48"></div>
          <div className="absolute top-32 left-1/4 w-80 h-24 bg-white/70 rounded-full blur-lg transform -translate-x-40"></div>
          <div className="absolute top-20 left-2/3 w-72 h-28 bg-white/65 rounded-full blur-xl transform -translate-x-36"></div>
          <div className="absolute top-48 left-1/2 w-88 h-20 bg-white/55 rounded-full blur-lg transform -translate-x-44"></div>
        </div>

        {/* Layer 2 - Medium clouds */}
        <div className="absolute w-full h-full animate-drift-medium">
          <div className="absolute top-16 left-1/6 w-64 h-20 bg-white/75 rounded-full blur-md transform -translate-x-32"></div>
          <div className="absolute top-40 left-3/4 w-56 h-24 bg-white/80 rounded-full blur-md transform -translate-x-28"></div>
          <div className="absolute top-8 right-0 w-60 h-18 bg-white/70 rounded-full blur-lg transform translate-x-30"></div>
          <div className="absolute top-56 left-1/3 w-52 h-16 bg-white/85 rounded-full blur-sm transform -translate-x-26"></div>
        </div>

        {/* Layer 3 - Foreground clouds */}
        <div className="absolute w-full h-full animate-drift-fast">
          <div className="absolute top-24 left-1/8 w-48 h-16 bg-white/90 rounded-full blur-sm transform -translate-x-24"></div>
          <div className="absolute top-44 right-1/4 w-40 h-12 bg-white/95 rounded-full blur-sm transform translate-x-20"></div>
          <div className="absolute top-12 left-5/6 w-44 h-14 bg-white/85 rounded-full blur-md transform translate-x-22"></div>
        </div>
      </div>

      {/* Subtle overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/20"></div>
    </div>
  );
}