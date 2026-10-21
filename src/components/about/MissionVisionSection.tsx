'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

interface MissionVisionProps {
  missionTitle: string;
  missionText: string;
  visionTitle: string;
  visionText: string;
}

export function MissionVisionSection({
  missionTitle,
  missionText,
  visionTitle,
  visionText,
}: MissionVisionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group p-8 sm:p-10 rounded-3xl border dark:border-white/10 border-slate-200 dark:bg-pms-card bg-white shadow-xl space-y-4 hover:border-pms-gold/40 transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-2xl bg-pms-gold/15 text-pms-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Target className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {missionTitle}
          </h3>
          <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            {missionText}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group p-8 sm:p-10 rounded-3xl border dark:border-white/10 border-slate-200 dark:bg-pms-card bg-white shadow-xl space-y-4 hover:border-pms-gold/40 transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-2xl bg-pms-gold/15 text-pms-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Eye className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {visionTitle}
          </h3>
          <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            {visionText}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
