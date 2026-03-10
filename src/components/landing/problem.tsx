"use client";

import { motion } from "framer-motion";
import { Grid3X3, BellOff, FileWarning } from "lucide-react";

const problems = [
  {
    icon: Grid3X3,
    title: "The Spreadsheet Trap",
    description:
      "Your current 'system' is a shared Google Sheet. You update it when you remember. Staff emails about license renewals go to their personal inbox, not yours. One day you realize Dr. Martinez's DEA registration expired two weeks ago.",
  },
  {
    icon: BellOff,
    title: "The Notification Gap",
    description:
      "You set a Google Calendar reminder once, two years ago. That calendar is now buried under 400 other events. The reminder fired at 8am on a Tuesday when you were in a patient coordination meeting. It's now June and the reminder was for April.",
  },
  {
    icon: FileWarning,
    title: "The Compliance Audit",
    description:
      "Your state board shows up for an unannounced audit. Two staff members have expired licenses. Your practice gets a notice of deficiency. You're scrambling to explain what happened. The answer is: nothing happened. That's the problem.",
  },
];

const sectionVariant: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Problem() {
  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariant}
          className="text-center mb-12"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">
            The Problem
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy mt-3 mb-4">
            Credential lapses are silent.{" "}
            <span className="block">Until they&apos;re not.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Healthcare compliance doesn&apos;t send calendar invites. It sends
            state board audits.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-surface rounded-2xl p-8 shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-accent-light flex items-center justify-center mb-5">
                <problem.icon className="h-6 w-6 text-brand-navy" />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-navy mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
