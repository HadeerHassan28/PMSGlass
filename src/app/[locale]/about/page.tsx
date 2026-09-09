'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Eye, Cpu, CheckCircle2, Award, Flame, Wrench } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('About');
  const isAr = locale === 'ar';
  const loc = locale as 'ar' | 'en';

  const factorySpecs = [
    {
      title: isAr ? 'أفران المعالجة الحرارية للتسكير' : 'Convection Glass Tempering Oven',
      desc: isAr ? 'قدرة معالجة لسمك يصل لـ 19 مم مع تحكم رقمي حراري دقيق.' : 'Processes glass thickness up to 19mm with digital convection technology.',
    },
    {
      title: isAr ? 'ماكينات الشنفرة والسنفرة الأوتوماتيكية' : 'CNC Double-Edging & Polishing Line',
      desc: isAr ? 'حواف مصقولة بدقة متناهية وشنفرة شطف ليزر بأي زاوية هندسية.' : 'Precision laser beveling and polished arrissing edges.',
    },
    {
      title: isAr ? 'خطوط تجميع الزجاج المزدوج (Double Glazing)' : 'Automated Insulating Glass Assembly',
      desc: isAr ? 'حقن غاز الأرجون وحقن السيليكون الهيكلي للحصول على أقصى عزل.' : 'Argon gas filling & structural silicone sealing for peak insulation.',
    },
    {
      title: isAr ? 'ماكينات التخريم والقص المائي (Waterjet)' : 'Precision Waterjet & CNC Glass Machining',
      desc: isAr ? 'تفريغ مكان المفصلات والمقابض بأعلى درجة مطابقة للهندسيات.' : 'Ultra-precise hinge cutouts and hardware milling.',
    },
  ];

  return (
    <div className="space-y-16 py-12">
      {/* HEADER BANNER */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white overflow-hidden rounded-3xl max-w-7xl mx-auto border dark:border-white/10 border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1600&q=80"
            alt="PMS Glass Factory & Engineering"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <span className="px-4 py-1.5 rounded-full border border-pms-gold/40 bg-pms-gold/10 text-pms-gold text-xs font-bold uppercase tracking-widest">
            {t('badge')}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {t('title')}
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            {t('description')}
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl border dark:border-white/10 border-slate-200 dark:bg-pms-card bg-white shadow-xl space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-pms-gold/15 text-pms-gold flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t('missionTitle')}
            </h3>
            <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
              {t('missionText')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl border dark:border-white/10 border-slate-200 dark:bg-pms-card bg-white shadow-xl space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-pms-gold/15 text-pms-gold flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t('visionTitle')}
            </h3>
            <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
              {t('visionText')}
            </p>
          </motion.div>

        </div>
      </section>

      {/* FACTORY & MACHINERY TECHNOLOGY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            {t('machineryTitle')}
          </h2>
          <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
            {t('machineryDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {factorySpecs.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border dark:border-white/10 border-slate-200 dark:bg-pms-card/80 bg-white space-y-3 shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-pms-gold/20 text-pms-gold flex items-center justify-center font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* REUSABLE CONTACT */}
      <ContactSection locale={loc} />
    </div>
  );
}
