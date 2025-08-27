'use server';

import { bookingSchema, type BookingFormValues } from '@/lib/schemas';

export async function submitBooking(data: BookingFormValues) {
  const validationResult = bookingSchema.safeParse(data);

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
