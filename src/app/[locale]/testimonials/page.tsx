'use client';
import { getTestimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import type { Testimonial } from '@/lib/types';
import { useTranslation } from '@/hooks/useTranslation';


export default function TestimonialsPage() {
  const t = useTranslations('TestimonialsPage');
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const { translate } = useTranslation();
  const [content, setContent] = useState({
      hero_title: t('hero_title'),
      hero_subtitle: t('hero_subtitle'),
      success_title: t('success_title'),
      rating_text: t('rating_text', {rating: '5.0'}),
  });
  
  useEffect(() => {
    const fetchTestimonials = async () => {
      const allTestimonials = await getTestimonials(t);
      setTestimonials(allTestimonials);
    };
    fetchTestimonials();
  }, [t]);

  const averageRating = testimonials.length > 0
    ? (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1)
    : '5.0';

  useEffect(() => {
    const translateContent = async () => {
        const translated = {
            hero_title: await translate(t('hero_title')),
            hero_subtitle: await translate(t('hero_subtitle')),
            success_title: await translate(t('success_title')),
            rating_text: await translate(t('rating_text', {rating: averageRating})),
        };
        setContent(translated);
    }
    translateContent();
  }, [translate, t, averageRating]);

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
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">{content.success_title}</h2>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex">
                <Star className="w-6 h-6 text-accent fill-accent" />
                <Star className="w-6 h-6 text-accent fill-accent" />
                <Star className="w-6 h-6 text-accent fill-accent" />
                <Star className="w-6 h-6 text-accent fill-accent" />
                <Star className="w-6 h-6 text-accent fill-accent" />
              </div>
              <p className="font-semibold text-lg">{content.rating_text}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col">
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
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                  </div>
                  <div className="mt-auto pt-4 border-t">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Avatar>
                                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                            </div>
                        </div>
                        <Badge variant="secondary">{testimonial.date}</Badge>
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
