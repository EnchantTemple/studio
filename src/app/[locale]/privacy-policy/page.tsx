'use client';
import ClientOnlyDate from '@/components/ClientOnlyDate';
import { useTranslations } from 'next-intl';

export default function PrivacyPolicyPage() {
  const t = useTranslations('PrivacyPolicyPage');

  return (
    <div className="container max-w-4xl mx-auto py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8">{t('title')}</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline">
        <p>{t('last_updated')} <ClientOnlyDate /></p>
        <p>{t('p1')}</p>

        <h2>{t('h2_1')}</h2>
        <p>{t('p2')}</p>
        <h3>{t('h3_1')}</h3>
        <h4>{t('h4_1')}</h4>
        <p>{t('p3')}</p>
        <ul>
          <li>{t('li1')}</li>
          <li>{t('li2')}</li>
          <li>{t('li3')}</li>
          <li>{t('li4')}</li>
        </ul>

        <h2>{t('h2_2')}</h2>
        <p>{t('p4')}</p>
        <ul>
          <li>{t('li5')}</li>
          <li>{t('li6')}</li>
          <li>{t('li7')}</li>
        </ul>
        
        <h2>{t('h2_3')}</h2>
         <p dangerouslySetInnerHTML={{ __html: t.raw('p5') }} />
        <ul>
          <li dangerouslySetInnerHTML={{ __html: t.raw('li8') }} />
          <li dangerouslySetInnerHTML={{ __html: t.raw('li9') }} />
        </ul>

        <h2>{t('h2_4')}</h2>
        <p>{t('p6')}</p>

        <h2>{t('h2_5')}</h2>
        <p>{t('p7')}</p>

        <h2>{t('h2_6')}</h2>
        <p>{t('p8')}</p>
      </div>
    </div>
  );
}
