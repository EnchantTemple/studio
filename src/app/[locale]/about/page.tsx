'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { useTranslation } from '@/hooks/useTranslation';
import { useEffect, useState } from 'react';

const useTranslatedContent = () => {
    const t = useTranslations('AboutPage');
    const { translate } = useTranslation();
    const [content, setContent] = useState({
        hero_title: t('hero_title'),
        hero_subtitle: t('hero_subtitle'),
        lineage_title: t('lineage_title'),
        lineage_p1: t('lineage_p1'),
        lineage_p2: t('lineage_p2'),
        credentials_title: t('credentials_title'),
        certifications_title: t('certifications_title'),
        cert1_name: t('cert1_name'),
        cert1_board: t('cert1_board'),
        cert2_name: t('cert2_name'),
        cert2_board: t('cert2_board'),
        cert3_name: t('cert3_name'),
        cert3_board: t('cert3_board'),
        values_title: t('values_title'),
        value1_name: t('value1_name'),
        value1_desc: t('value1_desc'),
        value2_name: t('value2_name'),
        value2_desc: t('value2_desc'),
        value3_name: t('value3_name'),
        value3_desc: t('value3_desc'),
        cta_title: t('cta_title'),
        cta_p: t('cta_p'),
        cta_button: t('cta_button'),
    });

    useEffect(() => {
        const translateContent = async () => {
            const translatedContent = {
                hero_title: await translate(t('hero_title')),
                hero_subtitle: await translate(t('hero_subtitle')),
                lineage_title: await translate(t('lineage_title')),
                lineage_p1: await translate(t('lineage_p1')),
                lineage_p2: await translate(t('lineage_p2')),
                credentials_title: await translate(t('credentials_title')),
                certifications_title: await translate(t('certifications_title')),
                cert1_name: await translate(t('cert1_name')),
                cert1_board: await translate(t('cert1_board')),
                cert2_name: await translate(t('cert2_name')),
                cert2_board: await translate(t('cert2_board')),
                cert3_name: await translate(t('cert3_name')),
                cert3_board: await translate(t('cert3_board')),
                values_title: await translate(t('values_title')),
                value1_name: await translate(t('value1_name')),
                value1_desc: await translate(t('value1_desc')),
                value2_name: await translate(t('value2_name')),
                value2_desc: await translate(t('value2_desc')),
                value3_name: await translate(t('value3_name')),
                value3_desc: await translate(t('value3_desc')),
                cta_title: await translate(t('cta_title')),
                cta_p: await translate(t('cta_p')),
                cta_button: await translate(t('cta_button')),
            };
            setContent(translatedContent);
        };
        translateContent();
    }, [translate, t]);

    return content;
}

export default function AboutPage() {
  const content = useTranslatedContent();

  const certifications = [
    { name: content.cert1_name, board: content.cert1_board },
    { name: content.cert2_name, board: content.cert2_board },
    { name: content.cert3_name, board: content.cert3_board }
  ];

  const coreValues = [
    { name: content.value1_name, description: content.value1_desc },
    { name: content.value2_name, description: content.value2_desc },
    { name: content.value3_name, description: content.value3_desc }
  ];

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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">{content.lineage_title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.lineage_p1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.lineage_p2}
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
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12">{content.credentials_title}</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center justify-center gap-2"><Zap className="text-accent"/> {content.certifications_title}</CardTitle>
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
                        <CardTitle className="font-headline flex items-center justify-center gap-2"><Shield className="text-accent"/> {content.values_title}</CardTitle>
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
