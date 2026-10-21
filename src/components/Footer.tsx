'use client';

import React from 'react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { FooterSocialLinks } from './footer/FooterSocialLinks';
import { FooterContactInfo } from './footer/FooterContactInfo';

interface FooterProps {
  locale: 'ar' | 'en';
}

export function Footer({ locale }: FooterProps) {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navigation');
  const tContact = useTranslations('Contact');
  const isAr = locale === 'ar';

  const quickLinks = [
    { href: '/', label: tNav('home') },
    { href: '/about', label: tNav('about') },
    { href: '/services', label: tNav('services') },
    { href: '/projects', label: tNav('projects') },
    { href: '/contact', label: tNav('contact') },
  ];

  const services = [
    isAr ? 'الواجهات الزجاجية (Curtain Walls)' : 'Curtain Wall Facades',
    isAr ? 'كبائن الشاور الفاخرة' : 'Luxury Shower Cabins',
    isAr ? ' هاندريل الزجاج' : 'Structural Glass Railings',
    isAr ? 'القواطع المكتبيّة المعزولة' : 'Acoustic Office Partitions',
    isAr ? 'المرايا الديكورية والـ LED' : 'Custom & LED Mirrors',
    isAr ? 'تقفيل أسانسير' : 'Elevator Glass',
  ];

  return (
    <footer className="w-full border-t transition-colors duration-300 dark:bg-[#0C0D0E] dark:border-white/10 bg-slate-900 border-slate-800 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info & Social Media Channels */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-pms-gold flex items-center justify-center text-black font-extrabold text-xl shadow-gold-glow">
                P
              </div>
              <span className="text-2xl font-extrabold text-white tracking-wider">
                PMS <span className="text-pms-gold">GLASS</span>
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              {t('tagline')}
            </p>

            <FooterSocialLinks />
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-base mb-4 border-b border-pms-gold/40 pb-2 inline-block">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-pms-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-base mb-4 border-b border-pms-gold/40 pb-2 inline-block">
              {t('servicesTitle')}
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {services.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <FooterContactInfo
            title={t('contactInfo')}
            address={tContact('addressDesc')}
            hours={tContact('hoursDesc')}
          />
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>{t('rights')}</p>
          <div className="flex items-center gap-2">
            <span>{t('rights2')}</span>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://new-portfolio-awyy.vercel.app/"
              className="hover:text-gray-400 cursor-pointer underline underline-offset-2"
            >
              {t('rights2Name')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
