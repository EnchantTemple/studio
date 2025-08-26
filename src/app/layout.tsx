import type { Metadata } from 'next';
import { Alegreya } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn('antialiased font-body', alegreya.variable)}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
