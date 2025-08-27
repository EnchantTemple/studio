
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
import { Label } from '@/components/ui/label';

export function BookingForm() {
  const { toast } = useToast();
  const t = useTranslations('BookNowPage');
  const tServices = useTranslations('HomePage.Services');
  
  const [services, setServices] = useState<Service[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
        title: t('error_title'),
        description: t('error_desc'),
        variant: 'destructive',
      });
    }
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">{t('form_title')}</CardTitle>
          <CardDescription>{t('form_desc')}</CardDescription>
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
                      <FormLabel>{t('fullName_label')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('fullName_placeholder')} {...field} />
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
                      <FormLabel>{t('whatsapp_label')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('whatsapp_placeholder')} {...field} />
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
                    <FormLabel>{t('email_label')}</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder={t('email_placeholder')} {...field} />
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
                    <FormLabel>{t('spellType_label')}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={t('spellType_placeholder')} />
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
                    <FormLabel>{t('targetName_label')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('targetName_placeholder')} {...field} />
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
                    <FormLabel>{t('photo_label')}</FormLabel>
                    <FormControl>
                      <Input type="file" onChange={(e) => onChange(e.target.files)} {...rest} />
                    </FormControl>
                     <FormDescription>
                      {t('photo_desc')}
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
                    <FormLabel>{t('situation_label')}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t('situation_placeholder')}
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
                      <Label>
                        {t.rich('terms_label', {
                          termsLink: (chunks) => <Link href="/privacy-policy" className="underline hover:text-primary">{chunks}</Link>
                        })}
                      </Label>
                      <FormDescription>
                        {t('terms_desc')}
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
                    {t('submitting')}
                  </>
                ) : (
                  t('submit_button')
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
            <h2 className="text-2xl font-bold font-headline mb-2">{t('success_title')}</h2>
            <p className="text-muted-foreground">{t('success_desc')}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
