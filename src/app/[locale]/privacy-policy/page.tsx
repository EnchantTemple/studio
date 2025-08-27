'use client';
import ClientOnlyDate from '@/components/ClientOnlyDate';
import { useTranslations } from 'next-intl';
import { useTranslation } from '@/hooks/useTranslation';
import { useEffect, useState } from 'react';

export default function PrivacyPolicyPage() {
  const t = useTranslations('PrivacyPolicyPage');
  const { translate } = useTranslation();
  const [content, setContent] = useState({
    title: t('title'),
    last_updated: t('last_updated'),
    p1: t('p1'),
    h2_1: t('h2_1'),
    p2: t('p2'),
    h3_1: t('h3_1'),
    h4_1: t('h4_1'),
    p3: t('p3'),
    li1: t('li1'),
    li2: t('li2'),
    li3: t('li3'),
    li4: t('li4'),
    h2_2: t('h2_2'),
    p4: t('p4'),
    li5: t('li5'),
    li6: t('li6'),
    li7: t('li7'),
    h2_3: t('h2_3'),
    p5: t.raw('p5'),
    li8: t.raw('li8'),
    li9: t.raw('li9'),
    h2_4: t('h2_4'),
    p6: t('p6'),
    h2_5: t('h2_5'),
    p7: t('p7'),
    h2_6: t('h2_6'),
    p8: t('p8'),
  });

  useEffect(() => {
    const translateContent = async () => {
      setContent({
        title: await translate(t('title')),
        last_updated: await translate(t('last_updated')),
        p1: await translate(t('p1')),
        h2_1: await translate(t('h2_1')),
        p2: await translate(t('p2')),
        h3_1: await translate(t('h3_1')),
        h4_1: await translate(t('h4_1')),
        p3: await translate(t('p3')),
        li1: await translate(t('li1')),
        li2: await translate(t('li2')),
        li3: await translate(t('li3')),
        li4: await translate(t('li4')),
        h2_2: await translate(t('h2_2')),
        p4: await translate(t('p4')),
        li5: await translate(t('li5')),
        li6: await translate(t('li6')),
        li7: await translate(t('li7')),
        h2_3: await translate(t('h2_3')),
        p5: await translate(t.raw('p5')),
        li8: await translate(t.raw('li8')),
        li9: await translate(t.raw('li9')),
        h2_4: await translate(t('h2_4')),
        p6: await translate(t('p6')),
        h2_5: await translate(t('h2_5')),
        p7: await translate(t('p7')),
        h2_6: await translate(t('h2_6')),
        p8: await translate(t('p8')),
      });
    };
    translateContent();
  }, [translate, t]);

  return (
    <div className="container max-w-4xl mx-auto py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8">{content.title}</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline">
        <p>{content.last_updated} <ClientOnlyDate /></p>
        <p>{content.p1}</p>

        <h2>{content.h2_1}</h2>
        <p>{content.p2}</p>
        <h3>{content.h3_1}</h3>
        <h4>{content.h4_1}</h4>
        <p>{content.p3}</p>
        <ul>
          <li>{content.li1}</li>
          <li>{content.li2}</li>
          <li>{content.li3}</li>
          <li>{content.li4}</li>
        </ul>

        <h2>{content.h2_2}</h2>
        <p>{content.p4}</p>
        <ul>
          <li>{content.li5}</li>
          <li>{content.li6}</li>
          <li>{content.li7}</li>
        </ul>
        
        <h2>{content.h2_3}</h2>
         <p dangerouslySetInnerHTML={{ __html: content.p5 as string }} />
        <ul>
          <li dangerouslySetInnerHTML={{ __html: content.li8 as string }} />
          <li dangerouslySetInnerHTML={{ __html: content.li9 as string }} />
        </ul>

        <h2>{content.h2_4}</h2>
        <p>{content.p6}</p>

        <h2>{content.h2_5}</h2>
        <p>{content.p7}</p>

        <h2>{content.h2_6}</h2>
        <p>{content.p8}</p>
      </div>
    </div>
  );
}
