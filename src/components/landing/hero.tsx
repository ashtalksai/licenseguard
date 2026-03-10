"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 bg-background overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, #1E2D4A 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
          {/* Left — Copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative z-10"
          >
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 bg-accent-light text-brand-navy text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <Shield className="h-3.5 w-3.5" />
                500+ practices protected
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-brand-navy leading-[1.1] mb-6"
            >
              Your nurse&apos;s BLS expires in 3 days.{" "}
              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 opacity-90">
                Do you know?
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-muted-foreground text-lg leading-relaxed max-w-[500px] mb-8"
            >
              Most practice managers don&apos;t — until it&apos;s too late.
              LicenseGuard tracks every credential for every staff member, and
              alerts you before anything lapses.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 mb-5">
              <Link href="/signup">
                <Button className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold h-12 px-6 rounded-xl text-base">
                  Start Free Trial — No Credit Card
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  variant="outline"
                  className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white h-12 px-6 rounded-xl text-base font-semibold"
                >
                  See how it works →
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-center gap-4 text-xs text-muted-foreground"
            >
              {["14-day free trial", "No setup fee", "Cancel anytime"].map(
                (text) => (
                  <span key={text} className="flex items-center gap-1">
                    <CheckCircle className="h-3.5 w-3.5 text-status-green" />
                    {text}
                  </span>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Right — Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative -rotate-1">
              <Image
                src="/images/hero-illustration.png"
                alt="LicenseGuard Dashboard showing credential status"
                width={600}
                height={450}
                className="rounded-2xl shadow-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
