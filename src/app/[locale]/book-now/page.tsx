'use client';
import { BookingForm } from './_components/BookingForm';

export default function BookNowPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">Book Your Spell</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto">
            Take the first step towards restoring harmony in your life. Your information is 100% confidential.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
