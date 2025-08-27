'use server';

import { bookingSchema, type BookingFormValues } from '@/lib/schemas';
import messages from '../../../messages/en.json';

// A simple helper to get nested keys.
const getErrorMessages = (key: string) => {
    const path = `BookNowPage.form.errors.${key}`;
    return path.split('.').reduce((obj: any, k) => (obj && obj[k] !== 'undefined') ? obj[k] : undefined, messages);
}

export async function submitBooking(data: BookingFormValues) {
  const schema = bookingSchema({
      fullName: getErrorMessages('fullName') || 'Full name must be at least 2 characters.',
      whatsappNumber: getErrorMessages('whatsappNumber') || 'Please enter a valid WhatsApp number.',
      email: getErrorMessages('email') || 'Please enter a valid email address.',
      spellType: getErrorMessages('spellType') || 'Please select a valid spell type.',
      messageLength: getErrorMessages('messageLength') || 'Message must be at least 10 characters.',
      photoSize: getErrorMessages('photoSize') || 'Max image size is 5MB.',
      photoType: getErrorMessages('photoType') || 'Only .jpg, .jpeg, .png and .webp formats are supported.',
      termsAccepted: getErrorMessages('termsAccepted') || 'You must accept the terms and conditions.',
  });
  
  const validationResult = schema.safeParse(data);

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
