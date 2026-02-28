import { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import SEOHead from '../components/SEOHead';
import { useSubmitContactForm } from '../hooks/useQueries';
import { toast } from 'sonner';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      toast.error('Please fill in all fields.');
      return;
    }
    try {
      await submitMutation.mutateAsync({ name, phoneNumber: phone, message });
      setSubmitted(true);
      setName('');
      setPhone('');
      setMessage('');
      toast.success('Message sent! We will get back to you soon.');
    } catch {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <>
      <SEOHead
        title="Rahul Cyber Cafe — Contact Us | Mahipalpur, Delhi"
        description="Contact Rahul Cyber Cafe in Mahipalpur, Delhi. Call us at 9220270576 or send a message. We're open Mon–Sat 8AM–10PM and Sunday 9AM–8PM."
        ogTitle="Contact Rahul Cyber Cafe — Mahipalpur, Delhi"
        ogDescription="Get in touch with Rahul Cyber Cafe. Visit us at Shop, Hotel SKY Blue WALI GALI, Mahipalpur, Delhi or call 9220270576."
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
            Get In Touch
          </Badge>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a question or need assistance? Reach out to Rahul Cyber Cafe — we're here to help you with all your digital service needs.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {/* Address */}
            <Card className="bg-dark-card border-border/50 card-glow border-glow text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-cyber-cyan/15 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-cyber-cyan" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Our Location</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Shop, Hotel SKY Blue WALI GALI,<br />
                  Mahipalpur, Delhi
                </p>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="bg-dark-card border-border/50 card-glow border-glow text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-cyber-green/15 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-cyber-green" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Call Us</h3>
                <a
                  href="tel:+919220270576"
                  className="text-cyber-cyan hover:text-cyber-cyan/80 transition-colors text-sm font-medium"
                >
                  9220270576
                </a>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="bg-dark-card border-border/50 card-glow border-glow text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-cyber-cyan/15 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-cyber-cyan" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Opening Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Mon–Sat: 8:00 AM – 10:00 PM<br />
                  Sunday: 9:00 AM – 8:00 PM
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Map + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                Find <span className="gradient-text">Rahul Cyber Cafe</span>
              </h2>
              <div className="rounded-2xl overflow-hidden border border-cyber-cyan/20 bg-dark-card h-64 lg:h-80 flex items-center justify-center relative">
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="relative text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-cyber-cyan/20 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-cyber-cyan" />
                  </div>
                  <p className="font-heading font-semibold text-foreground mb-1">Rahul Cyber Cafe</p>
                  <p className="text-muted-foreground text-sm">
                    Shop, Hotel SKY Blue WALI GALI,<br />
                    Mahipalpur, Delhi
                  </p>
                  <a
                    href="https://maps.google.com/?q=Mahipalpur+Delhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-cyber-cyan text-sm hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              {/* Hours Table */}
              <div className="mt-6 bg-dark-card border border-border/50 rounded-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-border/30">
                  <h3 className="font-heading font-semibold text-foreground text-sm">Operating Hours</h3>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      { day: 'Monday', hours: '8:00 AM – 10:00 PM' },
                      { day: 'Tuesday', hours: '8:00 AM – 10:00 PM' },
                      { day: 'Wednesday', hours: '8:00 AM – 10:00 PM' },
                      { day: 'Thursday', hours: '8:00 AM – 10:00 PM' },
                      { day: 'Friday', hours: '8:00 AM – 10:00 PM' },
                      { day: 'Saturday', hours: '8:00 AM – 10:00 PM' },
                      { day: 'Sunday', hours: '9:00 AM – 8:00 PM' },
                    ].map((row, i) => (
                      <tr key={row.day} className={i % 2 === 0 ? 'bg-muted/10' : ''}>
                        <td className="px-4 py-2 text-muted-foreground">{row.day}</td>
                        <td className="px-4 py-2 text-foreground font-medium text-right">{row.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                Send Us a <span className="gradient-text">Message</span>
              </h2>
              {submitted ? (
                <Card className="bg-dark-card border-cyber-green/30">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-cyber-green/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-cyber-green" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground text-xl mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Thank you for reaching out to Rahul Cyber Cafe. We'll get back to you as soon as possible.
                    </p>
                    <Button
                      variant="outline"
                      className="border-cyber-cyan/50 text-cyber-cyan hover:bg-cyber-cyan/10"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-dark-card border-border/50">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground font-heading text-sm">
                          Your Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="bg-muted/30 border-border/50 focus:border-cyber-cyan/50 text-foreground placeholder:text-muted-foreground"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground font-heading text-sm">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="bg-muted/30 border-border/50 focus:border-cyber-cyan/50 text-foreground placeholder:text-muted-foreground"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-foreground font-heading text-sm">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="How can we help you?"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="bg-muted/30 border-border/50 focus:border-cyber-cyan/50 text-foreground placeholder:text-muted-foreground min-h-[120px] resize-none"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={submitMutation.isPending}
                        className="w-full bg-cyber-cyan text-dark-base hover:bg-cyber-cyan/90 font-heading font-bold glow-cyan transition-all duration-200"
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
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
