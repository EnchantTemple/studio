'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ShieldCheck, Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { LanguageSwitcher } from '../LanguageSwitcher';
import type { NavItem } from '@/lib/types';
import { useTranslation } from '@/hooks/useTranslation';

interface FooterProps {
    navItems: NavItem[];
}

export function Footer({ navItems }: FooterProps) {
  const { translate, language } = useTranslation();
  
  return (
    <footer className="bg-card text-card-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-headline font-semibold">SolutionTemple</h3>
            <p className="text-sm text-muted-foreground">
              {translate('Footer.tagline', "A sanctuary where love, energy, and intention align for your spiritual well-being.")}
            </p>
            <LanguageSwitcher location="footer" />
            <div className="flex space-x-2 pt-2">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                <span className="text-xs text-muted-foreground">Google Safe Browsing</span>
            </div>
             <div className="flex space-x-2">
                <ShieldCheck className="h-5 w-5 text-blue-600" />
                <span className="text-xs text-muted-foreground">DMCA Protected</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold font-headline">{translate('Footer.quickLinks', 'Quick Links')}</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={`/${language}${item.href === '/' ? '' : item.href}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {translate(`Navigation.${item.label}`, item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold font-headline">{translate('Footer.contactUs', 'Contact Us')}</h4>
             <ul className="space-y-2">
              <li>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>{translate('Footer.whatsapp', 'WhatsApp Live Chat')}</span>
                </a>
              </li>
               <li>
                <a href="mailto:hello@solutiontemple.com" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>{translate('Footer.email', 'hello@solutiontemple.com')}</span>
                </a>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">{translate('Footer.workingHours', '24/7 Remote Spell Work')}</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold font-headline">{translate('Footer.newsletter', 'Newsletter')}</h4>
            <p className="text-sm text-muted-foreground">{translate('Footer.newsletter_prompt', 'Subscribe for spiritual insights and offers.')}</p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="flex-1" />
              <Button type="submit" variant="secondary">{translate('Footer.subscribe', 'Subscribe')}</Button>
            </form>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">{translate('Footer.copyright', `© ${new Date().getFullYear()} SolutionTemple. All Rights Reserved.`).replace('{year}', new Date().getFullYear().toString())}</p>
          <div className="flex items-center space-x-4">
            <Link href={`/${language}/privacy-policy`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {translate('Footer.privacyPolicy', 'Privacy Policy')}
            </Link>
            <Link href={`/${language}/refund-policy`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {translate('Footer.refundPolicy', 'Refund Policy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
