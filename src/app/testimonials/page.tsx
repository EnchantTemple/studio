import type { Metadata } from 'next';
import { testimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Read authentic testimonials from our happy clients across the globe. See how SolutionTemple has helped reunite lovers and restore relationships.',
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">Words of Gratitude</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto">
            Discover how we've helped others find love and happiness.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Client Success Stories</h2>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex">
                <Star className="w-6 h-6 text-accent fill-accent" />
                <Star className="w-6 h-6 text-accent fill-accent" />
                <Star className="w-6 h-6 text-accent fill-accent" />
                <Star className="w-6 h-6 text-accent fill-accent" />
                <Star className="w-6 h-6 text-accent fill-accent" />
              </div>
              <p className="font-semibold text-lg">4.8 / 5 Star Rating</p>
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
