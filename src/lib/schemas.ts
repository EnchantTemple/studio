import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

type ErrorMessages = {
  fullName: string;
  whatsappNumber: string;
  email: string;
  spellType: string;
  messageLength: string;
  photoSize: string;
  photoType: string;
  termsAccepted: string;
};

export const bookingSchema = (t: ErrorMessages) => z.object({
  fullName: z.string().min(2, { message: t.fullName }),
  whatsappNumber: z.string().min(10, { message: t.whatsappNumber }),
  email: z.string().email({ message: t.email }),
  spellType: z.string({
    required_error: t.spellType,
  }),
  targetPersonName: z.string().optional(),
  message: z.string().min(10, { message: t.messageLength }).max(1000),
  photo: z.any()
    .refine((files) => !files || files.length === 0 || files?.[0]?.size <= MAX_FILE_SIZE, t.photoSize)
    .refine(
      (files) => !files || files.length === 0 || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      t.photoType
    )
    .optional(),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: t.termsAccepted
  }),
});


export type BookingFormValues = z.infer<ReturnType<typeof bookingSchema>>;
