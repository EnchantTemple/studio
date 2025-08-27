'use client';
import Link from 'next/link';
import Image from 'next/image';
import { getServices } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { Service } from '@/lib/types';
import { useTranslations, useLocale } from 'next-intl';


export default function ServicesPage() {
  const [services, setServices] = useState<Omit<Service, 'name' | 'description' | 'delivery'>[]>([]);
  const t = useTranslations('ServicesPage');
  const tShared = useTranslations('HomePage.Services');
  const tNav = useTranslations('Navigation');
  const locale = useLocale();
  
  useEffect(() => {
    const fetchServices = () => {
        const servicesData = getServices();
        setServices(servicesData);
    };
    fetchServices();
  }, []);

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
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.key} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                 <Image
                    src={service.imageUrl}
                    alt={tShared(`${service.key}_name`)}
                    data-ai-hint={service.dataAiHint}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                <CardHeader>
                  <CardTitle className="font-headline">{tShared(`${service.key}_name`)}</CardTitle>
                  <CardDescription>{tShared(`${service.key}_delivery`)}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{tShared(`${service.key}_desc`)}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href={`/${locale}/book-now`}>{tShared('button')}</Link>
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
            <h2 className="text-3xl md:text-4xl font-bold font-headline mt-4">{t('includes_title')}</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              {t('includes_p')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center space-y-3 p-4">
              <CheckCircle className="h-10 w-10 text-green-500" />
              <h3 className="font-semibold text-xl font-headline">{t('include1_title')}</h3>
              <p className="text-muted-foreground">{t('include1_desc')}</p>
            </div>
            <div className="flex flex-col items-center space-y-3 p-4">
              <CheckCircle className="h-10 w-10 text-green-500" />
              <h3 className="font-semibold text-xl font-headline">{t('include2_title')}</h3>
              <p className="text-muted-foreground">{t('include2_desc')}</p>
            </div>
            <div className="flex flex-col items-center space-y-3 p-4">
              <CheckCircle className="h-10 w-10 text-green-500" />
              <h3 className="font-semibold text-xl font-headline">{t('include3_title')}</h3>
              <p className="text-muted-foreground">{t('include3_desc')}</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold font-headline">{t('cta_title')}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('cta_p')}
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href={`/${locale}/book-now`}>{tNav('bookNow')}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
