import Link from 'next/link';
import { Instagram, Youtube, Twitter } from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, url: '#' },
  { name: 'YouTube', icon: Youtube, url: '#' },
  { name: 'Twitter', icon: Twitter, url: '#' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Studio-H. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          {socialLinks.map((social) => (
            <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
              <social.icon className="h-6 w-6 text-muted-foreground transition-colors hover:text-accent" />
              <span className="sr-only">{social.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
