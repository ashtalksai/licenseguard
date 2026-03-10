"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 10,
    annualPrice: 8,
    description: "Solo physicians or micro-practices",
    features: [
      { text: "Up to 5 staff members", included: true },
      { text: "All credential types (Big 5 + custom)", included: true },
      { text: "90/30/7 day email alerts", included: true },
      { text: "Color-coded compliance dashboard", included: true },
      { text: "Mobile-responsive", included: true },
      { text: "Email support", included: true },
      { text: "CME hour tracking", included: false },
      { text: "Audit-ready reports", included: false },
      { text: "Multi-state tracking", included: false },
    ],
    featured: false,
  },
  {
    name: "Professional",
    monthlyPrice: 49,
    annualPrice: 39,
    description: "Small-to-medium private practices",
    badge: "Most Popular",
    features: [
      { text: "Up to 20 staff members", included: true },
      { text: "Everything in Starter", included: true },
      { text: "CME hour tracking", included: true },
      { text: "Audit-ready compliance reports (PDF)", included: true },
      { text: "Full multi-state license tracking", included: true },
      { text: "Priority email support", included: true },
      { text: "CC staff on their own alerts", included: true },
      { text: "Multi-practice", included: false },
      { text: "Dedicated onboarding", included: false },
    ],
    featured: true,
  },
  {
    name: "Agency",
    monthlyPrice: 149,
    annualPrice: 119,
    description: "Multi-practice groups or MSOs",
    features: [
      { text: "50+ staff members", included: true },
      { text: "Everything in Professional", included: true },
      { text: "Up to 5 practice locations", included: true },
      { text: "Centralized multi-practice dashboard", included: true },
      { text: "Dedicated onboarding call", included: true },
      { text: "Priority support (< 4hr response)", included: true },
      { text: "Custom alert intervals", included: true },
      { text: "API access", included: true },
      { text: "BAA available", included: true },
    ],
    featured: false,
  },
];

export function PricingSection() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-12 sm:py-20 bg-surface">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy mt-3 mb-4">
            Protect your practice for less than a coffee a week
          </h2>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span
              className={cn(
                "text-sm font-medium",
                !annual ? "text-brand-navy" : "text-muted-foreground"
              )}
            >
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={cn(
                "relative h-7 w-12 rounded-full transition-colors",
                annual ? "bg-accent" : "bg-gray-300"
              )}
            >
              <span
                className={cn(
                  "absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform",
                  annual ? "translate-x-5.5" : "translate-x-0.5"
                )}
              />
            </button>
            <span
              className={cn(
                "text-sm font-medium",
                annual ? "text-brand-navy" : "text-muted-foreground"
              )}
            >
              Annual
            </span>
            {annual && (
              <span className="text-xs font-semibold text-status-green bg-status-green-bg px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </motion.div>

        {/* Free trial notice */}
        <div className="bg-status-green-bg border border-status-green-border rounded-xl px-6 py-3 text-center mb-8 max-w-2xl mx-auto">
          <p className="text-sm font-medium text-emerald-800">
            🎉 14-day free trial — Full Professional access — No credit card
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={cn(
                "bg-surface rounded-2xl p-8 ring-1 relative",
                plan.featured
                  ? "ring-accent shadow-lg scale-[1.02]"
                  : "ring-black/5 shadow-sm"
              )}
            >
              {plan.featured && (
                <div className="absolute -top-px left-0 right-0 h-1 bg-accent rounded-t-2xl" />
              )}
              {plan.badge && (
                <span className="absolute top-4 right-4 text-xs font-semibold bg-accent text-accent-foreground px-2.5 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              <h3 className="font-display font-bold text-xl text-brand-navy mb-1">
                {plan.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="font-display font-extrabold text-4xl text-brand-navy">
                  ${annual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-muted-foreground text-sm">/month</span>
                {annual && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Billed annually (save $
                    {(plan.monthlyPrice - plan.annualPrice) * 12}/yr)
                  </p>
                )}
              </div>

              <Link href={plan.name === "Agency" ? "/contact" : "/signup"}>
                <Button
                  className={cn(
                    "w-full rounded-xl font-semibold h-11",
                    plan.featured
                      ? "bg-accent hover:bg-accent-hover text-accent-foreground"
                      : "bg-brand-navy hover:bg-brand-navy/90 text-white"
                  )}
                >
                  {plan.name === "Agency"
                    ? "Contact Sales"
                    : "Start Free Trial"}
                </Button>
              </Link>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature.text}
                    className="flex items-start gap-2 text-sm"
                  >
                    {feature.included ? (
                      <Check className="h-4 w-4 text-status-green shrink-0 mt-0.5" />
                    ) : (
                      <Minus className="h-4 w-4 text-gray-300 shrink-0 mt-0.5" />
                    )}
                    <span
                      className={cn(
                        feature.included
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
