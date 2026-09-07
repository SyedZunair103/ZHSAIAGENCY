import {
  Brain,
  Code2,
  Palette,
  Box,
  TrendingUp,
  Settings,
  Lightbulb,
  Target,
  Users,
  Rocket,
  Handshake,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "../components/animations/ScrollReveal";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import PageHero from "../components/ui/PageHero";
import CtaSection from "../components/ui/CtaSection";
import Seo from "../components/ui/Seo";

const capabilities = [
  {
    icon: Brain,
    title: "AI Agents",
    description:
      "Autonomous agents that reason, decide, and act across your business workflows — from customer support to operations.",
  },
  {
    icon: Settings,
    title: "AI Automation",
    description:
      "End-to-end intelligent automation that connects your tools, eliminates repetitive tasks, and scales without limits.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom software, web applications, mobile apps, and SaaS platforms built for performance, scale, and reliability.",
  },
  {
    icon: Palette,
    title: "Creative & Branding",
    description:
      "Brand identity, UI/UX design, creative direction, and visual storytelling that stands out in crowded markets.",
  },
  {
    icon: Box,
    title: "3D Design & Printing",
    description:
      "Immersive 3D visualization, product renders, interactive experiences, and physical prototypes from digital models.",
  },
  {
    icon: TrendingUp,
    title: "Digital Growth",
    description:
      "Data-driven SEO, digital marketing, and growth strategies that generate measurable business outcomes.",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, your challenges, and your goals. No templates — every project begins with deep listening.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We architect the solution — mapping workflows, selecting technologies, and designing systems that fit your exact needs.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop in rapid iterations, keeping you in the loop. Every sprint delivers something working, testable, and valuable.",
  },
  {
    number: "04",
    title: "Launch & Evolve",
    description:
      "We deploy, monitor, optimize, and evolve. Technology is never finished — we make sure it keeps getting better.",
  },
];

const whyZhsCards = [
  {
    icon: Brain,
    title: "AI-First",
    description:
      "Every solution we build starts with AI at its core. We don't bolt on intelligence as an afterthought — we architect for it from day one.",
  },
  {
    icon: Layers,
    title: "End-to-End",
    description:
      "Strategy, design, development, deployment, and ongoing support. One team, one vision, zero gaps between disciplines.",
  },
  {
    icon: Target,
    title: "Business-Driven",
    description:
      "We measure success by business outcomes — revenue, efficiency, growth — not just technical metrics. Every line of code serves a purpose.",
  },
  {
    icon: Rocket,
    title: "Scalable",
    description:
      "We build systems that grow with you. From MVP to millions of users, our architecture is designed for where you're going.",
  },
  {
    icon: Users,
    title: "Human + AI",
    description:
      "We believe the best results come from combining human creativity and judgment with AI speed and precision. Neither alone is enough.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We don't disappear after launch. We become an extension of your team — adapting, optimizing, and building alongside you.",
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About | ZHS AI Agency"
        description="Learn about ZHS AI Agency — a multidisciplinary AI agency building intelligent systems, automation, software, creative experiences, and growth solutions for modern businesses."
        path="/about"
      />

      <PageHero
        eyebrow="About"
        heading="We Build What Comes Next."
        subheading="We combine AI, automation, software, creative, 3D, and growth into one cohesive agency — so ambitious businesses can move fast, build smart, and scale without limits."
      />

      {/* Who We Are */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b dark:from-zhs-dark dark:via-zhs-dark-2 dark:to-zhs-black from-slate-50 via-white to-slate-50" />
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-zhs-accent/5 blur-[120px]" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Who We Are"
                heading="A Multidisciplinary AI Agency Built for the Modern Era."
                subheading="ZHS AI Agency was founded on a single belief: the future belongs to businesses that can seamlessly blend artificial intelligence with human expertise, creative design, and strategic thinking."
              />
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="mt-14 space-y-6 text-center">
                <p className="dark:text-zhs-muted text-slate-500 text-lg leading-relaxed">
                  We're not just a dev shop, a design studio, or an AI consultancy. We're all of these things —
                  unified under one roof and aligned around a single mission: building intelligent systems
                  that make businesses fundamentally better.
                </p>
                <p className="dark:text-zhs-muted text-slate-500 text-lg leading-relaxed">
                  Our team spans AI engineering, full-stack development, brand strategy, 3D design, and
                  digital marketing. This isn't a collection of specialists working in silos — it's a
                  tightly integrated team where every discipline informs and amplifies the others.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* What We Build */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b dark:from-zhs-black dark:via-zhs-dark dark:to-zhs-dark-2 from-white via-slate-50 to-white" />
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-zhs-accent/30 to-transparent" />

        <Container className="relative z-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What We Build"
              heading="Six Capabilities. One Vision."
              subheading="Everything we offer is connected. AI powers our automation. Automation amplifies our software. Software enables our creative. Creative drives growth."
            />
          </ScrollReveal>

          <div className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <ScrollReveal key={cap.title} delay={i * 80}>
                  <div className="card-premium group h-full p-8 transition-all duration-300 hover:-translate-y-1">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent transition-colors duration-300 group-hover:bg-zhs-accent/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="dark:text-zhs-white text-slate-900 text-lg font-bold">
                      {cap.title}
                    </h3>
                    <p className="dark:text-zhs-muted text-slate-500 mt-3 text-sm leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b dark:from-zhs-dark-2 dark:via-zhs-dark dark:to-zhs-dark-2 from-slate-50 via-white to-slate-50" />

        <Container className="relative z-10">
          <div className="mx-auto grid gap-8 md:grid-cols-2">
            <ScrollReveal>
              <div className="card-premium h-full p-10 text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-zhs-accent/10 text-zhs-accent">
                  <Target className="h-7 w-7" />
                </div>
                <p className="section-label mb-4">Our Mission</p>
                <h2 className="dark:text-zhs-white text-slate-900 text-2xl font-bold sm:text-3xl">
                  Make advanced technology practical, useful and accessible to businesses ready to grow.
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="card-premium h-full p-10 text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-zhs-cyan/10 text-zhs-cyan">
                  <Lightbulb className="h-7 w-7" />
                </div>
                <p className="section-label mb-4">Our Vision</p>
                <h2 className="dark:text-zhs-white text-slate-900 text-2xl font-bold sm:text-3xl">
                  A world where every ambitious business can operate with intelligent systems.
                </h2>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Our Approach */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b dark:from-zhs-dark dark:via-zhs-dark-2 dark:to-zhs-black from-white via-slate-50 to-white" />

        <Container className="relative z-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Approach"
              heading="How We Work."
              subheading="A proven methodology refined across dozens of projects — designed to deliver results fast while building for the long term."
            />
          </ScrollReveal>

          <div className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 100}>
                <div className="card-premium group h-full p-8 transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-4 text-4xl font-bold dark:text-zhs-accent/20 text-zhs-accent/30">
                    {step.number}
                  </div>
                  <h3 className="dark:text-zhs-white text-slate-900 text-lg font-bold">
                    {step.title}
                  </h3>
                  <p className="dark:text-zhs-muted text-slate-500 mt-3 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* AI + Human Expertise */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b dark:from-zhs-black dark:via-zhs-dark dark:to-zhs-dark-2 from-slate-50 via-white to-slate-50" />
        <div className="absolute left-1/3 bottom-1/4 h-72 w-72 rounded-full bg-zhs-cyan/5 blur-[120px]" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <SectionHeading
                eyebrow="AI + Human Expertise"
                heading="The Best Results Come From Both."
                subheading="We don't see AI as a replacement for human talent — we see it as a multiplier. The combination of human creativity, judgment, and domain expertise with AI's speed, precision, and scale produces outcomes neither can achieve alone."
              />
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="mt-14 grid gap-6 sm:grid-cols-2">
                {[
                  {
                    icon: Cpu,
                    title: "What AI Does Best",
                    points: [
                      "Process vast amounts of data instantly",
                      "Identify patterns humans miss",
                      "Work 24/7 without fatigue",
                      "Scale to any volume instantly",
                      "Eliminate repetitive work",
                    ],
                  },
                  {
                    icon: Users,
                    title: "What Humans Do Best",
                    points: [
                      "Creative strategy and vision",
                      "Emotional intelligence and empathy",
                      "Complex judgment calls",
                      "Domain expertise and context",
                      "Building trust and relationships",
                    ],
                  },
                ].map((column) => {
                  const Icon = column.icon;
                  return (
                    <div
                      key={column.title}
                      className="card-premium p-8"
                    >
                      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="dark:text-zhs-white text-slate-900 text-lg font-bold mb-4">
                        {column.title}
                      </h3>
                      <ul className="space-y-3">
                        {column.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-zhs-accent" />
                            <span className="dark:text-zhs-muted text-slate-500 text-sm">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Why ZHS */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b dark:from-zhs-dark-2 dark:via-zhs-dark dark:to-zhs-dark-2 from-white via-slate-50 to-white" />

        <Container className="relative z-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why ZHS"
              heading="Why Businesses Choose Us."
              subheading="We're not the right fit for everyone. But for businesses that want to move fast, build smart, and grow with intelligent systems — we're exactly what they need."
            />
          </ScrollReveal>

          <div className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyZhsCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={card.title} delay={i * 80}>
                  <div className="card-premium group h-full p-8 transition-all duration-300 hover:-translate-y-1">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent transition-colors duration-300 group-hover:bg-zhs-accent/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="dark:text-zhs-white text-slate-900 text-lg font-bold">
                      {card.title}
                    </h3>
                    <p className="dark:text-zhs-muted text-slate-500 mt-3 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaSection
        heading="Ready to Build With Us?"
        subheading="Whether you need a single AI agent, a full-stack platform, or a complete brand transformation — we're ready when you are."
      />
    </>
  );
}

function Layers(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}
