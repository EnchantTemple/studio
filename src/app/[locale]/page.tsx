
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Globe, MessageCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getServices, getTestimonials, getFaqs } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useState, useEffect } from 'react';
import type { Service, Testimonial, FaqItem } from '@/lib/types';
import { useTranslation } from '@/hooks/useTranslation';


export default function Home() {
  const [highlightedServices, setHighlightedServices] = useState<Service[]>([]);
  const [highlightedTestimonials, setHighlightedTestimonials] = useState<Testimonial[]>([]);
  const [faqs, setFaqs] = useState<FaqItem[]>([]);

  const { translate, language } = useTranslation();
  const [content, setContent] = useState({
      Hero: {
          title: 'Restore Your Love Today 🌹',
          subtitle: 'A sanctuary where love, energy, and intention align to reunite you with your true partner.',
          button: 'Book Your Spell Now'
      },
      Intro: {
          title: 'Welcome to SolutionTemple',
          description: 'I’m a licensed spiritual consultant with over 12 years of experience helping souls reunite with their true partners through ancient, ethical, and natural spell casting.',
          stat1_value: '1200+',
          stat1_label: 'Happy Clients',
          stat2_value: '20+',
          stat2_label: 'Countries Served',
          stat3_value: '24/7',
          stat3_label: 'WhatsApp Support'
      },
      Services: {
          badge: 'Our Services',
          title: 'Spells for Every Heart\'s Need',
          subtitle: 'Each ritual is performed with utmost care, personalized to your unique situation.',
          button: 'Book This Spell',
          viewAllButton: 'View All Services'
      },
      Testimonials: {
          title: 'Trusted by Souls Worldwide',
          subtitle: 'Read what my clients have to say about their experiences.',
          readMoreButton: 'Read More Testimonials'
      },
      FAQ: {
          title: 'Frequently Asked Questions',
          subtitle: 'Find quick answers to common questions about our spiritual services.',
          moreQuestionsButton: 'More Questions?'
      }
  });

  useEffect(() => {
    const fetchAndSetData = async () => {
      const allServices = getServices();
      setHighlightedServices(allServices.slice(0, 3));
      
      const allTestimonials = getTestimonials();
      setHighlightedTestimonials(allTestimonials.slice(0, 2));

      const allFaqs = getFaqs();
      setFaqs(allFaqs.slice(0, 5));
    };
    
    fetchAndSetData();
  }, []);

  useEffect(() => {
    const translateContent = () => {
        const translatedContent = {
            Hero: {
                title: translate('HomePage.Hero.title', 'Restore Your Love Today 🌹'),
                subtitle: translate('HomePage.Hero.subtitle', 'A sanctuary where love, energy, and intention align to reunite you with your true partner.'),
                button: translate('HomePage.Hero.button', 'Book Your Spell Now')
            },
            Intro: {
                title: translate('HomePage.Intro.title', 'Welcome to SolutionTemple'),
                description: translate('HomePage.Intro.description', 'I’m a licensed spiritual consultant with over 12 years of experience helping souls reunite with their true partners through ancient, ethical, and natural spell casting.'),
                stat1_value: translate('HomePage.Intro.stat1_value', '1200+'),
                stat1_label: translate('HomePage.Intro.stat1_label', 'Happy Clients'),
                stat2_value: translate('HomePage.Intro.stat2_value', '20+'),
                stat2_label: translate('HomePage.Intro.stat2_label', 'Countries Served'),
                stat3_value: translate('HomePage.Intro.stat3_value', '24/7'),
                stat3_label: translate('HomePage.Intro.stat3_label', 'WhatsApp Support')
            },
            Services: {
                badge: translate('HomePage.Services.badge', 'Our Services'),
                title: translate('HomePage.Services.title', 'Spells for Every Heart\'s Need'),
                subtitle: translate('HomePage.Services.subtitle', 'Each ritual is performed with utmost care, personalized to your unique situation.'),
                button: translate('HomePage.Services.button', 'Book This Spell'),
                viewAllButton: translate('HomePage.Services.viewAllButton', 'View All Services')
            },
            Testimonials: {
                title: translate('HomePage.Testimonials.title', 'Trusted by Souls Worldwide'),
                subtitle: translate('HomePage.Testimonials.subtitle', 'Read what my clients have to say about their experiences.'),
                readMoreButton: translate('HomePage.Testimonials.readMoreButton', 'Read More Testimonials')
            },
            FAQ: {
                title: translate('HomePage.FAQ.title', 'Frequently Asked Questions'),
                subtitle: translate('HomePage.FAQ.subtitle', 'Find quick answers to common questions about our spiritual services.'),
                moreQuestionsButton: translate('HomePage.FAQ.moreQuestionsButton', 'More Questions?')
            }
        };
        setContent(translatedContent);
    };
    translateContent();
  }, [translate]);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white">
          <Image
            src="https://picsum.photos/1920/1080"
            alt="Mystical background with candles and stars"
            data-ai-hint="spiritual candles"
            fill
            className="object-cover -z-10"
            priority
          />
          <div className="absolute inset-0 bg-black/60 -z-10" />
          <div className="container px-4 md:px-6 z-10 animate-fade-in-up">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline text-shadow-lg">
              {content.Hero.title}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200 text-shadow">
              {content.Hero.subtitle}
            </p>
            <Button asChild size="lg" className="mt-8 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform">
              <Link href={`/${language}/book-now`}>{content.Hero.button}</Link>
            </Button>
          </div>
        </section>

        <section id="intro" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
                  {content.Intro.title}
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {content.Intro.description}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center justify-center space-y-2 p-4 border rounded-lg shadow-sm">
                  <CheckCircle className="w-10 h-10 text-accent" />
                  <p className="text-3xl font-bold">{content.Intro.stat1_value}</p>
                  <p className="text-sm text-muted-foreground">{content.Intro.stat1_label}</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 p-4 border rounded-lg shadow-sm">
                  <Globe className="w-10 h-10 text-accent" />
                  <p className="text-3xl font-bold">{content.Intro.stat2_value}</p>
                  <p className="text-sm text-muted-foreground">{content.Intro.stat2_label}</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 p-4 border rounded-lg shadow-sm">
                  <MessageCircle className="w-10 h-10 text-accent" />
                  <p className="text-3xl font-bold">{content.Intro.stat3_value}</p>
                  <p className="text-sm text-muted-foreground">{content.Intro.stat3_label}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="text-primary border-primary">{content.Services.badge}</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{content.Services.title}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {content.Services.subtitle}
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              {highlightedServices.map((service) => (
                <Card key={service.key} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src={service.imageUrl}
                    alt={service.name}
                    data-ai-hint={service.dataAiHint}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="font-headline">{translate(`HomePage.Services.${service.key}_name`, service.name)}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 flex-grow">
                    <p className="text-muted-foreground">{translate(`HomePage.Services.${service.key}_desc`, service.description)}</p>
                    <p className="text-sm font-semibold text-primary">{translate(`HomePage.Services.${service.key}_delivery`, service.delivery)}</p>
                  </CardContent>
                   <CardFooter>
                    <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link href={`/${language}/book-now`}>{content.Services.button}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Button asChild variant="outline">
                <Link href={`/${language}/services`}>{content.Services.viewAllButton}</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">{content.Testimonials.title}</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {content.Testimonials.subtitle}
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 lg:grid-cols-2 gap-8">
              {highlightedTestimonials.map((testimonial, index) => (
                <Card key={testimonial.key}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{translate(`TestimonialsPage.testimonial${index+1}_name`, testimonial.name)}</p>
                        <p className="text-sm text-muted-foreground">{translate(`TestimonialsPage.testimonial${index+1}_location`, testimonial.location)}</p>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent fill-accent' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <blockquote className="text-lg italic text-foreground">&quot;{translate(`TestimonialsPage.testimonial${index+1}_quote`, testimonial.quote)}&quot;</blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="mt-8">
              <Button asChild>
                <Link href={`/${language}/testimonials`}>{content.Testimonials.readMoreButton}</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-4xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{content.FAQ.title}</h2>
              <p className="mt-4 max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {content.FAQ.subtitle}
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={faq.key}>
                  <AccordionTrigger className="text-left font-headline text-lg hover:no-underline">
                    {translate(`FaqPage.faq${index+1}_question`, faq.question)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {translate(`FaqPage.faq${index+1}_answer`, faq.answer)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link href={`/${language}/faq`}>{content.FAQ.moreQuestionsButton}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
