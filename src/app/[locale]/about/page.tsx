'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { useEffect, useState } from 'react';

export default function AboutPage() {
    const { translate, language } = useTranslation();
    const [content, setContent] = useState({
        hero_title: 'Our Sacred Heritage',
        hero_subtitle: 'A legacy of healing passed down through five generations.',
        lineage_title: 'A Lineage of Divine Gifts',
        lineage_p1: 'SolutionTemple is a 5th-generation African healer circle. Each spiritual consultant in the circle is born with the divine gift of energetic alignment and emotional healing. Our journey began in the sacred lands of Benin, where our elders passed down secret ancestral rituals for love and harmony.',
        lineage_p2: 'We combine ancient wisdom with a modern understanding of energy dynamics to provide effective, ethical, and compassionate guidance to souls across the globe.',
        credentials_title: 'Our Credentials & Guarantees',
        certifications_title: 'Certifications',
        cert1_name: 'Energy Healing License',
        cert1_board: 'Holistic Practitioner Board',
        cert2_name: 'Spiritual Wellness Certification',
        cert2_board: 'Global Occult Council (G.O.C.)',
        cert3_name: 'Registered Member',
        cert3_board: 'Spiritual Advisors Network (SAN)',
        values_title: 'Core Values',
        value1_name: 'Ethical Spell Casting',
        value1_desc: 'All rituals are performed with pure intentions, ensuring no harm comes to anyone.',
        value2_name: '100% Confidentiality',
        value2_desc: 'Your privacy is paramount. All consultations and work are kept strictly confidential.',
        value3_name: 'No Black Magic',
        value3_desc: 'We strictly avoid any harmful intent or dark arts, focusing only on positive, light-based energy.',
        cta_title: 'Ready to Change Your Life?',
        cta_p: 'Let us guide you on your journey to love and happiness. Your confidential consultation awaits.',
        cta_button: 'Book Your Spell Now',
    });
    
    useEffect(() => {
        const translateContent = () => {
            setContent({
                hero_title: translate('AboutPage.hero_title', 'Our Sacred Heritage'),
                hero_subtitle: translate('AboutPage.hero_subtitle', 'A legacy of healing passed down through five generations.'),
                lineage_title: translate('AboutPage.lineage_title', 'A Lineage of Divine Gifts'),
                lineage_p1: translate('AboutPage.lineage_p1', 'SolutionTemple is a 5th-generation African healer circle. Each spiritual consultant in the circle is born with the divine gift of energetic alignment and emotional healing. Our journey began in the sacred lands of Benin, where our elders passed down secret ancestral rituals for love and harmony.'),
                lineage_p2: translate('AboutPage.lineage_p2', 'We combine ancient wisdom with a modern understanding of energy dynamics to provide effective, ethical, and compassionate guidance to souls across the globe.'),
                credentials_title: translate('AboutPage.credentials_title', 'Our Credentials & Guarantees'),
                certifications_title: translate('AboutPage.certifications_title', 'Certifications'),
                cert1_name: translate('AboutPage.cert1_name', 'Energy Healing License'),
                cert1_board: translate('AboutPage.cert1_board', 'Holistic Practitioner Board'),
                cert2_name: translate('AboutPage.cert2_name', 'Spiritual Wellness Certification'),
                cert2_board: translate('AboutPage.cert2_board', 'Global Occult Council (G.O.C.)'),
                cert3_name: translate('AboutPage.cert3_name', 'Registered Member'),
                cert3_board: translate('AboutPage.cert3_board', 'Spiritual Advisors Network (SAN)'),
                values_title: translate('AboutPage.values_title', 'Core Values'),
                value1_name: translate('AboutPage.value1_name', 'Ethical Spell Casting'),
                value1_desc: translate('AboutPage.value1_desc', 'All rituals are performed with pure intentions, ensuring no harm comes to anyone.'),
                value2_name: translate('AboutPage.value2_name', '100% Confidentiality'),
                value2_desc: translate('AboutPage.value2_desc', 'Your privacy is paramount. All consultations and work are kept strictly confidential.'),
                value3_name: translate('AboutPage.value3_name', 'No Black Magic'),
                value3_desc: translate('AboutPage.value3_desc', 'We strictly avoid any harmful intent or dark arts, focusing only on positive, light-based energy.'),
                cta_title: translate('AboutPage.cta_title', 'Ready to Change Your Life?'),
                cta_p: translate('AboutPage.cta_p', 'Let us guide you on your journey to love and happiness. Your confidential consultation awaits.'),
                cta_button: translate('AboutPage.cta_button', 'Book Your Spell Now'),
            });
        };
        translateContent();
    }, [translate]);

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
            <Link href={`/${language}/book-now`}>{content.cta_button}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
