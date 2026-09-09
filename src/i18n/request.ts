import { getRequestConfig } from 'next-intl/server';

const locales = ['ar', 'en'];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale: string | undefined;

  try {
    locale = await requestLocale;
  } catch (err) {
    locale = 'ar';
  }

  if (!locale || !locales.includes(locale as any)) {
    locale = 'ar';
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
