
import type { Metadata } from 'next';
import { Alegreya } from 'next/font/google';
import '../globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { navItems } from '@/lib/data';
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
  description:
    'A sanctuary where love, energy, and intention align. Licensed spiritual consultant with over 12 years of experience in ethical spell casting to reunite souls.',
  keywords: [
    'love spell',
    'spiritual consultant',
    'reunite lovers',
    'energy healing',
    'relationship help',
  ],
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className={cn('antialiased font-body', alegreya.variable)}>
          <TranslationProvider initialLocale={locale}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header navItems={navItems} />
              <main className="flex-grow">{children}</main>
              <Footer navItems={navItems} />
              <WhatsAppButton />
              <Toaster />
            </ThemeProvider>
          </TranslationProvider>
      </body>
    </html>
  );
}
