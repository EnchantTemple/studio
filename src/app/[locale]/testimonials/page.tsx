
'use client';
import { getTestimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';
import type { Testimonial } from '@/lib/types';
import { useTranslation } from '@/hooks/useTranslation';


export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const { translate } = useTranslation();
  const [content, setContent] = useState({
      hero_title: 'Words of Gratitude',
      hero_subtitle: "Discover how we've helped others find love and happiness.",
      success_title: 'Client Success Stories',
      rating_text: '5.0 / 5 Star Rating',
  });
  
  useEffect(() => {
    const fetchTestimonials = () => {
      const allTestimonials = getTestimonials();
      setTestimonials(allTestimonials);
    };
    fetchTestimonials();
  }, []);

  const averageRating = testimonials.length > 0
    ? (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1)
    : '5.0';

  useEffect(() => {
    const translateContent = () => {
        setContent({
            hero_title: translate('TestimonialsPage.hero_title', 'Words of Gratitude'),
            hero_subtitle: translate('TestimonialsPage.hero_subtitle', "Discover how we've helped others find love and happiness."),
            success_title: translate('TestimonialsPage.success_title', 'Client Success Stories'),
            rating_text: translate('TestimonialsPage.rating_text', '{rating} / 5 Star Rating').replace('{rating}', averageRating),
        });
    }
    translateContent();
  }, [translate, averageRating]);

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
                      &quot;{translate(`TestimonialsPage.testimonial${index+1}_quote`, testimonial.quote)}&quot;
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
                                <p className="font-semibold">{translate(`TestimonialsPage.testimonial${index+1}_name`, testimonial.name)}</p>
                                <p className="text-sm text-muted-foreground">{translate(`TestimonialsPage.testimonial${index+1}_location`, testimonial.location)}</p>
                            </div>
                        </div>
                        <Badge variant="secondary">{translate(`TestimonialsPage.testimonial${index+1}_date`, testimonial.date)}</Badge>
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
