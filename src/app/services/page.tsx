'use client';
import { Link } from '@/navigation';
import Image from 'next/image';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';


export default function ServicesPage() {
  const t = useTranslations('HomePage.Services');
  const tNav = useTranslations('Navigation');


  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">Our Spiritual Services</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto">
            Ethical and powerful spells tailored to your unique love situation.
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
                    alt={t(`${service.key}_name` as any)}
                    data-ai-hint={service.dataAiHint}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                <CardHeader>
                  <CardTitle className="font-headline">{t(`${service.key}_name` as any)}</CardTitle>
                  <CardDescription>{t(`${service.key}_delivery` as any)}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{t(`${service.key}_desc` as any)}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/book-now">{t('button')}</Link>
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
            <h2 className="text-3xl md:text-4xl font-bold font-headline mt-4">What Each Spell Includes</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              To ensure the best results, every spell casting is a comprehensive spiritual service.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center space-y-3 p-4">
              <CheckCircle className="h-10 w-10 text-green-500" />
              <h3 className="font-semibold text-xl font-headline">Personalized Consultation</h3>
              <p className="text-muted-foreground">We begin with a deep dive into your situation to understand the energies at play.</p>
            </div>
            <div className="flex flex-col items-center space-y-3 p-4">
              <CheckCircle className="h-10 w-10 text-green-500" />
              <h3 className="font-semibold text-xl font-headline">Custom Ritual</h3>
              <p className="text-muted-foreground">Your spell is performed with your name and photo, focusing intent directly on your needs.</p>
            </div>
            <div className="flex flex-col items-center space-y-3 p-4">
              <CheckCircle className="h-10 w-10 text-green-500" />
              <h3 className="font-semibold text-xl font-headline">Post-Spell Support</h3>
              <p className="text-muted-foreground">We provide follow-up support to guide you as the spell's energy manifests.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold font-headline">Begin Your Journey to Happiness</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the spell that resonates with your heart's desire and let us help you find peace and love.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/book-now">{tNav('bookNow')}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
