'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface MilestoneSectionProps {
  badge: string;
  title: string;
  text: string;
  scope: string;
  isAr: boolean;
}

export function MilestoneSection({
  badge,
  title,
  text,
  scope,
  isAr,
}: MilestoneSectionProps) {
  const highlights = [
    isAr ? 'معايير أمان معتمدة للمساحات العملاقة' : 'Certified safety for expansive spans',
    isAr ? 'عزل حراري وصوتي بمواصفات هندسية دقيقة' : 'High-spec thermal & acoustic insulation',
    isAr ? 'تسليم متكامل وفق الجدول الزمني المعتمد' : 'Turnkey delivery on rigorous schedule',
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-pms-gold/30 dark:bg-gradient-to-br dark:from-pms-card dark:to-[#141518] bg-white p-8 sm:p-12 shadow-2xl overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Award Image / Plaque Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-pms-gold/40 shadow-xl bg-slate-900 group">
              <Image
                src="/images/about/award-placeholder.svg"
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 border border-pms-gold/40 text-pms-gold text-xs font-bold flex items-center gap-1.5 backdrop-blur-md">
                <Award className="w-3.5 h-3.5" />
                <span>Award Plaque</span>
              </div>
            </div>
          </div>

          {/* Details & Copy */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pms-gold/15 text-pms-gold border border-pms-gold/30 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>{badge}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {title}
            </h3>

            <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              {text}
            </p>

            <div className="inline-block px-4 py-2 rounded-xl bg-pms-gold/10 border border-pms-gold/25 text-pms-gold text-xs sm:text-sm font-semibold">
              {scope}
            </div>

            <div className="space-y-2.5 pt-2 border-t border-slate-200 dark:border-white/10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-pms-gold shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
