'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, MessageSquare, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from '@/navigation';

interface ContactSectionProps {
  locale: 'ar' | 'en';
}

export function ContactSection({ locale }: ContactSectionProps) {
  const isAr = locale === 'ar';

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl p-8 md:p-12 overflow-hidden border dark:border-pms-gold/30 border-pms-gold/40 bg-gradient-to-r dark:from-pms-card dark:to-pms-bg from-slate-900 to-slate-800 text-white shadow-2xl"
        >
          {/* Glowing Background Overlay */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-pms-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pms-gold/20 text-pms-gold border border-pms-gold/30 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>{isAr ? 'استشارة هندسية ومقاسات مجانية' : 'Free Engineering Specs & Measurements'}</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                {isAr
                  ? 'جاهز لبدء مشروعك الزجاجي بالمواصفات القياسية؟'
                  : 'Ready to Start Your Architectural Glass Project?'}
              </h2>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
                {isAr
                  ? 'فريق المهندسين والفنيين في PMS GLASS جاهز لمساعدتك في اختيار أفضل درجات العزل والتصميم المناسب لمشروعك السكني أو التجاري.'
                  : 'Our team of engineers and technicians at PMS GLASS is ready to assist you in selecting the ideal glass insulation and framing for your villa or tower.'}
              </p>
            </div>

            {/* Right Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-emerald-600/30"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{isAr ? 'محادثة واتساب مباشرة' : 'Direct WhatsApp Chat'}</span>
              </a>

              <a
                href="tel:+966500000000"
                className="w-full py-4 px-6 rounded-2xl bg-pms-gold hover:bg-pms-gold-hover text-black font-bold text-sm transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-pms-gold/20"
              >
                <PhoneCall className="w-5 h-5" />
                <span>{isAr ? 'اتصل بنا الآن +966500000000' : 'Call Us Now +966500000000'}</span>
              </a>

              <Link
                href="/contact"
                className="w-full py-3 px-6 rounded-2xl border border-white/20 hover:border-white text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>{isAr ? 'الانتقال لصفحة التواصل' : 'Go to Contact Page'}</span>
                {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
