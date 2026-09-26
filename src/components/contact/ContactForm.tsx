'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail } from 'lucide-react';
import { ContactFormFields } from './ContactFormFields';

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

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(result.error || (isAr ? 'حدث خطأ أثناء الإرسال' : 'Failed to send message'));
      }
    } catch (err: any) {
      setErrorMsg(isAr ? 'عذراً، يتعذر الاتصال بالخادم' : 'Network error. Please try again.');
    } finally {
      setLoading(false);
    }
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
          {errorMsg && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <ContactFormFields
            formData={formData}
            setFormData={setFormData}
            isAr={isAr}
            t={t}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-pms-gold hover:bg-pms-gold-hover text-black font-extrabold text-sm shadow-gold-glow transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            <span>{loading ? (isAr ? 'جاري الإرسال...' : 'Sending...') : t('send')}</span>
          </button>
        </form>
      )}
    </div>
  );
}
