import { Link } from '@tanstack/react-router';
import { MapPin, Phone, Clock, Heart } from 'lucide-react';
import { SiFacebook, SiInstagram, SiWhatsapp } from 'react-icons/si';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Contact Us', path: '/contact' },
];

const services = [
  'Birth Certificate',
  'Aadhaar Update',
  'PAN Card',
  'Ration Card',
  'Health Card',
  'Ayushman Card',
  'Document Printing',
  'Scanning & Copying',
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'rahul-cyber-cafe');

  return (
    <footer className="bg-dark-card border-t border-border/50">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img
                src="/assets/generated/cafe-logo.dim_256x256.png"
                alt="Rahul Cyber Cafe"
                className="h-10 w-10 rounded-lg object-cover"
              />
              <div>
                <div className="font-heading font-bold text-foreground group-hover:text-cyber-cyan transition-colors">
                  Rahul Cyber Cafe
                </div>
                <div className="text-xs text-cyber-cyan tracking-widest uppercase font-medium">
                  Mahipalpur, Delhi
                </div>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Your trusted neighborhood cyber cafe offering online government document services, fast internet, printing, and more — all under one roof.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-cyber-cyan hover:bg-cyber-cyan/10 transition-all duration-200"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-cyber-cyan hover:bg-cyber-cyan/10 transition-all duration-200"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="tel:+919220270576"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-cyber-green hover:bg-cyber-green/10 transition-all duration-200"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-cyber-cyan transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyber-cyan/50 group-hover:bg-cyber-cyan transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyber-green/50" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyber-cyan mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Shop, Hotel SKY Blue WALI GALI,<br />
                  Mahipalpur, Delhi
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyber-cyan shrink-0" />
                <a
                  href="tel:+919220270576"
                  className="text-muted-foreground hover:text-cyber-cyan transition-colors text-sm"
                >
                  9220270576
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-cyber-cyan mt-0.5 shrink-0" />
                <div className="text-muted-foreground text-sm">
                  <div>Mon–Sat: 8:00 AM – 10:00 PM</div>
                  <div>Sunday: 9:00 AM – 8:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
            <span>© {year} Rahul Cyber Cafe. All rights reserved.</span>
            <span className="flex items-center gap-1">
              Built with{' '}
              <Heart className="w-3 h-3 text-cyber-cyan fill-cyber-cyan mx-0.5" />{' '}
              using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-cyan hover:underline"
              >
                caffeine.ai
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
