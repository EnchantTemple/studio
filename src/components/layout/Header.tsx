'use client';

import { Link, usePathname } from '@/navigation';
import { Menu, Sparkles, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageSwitcher } from '../LanguageSwitcher';
import type { NavItem } from '@/lib/types';


interface HeaderProps {
    navItems: NavItem[];
}

export function Header({ navItems }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();
  const locale = useLocale();
  const t = useTranslations('Navigation');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-bold inline-block font-headline text-lg">
            SolutionTemple
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = item.href === '/' ? currentPath === '/' : currentPath.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-primary',
                  isActive ? 'text-primary' : 'text-foreground/60'
                )}
              >
                {t(item.label)}
              </Link>
            )
          })}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <LanguageSwitcher location="header" />
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/book-now">{t('bookNow')}</Link>
          </Button>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link
                href="/"
                className="mr-6 flex items-center space-x-2 mb-6"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="font-bold inline-block font-headline text-lg">
                  SolutionTemple
                </span>
              </Link>
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => {
                  const isActive = item.href === '/' ? currentPath === '/' : currentPath.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                          "transition-colors hover:text-primary py-2",
                          isActive ? "text-primary font-semibold" : "text-foreground/70"
                      )}
                    >
                      {t(item.label)}
                    </Link>
                  )
                })}
              </div>
               <Button asChild className="mt-6 w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => setIsMenuOpen(false)}>
                 <Link href="/book-now">{t('bookNow')}</Link>
               </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
