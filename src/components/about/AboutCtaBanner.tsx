'use client';

import React from 'react';
import { Link } from '@/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

interface AboutCtaBannerProps {
  title: string;
  description: string;
  btnText: string;
  isAr: boolean;
}

export function AboutCtaBanner({
  title,
  description,
  btnText,
  isAr,
}: AboutCtaBannerProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl p-8 sm:p-10 border border-pms-gold/40 dark:bg-gradient-to-r dark:from-pms-card dark:to-[#171920] bg-slate-900 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-pms-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-2 text-center md:text-start max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pms-gold/20 text-pms-gold border border-pms-gold/30 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PMS GLASS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            {title}
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <div className="relative z-10 shrink-0 w-full md:w-auto">
          <Link
            href="/contact"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-pms-gold hover:bg-pms-gold-hover text-black font-extrabold text-sm shadow-gold-glow transition-all duration-300 group"
          >
            <span>{btnText}</span>
            {isAr ? (
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            ) : (
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            )}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
