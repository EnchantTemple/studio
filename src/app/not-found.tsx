import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Frown } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-4">
      <Frown className="w-24 h-24 text-primary mb-4" />
      <h1 className="text-4xl md:text-6xl font-bold font-headline mb-2">404 - Page Not Found</h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-8">
        The sacred path you seek is not here. Let's guide you back home.
      </p>
      <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
        <Link href="/">Return to Homepage</Link>
      </Button>
    </div>
  );
}
