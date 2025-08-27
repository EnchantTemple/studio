import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from 'next-intl/navigation';

export const locales = ['en', 'es', 'pt', 'it', 'fr', 'de', 'zh-CN'] as const;
export const localePrefix = 'always'; // Default

// The `pathnames` object holds pairs of internal names and translated paths for each locale.
// The internal name is used to render links, and the translated paths are used for the URL.
export const pathnames = {
  // If all locales use the same path, you can use a single string
  '/': '/',
  '/about': '/about',
  '/blog': '/blog',
  '/contact': '/contact',
  '/faq': '/faq',
  '/privacy-policy': '/privacy-policy',
  '/refund-policy': '/refund-policy',
  '/services': '/services',
  '/testimonials': '/testimonials',
  '/book-now': '/book-now',

  // If you have dynamic routes, you can use dynamic params
  // and then use `dynamic()` to generate the pathnames for each page
  '/blog/[slug]': '/blog/[slug]',
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });

export const localeNames: Record<(typeof locales)[number], string> = {
  'en': 'English',
  'es': 'Spanish',
  'pt': 'Portuguese (Brazil)',
  'it': 'Italian',
  'fr': 'French',
  'de': 'German',
  'zh-CN': 'Chinese'
};