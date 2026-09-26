'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Mail } from 'lucide-react';

interface ContactFormProps {
  isAr: boolean;
  t: (key: string) => string;
}

export function ContactForm({ isAr, t }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceNeeded: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const text = isAr
      ? `📌 *طلب جديد (PMS GLASS)*\n👤 *الاسم:* ${formData.name}\n📞 *الهاتف:* ${formData.phone}\n` +
        (formData.email ? `✉️ *البريد:* ${formData.email}\n` : '') +
        (formData.serviceNeeded ? `🛠️ *الخدمة:* ${formData.serviceNeeded}\n` : '') +
        (formData.message ? `📝 *التفاصيل:* ${formData.message}` : '')
      : `📌 *New Inquiry (PMS GLASS)*\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n` +
        (formData.email ? `✉️ *Email:* ${formData.email}\n` : '') +
        (formData.serviceNeeded ? `🛠️ *Service:* ${formData.serviceNeeded}\n` : '') +
        (formData.message ? `📝 *Message:* ${formData.message}` : '');

    window.open(`https://wa.me/201017905067?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="p-8 md:p-10 rounded-3xl border dark:border-white/10 border-slate-200 dark:bg-pms-card bg-white shadow-2xl space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
        <Mail className="w-6 h-6 text-pms-gold" />
        <span>{t('formTitle')}</span>
      </h2>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
        >
          <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
          <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
            {t('successMsg')}
          </h3>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-gray-300">
                {t('name')} *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t('namePlaceholder')}
                className="w-full py-3 px-4 rounded-xl border dark:border-white/15 border-slate-300 dark:bg-white/5 bg-slate-50 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-pms-gold"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-gray-300">
                {t('phone')} *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder={t('phonePlaceholder')}
                className="w-full py-3 px-4 rounded-xl border dark:border-white/15 border-slate-300 dark:bg-white/5 bg-slate-50 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-pms-gold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-gray-300">
                {t('email')}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t('emailPlaceholder')}
                className="w-full py-3 px-4 rounded-xl border dark:border-white/15 border-slate-300 dark:bg-white/5 bg-slate-50 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-pms-gold"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-gray-300">
                {t('serviceNeeded')}
              </label>
              <select
                value={formData.serviceNeeded}
                onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                className="w-full py-3 px-4 rounded-xl border dark:border-white/15 border-slate-300 dark:bg-white/5 bg-slate-50 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-pms-gold"
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
            <label className="text-xs font-bold text-slate-700 dark:text-gray-300">
              {t('message')}
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t('messagePlaceholder')}
              className="w-full py-3 px-4 rounded-xl border dark:border-white/15 border-slate-300 dark:bg-white/5 bg-slate-50 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-pms-gold"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-pms-gold hover:bg-pms-gold-hover text-black font-extrabold text-sm shadow-gold-glow transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>{t('send')}</span>
          </button>
        </form>
      )}
    </div>
  );
}
