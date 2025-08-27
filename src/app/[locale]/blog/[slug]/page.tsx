'use client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import type { BlogPost } from '@/lib/types';
import { useTranslations, useLocale } from 'next-intl';

type Props = {
  params: { slug: string };
};

export default function BlogPostPage({ params }: Props) {
  const [post, setPost] = useState<Omit<BlogPost, 'title'|'excerpt'|'content'> | undefined>(undefined);
  const [relatedPosts, setRelatedPosts] = useState<Omit<BlogPost, 'title'|'excerpt'|'content'>[]>([]);
  const t = useTranslations('BlogPage');
  const locale = useLocale();

  useEffect(() => {
    const fetchPosts = () => {
      const allPosts = getBlogPosts();
      const currentPost = allPosts.find((p) => p.slug === params.slug);
      if (currentPost) {
        setPost(currentPost);
        const related = allPosts
          .filter((p) => p.slug !== currentPost.slug)
          .slice(0, 2);
        setRelatedPosts(related);
      } else {
        notFound();
      }
    };
    fetchPosts();
  }, [params.slug]);

  if (!post) {
    return null; // or a loading spinner
  }

  return (
    <article>
      <header className="relative h-[50vh] min-h-[400px]">
        <Image
          src={`${post.imageUrl}?${post.slug}`}
          alt={t(`${post.key}_title`)}
          data-ai-hint="mystical abstract"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white z-10">
            <Badge variant="secondary">{format(parseISO(post.date), 'MMMM d, yyyy')}</Badge>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold font-headline">
              {t(`${post.key}_title`)}
            </h1>
          </div>
        </div>
      </header>

      <div className="container max-w-4xl mx-auto py-12 md:py-16">
        <div
          className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-headings:text-primary"
          dangerouslySetInnerHTML={{ __html: t.raw(`${post.key}_content`) }}
        />
        
        <Separator className="my-12 md:my-16" />

        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline mb-8">{t('related_articles')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.slug}>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">
                    <Link href={`/${locale}/blog/${relatedPost.slug}`}>{t(`${relatedPost.key}_title`)}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{t(`${relatedPost.key}_excerpt`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
