import { z } from 'zod';
import { services } from './data';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const serviceNames = services.map(s => s.name) as [string, ...string[]];

export const bookingSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  whatsappNumber: z.string().min(10, { message: "Please enter a valid WhatsApp number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  spellType: z.enum(serviceNames, {
    errorMap: () => ({ message: "Please select a valid spell type." }),
  }),
  targetPersonName: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(1000),
  photo: z.any()
    .refine((files) => !files || files.length === 0 || files?.[0]?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (files) => !files || files.length === 0 || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    )
    .optional(),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions."
  }),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
