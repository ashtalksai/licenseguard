"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Bell,
  BarChart3,
  UserCheck,
  Users,
  ClipboardCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "All Credentials, One Place",
    description:
      "State medical licenses, DEA registrations, malpractice insurance, board certifications, BLS/ACLS, CME hours — all tracked in one dashboard.",
    large: true,
  },
  {
    icon: Bell,
    title: "90 / 30 / 7 Day Alerts",
    description:
      "Get email reminders automatically at 90 days, 30 days, and 7 days before any credential expires. Optionally CC the staff member directly.",
    large: true,
  },
  {
    icon: BarChart3,
    title: "Green, Amber, Red — At a Glance",
    description:
      "Your team's compliance status in 5 seconds. If something needs attention, it's visually obvious.",
  },
  {
    icon: UserCheck,
    title: "Built for Medical Roles",
    description:
      "Add a Nurse Practitioner and LicenseGuard suggests the credentials NPs typically need.",
  },
  {
    icon: Users,
    title: "Track Your Whole Team",
    description:
      "Starter tracks 5 staff. Professional tracks 20. Agency tracks unlimited. Scales with you.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit-Ready at Any Time",
    description:
      "Export a complete credential status report — ready for state board audits or insurance renewals.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-12 sm:py-20 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">
            Features
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy mt-3">
            Everything a practice manager needs.{" "}
            <span className="block">Nothing they don&apos;t.</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {features
            .filter((f) => f.large)
            .map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-surface rounded-2xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-md hover:scale-[1.02] transition-all min-h-[280px] flex flex-col justify-end"
              >
                <div className="h-14 w-14 rounded-xl bg-accent-light flex items-center justify-center mb-5">
                  <feature.icon className="h-7 w-7 text-brand-navy" />
                </div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features
            .filter((f) => !f.large)
            .map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-surface rounded-2xl p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md hover:scale-[1.02] transition-all min-h-[200px]"
              >
                <div className="h-10 w-10 rounded-lg bg-accent-light flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5 text-brand-navy" />
                </div>
                <h3 className="font-display font-bold text-brand-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
