import { ArrowRight, Code2, Palette, Box, TrendingUp, Target, Settings, Lightbulb, Users, Rocket, Handshake, Cpu, CheckCircle2, Shield } from "lucide-react";
import { useMemo } from "react";
import ScrollReveal from "../components/animations/ScrollReveal";
import Container from "../components/ui/Container";
import { SectionWrapper } from "../components/ui/SectionHeading";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import CtaSection from "../components/ui/CtaSection";
import { Link } from "react-router-dom";
import { useCaseStudies } from "../hooks/useCaseStudies";

const beliefs = [
  { icon: Target, title: "Business Before Technology", desc: "We start by understanding what business problem needs solving — then determine where AI fits." },
  { icon: Settings, title: "Systems Over Shortcuts", desc: "We build durable systems designed to scale, not quick fixes that break down under growth." },
  { icon: Users, title: "Human-Guided Automation", desc: "AI handles the repetitive work; humans provide the judgment, creativity, and oversight." },
  { icon: Rocket, title: "Built Around Your Business", desc: "Every solution is tailored to your workflows, constraints, and growth trajectory." },
  { icon: Shield, title: "Built to Scale", desc: "Architecture designed from day one to handle increasing volume, users, and complexity." },
  { icon: Lightbulb, title: "Practical Over Hype", desc: "We implement what works reliably — not what sounds impressive in a pitch deck." },
  { icon: CheckCircle2, title: "Continuous Improvement", desc: "Technology is never finished. We optimize, iterate, and evolve alongside your business." },
];

const pillars = [
  {
    title: "AI & Automation",
    desc: "Intelligent agents, chatbots, workflow automation, and AI systems that eliminate repetitive work.",
    sub: ["AI Agents", "Chatbots & Voice", "Workflow Automation"],
    icon: BotIcon,
    path: "/ai-automation",
  },
  {
    title: "Technology",
    desc: "Full-stack web development, mobile apps, custom software, and integrations built for scale.",
    sub: ["Web Development", "Mobile App Development", "Custom Software", "Integrations"],
    icon: Code2,
    path: "/technology",
  },
  {
    title: "Digital Growth",
    desc: "SEO, digital marketing, analytics, and growth strategies that drive measurable business outcomes.",
    sub: ["Digital Marketing", "SEO & Search Growth"],
    icon: TrendingUp,
    path: "/digital-growth",
  },
  {
    title: "Creative",
    desc: "Brand identity, graphic design, video content, and AI-powered creative campaigns.",
    sub: ["Branding & Design", "Video & Content", "AI Commercial Ads"],
    icon: Palette,
    path: "/creative",
  },
  {
    title: "3D Studio",
    desc: "3D design, modeling, visualization, and 3D printing from concept to physical prototype.",
    sub: ["3D Design & Modeling", "3D Printing & Prototyping"],
    icon: Box,
    path: "/3d-studio",
  },
];

function BotIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v2" /><path d="M9 21v2" />
      <path d="M20 9h2" /><path d="M4 9h2" />
      <path d="M15 1v2" /><path d="M15 21v2" />
      <path d="M20 15h2" /><path d="M4 15h2" />
    </svg>
  );
}

const industries = [
  { title: "SaaS & Technology", path: "/industries/saas" },
  { title: "Real Estate", path: "/industries/real-estate" },
  { title: "Healthcare & Clinics", path: "/industries/healthcare" },
  { title: "E-commerce & Retail", path: "/industries/ecommerce" },
  { title: "Finance", path: "/industries/finance" },
  { title: "Startups", path: "/industries/startups" },
];

