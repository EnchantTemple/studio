'use client';

import Image from 'next/image';
import { Link } from '@/navigation';
import { CheckCircle, Globe, MessageCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { services, testimonials, faqs } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  const highlightedServices = services.slice(0, 3);
  const highlightedTestimonials = testimonials.slice(0, 2);

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
              {t('Hero.title')}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200 text-shadow">
              {t('Hero.subtitle')}
            </p>
            <Button asChild size="lg" className="mt-8 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform">
              <Link href="/book-now">{t('Hero.button')}</Link>
            </Button>
          </div>
        </section>

        <section id="intro" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
                  {t('Intro.title')}
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t('Intro.description')}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center justify-center space-y-2 p-4 border rounded-lg shadow-sm">
                  <CheckCircle className="w-10 h-10 text-accent" />
                  <p className="text-3xl font-bold">{t('Intro.stat1_value')}</p>
                  <p className="text-sm text-muted-foreground">{t('Intro.stat1_label')}</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 p-4 border rounded-lg shadow-sm">
                  <Globe className="w-10 h-10 text-accent" />
                  <p className="text-3xl font-bold">{t('Intro.stat2_value')}</p>
                  <p className="text-sm text-muted-foreground">{t('Intro.stat2_label')}</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 p-4 border rounded-lg shadow-sm">
                  <MessageCircle className="w-10 h-10 text-accent" />
                  <p className="text-3xl font-bold">{t('Intro.stat3_value')}</p>
                  <p className="text-sm text-muted-foreground">{t('Intro.stat3_label')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="text-primary border-primary">{t('Services.badge')}</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{t('Services.title')}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t('Services.subtitle')}
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              {highlightedServices.map((service) => {
                const serviceKey = service.name.toLowerCase().replace(/ /g, '_');
                return (
                <Card key={service.name} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src={service.imageUrl}
                    alt={t(`Services.${serviceKey}_name` as any)}
                    data-ai-hint={service.dataAiHint}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="font-headline">{t(`Services.${serviceKey}_name` as any)}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 flex-grow">
                    <p className="text-muted-foreground">{t(`Services.${serviceKey}_desc` as any)}</p>
                    <p className="text-sm font-semibold text-primary">{t(`Services.${serviceKey}_delivery` as any)}</p>
                  </CardContent>
                   <CardFooter>
                    <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link href="/book-now">{t('Services.button')}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              )})}
            </div>
            <div className="flex justify-center">
              <Button asChild variant="outline">
                <Link href="/services">{t('Services.viewAllButton')}</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">{t('Testimonials.title')}</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t('Testimonials.subtitle')}
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 lg:grid-cols-2 gap-8">
              {highlightedTestimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={t(`Testimonials.testimonial${index + 1}_name` as any)} />
                        <AvatarFallback>{t(`Testimonials.testimonial${index + 1}_name` as any).charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{t(`Testimonials.testimonial${index + 1}_name` as any)}</p>
                        <p className="text-sm text-muted-foreground">{t(`Testimonials.testimonial${index + 1}_location` as any)}</p>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent fill-accent' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <blockquote className="text-lg italic text-foreground">&quot;{t(`Testimonials.testimonial${index + 1}_quote` as any)}&quot;</blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="mt-8">
              <Button asChild>
                <Link href="/testimonials">{t('Testimonials.readMoreButton')}</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-4xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{t('FAQ.title')}</h2>
              <p className="mt-4 max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t('FAQ.subtitle')}
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.slice(0, 5).map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left font-headline text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link href="/faq">{t('FAQ.moreQuestionsButton')}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}