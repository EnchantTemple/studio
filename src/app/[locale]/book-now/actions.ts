
'use server';

import { bookingSchema, type BookingFormValues } from '@/lib/schemas';
import { getTranslations } from 'next-intl/server';


export async function submitBooking(data: BookingFormValues) {
  const t = await getTranslations('BookNowPage');
  const validationResult = bookingSchema(t).safeParse(data);

  if (!validationResult.success) {
    return {
      success: false,
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  console.log('Booking submitted:', validationResult.data);

  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    message: "Booking Sent!",
  };
}

