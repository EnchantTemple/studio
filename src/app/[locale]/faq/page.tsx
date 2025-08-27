'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle } from 'lucide-react';
import { getFaqs } from '@/lib/data';
import { useEffect, useState } from 'react';
import type { FaqItem } from '@/lib/types';
import { useTranslation } from '@/hooks/useTranslation';

export default function FaqPage() {
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const { translate } = useTranslation();
  const [content, setContent] = useState({
      hero_title: 'Frequently Asked Questions',
      hero_subtitle: 'Find answers to common questions about our services, spells, and process.',
      cta_title: 'Still Have Questions?',
      cta_p: "If you can't find the answer you're looking for, please don't hesitate to reach out to us directly.",
      cta_whatsapp_button: 'Chat on WhatsApp',
      cta_email_button: 'Email Us',
  });

  useEffect(() => {
    const fetchFaqs = async () => {
      const allFaqs = getFaqs();
      setFaqs(allFaqs);
    };
    fetchFaqs();
  }, []);

  useEffect(() => {
    const translateContent = async () => {
        setContent({
            hero_title: translate('FaqPage.hero_title', 'Frequently Asked Questions'),
            hero_subtitle: translate('FaqPage.hero_subtitle', 'Find answers to common questions about our services, spells, and process.'),
            cta_title: translate('FaqPage.cta_title', 'Still Have Questions?'),
            cta_p: translate('FaqPage.cta_p', "If you can't find the answer you're looking for, please don't hesitate to reach out to us directly."),
            cta_whatsapp_button: translate('FaqPage.cta_whatsapp_button', 'Chat on WhatsApp'),
            cta_email_button: translate('FaqPage.cta_email_button', 'Email Us'),
        });
    }
    translateContent();
  }, [translate]);

  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">{content.hero_title}</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto">
            {content.hero_subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left font-headline text-lg hover:no-underline">
                  {translate(`FaqPage.faq${index+1}_question`, faq.question)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {translate(`FaqPage.faq${index+1}_answer`, faq.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      
      <section className="bg-card py-16 md:py-24 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold font-headline">{content.cta_title}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {content.cta_p}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
              <a href="https://wa.me/1234567890?text=Hello%20SolutionTemple,%20I%20have%20a%20question." target="_blank" rel="noopener noreferrer">
                <MessageCircle /> {content.cta_whatsapp_button}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:hello@solutiontemple.com">
                <Mail /> {content.cta_email_button}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
