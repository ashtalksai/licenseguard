"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-200",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-white border-b border-transparent"
      )}
    >
      <div className="max-w-[1200px] mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-placeholder.png"
            alt="LicenseGuard"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="font-display font-bold text-lg text-brand-navy">
            LicenseGuard
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-brand-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-muted-foreground hover:text-brand-navy transition-colors"
          >
            Log in
          </Link>
          <Link href="/signup">
            <Button className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold px-4 py-2 rounded-xl">
              Start Free Trial
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden p-2 text-brand-navy">
              <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-white p-6">
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-brand-navy hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-border" />
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-muted-foreground"
              >
                Log in
              </Link>
              <Link href="/signup" onClick={() => setOpen(false)}>
                <Button className="w-full bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-xl">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
