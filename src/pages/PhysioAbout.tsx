import { Link } from 'react-router-dom';
import { PhysioHeader } from '@/components/layout/PhysioHeader';
import { PhysioFooter } from '@/components/layout/PhysioFooter';
import { Button } from '@/components/ui/button';
import { CheckCircle, Heart, Target, Users, Award, Shield } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Patient-Centered Care',
    description: 'Every treatment plan is tailored to your unique needs, goals, and lifestyle.',
  },
  {
    icon: Target,
    title: 'Evidence-Based Practice',
    description: 'We use the latest research and proven techniques to ensure the best outcomes.',
  },
  {
    icon: Users,
    title: 'Collaborative Approach',
    description: 'We work together with you as a team to achieve your rehabilitation goals.',
  },
  {
    icon: Award,
    title: 'Excellence in Care',
    description: 'Committed to providing the highest standard of physiotherapy services.',
  },
  {
    icon: Shield,
    title: 'Trust & Integrity',
    description: 'Building lasting relationships based on honesty and professional ethics.',
  },
  {
    icon: CheckCircle,
    title: 'Continuous Improvement',
    description: 'Always learning and evolving to bring you the best treatment options.',
  },
];

const PhysioAbout = () => {
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
              About Us
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in-up stagger-1">
              Dedicated to helping you achieve optimal physical health and well-being.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding bg-background">
          <div className="container-physio">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Story</span>
                <h2 className="section-title mt-4">A Legacy of Healing</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  MM Physio was founded in 2010 with a simple mission: to provide exceptional 
                  physiotherapy care that truly makes a difference in people's lives. What started 
                  as a small practice has grown into a trusted healthcare provider serving thousands 
                  of patients across Johannesburg.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Our founder, Dr. Michelle Meyer, envisioned a clinic where patients receive 
                  not just treatment, but comprehensive care that addresses the root cause of 
                  their conditions. Today, that vision continues to guide everything we do.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  With over 15 years of combined experience and more than 10,000 patients treated, 
                  we've established ourselves as leaders in physiotherapy, specializing in sports 
                  injuries, post-surgical rehabilitation, and chronic pain management.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                  alt="MM Physio clinic"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-muted/50">
          <div className="container-physio">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl p-10 border border-border">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To provide exceptional, patient-centered physiotherapy care that empowers 
                  individuals to achieve their optimal physical health, recover from injury, 
                  and enhance their quality of life through evidence-based treatments and 
                  compassionate service.
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-10 border border-border">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the leading physiotherapy practice in South Africa, recognized for 
                  our commitment to excellence, innovative treatment approaches, and the 
                  positive impact we make on our patients' lives and the broader community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section-padding bg-background">
          <div className="container-physio">
            <div className="text-center mb-16">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">What Guides Us</span>
              <h2 className="section-title mt-4">Our Core Values</h2>
              <p className="section-subtitle mx-auto">
                These principles shape our approach to care and define who we are.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="bg-card rounded-2xl p-8 card-hover border border-border text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Philosophy */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-physio">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary-foreground/70 font-medium uppercase tracking-wider text-sm">
                  Our Approach
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4 mb-6">
                  Treatment Philosophy
                </h2>
                <p className="text-primary-foreground/90 text-lg leading-relaxed mb-6">
                  We believe that effective physiotherapy goes beyond simply treating symptoms. 
                  Our holistic approach addresses the underlying causes of pain and dysfunction, 
                  ensuring long-lasting results and preventing future problems.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Comprehensive assessment to understand your unique condition',
                    'Personalized treatment plans tailored to your goals',
                    'Combination of manual therapy and exercise prescription',
                    'Education to empower you in your recovery journey',
                    'Regular progress monitoring and plan adjustments',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-background flex-shrink-0 mt-1" />
                      <span className="text-primary-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-background text-foreground hover:bg-background/90 rounded-full px-8">
                  <Link to="/booking">Book a Consultation</Link>
                </Button>
              </div>
              <div className="relative hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1571019613576-2b22c76fd955?w=800&q=80"
                  alt="Treatment session"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted/50">
          <div className="container-physio text-center">
            <h2 className="section-title">Ready to Experience the Difference?</h2>
            <p className="section-subtitle mx-auto mb-8">
              Join thousands of satisfied patients who have trusted MM Physio with their care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
                <Link to="/team">Meet Our Team</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8">
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

export default PhysioAbout;
