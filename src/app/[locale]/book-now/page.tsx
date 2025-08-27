'use client';
import { BookingForm } from './_components/BookingForm';
import { useTranslations } from 'next-intl';
import { useTranslation } from '@/hooks/useTranslation';
import { useEffect, useState } from 'react';

export default function BookNowPage() {
  const t = useTranslations('BookNowPage');
  const { translate } = useTranslation();
  const [content, setContent] = useState({
      hero_title: t('hero_title'),
      hero_subtitle: t('hero_subtitle'),
  });

  useEffect(() => {
    const translateContent = async () => {
        const translated = {
            hero_title: await translate(t('hero_title')),
            hero_subtitle: await translate(t('hero_subtitle')),
        };
        setContent(translated);
    }
    translateContent();
  }, [translate, t]);

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
        <div className="container max-w-3xl mx-auto">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
