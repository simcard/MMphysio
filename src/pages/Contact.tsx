import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/shared/PageHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <PageHero
          title="Contact Us"
          subtitle="We'd love to hear from you. Reach out with any questions or prayer requests."
          backgroundImage="https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?w=1920&q=80"
        />

        <section className="section-padding bg-background">
          <div className="container-church">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-semibold mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you have questions about our services, want to get involved, or need 
                    prayer support, we're here for you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground text-sm">
                        123 Faith Avenue<br />
                        Graceville, ST 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href="tel:+1234567890" className="text-muted-foreground text-sm hover:text-secondary transition-colors">
                        (123) 456-7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:info@gracecommunity.church" className="text-muted-foreground text-sm hover:text-secondary transition-colors">
                        info@gracecommunity.church
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office Hours</h3>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: By Appointment<br />
                        Sunday: During Services
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h2 className="font-serif text-2xl font-semibold mb-6">Send us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding bg-muted/50">
          <div className="container-church">
            <div className="text-center mb-8">
              <h2 className="section-title">Find Us</h2>
              <p className="section-subtitle mx-auto">Visit us at our location</p>
            </div>
            <div className="bg-card rounded-2xl overflow-hidden h-[400px] flex items-center justify-center border border-border">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">Grace Community Church</h3>
                <p className="text-muted-foreground mb-4">
                  123 Faith Avenue, Graceville, ST 12345
                </p>
                <a
                  href="https://maps.google.com/?q=123+Faith+Avenue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-secondary hover:underline font-medium"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
