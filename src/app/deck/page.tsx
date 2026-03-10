"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    title: "LicenseGuard",
    subtitle: "Credential tracking for private medical practices",
    bg: "bg-brand-navy",
    textColor: "text-white",
  },
  {
    title: "The Problem",
    content:
      "73% of physician practices (<50 staff) track credentials manually. Spreadsheets, calendar reminders, and hope. One lapse = state board audit, insurance claim denial, or worse.",
    bg: "bg-background",
    textColor: "text-brand-navy",
  },
  {
    title: "The Solution",
    content:
      "One dashboard. Every credential. Zero surprises. Color-coded status (green/amber/red) tells you everything in 5 seconds. Automated alerts at 90, 30, and 7 days.",
    bg: "bg-brand-navy",
    textColor: "text-white",
  },
  {
    title: "Market Opportunity",
    content:
      "154,787 small physician practices in the US. +233% search growth for credential management. No purpose-built, affordable, self-serve tool exists for this segment.",
    bg: "bg-background",
    textColor: "text-brand-navy",
  },
  {
    title: "Business Model",
    content:
      "SaaS: Starter $10/mo (5 staff) · Professional $49/mo (20 staff) · Agency $149/mo (50+ staff, multi-practice). 14-day free trial → paid conversion.",
    bg: "bg-brand-navy",
    textColor: "text-white",
  },
  {
    title: "Start Free",
    subtitle: "licenseguard.ashketing.com",
    content: "14-day free trial · No credit card · Set up in 5 minutes",
    bg: "bg-accent",
    textColor: "text-accent-foreground",
  },
];

export default function DeckPage() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => Math.min(c + 1, slides.length - 1));
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className={`h-full w-full flex flex-col items-center justify-center p-8 sm:p-16 ${slides[current].bg}`}
        >
          <div className="max-w-3xl text-center">
            <h1
              className={`font-display font-extrabold text-4xl sm:text-6xl mb-4 ${slides[current].textColor}`}
            >
              {slides[current].title}
            </h1>
            {slides[current].subtitle && (
              <p
                className={`text-xl sm:text-2xl opacity-80 mb-6 ${slides[current].textColor}`}
              >
                {slides[current].subtitle}
              </p>
            )}
            {slides[current].content && (
              <p
                className={`text-lg sm:text-xl leading-relaxed opacity-80 ${slides[current].textColor}`}
              >
                {slides[current].content}
              </p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={prev}
          disabled={current === 0}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-30 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="text-sm font-mono opacity-60">
          {current + 1} / {slides.length}
        </span>
        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-30 transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Keyboard nav */}
      <div
        className="fixed inset-0 z-10"
        onClick={(e) => {
          const x = e.clientX / window.innerWidth;
          if (x < 0.3) prev();
          else if (x > 0.7) next();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight" || e.key === " ") next();
          if (e.key === "ArrowLeft") prev();
        }}
        tabIndex={0}
        style={{ background: "transparent", cursor: "pointer" }}
      />
    </div>
  );
}
