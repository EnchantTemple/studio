'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { format, parseISO } from 'date-fns';
import { useTranslations, useLocale } from 'next-intl';

export default function BlogPage() {
  const t = useTranslations('BlogPage');
  const locale = useLocale();
  const posts = [
    { key: 'post1', slug: '5-signs-you-need-a-love-spell', date: new Date(2024, 5, 15).toISOString() },
    { key: 'post2', slug: 'how-the-full-moon-affects-spell-energy', date: new Date(2024, 5, 10).toISOString() },
    { key: 'post3', slug: 'why-african-love-spells-are-so-powerful', date: new Date(2024, 5, 5).toISOString() },
    { key: 'post4', slug: 'the-truth-about-black-magic', date: new Date(2024, 5, 1).toISOString() }
  ];


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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={post.slug} className="flex flex-col overflow-hidden">
                <Link href={`/${locale}/blog/${post.slug}`} className="block">
                  <Image
                    src={`https://picsum.photos/800/600?random=${index + 10}`}
                    alt={t(`${post.key}_title`)}
                    data-ai-hint="mystical abstract"
                    width={800}
                    height={600}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">
                    <Link href={`/${locale}/blog/${post.slug}`}>{t(`${post.key}_title`)}</Link>
                  </CardTitle>
                  <CardDescription>
                    <time dateTime={post.date}>
                      {format(parseISO(post.date), 'MMMM d, yyyy')}
                    </time>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{t(`${post.key}_excerpt`)}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0">
                    <Link href={`/${locale}/blog/${post.slug}`}>{t('read_more')}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
