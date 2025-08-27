'use client';
import { getTestimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';
import type { Testimonial } from '@/lib/types';
import { useTranslations } from 'next-intl';

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const t = useTranslations('TestimonialsPage');
  
  useEffect(() => {
    const fetchTestimonials = () => {
      const allTestimonials = getTestimonials();
      setTestimonials(allTestimonials);
    };
    fetchTestimonials();
  }, []);

  const averageRating = testimonials.length > 0
    ? (testimonials.reduce((acc, item) => acc + item.rating, 0) / testimonials.length).toFixed(1)
    : '5.0';

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
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">{t('success_title')}</h2>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex">
                <Star className="w-6 h-6 text-accent fill-accent" />
                <Star className="w-6 h-6 text-accent fill-accent" />
                <Star className="w-6 h-6 text-accent fill-accent" />
                <Star className="w-6 h-6 text-accent fill-accent" />
                <Star className="w-6 h-6 text-accent fill-accent" />
              </div>
              <p className="font-semibold text-lg">{t('rating_text', {rating: averageRating})}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.key} className="flex flex-col">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <div className="flex mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating ? 'text-accent fill-accent' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg italic text-foreground mb-4">
                      &quot;{t(`${testimonial.key}_quote`)}&quot;
                    </blockquote>
                  </div>
                  <div className="mt-auto pt-4 border-t">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Avatar>
                                <AvatarImage src={testimonial.avatar} alt={t(`${testimonial.key}_name`)} />
                                <AvatarFallback>{t(`${testimonial.key}_name`).charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">{t(`${testimonial.key}_name`)}</p>
                                <p className="text-sm text-muted-foreground">{t(`${testimonial.key}_location`)}</p>
                            </div>
                        </div>
                        <Badge variant="secondary">{t(`${testimonial.key}_date`)}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
