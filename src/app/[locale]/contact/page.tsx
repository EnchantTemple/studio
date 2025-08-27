'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageCircle, Clock } from 'lucide-react';
import { Link } from '@/navigation';
import { useTranslation } from '@/hooks/useTranslation';
import { useEffect, useState } from 'react';

export default function ContactPage() {
  const { translate } = useTranslation();
  const [content, setContent] = useState({
      hero_title: 'Get in Touch',
      hero_subtitle: 'We are here for you 24/7. Your journey to healing starts with a simple message.',
      whatsapp_title: 'WhatsApp Live Chat',
      whatsapp_desc: 'For immediate assistance and consultation.',
      whatsapp_button: 'Chat Now',
      email_title: 'Email Support',
      email_desc: 'Send us your questions and concerns.',
      email_address: 'hello@solutiontemple.com',
      hours_title: 'Working Hours',
      hours_desc: '24/7 Remote Spell Work',
      cta_title: 'Ready for a Personalised Solution?',
      cta_p: 'Your unique situation requires a unique approach. Book a session to get a spell tailored just for you.',
      cta_button: 'Book Your Custom Spell',
  });

  useEffect(() => {
    const translateContent = async () => {
        setContent({
            hero_title: translate('ContactPage.hero_title', 'Get in Touch'),
            hero_subtitle: translate('ContactPage.hero_subtitle', 'We are here for you 24/7. Your journey to healing starts with a simple message.'),
            whatsapp_title: translate('ContactPage.whatsapp_title', 'WhatsApp Live Chat'),
            whatsapp_desc: translate('ContactPage.whatsapp_desc', 'For immediate assistance and consultation.'),
            whatsapp_button: translate('ContactPage.whatsapp_button', 'Chat Now'),
            email_title: translate('ContactPage.email_title', 'Email Support'),
            email_desc: translate('ContactPage.email_desc', 'Send us your questions and concerns.'),
            email_address: translate('ContactPage.email_address', 'hello@solutiontemple.com'),
            hours_title: translate('ContactPage.hours_title', 'Working Hours'),
            hours_desc: translate('ContactPage.hours_desc', '24/7 Remote Spell Work'),
            cta_title: translate('ContactPage.cta_title', 'Ready for a Personalised Solution?'),
            cta_p: translate('ContactPage.cta_p', 'Your unique situation requires a unique approach. Book a session to get a spell tailored just for you.'),
            cta_button: translate('ContactPage.cta_button', 'Book Your Custom Spell'),
        });
    }
    translateContent();
  }, [translate]);

  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">{content.hero_title}</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto">
            {content.hero_subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="flex flex-col items-center text-center p-8">
              <MessageCircle className="w-16 h-16 text-accent mb-4" />
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{content.whatsapp_title}</CardTitle>
                <CardDescription>{content.whatsapp_desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild size="lg" className="rounded-full bg-green-500 hover:bg-green-600 text-white">
                  <a href="https://wa.me/1234567890?text=Hello%20SolutionTemple,%20I%20need%20your%20help." target="_blank" rel="noopener noreferrer">
                    {content.whatsapp_button}
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center p-8">
              <Mail className="w-16 h-16 text-accent mb-4" />
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{content.email_title}</CardTitle>
                <CardDescription>{content.email_desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <a href="mailto:hello@solutiontemple.com">
                    {content.email_address}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-16">
             <Card className="max-w-sm mx-auto p-6">
                <CardHeader className="p-0">
                    <div className="flex items-center justify-center gap-2">
                        <Clock className="w-6 h-6 text-primary"/>
                        <CardTitle className="font-headline">{content.hours_title}</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                    <p className="text-lg text-muted-foreground">{content.hours_desc}</p>
                </CardContent>
             </Card>
          </div>
        </div>
      </section>
       <section className="py-16 md:py-24 text-center bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold font-headline">{content.cta_title}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
           {content.cta_p}
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/book-now">{content.cta_button}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
