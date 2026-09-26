'use client';

import React from 'react';
import { PhoneCall, MessageSquare, MapPin, Clock } from 'lucide-react';

interface ContactChannelsProps {
  t: (key: string) => string;
}

export function ContactChannels({ t }: ContactChannelsProps) {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-3xl border dark:border-white/10 border-slate-200 dark:bg-pms-card bg-white shadow-xl space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {t('directContact')}
        </h3>

        <a
          href="tel:+201017905067"
          className="flex items-center gap-4 p-4 rounded-2xl border dark:border-white/10 border-slate-200 dark:bg-white/5 bg-slate-50 hover:border-pms-gold transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-pms-gold text-black flex items-center justify-center font-bold">
            <PhoneCall className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">{t('phoneCallTitle')}</h4>
            <span className="text-xs text-pms-gold font-bold dir-ltr">01017905067</span>
          </div>
        </a>

        <a
          href="https://wa.me/201017905067"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">{t('whatsappTitle')}</h4>
            <span className="text-xs text-emerald-500 font-bold">{t('whatsappDesc')}</span>
          </div>
        </a>
      </div>

      <div className="p-6 rounded-3xl border dark:border-white/10 border-slate-200 dark:bg-pms-card bg-white shadow-xl space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-pms-gold shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">{t('addressTitle')}</h4>
            <p className="text-xs text-slate-600 dark:text-gray-400 mt-1">{t('addressDesc')}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 pt-2 border-t dark:border-white/10 border-slate-200">
          <Clock className="w-5 h-5 text-pms-gold shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">{t('hoursTitle')}</h4>
            <p className="text-xs text-slate-600 dark:text-gray-400 mt-1">{t('hoursDesc')}</p>
          </div>
        </div>
      </div>

      <div className="relative h-48 rounded-3xl overflow-hidden border dark:border-white/10 border-slate-200 shadow-md">
        <iframe
          title="PMS GLASS Location Map"
          src='https://www.google.com/maps/search/?api=1&query=1+Lamar+Street+Al+Qanal+Market+Gesr+El+Suez+Joseph+Tito+Cairo'
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'contrast(1.2) opacity(0.85)' }}
          allowFullScreen={false}
          loading="lazy"
        />
      </div>
    </div>
  );
}
