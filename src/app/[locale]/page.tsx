'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { ArrowLeft, ArrowRight, Shield, Award, Cpu, Flame } from 'lucide-react';

import { servicesData } from '@/data/services';
import { projectsData } from '@/data/projects';
import { ServiceCard } from '@/components/ServiceCard';
import { ProjectCard } from '@/components/ProjectCard';
import { ContactSection } from '@/components/ContactSection';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { QualityBadgesSection } from '@/components/home/QualityBadgesSection';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('Hero');
  const tAbout = useTranslations('About');
  const tServices = useTranslations('Services');
  const tProjects = useTranslations('Projects');
  const isAr = locale === 'ar';
  const loc = locale as 'ar' | 'en';

  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
    { value: t('stat4Value'), label: t('stat4Label') },
  ];

  const qualityBadges = [
    { icon: Flame, title: tAbout('cert1Title'), desc: tAbout('cert1Desc') },
    { icon: Shield, title: tAbout('cert2Title'), desc: tAbout('cert2Desc') },
    { icon: Award, title: tAbout('cert3Title'), desc: tAbout('cert3Desc') },
    { icon: Cpu, title: tAbout('machineryTitle'), desc: tAbout('machineryDesc') },
  ];

  return (
    <div className="space-y-20 pb-16">
      <HeroSection isAr={isAr} />
      <StatsSection stats={stats} />

      {/* SERVICES HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full border border-pms-gold/30 bg-pms-gold/10 text-pms-gold text-xs font-bold uppercase tracking-wider">
            {tServices('badge')}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            {tServices('title')}
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            {tServices('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.slice(0, 6).map((service) => (
            <ServiceCard key={service.id} service={service} locale={loc} />
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="px-4 py-1.5 rounded-full border border-pms-gold/30 bg-pms-gold/10 text-pms-gold text-xs font-bold uppercase tracking-wider">
              {tProjects('badge')}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
              {tProjects('title')}
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
              {tProjects('description')}
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-pms-gold/40 text-pms-gold hover:bg-pms-gold hover:text-black font-bold text-sm transition-all"
          >
            <span>{isAr ? 'عرض كافة المشاريع' : 'View All Projects'}</span>
            {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} locale={loc} />
          ))}
        </div>
      </section>

      <QualityBadgesSection
        title={tAbout('certificationsTitle')}
        description={tAbout('description')}
        badges={qualityBadges}
      />

      <ContactSection locale={loc} />
    </div>
  );
}
