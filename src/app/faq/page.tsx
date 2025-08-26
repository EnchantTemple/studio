import type { Metadata } from 'next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about our services, spells, and process.',
};

const faqs = [
  {
    question: 'Are your spells safe? Do they have any side effects?',
    answer:
      'Absolutely. My spells are 100% safe and rooted in positive, ethical energy. I do not engage in black magic or any rituals intended to cause harm. The only "side effect" is the positive change you seek.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'The manifestation time can vary depending on the complexity of your situation and the energies involved. Some clients see results in as little as 24-48 hours, while others may take a few weeks. Patience and a positive mindset are key. I provide a delivery timeline for each spell on the Services page.',
  },
  {
    question: 'What information do you need from me?',
    answer:
      'To perform the ritual, I will need your full name, and a recent photo if available. For spells involving another person, their name and photo are also very helpful. All information you provide is completely confidential.',
  },
  {
    question: 'Do you guarantee your spells will work?',
    answer:
      "I have over 12 years of experience and a very high success rate. However, due to the nature of spiritual work and the influence of free will, it is unethical to offer a 100% guarantee of a specific outcome. You are paying for my time, expertise, and the powerful ritual I perform on your behalf. I guarantee that I will put my full energy and focus into your case.",
  },
  {
    question: 'What makes your services different from others?',
    answer:
      "My practice is built on a five-generation lineage of African healing wisdom. I combine authentic, ancestral rituals with a strict ethical code. I am a licensed spiritual consultant, and I offer personalized support and complete confidentiality, which sets me apart from many online spell casters.",
  },
  {
    question: 'Is my personal information kept private?',
    answer:
      'Yes, 100%. Your privacy is my top priority. All consultations, contact details, and personal information are strictly confidential and will never be shared with anyone. Please see our Privacy Policy for more details.',
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">Frequently Asked Questions</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto">
            Find answers to common questions about our services, spells, and process.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left font-headline text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      
      <section className="bg-card py-16 md:py-24 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold font-headline">Still Have Questions?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            If you can't find the answer you're looking for, please don't hesitate to reach out to us directly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
              <a href="https://wa.me/1234567890?text=Hello%20SolutionTemple,%20I%20have%20a%20question." target="_blank" rel="noopener noreferrer">
                <MessageCircle /> Chat on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:hello@solutiontemple.com">
                <Mail /> Email Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}