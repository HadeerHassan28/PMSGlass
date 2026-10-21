'use client';

import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.35 0 .69.06 1 .17V9.45a6.38 6.38 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.71a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.21 8.21 0 0 0 4.91 1.62V6.88a4.85 4.85 0 0 1-1-.19z" />
    </svg>
  );
}

interface SocialItem {
  name: string;
  href: string;
  ariaLabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

const socialChannels: SocialItem[] = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    ariaLabel: 'Visit PMS GLASS on Facebook',
    icon: Facebook,
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com',
    ariaLabel: 'Visit PMS GLASS on TikTok',
    icon: TikTokIcon,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    ariaLabel: 'Visit PMS GLASS on Instagram',
    icon: Instagram,
  },
];

export function FooterSocialLinks() {
  return (
    <div className="flex items-center gap-3 pt-3">
      {socialChannels.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.ariaLabel}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-pms-gold/30 dark:bg-white/5 bg-slate-100 text-slate-800 dark:text-gray-300 hover:bg-pms-gold hover:text-pms-lightBg dark:hover:text-pms-gold-hover hover:border-pms-gold transition-all duration-300 shadow-sm"
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
}
