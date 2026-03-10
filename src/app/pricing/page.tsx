"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PricingSection } from "@/components/landing/pricing-section";
import { FAQ } from "@/components/landing/faq";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const comparisonFeatures = [
  { feature: "Staff limit", starter: "5", pro: "20", agency: "50+" },
  { feature: "Credential types", starter: "All", pro: "All", agency: "All" },
  { feature: "Alert intervals", starter: "90/30/7", pro: "90/30/7", agency: "Custom" },
  { feature: "CME tracking", starter: false, pro: true, agency: true },
  { feature: "PDF reports", starter: false, pro: true, agency: true },
  { feature: "Multi-state tracking", starter: "Basic", pro: "Full", agency: "Full" },
  { feature: "Multi-practice", starter: false, pro: false, agency: "Up to 5" },
  { feature: "Staff CC on alerts", starter: false, pro: true, agency: true },
  { feature: "Support", starter: "Email", pro: "Priority", agency: "Dedicated" },
];

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="h-4 w-4 text-status-green mx-auto" />
    ) : (
      <X className="h-4 w-4 text-gray-300 mx-auto" />
    );
  }
  return <span className="text-sm text-brand-navy font-medium">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <PricingSection />

        {/* Comparison Table */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="font-display font-bold text-2xl text-brand-navy text-center mb-8">
              Feature Comparison
            </h2>
            <div className="bg-surface rounded-2xl shadow-sm ring-1 ring-black/5 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Feature
                    </th>
                    <th className="text-center px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Starter
                    </th>
                    <th className="text-center px-4 py-3 text-xs font-medium text-accent uppercase tracking-wider">
                      Professional
                    </th>
                    <th className="text-center px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Agency
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row) => (
                    <tr key={row.feature} className="border-b border-border last:border-0">
                      <td className="px-4 py-3 font-medium text-brand-navy">
                        {row.feature}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <CellValue value={row.starter} />
                      </td>
                      <td className="px-4 py-3 text-center bg-accent/5">
                        <CellValue value={row.pro} />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <CellValue value={row.agency} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <FAQ />

        {/* CTA */}
        <section className="py-12 bg-background">
          <div className="text-center">
            <Link href="/signup">
              <Button className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold h-12 px-8 rounded-xl text-base">
                Start Your Free Trial
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
