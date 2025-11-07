
import { Mail, Phone, MapPin, Instagram, Youtube, Twitter } from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from './contact-form';

export const metadata = {
  title: 'Contact | Studio-H',
};

const contactDetails = [
  {
    icon: Mail,
    text: 'hello@studio-h.art',
    href: 'mailto:hello@studio-h.art',
  },
  {
    icon: Phone,
    text: '(123) 456-7890',
    href: 'tel:123-456-7890',
  },
  {
    icon: MapPin,
    text: 'San Francisco, CA',
  },
];

const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'YouTube', icon: Youtube, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
  ];

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-20 mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        <div className="animation-fade-in">
          <h1 className="font-headline text-4xl md:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We're open to collaborations, commissions, and conversations. Reach out and let's create something beautiful together.
          </p>
          <div className="mt-8 space-y-4">
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex items-center gap-4">
                <detail.icon className="h-5 w-5 text-accent" />
                {detail.href ? (
                  <a href={detail.href} className="text-foreground/80 hover:text-accent transition-colors">{detail.text}</a>
                ) : (
                  <span className="text-foreground/80">{detail.text}</span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
                <social.icon className="h-6 w-6 text-muted-foreground transition-colors hover:text-accent" />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="animation-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
