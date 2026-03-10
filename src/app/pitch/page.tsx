"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  FileSpreadsheet,
  BellOff,
  FileWarning,
  CheckCircle2,
  Clock,
  Mail,
  Users,
  TrendingUp,
  DollarSign,
  Target,
  Rocket,
  Building2,
  ArrowRight,
  X,
  Check,
  Zap,
  Globe,
  BarChart3,
} from "lucide-react";

/* ─── slide transition variants ─── */
const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
};

/* ─── animated counter ─── */
function Counter({ value, prefix = "", suffix = "" }: { value: string; prefix?: string; suffix?: string }) {
  const num = parseFloat(value.replace(/[^0-9.]/g, ""));
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = num / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= num) { setDisplay(num); clearInterval(timer); }
      else setDisplay(start);
    }, step);
    return () => clearInterval(timer);
  }, [num]);
  const formatted = num >= 1000 ? (display / 1000).toFixed(display >= num ? 1 : 0) + "K" :
    num % 1 !== 0 ? display.toFixed(1) : Math.round(display).toString();
  return <span>{prefix}{num >= 1000 ? (display >= num ? (num/1000).toFixed(1)+"K" : (display/1000).toFixed(1)+"K") : (num%1!==0 ? display.toFixed(1) : Math.round(display).toString())}{suffix}</span>;
}

/* ─── status dot component ─── */
function StatusDot({ color, size = "w-3 h-3", pulse = false }: { color: string; size?: string; pulse?: boolean }) {
  return (
    <span className="relative inline-flex">
      <span className={`${size} rounded-full ${color}`} />
      {pulse && <span className={`absolute inset-0 ${size} rounded-full ${color} animate-ping opacity-40`} />}
    </span>
  );
}

/* ─── SLIDE COMPONENTS ─── */

function TitleSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-accent blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-blue-400 blur-[100px]" />
      </div>
      <div className="relative z-10 text-center max-w-4xl px-8">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} className="mx-auto mb-8 w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center">
          <Shield className="w-10 h-10 text-accent" />
        </motion.div>
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="font-display font-extrabold text-5xl sm:text-7xl text-white mb-4">
          LicenseGuard
        </motion.h1>
        <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="text-xl sm:text-2xl text-white/70 mb-8">
          Credential tracking for private medical practices
        </motion.p>
        <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="text-lg text-accent font-medium">
          Never miss an expiry again
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="flex items-center justify-center gap-3 mt-12">
          <StatusDot color="bg-status-green" size="w-3 h-3" pulse />
          <StatusDot color="bg-status-amber" size="w-3 h-3" pulse />
          <StatusDot color="bg-status-red" size="w-3 h-3" pulse />
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="mt-8 text-sm text-white/40 font-mono">
          credguard.ashketing.com
        </motion.p>
      </div>
    </div>
  );
}

function HookSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-background px-8">
      <div className="max-w-5xl w-full">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm uppercase tracking-widest text-muted-foreground mb-6">The Problem</motion.p>
        <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="font-display font-extrabold text-4xl sm:text-6xl text-brand-navy mb-4">
          &ldquo;Your nurse&apos;s BLS expires in 3 days.&rdquo;
        </motion.h2>
        <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="text-2xl sm:text-3xl text-accent font-bold mb-12">
          Do you know?
        </motion.p>
        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <FileSpreadsheet className="w-5 h-5 text-red-500" />
              <span className="text-sm font-semibold text-red-700">The Reality</span>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              Most practice managers track credentials in spreadsheets. They set calendar reminders once, two years ago. On a Tuesday, while in a meeting, a reminder fired and got buried.
            </p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-semibold text-green-700">With LicenseGuard</span>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              Bold RED status card: &ldquo;Action Required — BLS Expires in 3 days.&rdquo; You knew 90 days ago. You knew 30 days ago. You know now.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ProblemSlide() {
  const painPoints = [
    { icon: FileSpreadsheet, title: "The Spreadsheet Trap", desc: "Healthcare practices track critical compliance data in spreadsheets nobody reliably updates. When credentials expire, it's quiet — there's no alarm.", color: "text-red-500", bg: "bg-red-50", border: "border-red-200" },
    { icon: BellOff, title: "The Notification Gap", desc: "Calendar reminders set once, never updated, firing at 8am on a Tuesday while you're in a meeting. Healthcare admin is too important for this.", color: "text-amber-500", bg: "bg-amber-50", border: "border-amber-200" },
    { icon: FileWarning, title: "The Audit", desc: "A state board audit catches two expired licenses. Your practice gets a notice of deficiency. The answer to 'how did this happen?' is: nothing happened.", color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-200" },
  ];
  const stats = [
    { value: "1,300+", label: "Monthly searches" },
    { value: "233%", label: "YoY keyword growth" },
    { value: "3.4M", label: "Licensed workers in US" },
    { value: "80%", label: "Track manually" },
  ];
  return (
    <div className="h-full w-full flex items-center justify-center bg-brand-navy px-8">
      <div className="max-w-5xl w-full">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm uppercase tracking-widest text-white/40 mb-4">The Problem — Expanded</motion.p>
        <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="font-display font-extrabold text-3xl sm:text-5xl text-white mb-10">
          Credential lapses are silent.<br />Until they&apos;re not.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {painPoints.map((p, i) => (
            <motion.div key={i} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 + i * 0.15 }} className={`${p.bg} ${p.border} border rounded-xl p-5`}>
              <p.icon className={`w-6 h-6 ${p.color} mb-3`} />
              <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="flex flex-wrap justify-center gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-mono font-bold text-accent">{s.value}</div>
              <div className="text-xs text-white/50 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function SolutionSlide() {
  const points = [
    { icon: CheckCircle2, title: "Color-coded dashboard", desc: "Green, amber, red. At a glance, you know.", color: "text-green-500" },
    { icon: Mail, title: "90 / 30 / 7 day alerts", desc: "Automated emails before anything lapses.", color: "text-accent" },
    { icon: Shield, title: "Purpose-built for medical", desc: "Knows DEA from BLS from Board Cert.", color: "text-blue-500" },
    { icon: Zap, title: "5 minutes to setup", desc: "Signup to first credential tracked.", color: "text-purple-500" },
  ];
  return (
    <div className="h-full w-full flex items-center justify-center bg-background px-8">
      <div className="max-w-5xl w-full">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm uppercase tracking-widest text-muted-foreground mb-4">The Solution</motion.p>
        <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="font-display font-extrabold text-3xl sm:text-5xl text-brand-navy mb-4">
          One dashboard. Every credential.<br />Zero surprises.
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-lg text-muted-foreground mb-10 max-w-2xl">
          You know exactly where you stand every morning before your first patient walks in.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {points.map((p, i) => (
            <motion.div key={i} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 + i * 0.12 }} className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-black/5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <p.icon className={`w-5 h-5 ${p.color}`} />
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MarketSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-muted/30 px-8">
      <div className="max-w-5xl w-full">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Market Opportunity</motion.p>
        <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="font-display font-extrabold text-3xl sm:text-5xl text-brand-navy mb-10">
          A large, fragmented, underserved market
        </motion.h2>
        <div className="grid grid-cols-3 gap-5 mb-10">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4 }} className="bg-brand-navy text-white rounded-xl p-6">
            <span className="text-xs uppercase tracking-wide text-accent font-mono">TAM</span>
            <div className="text-3xl sm:text-4xl font-bold mt-1">$2.3B</div>
            <p className="text-sm text-white/60 mt-2">230K practices × $120/yr avg</p>
          </motion.div>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.55 }} className="bg-white rounded-xl p-6 ring-1 ring-black/5">
            <span className="text-xs uppercase tracking-wide text-accent font-mono">SAM</span>
            <div className="text-3xl sm:text-4xl font-bold text-brand-navy mt-1">$460M</div>
            <p className="text-sm text-muted-foreground mt-2">20% — small/mid &lt;20 staff</p>
          </motion.div>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.7 }} className="bg-white rounded-xl p-6 ring-1 ring-black/5">
            <span className="text-xs uppercase tracking-wide text-accent font-mono">SOM (Y1)</span>
            <div className="text-3xl sm:text-4xl font-bold text-brand-navy mt-1">$7M</div>
            <p className="text-sm text-muted-foreground mt-2">~1,200 Pro customers</p>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Healthcare SaaS growth", value: "18% YoY" },
            { label: "Post-COVID digital adoption", value: "Accelerating" },
            { label: "State board enforcement", value: "Increasing" },
            { label: "Keyword growth signal", value: "+233% YoY" },
          ].map((d, i) => (
            <div key={i} className="bg-white rounded-lg p-4 ring-1 ring-black/5 text-center">
              <div className="text-sm font-bold text-accent">{d.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{d.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function HowItWorksSlide() {
  const steps = [
    { num: "01", title: "Add Your Team", desc: "Enter staff members and their roles. 2 minutes for a practice of 10.", icon: Users },
    { num: "02", title: "Track Their Credentials", desc: "Add credentials with expiry dates. LicenseGuard suggests the right types for each role.", icon: Shield },
    { num: "03", title: "Stay Automatically Alerted", desc: "You're done. Check back when you get an alert — or when you want peace of mind.", icon: Mail },
  ];
  return (
    <div className="h-full w-full flex items-center justify-center bg-brand-navy px-8">
      <div className="max-w-5xl w-full">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm uppercase tracking-widest text-white/40 mb-4">How It Works</motion.p>
        <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="font-display font-extrabold text-3xl sm:text-5xl text-white mb-12">
          Up and running in 5 minutes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 + i * 0.2 }} className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-mono font-bold text-accent">{s.num}</span>
                  <s.icon className="w-5 h-5 text-white/60" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
              </div>
              {i < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2">
                  <ArrowRight className="w-5 h-5 text-white/20" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TractionSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-background px-8">
      <div className="max-w-5xl w-full">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Traction & Proof</motion.p>
        <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="font-display font-extrabold text-3xl sm:text-5xl text-brand-navy mb-10">
          The market is already searching
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            { icon: TrendingUp, title: "Search demand", desc: "1,300+ monthly searches for core keywords with +233% YoY growth", accent: true },
            { icon: Globe, title: "Community signals", desc: "Reddit & Facebook groups — credential tracking is a top-3 pain point discussed by medical office managers", accent: false },
            { icon: BarChart3, title: "Competitor gap", desc: "Expiration Reminder ($19/mo) targets everything. Modio ($200+/mo) targets enterprises. Nobody owns the small clinic segment.", accent: false },
            { icon: Target, title: "Audience ready", desc: "Medical Office Managers FB group has 50K+ members actively discussing credential management solutions", accent: true },
          ].map((item, i) => (
            <motion.div key={i} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 + i * 0.12 }} className={`rounded-xl p-6 ${item.accent ? "bg-accent/5 ring-1 ring-accent/20" : "bg-white ring-1 ring-black/5"}`}>
              <item.icon className={`w-5 h-5 mb-3 ${item.accent ? "text-accent" : "text-brand-navy"}`} />
              <h3 className="font-semibold text-brand-navy mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BusinessModelSlide() {
  const tiers = [
    { name: "Starter", price: "$10", period: "/mo", features: ["5 staff members", "All credential types", "90/30/7 alerts"], featured: false },
    { name: "Professional", price: "$49", period: "/mo", features: ["20 staff members", "CME tracking", "Audit reports", "Priority support"], featured: true },
    { name: "Agency", price: "$149", period: "/mo", features: ["50+ staff", "Multi-practice", "API access", "Dedicated support"], featured: false },
  ];
  return (
    <div className="h-full w-full flex items-center justify-center bg-muted/30 px-8">
      <div className="max-w-5xl w-full">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Business Model</motion.p>
        <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="font-display font-extrabold text-3xl sm:text-5xl text-brand-navy mb-10">
          Simple SaaS. Sticky customers.
        </motion.h2>
        <div className="grid grid-cols-3 gap-5 mb-10">
          {tiers.map((t, i) => (
            <motion.div key={i} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 + i * 0.12 }} className={`rounded-xl p-6 relative ${t.featured ? "bg-brand-navy text-white" : "bg-white ring-1 ring-black/5"}`}>
              {t.featured && (
                <span className="absolute -top-3 left-6 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  HERO PLAN
                </span>
              )}
              <h3 className={`font-semibold mb-1 ${t.featured ? "" : "text-brand-navy"}`}>{t.name}</h3>
              <div className={`text-3xl font-bold mb-4 ${t.featured ? "" : "text-brand-navy"}`}>
                {t.price}<span className={`text-base font-normal ${t.featured ? "opacity-70" : "text-muted-foreground"}`}>{t.period}</span>
              </div>
              <ul className={`space-y-2 text-sm ${t.featured ? "opacity-90" : "text-muted-foreground"}`}>
                {t.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2">
                    <Check className={`w-3.5 h-3.5 ${t.featured ? "text-accent" : "text-green-500"}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="flex justify-center gap-10">
          {[
            { value: "~25:1", label: "LTV:CAC" },
            { value: "<1 month", label: "Payback" },
            { value: "$10K", label: "Month 6 MRR target" },
          ].map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-mono font-bold text-accent">{m.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function CompetitionSlide() {
  const competitors = [
    { name: "Google Sheets", focus: 1, design: 1 },
    { name: "LicenseTrak", focus: 3, design: 1.5 },
    { name: "Expiration Reminder", focus: 1.5, design: 2.5 },
    { name: "Modio Health", focus: 2.5, design: 3 },
    { name: "LicenseGuard", focus: 4.5, design: 4.5, us: true },
  ];
  return (
    <div className="h-full w-full flex items-center justify-center bg-brand-navy px-8">
      <div className="max-w-5xl w-full">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm uppercase tracking-widest text-white/40 mb-4">Competition</motion.p>
        <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="font-display font-extrabold text-3xl sm:text-5xl text-white mb-10">
          Nobody owns the small clinic segment
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="pb-3 text-sm text-white/50 font-medium">Competitor</th>
                <th className="pb-3 text-sm text-white/50 font-medium">Medical-Specific</th>
                <th className="pb-3 text-sm text-white/50 font-medium">Modern UX</th>
                <th className="pb-3 text-sm text-white/50 font-medium">Small Clinic Price</th>
                <th className="pb-3 text-sm text-white/50 font-medium">5-Min Setup</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "LicenseGuard", med: true, ux: true, price: "$10-49/mo", setup: true, us: true },
                { name: "Expiration Reminder", med: false, ux: false, price: "$19/mo", setup: true, us: false },
                { name: "Modio Health", med: true, ux: false, price: "$200+/mo", setup: false, us: false },
                { name: "LicenseTrak", med: true, ux: false, price: "$50-100/mo", setup: false, us: false },
                { name: "Google Sheets", med: false, ux: false, price: "Free", setup: true, us: false },
              ].map((c, i) => (
                <motion.tr key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.1 }} className={`border-b border-white/5 ${c.us ? "bg-accent/10" : ""}`}>
                  <td className={`py-3 text-sm font-medium ${c.us ? "text-accent" : "text-white"}`}>
                    {c.us && "✨ "}{c.name}
                  </td>
                  <td className="py-3">{c.med ? <Check className="w-4 h-4 text-green-400" /> : <X className="w-4 h-4 text-red-400/60" />}</td>
                  <td className="py-3">{c.ux ? <Check className="w-4 h-4 text-green-400" /> : <X className="w-4 h-4 text-red-400/60" />}</td>
                  <td className={`py-3 text-sm font-mono ${c.us ? "text-accent" : "text-white/70"}`}>{c.price}</td>
                  <td className="py-3">{c.setup ? <Check className="w-4 h-4 text-green-400" /> : <X className="w-4 h-4 text-red-400/60" />}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
}

function GTMSlide() {
  const phases = [
    { phase: "Phase 1 — Seed", time: "Week 1-2", channels: ["Facebook Groups", "Reddit", "LinkedIn outreach"], target: "10+ signups", color: "border-green-400" },
    { phase: "Phase 2 — Amplify", time: "Week 3-4", channels: ["ProductHunt launch", "SEO blog content", "LinkedIn outreach"], target: "50+ signups, 5+ paid", color: "border-accent" },
    { phase: "Phase 3 — Scale", time: "Month 2-3", channels: ["AppSumo LTD", "NPPES email outreach", "Paid ads"], target: "$3K MRR, 100+ paying", color: "border-blue-400" },
  ];
  return (
    <div className="h-full w-full flex items-center justify-center bg-background px-8">
      <div className="max-w-5xl w-full">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Go-To-Market</motion.p>
        <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="font-display font-extrabold text-3xl sm:text-5xl text-brand-navy mb-4">
          Organic-first. Community-driven.
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-lg text-muted-foreground mb-10">
          SEO-compounding growth with zero paid spend in Month 1.
        </motion.p>
        <div className="space-y-5">
          {phases.map((p, i) => (
            <motion.div key={i} initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 + i * 0.2 }} className={`border-l-4 ${p.color} bg-white rounded-r-xl p-5 ring-1 ring-black/5`}>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-semibold text-brand-navy">{p.phase}</h3>
                <span className="text-xs font-mono text-muted-foreground">{p.time}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {p.channels.map((c, ci) => (
                  <span key={ci} className="text-xs bg-muted px-2.5 py-1 rounded-full text-muted-foreground">{c}</span>
                ))}
              </div>
              <p className="text-sm text-accent font-medium">Target: {p.target}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-8 bg-accent/5 rounded-xl p-4 border border-accent/20">
          <p className="text-sm text-brand-navy">
            <span className="font-semibold">The hook across all channels:</span> &ldquo;Your nurse&apos;s BLS expires in 3 days. Do you know?&rdquo;
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function TeamSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-muted/30 px-8">
      <div className="max-w-5xl w-full">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Team & Ask</motion.p>
        <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="font-display font-extrabold text-3xl sm:text-5xl text-brand-navy mb-10">
          Built by ChimeStream
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="bg-white rounded-xl p-6 ring-1 ring-black/5">
            <Building2 className="w-6 h-6 text-brand-navy mb-4" />
            <h3 className="font-semibold text-brand-navy mb-2">Product Studio</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Boutique product studio focused on building software tools for underserved professional verticals. Next.js, PostgreSQL, Coolify infrastructure — production-ready from day one.
            </p>
          </motion.div>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.55 }} className="bg-brand-navy text-white rounded-xl p-6">
            <DollarSign className="w-6 h-6 text-accent mb-4" />
            <h3 className="font-semibold mb-2">The Ask — $50K Pre-Seed</h3>
            <ul className="text-sm opacity-80 space-y-2">
              <li className="flex justify-between"><span>AppSumo campaign</span><span className="font-mono text-accent">$5K</span></li>
              <li className="flex justify-between"><span>LinkedIn paid ads</span><span className="font-mono text-accent">$12K</span></li>
              <li className="flex justify-between"><span>NPPES email list</span><span className="font-mono text-accent">$3K</span></li>
              <li className="flex justify-between"><span>Contractor support</span><span className="font-mono text-accent">$30K</span></li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10 text-sm">
              <span className="text-white/60">Target:</span> <span className="text-accent font-semibold">$10K MRR by Month 6</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ClosingSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-accent blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 rounded-full bg-blue-400 blur-[80px]" />
      </div>
      <div className="relative z-10 text-center max-w-3xl px-8">
        <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="font-display font-extrabold text-3xl sm:text-5xl text-white mb-6">
          Your next credential expiry is coming.
        </motion.h2>
        <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="text-2xl sm:text-3xl text-accent font-bold mb-8">
          Know when.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-white/60 text-lg mb-10">
          Join practice managers who stopped worrying about compliance and started trusting a system.
        </motion.p>
        <motion.a initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} href="https://credguard.ashketing.com/signup" className="inline-block bg-accent hover:bg-accent-hover text-accent-foreground font-bold px-8 py-4 rounded-xl text-lg transition-colors">
          Start Free Trial — No Credit Card
        </motion.a>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex items-center justify-center gap-6 mt-8 text-sm text-white/40">
          <span>14-day free trial</span>
          <span>·</span>
          <span>Setup in 5 minutes</span>
          <span>·</span>
          <span>Cancel anytime</span>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="flex items-center justify-center gap-3 mt-10">
          <StatusDot color="bg-status-green" size="w-2.5 h-2.5" pulse />
          <StatusDot color="bg-status-amber" size="w-2.5 h-2.5" pulse />
          <StatusDot color="bg-status-red" size="w-2.5 h-2.5" pulse />
        </motion.div>
      </div>
    </div>
  );
}

/* ─── SLIDE ARRAY ─── */
const slideComponents = [
  TitleSlide,
  HookSlide,
  ProblemSlide,
  SolutionSlide,
  MarketSlide,
  HowItWorksSlide,
  TractionSlide,
  BusinessModelSlide,
  CompetitionSlide,
  GTMSlide,
  TeamSlide,
  ClosingSlide,
];

const slideLabels = [
  "Title", "Hook", "Problem", "Solution", "Market",
  "How It Works", "Traction", "Business Model", "Competition",
  "GTM", "Team", "CTA",
];

/* ─── MAIN PAGE ─── */
export default function PitchPage() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = useCallback((next: number) => {
    if (next < 0 || next >= slideComponents.length || next === current) return;
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  }, [current]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") navigate(current + 1);
      if (e.key === "ArrowLeft") navigate(current - 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, navigate]);

  const SlideComponent = slideComponents[current];

  return (
    <div className="h-screen w-screen overflow-hidden relative select-none">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Slide counter */}
      <div className="fixed top-6 right-6 z-50 text-xs font-mono px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-sm text-white/70">
        {current + 1} / {slideComponents.length}
      </div>

      {/* Progress bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 h-1 bg-black/10">
        <motion.div
          className="h-full bg-accent"
          animate={{ width: `${((current + 1) / slideComponents.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Navigation buttons */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
        <button
          onClick={() => navigate(current - 1)}
          disabled={current === 0}
          className="p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 disabled:opacity-30 transition-all text-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Dot navigation */}
        <div className="flex gap-1.5">
          {slideComponents.map((_, i) => (
            <button
              key={i}
              onClick={() => navigate(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-accent w-6" : "bg-white/30 hover:bg-white/50"}`}
              title={slideLabels[i]}
            />
          ))}
        </div>

        <button
          onClick={() => navigate(current + 1)}
          disabled={current === slideComponents.length - 1}
          className="p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 disabled:opacity-30 transition-all text-white"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
