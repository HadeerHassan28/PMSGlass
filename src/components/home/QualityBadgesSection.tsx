'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface QualityBadge {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface QualityBadgesProps {
  title: string;
  description: string;
  badges: QualityBadge[];
}

export function QualityBadgesSection({ title, description, badges }: QualityBadgesProps) {
  return (
    <section className="py-16 dark:bg-[#181A20] bg-slate-100 border-y dark:border-white/10 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            {title}
          </h2>
          <p className="text-xs md:text-sm text-slate-600 dark:text-gray-400">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, idx) => {
            const BadgeIcon = badge.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border dark:border-white/10 border-slate-200 dark:bg-pms-card/90 bg-white space-y-3 shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-pms-gold/15 text-pms-gold flex items-center justify-center">
                  <BadgeIcon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {badge.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                  {badge.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
