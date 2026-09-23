import { Globe, Cloud, Smartphone, Settings, Database, LayoutDashboard, ShoppingCart, Workflow, Plug, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/animations/ScrollReveal";
import { SectionWrapper } from "../components/ui/SectionHeading";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import CtaSection from "../components/ui/CtaSection";

interface TechService {
  icon: typeof Globe;
  title: string;
  desc: string;
  path?: string;
}

const services: TechService[] = [
  { icon: Globe, title: "Web Development", desc: "High-performance websites built with modern frameworks, optimized for speed and conversion." },
  { icon: LayoutDashboard, title: "Web Apps", desc: "Interactive single-page applications with real-time capabilities and rich user experiences." },
  { icon: Cloud, title: "SaaS Development", desc: "End-to-end SaaS platforms with billing, multi-tenancy, analytics, and scaling infrastructure." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Business, customer-facing, and AI-powered mobile applications for iOS and Android — built cross-platform.", path: "/services/mobile-app-development" },
  { icon: Settings, title: "Custom Software", desc: "Purpose-built software solutions tailored to your unique business operations and workflows." },
  { icon: Plug, title: "APIs", desc: "RESTful and GraphQL APIs built for reliability, documentation, and third-party integration." },
  { icon: Database, title: "Backend Systems", desc: "Scalable server architectures handling millions of requests with fault-tolerant design." },
  { icon: Database, title: "Databases", desc: "Data modeling, migration strategy, and optimization across SQL, NoSQL, and vector stores." },
  { icon: LayoutDashboard, title: "Dashboards", desc: "Real-time analytics dashboards with actionable insights and interactive data visualizations." },
  { icon: ShoppingCart, title: "E-commerce", desc: "Full-stack e-commerce solutions with inventory, payments, and fulfillment integrations." },
  { icon: Cloud, title: "Cloud", desc: "Cloud-native infrastructure on AWS, GCP, and Azure with CI/CD and auto-scaling." },
  { icon: Workflow, title: "Integrations", desc: "Seamless system integrations connecting your tools, data, and processes into one flow." },
];

const stackLayers = [
  { label: "Frontend", color: "bg-zhs-accent", desc: "React, Next.js, TypeScript, Tailwind CSS" },
  { label: "Backend", color: "bg-zhs-cyan", desc: "Node.js, Python, Go, microservices" },
  { label: "Database", color: "bg-zhs-emerald", desc: "PostgreSQL, MongoDB, Redis, vector DBs" },
  { label: "APIs", color: "bg-zhs-violet", desc: "REST, GraphQL, webhooks, gRPC" },
  { label: "AI Layer", color: "bg-zhs-amber", desc: "LLMs, RAG pipelines, embeddings, fine-tuning" },
  { label: "Automation", color: "bg-zhs-rose", desc: "Workflows, triggers, event-driven orchestration" },
  { label: "Cloud & Deploy", color: "bg-zhs-blue", desc: "AWS, GCP, Docker, Kubernetes, CI/CD" },
];

const processSteps = [
  { num: "01", title: "Discover", desc: "Deep-dive into your business goals, user needs, and technical landscape to define the right solution." },
  { num: "02", title: "Architect", desc: "Design system architecture, data models, and technology stack for scalability and performance." },
  { num: "03", title: "Build", desc: "Iterative development with clean code practices, code reviews, and continuous integration." },
  { num: "04", title: "Test", desc: "Comprehensive testing across unit, integration, performance, and security layers." },
  { num: "05", title: "Launch", desc: "Production deployment with monitoring, alerting, rollback strategies, and performance baselines." },
  { num: "06", title: "Improve", desc: "Ongoing optimization driven by real user data, feedback loops, and performance metrics." },
];

export default function Technology() {
  return (
    <>
      <Seo
        title="Technology | ZHS AI Agency"
        description="Full-stack engineering services from ZHS AI Agency — web development, SaaS, mobile apps, APIs, databases, cloud infrastructure, and AI-powered software."
        path="/technology"
      />

      <PageHero
        eyebrow="Technology"
        heading="Technology Designed Around Your Business."
        subheading="We architect and engineer full-stack digital products — from high-performance web platforms to intelligent backend systems — engineered for scale, speed, and real-world impact."
      />

      {/* Services Grid */}
      <SectionWrapper id="services" className="dark:bg-zhs-black bg-white">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-4">What We Build</p>
            <h2 className="section-heading">Full-Stack Engineering, One Team.</h2>
            <p className="section-subheading mx-auto mt-4 max-w-2xl">
              From concept to production — we design, build, and deploy the technology that powers modern businesses.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => {
            const card = (
              <div className="card-premium group h-full">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent transition-colors duration-300 group-hover:bg-zhs-accent/20 group-hover:scale-110">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold dark:text-zhs-white text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed dark:text-zhs-muted text-slate-500">{s.desc}</p>
                {s.path && (
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-zhs-accent transition-all duration-300 group-hover:gap-2">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </div>
            );
            return (
              <ScrollReveal key={s.title} delay={i * 50}>
                {s.path ? (
                  <Link to={s.path} className="block h-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zhs-accent">
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Architecture Visualization */}
      <SectionWrapper id="architecture" className="dark:bg-zhs-dark bg-slate-50">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-4">Architecture</p>
            <h2 className="section-heading">Layered for Performance. Built for Scale.</h2>
            <p className="section-subheading mx-auto mt-4 max-w-2xl">
              Every system we build follows a deliberate architecture — each layer purpose-built, loosely coupled, and ready to evolve.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-2xl">
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-zhs-accent/40 via-zhs-cyan/30 to-zhs-emerald/20" />

            <div className="space-y-3">
              {stackLayers.map((layer, i) => (
                <ScrollReveal key={layer.label} delay={i * 80} direction="left">
                  <div className="group relative flex items-center gap-5">
                    {/* Indicator dot */}
                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                      <div className={`h-3.5 w-3.5 rounded-full ${layer.color} shadow-lg transition-transform duration-300 group-hover:scale-125`} />
                    </div>

                    {/* Layer card */}
                    <div className="flex-1 rounded-xl border py-4 px-5 transition-all duration-300 dark:border-zhs-border dark:bg-zhs-dark-2/80 border-slate-200 bg-white hover:dark:border-zhs-border-light hover:dark:bg-zhs-dark-3/60 hover:border-indigo-200 hover:bg-slate-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold dark:text-zhs-white text-slate-900">{layer.label}</h4>
                          <p className="mt-0.5 text-xs dark:text-zhs-muted text-slate-500">{layer.desc}</p>
                        </div>
                        <div className={`h-8 w-1 rounded-full ${layer.color} opacity-40 transition-opacity duration-300 group-hover:opacity-80`} />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Development Process */}
      <SectionWrapper id="process" className="dark:bg-zhs-black bg-white">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-4">Our Process</p>
            <h2 className="section-heading">From Idea to Production. Systematically.</h2>
            <p className="section-subheading mx-auto mt-4 max-w-2xl">
              A battle-tested development process refined over hundreds of projects — designed to reduce risk and accelerate delivery.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 80}>
              <div className="card-premium group relative overflow-hidden h-full">
                {/* Step number watermark */}
                <div className="absolute -right-4 -top-4 text-[7rem] font-bold leading-none dark:text-white/[0.02] text-slate-900/[0.03] transition-transform duration-500 group-hover:scale-110 select-none">
                  {step.num}
                </div>
                <div className="relative">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-zhs-accent/10 text-xs font-bold text-zhs-accent-2">
                    {step.num}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold dark:text-zhs-white text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed dark:text-zhs-muted text-slate-500">{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tech badges */}
        <ScrollReveal delay={200}>
          <div className="mt-20 text-center">
            <p className="text-sm font-medium dark:text-zhs-muted text-slate-500 mb-6">Technologies We Work With</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["React", "Next.js", "TypeScript", "Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS", "GCP", "GraphQL", "Tailwind CSS", "Prisma", "Supabase", "Vercel"].map((tech) => (
                <span key={tech} className="rounded-full border px-4 py-1.5 text-xs font-medium dark:border-zhs-border dark:text-zhs-muted dark:bg-zhs-dark-2/50 border-slate-200 text-slate-500 bg-white">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <CtaSection
        heading="Let's Build Something Exceptional."
        subheading="Whether you need a complete SaaS platform, a high-performance web app, or backend systems that scale — we're ready to engineer your next breakthrough."
        primaryLabel="Get Free AI Audit"
        primaryTo="/free-ai-audit"
      />
    </>
  );
}
