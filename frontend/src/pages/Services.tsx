import {
  Wifi,
  Monitor,
  Printer,
  ScanLine,
  Copy,
  Layers,
  FileText,
  ArrowRight,
  FileCheck,
  CreditCard,
  ShoppingBag,
  Heart,
  Shield,
  UserCheck,
} from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SEOHead from '../components/SEOHead';

const services = [
  {
    id: 1,
    icon: Wifi,
    title: 'High-Speed Internet Browsing',
    description:
      'Access the internet at blazing-fast speeds with our fiber broadband connection. Perfect for browsing, streaming videos, downloading files, video calls, and online research.',
    features: ['100 Mbps fiber connection', 'Unlimited browsing', 'YouTube & streaming', 'Video calls'],
    color: 'cyan',
    popular: true,
  },
  {
    id: 2,
    icon: Monitor,
    title: 'Computer Rental',
    description:
      'Rent a fully equipped computer by the hour for work, study, or personal tasks. All systems are updated with the latest software and antivirus protection.',
    features: ['Latest hardware', 'MS Office included', 'Antivirus protected', 'USB ports available'],
    color: 'green',
    popular: false,
  },
  {
    id: 3,
    icon: FileCheck,
    title: 'Birth Certificate',
    description:
      'Apply for a new birth certificate or get corrections done online. We assist you with the complete application process — form filling, document upload, and submission.',
    features: ['New registration', 'Correction requests', 'Document upload', 'Status tracking'],
    color: 'cyan',
    popular: true,
  },
  {
    id: 4,
    icon: UserCheck,
    title: 'Aadhaar Update',
    description:
      'Update your Aadhaar card details such as name, address, date of birth, or mobile number. We help you fill and submit the UIDAI online update form accurately.',
    features: ['Name & address update', 'Mobile number linking', 'DOB correction', 'UIDAI portal assistance'],
    color: 'green',
    popular: true,
  },
  {
    id: 5,
    icon: CreditCard,
    title: 'PAN Card',
    description:
      'Apply for a new PAN card or make corrections to your existing PAN. We assist with NSDL/UTIITSL online applications, document scanning, and form submission.',
    features: ['New PAN application', 'PAN correction', 'NSDL/UTIITSL portal', 'Document scanning'],
    color: 'cyan',
    popular: false,
  },
  {
    id: 6,
    icon: ShoppingBag,
    title: 'Ration Card',
    description:
      'Apply for a new ration card, add or remove family members, or update your ration card details through the state government portal with our expert assistance.',
    features: ['New ration card', 'Member addition/removal', 'Address update', 'State portal assistance'],
    color: 'green',
    popular: false,
  },
  {
    id: 7,
    icon: Heart,
    title: 'Health Card',
    description:
      'Register for government health schemes and get your health card issued. We assist with form filling, document submission, and enrollment on the health portal.',
    features: ['Health scheme enrollment', 'Card registration', 'Document submission', 'Portal assistance'],
    color: 'cyan',
    popular: false,
  },
  {
    id: 8,
    icon: Shield,
    title: 'Ayushman Card',
    description:
      'Apply for the Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY) health card. We help eligible families register and get their Ayushman card issued.',
    features: ['PM-JAY registration', 'Eligibility check', 'Family enrollment', 'Card download'],
    color: 'green',
    popular: true,
  },
  {
    id: 9,
    icon: Printer,
    title: 'Document Printing',
    description:
      'Print your documents, photos, forms, and assignments in black & white or full color. We support A4, A3, and legal size paper formats.',
    features: ['Black & white printing', 'Color printing', 'A4, A3, Legal sizes', 'Photo printing'],
    color: 'cyan',
    popular: false,
  },
  {
    id: 10,
    icon: ScanLine,
    title: 'Document Scanning',
    description:
      'Scan your documents, certificates, photos, and ID cards to digital format. We provide high-resolution scans saved as PDF or image files.',
    features: ['High-resolution scans', 'PDF & image output', 'Email delivery', 'ID & certificate scanning'],
    color: 'green',
    popular: false,
  },
  {
    id: 11,
    icon: Copy,
    title: 'Photocopying',
    description:
      'Quick and affordable photocopying services for all your documents. Bulk copying available at discounted rates for large volumes.',
    features: ['Fast turnaround', 'Bulk discounts', 'A4 & A3 sizes', 'Double-sided copies'],
    color: 'cyan',
    popular: false,
  },
  {
    id: 12,
    icon: FileText,
    title: 'Form Filling & Typing',
    description:
      'Need help filling out online forms, typing documents, or creating resumes? Our staff can assist you with all your typing and form-filling needs.',
    features: ['Online form filling', 'Resume creation', 'Application forms', 'Data entry'],
    color: 'green',
    popular: false,
  },
  {
    id: 13,
    icon: Layers,
    title: 'Lamination',
    description:
      'Protect your important documents, ID cards, certificates, and photos with our professional lamination service. Available in multiple sizes.',
    features: ['ID card size', 'A4 & A3 lamination', 'Glossy & matte finish', 'Same-day service'],
    color: 'cyan',
    popular: false,
  },
];

