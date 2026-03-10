"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  BarChart3,
  Rocket,
  Megaphone,
  Palette,
  TrendingUp,
  ExternalLink,
  Menu,
  ChevronRight,
  Users,
  Target,
  DollarSign,
  Calendar,
  Mail,
  Globe,
  FileText,
  Check,
  X,
  AlertTriangle,
  Shield,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

/* ─── Types ─── */
interface Section {
  id: string;
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
}

/* ─── Section definitions ─── */
const sections: Section[] = [
  { id: "research", icon: BarChart3, label: "Research", title: "Research Brief", description: "Market analysis, competitive landscape, idea scoring, and opportunity assessment." },
  { id: "gtm", icon: Rocket, label: "GTM Plan", title: "Go-To-Market Plan", description: "Distribution strategy, customer acquisition channels, launch timeline, and growth metrics." },
  { id: "marketing", icon: Megaphone, label: "Marketing", title: "Marketing Plan", description: "Brand voice, audience segments, content strategy, social campaigns, and budget allocation." },
  { id: "brand", icon: Palette, label: "Brand", title: "Brand Specification", description: "Design tokens, color palette, typography, component specs, and visual identity guidelines." },
  { id: "pitch", icon: TrendingUp, label: "Pitch", title: "Pitch Deck", description: "Interactive investor/partner pitch with market data, business model, and competitive positioning." },
];

/* ─── Reusable Components ─── */
function StatCard({ value, label, accent = false }: { value: string; label: string; accent?: boolean }) {
  return (
    <div className={cn("rounded-xl p-5", accent ? "bg-brand-navy text-white" : "bg-white ring-1 ring-black/5")}>
      <div className={cn("text-2xl font-bold font-mono", accent ? "text-accent" : "text-brand-navy")}>{value}</div>
      <div className={cn("text-xs mt-1", accent ? "text-white/60" : "text-muted-foreground")}>{label}</div>
    </div>
  );
}

