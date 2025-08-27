
'use server';

import { bookingSchema, type BookingFormValues } from '@/lib/schemas';
import { getTranslations } from 'next-intl/server';


export async function submitBooking(data: BookingFormValues) {
  const t = await getTranslations('BookNowPage');
  const validationResult = bookingSchema(t).safeParse(data);

  if (!validationResult.success) {
    console.error('Validation failed:', validationResult.error.flatten());
    return {
      success: false,
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  // TODO: Implement actual submission logic (e.g., send email, save to database)
  console.log('Booking submitted:', validationResult.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // For now, we'll just return a success response.
  return {
    success: true,
    message: "Booking Sent!",
  };
}
