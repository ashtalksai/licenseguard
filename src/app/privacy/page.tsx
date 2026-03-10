import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h1 className="font-display font-bold text-3xl text-brand-navy mb-2">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground mb-10">
              Last updated: March 10, 2026
            </p>

            <div className="prose prose-gray max-w-none space-y-8 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="font-display font-bold text-xl text-brand-navy mb-3">
                  What We Collect
                </h2>
                <p>
                  When you use LicenseGuard, we collect the following information:
                </p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Account email address and name</li>
                  <li>Practice name, specialty, and location</li>
                  <li>Staff member names, roles, and email addresses</li>
                  <li>Credential types, license numbers, and expiry dates</li>
                  <li>Alert delivery logs and preferences</li>
                  <li>Payment information (processed via Stripe — not stored by us)</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-brand-navy mb-3">
                  What We Do NOT Collect
                </h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Patient health information (PHI)</li>
                  <li>Medical records or clinical notes</li>
                  <li>Social Security numbers</li>
                  <li>Any data protected under HIPAA</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-brand-navy mb-3">
                  How We Use Your Data
                </h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Powering your credential tracking dashboard</li>
                  <li>Sending expiry alert emails at configured intervals</li>
                  <li>Processing your subscription payment</li>
                  <li>Improving the product and fixing bugs</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-brand-navy mb-3">
                  Data Retention
                </h2>
                <p>
                  Active data is retained while your account is active. Within 30
                  days after account cancellation, all your data is permanently
                  deleted. We recommend exporting your data via Settings &gt; Export
                  before cancelling.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-brand-navy mb-3">
                  Third-Party Services
                </h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Stripe</strong> — Payment processing. Your card
                    information is handled entirely by Stripe and never touches our
                    servers.
                  </li>
                  <li>
                    <strong>Resend</strong> — Email delivery for expiry alerts.
                  </li>
                  <li>
                    <strong>Vercel / Hosting Provider</strong> — Application
                    hosting with SOC 2 compliant infrastructure.
                  </li>
                </ul>
                <p className="mt-2">
                  All third-party services operate under Data Processing Agreements (DPAs).
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-brand-navy mb-3">
                  HIPAA Compliance
                </h2>
                <p>
                  LicenseGuard tracks administrative credential data — not patient
                  health information. This data is not classified as PHI under
                  HIPAA. For organizations requiring a Business Associate Agreement
                  (BAA), we offer BAAs on Agency plans. Contact us at
                  support@licenseguard.com.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-brand-navy mb-3">
                  Security
                </h2>
                <p>
                  All data is encrypted at rest and in transit. We use SOC 2
                  compliant hosting infrastructure with regular security audits.
                  Access to production systems is restricted and logged.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-brand-navy mb-3">
                  Contact
                </h2>
                <p>
                  For privacy-related questions, contact us at
                  privacy@licenseguard.com or through our contact page.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
