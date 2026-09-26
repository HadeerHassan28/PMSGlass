'use client';

import React from 'react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  locale: 'ar' | 'en';
}

export function Footer({ locale }: FooterProps) {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navigation');
  const tContact = useTranslations('Contact');
  const isAr = locale === 'ar';

  return (
    <footer className="w-full border-t transition-colors duration-300 dark:bg-[#0C0D0E] dark:border-white/10 bg-slate-900 border-slate-800 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
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

            <div className="pt-2 flex items-center gap-3">
              <div className="px-3 py-1 rounded-full bg-pms-gold/10 border border-pms-gold/30 text-pms-gold text-xs font-bold">
                ISO 9001:2025 Certified
              </div>
              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">
                Tempered Safety Glass
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-base mb-4 border-b border-pms-gold/40 pb-2 inline-block">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-pms-gold transition-colors">{tNav('home')}</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-pms-gold transition-colors">{tNav('about')}</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-pms-gold transition-colors">{tNav('services')}</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-pms-gold transition-colors">{tNav('projects')}</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pms-gold transition-colors">{tNav('contact')}</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-base mb-4 border-b border-pms-gold/40 pb-2 inline-block">
              {t('servicesTitle')}
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>{isAr ? 'الواجهات الزجاجية (Curtain Walls)' : 'Curtain Wall Facades'}</li>
              <li>{isAr ? 'كبائن الشاور الفاخرة' : 'Luxury Shower Cabins'}</li>
              <li>{isAr ? 'الدربزينات وهاندريل الزجاج' : 'Structural Glass Railings'}</li>
              <li>{isAr ? 'القواطع المكتبيّة المعزولة' : 'Acoustic Office Partitions'}</li>
              <li>{isAr ? 'المرايا الديكورية والـ LED' : 'Custom & LED Mirrors'}</li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-base mb-4 border-b border-pms-gold/40 pb-2 inline-block">
              {t('contactInfo')}
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-pms-gold shrink-0 mt-1" />
                <span>{tContact('addressDesc')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-pms-gold shrink-0 " />
                <a dir="ltr"
                href="tel:+201017905067" className="hover:text-pms-gold dir-ltr">+20 101 790 5067</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-pms-gold shrink-0" />
                <a href="mailto:info@pmsglass.com" className="hover:text-pms-gold">info@pmsglass.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-pms-gold shrink-0 mt-1" />
                <span>{tContact('hoursDesc')}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>{t('rights')}</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-gray-400 cursor-pointer">{isAr ? 'الشروط والأحكام' : 'Terms & Conditions'}</span>
            <span className="hover:text-gray-400 cursor-pointer">{isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
