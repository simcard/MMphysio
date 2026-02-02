import { Link } from 'react-router-dom';
import { PhysioHeader } from '@/components/layout/PhysioHeader';
import { PhysioFooter } from '@/components/layout/PhysioFooter';
import { usePhysioStore } from '@/store/physioStore';
import { Button } from '@/components/ui/button';
import { 
  Activity, HeartPulse, ShieldCheck, Hand, Target, Dumbbell, 
  ArrowRight, CheckCircle, Phone, Calendar, Users, Award
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'activity': Activity,
  'heart-pulse': HeartPulse,
  'shield-check': ShieldCheck,
  'hand': Hand,
  'target': Target,
  'dumbbell': Dumbbell,
};

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '10,000+', label: 'Patients Treated' },
  { value: '4', label: 'Expert Therapists' },
  { value: '98%', label: 'Patient Satisfaction' },
];

const PhysioHome = () => {
  const { services } = usePhysioStore();

  return (
    <div className="min-h-screen">
      <PhysioHeader />
      
      <main className="pt-28 md:pt-32">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-muted via-background to-muted">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
          </div>
          
          <div className="container-physio relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Award className="w-4 h-4" />
                  Expert Physiotherapy Care
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                  Move Better,<br />
                  <span className="text-primary">Feel Better</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                  Personalized physiotherapy treatments designed to help you recover, 
                  strengthen, and achieve your optimal physical health.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg">
                    <Link to="/booking">
                      Book Appointment
                      <Calendar className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-6 text-lg">
                    <a href="tel:+27112345678">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Us
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="relative hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80" 
                  alt="Physiotherapy treatment"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-xl border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-foreground">10,000+</p>
                      <p className="text-sm text-muted-foreground">Happy Patients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary">
          <div className="container-physio">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">{stat.value}</p>
                  <p className="text-primary-foreground/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-background">
          <div className="container-physio">
            <div className="text-center mb-16">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">What We Offer</span>
              <h2 className="section-title mt-4">Our Services</h2>
              <p className="section-subtitle mx-auto">
                Comprehensive physiotherapy services tailored to your unique needs and goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = iconMap[service.icon] || Activity;
                return (
                  <div
                    key={service.id}
                    className="bg-card rounded-2xl p-8 card-hover border border-border group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                      <IconComponent className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.slice(0, 3).map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8">
                <Link to="/about" className="flex items-center gap-2">
                  Learn More About Us <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="section-padding bg-muted/50">
          <div className="container-physio">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                  alt="Physiotherapy clinic"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
                  <p className="text-4xl font-bold">15+</p>
                  <p className="text-sm opacity-90">Years of Excellence</p>
                </div>
              </div>
              
              <div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm">About MM Physio</span>
                <h2 className="section-title mt-4">Your Partner in Recovery</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  At MM Physio, we believe in a patient-centered approach to physiotherapy. 
                  Our experienced team combines evidence-based techniques with personalized 
                  care to help you achieve your health and movement goals.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Evidence-based treatment protocols',
                    'Personalized rehabilitation programs',
                    'State-of-the-art equipment',
                    'Compassionate, patient-focused care',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
                  <Link to="/team">Meet Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-physio text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Book your appointment today and take the first step towards better movement, 
              reduced pain, and improved quality of life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-background text-foreground hover:bg-background/90 rounded-full px-8 py-6 text-lg">
                <Link to="/booking">Book Online Now</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary-foreground text-foreground hover:bg-primary-foreground hover:text-primary rounded-full px-8 py-6 text-lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <PhysioFooter />
    </div>
  );
};

export default PhysioHome;
