'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function AboutPage() {
    const t = useTranslations('AboutPage');
    const locale = useLocale();

    const certifications = [
        { name: t('cert1_name'), board: t('cert1_board') },
        { name: t('cert2_name'), board: t('cert2_board') },
        { name: t('cert3_name'), board: t('cert3_board') }
    ];

    const coreValues = [
        { name: t('value1_name'), description: t('value1_desc') },
        { name: t('value2_name'), description: t('value2_desc') },
        { name: t('value3_name'), description: t('value3_desc') }
    ];

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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">{t('lineage_title')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('lineage_p1')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('lineage_p2')}
              </p>
            </div>
            <div>
              <Image
                src="https://picsum.photos/600/700"
                alt="A portrait of a wise spiritual healer"
                data-ai-hint="spiritual healer portrait"
                width={600}
                height={700}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12">{t('credentials_title')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center justify-center gap-2"><Zap className="text-accent"/> {t('certifications_title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4 text-left">
                            {certifications.map(cert => (
                                <li key={cert.name} className="flex items-start">
                                    <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold">{cert.name}</p>
                                        <p className="text-sm text-muted-foreground">{cert.board}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center justify-center gap-2"><Shield className="text-accent"/> {t('values_title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4 text-left">
                             {coreValues.map(value => (
                                <li key={value.name} className="flex items-start">
                                    <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold">{value.name}</p>
                                        <p className="text-sm text-muted-foreground">{value.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
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
            <Link href={`/${locale}/book-now`}>{t('cta_button')}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
