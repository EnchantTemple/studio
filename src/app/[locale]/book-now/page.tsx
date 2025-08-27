'use client';
import { BookingForm } from './_components/BookingForm';
import { useTranslation } from '@/hooks/useTranslation';
import { useEffect, useState } from 'react';

export default function BookNowPage() {
  const { translate } = useTranslation();
  const [content, setContent] = useState({
      hero_title: 'Book Your Spell',
      hero_subtitle: 'Take the first step towards restoring harmony in your life. Your information is 100% confidential.',
  });

  useEffect(() => {
    const translateContent = async () => {
        setContent({
            hero_title: translate('BookNowPage.hero_title', 'Book Your Spell'),
            hero_subtitle: translate('BookNowPage.hero_subtitle', 'Take the first step towards restoring harmony in your life. Your information is 100% confidential.'),
        });
    }
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
        <div className="container max-w-3xl mx-auto">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
