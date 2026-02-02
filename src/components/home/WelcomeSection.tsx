import { Heart, Users, BookOpen, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: BookOpen,
    title: 'Sunday Worship',
    description: 'Experience powerful worship and life-changing messages every Sunday.',
    link: '/services',
  },
  {
    icon: Users,
    title: 'Community Groups',
    description: 'Connect with others in small groups for fellowship and growth.',
    link: '/about',
  },
  {
    icon: Heart,
    title: 'Outreach Ministry',
    description: 'Serve our community and share God\'s love through practical action.',
    link: '/services',
  },
  {
    icon: Calendar,
    title: 'Events & Programs',
    description: 'Join our various programs designed for all ages and stages of life.',
    link: '/youth',
  },
];

export function WelcomeSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-church">
        <div className="text-center mb-16">
          <span className="text-secondary font-medium uppercase tracking-wider text-sm">Welcome to Grace Community</span>
          <h2 className="section-title mt-4">A Place to Belong</h2>
          <p className="section-subtitle mx-auto">
            We are a church family committed to loving God, loving people, and making a difference in our community and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link
              key={feature.title}
              to={feature.link}
              className="group p-8 rounded-2xl bg-card hover:bg-primary transition-all duration-300 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-secondary/10 group-hover:bg-secondary flex items-center justify-center mb-6 transition-colors">
                <feature.icon className="w-8 h-8 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground group-hover:text-primary-foreground transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors leading-relaxed">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Scripture Quote */}
        <div className="mt-20 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-serif italic text-foreground leading-relaxed">
              "For where two or three gather in my name, there am I with them."
            </p>
            <cite className="block mt-4 text-secondary font-medium">— Matthew 18:20</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
