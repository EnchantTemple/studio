'use client';
import { Link } from '@/navigation';
import Image from 'next/image';
import { getServices } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import type { Service } from '@/lib/types';
import { useTranslation } from '@/hooks/useTranslation';


export default function ServicesPage() {
  const t = useTranslations('ServicesPage');
  const tServices = useTranslations('HomePage.Services');
  const tNav = useTranslations('Navigation');
  const [services, setServices] = useState<Service[]>([]);
  const { translate } = useTranslation();
    const [content, setContent] = useState({
    hero_title: t('hero_title'),
    hero_subtitle: t('hero_subtitle'),
    includes_title: t('includes_title'),
    includes_p: t('includes_p'),
    include1_title: t('include1_title'),
    include1_desc: t('include1_desc'),
    include2_title: t('include2_title'),
    include2_desc: t('include2_desc'),
    include3_title: t('include3_title'),
    include3_desc: t('include3_desc'),
    cta_title: t('cta_title'),
    cta_p: t('cta_p'),
    cta_button: tNav('bookNow')
  });
  
  useEffect(() => {
    const fetchServices = async () => {
        const servicesData = await getServices(tServices);
        setServices(servicesData);
    };
    fetchServices();
  }, [tServices]);

  useEffect(() => {
    const translateContent = async () => {
      const translated = {
        hero_title: await translate(t('hero_title')),
        hero_subtitle: await translate(t('hero_subtitle')),
        includes_title: await translate(t('includes_title')),
        includes_p: await translate(t('includes_p')),
        include1_title: await translate(t('include1_title')),
        include1_desc: await translate(t('include1_desc')),
        include2_title: await translate(t('include2_title')),
        include2_desc: await translate(t('include2_desc')),
        include3_title: await translate(t('include3_title')),
        include3_desc: await translate(t('include3_desc')),
        cta_title: await translate(t('cta_title')),
        cta_p: await translate(t('cta_p')),
        cta_button: await translate(tNav('bookNow'))
      };
      setContent(translated);
    };
    translateContent();
  }, [translate, t, tNav]);


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
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
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
                  <CardTitle className="font-headline">{service.name}</CardTitle>
                  <CardDescription>{service.delivery}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/book-now">{tServices('button')}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <Sparkles className="mx-auto h-12 w-12 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold font-headline mt-4">{content.includes_title}</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              {content.includes_p}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center space-y-3 p-4">
              <CheckCircle className="h-10 w-10 text-green-500" />
              <h3 className="font-semibold text-xl font-headline">{content.include1_title}</h3>
              <p className="text-muted-foreground">{content.include1_desc}</p>
            </div>
            <div className="flex flex-col items-center space-y-3 p-4">
              <CheckCircle className="h-10 w-10 text-green-500" />
              <h3 className="font-semibold text-xl font-headline">{content.include2_title}</h3>
              <p className="text-muted-foreground">{content.include2_desc}</p>
            </div>
            <div className="flex flex-col items-center space-y-3 p-4">
              <CheckCircle className="h-10 w-10 text-green-500" />
              <h3 className="font-semibold text-xl font-headline">{content.include3_title}</h3>
              <p className="text-muted-foreground">{content.include3_desc}</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold font-headline">{content.cta_title}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {content.cta_p}
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/book-now">{content.cta_button}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
