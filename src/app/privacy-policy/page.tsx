'use client';
import type { Metadata } from 'next';
import ClientOnlyDate from '@/components/ClientOnlyDate';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the Privacy Policy for SolutionTemple. We are committed to protecting your data and ensuring 100% confidentiality.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-4xl mx-auto py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8">Privacy Policy</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline">
        <p>Last updated: <ClientOnlyDate /></p>
        <p>
          SolutionTemple ("us", "we", or "our") operates the SolutionTemple website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
        </p>

        <h2>1. Information Collection and Use</h2>
        <p>
          We collect several different types of information for various purposes to provide and improve our Service to you.
        </p>
        <h3>Types of Data Collected</h3>
        <h4>Personal Data</h4>
        <p>
          While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
        </p>
        <ul>
          <li>Email address</li>
          <li>Full Name</li>
          <li>WhatsApp Number</li>
          <li>Details about your personal situation provided in the booking form</li>
        </ul>

        <h2>2. Use of Data</h2>
        <p>SolutionTemple uses the collected data for various purposes:</p>
        <ul>
          <li>To provide and maintain our Service</li>
          <li>To perform the spiritual services you have requested</li>
          <li>To communicate with you, including to provide customer support and respond to your requests</li>
        </ul>
        
        <h2>3. Data Confidentiality</h2>
        <p>
          <strong>Your privacy is our utmost priority.</strong> All information you share with us, including your name, contact details, and personal situation, is held in the strictest confidence.
        </p>
        <ul>
          <li><strong>Data is never shared:</strong> We will not sell, rent, or share your personal information with any third parties for marketing purposes or any other reason, unless required by law.</li>
          <li><strong>WhatsApp numbers are not sold:</strong> Your WhatsApp number is used exclusively for communicating with you about the service you have requested. It will never be sold or added to any marketing lists.</li>
        </ul>

        <h2>4. Security of Data</h2>
        <p>
          The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
        </p>

        <h2>5. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>

        <h2>6. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us by email: hello@solutiontemple.com</p>
      </div>
    </div>
  );
}
