import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format, parseISO } from 'date-fns';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <article>
      <header className="relative h-[50vh] min-h-[400px]">
        <Image
          src={`${post.imageUrl}?${post.slug}`}
          alt={post.title}
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
              {post.title}
            </h1>
          </div>
        </div>
      </header>

      <div className="container max-w-4xl mx-auto py-12 md:py-16">
        <div
          className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-headings:text-primary"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <Separator className="my-12 md:my-16" />

        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.slug}>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">
                    <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{relatedPost.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
