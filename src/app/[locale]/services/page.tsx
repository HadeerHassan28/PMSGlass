'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import { servicesData } from '@/data/services';
import { ContactSection } from '@/components/ContactSection';
import { ServiceDetailItem } from '@/components/services/ServiceDetailItem';

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('Services');
  const isAr = locale === 'ar';
  const loc = locale as 'ar' | 'en';

  return (
    <div className="space-y-20 py-12">
      {/* HEADER SECTION */}
      <section className="text-center max-w-4xl mx-auto px-4 space-y-4">
        <span className="px-4 py-1.5 rounded-full border border-pms-gold/40 bg-pms-gold/10 text-pms-gold text-xs font-bold uppercase tracking-wider">
          {t('badge')}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {t('title')}
        </h1>
        <p className="text-slate-600 dark:text-gray-400 text-base leading-relaxed">
          {t('description')}
        </p>
      </section>

      {/* DETAILED SERVICES LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {servicesData.map((service) => (
          <ServiceDetailItem
            key={service.id}
            service={service}
            loc={loc}
            isAr={isAr}
            t={t}
          />
        ))}
      </section>

      {/* CONTACT CTA */}
      <div id="contact">
        <ContactSection locale={loc} />
      </div>
    </div>
  );
}
