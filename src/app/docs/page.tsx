"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import {
  BarChart3,
  Rocket,
  Megaphone,
  Palette,
  TrendingUp,
  ExternalLink,
  Menu,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const sections = [
  {
    id: "research",
    icon: BarChart3,
    label: "Research",
    title: "Research Brief",
    description:
      "Market analysis, competitive landscape, idea scoring, and opportunity assessment for LicenseGuard.",
    docUrl:
      "https://docs.google.com/document/d/1lkAOZTEFR2qe2v08SkluADAZzdBYMt4IetypV0HULtE/edit",
    docTitle: "Research Brief — LicenseGuard",
  },
  {
    id: "gtm",
    icon: Rocket,
    label: "GTM",
    title: "Go-To-Market Plan",
    description:
      "Distribution strategy, customer acquisition channels, launch timeline, and growth metrics.",
    docUrl: null,
    docTitle: "GTM Plan (Stage 8 — coming soon)",
  },
  {
    id: "marketing",
    icon: Megaphone,
    label: "Marketing",
    title: "Marketing Plan",
    description:
      "Content strategy, social media plan, paid acquisition, SEO roadmap, and brand messaging.",
    docUrl: null,
    docTitle: "Marketing Plan (Stage 8 — coming soon)",
  },
  {
    id: "brand",
    icon: Palette,
    label: "Brand",
    title: "Brand Specification",
    description:
      "Design tokens, color palette, typography, component specs, and visual identity guidelines.",
    docUrl:
      "https://docs.google.com/document/d/1j86HU_sfErXb6bmAoQJHusfoDQcRLQLYxvapo878XIQ/edit",
    docTitle: "Brand & Design Spec — LicenseGuard",
  },
  {
    id: "pitch",
    icon: TrendingUp,
    label: "Pitch",
    title: "Pitch Deck Content",
    description:
      "Investor/partner pitch narrative, market data, business model, and competitive positioning.",
    docUrl: null,
    docTitle: "Pitch Deck Content (Stage 8 — coming soon)",
  },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("research");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const active = sections.find((s) => s.id === activeSection)!;

  const SidebarNav = ({ onNavClick }: { onNavClick?: () => void }) => (
    <nav className="space-y-1 p-3">
      <div className="flex items-center gap-2 px-3 py-4 mb-2">
        <Image
          src="/images/logo-placeholder.png"
          alt="LicenseGuard"
          width={24}
          height={24}
        />
        <span className="font-display font-bold text-sm text-brand-navy">
          Docs
        </span>
      </div>
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => {
            setActiveSection(section.id);
            onNavClick?.();
          }}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left relative",
            activeSection === section.id
              ? "bg-accent-light text-brand-navy"
              : "text-muted-foreground hover:text-brand-navy hover:bg-gray-100"
          )}
        >
          {activeSection === section.id && (
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-accent rounded-r" />
          )}
          <section.icon className="h-4 w-4 shrink-0" />
          {section.label}
        </button>
      ))}
    </nav>
  );

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-background">
        <div className="flex">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-[240px] border-r border-border min-h-[calc(100vh-4rem)] sticky top-16 bg-white">
            <SidebarNav />
          </aside>

          {/* Content */}
          <div className="flex-1 px-6 sm:px-12 py-10 max-w-4xl">
            {/* Mobile sidebar */}
            <div className="md:hidden mb-6">
              <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
                <SheetTrigger className="flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-navy">
                    <Menu className="h-4 w-4" />
                    {active.label}
                </SheetTrigger>
                <SheetContent side="left" className="w-[240px] p-0">
                  <SidebarNav onNavClick={() => setSidebarOpen(false)} />
                </SheetContent>
              </Sheet>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <active.icon className="h-6 w-6 text-accent" />
              <h1 className="font-display font-bold text-2xl text-brand-navy">
                {active.title}
              </h1>
            </div>
            <p className="text-muted-foreground mb-8 max-w-xl">
              {active.description}
            </p>

            {/* Document Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-black/5">
              <h3 className="font-semibold text-brand-navy mb-2">
                {active.docTitle}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {active.docUrl
                  ? "Full document available on Google Docs."
                  : "This document will be created during the marketing stage of the pipeline."}
              </p>
              {active.docUrl ? (
                <a
                  href={active.docUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  Open in Google Docs
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : (
                <span className="text-sm text-muted-foreground italic">
                  Coming soon
                </span>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
