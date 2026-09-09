'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StatItem {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: StatItem[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-6 md:p-8 rounded-3xl border dark:border-white/10 border-slate-200 dark:bg-pms-card/70 bg-white text-center shadow-lg hover:border-pms-gold/40 transition-colors"
          >
            <div className="text-3xl md:text-5xl font-black text-pms-gold mb-2 tracking-tight">
              {stat.value}
            </div>
            <div className="text-xs md:text-sm font-semibold text-slate-600 dark:text-gray-400">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
