"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Add Your Team",
    description:
      "Enter your staff members and their roles. Takes 2 minutes for a practice of 10.",
  },
  {
    number: "02",
    title: "Track Their Credentials",
    description:
      "Add each credential with an expiry date. LicenseGuard pre-suggests the right credential types for each role.",
  },
  {
    number: "03",
    title: "Stay Automatically Alerted",
    description:
      "You're done. LicenseGuard monitors everything and emails you well before anything expires.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 sm:py-20 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy mt-3">
            Up and running in under 5 minutes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-px bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-surface rounded-2xl p-8 shadow-sm ring-1 ring-black/5 relative"
            >
              <span className="font-display font-extrabold text-7xl text-accent/10 absolute top-4 right-4">
                {step.number}
              </span>
              <div className="relative z-10">
                <div className="h-10 w-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-display font-bold text-sm mb-5">
                  {step.number}
                </div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-5">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/images/how-it-works.png"
            alt="How LicenseGuard works — step by step"
            width={900}
            height={400}
            className="rounded-2xl shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
