"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-12 sm:py-20 bg-brand-navy relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/images/bg-pattern.png')`,
          backgroundSize: "400px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Your next credential expiry is coming. Know when.
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Join 500+ practice managers who stopped worrying about compliance
            and started trusting a system. 14-day free trial, no credit card
            required.
          </p>
          <Link href="/signup">
            <Button className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold h-14 px-8 rounded-xl text-lg">
              Protect Your Practice — Start Free
            </Button>
          </Link>
          <p className="text-gray-400 text-sm mt-4 flex items-center justify-center gap-2">
            <Shield className="h-4 w-4" />
            Set up in 5 minutes · Cancel anytime · SOC 2 hosting
          </p>
        </motion.div>
      </div>
    </section>
  );
}