export default function AboutZHS() {
  const { data: caseStudies, isLoading: worksLoading } = useCaseStudies();
  const recentWorks = useMemo(
    () => caseStudies.filter((c) => c.is_published).slice(0, 3),
    [caseStudies]
  );

  return (
    <>
      <Seo
        title="About ZHS AI Agency"
        description="We build AI-powered systems that help businesses work smarter, automate faster, and grow better. A business-focused AI, technology, creative, growth and automation agency."
        path="/about-us"
      />

      <PageHero
        eyebrow="About ZHS"
        heading="We Build AI-Powered Systems That Help Businesses Work Smarter, Automate Faster, and Grow Better."
        subheading="ZHS AI Agency is a business-focused agency that starts by understanding your challenges, then determines where AI, automation, technology, mobile apps, web development, creative, or growth solutions can create practical value."
      />

      {/* Who We Are */}
      <SectionWrapper id="who" className="dark:bg-zhs-dark-2 bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="section-label mb-4">Who We Are</p>
              <h2 className="section-heading">A Business-Focused AI, Technology, Creative, Growth and Automation Agency.</h2>
              <p className="section-subheading mx-auto mt-4 max-w-3xl">
                We are not just an AI tools company. We start by understanding your business goals, workflows, bottlenecks, customer journeys, repetitive work, and growth opportunities. Then we determine where AI, automation, technology, mobile apps, web development, or creative solutions can create practical value.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      {/* What We Believe */}
      <SectionWrapper id="beliefs" className="dark:bg-zhs-black bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-4">What We Believe</p>
              <h2 className="section-heading">Principles That Guide Everything We Build.</h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {beliefs.map((belief, i) => {
              const Icon = belief.icon;
              return (
                <ScrollReveal key={belief.title} delay={i * 80}>
                  <div className="card-premium group h-full p-8 transition-all duration-300 hover:-translate-y-1">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent transition-colors duration-300 group-hover:bg-zhs-accent/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="dark:text-zhs-white text-slate-900 text-lg font-bold mb-2">{belief.title}</h3>
                    <p className="dark:text-zhs-muted text-slate-500 text-sm leading-relaxed">{belief.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </SectionWrapper>

      {/* Why ZHS */}
      <SectionWrapper id="why" className="dark:bg-zhs-dark bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-4">Why ZHS</p>
              <h2 className="section-heading">Why Businesses Choose Us.</h2>
              <p className="section-subheading mx-auto mt-4 max-w-2xl">
                We're not the right fit for everyone. But for businesses that want to move fast, build smart, and grow with intelligent systems — we're exactly what they need.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Target, title: "Business-First Thinking", desc: "Every project starts with the business problem, not the technology." },
              { icon: Cpu, title: "AI + Technology Expertise", desc: "Deep expertise in artificial intelligence, full-stack engineering, and modern architecture." },
              { icon: ArrowRight, title: "End-to-End Implementation", desc: "Strategy, design, development, deployment, and ongoing support — one team, zero gaps." },
              { icon: Settings, title: "Custom Solutions", desc: "No off-the-shelf templates. Every solution is built around your exact needs." },
              { icon: Users, title: "Practical Automation", desc: "Automation that actually works in your workflows — not theoretical exercises." },
              { icon: Shield, title: "Human Oversight", desc: "AI handles scale; humans provide judgment, quality control, and ethical guidance." },
              { icon: Rocket, title: "Scalable Systems", desc: "Architecture designed to grow with you — from MVP to millions of users." },
              { icon: TrendingUp, title: "Outcome-Focused Delivery", desc: "We measure success by business outcomes — revenue, efficiency, growth." },
              { icon: Handshake, title: "Long-Term Partnership", desc: "We become an extension of your team — adapting, optimizing, building alongside you." },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={card.title} delay={i * 80}>
                  <div className="card-premium group h-full p-8 transition-all duration-300 hover:-translate-y-1">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent transition-colors duration-300 group-hover:bg-zhs-accent/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="dark:text-zhs-white text-slate-900 text-lg font-bold mb-2">{card.title}</h3>
                    <p className="dark:text-zhs-muted text-slate-500 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </SectionWrapper>

      {/* What We Do */}
      <SectionWrapper id="what-we-do" className="dark:bg-zhs-black bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-4">What We Do</p>
              <h2 className="section-heading">Five Major Pillars.</h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={pillar.title} delay={i * 80}>
                  <div className="card-premium group h-full text-center p-8 transition-all duration-300 hover:-translate-y-1">
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-zhs-accent/10 text-zhs-accent transition-colors duration-300 group-hover:bg-zhs-accent/20">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="dark:text-zhs-white text-slate-900 text-sm font-bold mb-2">{pillar.title}</h3>
                    <p className="dark:text-zhs-muted text-slate-500 text-xs leading-relaxed">{pillar.desc}</p>
                    <ul className="mt-4 space-y-1.5">
                      {pillar.sub.map((s) => (
                        <li key={s}>
                          <span className="block text-xs dark:text-zhs-muted/80 text-slate-500">{s}</span>
                        </li>
                      ))}
                    </ul>
                    {pillar.path && (
                      <Link
                        to={pillar.path}
                        className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-zhs-accent hover:underline"
                      >
                        Explore
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </SectionWrapper>

      {/* How We Work */}
      <SectionWrapper id="how" className="dark:bg-zhs-dark-2 bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-4">How We Work</p>
              <h2 className="section-heading">A Proven Methodology.</h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { num: "01", title: "Discover", desc: "Understand goals, challenges, and opportunities." },
              { num: "02", title: "Audit", desc: "Assess current systems, workflows, and bottlenecks." },
              { num: "03", title: "Strategize", desc: "Design the right AI and technology solution." },
              { num: "04", title: "Build", desc: "Develop and iterate with continuous feedback." },
              { num: "05", title: "Launch", desc: "Deploy, monitor, and ensure smooth operations." },
              { num: "06", title: "Optimize", desc: "Continuously improve based on real-world data." },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 80} direction="up">
                <div className="card-premium text-center p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zhs-accent/10 text-lg font-bold text-zhs-accent">
                    {step.num}
                  </span>
                  <h3 className="mt-4 font-bold dark:text-zhs-white text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-xs dark:text-zhs-muted text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* ZHS Difference */}
      <SectionWrapper id="difference" className="dark:bg-zhs-dark bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="card-premium relative overflow-hidden p-8 md:p-12 text-center">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-zhs-accent/5 blur-[100px]" />
              <div className="relative">
                <p className="section-label mb-4">The ZHS Difference</p>
                <h2 className="section-heading mb-6">We Don't Start With "What AI Tool Should We Use?"</h2>
                <p className="section-subheading mx-auto max-w-3xl">
                  We start with "What business problem are we solving?" — then determine the right approach, whether that involves AI, automation, technology, creative, or a combination.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link to="/free-ai-audit" className="btn-primary">
                    Get Free AI Audit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      {/* Industries */}
      <SectionWrapper id="industries" className="dark:bg-zhs-black bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-4">Industries</p>
              <h2 className="section-heading">We Serve Businesses Across Industries.</h2>
            </div>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <Link
                key={ind.title}
                to={ind.path}
                className="rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 dark:border-zhs-border dark:text-zhs-muted dark:hover:text-zhs-white dark:hover:border-zhs-border-light border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
              >
                {ind.title}
              </Link>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Results / Works */}
      <SectionWrapper id="results" className="dark:bg-zhs-dark-2 bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="section-label mb-4">Results</p>
              <h2 className="section-heading">Work That Solves Real Business Problems.</h2>
              <p className="section-subheading mx-auto mt-4 max-w-2xl">
                Explore selected projects across AI automation, technology, mobile apps, web development, and creative work.
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

      {/* Final CTA */}
      <CtaSection
        heading="Ready to Find Out Where AI Can Improve Your Business?"
        subheading="We start by understanding your challenges — then we determine the right approach to create practical value."
        primaryLabel="Get Free AI Audit"
        primaryTo="/free-ai-audit"
      />
    </>
  );
}