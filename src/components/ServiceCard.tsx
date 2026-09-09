'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from '@/navigation';
import { motion } from 'framer-motion';
import { Building2, ShowerHead, ShieldCheck, LayoutGrid, Sparkles, Flame, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { Service } from '@/types';

const iconMap: Record<string, any> = {
  Building2,
  ShowerHead,
  ShieldCheck,
  LayoutGrid,
  Sparkles,
  Flame,
};

interface ServiceCardProps {
  service: Service;
  locale: 'ar' | 'en';
}

export function ServiceCard({ service, locale }: ServiceCardProps) {
  const isAr = locale === 'ar';
  const IconComponent = iconMap[service.iconName] || Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-3xl overflow-hidden border dark:border-white/10 dark:bg-pms-card/80 border-slate-200 bg-white shadow-xl flex flex-col justify-between"
    >
      <div>
        {/* Service Image Banner */}
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={service.mainImage}
            alt={service.title[locale]}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          {/* Floating Icon */}
          <div className="absolute top-4 right-4 p-3 rounded-2xl bg-pms-gold text-black shadow-lg">
            <IconComponent className="w-6 h-6" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-pms-gold transition-colors duration-300 mb-2">
            {service.title[locale]}
          </h3>

          <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-6">
            {service.shortDescription[locale]}
          </p>

          {/* Features bullets */}
          <ul className="space-y-2 mb-6">
            {service.features[locale].slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-pms-gold shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0">
        <Link
          href="/services"
          className="w-full py-3 px-4 rounded-xl border border-pms-gold/40 text-pms-gold dark:bg-white/5 bg-slate-50 hover:bg-pms-gold hover:text-black font-bold text-xs transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm"
        >
          <span>{isAr ? 'عرض المواصفات كاملة' : 'View Full Specifications'}</span>
          {isAr ? (
            <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
          ) : (
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          )}
        </Link>
      </div>
    </motion.div>
  );
}