function InfoCard({ icon: Icon, title, children, accent = false }: { icon: LucideIcon; title: string; children: React.ReactNode; accent?: boolean }) {
  return (
    <div className={cn("rounded-xl p-5", accent ? "bg-accent/5 border border-accent/20" : "bg-white ring-1 ring-black/5")}>
      <div className="flex items-center gap-2 mb-3">
        <Icon className={cn("w-4 h-4", accent ? "text-accent" : "text-brand-navy")} />
        <h4 className="font-semibold text-sm text-brand-navy">{title}</h4>
      </div>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h2 className="font-display font-bold text-2xl text-brand-navy">{title}</h2>
      {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
    </div>
  );
}

function Divider() {
  return <hr className="my-10 border-border" />;
}

/* ─── RESEARCH SECTION ─── */
function ResearchContent() {
  return (
    <div>
      <SectionHeader title="Research Brief — LicenseGuard" subtitle="Market analysis and opportunity assessment" />

      {/* Executive summary */}
      <div className="bg-brand-navy rounded-xl p-6 mb-8">
        <h3 className="text-white font-semibold mb-3">Executive Summary</h3>
        <p className="text-white/70 text-sm leading-relaxed mb-4">
          LicenseGuard addresses a validated gap in the healthcare admin SaaS market: small private medical practices (&lt;20 staff) tracking credentials manually in spreadsheets with no reliable alert system. With 1,300+ monthly searches growing at 233% YoY, the market is actively seeking a solution.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <StatCard value="$2.3B" label="Total addressable market" accent />
          <StatCard value="82/100" label="Opportunity score" accent />
          <StatCard value="Low" label="Competition density" accent />
        </div>
      </div>

      {/* Market size */}
      <h3 className="font-semibold text-brand-navy mb-4">Market Opportunity</h3>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard value="$2.3B" label="TAM — 230K practices × $120/yr" accent />
        <StatCard value="$460M" label="SAM — 20% small/mid clinics" />
        <StatCard value="$7M" label="SOM Year 1 — 1,200 Pro customers" />
      </div>

      {/* Key stats */}
      <h3 className="font-semibold text-brand-navy mb-4">Validation Signals</h3>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <InfoCard icon={TrendingUp} title="Search Demand" accent>
          1,300+ monthly searches for &ldquo;medical license tracking software&rdquo; with +233% year-over-year growth. Solution-aware audience actively looking.
        </InfoCard>
        <InfoCard icon={Users} title="Community Signals">
          Reddit threads in r/physicianassistant asking &ldquo;how do you track license renewals?&rdquo; — no good answer exists. Facebook Medical Office Managers (50K+) discusses credential tracking as top-3 pain.
        </InfoCard>
        <InfoCard icon={Globe} title="Market Dynamics">
          Healthcare admin SaaS growing 18% YoY. Post-COVID digital tool adoption accelerating. State board enforcement increasing — more audits, more scrutiny.
        </InfoCard>
        <InfoCard icon={Target} title="Competitor Gap" accent>
          Expiration Reminder ($19/mo) targets everything generically. Modio ($200+/mo) targets enterprises. Nobody owns the small clinic segment at $10-49/mo.
        </InfoCard>
      </div>

      {/* Competitive landscape */}
      <h3 className="font-semibold text-brand-navy mb-4">Competitive Landscape</h3>
      <div className="bg-white rounded-xl ring-1 ring-black/5 overflow-hidden mb-8">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="px-4 py-3 font-medium text-muted-foreground">Competitor</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Medical-Specific</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Price</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Weakness</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-accent/5 border-b border-border">
              <td className="px-4 py-3 font-semibold text-accent">✨ LicenseGuard</td>
              <td className="px-4 py-3"><Check className="w-4 h-4 text-green-500" /></td>
              <td className="px-4 py-3 font-mono">$10-49/mo</td>
              <td className="px-4 py-3 text-muted-foreground">New entrant</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-3 text-brand-navy">Expiration Reminder</td>
              <td className="px-4 py-3"><X className="w-4 h-4 text-red-400" /></td>
              <td className="px-4 py-3 font-mono">$19/mo</td>
              <td className="px-4 py-3 text-muted-foreground">Generic, not medical-specific</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-3 text-brand-navy">Modio Health</td>
              <td className="px-4 py-3"><Check className="w-4 h-4 text-green-500" /></td>
              <td className="px-4 py-3 font-mono">$200+/mo</td>
              <td className="px-4 py-3 text-muted-foreground">Enterprise only, 3-day onboarding</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-3 text-brand-navy">LicenseTrak</td>
              <td className="px-4 py-3"><Check className="w-4 h-4 text-green-500" /></td>
              <td className="px-4 py-3 font-mono">$50-100/mo</td>
              <td className="px-4 py-3 text-muted-foreground">Legacy 2008 UI, minimal alerts</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-brand-navy">Google Sheets</td>
              <td className="px-4 py-3"><X className="w-4 h-4 text-red-400" /></td>
              <td className="px-4 py-3 font-mono">Free</td>
              <td className="px-4 py-3 text-muted-foreground">No automation, no alerts</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Recommendation */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-2">
          <Check className="w-5 h-5 text-green-600" />
          <h4 className="font-semibold text-green-800">Recommendation: GO</h4>
        </div>
        <p className="text-sm text-green-700">
          Strong search demand with explosive growth, validated community pain, clear competitive gap in the small clinic segment. Purpose-built medical credential tracking at $10-49/mo has no direct competitor.
        </p>
      </div>

      <Divider />
      <div className="flex gap-3">
        <a href="https://docs.google.com/document/d/1lkAOZTEFR2qe2v08SkluADAZzdBYMt4IetypV0HULtE/edit" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors">
          Research Brief (Google Doc) <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <a href="https://docs.google.com/document/d/15GBsg_jJ7Ikb5l9UprwFARJsLqjKhh31j2u7uST_z5A/edit" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors">
          Product Enrichment (Google Doc) <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

/* ─── GTM SECTION ─── */
function GTMContent() {
  return (
    <div>
      <SectionHeader title="Go-To-Market Plan" subtitle="Distribution strategy and launch timeline" />

      {/* Target persona */}
      <h3 className="font-semibold text-brand-navy mb-4">Target Audience</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-brand-navy rounded-xl p-5 text-white">
          <Users className="w-5 h-5 text-accent mb-3" />
          <h4 className="font-semibold mb-2">Primary: Practice Manager</h4>
          <ul className="text-sm text-white/70 space-y-1.5">
            <li>• Clinic size: 3–15 staff members</li>
            <li>• Budget: $10–100/mo, no IT approval needed</li>
            <li>• Specialty: Family Medicine, Urgent Care, Derm, PT, Behavioral Health</li>
            <li>• US-based, high-density medical markets</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl p-5 ring-1 ring-black/5">
          <Users className="w-5 h-5 text-brand-navy mb-3" />
          <h4 className="font-semibold text-brand-navy mb-2">Secondary: Solo Physician Owner</h4>
          <ul className="text-sm text-muted-foreground space-y-1.5">
            <li>• Tracks own 5–8 credentials (state license, DEA, board cert, BLS)</li>
            <li>• Starter plan at $10/mo is perfect fit</li>
            <li>• Finds us via SEO or Reddit</li>
            <li>• Decides fast, budget-conscious</li>
          </ul>
        </div>
      </div>

      {/* Positioning */}
      <h3 className="font-semibold text-brand-navy mb-4">Positioning</h3>
      <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-8">
        <p className="text-sm text-brand-navy leading-relaxed">
          <strong>For</strong> practice managers at small private clinics <strong>who</strong> are currently tracking credentials in spreadsheets and missing expiry dates — <strong>LicenseGuard</strong> is the purpose-built credential tracking tool that alerts you at 90, 30, and 7 days before anything lapses. <strong>Unlike</strong> generic reminder apps or enterprise credentialing suites, LicenseGuard is designed specifically for medical roles and priced for small practices.
        </p>
      </div>

      {/* Launch channels */}
      <h3 className="font-semibold text-brand-navy mb-4">Launch Channels (Priority Order)</h3>
      <div className="space-y-3 mb-8">
        {[
          { ch: "SEO + Blog", why: "1,300+ monthly searches, +233% YoY. 5 targeted posts.", outcome: "10-30 organic signups/mo by Month 3", icon: Globe },
          { ch: "Facebook Groups", why: "Medical Office Managers (50K+ members). Problem-first posts.", outcome: "20-50 early signups from first post", icon: Users },
          { ch: "Reddit", why: "r/physicianassistant, r/HealthIT. Beta user recruitment.", outcome: "10-30 signups + product feedback", icon: Megaphone },
          { ch: "LinkedIn Outreach", why: "Direct B2B. 20-30 connections/day to Practice Managers.", outcome: "5-10 signups/week", icon: Target },
          { ch: "ProductHunt", why: "Credibility spike. Target Top 5 Health Tech.", outcome: "50-200 signups launch day", icon: Rocket },
          { ch: "AppSumo LTD", why: "Revenue acceleration. $49-99 lifetime deals.", outcome: "200-500 LTD buyers, $10-25K revenue", icon: DollarSign },
          { ch: "NPPES Email", why: "Public registry of small group practices.", outcome: "0.5-2% conversion on 5K curated list", icon: Mail },
        ].map((c, i) => (
          <div key={i} className="bg-white rounded-xl p-4 ring-1 ring-black/5 flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
              <c.icon className="w-4 h-4 text-brand-navy" />
            </div>
            <div className="flex-1">
              <div className="flex items-baseline justify-between">
                <h4 className="font-semibold text-brand-navy text-sm">{c.ch}</h4>
                <span className="text-xs text-accent font-medium">{c.outcome}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{c.why}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <h3 className="font-semibold text-brand-navy mb-4">Launch Timeline</h3>
      <div className="space-y-4 mb-8">
        {[
          { phase: "Week 1 — Seed", items: ["Product live ✓", "Facebook Group post", "Reddit posts (r/physicianassistant, r/HealthIT)", "Blog Post 1: license tracking guide", "LinkedIn founder story"], border: "border-green-400" },
          { phase: "Week 2 — Amplify", items: ["LinkedIn outreach (20/day)", "Blog Post 2: 5 credentials every PM must track", "Reddit r/medicine, r/nursing", "Collect testimonials"], border: "border-accent" },
          { phase: "Week 3 — Launch Spike", items: ["ProductHunt launch (Tue-Thu)", "Cross-channel amplification", "Blog Post 3", "Request user reviews"], border: "border-blue-400" },
          { phase: "Month 2-3 — Scale", items: ["AppSumo LTD launch", "NPPES email outreach (5K practices)", "LinkedIn paid ads (if organic proving)", "MGMA newsletter partnership"], border: "border-purple-400" },
        ].map((p, i) => (
          <div key={i} className={`border-l-4 ${p.border} bg-white rounded-r-xl p-4 ring-1 ring-black/5`}>
            <h4 className="font-semibold text-brand-navy text-sm mb-2">{p.phase}</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              {p.items.map((item, ii) => <li key={ii}>• {item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      {/* Pricing */}
      <h3 className="font-semibold text-brand-navy mb-4">Pricing Strategy</h3>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl p-5 ring-1 ring-black/5">
          <h4 className="font-semibold text-brand-navy text-sm">Starter</h4>
          <div className="text-2xl font-bold text-brand-navy mt-1">$10<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
          <p className="text-xs text-muted-foreground mt-2">5 staff, all credential types, 90/30/7 alerts</p>
        </div>
        <div className="bg-brand-navy rounded-xl p-5 text-white relative">
          <span className="absolute -top-2 left-4 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">HERO</span>
          <h4 className="font-semibold text-sm">Professional</h4>
          <div className="text-2xl font-bold mt-1">$49<span className="text-sm font-normal opacity-70">/mo</span></div>
          <p className="text-xs text-white/60 mt-2">20 staff, CME tracking, audit reports</p>
        </div>
        <div className="bg-white rounded-xl p-5 ring-1 ring-black/5">
          <h4 className="font-semibold text-brand-navy text-sm">Agency</h4>
          <div className="text-2xl font-bold text-brand-navy mt-1">$149<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
          <p className="text-xs text-muted-foreground mt-2">50+ staff, multi-practice, API access</p>
        </div>
      </div>

      {/* Metrics */}
      <h3 className="font-semibold text-brand-navy mb-4">Success Metrics</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard value="$500" label="Month 1 MRR target" />
        <StatCard value="$3K" label="Month 3 MRR target" />
        <StatCard value="$10K" label="Month 6 MRR target" />
        <StatCard value=">20%" label="Trial-to-paid target" accent />
      </div>

      <Divider />
      <a href="https://docs.google.com/document/d/1q3ga_l_AbFqR03HS3LOyH2UzbJtspjz2x85APGEdU2g/edit" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors">
        Full GTM Plan (Google Doc) <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

/* ─── MARKETING SECTION ─── */
function MarketingContent() {
  return (
    <div>
      <SectionHeader title="Marketing Plan" subtitle="Brand voice, audience segments, content strategy, and campaigns" />

      {/* Brand voice */}
      <h3 className="font-semibold text-brand-navy mb-4">Brand Voice</h3>
      <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-4">
        <p className="text-sm text-brand-navy font-medium mb-2">
          Trustworthy + Direct + Human — the colleague who saved you from a compliance disaster.
        </p>
        <p className="text-xs text-muted-foreground">
          &ldquo;The one app in the practice that Never Misses.&rdquo; Serious without being cold. Reassuring without being patronizing.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <h4 className="text-xs font-semibold text-green-700 mb-2">✓ Key Phrases</h4>
          <ul className="text-xs text-green-700 space-y-1">
            <li>&ldquo;Never miss a credential expiry&rdquo;</li>
            <li>&ldquo;Your nurse&apos;s BLS expires in 3 days. Do you know?&rdquo;</li>
            <li>&ldquo;Peace of mind, every Monday morning&rdquo;</li>
            <li>&ldquo;5 minutes from signup to your first credential tracked&rdquo;</li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <h4 className="text-xs font-semibold text-red-700 mb-2">✗ Never Say</h4>
          <ul className="text-xs text-red-700 space-y-1">
            <li>&ldquo;Revolutionize your practice&rdquo;</li>
            <li>&ldquo;Best-in-class solution&rdquo;</li>
            <li>&ldquo;Streamline your workflow&rdquo;</li>
            <li>Any HIPAA fear-mongering</li>
          </ul>
        </div>
      </div>

      {/* Audience segments */}
      <h3 className="font-semibold text-brand-navy mb-4">Audience Segments</h3>
      <div className="space-y-3 mb-8">
        {[
          { seg: "A: The Overwhelmed Practice Manager", pct: "70%", msg: "You're not bad at your job. Your tools are. Here's a better one.", plan: "Professional $49/mo" },
          { seg: "B: The Solo Physician Owner", pct: "20%", msg: "Track your own licenses in 5 minutes. Never miss a renewal.", plan: "Starter $10/mo" },
          { seg: "C: Multi-Practice Manager / MSO", pct: "10%", msg: "Your spreadsheet doesn't scale. Your compliance risk does.", plan: "Agency $149/mo" },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-xl p-4 ring-1 ring-black/5 flex gap-4 items-start">
            <div className="w-12 h-12 rounded-lg bg-brand-navy flex items-center justify-center shrink-0">
              <span className="text-accent font-bold text-sm">{s.pct}</span>
            </div>
            <div>
              <h4 className="font-semibold text-brand-navy text-sm">{s.seg}</h4>
              <p className="text-xs text-muted-foreground mt-1 italic">&ldquo;{s.msg}&rdquo;</p>
              <span className="text-xs text-accent font-medium mt-1 inline-block">{s.plan}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Content strategy */}
      <h3 className="font-semibold text-brand-navy mb-4">Blog Content Strategy</h3>
      <div className="space-y-2 mb-8">
        {[
          { week: "W1", title: "How to Track Medical License Renewals Without a Spreadsheet", keyword: "medical license tracking software" },
          { week: "W2", title: "The 5 Credentials Every Practice Manager Must Track", keyword: "credentials to track medical practice" },
          { week: "W3", title: "What Happens When a Physician's DEA Registration Expires", keyword: "DEA registration expiry" },
          { week: "M2", title: "State Board Audit Prep: Complete Credential Checklist", keyword: "medical practice credential audit checklist" },
          { week: "M2", title: "LicenseTrak vs. Modio vs. LicenseGuard: Comparison", keyword: "[competitor] alternative" },
        ].map((p, i) => (
          <div key={i} className="bg-white rounded-lg p-3 ring-1 ring-black/5 flex items-center gap-3">
            <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">{p.week}</span>
            <div className="flex-1">
              <p className="text-sm text-brand-navy font-medium">{p.title}</p>
              <p className="text-xs text-muted-foreground">Target: &ldquo;{p.keyword}&rdquo;</p>
            </div>
          </div>
        ))}
      </div>

      {/* Social campaigns */}
      <h3 className="font-semibold text-brand-navy mb-4">Social Media Campaigns</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <InfoCard icon={Target} title="LinkedIn (Primary B2B)">
          Founder story post (Week 1), stat posts, pain point stories, product screenshots. Direct outreach to Practice Managers at 20-30/day.
        </InfoCard>
        <InfoCard icon={Megaphone} title="Twitter/X">
          Hook tweets (&ldquo;Your nurse&apos;s BLS expires in 3 days&rdquo;), tools-gap positioning, spreadsheet failure thread (7 tweets).
        </InfoCard>
        <InfoCard icon={Users} title="Reddit">
          Beta user recruitment in r/physicianassistant, r/HealthIT. Problem-first, feedback-oriented posts. Stagger across subreddits.
        </InfoCard>
      </div>

      {/* Email sequence */}
      <h3 className="font-semibold text-brand-navy mb-4">Email Welcome Sequence</h3>
      <div className="space-y-2 mb-8">
        {[
          { day: "Immediate", subject: "Here's how to add your first credential in 2 minutes" },
          { day: "Day 2", subject: "3 credentials you might be forgetting (DEA, board cert)" },
          { day: "Day 5", subject: "How Jennifer added 8 staff members in 20 minutes" },
          { day: "Day 10", subject: "Your trial ends in 4 days — here's what you'll lose" },
          { day: "Day 13", subject: "Last chance — upgrade before your trial expires" },
        ].map((e, i) => (
          <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-3 ring-1 ring-black/5">
            <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
            <span className="text-xs font-mono text-accent w-20 shrink-0">{e.day}</span>
            <span className="text-sm text-brand-navy">{e.subject}</span>
          </div>
        ))}
      </div>

      {/* Budget */}
      <h3 className="font-semibold text-brand-navy mb-4">Budget Allocation</h3>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard value="$0" label="Month 1 — Organic only" />
        <StatCard value="$800" label="Month 2 — LinkedIn + Google" />
        <StatCard value="$1,500" label="Month 3 — Scale what works" accent />
      </div>

      <Divider />
      <a href="https://docs.google.com/document/d/1mJiYolJWApfnrL94NbVm_m33mSVjX9m3pbi089ez5Fw/edit" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors">
        Full Marketing Plan (Google Doc) <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

/* ─── BRAND SECTION ─── */
function BrandContent() {
  const colors = [
    { name: "Deep Navy", hex: "#1E2D4A", css: "--primary", textWhite: true },
    { name: "Warm Amber", hex: "#F59E0B", css: "--accent", textWhite: false },
    { name: "Warm White", hex: "#FAFAF8", css: "--background", textWhite: false },
    { name: "Surface", hex: "#FFFFFF", css: "--surface", textWhite: false },
  ];
  const statusColors = [
    { name: "Compliant", hex: "#10B981", bg: "#D1FAE5", label: "90+ days" },
    { name: "Expiring Soon", hex: "#F59E0B", bg: "#FEF3C7", label: "30-90 days" },
    { name: "Urgent", hex: "#F97316", bg: "#FFEDD5", label: "7-30 days" },
    { name: "Expired", hex: "#EF4444", bg: "#FEE2E2", label: "Action Required" },
  ];
  return (
    <div>
      <SectionHeader title="Brand Specification" subtitle="Visual identity guidelines and design tokens" />

      {/* Identity */}
      <div className="bg-brand-navy rounded-xl p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-8 h-8 text-accent" />
          <h3 className="text-white font-display font-bold text-xl">LicenseGuard</h3>
        </div>
        <p className="text-white/70 text-sm leading-relaxed mb-3">
          &ldquo;Bloomberg terminal for compliance, designed for a human who is not a tech person. Dense with data when you need it, quiet when you don&apos;t.&rdquo;
        </p>
        <p className="text-white/50 text-sm">
          <strong className="text-accent">Unforgettable Element:</strong> THE STATUS DOT — Large, bold, unmistakable color-coded status indicators (green/amber/red) that ARE the product.
        </p>
      </div>

      {/* Color palette */}
      <h3 className="font-semibold text-brand-navy mb-4">Color Palette</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {colors.map((c, i) => (
          <div key={i} className="rounded-xl overflow-hidden ring-1 ring-black/5">
            <div className="h-20" style={{ backgroundColor: c.hex }} />
            <div className="bg-white p-3">
              <p className="font-semibold text-sm text-brand-navy">{c.name}</p>
              <p className="font-mono text-xs text-muted-foreground">{c.hex}</p>
              <p className="text-xs text-muted-foreground">{c.css}</p>
            </div>
          </div>
        ))}
      </div>

      <h4 className="font-semibold text-brand-navy text-sm mb-3">Status Colors — The Core Visual Language</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {statusColors.map((s, i) => (
          <div key={i} className="rounded-xl overflow-hidden ring-1 ring-black/5">
            <div className="h-14 flex items-center justify-center gap-2" style={{ backgroundColor: s.bg }}>
              <span className="w-4 h-4 rounded-full" style={{ backgroundColor: s.hex }} />
              <span className="text-xs font-semibold" style={{ color: s.hex }}>{s.label}</span>
            </div>
            <div className="bg-white p-3">
              <p className="font-semibold text-sm text-brand-navy">{s.name}</p>
              <p className="font-mono text-xs text-muted-foreground">{s.hex}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Typography */}
      <h3 className="font-semibold text-brand-navy mb-4">Typography</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl p-5 ring-1 ring-black/5">
          <p className="text-xs text-muted-foreground mb-2">Display</p>
          <p className="font-display font-extrabold text-3xl text-brand-navy">Cabinet Grotesk</p>
          <p className="text-xs text-muted-foreground mt-2">Headlines, hero text, page titles</p>
        </div>
        <div className="bg-white rounded-xl p-5 ring-1 ring-black/5">
          <p className="text-xs text-muted-foreground mb-2">Body</p>
          <p className="font-body text-xl text-brand-navy">Plus Jakarta Sans</p>
          <p className="text-xs text-muted-foreground mt-2">Body text, labels, descriptions</p>
        </div>
        <div className="bg-white rounded-xl p-5 ring-1 ring-black/5">
          <p className="text-xs text-muted-foreground mb-2">Mono</p>
          <p className="font-mono text-xl text-brand-navy">JetBrains Mono</p>
          <p className="text-xs text-muted-foreground mt-2">Stats, data, code, timestamps</p>
        </div>
      </div>

      {/* Spacing & radius */}
      <h3 className="font-semibold text-brand-navy mb-4">Spacing & Radius</h3>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-xl p-5 ring-1 ring-black/5">
          <h4 className="text-xs font-semibold text-muted-foreground mb-3">Spacing</h4>
          <ul className="text-xs text-muted-foreground space-y-1.5">
            <li>Base unit: <span className="font-mono text-brand-navy">4px</span></li>
            <li>Section padding (desktop): <span className="font-mono text-brand-navy">80px (py-20)</span></li>
            <li>Section padding (mobile): <span className="font-mono text-brand-navy">48px (py-12)</span></li>
            <li>Container max-width: <span className="font-mono text-brand-navy">1200px</span></li>
            <li>Card padding: <span className="font-mono text-brand-navy">24px (p-6)</span></li>
          </ul>
        </div>
        <div className="bg-white rounded-xl p-5 ring-1 ring-black/5">
          <h4 className="text-xs font-semibold text-muted-foreground mb-3">Border Radius</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3"><div className="w-8 h-8 bg-muted rounded" /><span className="text-xs text-muted-foreground">Small: 6px — badges, inputs</span></div>
            <div className="flex items-center gap-3"><div className="w-8 h-8 bg-muted rounded-xl" /><span className="text-xs text-muted-foreground">Medium: 12px — cards, buttons</span></div>
            <div className="flex items-center gap-3"><div className="w-8 h-8 bg-muted rounded-2xl" /><span className="text-xs text-muted-foreground">Large: 16px — modals, large cards</span></div>
            <div className="flex items-center gap-3"><div className="w-8 h-8 bg-muted rounded-full" /><span className="text-xs text-muted-foreground">Full — pills, status dots, avatars</span></div>
          </div>
        </div>
      </div>

      {/* Shadows */}
      <h3 className="font-semibold text-brand-navy mb-4">Shadows</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-5 shadow-sm ring-1 ring-black/5"><p className="text-xs text-muted-foreground">Card (default)</p><p className="text-xs font-mono text-brand-navy mt-1">shadow-sm + ring-1</p></div>
        <div className="bg-white rounded-xl p-5 shadow-md ring-1 ring-black/8"><p className="text-xs text-muted-foreground">Card (hover)</p><p className="text-xs font-mono text-brand-navy mt-1">shadow-md + ring-1</p></div>
        <div className="bg-white rounded-xl p-5 shadow-lg ring-1 ring-black/10"><p className="text-xs text-muted-foreground">Dropdown</p><p className="text-xs font-mono text-brand-navy mt-1">shadow-lg + ring-1</p></div>
        <div className="bg-white rounded-xl p-5 shadow-2xl"><p className="text-xs text-muted-foreground">Modal</p><p className="text-xs font-mono text-brand-navy mt-1">shadow-2xl</p></div>
      </div>

      <Divider />
      <a href="https://docs.google.com/document/d/1j86HU_sfErXb6bmAoQJHusfoDQcRLQLYxvapo878XIQ/edit" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors">
        Full Brand & Design Spec (Google Doc) <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

/* ─── PITCH SECTION ─── */
function PitchContent() {
  const slides = [
    { num: 1, title: "Title", desc: "LicenseGuard — Credential tracking for private medical practices. Never miss an expiry again." },
    { num: 2, title: "The Hook", desc: "\"Your nurse's BLS expires in 3 days. Do you know?\" Split visual: spreadsheet chaos vs. clean dashboard." },
    { num: 3, title: "The Problem", desc: "Spreadsheet trap, notification gap, and the audit. 1,300+ monthly searches, 233% growth, 3.4M licensed workers." },
    { num: 4, title: "The Solution", desc: "Color-coded dashboard (green/amber/red), 90/30/7 day automated alerts, purpose-built for medical roles." },
    { num: 5, title: "Market Size", desc: "TAM $2.3B, SAM $460M, SOM $7M Year 1. Healthcare admin SaaS growing 18% YoY." },
    { num: 6, title: "How It Works", desc: "3 steps: Add team → Track credentials → Stay automatically alerted. 5 minutes from signup." },
    { num: 7, title: "Traction & Proof", desc: "1,300+ monthly searches +233% YoY. Reddit/Facebook community signals. Clear competitor gap." },
    { num: 8, title: "Business Model", desc: "SaaS: Starter $10/mo, Professional $49/mo (hero), Agency $149/mo. LTV:CAC ~25:1." },
    { num: 9, title: "Competition", desc: "2x2 matrix. Nobody owns small clinic + modern UX. We win on design, price, ease, and audience fit." },
    { num: 10, title: "Go-To-Market", desc: "Organic-first, community-driven. Facebook Groups → Reddit → SEO → ProductHunt → AppSumo." },
    { num: 11, title: "Team & Ask", desc: "Built by ChimeStream product studio. $50K pre-seed for 6-month runway → $10K MRR by Month 6." },
    { num: 12, title: "Closing CTA", desc: "\"Your next credential expiry is coming. Know when.\" Start Free Trial — No Credit Card." },
  ];
  return (
    <div>
      <SectionHeader title="Pitch Deck" subtitle="12-slide interactive pitch — view the full deck at /pitch" />

      <a href="/pitch" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-navy text-white px-5 py-3 rounded-xl font-medium text-sm hover:bg-primary-hover transition-colors mb-8">
        <TrendingUp className="w-4 h-4" />
        View Interactive Pitch Deck
        <ExternalLink className="w-3.5 h-3.5" />
      </a>

      <h3 className="font-semibold text-brand-navy mb-4">Slide Overview</h3>
      <div className="space-y-2 mb-8">
        {slides.map((s) => (
          <div key={s.num} className="bg-white rounded-lg p-3 ring-1 ring-black/5 flex items-start gap-3">
            <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded w-8 text-center shrink-0">{s.num}</span>
            <div>
              <h4 className="text-sm font-semibold text-brand-navy">{s.title}</h4>
              <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Divider />
      <div className="flex gap-3">
        <a href="/pitch" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors">
          Interactive Pitch Deck <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <a href="https://docs.google.com/document/d/1J_sE-DIf9ofoIeS26YqItG4UJgL-z7uJj0PUFI-E2wQ/edit" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors">
          Pitch Deck Content (Google Doc) <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

/* ─── Content map ─── */
const contentMap: Record<string, () => React.ReactElement> = {
  research: ResearchContent,
  gtm: GTMContent,
  marketing: MarketingContent,
  brand: BrandContent,
  pitch: PitchContent,
};

/* ─── MAIN PAGE ─── */
export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("research");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const active = sections.find((s) => s.id === activeSection)!;
  const ContentComponent = contentMap[activeSection];

  const SidebarNav = ({ onNavClick }: { onNavClick?: () => void }) => (
    <nav className="p-4">
      <div className="flex items-center gap-2 px-3 py-4 mb-2">
        <Shield className="w-5 h-5 text-accent" />
        <span className="font-display font-bold text-sm text-brand-navy">LicenseGuard Docs</span>
      </div>
      <div className="space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => { setActiveSection(section.id); onNavClick?.(); }}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left relative",
              activeSection === section.id
                ? "bg-accent/10 text-brand-navy"
                : "text-muted-foreground hover:text-brand-navy hover:bg-muted/50"
            )}
          >
            {activeSection === section.id && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-accent rounded-r" />
            )}
            <section.icon className="h-4 w-4 shrink-0" />
            {section.label}
          </button>
        ))}
      </div>
      <div className="mt-8 pt-4 border-t border-border space-y-1">
        <a href="https://credguard.ashketing.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:text-brand-navy transition-colors">
          <Globe className="w-3.5 h-3.5" /> Live Site
        </a>
        <a href="/pitch" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:text-brand-navy transition-colors">
          <TrendingUp className="w-3.5 h-3.5" /> Pitch Deck
        </a>
      </div>
    </nav>
  );

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-background">
        <div className="flex">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-[260px] border-r border-border min-h-[calc(100vh-4rem)] sticky top-16 bg-white shrink-0">
            <SidebarNav />
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Mobile sidebar */}
            <div className="md:hidden px-6 pt-6">
              <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
                <SheetTrigger className="flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-navy">
                  <Menu className="h-4 w-4" />
                  <span>{active.label}</span>
                  <ChevronRight className="h-3 w-3" />
                </SheetTrigger>
                <SheetContent side="left" className="w-[260px] p-0">
                  <SidebarNav onNavClick={() => setSidebarOpen(false)} />
                </SheetContent>
              </Sheet>
            </div>

            <div className="px-6 sm:px-10 py-8 max-w-4xl">
              <div className="flex items-center gap-3 mb-2">
                <active.icon className="h-5 w-5 text-accent" />
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{active.label}</span>
              </div>
              <ContentComponent />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
