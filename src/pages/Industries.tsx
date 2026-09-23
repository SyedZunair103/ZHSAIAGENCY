import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/animations/ScrollReveal";
import Container from "../components/ui/Container";
import { SectionWrapper } from "../components/ui/SectionHeading";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import CtaSection from "../components/ui/CtaSection";
import { industriesData } from "../config/site";

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries | ZHS AI Agency"
        description="ZHS AI Agency delivers specialized AI, automation, and technology solutions across industries — e-commerce, SaaS, healthcare, finance, real estate, and more."
        path="/industries"
      />

      <PageHero
        eyebrow="Industries"
        heading="Built For Your Industry."
        subheading="Every business has unique challenges. We design AI-powered solutions tailored to the specific workflows, regulations, and goals of your industry."
      />

      <SectionWrapper id="industries" className="dark:bg-zhs-black bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-4">Who We Serve</p>
              <h2 className="section-heading">Deep Expertise Across Sectors.</h2>
              <p className="section-subheading mx-auto mt-4 max-w-2xl">
                We combine domain knowledge with technical capability to build solutions that actually work within your industry's constraints and opportunities.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industriesData.map((industry, i) => (
              <ScrollReveal key={industry.title} delay={i * 50}>
                <Link to={`/industries/${industry.slug}`} className="group block">
                  <div className="card-premium group h-full p-8 transition-all duration-300 hover:-translate-y-1">
                    <h3 className="dark:text-zhs-white text-slate-900 text-xl font-bold mb-3">{industry.title}</h3>
                    <p className="dark:text-zhs-muted text-slate-500 text-sm leading-relaxed mb-4">{industry.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {industry.services.slice(0, 3).map((service) => (
                        <span key={service} className="rounded-full bg-zhs-accent/10 px-2.5 py-1 text-[11px] font-semibold text-zhs-accent">
                          {service}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-zhs-accent transition-all duration-300 group-hover:gap-2">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper id="approach" className="dark:bg-zhs-dark bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-4">Our Approach</p>
              <h2 className="section-heading">Why Industry-Specific Solutions Matter.</h2>
              <p className="section-subheading mx-auto mt-4 max-w-2xl">
                Generic tools force you to adapt your business to the software. We build solutions that adapt to your business.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { num: "01", title: "Domain Discovery", desc: "We learn your industry's terminology, regulations, workflows, and pain points before writing a single line of code." },
              { num: "02", title: "Tailored Architecture", desc: "We design systems around your existing tools and processes — not the other way around — for seamless adoption." },
              { num: "03", title: "Iterative Refinement", desc: "We deploy, gather real-world feedback, and refine — ensuring the solution evolves with your business needs." },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 120}>
                <div className="card-premium h-full text-center p-8">
                  <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-zhs-accent/10 text-zhs-accent">
                    <span className="text-2xl font-bold">{step.num}</span>
                  </div>
                  <h3 className="text-lg font-bold dark:text-zhs-white text-slate-900">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed dark:text-zhs-muted text-slate-500">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <CtaSection
        heading="Ready to Solve Your Industry's Unique Challenges?"
        subheading="Tell us about your business. We'll show you how AI and automation can work within your industry's specific context."
        primaryLabel="Get Free AI Audit"
        primaryTo="/free-ai-audit"
      />
    </>
  );
}