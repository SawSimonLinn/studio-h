"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import Image from "next/image";

const navItems = [
  { href: "/gallery", label: "Gallery" },
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors hover:text-accent",
        isActive ? "text-accent font-semibold" : "text-foreground/80"
      )}
    >
      {children}
    </Link>
  );
};

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/420005754_869680915163237_4329501200405768911_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=XLS7uHjMGdEQ7kNvwFaYKiB&_nc_oc=AdnBGkOwUZZ4PHHHyvxX__W0u0E0Bc8Iluor3YuQ3ND4EvcnbKlbaPPSMDM8FvOT0MTjViWJH8jXqy1Tm-wvD8T8&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&_nc_gid=5oJtJpBptyYMN1e0m0F-Iw&oh=00_AfgeyipQQHGI6ZT5ly_vuH3FfPf04-w6r5aFeslETHusGQ&oe=691432D1"
                alt="Studio-H Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="font-bold">Studio-H</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex flex-1 justify-end items-center gap-4">
            {/* Desktop Call Button */}
            <Button asChild className="hidden md:flex">
              <a href="tel:123-456-7890">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </a>
            </Button>

            {/* Mobile Navigation */}
            <div className="flex items-center justify-end md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full max-w-xs bg-background p-6"
                >
                  <SheetTitle className="sr-only">
                    Mobile Navigation Menu
                  </SheetTitle>
                  <div className="flex flex-col space-y-6">
                    <Link
                      href="/"
                      className="flex items-center space-x-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Image
                        src="https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/420005754_869680915163237_4329501200405768911_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=XLS7uHjMGdEQ7kNvwFaYKiB&_nc_oc=AdnBGkOwUZZ4PHHHyvxX__W0u0E0Bc8Iluor3YuQ3ND4EvcnbKlbaPPSMDM8FvOT0MTjViWJH8jXqy1T-wvD8T8&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&_nc_gid=Zbf4Vu9l7ZZV7Kz92yGdmg&oh=00_AfgkNKB6Una00Pt3D-VNZ5vvm0TIWIZZf0ZRbw5OElHXwA&oe=691432D1"
                        alt="Studio-H Logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <span className="font-bold">Studio-H</span>
                    </Link>
                    <nav className="flex flex-col space-y-4">
                      {navItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-lg font-medium text-foreground/80 hover:text-accent"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                    <Button asChild className="mt-4">
                      <a href="tel:123-456-7890">
                        <Phone className="mr-2 h-4 w-4" /> Call Now
                      </a>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
