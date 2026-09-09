'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactChannels } from '@/components/contact/ContactChannels';

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('Contact');
  const isAr = locale === 'ar';

  return (
    <div className="space-y-16 py-12">
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <ContactForm isAr={isAr} t={t} />
          </div>

          <div className="lg:col-span-5">
            <ContactChannels t={t} />
          </div>
        </div>
      </section>
    </div>
  );
}
