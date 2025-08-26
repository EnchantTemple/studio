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

  // Here you would typically handle the form data, e.g.:
  // - Save to a database
  // - Send an email notification (e.g., using Resend, Nodemailer)
  // - Process the photo upload (store in a service like Cloudinary or Firebase Storage)
  // - Handle payment integration
  
  console.log('Booking submitted:', validationResult.data);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // For this example, we'll just return a success message.
  return {
    success: true,
    message: "Booking Sent!",
  };
}
