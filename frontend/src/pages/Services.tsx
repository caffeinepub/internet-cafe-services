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
    features: ['New application', 'Member addition/removal', 'Detail updates', 'State portal assistance'],
    color: 'green',
    popular: false,
  },
  {
    id: 7,
    icon: Heart,
    title: 'Health Card',
    description:
      'Register for government health schemes and get your health card issued online. We guide you through the entire process from eligibility check to card issuance.',
    features: ['Eligibility check', 'Online registration', 'Document submission', 'Card issuance'],
    color: 'cyan',
    popular: false,
  },
  {
    id: 8,
    icon: Shield,
    title: 'Ayushman Card',
    description:
      'PM-JAY Ayushman Bharat card registration for eligible families. Get access to free healthcare benefits with our quick and easy registration assistance.',
    features: ['Eligibility verification', 'Online registration', 'Family enrollment', 'Card download'],
    color: 'green',
    popular: true,
  },
  {
    id: 9,
    icon: Printer,
    title: 'Document Printing',
    description:
      'High-quality black & white and color printing services for documents, photos, forms, and more. Fast turnaround with professional results.',
    features: ['B&W printing', 'Color printing', 'Photo printing', 'A4 & A3 sizes'],
    color: 'cyan',
    popular: false,
  },
  {
    id: 10,
    icon: ScanLine,
    title: 'Document Scanning',
    description:
      'Scan your documents to digital format quickly and accurately. Get high-resolution scans saved as PDF or image files, ready for email or upload.',
    features: ['High-resolution scans', 'PDF & image formats', 'Email delivery', 'Multi-page scanning'],
    color: 'green',
    popular: false,
  },
  {
    id: 11,
    icon: Copy,
    title: 'Photocopying',
    description:
      'Fast and affordable photocopying services for all your document needs. Single or bulk copies available with quick turnaround.',
    features: ['Single copies', 'Bulk copying', 'A4 & A3 sizes', 'Quick turnaround'],
    color: 'cyan',
    popular: false,
  },
  {
    id: 12,
    icon: Layers,
    title: 'Lamination',
    description:
      'Protect your important documents, certificates, and ID cards with our professional lamination service. Available in various sizes.',
    features: ['ID card size', 'A4 lamination', 'Certificate size', 'Durable finish'],
    color: 'green',
    popular: false,
  },
  {
    id: 13,
    icon: FileText,
    title: 'Form Filling Assistance',
    description:
      'Need help filling out government or official forms? Our staff will assist you in accurately completing any online or offline form.',
    features: ['Government forms', 'Online applications', 'Offline forms', 'Accuracy guaranteed'],
    color: 'cyan',
    popular: false,
  },
];

export default function Services() {
  return (
    <>
      <SEOHead
        title="Rahul Cyber Cafe — Services | Birth Certificate, Aadhaar, PAN Card & More"
        description="Rahul Cyber Cafe offers 13+ services: Birth Certificate, Aadhaar Update, PAN Card, Ration Card, Health Card, Ayushman Card, internet browsing, printing, scanning & more in Mahipalpur, Delhi."
        ogTitle="Rahul Cyber Cafe — All Services"
        ogDescription="Explore all services at Rahul Cyber Cafe: government document assistance, high-speed internet, printing, scanning, lamination & more."
      />

      {/* Page Header */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
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
            From government document assistance to high-speed internet and printing — Rahul Cyber Cafe has everything you need, all under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.id}
                className="bg-dark-card border-border/50 card-glow border-glow group relative"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`text-xs font-heading font-semibold ${
                        service.color === 'cyan'
                          ? 'bg-cyber-cyan/20 text-cyber-cyan border-cyber-cyan/30'
                          : 'bg-cyber-green/20 text-cyber-green border-cyber-green/30'
                      }`}
                      variant="outline"
                    >
                      Popular
                    </Badge>
                  </div>
                )}
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
                  <h3 className="font-heading font-semibold text-foreground text-base mb-2 pr-16">
                    {service.title}
                  </h3>
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

      {/* CTA Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyber-cyan/5 blur-3xl rounded-full" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-6">
            Ready to Get Started?
            <br />
            <span className="gradient-text">Visit Rahul Cyber Cafe Today</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Walk in or contact us to get assistance with any of our services. We're open 7 days a week in Mahipalpur, Delhi.
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
          </div>
        </div>
      </section>
    </>
  );
}
