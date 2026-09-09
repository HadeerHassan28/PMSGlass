'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from '@/navigation';

import { projectsData } from '@/data/projects';
import { ProjectGallery } from '@/components/ProjectGallery';
import { ProjectCard } from '@/components/ProjectCard';
import { ContactSection } from '@/components/ContactSection';
import { ProjectMetaBar } from '@/components/projects/ProjectMetaBar';
import { ProjectScopeAndSpecs } from '@/components/projects/ProjectScopeAndSpecs';

export default function SingleProjectPage({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}) {
  const t = useTranslations('Projects');
  const isAr = locale === 'ar';
  const loc = locale as 'ar' | 'en';

  const project = projectsData.find((p) => p.id === id || p.slug === id);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold">{isAr ? 'المشروع غير موجود' : 'Project Not Found'}</h1>
        <Link href="/projects" className="text-pms-gold font-bold underline">
          {t('backToProjects')}
        </Link>
      </div>
    );
  }

  const relatedProjects = projectsData.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 2);

  return (
    <div className="space-y-16 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border dark:border-white/10 border-slate-300 dark:bg-white/5 bg-slate-100 text-xs font-bold text-slate-800 dark:text-gray-300 hover:border-pms-gold transition-colors"
        >
          {isAr ? <ArrowRight className="w-4 h-4 text-pms-gold" /> : <ArrowLeft className="w-4 h-4 text-pms-gold" />}
          <span>{t('backToProjects')}</span>
        </Link>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-pms-gold text-black uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-gray-400">
              ID: #{project.id}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {project.title[loc]}
          </h1>

          <p className="text-slate-600 dark:text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            {project.subtitle[loc]}
          </p>
        </div>

        <ProjectMetaBar project={project} loc={loc} t={t} />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-4">
          {t('galleryTitle')}
        </h2>
        <ProjectGallery images={project.galleryImages} title={project.title[loc]} />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectScopeAndSpecs project={project} loc={loc} t={t} />
      </section>

      {relatedProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {t('relatedProjects')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((relProj) => (
              <ProjectCard key={relProj.id} project={relProj} locale={loc} />
            ))}
          </div>
        </section>
      )}

      <ContactSection locale={loc} />
    </div>
  );
}
