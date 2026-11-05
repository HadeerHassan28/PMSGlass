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
    href: 'https://www.facebook.com/share/1F2YRjqCEC/?mibextid=wwXIfr',
    ariaLabel: 'Visit PMS GLASS on Facebook',
    icon:(props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@pmsglass?_r=1&_t=ZS-9AuCTCEl8GC',
    ariaLabel: 'Visit PMS GLASS on TikTok',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/pmsglass?exln=MW56ODV2ajl1bmRkbg==',
    ariaLabel: 'Visit PMS GLASS on Instagram',
    icon:(props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/company/pms-glass',
    ariaLabel: 'Visit PMS GLASS on linkedin',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
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
