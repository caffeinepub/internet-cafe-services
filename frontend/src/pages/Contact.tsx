import { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import SEOHead from '../components/SEOHead';
import { useSubmitContactForm } from '../hooks/useQueries';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Location',
    lines: ['Shop, Hotel SKY Blue WALI GALI', 'Mahipalpur, Delhi'],
    color: 'cyan',
  },
  {
    icon: Phone,
    title: 'Phone Number',
    lines: ['9220270576', 'Call or WhatsApp us'],
    color: 'green',
    href: 'tel:+919220270576',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Mon–Sat: 8:00 AM – 10:00 PM', 'Sunday: 9:00 AM – 8:00 PM'],
    color: 'cyan',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@internetcafeservices.com', 'We reply within 24 hours'],
    color: 'green',
    href: 'mailto:info@internetcafeservices.com',
  },
];

interface FormState {
  name: string;
  phoneNumber: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', phoneNumber: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const submitMutation = useSubmitContactForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phoneNumber.trim() || !form.message.trim()) {
      toast.error('Please fill in all fields.');
      return;
    }

    try {
      await submitMutation.mutateAsync({
        name: form.name.trim(),
        phoneNumber: form.phoneNumber.trim(),
        message: form.message.trim(),
      });
      setSubmitted(true);
      setForm({ name: '', phoneNumber: '', message: '' });
      toast.success('Message sent! We will get back to you soon.');
    } catch {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Us – Internet Cafe Services | Location, Hours & Inquiries"
        description="Contact Internet Cafe Services for online government document assistance, directions, and operating hours. Birth Certificate, Aadhaar, PAN Card, Ration Card, Health Card & Ayushman Card services available."
        ogTitle="Contact Internet Cafe Services"
        ogDescription="Find our location, operating hours, and send us a message. We're here to help with all your online document needs!"
      />

      {/* Page Header */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyber-green/5 blur-3xl rounded-full" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-cyber-green/50 text-cyber-green bg-cyber-green/10 text-xs tracking-widest uppercase"
          >
            Get In Touch
          </Badge>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have a question or need help with your government documents? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info) => (
              <Card
                key={info.title}
                className="bg-dark-card border-border/50 card-glow border-glow group"
              >
                <CardContent className="p-5">
                  <div
                    className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center ${
                      info.color === 'cyan'
                        ? 'bg-cyber-cyan/15 group-hover:bg-cyber-cyan/25'
                        : 'bg-cyber-green/15 group-hover:bg-cyber-green/25'
                    } transition-colors`}
                  >
                    <info.icon
                      className={`w-5 h-5 ${
                        info.color === 'cyan' ? 'text-cyber-cyan' : 'text-cyber-green'
                      }`}
                    />
                  </div>
                  <h2 className="font-heading font-semibold text-foreground text-sm mb-2">
                    {info.title}
                  </h2>
                  {info.lines.map((line, i) =>
                    info.href && i === 0 ? (
                      <a
                        key={i}
                        href={info.href}
                        className={`block text-sm font-medium hover:underline ${
                          info.color === 'cyan' ? 'text-cyber-cyan' : 'text-cyber-green'
                        }`}
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={i} className="text-muted-foreground text-sm">
                        {line}
                      </p>
                    )
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder + Form */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <div className="space-y-6">
              <div className="bg-dark-card border border-border/50 rounded-2xl overflow-hidden h-64 lg:h-80 flex items-center justify-center relative">
                <div className="absolute inset-0 grid-bg opacity-10" />
                <div className="relative text-center">
                  <MapPin className="w-12 h-12 text-cyber-cyan mx-auto mb-3 opacity-60" />
                  <p className="text-muted-foreground text-sm font-heading">
                    Shop, Hotel SKY Blue WALI GALI
                  </p>
                  <p className="text-muted-foreground text-sm">Mahipalpur, Delhi</p>
                </div>
              </div>

              {/* Operating Hours Table */}
              <Card className="bg-dark-card border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyber-cyan" />
                    Operating Hours
                  </h3>
                  <div className="space-y-2">
                    {[
                      { day: 'Monday – Friday', hours: '8:00 AM – 10:00 PM' },
                      { day: 'Saturday', hours: '8:00 AM – 10:00 PM' },
                      { day: 'Sunday', hours: '9:00 AM – 8:00 PM' },
                    ].map(({ day, hours }) => (
                      <div key={day} className="flex justify-between items-center py-1.5 border-b border-border/20 last:border-0">
                        <span className="text-muted-foreground text-sm">{day}</span>
                        <span className="text-cyber-cyan text-sm font-medium font-heading">{hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-dark-card border-border/50 card-glow">
              <CardContent className="p-6 lg:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                    <CheckCircle2 className="w-16 h-16 text-cyber-green mb-4" />
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <Button
                      variant="outline"
                      className="border-cyber-cyan/50 text-cyber-cyan hover:bg-cyber-cyan/10"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-6">
                      Send Us a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-sm text-muted-foreground font-heading">
                          Your Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="bg-dark-base border-border/50 focus:border-cyber-cyan/50 text-foreground placeholder:text-muted-foreground/50"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="phoneNumber" className="text-sm text-muted-foreground font-heading">
                          Phone Number
                        </Label>
                        <Input
                          id="phoneNumber"
                          name="phoneNumber"
                          value={form.phoneNumber}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className="bg-dark-base border-border/50 focus:border-cyber-cyan/50 text-foreground placeholder:text-muted-foreground/50"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="message" className="text-sm text-muted-foreground font-heading">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          rows={5}
                          className="bg-dark-base border-border/50 focus:border-cyber-cyan/50 text-foreground placeholder:text-muted-foreground/50 resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={submitMutation.isPending}
                        className="w-full bg-cyber-cyan text-dark-base hover:bg-cyber-cyan/90 font-heading font-bold glow-cyan transition-all duration-300"
                      >
                        {submitMutation.isPending ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-dark-base/30 border-t-dark-base rounded-full animate-spin" />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
