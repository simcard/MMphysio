import { useState } from 'react';
import { PhysioHeader } from '@/components/layout/PhysioHeader';
import { PhysioFooter } from '@/components/layout/PhysioFooter';
import { usePhysioStore } from '@/store/physioStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email').max(255),
  phone: z.string().optional(),
  subject: z.string().min(2, 'Subject is required').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const PhysioContact = () => {
  const { locations } = usePhysioStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will respond shortly.',
    });
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <PhysioHeader />
      
      <main className="pt-28 md:pt-32">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-background rounded-full blur-3xl" />
          </div>
          <div className="container-physio relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in-up">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in-up stagger-1">
              Get in touch with us. We're here to help with your physiotherapy needs.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding bg-background">
          <div className="container-physio">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h2 className="font-heading text-2xl font-bold mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          {...register('name')}
                          className="bg-background"
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive">{errors.name.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          {...register('email')}
                          className="bg-background"
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+27 76 485 2291"
                          {...register('phone')}
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">Subject *</label>
                        <Input
                          id="subject"
                          placeholder="How can we help?"
                          {...register('subject')}
                          className="bg-background"
                        />
                        {errors.subject && (
                          <p className="text-sm text-destructive">{errors.subject.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message *</label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your enquiry..."
                        rows={6}
                        {...register('message')}
                        className="bg-background resize-none"
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="font-heading text-xl font-bold mb-6">General Enquiries</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:++27764852291" className="text-muted-foreground hover:text-primary transition-colors">
                          +27 76 485 2291
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:info@mmphysio.co.za" className="text-muted-foreground hover:text-primary transition-colors">
                          info@mmphysio.co.za
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Operating Hours</p>
                        <p className="text-muted-foreground text-sm">
                          Mon - Fri: 7:00 AM - 6:00 PM<br />
                          Sat: 8:00 AM - 1:00 PM<br />
                          Sun: Closed
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="section-padding bg-muted/50">
          <div className="container-physio">
            <div className="text-center mb-12">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Find Us</span>
              <h2 className="section-title mt-4">Our Locations</h2>
              <p className="section-subtitle mx-auto">
                Visit us at any of our conveniently located branches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {locations.map((location) => (
                <div key={location.id} className="bg-card rounded-2xl overflow-hidden border border-border">
                  {/* Map Placeholder */}
                  <div className="h-48 bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Map View</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="font-heading text-xl font-bold mb-4">{location.name}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          {location.address}<br />
                          {location.city}
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                        <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">
                          {location.phone}
                        </a>
                      </li>
                      <li className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                        <a href={`mailto:${location.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                          {location.email}
                        </a>
                      </li>
                      <li className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="text-muted-foreground text-sm">
                          {location.hours.map((hour, idx) => (
                            <p key={idx}>{hour}</p>
                          ))}
                        </div>
                      </li>
                    </ul>
                    <Button asChild className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                      <a 
                        href={`https://maps.google.com/?q=${encodeURIComponent(location.address + ', ' + location.city)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <PhysioFooter />
    </div>
  );
};

export default PhysioContact;
