import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

// Note: We can't get the service names dynamically here as this file is used on the client
// and we can't do an async call. The validation is primarily for form structure,
// the actual values will be based on what's rendered in the select dropdown.

export const bookingSchema = (t: any) => z.object({
  fullName: z.string().min(2, { message: t('form.errors.fullName') }),
  whatsappNumber: z.string().min(10, { message: t('form.errors.whatsappNumber') }),
  email: z.string().email({ message: t('form.errors.email') }),
  spellType: z.string({
    required_error: t('form.errors.spellType'),
  }),
  targetPersonName: z.string().optional(),
  message: z.string().min(10, { message: t('form.errors.messageLength') }).max(1000),
  photo: z.any()
    .refine((files) => !files || files.length === 0 || files?.[0]?.size <= MAX_FILE_SIZE, t('form.errors.photoSize'))
    .refine(
      (files) => !files || files.length === 0 || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      t('form.errors.photoType')
    )
    .optional(),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: t('form.errors.termsAccepted')
  }),
});


export type BookingFormValues = z.infer<ReturnType<typeof bookingSchema>>;

// Add error messages to your translation files, e.g., en.json:
/*
"BookNowPage": {
  ...
  "form": {
    "errors": {
      "fullName": "Full name must be at least 2 characters.",
      "whatsappNumber": "Please enter a valid WhatsApp number.",
      "email": "Please enter a valid email address.",
      "spellType": "Please select a valid spell type.",
      "messageLength": "Message must be at least 10 characters.",
      "photoSize": "Max image size is 5MB.",
      "photoType": "Only .jpg, .jpeg, .png and .webp formats are supported.",
      "termsAccepted": "You must accept the terms and conditions."
    }
  }
}
*/
