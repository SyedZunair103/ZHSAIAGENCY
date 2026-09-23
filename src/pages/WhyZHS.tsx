import { Link } from "react-router-dom";
import { ArrowRight, Target, Cpu, Wrench, Navigation, Users, Rocket, Shield, TrendingUp, CheckCircle2 } from "lucide-react";
import ScrollReveal from "../components/animations/ScrollReveal";
import Container from "../components/ui/Container";
import { SectionWrapper } from "../components/ui/SectionHeading";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import CtaSection from "../components/ui/CtaSection";

const reasons = [
  {
    icon: Target,
    title: "Business-First Approach",
    desc: "We start by deeply understanding your business goals, workflows, bottlenecks, and growth opportunities — not by pitching technology.",
  },
  {
    icon: Cpu,
    title: "AI + Technology Expertise",
    desc: "Deep expertise spanning artificial intelligence, full-stack engineering, and modern architecture — we know what to build and how.",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    desc: "No off-the-shelf templates. Every solution is purpose-built around your exact needs, constraints, and competitive landscape.",
  },
  {
    icon: Navigation,
    title: "End-to-End Implementation",
    desc: "Strategy, design, development, deployment, and ongoing support — one team, one vision, zero gaps between disciplines.",
  },
  {
    icon: Users,
    title: "Human-in-the-Loop",
    desc: "AI handles scale and repetition; humans provide judgment, creativity, quality control, and ethical oversight.",
  },
  {
    icon: Rocket,
    title: "Scalable Systems",
    desc: "Architecture designed to grow with you — from MVP to millions of users, from prototype to production at scale.",
  },
  {
    icon: TrendingUp,
    title: "Outcome-Focused Thinking",
    desc: "We measure success by business outcomes — revenue, efficiency, growth — not just technical metrics or deliverables.",
  },
  {
    icon: Shield,
    title: "Practical Over Hype",
    desc: "We implement what works reliably in real business environments — not what sounds most impressive in a pitch.",
  },
];

export default function WhyZHS() {
  return (
    <>
      <Seo
        title="Why ZHS | ZHS AI Agency"
        description="A concise decision-support page for potential clients — why businesses choose ZHS AI Agency for AI, automation, technology, and growth solutions."
        path="/about-us/why-zhs"
      />

      <PageHero
        eyebrow="Why ZHS"
        heading="A Concise Decision-Support Page."
        subheading="Why businesses choose ZHS AI Agency — and why we might not be the right fit for everyone."
      />

      <SectionWrapper id="reasons" className="dark:bg-zhs-dark-2 bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <p className="section-label mb-4">Why Choose Us</p>
              <h2 className="section-heading">We're Built for Serious Businesses.</h2>
              <p className="section-subheading mx-auto mt-4 max-w-xl">
                If you want a partner that thinks business first, builds smart, and delivers outcomes — you've found the right team.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <ScrollReveal key={reason.title} delay={i * 80}>
                  <div className="card-premium group h-full p-8 transition-all duration-300 hover:-translate-y-1">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent transition-colors duration-300 group-hover:bg-zhs-accent/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="dark:text-zhs-white text-slate-900 text-lg font-bold mb-2">{reason.title}</h3>
                    <p className="dark:text-zhs-muted text-slate-500 text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </SectionWrapper>

      {/* What You Get */}
      <SectionWrapper id="what-you-get" className="dark:bg-zhs-black bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-4">What You Get</p>
              <h2 className="section-heading">More Than a Vendor. A Partner.</h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Deep Discovery", desc: "We invest time understanding your business before writing code." },
              { title: "Custom Architecture", desc: "Solutions built to scale, adapt, and evolve with your needs." },
              { title: "Transparent Process", desc: "Clear milestones, regular updates, and full visibility." },
              { title: "Ongoing Support", desc: "We don't disappear after launch — we optimize alongside you." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="card-premium text-center p-8">
                  <CheckCircle2 className="mx-auto h-10 w-10 text-zhs-accent mb-4" />
                  <h3 className="dark:text-zhs-white text-slate-900 font-bold mb-2">{item.title}</h3>
                  <p className="dark:text-zhs-muted text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Not for Everyone */}
      <SectionWrapper id="not-for-everyone" className="dark:bg-zhs-dark-2 bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="card-premium p-8 md:p-10 text-center">
              <p className="section-label mb-4">Important Note</p>
              <h2 className="section-heading mb-4">We Might Not Be the Right Fit.</h2>
              <p className="section-subheading mx-auto max-w-2xl">
                ZHS is designed for businesses that want serious, practical AI and technology solutions. If you're looking for a generic agency, a one-size-fits-all approach, or someone who doesn't care about business outcomes — we probably aren't the best match.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary">
                  Discuss Your Needs
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/about-us" className="btn-secondary">
                  Learn More About ZHS
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      <CtaSection
        heading="Ready to Find Out Where AI Can Improve Your Business?"
        subheading="Let's have an honest conversation about your challenges."
        primaryLabel="Get Free AI Audit"
        primaryTo="/free-ai-audit"
      />
    </>
  );
}