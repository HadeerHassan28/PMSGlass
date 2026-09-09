'use client';

import React, { useState } from 'react';
import { usePathname, Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Menu, X, PhoneCall } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileNavDrawer } from './MobileNavDrawer';

interface NavbarProps {
  locale: 'ar' | 'en';
}

export function Navbar({ locale }: NavbarProps) {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAr = locale === 'ar';

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/services', label: t('services') },
    { href: '/projects', label: t('projects') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl border-b transition-colors duration-300 dark:bg-pms-bg/85 dark:border-white/10 bg-white/90 border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pms-gold to-amber-600 flex items-center justify-center text-black font-extrabold text-xl shadow-gold-glow">
              P
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider text-slate-900 dark:text-white group-hover:text-pms-gold transition-colors">
                PMS <span className="text-pms-gold">GLASS</span>
              </span>
              <span className="text-[10px] text-slate-500 dark:text-gray-400 -mt-1 font-semibold uppercase tracking-widest">
                {isAr ? 'الحلول المعمارية للزجاج' : 'Architectural Glass'}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative ${
                    isActive
                      ? 'text-pms-gold dark:text-pms-gold font-bold'
                      : 'text-slate-700 dark:text-gray-300 hover:text-pms-gold dark:hover:text-pms-gold'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full bg-pms-gold/10 dark:bg-pms-gold/15 border border-pms-gold/30 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Controls */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <LanguageSwitcher locale={locale} />

            <a
              href="tel:+966500000000"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-pms-gold hover:bg-pms-gold-hover text-black font-bold text-xs shadow-gold-glow transition-all duration-300"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{t('callUs')}</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border dark:border-white/15 dark:bg-white/5 border-slate-300 bg-slate-100 text-slate-800 dark:text-white"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      <MobileNavDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        pathname={pathname}
        navLinks={navLinks}
        locale={locale}
        callUsText={t('callUs')}
      />
    </header>
  );
}
