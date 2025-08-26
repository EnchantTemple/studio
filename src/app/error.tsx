'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-4">
      <AlertTriangle className="w-24 h-24 text-destructive mb-4" />
      <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">Something went wrong!</h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-8">
        An unexpected disturbance in the energy has occurred. Please try again.
      </p>
      <Button onClick={() => reset()} size="lg">
        Try Again
      </Button>
    </div>
  );
}
