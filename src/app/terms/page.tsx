import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h1 className="font-display font-bold text-3xl text-brand-navy mb-2">
              Terms of Service
            </h1>
            <p className="text-sm text-muted-foreground mb-10">
              Last updated: March 10, 2026
            </p>

            <div className="prose prose-gray max-w-none space-y-8 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="font-display font-bold text-xl text-brand-navy mb-3">
                  Service Description
                </h2>
                <p>
                  LicenseGuard is a credential tracking and expiry reminder
                  service designed for private medical practices. We provide a
                  dashboard for tracking staff credentials and automated email
                  alerts before credentials expire.
                </p>
                <p className="mt-2">
                  <strong>Important:</strong> LicenseGuard is not a compliance
                  authority. Our alerts and tracking do not constitute legal
                  compliance advice. Users are responsible for maintaining valid
                  credentials for their staff.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-brand-navy mb-3">
                  Account Responsibilities
                </h2>
                <p>
                  Practice managers are responsible for entering accurate
                  credential information, including expiry dates. LicenseGuard
                  alerts are based on the data you provide — if an expiry date is
                  entered incorrectly, alerts will be sent based on that
                  incorrect date.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-brand-navy mb-3">
                  Limitation of Liability
                </h2>
                <p>
                  LicenseGuard is not responsible for credential lapses,
                  regulatory fines, audit findings, or any other consequences
                  that occur despite or in the absence of our alert service.
                  Users maintain sole responsibility for renewing credentials on
                  time.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-brand-navy mb-3">
                  Payment Terms
                </h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    All plans start with a 14-day free trial with full
                    Professional access
                  </li>
                  <li>No credit card is required for the trial period</li>
                  <li>Subscriptions auto-renew at the end of each billing period</li>
                  <li>
                    Cancel before your renewal date to avoid the next period&apos;s
                    charge
                  </li>
                  <li>
                    Annual plans are non-refundable but can be cancelled to
                    prevent renewal
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-brand-navy mb-3">
                  Acceptable Use
                </h2>
                <p>
                  LicenseGuard is designed for medical practices, dental
                  practices, and allied health providers to track professional
                  credentials. It is not intended for tracking non-credential
                  data such as employee contracts, equipment warranties, or
                  general business documents.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-brand-navy mb-3">
                  Cancellation
                </h2>
                <p>
                  Monthly plans can be cancelled at any time with no contract or
                  cancellation fees. Cancel from Settings &gt; Billing in the
                  app, or email support@licenseguard.com. Your data will be
                  retained for 30 days after cancellation, then permanently
                  deleted.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-brand-navy mb-3">
                  Modifications
                </h2>
                <p>
                  We may update these terms from time to time. Significant
                  changes will be communicated via email at least 30 days before
                  taking effect. Continued use of the service after changes
                  constitutes acceptance.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-brand-navy mb-3">
                  Contact
                </h2>
                <p>
                  For questions about these terms, contact us at
                  legal@licenseguard.com or through our contact page.
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
