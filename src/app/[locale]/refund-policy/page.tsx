'use client';
import ClientOnlyDate from '@/components/ClientOnlyDate';
import { useTranslations } from 'next-intl';

export default function RefundPolicyPage() {
  const t = useTranslations('RefundPolicyPage');

  return (
    <div className="container max-w-4xl mx-auto py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8">{t('title')}</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline">
        <p>{t('last_updated')}<ClientOnlyDate /></p>
        
        <h2>{t('h2_1')}</h2>
        <p>{t('p1')}</p>
        
        <h2>{t('h2_2')}</h2>
        <p>{t('p2')}</p>
        
        <h2>{t('h2_3')}</h2>
        <p>{t('p3')}</p>
        <ul>
            <li dangerouslySetInnerHTML={{ __html: t.raw('li1') }} />
            <li dangerouslySetInnerHTML={{ __html: t.raw('li2') }} />
        </ul>
        
        <h2>{t('h2_4')}</h2>
        <p>{t('p4')}</p>
        
        <h2>{t('h2_5')}</h2>
        <p>{t('p5')}</p>
      </div>
    </div>
  );
}
