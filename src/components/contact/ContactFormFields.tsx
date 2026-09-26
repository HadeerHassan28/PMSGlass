'use client';

import React from 'react';

interface ContactFormFieldsProps {
  formData: {
    name: string;
    phone: string;
    email: string;
    serviceNeeded: string;
    message: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    name: string;
    phone: string;
    email: string;
    serviceNeeded: string;
    message: string;
  }>>;
  isAr: boolean;
  t: (key: string) => string;
}

export function ContactFormFields({ formData, setFormData, isAr, t }: ContactFormFieldsProps) {
  const inputStyle =
    'w-full py-3 px-4 rounded-xl border dark:border-white/15 border-slate-300 dark:bg-white/5 bg-slate-50 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-pms-gold';

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 dark:text-gray-300">{t('name')} *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={t('namePlaceholder')}
            className={inputStyle}
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 dark:text-gray-300">{t('phone')} *</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder={t('phonePlaceholder')}
            className={inputStyle}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 dark:text-gray-300">{t('email')}</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={t('emailPlaceholder')}
            className={inputStyle}
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 dark:text-gray-300">{t('serviceNeeded')}</label>
          <select
            value={formData.serviceNeeded}
            onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
            className={inputStyle}
          >
            <option value="">{t('selectService')}</option>
            <option value="facades">{isAr ? 'الواجهات الزجاجية' : 'Glass Facades'}</option>
            <option value="showers">{isAr ? 'كبائن الشاور' : 'Shower Cabins'}</option>
            <option value="railings">{isAr ? 'الدربزينات الزجاجية' : 'Glass Railings'}</option>
            <option value="partitions">{isAr ? 'الفواصل المكتبية' : 'Office Partitions'}</option>
            <option value="mirrors">{isAr ? 'المرايا الديكورية' : 'Custom Mirrors'}</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold text-slate-700 dark:text-gray-300">{t('message')}</label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={t('messagePlaceholder')}
          className={inputStyle}
        />
      </div>
    </>
  );
}
