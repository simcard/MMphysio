import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/shared/PageHero';
import { Heart, Target, Eye, Users } from 'lucide-react';

const leaders = [
  {
    name: 'Pastor David Thompson',
    role: 'Senior Pastor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'Pastor David has been leading Grace Community for over 15 years with a heart for discipleship and community transformation.',
  },
  {
    name: 'Sarah Thompson',
    role: 'Women\'s Ministry Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    bio: 'Sarah leads our women\'s ministry with passion and dedication to helping women grow in their faith journey.',
  },
  {
    name: 'Michael Johnson',
    role: 'Youth Pastor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Pastor Michael has a passion for reaching the next generation with the Gospel and has been with us for 8 years.',
  },
  {
    name: 'Grace Williams',
    role: 'Worship Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    bio: 'Grace leads our worship team with excellence and creates an atmosphere for encountering God\'s presence.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <PageHero
          title="About Us"
          subtitle="Learn more about our church family, our vision, and what we believe."
          backgroundImage="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1920&q=80"
        />

        {/* Our Story */}
        <section className="section-padding bg-background">
          <div className="container-church">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-secondary font-medium uppercase tracking-wider text-sm">Our Story</span>
              <h2 className="section-title mt-4">A Legacy of Faith</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mt-6">
                Grace Community Church was founded in 1985 with a small group of believers who had a vision 
                to create a place where people could encounter God's love and grow in their faith. What started 
                as a handful of families meeting in a living room has grown into a vibrant community of 
                thousands of believers dedicated to making disciples and transforming our city.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                Over the past decades, we've seen countless lives transformed by the power of the Gospel. 
                Our church has planted multiple congregations, launched community outreach programs, and 
                continues to impact lives locally and globally.
              </p>
            </div>
          </div>
        </section>

        {/* Vision, Mission, Values */}
        <section className="section-padding bg-muted/50">
          <div className="container-church">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-8 text-center card-hover">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a Christ-centered community that transforms lives, families, and communities 
                  through the power of the Gospel.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 text-center card-hover">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To love God passionately, love people unconditionally, and make disciples who 
                  make disciples throughout our community and the world.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 text-center card-hover">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Biblical Truth, Authentic Community, Generous Living, Servant Leadership, 
                  and a Heart for the Lost.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Believe */}
        <section className="section-padding bg-background">
          <div className="container-church">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-secondary font-medium uppercase tracking-wider text-sm">Our Faith</span>
                <h2 className="section-title mt-4">What We Believe</h2>
              </div>

              <div className="space-y-6">
                {[
                  { title: 'The Bible', text: 'We believe the Bible is the inspired, authoritative Word of God, the foundation for all we believe and do.' },
                  { title: 'God', text: 'We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.' },
                  { title: 'Jesus Christ', text: 'We believe Jesus Christ is the Son of God, born of a virgin, lived a sinless life, died for our sins, and rose again.' },
                  { title: 'Salvation', text: 'We believe salvation is a gift of God received through faith in Jesus Christ alone, not by our own works.' },
                  { title: 'The Church', text: 'We believe the Church is the body of Christ, called to worship, fellowship, discipleship, and mission.' },
                ].map((belief, index) => (
                  <div key={belief.title} className="bg-card rounded-xl p-6 card-hover">
                    <h3 className="font-serif text-xl font-semibold mb-2">{belief.title}</h3>
                    <p className="text-muted-foreground">{belief.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="section-padding bg-muted/50">
          <div className="container-church">
            <div className="text-center mb-12">
              <span className="text-secondary font-medium uppercase tracking-wider text-sm">Meet Our Team</span>
              <h2 className="section-title mt-4">Church Leadership</h2>
              <p className="section-subtitle mx-auto">
                Our dedicated team of leaders serving the Grace Community family.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leaders.map((leader, index) => (
                <div key={leader.name} className="bg-card rounded-2xl overflow-hidden card-hover text-center">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold mb-1">{leader.name}</h3>
                    <p className="text-secondary font-medium text-sm mb-3">{leader.role}</p>
                    <p className="text-muted-foreground text-sm">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
