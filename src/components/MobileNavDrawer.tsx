'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
import { Link } from '@/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
  navLinks: NavLink[];
  locale: 'ar' | 'en';
  callUsText: string;
}

export function MobileNavDrawer({
  isOpen,
  onClose,
  pathname,
  navLinks,
  locale,
  callUsText,
}: MobileNavDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-b dark:border-white/10 dark:bg-pms-card bg-white px-4 pt-4 pb-6 space-y-3"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-pms-gold text-black font-bold'
                      : 'text-slate-800 dark:text-gray-200 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t dark:border-white/10 border-slate-200 flex flex-col gap-3">
            <div className="w-full flex justify-center">
              <LanguageSwitcher locale={locale} />
            </div>

            <a
              href="tel:+966500000000"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-pms-gold text-black font-bold text-sm shadow-md"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{callUsText}</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
