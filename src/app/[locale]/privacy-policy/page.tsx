'use client';
import ClientOnlyDate from '@/components/ClientOnlyDate';
import { useTranslation } from '@/hooks/useTranslation';
import { useEffect, useState } from 'react';

export default function PrivacyPolicyPage() {
  const { translate } = useTranslation();
  const [content, setContent] = useState({
    title: 'Privacy Policy',
    last_updated: 'Last updated: ',
    p1: 'SolutionTemple ("us", "we", or "our") operates the SolutionTemple website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.',
    h2_1: '1. Information Collection and Use',
    p2: 'We collect several different types of information for various purposes to provide and improve our Service to you.',
    h3_1: 'Types of Data Collected',
    h4_1: 'Personal Data',
    p3: 'While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:',
    li1: 'Email address',
    li2: 'Full Name',
    li3: 'WhatsApp Number',
    li4: 'Details about your personal situation provided in the booking form',
    h2_2: '2. Use of Data',
    p4: 'SolutionTemple uses the collected data for various purposes:',
    li5: 'To provide and maintain our Service',
    li6: 'To perform the spiritual services you have requested',
    li7: 'To communicate with you, including to provide customer support and respond to your requests',
    h2_3: '3. Data Confidentiality',
    p5: '<strong>Your privacy is our utmost priority.</strong> All information you share with us, including your name, contact details, and your personal situation, is held in the strictest confidence.',
    li8: '<strong>Data is never shared:</strong> We will not sell, rent, or share your personal information with any third parties for marketing purposes or any other reason, unless required by law.',
    li9: '<strong>WhatsApp numbers are not sold:</strong> Your WhatsApp number is used exclusively for communicating with you about the service you have requested. It will never be sold or added to any marketing lists.',
    h2_4: '4. Security of Data',
    p6: 'The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.',
    h2_5: '5. Changes to This Privacy Policy',
    p7: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.',
    h2_6: '6. Contact Us',
    p8: 'If you have any questions about this Privacy Policy, please contact us by email: hello@solutiontemple.com',
  });

  useEffect(() => {
    const translateContent = async () => {
      setContent({
        title: translate('PrivacyPolicyPage.title', 'Privacy Policy'),
        last_updated: translate('PrivacyPolicyPage.last_updated', 'Last updated: '),
        p1: translate('PrivacyPolicyPage.p1', 'SolutionTemple ("us", "we", or "our") operates the SolutionTemple website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.'),
        h2_1: translate('PrivacyPolicyPage.h2_1', '1. Information Collection and Use'),
        p2: translate('PrivacyPolicyPage.p2', 'We collect several different types of information for various purposes to provide and improve our Service to you.'),
        h3_1: translate('PrivacyPolicyPage.h3_1', 'Types of Data Collected'),
        h4_1: translate('PrivacyPolicyPage.h4_1', 'Personal Data'),
        p3: translate('PrivacyPolicyPage.p3', 'While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:'),
        li1: translate('PrivacyPolicyPage.li1', 'Email address'),
        li2: translate('PrivacyPolicyPage.li2', 'Full Name'),
        li3: translate('PrivacyPolicyPage.li3', 'WhatsApp Number'),
        li4: translate('PrivacyPolicyPage.li4', 'Details about your personal situation provided in the booking form'),
        h2_2: translate('PrivacyPolicyPage.h2_2', '2. Use of Data'),
        p4: translate('PrivacyPolicyPage.p4', 'SolutionTemple uses the collected data for various purposes:'),
        li5: translate('PrivacyPolicyPage.li5', 'To provide and maintain our Service'),
        li6: translate('PrivacyPolicyPage.li6', 'To perform the spiritual services you have requested'),
        li7: translate('PrivacyPolicyPage.li7', 'To communicate with you, including to provide customer support and respond to your requests'),
        h2_3: translate('PrivacyPolicyPage.h2_3', '3. Data Confidentiality'),
        p5: translate('PrivacyPolicyPage.p5', '<strong>Your privacy is our utmost priority.</strong> All information you share with us, including your name, contact details, and your personal situation, is held in the strictest confidence.'),
        li8: translate('PrivacyPolicyPage.li8', '<strong>Data is never shared:</strong> We will not sell, rent, or share your personal information with any third parties for marketing purposes or any other reason, unless required by law.'),
        li9: translate('PrivacyPolicyPage.li9', '<strong>WhatsApp numbers are not sold:</strong> Your WhatsApp number is used exclusively for communicating with you about the service you have requested. It will never be sold or added to any marketing lists.'),
        h2_4: translate('PrivacyPolicyPage.h2_4', '4. Security of Data'),
        p6: translate('PrivacyPolicyPage.p6', 'The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.'),
        h2_5: translate('PrivacyPolicyPage.h2_5', '5. Changes to This Privacy Policy'),
        p7: translate('PrivacyPolicyPage.p7', 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.'),
        h2_6: translate('PrivacyPolicyPage.h2_6', '6. Contact Us'),
        p8: translate('PrivacyPolicyPage.p8', 'If you have any questions about this Privacy Policy, please contact us by email: hello@solutiontemple.com'),
      });
    };
    translateContent();
  }, [translate]);

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
