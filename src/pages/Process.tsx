import ScrollReveal from "../components/animations/ScrollReveal";
import Container from "../components/ui/Container";
import { SectionWrapper } from "../components/ui/SectionHeading";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import CtaSection from "../components/ui/CtaSection";

const steps = [
  {
    num: "01",
    title: "Discover",
    whatZhsDoes: "We deeply understand your business — your goals, challenges, workflows, customers, and growth opportunities.",
    whatClientProvides: "Access to your team, existing processes, business goals, and pain points.",
    whatClientReceives: "A comprehensive understanding of your business landscape and opportunity areas.",
    outcome: "Clarity on where AI, automation, and technology can create the most value.",
  },
  {
    num: "02",
    title: "Audit",
    whatZhsDoes: "We assess your current systems, tools, data flows, and operational bottlenecks.",
    whatClientProvides: "Access to current tools, systems, and workflows.",
    whatClientReceives: "An honest assessment of what works, what doesn't, and what needs improvement.",
    outcome: "A clear picture of your current state and specific areas for improvement.",
  },
  {
    num: "03",
    title: "Strategize",
    whatZhsDoes: "We design the right solution architecture — whether that involves AI, automation, technology, creative, or a combination.",
    whatClientProvides: "Your priorities, budget constraints, and timeline preferences.",
    whatClientReceives: "A strategic roadmap with recommended solutions, phases, and milestones.",
    outcome: "A clear, practical plan that addresses your most critical business needs.",
  },
  {
    num: "04",
    title: "Build",
    whatZhsDoes: "We develop in rapid iterations — building, testing, and refining based on your feedback.",
    whatClientProvides: "Feedback, feedback, and more feedback.",
    whatClientReceives: "Working systems delivered in iterative cycles with continuous visibility.",
    outcome: "A solution that actually works in your business environment.",
  },
  {
    num: "05",
    title: "Launch",
    whatZhsDoes: "We deploy with monitoring, quality controls, and rollback strategies in place.",
    whatClientProvides: "Final approvals and access to stakeholders.",
    whatClientReceives: "A deployed, monitored, and stable production system.",
    outcome: "Your new system is live and operational — with minimal disruption.",
  },
  {
    num: "06",
    title: "Optimize",
    whatZhsDoes: "We continuously improve based on real-world data, user feedback, and changing business needs.",
    whatClientProvides: "Ongoing engagement and feedback.",
    whatClientReceives: "A system that gets better over time — not one that degrades.",
    outcome: "Sustained business improvement and measurable outcomes.",
  },
];

export default function Process() {
  return (
    <>
      <Seo
        title="Our Process | ZHS AI Agency"
        description="Discover how ZHS works — from discovery through optimization. A proven methodology refined across dozens of projects."
        path="/about-us/process"
      />

      <PageHero
        eyebrow="Our Process"
        heading="How We Work."
        subheading="A proven methodology refined across dozens of projects — designed to deliver results fast while building for the long term."
      />

      <SectionWrapper id="process" className="dark:bg-zhs-dark-2 bg-slate-50">
        <Container>
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 120} direction="left">
              <div
                className={`mb-16 ${i < steps.length - 1 ? "pb-16 border-b dark:border-zhs-border border-slate-200" : ""}`}
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zhs-accent/10 text-xl font-bold text-zhs-accent">
                      {step.num}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="dark:text-zhs-white text-slate-900 text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="dark:text-zhs-muted text-slate-500 text-sm leading-relaxed mb-6">
                      {step.whatZhsDoes}
                    </p>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="rounded-xl border dark:border-zhs-border dark:bg-zhs-dark-2/60 border-slate-200 bg-white p-5">
                        <h4 className="mb-2 text-sm font-semibold dark:text-zhs-accent-2 text-zhs-accent">
                          What ZHS Does
                        </h4>
                        <p className="dark:text-zhs-muted text-slate-500 text-sm leading-relaxed">
                          {step.whatZhsDoes}
                        </p>
                      </div>
                      <div className="rounded-xl border dark:border-zhs-border dark:bg-zhs-dark-2/60 border-slate-200 bg-white p-5">
                        <h4 className="mb-2 text-sm font-semibold dark:text-zhs-blue text-zhs-blue">
                          What the Client Provides
                        </h4>
                        <p className="dark:text-zhs-muted text-slate-500 text-sm leading-relaxed">
                          {step.whatClientProvides}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 rounded-xl border dark:border-zhs-border dark:bg-zhs-dark-2/60 border-slate-200 bg-white p-5">
                      <h4 className="mb-2 text-sm font-semibold dark:text-zhs-emerald text-zhs-emerald">
                        What the Client Receives
                      </h4>
                      <p className="dark:text-zhs-muted text-slate-500 text-sm leading-relaxed">
                        {step.whatClientReceives}
                      </p>
                    </div>

                    <div className="mt-4 rounded-xl border dark:border-zhs-border dark:bg-zhs-accent/5 border-zhs-accent/20 bg-zhs-accent/5 p-5">
                      <h4 className="mb-1 text-sm font-semibold dark:text-zhs-accent text-zhs-accent">
                        Outcome
                      </h4>
                      <p className="dark:text-zhs-muted text-slate-500 text-sm leading-relaxed">
                        {step.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </Container>
      </SectionWrapper>

      <CtaSection
        heading="Ready to Start Your Journey?"
        subheading="Let's discover where AI and automation can create the most value for your business."
        primaryLabel="Get Free AI Audit"
        primaryTo="/free-ai-audit"
      />
    </>
  );
}