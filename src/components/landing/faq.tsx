"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What happens when a credential expires? Do you automatically renew anything?",
    answer:
      "No — LicenseGuard is a tracking and alerting tool, not an automated renewal service. We alert you well before expiry (90, 30, and 7 days out) so you have time to renew through the appropriate state board or certifying organization. After you renew, you update the expiry date in LicenseGuard and the clock resets.",
  },
  {
    question: "Is this HIPAA compliant? We deal with PHI.",
    answer:
      "LicenseGuard tracks administrative credential data — license numbers, expiry dates, certification types — not patient health information. This data is not PHI under HIPAA. We use standard security practices (encrypted at rest and in transit, SOC 2 hosting). If your organization requires a Business Associate Agreement (BAA), contact us — we offer BAAs on Agency plans.",
  },
  {
    question: "Can I track credentials for myself as a solo physician?",
    answer:
      "Yes. Many solo practitioners use LicenseGuard to track their own 6-8 credentials — state license, DEA, board certification, BLS, malpractice. Starter plan is perfect for this use case at $10/month.",
  },
  {
    question: "What if a staff member needs to see their own credentials?",
    answer:
      "On Professional and Agency plans, you can configure alerts to CC the staff member's email directly. They get notified about their own expiring credentials. A full staff portal (where staff can log in and view/update their own records) is on our roadmap for Q3 2026.",
  },
  {
    question:
      "Can I track licenses in multiple states? Some of our physicians are licensed in 3 states.",
    answer:
      "Yes. You can add multiple \"State Medical License\" credentials per staff member — one per state. Each has its own license number, issuing state, and expiry date. Professional plan includes full multi-state tracking.",
  },
  {
    question: "What credential types can I track?",
    answer:
      "The Big 5 (State Medical License, DEA Registration, Malpractice Insurance, Board Certification, BLS/ACLS/PALS) plus CME hours (Professional+), plus any custom credential type you name. If you have something specific we don't support, contact us.",
  },
  {
    question: "How do I cancel? Is there a contract?",
    answer:
      "Monthly plans cancel anytime — no contract, no cancellation fees. Annual plans are non-refundable but can be cancelled to prevent next year's renewal. Cancel from Settings > Billing in the app, or email us.",
  },
];

export function FAQ() {
  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mt-3">
            Questions from practice managers like you
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <Accordion className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-surface rounded-xl px-6 ring-1 ring-black/5 border-0"
              >
                <AccordionTrigger className="text-left font-semibold text-brand-navy hover:text-accent py-5 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
