import { FileText } from "lucide-react";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import ScrollReveal from "../components/animations/ScrollReveal";
import CtaSection from "../components/ui/CtaSection";

const sections = [
  {
    title: "Services",
    content:
      "ZHS AI Agency provides technology consulting, AI agent development, custom software engineering, automation solutions, digital growth services, and creative technology including 3D design. The specific scope, deliverables, and timelines for each engagement are defined in a separate project agreement or statement of work between ZHS AI Agency and the client.",
  },
  {
    title: "User Responsibilities",
    content:
      "Clients are responsible for providing accurate and timely information necessary for project execution. This includes access to existing systems, data, branding assets, and timely feedback during development cycles. Delays or inaccuracies in client-provided materials may impact project timelines and deliverables.",
  },
  {
    title: "Intellectual Property",
    content:
      "Unless otherwise specified in a project agreement, ownership of custom-developed deliverables transfers to the client upon full payment. ZHS AI Agency retains the right to use general methodologies, frameworks, and non-proprietary knowledge gained during engagements. Pre-existing tools, libraries, and components used in development remain the property of their respective owners.",
  },
  {
    title: "Payments & Billing",
    content:
      "Project billing terms are outlined in individual project agreements. Typically, projects require a deposit before work begins with milestone-based or monthly billing thereafter. Invoices are due within the timeframe specified in the project agreement. Late payments may result in work pauses until the account is brought current.",
  },
  {
    title: "Project Scope",
    content:
      "Each project engagement begins with a defined scope of work. Any changes to the original scope — including additional features, integrations, or requirements — will be assessed for impact on timeline and budget. Scope changes are documented and agreed upon by both parties before implementation.",
  },
  {
    title: "Third-Party Services",
    content:
      "Our projects may incorporate third-party platforms, APIs, or services. The availability, pricing, and terms of these services are controlled by their respective providers and may change independently of our work. We are not responsible for disruptions, policy changes, or service interruptions caused by third-party providers.",
  },
  {
    title: "Limitation of Liability",
    content:
      "ZHS AI Agency's total liability for any engagement shall not exceed the total fees paid by the client for the specific project giving rise to the claim. We are not liable for indirect, incidental, or consequential damages including loss of data, revenue, or business opportunities arising from our services.",
  },
  {
    title: "Changes to Terms",
    content:
      "We may update these Terms of Service from time to time. Material changes will be communicated through our website or directly to clients with active projects. Continued use of our services after changes take effect constitutes acceptance of the updated terms.",
  },
];

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms of Service | ZHS AI Agency"
        description="Terms governing the use of ZHS AI Agency's services and website."
        path="/terms"
      />

      <PageHero
        eyebrow="Legal"
        heading="Terms of Service"
        subheading="The terms governing your use of our services and website."
      />

      <section className="relative py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="mb-12 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg dark:bg-zhs-accent/10 bg-indigo-50 dark:text-zhs-accent text-zhs-accent">
                  <FileText className="h-5 w-5" />
                </div>
                <p className="dark:text-zhs-muted text-slate-500 text-sm">
                  Last updated: September 2026
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={40}>
              <p className="dark:text-zhs-muted text-slate-500 leading-relaxed mb-10">
                By engaging ZHS AI Agency for services or using this website, you agree to the following
                terms. Please review them carefully.
              </p>
            </ScrollReveal>

            <div className="space-y-10">
              {sections.map((section, i) => (
                <ScrollReveal key={i} delay={60 + i * 40}>
                  <div>
                    <h2 className="text-xl font-semibold dark:text-zhs-white text-slate-900 mb-3">
                      {section.title}
                    </h2>
                    <p className="dark:text-zhs-muted text-slate-500 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={200}>
              <div className="mt-12 rounded-2xl dark:border-zhs-border border-slate-200 p-6 dark:bg-zhs-dark-2/50 bg-slate-50">
                <h3 className="font-semibold dark:text-zhs-white text-slate-900 mb-2">
                  Questions?
                </h3>
                <p className="dark:text-zhs-muted text-slate-500 text-sm leading-relaxed">
                  If you have any questions about these terms, please contact us at{" "}
                  <a
                    href="mailto:zhsaiagency@gmail.com"
                    className="dark:text-zhs-accent text-zhs-accent hover:underline"
                  >
                    zhsaiagency@gmail.com
                  </a>
                  .
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <CtaSection
        heading="Need Clarification?"
        subheading="Our team is happy to walk you through any of these terms in plain language."
      />
    </>
  );
}
