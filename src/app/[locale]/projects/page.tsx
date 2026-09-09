'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, FolderKanban } from 'lucide-react';

import { projectsData } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { CategoryType } from '@/types';
import { ContactSection } from '@/components/ContactSection';

export default function ProjectsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('Projects');
  const isAr = locale === 'ar';
  const loc = locale as 'ar' | 'en';

  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: CategoryType; label: string }[] = [
    { id: 'all', label: t('filterAll') },
    { id: 'facades', label: t('filterFacades') },
    { id: 'showers', label: t('filterShowers') },
    { id: 'railings', label: t('filterRailings') },
    { id: 'partitions', label: t('filterPartitions') },
    { id: 'mirrors', label: t('filterMirrors') },
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch =
      project.title[loc].toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client[loc].toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location[loc].toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 py-12">
      {/* HEADER SECTION */}
      <section className="text-center max-w-4xl mx-auto px-4 space-y-4">
        <span className="px-4 py-1.5 rounded-full border border-pms-gold/40 bg-pms-gold/10 text-pms-gold text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2">
          <FolderKanban className="w-4 h-4" />
          <span>{t('badge')}</span>
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {t('title')}
        </h1>
        <p className="text-slate-600 dark:text-gray-400 text-base leading-relaxed">
          {t('description')}
        </p>
      </section>

      {/* FILTER TABS & SEARCH BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                    isSelected
                      ? 'bg-pms-gold text-black shadow-gold-glow'
                      : 'border dark:border-white/10 border-slate-300 dark:bg-white/5 bg-slate-100 dark:text-gray-300 text-slate-700 hover:border-pms-gold'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full py-2.5 px-4 pr-10 rounded-full border dark:border-white/15 border-slate-300 dark:bg-pms-card bg-white text-slate-900 dark:text-white text-xs focus:outline-none focus:border-pms-gold shadow-sm"
            />
            <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
          </div>

        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={selectedCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} locale={loc} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 border dark:border-white/10 border-slate-200 rounded-3xl dark:bg-pms-card bg-white space-y-4"
            >
              <Filter className="w-12 h-12 text-pms-gold mx-auto opacity-50" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {t('noResults')}
              </h3>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* CONTACT CTA */}
      <ContactSection locale={loc} />
    </div>
  );
}
