'use client';
import Link from 'next/link';
import Image from 'next/image';
import { getServices } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { Service } from '@/lib/types';
import { useTranslation } from '@/hooks/useTranslation';


export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const { translate, language } = useTranslation();
    const [content, setContent] = useState({
    hero_title: 'Our Spiritual Services',
    hero_subtitle: 'Ethical and powerful spells tailored to your unique love situation.',
    includes_title: 'What Each Spell Includes',
    includes_p: 'To ensure the best results, every spell casting is a comprehensive spiritual service.',
    include1_title: 'Personalized Consultation',
    include1_desc: 'We begin with a deep dive into your situation to understand the energies at play.',
    include2_title: 'Custom Ritual',
    include2_desc: "Your spell is performed with your name and photo, focusing intent directly on your needs.",
    include3_title: 'Post-Spell Support',
    include3_desc: "We provide follow-up support to guide you as the spell's energy manifests.",
    cta_title: 'Begin Your Journey to Happiness',
    cta_p: "Choose the spell that resonates with your heart's desire and let us help you find a path to peace and love.",
    cta_button: 'Book Your Spell Now',
    book_this_spell: 'Book This Spell',
  });
  
  useEffect(() => {
    const fetchServices = async () => {
        const servicesData = getServices();
        setServices(servicesData);
    };
    fetchServices();
  }, []);

  useEffect(() => {
    const translateContent = async () => {
      setContent({
        hero_title: translate('ServicesPage.hero_title', 'Our Spiritual Services'),
        hero_subtitle: translate('ServicesPage.hero_subtitle', 'Ethical and powerful spells tailored to your unique love situation.'),
        includes_title: translate('ServicesPage.includes_title', 'What Each Spell Includes'),
        includes_p: translate('ServicesPage.includes_p', 'To ensure the best results, every spell casting is a comprehensive spiritual service.'),
        include1_title: translate('ServicesPage.include1_title', 'Personalized Consultation'),
        include1_desc: translate('ServicesPage.include1_desc', 'We begin with a deep dive into your situation to understand the energies at play.'),
        include2_title: translate('ServicesPage.include2_title', 'Custom Ritual'),
        include2_desc: translate('ServicesPage.include2_desc', "Your spell is performed with your name and photo, focusing intent directly on your needs."),
        include3_title: translate('ServicesPage.include3_title', 'Post-Spell Support'),
        include3_desc: translate('ServicesPage.include3_desc', "We provide follow-up support to guide you as the spell's energy manifests."),
        cta_title: translate('ServicesPage.cta_title', 'Begin Your Journey to Happiness'),
        cta_p: translate('ServicesPage.cta_p', "Choose the spell that resonates with your heart's desire and let us help you find a path to peace and love."),
        cta_button: translate('Navigation.bookNow', 'Book Your Spell Now'),
        book_this_spell: translate('HomePage.Services.button', 'Book This Spell'),
      });
    };
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
                  <CardTitle className="font-headline">{translate(`HomePage.Services.${service.key}_name`, service.name)}</CardTitle>
                  <CardDescription>{translate(`HomePage.Services.${service.key}_delivery`, service.delivery)}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{translate(`HomePage.Services.${service.key}_desc`, service.description)}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href={`/${language}/book-now`}>{content.book_this_spell}</Link>
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
            <Link href={`/${language}/book-now`}>{content.cta_button}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
