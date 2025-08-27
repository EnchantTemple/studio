import type { Metadata } from 'next';
import { Alegreya } from 'next/font/google';
import '../globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import {NextIntlClientProvider, useMessages} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import { navItems as navItemKeys } from '@/lib/data';


const alegreya = Alegreya({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: {
    default: 'SolutionTemple - Restore Your Love Today',
    template: '%s | SolutionTemple',
  },
  description: 'A sanctuary where love, energy, and intention align. Licensed spiritual consultant with over 12 years of experience in ethical spell casting to reunite souls.',
  keywords: ['love spell', 'spiritual consultant', 'reunite lovers', 'energy healing', 'relationship help'],
};

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = await getMessages();
  const t = await getTranslations({locale, namespace: 'Navigation'});
  const tFooter = await getTranslations({locale, namespace: 'Footer'});

  const navItems = navItemKeys.map(item => ({...item, label: t(item.label as any)}));
  
  const footerTranslations = {
    tagline: tFooter('tagline'),
    quickLinks: tFooter('quickLinks'),
    contactUs: tFooter('contactUs'),
    whatsapp: tFooter('whatsapp'),
    email: tFooter('email'),
    workingHours: tFooter('workingHours'),
    newsletter: tFooter('newsletter'),
    newsletter_prompt: tFooter('newsletter_prompt'),
    subscribe: tFooter('subscribe'),
    copyright: tFooter('copyright', {year: new Date().getFullYear()}),
    privacyPolicy: tFooter('privacyPolicy'),
    refundPolicy: tFooter('refundPolicy'),
    bookNow: t('bookNow')
  };

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className={cn('antialiased font-body', alegreya.variable)}>
       <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
          >
            <Header navItems={navItems} bookNowLabel={t('bookNow')} />
            <main className="flex-grow">{children}</main>
            <Footer navItems={navItems} translations={footerTranslations} />
            <WhatsAppButton />
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
