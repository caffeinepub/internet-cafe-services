import { Link } from '@tanstack/react-router';
import {
  Wifi,
  Monitor,
  Printer,
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  Clock,
  Zap,
  MapPin,
  FileCheck,
  UserCheck,
  CreditCard,
  ShoppingBag,
  Heart,
  Shield,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SEOHead from '../components/SEOHead';

// MapPin icon alias for hero button
const MapPinIcon = MapPin;

const featuredServices = [
  {
    icon: FileCheck,
    title: 'Birth Certificate',
    description: 'Apply online for birth certificate registration and corrections with expert assistance.',
    price: '₹50/application',
    color: 'cyan',
  },
  {
    icon: UserCheck,
    title: 'Aadhaar Update',
    description: 'Update name, address, mobile number and other Aadhaar details on UIDAI portal.',
    price: '₹30/update',
    color: 'green',
  },
  {
    icon: CreditCard,
    title: 'PAN Card',
    description: 'New PAN card application or corrections via NSDL/UTIITSL with document support.',
    price: '₹60/application',
    color: 'cyan',
  },
  {
    icon: ShoppingBag,
    title: 'Ration Card',
    description: 'Apply for new ration card or update family member details on state portal.',
    price: '₹40/application',
    color: 'green',
  },
  {
    icon: Heart,
    title: 'Health Card',
    description: 'Register for government health schemes and get your health card issued online.',
    price: '₹40/application',
    color: 'cyan',
  },
  {
    icon: Shield,
    title: 'Ayushman Card',
    description: 'PM-JAY Ayushman Bharat card registration for eligible families — quick & easy.',
    price: '₹50/application',
    color: 'green',
  },
];

const stats = [
  { icon: Users, value: '500+', label: 'Happy Customers' },
  { icon: Monitor, value: '20+', label: 'Computer Stations' },
  { icon: Clock, value: '14 hrs', label: 'Daily Service' },
  { icon: Star, value: '4.8★', label: 'Customer Rating' },
];

const whyUs = [
  'Ultra-fast fiber internet connection',
  'Online government document services',
  'Affordable rates, no hidden charges',
  'Friendly and helpful staff',
  'Clean, air-conditioned environment',
  'Printing, scanning & lamination on-site',
];

export default function Home() {
  return (
    <>
      <SEOHead
        title="Internet Cafe Services – Birth Certificate, Aadhaar, PAN Card & Online Services"
        description="Visit Internet Cafe Services for online government document assistance: Birth Certificate, Aadhaar Update, PAN Card, Ration Card, Health Card, Ayushman Card, printing & more. Open 7 days a week!"
        ogTitle="Internet Cafe Services – Your Local Cyber Cafe"
        ogDescription="Online government document services, fast internet, printing & more. Affordable rates, friendly service. Visit us today!"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/generated/cafe-hero.dim_1400x600.png"
            alt="Internet Cafe interior with glowing screens"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-base/80 via-dark-base/70 to-dark-base" />
          <div className="absolute inset-0 grid-bg opacity-30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <Badge
            variant="outline"
            className="mb-6 border-cyber-cyan/50 text-cyber-cyan bg-cyber-cyan/10 font-heading text-xs tracking-widest uppercase px-4 py-1.5"
          >
            <Zap className="w-3 h-3 mr-1.5" />
            Now Open — Fast & Reliable
          </Badge>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            <span className="text-foreground">Your Local</span>
            <br />
            <span className="gradient-text text-glow-cyan">Online Services</span>
            <br />
            <span className="text-foreground">Cyber Cafe</span>
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Government document services, high-speed internet, printing & more — all under one roof.
            Birth Certificate, Aadhaar, PAN Card, Ration Card, Health Card & Ayushman Card assistance available.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/services">
              <Button
                size="lg"
                className="bg-cyber-cyan text-dark-base hover:bg-cyber-cyan/90 font-heading font-bold text-base px-8 py-6 glow-cyan transition-all duration-300 hover:scale-105"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-cyber-green/50 text-cyber-green hover:bg-cyber-green/10 hover:border-cyber-green font-heading font-semibold text-base px-8 py-6 transition-all duration-300"
              >
                Find Us
                <MapPinIcon className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex justify-center animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-cyber-cyan/40 flex items-start justify-center p-1.5">
              <div className="w-1.5 h-3 rounded-full bg-cyber-cyan animate-pulse-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-dark-card border-y border-border/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-cyber-cyan" />
                </div>
                <div className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24" id="about">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <Badge
                variant="outline"
                className="mb-4 border-cyber-green/50 text-cyber-green bg-cyber-green/10 text-xs tracking-widest uppercase"
              >
                About Us
              </Badge>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                Your Trusted
                <span className="gradient-text"> Neighborhood</span>
                <br />
                Cyber Cafe
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Internet Cafe Services has been serving the local community with reliable, affordable, and fast digital services. Whether you need to apply for a Birth Certificate, update your Aadhaar, get a PAN Card, Ration Card, Health Card, or Ayushman Card — we've got you covered.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Our modern facility is equipped with the latest computers, high-speed fiber internet, and professional printing equipment. We pride ourselves on providing a clean, comfortable, and welcoming environment for all our customers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyUs.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyber-green shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-cyber-cyan/20">
                <img
                  src="/assets/generated/services-icons.dim_512x512.png"
                  alt="Our services"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-base/60 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-dark-card border border-cyber-cyan/30 rounded-xl p-4 shadow-glow-cyan">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyber-cyan/20 flex items-center justify-center">
                    <Wifi className="w-5 h-5 text-cyber-cyan" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-foreground text-sm">100 Mbps</div>
                    <div className="text-muted-foreground text-xs">Fiber Internet</div>
                  </div>
                </div>
              </div>
              {/* Floating badge 2 */}
              <div className="absolute -top-4 -right-4 bg-dark-card border border-cyber-green/30 rounded-xl p-4 shadow-glow-green">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyber-green/20 flex items-center justify-center">
                    <Printer className="w-5 h-5 text-cyber-green" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-foreground text-sm">Print & Scan</div>
                    <div className="text-muted-foreground text-xs">From ₹2/page</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 lg:py-24 bg-dark-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 border-cyber-cyan/50 text-cyber-cyan bg-cyber-cyan/10 text-xs tracking-widest uppercase"
            >
              Online Government Services
            </Badge>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
              Document Services <span className="gradient-text">We Offer</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              We help you apply for and update all major government documents quickly and hassle-free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <Card
                key={service.title}
                className="bg-dark-card border-border/50 card-glow border-glow group"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-all duration-300 ${
                      service.color === 'cyan'
                        ? 'bg-cyber-cyan/15 group-hover:bg-cyber-cyan/25'
                        : 'bg-cyber-green/15 group-hover:bg-cyber-green/25'
                    }`}
                  >
                    <service.icon
                      className={`w-6 h-6 ${
                        service.color === 'cyan' ? 'text-cyber-cyan' : 'text-cyber-green'
                      }`}
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-base mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div
                    className={`font-heading font-bold text-sm ${
                      service.color === 'cyan' ? 'text-cyber-cyan' : 'text-cyber-green'
                    }`}
                  >
                    {service.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-cyber-cyan/50 text-cyber-cyan hover:bg-cyber-cyan/10 hover:border-cyber-cyan font-heading font-semibold px-8 py-6 transition-all duration-300"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyber-cyan/5 blur-3xl rounded-full" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Need Help With Your
            <br />
            <span className="gradient-text">Government Documents?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Visit us today or get in touch. Our staff is ready to assist you with all your online document needs — quickly and affordably.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-cyber-cyan text-dark-base hover:bg-cyber-cyan/90 font-heading font-bold text-base px-8 py-6 glow-cyan transition-all duration-300 hover:scale-105"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-cyber-green/50 text-cyber-green hover:bg-cyber-green/10 hover:border-cyber-green font-heading font-semibold text-base px-8 py-6 transition-all duration-300"
              >
                See All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
