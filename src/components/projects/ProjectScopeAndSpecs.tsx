'use client';

import React from 'react';
import { CheckCircle2, SlidersHorizontal } from 'lucide-react';
import { Project } from '@/types';

interface ProjectScopeAndSpecsProps {
  project: Project;
  loc: 'ar' | 'en';
  t: (key: string) => string;
}

export function ProjectScopeAndSpecs({ project, loc, t }: ProjectScopeAndSpecsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Scope of work */}
      <div className="lg:col-span-7 p-8 rounded-3xl border dark:border-white/10 border-slate-200 dark:bg-pms-card bg-white shadow-xl space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {t('scopeTitle')}
        </h3>
        <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
          {project.description[loc]}
        </p>
        <ul className="space-y-3 pt-2">
          {project.scopeOfWork[loc].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 dark:text-gray-200">
              <CheckCircle2 className="w-5 h-5 text-pms-gold shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technical Specs Table */}
      <div className="lg:col-span-5 p-8 rounded-3xl border dark:border-white/10 border-slate-200 dark:bg-pms-card bg-white shadow-xl space-y-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-pms-gold" />
          <span>{t('hardware')}</span>
        </h3>

        <div className="space-y-4 text-xs">
          <div className="p-4 rounded-xl border dark:border-white/10 border-slate-200 dark:bg-white/5 bg-slate-50 space-y-1">
            <span className="font-bold text-pms-gold block">{t('glassType')}</span>
            <p className="text-slate-700 dark:text-gray-300">{project.glassType[loc]}</p>
          </div>

          <div className="p-4 rounded-xl border dark:border-white/10 border-slate-200 dark:bg-white/5 bg-slate-50 space-y-1">
            <span className="font-bold text-pms-gold block">{t('hardware')}</span>
            <p className="text-slate-700 dark:text-gray-300">{project.hardwareType[loc]}</p>
          </div>

          {project.specs.map((spec, sIdx) => (
            <div key={sIdx} className="flex justify-between p-3 rounded-xl border dark:border-white/10 border-slate-200 dark:bg-white/5 bg-slate-50">
              <span className="font-semibold text-slate-900 dark:text-white">{spec.label[loc]}</span>
              <span className="text-pms-gold font-bold">{spec.value[loc]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
