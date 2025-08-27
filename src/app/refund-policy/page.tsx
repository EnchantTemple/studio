'use client';
import type { Metadata } from 'next';
import ClientOnlyDate from '@/components/ClientOnlyDate';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'Read the Refund Policy for SolutionTemple. Understand the terms regarding our spiritual services and spell casting work.',
};

export default function RefundPolicyPage() {
  return (
    <div className="container max-w-4xl mx-auto py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8">Refund Policy</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline">
        <p>Last updated: <ClientOnlyDate /></p>
        
        <h2>Nature of Our Services</h2>
        <p>
          At SolutionTemple, we provide spiritual services that involve the casting of spells and rituals. These services require significant time, energy, and the use of specialized materials for each client's unique situation. The work we perform is spiritual in nature, and the outcomes are influenced by a multitude of energetic factors.
        </p>
        
        <h2>Our Commitment</h2>
        <p>
          We are committed to performing each and every ritual with the highest level of care, expertise, and ethical consideration. We pour our energy and resources into your case to create the most favorable conditions for your desired outcome.
        </p>
        
        <h2>Refunds</h2>
        <p>
          Due to the nature of our work, we have a strict no-refund policy once a ritual has begun.
        </p>
        <ul>
          <li>
            <strong>Before the Ritual:</strong> If you wish to cancel your service before any work has commenced, you may be eligible for a partial or full refund, minus any consultation fees or processing charges. Please contact us immediately if you wish to cancel.
          </li>
          <li>
            <strong>After the Ritual Has Begun:</strong> Once we have started the ritual process, which includes the consultation, preparation of materials, and the spell casting itself, we cannot offer any refunds. At this point, our time, energy, and resources have already been fully committed to your case.
          </li>
        </ul>
        
        <h2>No Guarantees of Specific Outcomes</h2>
        <p>
          While we have a high success rate and countless satisfied clients, the laws of the universe and individual free will mean that we cannot guarantee specific results or timelines. Spiritual work is about influencing energies, not controlling them. By purchasing our services, you acknowledge and agree that you are paying for our time, expertise, and the performance of the ritual itself, not a guaranteed outcome.
        </p>
        
        <h2>Contact Us</h2>
        <p>If you have any questions about our Refund Policy, please contact us before booking a service at: hello@solutiontemple.com</p>
      </div>
    </div>
  );
}
