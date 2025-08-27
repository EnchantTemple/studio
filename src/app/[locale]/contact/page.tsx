'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageCircle, Clock } from 'lucide-react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">{t('hero_title')}</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto">
            {t('hero_subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="flex flex-col items-center text-center p-8">
              <MessageCircle className="w-16 h-16 text-accent mb-4" />
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{t('whatsapp_title')}</CardTitle>
                <CardDescription>{t('whatsapp_desc')}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild size="lg" className="rounded-full bg-green-500 hover:bg-green-600 text-white">
                  <a href="https://wa.me/1234567890?text=Hello%20SolutionTemple,%20I%20need%20your%20help." target="_blank" rel="noopener noreferrer">
                    {t('whatsapp_button')}
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center p-8">
              <Mail className="w-16 h-16 text-accent mb-4" />
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{t('email_title')}</CardTitle>
                <CardDescription>{t('email_desc')}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <a href="mailto:hello@solutiontemple.com">
                    {t('email_address')}
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
                        <CardTitle className="font-headline">{t('hours_title')}</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                    <p className="text-lg text-muted-foreground">{t('hours_desc')}</p>
                </CardContent>
             </Card>
          </div>
        </div>
      </section>
       <section className="py-16 md:py-24 text-center bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold font-headline">{t('cta_title')}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
           {t('cta_p')}
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/book-now">{t('cta_button')}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
