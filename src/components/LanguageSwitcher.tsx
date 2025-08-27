'use client';

import * as React from 'react';
import { Languages, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'pt', name: 'Portuguese (Brazil)' },
    { code: 'it', name: 'Italian' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'zh-CN', name: 'Chinese' },
];

export function LanguageSwitcher() {
    const pathname = usePathname();

    const handleLanguageChange = (langCode: string) => {
        // Basic implementation detail:
        // In a real-world scenario, this would integrate with a library like 'next-intl'
        // or trigger a client-side translation service.
        // For this prototype, we can alert the user of the selection.
        alert(`Language selected: ${langCode}. Translation integration is required to see changes.`);
        console.log(`Switching language to ${langCode}`);
    };

    // In a real app, you'd get this from your i18n solution
    const [currentLanguage, setCurrentLanguage] = React.useState(languages[0]); 

    // This is a simple heuristic to detect if we're rendering in the footer.
    // A more robust solution could involve a context provider.
    const isFooter = pathname !== '/';

    if (isFooter) {
        return (
             <div className="pt-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="text-sm justify-start p-0 h-auto font-normal text-muted-foreground hover:text-primary transition-colors hover:bg-transparent">
                            {currentLanguage.name}
                            <ChevronDown className="w-4 h-4 ml-1" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        {languages.map((lang) => (
                            <DropdownMenuItem key={lang.code} onClick={() => {
                                handleLanguageChange(lang.code);
                                setCurrentLanguage(lang);
                            }}>
                                {lang.name}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        )
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Languages className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Change language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {languages.map((lang) => (
                    <DropdownMenuItem key={lang.code} onClick={() => handleLanguageChange(lang.code)}>
                        {lang.name}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
