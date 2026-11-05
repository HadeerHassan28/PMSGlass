'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Modern luxury animated background featuring slow-floating glowing golden/amber
 * orbs and a smooth gradient overlay to maintain text contrast and readability.
 */
export function HeroGlowBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black">
      {/* Primary Slow-Moving Golden Glowing Orb */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.18, 0.95, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-20 left-[15%] w-96 h-96 sm:w-[560px] sm:h-[560px] bg-[#F5B800]/20 filter blur-[100px] rounded-full"
      />

      {/* Secondary Floating Amber Glow Orb */}
      <motion.div
        animate={{
          x: [0, -60, 45, 0],
          y: [0, 50, -45, 0],
          scale: [1, 0.92, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-24 right-[10%] w-[360px] h-[360px] sm:w-[520px] sm:h-[520px] bg-[#F5B800]/20 filter blur-[100px] rounded-full"
      />

      {/* Subtle Ambient Depth Layer */}
      <motion.div
        animate={{
          opacity: [0.3, 0.55, 0.3],
          scale: [0.95, 1.1, 0.95],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 sm:w-[480px] sm:h-[480px] bg-[#F5B800]/15 filter blur-[100px] rounded-full"
      />

      {/* Smooth Gradient Overlay for Maximum Text Contrast & Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
    </div>
  );
}
