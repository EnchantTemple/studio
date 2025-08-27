'use client';
import ClientOnlyDate from '@/components/ClientOnlyDate';
import { useTranslation } from '@/hooks/useTranslation';
import { useEffect, useState } from 'react';

export default function RefundPolicyPage() {
  const { translate } = useTranslation();

  const [content, setContent] = useState({
    title: 'Refund Policy',
    last_updated: 'Last updated: ',
    h2_1: 'Nature of Our Services',
    p1: "At SolutionTemple, we provide spiritual services that involve the casting of spells and rituals. These services require significant time, energy, and the use of specialized materials for each client's unique situation. The work we perform is spiritual in nature, and the outcomes are influenced by a multitude of energetic factors.",
    h2_2: 'Our Commitment',
    p2: 'We are committed to performing each and every ritual with the highest level of care, expertise, and ethical consideration. We pour our energy and our resources into your case to create the most favorable conditions for your desired outcome.',
    h2_3: 'Refunds',
    p3: 'Due to the nature of our work, we have a strict no-refund policy once a ritual has begun.',
    li1: '<strong>Before the Ritual:</strong> If you wish to cancel your service before any work has commenced, you may be eligible for a partial or full refund, minus any consultation fees or processing charges. Please contact us immediately if you wish to cancel.',
    li2: '<strong>After the Ritual Has Begun:</strong> Once we have started the ritual process, which includes the consultation, preparation of materials, and the spell casting itself, we cannot offer any refunds. At this point, our time, energy, and resources have already been fully committed to your case.',
    h2_4: 'No Guarantees of Specific Outcomes',
    p4: 'While we have a high success rate and countless satisfied clients, the laws of the universe and individual free will mean that we cannot guarantee specific results or timelines. Spiritual work is about influencing energies, not controlling them. By purchasing our services, you acknowledge and agree that you are paying for our time, expertise, and the performance of the ritual itself, not a guaranteed outcome.',
    h2_5: 'Contact Us',
    p5: 'If you have any questions about our Refund Policy, please contact us before booking a service at: hello@solutiontemple.com',
  });

  useEffect(() => {
    const translateContent = async () => {
      setContent({
        title: translate('RefundPolicyPage.title', 'Refund Policy'),
        last_updated: translate('RefundPolicyPage.last_updated', 'Last updated: '),
        h2_1: translate('RefundPolicyPage.h2_1', 'Nature of Our Services'),
        p1: translate('RefundPolicyPage.p1', "At SolutionTemple, we provide spiritual services that involve the casting of spells and rituals. These services require significant time, energy, and the use of specialized materials for each client's unique situation. The work we perform is spiritual in nature, and the outcomes are influenced by a multitude of energetic factors."),
        h2_2: translate('RefundPolicyPage.h2_2', 'Our Commitment'),
        p2: translate('RefundPolicyPage.p2', 'We are committed to performing each and every ritual with the highest level of care, expertise, and ethical consideration. We pour our energy and our resources into your case to create the most favorable conditions for your desired outcome.'),
        h2_3: translate('RefundPolicyPage.h2_3', 'Refunds'),
        p3: translate('RefundPolicyPage.p3', 'Due to the nature of our work, we have a strict no-refund policy once a ritual has begun.'),
        li1: translate('RefundPolicyPage.li1', '<strong>Before the Ritual:</strong> If you wish to cancel your service before any work has commenced, you may be eligible for a partial or full refund, minus any consultation fees or processing charges. Please contact us immediately if you wish to cancel.'),
        li2: translate('RefundPolicyPage.li2', '<strong>After the Ritual Has Begun:</strong> Once we have started the ritual process, which includes the consultation, preparation of materials, and the spell casting itself, we cannot offer any refunds. At this point, our time, energy, and resources have already been fully committed to your case.'),
        h2_4: translate('RefundPolicyPage.h2_4', 'No Guarantees of Specific Outcomes'),
        p4: translate('RefundPolicyPage.p4', 'While we have a high success rate and countless satisfied clients, the laws of the universe and individual free will mean that we cannot guarantee specific results or timelines. Spiritual work is about influencing energies, not controlling them. By purchasing our services, you acknowledge and agree that you are paying for our time, expertise, and the performance of the ritual itself, not a guaranteed outcome.'),
        h2_5: translate('RefundPolicyPage.h2_5', 'Contact Us'),
        p5: translate('RefundPolicyPage.p5', 'If you have any questions about our Refund Policy, please contact us before booking a service at: hello@solutiontemple.com'),
      });
    };
    translateContent();
  }, [translate]);

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
