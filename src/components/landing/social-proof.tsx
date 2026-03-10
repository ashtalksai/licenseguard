"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Quote, BadgeCheck } from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const controls = animate(0, target, {
            duration: 1.5,
            ease: "easeOut",
            onUpdate: (v) => setValue(Math.round(v)),
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 500, suffix: "+", label: "practices protected" },
  { value: 12000, suffix: "+", label: "credentials tracked" },
  { value: 99.7, suffix: "%", label: "alert delivery rate" },
];

const testimonials = [
  {
    quote:
      "We had three credentials expire in one week before I found LicenseGuard. I was managing it all in a spreadsheet I barely opened. Now I get an email at 90 days and I actually have time to deal with it.",
    name: "Jennifer R.",
    role: "Office Manager, Family Practice Clinic",
    location: "Indianapolis, IN",
  },
  {
    quote:
      "The dashboard is exactly what I wanted. I open it Monday morning, I see green across the board, I move on. When I see amber, I click and fix it. That's the whole workflow. Simple.",
    name: "Marcus T.",
    role: "Practice Manager, Urgent Care Group",
    location: "Austin, TX",
  },
  {
    quote:
      "Our malpractice insurance requires verified license status for every provider. LicenseGuard made our annual audit last 20 minutes instead of a full day of scrambling.",
    name: "Patricia L.",
    role: "Administrator, Behavioral Health Practice",
    location: "Phoenix, AZ",
  },
];

export function SocialProof() {
  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-navy">
            Practice managers sleep better with LicenseGuard
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy mb-1">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-surface rounded-2xl p-8 shadow-sm ring-1 ring-black/5"
            >
              <Quote className="h-8 w-8 text-accent mb-4" />
              <p className="text-muted-foreground italic text-base leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div>
                  <p className="font-semibold text-brand-navy text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.location}
                  </p>
                </div>
                <BadgeCheck className="h-4 w-4 text-status-green ml-auto" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
