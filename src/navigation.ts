import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
export const locales = ['en', 'es', 'pt', 'it', 'fr', 'de', 'zh-CN'] as const;
export const localePrefix = 'always'; // Default
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales, localePrefix});

export const localeNames: Record<(typeof locales)[number], string> = {
    'en': 'English',
    'es': 'Spanish',
    'pt': 'Portuguese (Brazil)',
    'it': 'Italian',
    'fr': 'French',
    'de': 'German',
    'zh-CN': 'Chinese'
};
