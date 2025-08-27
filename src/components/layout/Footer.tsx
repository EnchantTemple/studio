import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ShieldCheck, Mail, MessageCircle } from 'lucide-react';
import { Link } from '@/navigation';
import { LanguageSwitcher } from '../LanguageSwitcher';
import type { NavItem } from '@/lib/types';


interface FooterProps {
    navItems: NavItem[];
    translations: {
        tagline: string;
        quickLinks: string;
        contactUs: string;
        whatsapp: string;
        email: string;
        workingHours: string;
        newsletter: string;
        newsletter_prompt: string;
        subscribe: string;
        copyright: string;
        privacyPolicy: string;
        refundPolicy: string;
    }
}

export function Footer({ navItems, translations: t }: FooterProps) {
  
  return (
    <footer className="bg-card text-card-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-headline font-semibold">SolutionTemple</h3>
            <p className="text-sm text-muted-foreground">
              {t.tagline}
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
            <h4 className="font-semibold font-headline">{t.quickLinks}</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold font-headline">{t.contactUs}</h4>
             <ul className="space-y-2">
              <li>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.whatsapp}</span>
                </a>
              </li>
               <li>
                <a href="mailto:hello@solutiontemple.com" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>{t.email}</span>
                </a>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">{t.workingHours}</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold font-headline">{t.newsletter}</h4>
            <p className="text-sm text-muted-foreground">{t.newsletter_prompt}</p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="flex-1" />
              <Button type="submit" variant="secondary">{t.subscribe}</Button>
            </form>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">{t.copyright}</p>
          <div className="flex items-center space-x-4">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t.privacyPolicy}
            </Link>
            <Link href="/refund-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t.refundPolicy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
