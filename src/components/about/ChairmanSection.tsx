'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface ChairmanSectionProps {
  badge: string;
  title: string;
  text: string;
  role: string;
}

export function ChairmanSection({ badge, title, text, role }: ChairmanSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-pms-gold/30 dark:bg-gradient-to-br dark:from-pms-card dark:to-[#16181D] bg-gradient-to-br from-white to-slate-50 p-8 sm:p-12 md:p-16 shadow-2xl backdrop-blur-xl"
      >
        {/* Ambient gold glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-pms-gold/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-pms-gold/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex items-center justify-between gap-4">
            <span className="px-3.5 py-1.5 rounded-full border border-pms-gold/40 bg-pms-gold/15 text-pms-gold text-xs font-bold uppercase tracking-wider">
              {badge}
            </span>
            <div className="w-12 h-12 rounded-2xl bg-pms-gold/10 border border-pms-gold/20 text-pms-gold flex items-center justify-center">
              <Quote className="w-6 h-6" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {title}
          </h2>

          <p className="text-slate-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed font-normal italic">
            &ldquo;{text}&rdquo;
          </p>

          <div className="pt-4 flex items-center gap-4 border-t border-slate-200 dark:border-white/10">
            <div className="w-12 h-12 rounded-full bg-pms-gold flex items-center justify-center text-slate-900 font-extrabold text-lg shadow-gold-glow">
              P
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                PMS <span className="text-pms-gold">GLASS</span>
              </h4>
              <p className="text-xs text-slate-500 dark:text-gray-400 font-medium">
                {role}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
