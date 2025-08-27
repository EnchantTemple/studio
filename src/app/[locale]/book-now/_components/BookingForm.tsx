'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingSchema, type BookingFormValues } from '@/lib/schemas';
import { getServices } from '@/lib/data';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, CheckCircle, X } from 'lucide-react';
import { Link } from '@/navigation';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import type { Service } from '@/lib/types';
import { submitBooking } from '../actions';
import { useTranslation } from '@/hooks/useTranslation';


export function BookingForm() {
  const { toast } = useToast();
  
  const [services, setServices] = useState<Service[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { translate } = useTranslation();

  const [content, setContent] = useState({
    form_title: 'Your Confidential Information',
    form_desc: 'Please fill out the form below to begin your consultation.',
    fullName_label: 'Full Name',
    fullName_placeholder: 'Your full name',
    whatsapp_label: 'WhatsApp Number',
    whatsapp_placeholder: '+1 123 456 7890',
    email_label: 'Email Address',
    email_placeholder: 'you@example.com',
    spellType_label: 'Type of Spell',
    spellType_placeholder: 'Select a spell service',
    targetName_label: 'Target Person’s First Name (Optional)',
    targetName_placeholder: 'e.g., John',
    photo_label: 'Upload Photo (Optional)',
    photo_desc: 'A photo can help focus the spell\'s energy. Max 5MB.',
    situation_label: 'Describe Your Situation',
    situation_placeholder: 'Tell us a little bit about your situation...',
    terms_label: 'I accept the {termsLink}.',
    terms_link_text: 'Terms & Conditions',
    terms_desc: 'Your data is safe and will never be shared.',
    recaptcha: 'This site is protected by reCAPTCHA and the Google {privacyLink} and {termsServiceLink} apply.',
    submitting: 'Submitting...',
    submit_button: 'Book Your Spell',
    success_title: 'Booking Sent!',
    success_desc: 'You will be contacted via WhatsApp within 12 hours.',
    error_title: 'Error',
    error_desc: 'There was a problem with your submission. Please check the form and try again.',
  });

  const t = (key: string, defaultText: string) => translate(`BookNowPage.${key}`, defaultText);
  const tErrors = (key: string, defaultText: string) => translate(`BookNowPage.form.errors.${key}`, defaultText);
  
  useEffect(() => {
    const translateContent = async () => {
      setContent({
        form_title: t('form_title', 'Your Confidential Information'),
        form_desc: t('form_desc', 'Please fill out the form below to begin your consultation.'),
        fullName_label: t('fullName_label', 'Full Name'),
        fullName_placeholder: t('fullName_placeholder', 'Your full name'),
        whatsapp_label: t('whatsapp_label', 'WhatsApp Number'),
        whatsapp_placeholder: t('whatsapp_placeholder', '+1 123 456 7890'),
        email_label: t('email_label', 'Email Address'),
        email_placeholder: t('email_placeholder', 'you@example.com'),
        spellType_label: t('spellType_label', 'Type of Spell'),
        spellType_placeholder: t('spellType_placeholder', 'Select a spell service'),
        targetName_label: t('targetName_label', 'Target Person’s First Name (Optional)'),
        targetName_placeholder: t('targetName_placeholder', 'e.g., John'),
        photo_label: t('photo_label', 'Upload Photo (Optional)'),
        photo_desc: t('photo_desc', "A photo can help focus the spell's energy. Max 5MB."),
        situation_label: t('situation_label', 'Describe Your Situation'),
        situation_placeholder: t('situation_placeholder', 'Tell us a little bit about your situation...'),
        terms_label: t('terms_label', 'I accept the {termsLink}.'),
        terms_link_text: t('terms_link_text', 'Terms & Conditions'),
        terms_desc: t('terms_desc', 'Your data is safe and will never be shared.'),
        recaptcha: t('recaptcha', 'This site is protected by reCAPTCHA and the Google {privacyLink} and {termsServiceLink} apply.'),
        submitting: t('submitting', 'Submitting...'),
        submit_button: t('submit_button', 'Book Your Spell'),
        success_title: t('success_title', 'Booking Sent!'),
        success_desc: t('success_desc', 'You will be contacted via WhatsApp within 12 hours.'),
        error_title: t('error_title', 'Error'),
        error_desc: t('error_desc', 'There was a problem with your submission. Please check the form and try again.'),
      });
    };
    translateContent();
  }, [translate]);


  useEffect(() => {
    const fetchServices = async () => {
      const fetchedServices = getServices();
      setServices(fetchedServices);
    };
    fetchServices();
  }, []);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema({
      fullName: tErrors('fullName', 'Full name must be at least 2 characters.'),
      whatsappNumber: tErrors('whatsappNumber', 'Please enter a valid WhatsApp number.'),
      email: tErrors('email', 'Please enter a valid email address.'),
      spellType: tErrors('spellType', 'Please select a valid spell type.'),
      messageLength: tErrors('messageLength', 'Message must be at least 10 characters.'),
      photoSize: tErrors('photoSize', 'Max image size is 5MB.'),
      photoType: tErrors('photoType', 'Only .jpg, .jpeg, .png and .webp formats are supported.'),
      termsAccepted: tErrors('termsAccepted', 'You must accept the terms and conditions.'),
    })),
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
        title: content.error_title,
        description: result.message || content.error_desc,
        variant: 'destructive',
      });
    }
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">{content.form_title}</CardTitle>
          <CardDescription>{content.form_desc}</CardDescription>
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
                      <FormLabel>{content.fullName_label}</FormLabel>
                      <FormControl>
                        <Input placeholder={content.fullName_placeholder} {...field} />
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
                      <FormLabel>{content.whatsapp_label}</FormLabel>
                      <FormControl>
                        <Input placeholder={content.whatsapp_placeholder} {...field} />
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
                    <FormLabel>{content.email_label}</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder={content.email_placeholder} {...field} />
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
                    <FormLabel>{content.spellType_label}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={content.spellType_placeholder} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.key} value={service.name}>
                            {translate(`HomePage.Services.${service.key}_name`, service.name)}
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
                    <FormLabel>{content.targetName_label}</FormLabel>
                    <FormControl>
                      <Input placeholder={content.targetName_placeholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="photo"
                render={({ field: { onChange, value, ...rest } }) => (
                  <FormItem>
                    <FormLabel>{content.photo_label}</FormLabel>
                    <FormControl>
                      <Input type="file" onChange={(e) => onChange(e.target.files)} {...rest} />
                    </FormControl>
                     <FormDescription>
                      {content.photo_desc}
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
                    <FormLabel>{content.situation_label}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={content.situation_placeholder}
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
                       <label
                        htmlFor={field.name}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {content.terms_label.replace('{termsLink}', '')}
                        <Link href="/privacy-policy" className="underline hover:text-primary">{content.terms_link_text}</Link>
                      </label>
                      <FormDescription>
                        {content.terms_desc}
                      </FormDescription>
                       <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

               <div className="text-xs text-muted-foreground"
                    dangerouslySetInnerHTML={{
                        __html: content.recaptcha
                            .replace('{privacyLink}', `<a href="https://policies.google.com/privacy" class="underline">Privacy Policy</a>`)
                            .replace('{termsServiceLink}', `<a href="https://policies.google.com/terms" class="underline">Terms of Service</a>`)
                    }}
                />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {content.submitting}
                  </>
                ) : (
                  content.submit_button
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
            <h2 className="text-2xl font-bold font-headline mb-2">{content.success_title}</h2>
            <p className="text-muted-foreground">{content.success_desc}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
