'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/navigation';
import { ArrowLeft, ArrowRight, Layers } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { projectsData } from '@/data/projects';

interface HeroSectionProps {
  isAr: boolean;
}

export function HeroSection({ isAr }: HeroSectionProps) {
  const t = useTranslations('Hero');

  // Dynamically extract real project images from projects data
  const heroImages = useMemo(() => {
    const list: string[] = [];
    projectsData.forEach((project) => {
      if (project.mainImage) list.push(project.mainImage);
      if (project.galleryImages && project.galleryImages.length > 0) {
        list.push(...project.galleryImages.slice(0, 3));
      }
    });
    return list.length > 0 ? list : ['/images/projects/clothMall/1.jpg', '/images/projects/mokatem/1.jpg'];
  }, []);

  const [currentIdx, setCurrentIdx] = useState(0);

  // Automated background slideshow cycling every 5 seconds
  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black pt-12">
      {/* Dynamic Project Images Background with Smooth Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={heroImages[currentIdx]}
              alt="PMS Glass Project Architectural Showcase"
              fill
              priority={currentIdx === 0}
              className="absolute inset-0 w-full h-full object-cover z-0"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Luxury Gradient & Readability Overlay */}
        <div className="absolute inset-0 bg-pms-black/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 py-16">
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
