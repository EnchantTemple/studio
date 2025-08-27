'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingSchema, type BookingFormValues } from '@/lib/schemas';
import { services } from '@/lib/data';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, CheckCircle, X } from 'lucide-react';
import Link from 'next/link';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

async function submitBooking(data: BookingFormValues) {
  'use server';

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


export function BookingForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: '',
      whatsappNumber: '',
      email: '',
      spellType: undefined,
      targetPersonName: '',
      message: '',
      photo: undefined,
      termsAccepted: false,
    },
  });

  async function onSubmit(data: BookingFormValues) {
    setIsSubmitting(true);
    const result = await submitBooking(data);
    setIsSubmitting(false);

    if (result.success) {
      setShowSuccess(true);
      form.reset();
    } else {
      toast({
        title: 'Error',
        description: 'There was a problem with your submission. Please check the form and try again.',
        variant: 'destructive',
      });
    }
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Your Confidential Information</CardTitle>
          <CardDescription>Please fill out the form below to begin your consultation.</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="whatsappNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 123 456 7890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="spellType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type of Spell</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a spell service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.key} value={service.name}>
                            {service.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="targetPersonName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Person’s First Name (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="photo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Upload Photo (Optional)</FormLabel>
                    <FormControl>
                      <Input type="file" onChange={(e) => field.onChange(e.target.files)} />
                    </FormControl>
                     <FormDescription>
                      A photo can help focus the spell's energy. Max 5MB.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Describe Your Situation</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us a little bit about your situation..."
                        className="resize-y min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="termsAccepted"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I accept the <Link href="/privacy-policy" className="underline hover:text-primary">Terms & Conditions</Link>.
                      </FormLabel>
                       <FormDescription>
                        Your data is safe and will never be shared.
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              {/* A placeholder for reCAPTCHA integration as requested.
                  To implement, you would use a library like 'react-google-recaptcha'
                  and include its component here, passing the site key via props.
                  The token received would then be sent with the form data for server-side verification.
              */}
               <div className="text-xs text-muted-foreground">
                  This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" className="underline">Privacy Policy</a> and <a href="https://policies.google.com/terms" className="underline">Terms of Service</a> apply.
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Book Your Spell'
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md p-8 text-center" hideCloseButton>
          <button onClick={() => setShowSuccess(false)} className="absolute top-2 right-2 p-1 rounded-full text-muted-foreground hover:bg-muted">
            <X className="h-5 w-5" />
          </button>
          <div className="flex flex-col items-center">
            <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold font-headline mb-2">Booking Sent!</h2>
            <p className="text-muted-foreground">You will be contacted via WhatsApp within 12 hours.</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

    