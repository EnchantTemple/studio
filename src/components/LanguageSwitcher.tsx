'use client';

import * as React from 'react';
import { Languages, ChevronDown } from 'lucide-react';
import { locales, localeNames } from '@/navigation';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface LanguageSwitcherProps {
  location: 'header' | 'footer';
}

export function LanguageSwitcher({ location }: LanguageSwitcherProps) {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    const currentLanguageName = localeNames[locale as keyof typeof localeNames];

    const handleLanguageChange = (newLocale: (typeof locales)[number]) => {
      // This will replace the current locale in the pathname with the new one
      const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
      router.push(newPath);
    };

    const renderMenuItem = (lang: (typeof locales)[number]) => (
       <DropdownMenuItem key={lang} onSelect={() => handleLanguageChange(lang)}>
          {localeNames[lang]}
       </DropdownMenuItem>
    )

    if (location === 'footer') {
        return (
             <div className="pt-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="text-sm justify-start p-0 h-auto font-normal text-muted-foreground hover:text-primary transition-colors hover:bg-transparent">
                            {currentLanguageName}
                            <ChevronDown className="w-4 h-4 ml-1" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        {locales.map(renderMenuItem)}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        )
    }

    // Default to header version
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Languages className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Change language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {locales.map(renderMenuItem)}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