export default function Services() {
  return (
    <>
      <SEOHead
        title="Our Services – Birth Certificate, Aadhaar, PAN Card, Ration Card & More"
        description="Get government document services at Internet Cafe Services: Birth Certificate, Aadhaar Update, PAN Card, Ration Card, Health Card, Ayushman Card, printing, scanning & more. Affordable rates!"
        ogTitle="Services – Internet Cafe Services"
        ogDescription="Birth Certificate, Aadhaar Update, PAN Card, Ration Card, Health Card, Ayushman Card, printing, scanning & more. Affordable rates at your local cyber cafe."
      />

      {/* Page Header */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyber-cyan/5 blur-3xl rounded-full" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-cyber-cyan/50 text-cyber-cyan bg-cyber-cyan/10 text-xs tracking-widest uppercase"
          >
            What We Offer
          </Badge>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Government document services, internet access, printing, scanning & more — all under one roof. Fast, reliable, and affordable.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card
                key={service.id}
                className="bg-dark-card border-border/50 card-glow border-glow group relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-cyber-cyan text-dark-base text-xs font-heading font-semibold px-2 py-0.5">
                      Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl mb-5 flex items-center justify-center transition-all duration-300 ${
                      service.color === 'cyan'
                        ? 'bg-cyber-cyan/15 group-hover:bg-cyber-cyan/25 group-hover:shadow-glow-cyan'
                        : 'bg-cyber-green/15 group-hover:bg-cyber-green/25 group-hover:shadow-glow-green'
                    }`}
                  >
                    <service.icon
                      className={`w-7 h-7 ${
                        service.color === 'cyan' ? 'text-cyber-cyan' : 'text-cyber-green'
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <h2 className="font-heading font-semibold text-foreground text-base mb-2 leading-snug">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            service.color === 'cyan' ? 'bg-cyber-cyan' : 'bg-cyber-green'
                          }`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-dark-card/50 border-y border-border/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              Affordable & Reliable Services
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              We offer special discounts for students, bulk printing, and government document packages. Ask our staff for combo packages and current rates!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Student Discounts', 'Bulk Printing Offers', 'Document Packages', 'No Hidden Charges'].map(
                (tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-cyber-green/40 text-cyber-green bg-cyber-green/10 text-xs px-3 py-1"
                  >
                    {tag}
                  </Badge>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Have Questions About Our Services?
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto mb-8">
            Contact us or visit our cafe. Our friendly staff will be happy to help you with any queries.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-cyber-cyan text-dark-base hover:bg-cyber-cyan/90 font-heading font-bold px-8 py-6 glow-cyan transition-all duration-300 hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
