'use client';
import { Link } from '@/navigation';
import Image from 'next/image';
import { getBlogPosts } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { format, parseISO } from 'date-fns';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import type { BlogPost } from '@/lib/types';

export default function BlogPage() {
  const t = useTranslations('BlogPage');
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const blogPosts = await getBlogPosts(t);
      setPosts(blogPosts);
    };
    fetchPosts();
  }, [t]);


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
            {posts.map((post) => (
              <Card key={post.slug} className="flex flex-col overflow-hidden">
                <Link href={`/blog/${post.slug}`} className="block">
                  <Image
                    src={`${post.imageUrl}?${post.slug}`}
                    alt={post.title}
                    data-ai-hint="mystical abstract"
                    width={800}
                    height={600}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription>
                    <time dateTime={post.date}>
                      {format(parseISO(post.date), 'MMMM d, yyyy')}
                    </time>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0">
                    <Link href={`/blog/${post.slug}`}>{t('read_more')}</Link>
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
