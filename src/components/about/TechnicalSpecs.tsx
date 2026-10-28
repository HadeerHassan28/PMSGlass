'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Layers, ShieldCheck, Scissors } from 'lucide-react';

interface TechnicalSpecsProps {
  title: string;
  description: string;
  isAr: boolean;
}

export function TechnicalSpecs({ title, description, isAr }: TechnicalSpecsProps) {
  const specs = [
    {
      icon: Flame,
      title: isAr ? "مدير العمليات والتركيبات" : 'Operations & Installations Manager',
      desc: isAr
        ? "خبير في إدارة وتنفيذ مشاريع الزجاج المعماري الفاخر، والإشراف على أعلى معايير الجودة والدقة في تركيبات الواجهات والمرايات."
        : "Expert in managing and executing high-end architectural glass projects, ensuring the highest standards of quality and precision in facades and mirrors installations.",
    },
    {
      icon: Layers,
      title: isAr ? 'ماكينات الشنفرة والشطف الرقمي CNC' : 'CNC Double-Edging & Polishing',
      desc: isAr
        ? 'حواف مصقولة بدقة متناهية وشنفرة شطف ليزر بأي زاوية هندسية مع ملمس فائق النعومة.'
        : 'Micro-precision laser beveling, flat-edge arrissing, and mirror-finish polishing.',
    },
    {
      icon: ShieldCheck,
      title: isAr ? 'تجميع الزجاج المزدوج (Double Glazing)' : 'Insulated Double Glazing Line',
      desc: isAr
        ? 'حقن غاز الأرجون والعوازل الإنشائية بأعلى معايير كفاءة استهلاك الطاقة والعزل الصوتي.'
        : 'Argon gas filling & structural silicone sealing for peak thermal and acoustic insulation.',
    },
    {
      icon: Scissors,
      title: isAr ? 'ماكينات التخريم والقص المائي (Waterjet)' : 'Precision Waterjet & Cutouts',
      desc: isAr
        ? 'تفريغ وتجويف مكان المفصلات والإكسسوارات والفتحات المعمارية الدقيقة دون أي إجهاد حراري.'
        : 'Ultra-precise hinge cutouts, internal recesses, and custom geometric hardware milling.',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {specs.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl border dark:border-white/10 border-slate-200 dark:bg-pms-card bg-white space-y-3 shadow-md hover:border-pms-gold/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-pms-gold/15 text-pms-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white leading-snug">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
