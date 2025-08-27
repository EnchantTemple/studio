'use client';
import ClientOnlyDate from '@/components/ClientOnlyDate';
import { useTranslations } from 'next-intl';
import { useTranslation } from '@/hooks/useTranslation';
import { useEffect, useState } from 'react';

export default function RefundPolicyPage() {
  const t = useTranslations('RefundPolicyPage');
  const { translate } = useTranslation();

  const [content, setContent] = useState({
    title: t('title'),
    last_updated: t('last_updated'),
    h2_1: t('h2_1'),
    p1: t('p1'),
    h2_2: t('h2_2'),
    p2: t('p2'),
    h2_3: t('h2_3'),
    p3: t('p3'),
    li1: t.raw('li1'),
    li2: t.raw('li2'),
    h2_4: t('h2_4'),
    p4: t('p4'),
    h2_5: t('h2_5'),
    p5: t('p5'),
  });

  useEffect(() => {
    const translateContent = async () => {
      setContent({
        title: await translate(t('title')),
        last_updated: await translate(t('last_updated')),
        h2_1: await translate(t('h2_1')),
        p1: await translate(t('p1')),
        h2_2: await translate(t('h2_2')),
        p2: await translate(t('p2')),
        h2_3: await translate(t('h2_3')),
        p3: await translate(t('p3')),
        li1: await translate(t.raw('li1')),
        li2: await translate(t.raw('li2')),
        h2_4: await translate(t('h2_4')),
        p4: await translate(t('p4')),
        h2_5: await translate(t('h2_5')),
        p5: await translate(t('p5')),
      });
    };
    translateContent();
  }, [translate, t]);

  return (
    <div className="container max-w-4xl mx-auto py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8">{content.title}</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline">
        <p>{content.last_updated}<ClientOnlyDate /></p>
        
        <h2>{content.h2_1}</h2>
        <p>{content.p1}</p>
        
        <h2>{content.h2_2}</h2>
        <p>{content.p2}</p>
        
        <h2>{content.h2_3}</h2>
        <p>{content.p3}</p>
        <ul>
            <li dangerouslySetInnerHTML={{ __html: content.li1 as string }} />
            <li dangerouslySetInnerHTML={{ __html: content.li2 as string }} />
        </ul>
        
        <h2>{content.h2_4}</h2>
        <p>{content.p4}</p>
        
        <h2>{content.h2_5}</h2>
        <p>{content.p5}</p>
      </div>
    </div>
  );
}
