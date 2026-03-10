"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, Shield } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    toast.success("Message sent! We'll get back to you within 24 hours.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mb-3">
                Get in Touch
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Have a question about LicenseGuard? We&apos;d love to hear from
                you.
              </p>
            </div>

            <div className="grid lg:grid-cols-[60%_40%] gap-12 max-w-4xl mx-auto">
              {/* Form */}
              <div className="bg-surface rounded-2xl p-8 shadow-sm ring-1 ring-black/5">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="mt-1.5 rounded-xl"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@practice.com"
                        className="mt-1.5 rounded-xl"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <select
                      id="subject"
                      className="mt-1.5 w-full h-10 rounded-xl border border-input bg-background px-3 text-sm"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option>General Question</option>
                      <option>Bug Report</option>
                      <option>Feature Request</option>
                      <option>Billing</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help..."
                      rows={5}
                      className="mt-1.5 rounded-xl"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold h-11 px-6 rounded-xl"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>

              {/* Info */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-accent-light flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-brand-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">
                      Response Time
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      We typically respond within 24 hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-accent-light flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-brand-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">
                      Email
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      support@licenseguard.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-accent-light flex items-center justify-center shrink-0">
                    <Shield className="h-5 w-5 text-brand-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">
                      Urgent Compliance Issues
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Mention URGENT in your subject line — we&apos;ll respond
                      within 2 hours during business hours (Mon–Fri, 9am–6pm
                      ET).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
