import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import logo from "@/assets/logo.png";
import { useEffect } from "react";
import { usePhysioStore } from "@/store/physioStore";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/mmphysio", label: "Facebook" },
  {
    icon: Instagram,
    href: "https://instagram.com/mmphysio",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/mmphysio",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://twitter.com/mmphysio", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/mmphysio", label: "YouTube" },
];

const quickLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/team", label: "Our Team" },
  { path: "/contact", label: "Contact Us" },
  { path: "/booking", label: "Book Appointment" },
];

export function PhysioFooter() {
  const { services, fetchServices, loading, locations, fetchLocations } = usePhysioStore();
  useEffect(() => {
    if(services.length === 0 ){
    fetchServices();
    }
  }, [fetchServices, services.length]);

  useEffect(() => {
    if (locations.length === 0) {
      fetchLocations();
    }
  }, [fetchLocations, locations.length]); 

  return (
    <footer className="bg-foreground text-background">
      <div className="container-physio py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="MM Physio"
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Providing expert physiotherapy care to help you move better, feel
              better, and live better. Your recovery is our priority.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.title}>
                  <span className="text-background/70 text-sm">
                    {service.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              {locations.map((location) => (
                <li key={location.id} className="space-y-3">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-background/70">
                      {location.address}
                      <br />
                      {location.name} {location.city}
                    </span>
                  </div>

                  {/* Phone */}
                  {location.phone && (
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <a
                        href={`tel:${location.phone}`}
                        className="text-background/70 hover:text-primary transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                  )}

                  {/* Email */}
                  {location.email && (
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                      <a
                        href={`mailto:${location.email}`}
                        className="text-background/70 hover:text-primary transition-colors"
                      >
                        {location.email}
                      </a>
                    </div>
                  )}

                  {/* Opening Hours (static or from API later) */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-background/70">
                      Mon - Fri: 7:00 AM - 6:00 PM
                      <br />
                      Sat: 8:00 AM - 1:00 PM
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© 2026 MM Physio. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
