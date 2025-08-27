import type { Metadata } from 'next';
import { Alegreya } from 'next/font/google';
import '../globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { navItems as navItemKeys } from '@/lib/data';
import { TranslationProvider } from '@/context/TranslationContext';


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
  const navT = (key: string) => messages.Navigation[key as keyof typeof messages.Navigation] || key;
  const footerT = (key: string) => messages.Footer[key as keyof typeof messages.Footer] || key;
  
  const navItems = navItemKeys.map(item => ({...item, label: navT(item.label)}));
  
  const footerTranslations = {
    tagline: footerT('tagline'),
    quickLinks: footerT('quickLinks'),
    contactUs: footerT('contactUs'),
    whatsapp: footerT('whatsapp'),
    email: footerT('email'),
    workingHours: footerT('workingHours'),
    newsletter: footerT('newsletter'),
    newsletter_prompt: footerT('newsletter_prompt'),
    subscribe: footerT('subscribe'),
    copyright: footerT('copyright').replace('{year}', new Date().getFullYear().toString()),
    privacyPolicy: footerT('privacyPolicy'),
    refundPolicy: footerT('refundPolicy'),
  };

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className={cn('antialiased font-body', alegreya.variable)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <TranslationProvider initialLocale={locale}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <Header navItems={navItems} bookNowLabel={navT('bookNow')} />
                <main className="flex-grow">{children}</main>
                <Footer navItems={navItems} translations={footerTranslations} />
                <WhatsAppButton />
                <Toaster />
            </ThemeProvider>
          </TranslationProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
