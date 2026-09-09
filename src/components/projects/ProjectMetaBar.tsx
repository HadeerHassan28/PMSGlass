'use client';

import React from 'react';
import { Building, MapPin, Calendar, ShieldCheck } from 'lucide-react';
import { Project } from '@/types';

interface ProjectMetaBarProps {
  project: Project;
  loc: 'ar' | 'en';
  t: (key: string) => string;
}

export function ProjectMetaBar({ project, loc, t }: ProjectMetaBarProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl border dark:border-white/10 border-slate-200 dark:bg-pms-card bg-white shadow-lg">
      <div className="space-y-1">
        <span className="text-xs text-slate-500 dark:text-gray-400 flex items-center gap-1.5 font-medium">
          <Building className="w-3.5 h-3.5 text-pms-gold" />
          <span>{t('client')}</span>
        </span>
        <p className="font-bold text-sm text-slate-900 dark:text-white">
          {project.client[loc]}
        </p>
      </div>

      <div className="space-y-1">
        <span className="text-xs text-slate-500 dark:text-gray-400 flex items-center gap-1.5 font-medium">
          <MapPin className="w-3.5 h-3.5 text-pms-gold" />
          <span>{t('location')}</span>
        </span>
        <p className="font-bold text-sm text-slate-900 dark:text-white">
          {project.location[loc]}
        </p>
      </div>

      <div className="space-y-1">
        <span className="text-xs text-slate-500 dark:text-gray-400 flex items-center gap-1.5 font-medium">
          <Calendar className="w-3.5 h-3.5 text-pms-gold" />
          <span>{t('year')}</span>
        </span>
        <p className="font-bold text-sm text-slate-900 dark:text-white">
          {project.year}
        </p>
      </div>

      <div className="space-y-1">
        <span className="text-xs text-slate-500 dark:text-gray-400 flex items-center gap-1.5 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-pms-gold" />
          <span>{t('area')}</span>
        </span>
        <p className="font-bold text-sm text-slate-900 dark:text-white">
          {project.area}
        </p>
      </div>
    </div>
  );
}
