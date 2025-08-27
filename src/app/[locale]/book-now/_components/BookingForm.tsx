
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingSchema, type BookingFormValues } from '@/lib/schemas';
import { getServices } from '@/lib/data';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('BookNowPage');
  const tServices = useTranslations('HomePage.Services');
  
  const [services, setServices] = useState<Service[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { translate } = useTranslation();

  const [content, setContent] = useState({
    form_title: t('form_title'),
    form_desc: t('form_desc'),
    fullName_label: t('fullName_label'),
    fullName_placeholder: t('fullName_placeholder'),
    whatsapp_label: t('whatsapp_label'),
    whatsapp_placeholder: t('whatsapp_placeholder'),
    email_label: t('email_label'),
    email_placeholder: t('email_placeholder'),
    spellType_label: t('spellType_label'),
    spellType_placeholder: t('spellType_placeholder'),
    targetName_label: t('targetName_label'),
    targetName_placeholder: t('targetName_placeholder'),
    photo_label: t('photo_label'),
    photo_desc: t('photo_desc'),
    situation_label: t('situation_label'),
    situation_placeholder: t('situation_placeholder'),
    terms_label: t.raw('terms_label'),
    terms_link_text: t('terms_link_text'),
    terms_desc: t('terms_desc'),
    recaptcha: t.raw('recaptcha'),
    submitting: t('submitting'),
    submit_button: t('submit_button'),
    success_title: t('success_title'),
    success_desc: t('success_desc'),
    error_title: t('error_title'),
    error_desc: t('error_desc'),
  });

  useEffect(() => {
    const translateContent = async () => {
      const translated = {
        form_title: await translate(t('form_title')),
        form_desc: await translate(t('form_desc')),
        fullName_label: await translate(t('fullName_label')),
        fullName_placeholder: await translate(t('fullName_placeholder')),
        whatsapp_label: await translate(t('whatsapp_label')),
        whatsapp_placeholder: await translate(t('whatsapp_placeholder')),
        email_label: await translate(t('email_label')),
        email_placeholder: await translate(t('email_placeholder')),
        spellType_label: await translate(t('spellType_label')),
        spellType_placeholder: await translate(t('spellType_placeholder')),
        targetName_label: await translate(t('targetName_label')),
        targetName_placeholder: await translate(t('targetName_placeholder')),
        photo_label: await translate(t('photo_label')),
        photo_desc: await translate(t('photo_desc')),
        situation_label: await translate(t('situation_label')),
        situation_placeholder: await translate(t('situation_placeholder')),
        terms_label: await translate(t.raw('terms_label')),
        terms_link_text: await translate(t('terms_link_text')),
        terms_desc: await translate(t('terms_desc')),
        recaptcha: await translate(t.raw('recaptcha')),
        submitting: await translate(t('submitting')),
        submit_button: await translate(t('submit_button')),
        success_title: await translate(t('success_title')),
        success_desc: await translate(t('success_desc')),
        error_title: await translate(t('error_title')),
        error_desc: await translate(t('error_desc')),
      };
      setContent(translated);
    };
    translateContent();
  }, [translate, t]);


  useEffect(() => {
    const fetchServices = async () => {
      const fetchedServices = await getServices(tServices);
      setServices(fetchedServices);
    };
    fetchServices();
  }, [tServices]);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema(t)),
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
                        {t.rich('terms_label', {
                          termsLink: (chunks) => <Link href="/privacy-policy" className="underline hover:text-primary">{chunks}</Link>
                        })}
                      </label>
                      <FormDescription>
                        {content.terms_desc}
                      </FormDescription>
                       <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

               <div className="text-xs text-muted-foreground">
                  {t.rich('recaptcha', {
                    privacyLink: (chunks) => <a href="https://policies.google.com/privacy" className="underline">{chunks}</a>,
                    termsServiceLink: (chunks) => <a href="https://policies.google.com/terms" className="underline">{chunks}</a>
                  })}
              </div>
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
