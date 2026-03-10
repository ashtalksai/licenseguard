"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Solution() {
  return (
    <section className="py-12 sm:py-20 bg-brand-navy relative overflow-hidden">
      {/* Shield pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/images/bg-pattern.png')`,
          backgroundSize: "400px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">
            The Solution
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-4">
            One dashboard. Every credential. Zero surprises.
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            LicenseGuard gives every credential on your team a status — green,
            amber, or red. You know exactly where you stand every morning before
            your first patient walks in.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Image
            src="/images/hero-illustration.png"
            alt="LicenseGuard Dashboard"
            width={1000}
            height={600}
            className="rounded-2xl max-w-full"
            style={{
              boxShadow: "0 0 60px rgba(245,158,11,0.15)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
