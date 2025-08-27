'use client';
import { BookingForm } from './_components/BookingForm';
import { useTranslations } from 'next-intl';

export default function BookNowPage() {
  const t = useTranslations('BookNowPage');

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
        <div className="container max-w-3xl mx-auto">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
