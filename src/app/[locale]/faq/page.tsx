'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function FaqPage() {
  const t = useTranslations('FaqPage');
  const faqs = ['faq1', 'faq2', 'faq3', 'faq4', 'faq5', 'faq6'];

  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">{t('hero_title')}</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto">
            {t('hero_subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faqKey) => (
              <AccordionItem value={faqKey} key={faqKey}>
                <AccordionTrigger className="text-left font-headline text-lg hover:no-underline">
                  {t(`${faqKey}_question`)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {t(`${faqKey}_answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      
      <section className="bg-card py-16 md:py-24 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold font-headline">{t('cta_title')}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('cta_p')}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
              <a href="https://wa.me/1234567890?text=Hello%20SolutionTemple,%20I%20have%20a%20question." target="_blank" rel="noopener noreferrer">
                <MessageCircle /> {t('cta_whatsapp_button')}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:hello@solutiontemple.com">
                <Mail /> {t('cta_email_button')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
