import React from 'react';
import type { Metadata } from 'next';
import { Cairo, Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import '../globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PMS GLASS | Specialized Architectural Glass & Aluminum Solutions',
  description: 'Tempered glass, structural glass facades, luxury shower enclosures, glass railings, interior partitions, and bespoke LED mirrors.',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

const locales = ['ar', 'en'];

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) {
    notFound();
  }

  const isAr = locale === 'ar';
  const dir = isAr ? 'rtl' : 'ltr';
  const fontClass = isAr ? cairo.variable : inter.variable;

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} dir={dir} className={`${fontClass} suppressHydrationWarning`}>
      <body className={`font-${isAr ? 'cairo' : 'inter'} antialiased min-h-screen flex flex-col bg-pms-lightBg dark:bg-pms-bg text-pms-lightText dark:text-gray-100 transition-colors duration-300`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <Navbar locale={locale as 'ar' | 'en'} />
            <main className="flex-1">{children}</main>
            <Footer locale={locale as 'ar' | 'en'} />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
