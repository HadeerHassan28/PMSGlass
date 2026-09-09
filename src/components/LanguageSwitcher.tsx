'use client';

import React from 'react';
import { usePathname, useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  locale: 'ar' | 'en';
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const router = useRouter();

  const isAr = locale === 'ar';
  const targetLocale = isAr ? 'en' : 'ar';

  const handleLanguageSwitch = () => {
    router.replace(pathname, { locale: targetLocale });
  };

  return (
    <button
      onClick={handleLanguageSwitch}
      className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border text-xs font-bold transition-all duration-300 dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-800"
      aria-label="Switch Language"
      title={isAr ? 'Switch to English' : 'التغيير إلى العربية'}
    >
      <Globe className="w-4 h-4 text-pms-gold" />
      <span>{t('switchLang')}</span>
    </button>
  );
}
