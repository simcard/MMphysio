import { Link } from 'react-router-dom';
import { PhysioHeader } from '@/components/layout/PhysioHeader';
import { PhysioFooter } from '@/components/layout/PhysioFooter';
import { usePhysioStore } from '@/store/physioStore';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const PhysioTeam = () => {
  const { team } = usePhysioStore();

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
              Our Team
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in-up stagger-1">
              Meet our experienced team of physiotherapy professionals dedicated to your care.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="section-padding bg-background">
          <div className="container-physio">
            <div className="text-center mb-16">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Expert Care</span>
              <h2 className="section-title mt-4">Meet Our Physiotherapists</h2>
              <p className="section-subtitle mx-auto">
                Our team combines years of experience with a passion for helping patients achieve their goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <div 
                  key={member.id}
                  className="bg-card rounded-2xl overflow-hidden card-hover border border-border"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    {/* Photo */}
                    <div className="lg:col-span-2">
                      <div className="aspect-square lg:aspect-auto lg:h-full overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Info */}
                    <div className="lg:col-span-3 p-8">
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-4">{member.role}</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {member.bio}
                      </p>
                      
                      {/* Qualifications */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="w-5 h-5 text-primary" />
                          <span className="font-medium text-foreground">Qualifications</span>
                        </div>
                        <ul className="pl-7 space-y-1">
                          {member.qualifications.map((qual) => (
                            <li key={qual} className="text-sm text-muted-foreground">• {qual}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Specializations */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-5 h-5 text-primary" />
                          <span className="font-medium text-foreground">Specializations</span>
                        </div>
                        <div className="flex flex-wrap gap-2 pl-7">
                          {member.specializations.map((spec) => (
                            <span 
                              key={spec} 
                              className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Team */}
        <section className="section-padding bg-muted/50">
          <div className="container-physio">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Why Choose Us</span>
                <h2 className="section-title mt-4">Trusted Expertise</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Our team is committed to ongoing professional development, staying current 
                  with the latest research and treatment techniques to provide you with the 
                  best possible care.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Registered with the Health Professions Council of South Africa',
                    'Continuous professional development and training',
                    'Multidisciplinary approach to patient care',
                    'Experience across diverse patient populations',
                    'Specialized expertise in various conditions',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-foreground text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                  alt="Our team in action"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-physio text-center">
            <Calendar className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Book Your Appointment?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Choose your preferred therapist and book your session today.
            </p>
            <Button asChild className="bg-background text-foreground hover:bg-background/90 rounded-full px-8 py-6 text-lg">
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <PhysioFooter />
    </div>
  );
};

export default PhysioTeam;
