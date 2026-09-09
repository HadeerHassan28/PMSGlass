'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from '@/navigation';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  locale: 'ar' | 'en';
}

export function ProjectCard({ project, locale }: ProjectCardProps) {
  const isAr = locale === 'ar';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-3xl overflow-hidden border dark:border-white/10 dark:bg-pms-card/80 border-slate-200 bg-white shadow-xl dark:shadow-glass-dark transition-all duration-300 flex flex-col justify-between"
    >
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={project.mainImage}
          alt={project.title[locale]}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Category Tag */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-pms-gold text-black shadow-md uppercase tracking-wider">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center gap-1">
            <Calendar className="w-3 h-3 text-pms-gold" />
            {project.year}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-pms-slate dark:text-gray-400 mb-2">
            <MapPin className="w-3.5 h-3.5 text-pms-gold" />
            <span>{project.location[locale]}</span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-pms-gold transition-colors duration-300 line-clamp-1 mb-2">
            {project.title[locale]}
          </h3>

          <p className="text-sm text-slate-600 dark:text-gray-400 line-clamp-2 mb-4 leading-relaxed">
            {project.subtitle[locale]}
          </p>
        </div>

        {/* Card Footer Link */}
        <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
          <span className="text-xs font-medium text-slate-500 dark:text-gray-400">
            {project.client[locale]}
          </span>

          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-pms-gold hover:text-pms-gold-hover transition-colors"
          >
            <span>{isAr ? 'التفاصيل' : 'View Specs'}</span>
            <ArrowUpRight className={`w-4 h-4 ${isAr ? 'rotate-90' : ''}`} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
