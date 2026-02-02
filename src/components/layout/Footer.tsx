import { Link } from 'react-router-dom';
import { Church, Facebook, Youtube, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

const quickLinks = [
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Services' },
  { path: '/youth', label: 'Youth Ministry' },
  { path: '/live', label: 'Watch Live' },
  { path: '/offerings', label: 'Give Online' },
  { path: '/contact', label: 'Contact Us' },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-church py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <Church className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold">Grace Community</span>
                <p className="text-xs text-primary-foreground/70">Church</p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              A place where faith grows, community thrives, and lives are transformed through the love of Christ.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Service Times</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="text-secondary font-medium">Sunday Services</p>
                <p className="text-primary-foreground/80">9:00 AM & 11:00 AM</p>
              </li>
              <li>
                <p className="text-secondary font-medium">Wednesday Bible Study</p>
                <p className="text-primary-foreground/80">7:00 PM</p>
              </li>
              <li>
                <p className="text-secondary font-medium">Friday Youth Night</p>
                <p className="text-primary-foreground/80">6:00 PM</p>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  123 Faith Avenue<br />
                  Graceville, ST 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:+1234567890" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:info@gracecommunity.church" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  info@gracecommunity.church
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 Grace Community Church. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
