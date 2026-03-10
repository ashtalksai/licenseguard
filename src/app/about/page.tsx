import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Eye, DollarSign } from "lucide-react";

const differentiators = [
  {
    icon: Shield,
    title: "Purpose-Built for Medical Credentials",
    description:
      "Not a generic reminder tool. LicenseGuard knows DEA registrations, state medical licenses, board certifications, and BLS/ACLS — not just 'items with dates'.",
  },
  {
    icon: Eye,
    title: "Designed for Practice Managers",
    description:
      "Your workflow is a 30-second morning check. Our dashboard is built for that — green means move on, red means act. No training manuals, no onboarding calls.",
  },
  {
    icon: DollarSign,
    title: "Priced for Small Practices",
    description:
      "Enterprise credentialing tools cost $30K/year. We cost $10/month. Because a 5-person family practice deserves the same compliance confidence as a hospital.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-brand-navy py-16 sm:py-24 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url('/images/bg-pattern.png')`,
              backgroundSize: "400px",
              backgroundRepeat: "repeat",
            }}
          />
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center relative z-10">
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
              Built because a spreadsheet failed us.
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto">
              A practice missed a credential expiry because they were tracking
              in a spreadsheet. The practice manager was great at her job. The
              spreadsheet just couldn&apos;t keep up.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="bg-surface rounded-2xl p-8 sm:p-12 shadow-sm ring-1 ring-black/5 text-center">
              <span className="text-accent text-5xl font-display">&ldquo;</span>
              <p className="font-display text-xl sm:text-2xl text-brand-navy leading-relaxed italic max-w-2xl mx-auto -mt-4">
                We believe every practice manager deserves to walk into Monday
                knowing their team is compliant — without spending Sunday night
                checking spreadsheets.
              </p>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-12 sm:py-20 bg-background">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <h2 className="font-display font-bold text-3xl text-brand-navy text-center mb-12">
              What makes this different
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {differentiators.map((d) => (
                <div
                  key={d.title}
                  className="bg-surface rounded-2xl p-8 shadow-sm ring-1 ring-black/5"
                >
                  <div className="h-12 w-12 rounded-xl bg-accent-light flex items-center justify-center mb-5">
                    <d.icon className="h-6 w-6 text-brand-navy" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-brand-navy mb-2">
                    {d.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {d.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Image */}
        <section className="py-8 bg-background">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
            <Image
              src="/images/about-visual.png"
              alt="Medical practice office"
              width={1000}
              height={500}
              className="rounded-2xl shadow-md w-full"
            />
          </div>
        </section>

        {/* Team */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="max-w-[600px] mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-3">
              Built by ChimeStream
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A product studio focused on healthcare operations and practice
              management tools. We build software that practice managers
              actually want to use.
            </p>
            <Link href="/signup">
              <Button className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold h-12 px-8 rounded-xl">
                Try LicenseGuard free for 14 days →
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
