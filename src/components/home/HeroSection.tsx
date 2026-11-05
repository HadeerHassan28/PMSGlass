'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import { ArrowLeft, ArrowRight, Layers } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface HeroSectionProps {
  isAr: boolean;
}

export function HeroSection({ isAr }: HeroSectionProps) {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black pt-12">
      {/* Animated Luxury Glow Orbs Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Golden Glowing Orb */}
        <motion.div
          animate={{
            x: [0, 45, -35, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-24 left-[10%] w-96 h-96 sm:w-[540px] sm:h-[540px] bg-[#F5B800]/15 filter blur-[120px] rounded-full"
        />

        {/* Deep Dark-Blue / Architectural Ambient Light Layer */}
        <motion.div
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 45, -35, 0],
            scale: [1, 0.9, 1.12, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-28 right-[8%] w-[380px] h-[380px] sm:w-[580px] sm:h-[580px] bg-[#0c1829]/60 filter blur-[130px] rounded-full"
        />

        {/* Subtle Central Warm Amber Glow */}
        <motion.div
          animate={{
            opacity: [0.25, 0.45, 0.25],
            scale: [0.95, 1.08, 0.95],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 sm:w-[460px] sm:h-[460px] bg-amber-500/10 filter blur-[110px] rounded-full"
        />

        {/* Architectural Backdrop Blur & Dark Gradient Layer for Contrast */}
        <div className="absolute inset-0 backdrop-blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pms-gold/40 bg-pms-gold/10 backdrop-blur-md text-pms-gold font-bold text-xs md:text-sm uppercase tracking-widest shadow-gold-glow"
        >
          <Layers className="w-4 h-4 text-pms-gold" />
          <span>{t('badge')}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none"
        >
          {t('titleLine1')}{' '}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pms-gold via-amber-300 to-amber-500 mt-2">
            {t('titleLine2')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          {t('description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            href="/projects"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-pms-gold hover:bg-pms-gold-hover text-black font-extrabold text-base shadow-gold-glow-lg transition-all duration-300 flex items-center justify-center gap-3"
          >
            <span>{t('ctaProjects')}</span>
            {isAr ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-white/30 hover:border-pms-gold bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-bold text-base transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>{t('ctaContact')}</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
