import { ArrowRight } from "lucide-react";
import ScrollReveal from "../../components/animations/ScrollReveal";
import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";

const steps = [
  { label: "Lead comes in", detail: "Website, ad, referral" },
  { label: "AI qualifies lead", detail: "Score & route instantly" },
  { label: "CRM updated", detail: "Auto-sync all data" },
  { label: "Personalized response", detail: "AI-crafted message" },
  { label: "Sales notified", detail: "Ready to close" },
];

export default function AutomationWorkflow() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-zhs-dark-2 dark:via-zhs-dark dark:to-zhs-dark-2 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Automation"
            heading="Turn Repetitive Work Into Automated Workflows."
            subheading="From trigger to result, every step handled by intelligent automation."
          />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="flex flex-col items-stretch gap-0 sm:flex-row sm:items-center sm:justify-between">
              {steps.map((step, i) => (
                <div key={step.label} className="flex items-center">
                  <div className="group flex-1 text-center">
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl dark:border-zhs-border border-slate-200 dark:bg-zhs-dark-2 bg-white transition-all duration-300 group-hover:border-zhs-accent/40 group-hover:glow-sm">
                      <span className="text-sm font-bold text-zhs-accent">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="text-sm font-semibold dark:text-zhs-white text-slate-900">{step.label}</p>
                    <p className="mt-1 text-xs dark:text-zhs-muted text-slate-500">{step.detail}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <ArrowRight className="mx-1 hidden h-4 w-4 shrink-0 text-zhs-accent/40 sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl dark:border-zhs-border border-slate-200 dark:bg-zhs-dark-2/60 bg-white/80 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zhs-emerald/10 text-zhs-emerald">
                <ArrowRight className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold dark:text-zhs-white text-slate-900">Result</p>
                <p className="text-xs dark:text-zhs-muted text-slate-500">Lead qualified, responded to, and sales team engaged — all in seconds, not hours.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
