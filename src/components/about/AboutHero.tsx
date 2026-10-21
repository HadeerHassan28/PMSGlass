'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface AboutHeroProps {
  badge: string;
  title: string;
  description: string;
}

export function AboutHero({ badge, title, description }: AboutHeroProps) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white overflow-hidden rounded-3xl max-w-7xl mx-auto border dark:border-white/10 border-slate-800 shadow-2xl">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about/factory-hero.svg"
          alt="PMS GLASS Architectural Glass Solutions"
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-3xl mx-auto space-y-6"
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-pms-gold/40 bg-pms-gold/10 text-pms-gold text-xs font-bold uppercase tracking-widest">
          {badge}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          {title}
        </h1>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      </motion.div>
    </section>
  );
}
