'use client';

import * as React from 'react';
import { Languages } from 'lucide-react';

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
    const handleLanguageChange = (langCode: string) => {
        // Basic implementation detail:
        // In a real-world scenario, this would integrate with a library like 'next-intl'
        // or trigger a client-side translation service.
        // For this prototype, we can alert the user of the selection.
        alert(`Language selected: ${langCode}. Translation integration is required to see changes.`);
        console.log(`Switching language to ${langCode}`);
    };

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
