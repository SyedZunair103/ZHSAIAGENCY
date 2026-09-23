import { Brain, Users, Lightbulb, Target, Settings, Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/animations/ScrollReveal";
import Container from "../components/ui/Container";
import { SectionWrapper } from "../components/ui/SectionHeading";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import CtaSection from "../components/ui/CtaSection";
import { industriesData } from "../config/site";
import { useCaseStudies } from "../hooks/useCaseStudies";

export default function AiFirstCompany() {
  const { data: caseStudies, isLoading: worksLoading } = useCaseStudies();
  const recentWorks = useMemo(
    () => caseStudies.filter((c) => c.is_published).slice(0, 3),
    [caseStudies]
  );

  return (
    <>
      <Seo
        title="AI-First Company | ZHS AI Agency"
        description="What does AI-first mean for ZHS? We identify where intelligence can genuinely improve business processes and build the right system around it."
        path="/about-us/ai-first-company"
      />

      <PageHero
        eyebrow="AI-First Company"
        heading="An AI-First Company Built Around Real Business Problems"
        subheading="AI-first doesn't mean putting AI everywhere. It means identifying where intelligence can genuinely improve a business process, decision, customer experience, or operation — and building the right system around it."
      />

      <SectionWrapper id="what-does-ai-first-mean" className="dark:bg-zhs-dark-2 bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-label mb-4">Core Principle</p>
              <h2 className="section-heading mb-6">Business Problem First. AI Second.</h2>
              <p className="section-subheading mx-auto">
                We don't start with "What AI can we add?" We start with "What business problem needs solving?" — then determine whether AI is the right answer, and if so, build the right system around it.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      {/* How ZHS Applies AI */}
      <SectionWrapper id="how-zhs-applies-ai" className="dark:bg-zhs-dark bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-4">How ZHS Applies AI</p>
              <h2 className="section-heading">The ZHS AI Lifecycle.</h2>
            </div>
          </ScrollReveal>
          <div className="mx-auto max-w-5xl">
            {[
              { label: "BUSINESS", desc: "Understand the business context, goals, and constraints." },
              { label: "DISCOVER", desc: "Deep dive into workflows, data, and processes." },
              { label: "IDENTIFY", desc: "Determine where AI can genuinely add value." },
              { label: "DESIGN", desc: "Architect the right AI-powered solution." },
              { label: "BUILD", desc: "Develop, integrate, and test the system." },
              { label: "DEPLOY", desc: "Launch with monitoring and quality controls." },
              { label: "OPTIMIZE", desc: "Continuously improve based on real-world performance." },
              { label: "GROW", desc: "Scale the solution across the business." },
            ].map((step, i) => (
              <ScrollReveal key={step.label} delay={i * 80} direction="left">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zhs-accent/10 text-xs font-bold text-zhs-accent">
                      {i + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="dark:text-zhs-white text-slate-900 font-bold">{step.label}</h3>
                    <p className="dark:text-zhs-muted text-slate-500 text-sm mt-1">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* AI-First Principles */}
      <SectionWrapper id="principles" className="dark:bg-zhs-black bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-4">Our AI-First Principles</p>
              <h2 className="section-heading">Principles That Guide Our AI Approach.</h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Target, title: "Business Before Technology", desc: "AI serves the business — not the other way around." },
              { icon: Users, title: "Human-Guided Automation", desc: "AI handles scale; humans provide judgment and oversight." },
              { icon: Settings, title: "Built for Real Workflows", desc: "Solutions designed to integrate into how work actually gets done." },
              { icon: Lightbulb, title: "Practical Over Hype", desc: "Focus on what works reliably, not what sounds impressive." },
              { icon: Rocket, title: "Designed to Scale", desc: "Architecture that grows with your business and data." },
              { icon: CheckCircle2, title: "Continuous Improvement", desc: "Systems that learn, adapt, and get better over time." },
            ].map((principle, i) => {
              const Icon = principle.icon;
              return (
                <ScrollReveal key={principle.title} delay={i * 80}>
                  <div className="card-premium group h-full p-8 transition-all duration-300 hover:-translate-y-1">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent transition-colors duration-300 group-hover:bg-zhs-accent/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="dark:text-zhs-white text-slate-900 text-lg font-bold mb-2">{principle.title}</h3>
                    <p className="dark:text-zhs-muted text-slate-500 text-sm leading-relaxed">{principle.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </SectionWrapper>

      {/* What We Build */}
      <SectionWrapper id="what-we-build" className="dark:bg-zhs-dark-2 bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-4">What We Build</p>
              <h2 className="section-heading">AI Systems That Drive Business Results.</h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "AI Lead Generation Systems", desc: "Intelligent systems that identify, qualify, and nurture high-value leads." },
              { title: "AI Sales Automation", desc: "Automated pipelines from lead scoring to proposal generation and follow-up." },
              { title: "AI Customer Support Automation", desc: "Intelligent support that resolves queries instantly and escalates with context." },
              { title: "AI Marketing Automation", desc: "Data-driven campaigns, personalization, and automated workflows." },
              { title: "Business Process Automation", desc: "End-to-end automation of repetitive business processes." },
              { title: "Local Business Growth Automation", desc: "Tools for local businesses to attract, engage, and retain customers." },
              { title: "WhatsApp & Chatbot Automation", desc: "Automated messaging flows for support, sales, and notifications." },
              { title: "Custom Chatbot Development", desc: "Tailored conversational AI built for your specific use cases." },
              { title: "AI Consulting & Strategy", desc: "Strategic guidance on where AI can create the most business value." },
              { title: "AI Agents", desc: "Autonomous agents that reason, decide, and act across your workflows." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 60}>
                <div className="card-premium group h-full p-6 transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent transition-colors duration-300 group-hover:bg-zhs-accent/20">
                    <Brain className="h-5 w-5" />
                  </div>
                  <h3 className="dark:text-zhs-white text-slate-900 font-bold mb-2">{item.title}</h3>
                  <p className="dark:text-zhs-muted text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* AI + Human Expertise */}
      <SectionWrapper id="human-expertise" className="dark:bg-zhs-black bg-white">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="section-label mb-4">AI + Human Expertise</p>
              <h2 className="section-heading">The Best Results Come From Both.</h2>
              <p className="section-subheading mx-auto mt-4 max-w-2xl">
                AI is powerful, but business understanding, implementation, and human oversight make AI useful. The combination of human creativity, judgment, and domain expertise with AI's speed, precision, and scale produces outcomes neither can achieve alone.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      {/* Industries */}
      <SectionWrapper id="industries" className="dark:bg-zhs-dark-2 bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="section-label mb-4">Industries</p>
              <h2 className="section-heading">AI-First Across Industries.</h2>
              <p className="section-subheading mx-auto mt-4 max-w-2xl">
                We apply the same business-first AI methodology across the sectors where intelligent systems create the most value.
              </p>
            </div>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3">
            {industriesData.map((ind) => (
              <Link
                key={ind.slug}
                to={`/industries/${ind.slug}`}
                className="rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 dark:border-zhs-border dark:text-zhs-muted dark:hover:text-zhs-white dark:hover:border-zhs-border-light border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zhs-accent"
              >
                {ind.title}
              </Link>
            ))}
          </div>
          <ScrollReveal delay={200}>
            <div className="mt-8 text-center">
              <Link to="/industries" className="btn-secondary">
                Explore All Industries
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      {/* Works / Results */}
      <SectionWrapper id="works" className="dark:bg-zhs-black bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="section-label mb-4">Works</p>
              <h2 className="section-heading">AI-First Thinking, Applied.</h2>
              <p className="section-subheading mx-auto mt-4 max-w-2xl">
                Real projects where intelligence was applied to a real business problem — not technology for its own sake.
              </p>
            </div>
          </ScrollReveal>

          {!worksLoading && recentWorks.length > 0 && (
            <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recentWorks.map((work, i) => (
                <ScrollReveal key={work.slug} delay={i * 80}>
                  <Link to={`/works/${work.slug}`} className="group block h-full">
                    <div className="card-premium h-full p-6 transition-all duration-300 group-hover:-translate-y-1">
                      <span className="rounded-full bg-zhs-accent/10 px-2.5 py-1 text-[11px] font-semibold text-zhs-accent">
                        {work.category}
                      </span>
                      <h3 className="mt-3 font-bold dark:text-zhs-white text-slate-900 group-hover:text-zhs-accent transition-colors">
                        {work.title}
                      </h3>
                      <p className="mt-2 dark:text-zhs-muted text-slate-500 text-sm leading-relaxed line-clamp-2">
                        {work.subtitle}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-zhs-accent transition-all duration-300 group-hover:gap-2">
                        View Work
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}

          <ScrollReveal delay={200}>
            <div className="text-center">
              <Link to="/works" className="btn-primary">
                View All Works
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      {/* CTA */}
      <CtaSection
        heading="Ready to Find Out Where AI Can Improve Your Business?"
        subheading="Let's discover where intelligence can genuinely help — not where it just sounds impressive."
        primaryLabel="Get Free AI Audit"
        primaryTo="/free-ai-audit"
      />
    </>
  );
}