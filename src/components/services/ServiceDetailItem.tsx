'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, ShowerHead, ShieldCheck, LayoutGrid, Sparkles, Flame, CheckCircle2, SlidersHorizontal } from 'lucide-react';
import { Service } from '@/types';

const iconMap: Record<string, any> = {
  Building2,
  ShowerHead,
  ShieldCheck,
  LayoutGrid,
  Sparkles,
  Flame,
};

interface ServiceDetailItemProps {
  service: Service;
  loc: 'ar' | 'en';
  isAr: boolean;
  t: (key: string) => string;
}

export function ServiceDetailItem({ service, loc, isAr, t }: ServiceDetailItemProps) {
  const IconComponent = iconMap[service.iconName] || Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-8 md:p-12 rounded-3xl border dark:border-white/10 border-slate-200 dark:bg-pms-card bg-white shadow-2xl space-y-8"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-white/10">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-pms-gold text-black flex items-center justify-center shadow-gold-glow shrink-0">
            <IconComponent className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {service.title[loc]}
            </h2>
            <p className="text-xs sm:text-sm text-pms-gold font-semibold mt-1">
              {service.subtitle[loc]}
            </p>
          </div>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-pms-gold text-black font-bold text-xs hover:bg-pms-gold-hover shadow-md transition-colors"
        >
          <span>{isAr ? 'طلب تسعير ومقاسات' : 'Request Quote & Specs'}</span>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-6">
          <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed">
            {service.fullDescription[loc]}
          </p>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">
              {t('featuresLabel')}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.features[loc].map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-pms-gold shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-pms-gold" />
              <span>{t('specsLabel')}</span>
            </h4>
            <div className="rounded-xl border dark:border-white/10 border-slate-200 overflow-hidden divide-y dark:divide-white/10 divide-slate-200 text-xs">
              {service.technicalSpecs.map((spec, sIdx) => (
                <div key={sIdx} className="grid grid-cols-2 p-3 dark:bg-white/5 bg-slate-50">
                  <span className="font-bold text-slate-900 dark:text-white">
                    {spec.title[loc]}
                  </span>
                  <span className="text-slate-600 dark:text-gray-400">
                    {spec.description[loc]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border dark:border-white/10 border-slate-200">
            <Image
              src={service.mainImage}
              alt={service.title[loc]}
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-3 gap-2">
            {service.gallery.map((img, gIdx) => (
              <div key={gIdx} className="relative h-20 rounded-xl overflow-hidden border dark:border-white/10 border-slate-200">
                <Image src={img} alt={`Gallery ${gIdx}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
