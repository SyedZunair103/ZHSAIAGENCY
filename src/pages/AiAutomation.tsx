import { Link } from "react-router-dom";
import {
  Bot,
  MessageSquare,
  Mic,
  Users,
  Headphones,
  BarChart3,
  UserCheck,
  Workflow,
  MessageCircle,
  Database,
  BookOpen,
  FileSearch,
  Cpu,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Target,
  CheckCircle2,
  Sparkles,
  Brain,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import ScrollReveal from "../components/animations/ScrollReveal";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import PageHero from "../components/ui/PageHero";
import CtaSection from "../components/ui/CtaSection";
import Seo from "../components/ui/Seo";

const services = [
  { icon: Bot, title: "AI Agents", description: "Autonomous agents that reason, decide, and act across your business workflows." },
  { icon: MessageSquare, title: "AI Chatbots", description: "Intelligent conversational agents that handle inquiries 24/7 with human-like responses." },
  { icon: Mic, title: "Voice AI", description: "Natural voice interfaces for phone systems, IVR, and hands-free interactions." },
  { icon: Users, title: "AI Assistants", description: "Personal AI copilots that help your team work faster and make better decisions." },
  { icon: Headphones, title: "Customer Support AI", description: "Resolve tickets instantly with AI that understands context and escalates when needed." },
  { icon: BarChart3, title: "Sales AI", description: "AI-powered sales tools that qualify leads, draft outreach, and predict revenue." },
  { icon: UserCheck, title: "Lead Qualification", description: "Automatically score and route leads based on intent, fit, and engagement signals." },
  { icon: Workflow, title: "Workflow Automation", description: "End-to-end automation that connects your tools and eliminates repetitive tasks." },
  { icon: MessageCircle, title: "WhatsApp Automation", description: "Automated WhatsApp flows for support, sales, notifications, and customer engagement." },
  { icon: Database, title: "CRM Automation", description: "Keep your CRM clean and current with automated data entry and pipeline management." },
  { icon: BookOpen, title: "AI Knowledge Bases", description: "Self-updating knowledge systems that surface the right information at the right time." },
  { icon: FileSearch, title: "RAG Systems", description: "Retrieval-augmented generation that grounds AI responses in your proprietary data." },
  { icon: Cpu, title: "LLM Integrations", description: "Seamlessly integrate OpenAI, Claude, Gemini, and other LLMs into your products." },
];

const agents = [
  {
    title: "Customer Support Agent",
    description: "Handles inbound queries across channels, resolves issues autonomously, and escalates complex cases with full context to human agents.",
    capabilities: ["Multi-channel support", "Sentiment analysis", "Smart escalation", "24/7 availability"],
    color: "border-zhs-blue/30",
    dotColor: "bg-zhs-blue",
  },
  {
    title: "Sales Agent",
    description: "Engages prospects, qualifies leads through conversation, books meetings, and follows up with personalized sequences — all without human intervention.",
    capabilities: ["Lead qualification", "Meeting scheduling", "Pipeline updates", "Follow-up sequences"],
    color: "border-zhs-emerald/30",
    dotColor: "bg-zhs-emerald",
  },
  {
    title: "Voice Agent",
    description: "Handles inbound and outbound phone calls with natural speech, processes voice commands, and integrates with your telephony stack.",
    capabilities: ["Natural conversation", "Call routing", "Voice commands", "Transcription"],
    color: "border-zhs-violet/30",
    dotColor: "bg-zhs-violet",
  },
  {
    title: "Research Agent",
    description: "Gathers, synthesizes, and summarizes information from multiple sources — reports, databases, APIs — to deliver actionable insights.",
    capabilities: ["Data synthesis", "Report generation", "Source verification", "Trend analysis"],
    color: "border-zhs-amber/30",
    dotColor: "bg-zhs-amber",
  },
  {
    title: "Operations Agent",
    description: "Monitors systems, manages inventory, processes orders, and coordinates logistics across your operational infrastructure.",
    capabilities: ["System monitoring", "Process optimization", "Inventory management", "Alert handling"],
    color: "border-zhs-rose/30",
    dotColor: "bg-zhs-rose",
  },
  {
    title: "Knowledge Agent",
    description: "Maintains your internal knowledge base, answers team questions, and ensures documentation stays current and accurate.",
    capabilities: ["Documentation QA", "Internal search", "Onboarding support", "Knowledge updates"],
    color: "border-zhs-cyan/30",
    dotColor: "bg-zhs-cyan",
  },
];

const workflowSteps = [
  { icon: Target, label: "Customer Input", detail: "Inquiry, form, call, or event" },
  { icon: Brain, label: "AI Processing", detail: "NLP, context, and reasoning" },
  { icon: Lightbulb, label: "Decision", detail: "Classification and routing" },
  { icon: Zap, label: "Automation", detail: "Trigger actions and workflows" },
  { icon: TrendingUp, label: "Business Action", detail: "CRM update, email, assignment" },
  { icon: CheckCircle2, label: "Result", detail: "Measured outcome and logging" },
];

const useCases = [
  {
    title: "E-Commerce Support",
    description: "Automate 80% of customer inquiries, process returns instantly, and recommend products — all through AI agents.",
    metric: "80% auto-resolution",
  },
  {
    title: "SaaS Onboarding",
    description: "Guide new users through setup with an AI assistant that answers questions, configures accounts, and reduces churn.",
    metric: "3x faster onboarding",
  },
  {
    title: "Real Estate Lead Flow",
    description: "Qualify inbound leads 24/7, match properties to preferences, and book viewings without manual follow-up.",
    metric: "5x more qualified leads",
  },
  {
    title: "Healthcare Triage",
    description: "Pre-screen patients with AI symptom assessment, route to the right department, and reduce wait times dramatically.",
    metric: "60% reduced wait time",
  },
  {
    title: "Financial Services",
    description: "Automate compliance checks, client reporting, and account queries with AI that understands financial context.",
    metric: "70% time savings",
  },
  {
    title: "Education & Training",
    description: "Deploy AI tutors that adapt to each learner's pace, answer questions from course materials, and track progress.",
    metric: "2x knowledge retention",
  },
];

export default function AiAutomation() {
  return (
    <>
      <Seo
        title="AI & Automation | ZHS AI Agency"
        description="Build intelligent AI agents, chatbots, voice systems, and workflow automation that transform how your business operates. From concept to production."
        path="/ai-automation"
      />

      <PageHero
        eyebrow="AI & Automation"
        heading="Intelligence That Works For Your Business."
        subheading="We don't just implement AI — we build practical, production-grade intelligent systems that solve real business problems and scale with your growth."
      />

      {/* Services Grid */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b dark:from-zhs-dark dark:via-zhs-dark-2 dark:to-zhs-black from-slate-50 via-white to-slate-50" />
        <div className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-zhs-accent/5 blur-[120px]" />
        <div className="absolute right-1/3 bottom-1/4 h-60 w-60 rounded-full bg-zhs-cyan/5 blur-[100px]" />

        <Container className="relative z-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Capabilities"
              heading="The Full Spectrum of AI & Automation."
              subheading="From conversational AI to complex workflow orchestration, we cover every layer of intelligent automation."
            />
          </ScrollReveal>

          <div className="mx-auto mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.title} delay={i * 40}>
                  <div className="card-premium group flex items-start gap-4 p-6 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent transition-colors duration-300 group-hover:bg-zhs-accent/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="dark:text-zhs-white text-slate-900 text-sm font-bold">{service.title}</h3>
                      <p className="dark:text-zhs-muted text-slate-500 mt-1 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Agent Showcase */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b dark:from-zhs-black dark:via-zhs-dark dark:to-zhs-dark-2 from-white via-slate-50 to-white" />
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-zhs-accent/30 to-transparent" />

        <Container className="relative z-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="AI Agents"
              heading="Purpose-Built Agents for Every Function."
              subheading="Each agent is designed for a specific business domain, trained on your data, and integrated with your existing tools."
            />
          </ScrollReveal>

          <div className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent, i) => (
              <ScrollReveal key={agent.title} delay={i * 80}>
                <div className={`card-premium group h-full p-8 transition-all duration-300 hover:-translate-y-1 dark:border ${agent.color}`}>
                  <div className="mb-4 flex items-center gap-3">
                    <div className={`h-2.5 w-2.5 rounded-full ${agent.dotColor}`} />
                    <h3 className="dark:text-zhs-white text-slate-900 text-base font-bold">{agent.title}</h3>
                  </div>
                  <p className="dark:text-zhs-muted text-slate-500 text-sm leading-relaxed">
                    {agent.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {agent.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="rounded-full dark:bg-zhs-dark-3 dark:text-zhs-muted bg-slate-100 text-slate-500 px-3 py-1 text-[11px] font-medium"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Workflow Visualization */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b dark:from-zhs-dark-2 dark:via-zhs-dark dark:to-zhs-dark-2 from-slate-50 via-white to-slate-50" />

        <Container className="relative z-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="How It Works"
              heading="From Input to Impact in Seconds."
              subheading="Every AI automation follows a structured pipeline — from the moment a signal arrives to the measurable business outcome."
            />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mx-auto mt-16 max-w-5xl">
              <div className="flex flex-col items-stretch gap-0 sm:flex-row sm:items-center sm:justify-between">
                {workflowSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.label} className="flex items-center">
                      <div className="group flex-1 text-center">
                        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border dark:border-zhs-border dark:bg-zhs-dark-2 border-slate-200 bg-white transition-all duration-300 group-hover:border-zhs-accent/40 group-hover:glow-sm">
                          <Icon className="h-5 w-5 text-zhs-accent" />
                        </div>
                        <p className="dark:text-zhs-white text-slate-900 text-sm font-semibold">{step.label}</p>
                        <p className="dark:text-zhs-muted text-slate-500 mt-1 text-xs">{step.detail}</p>
                      </div>
                      {i < workflowSteps.length - 1 && (
                        <ArrowRight className="mx-1 hidden h-4 w-4 shrink-0 text-zhs-accent/40 sm:block" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="mx-auto mt-12 max-w-2xl rounded-2xl dark:border-zhs-border dark:bg-zhs-dark-2/60 border-slate-200 bg-white p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zhs-emerald/10 text-zhs-emerald">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="dark:text-zhs-white text-slate-900 text-sm font-semibold">Intelligent at Every Step</p>
                  <p className="dark:text-zhs-muted text-slate-500 text-xs">
                    Every node in the pipeline uses AI to adapt, learn, and improve — your automation gets smarter with every interaction.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Why AI Automation */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b dark:from-zhs-dark dark:via-zhs-dark-2 dark:to-zhs-black from-white via-slate-50 to-white" />

        <Container className="relative z-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why AI Automation"
              heading="The Measurable Advantage."
              subheading="AI automation isn't just faster — it's fundamentally different from traditional automation."
            />
          </ScrollReveal>

          <div className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, title: "24/7 Operations", description: "AI agents work around the clock with consistent quality and zero downtime." },
              { icon: Shield, title: "Zero Errors", description: "Eliminate human error in repetitive tasks with precision processing." },
              { icon: Zap, title: "Instant Scaling", description: "Handle 10x or 100x volume without hiring, training, or infrastructure changes." },
              { icon: TrendingUp, title: "Continuous Learning", description: "AI systems improve with every interaction, getting more effective over time." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <div className="card-premium h-full p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="dark:text-zhs-white text-slate-900 text-sm font-bold">{item.title}</h3>
                    <p className="dark:text-zhs-muted text-slate-500 mt-2 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Use Cases */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b dark:from-zhs-black dark:via-zhs-dark dark:to-zhs-dark-2 from-slate-50 via-white to-slate-50" />
        <div className="absolute left-1/4 bottom-1/4 h-72 w-72 rounded-full bg-zhs-emerald/5 blur-[120px]" />

        <Container className="relative z-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Use Cases"
              heading="AI Automation in Action."
              subheading="Real-world applications across industries — each delivering measurable business impact."
            />
          </ScrollReveal>

          <div className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, i) => (
              <ScrollReveal key={useCase.title} delay={i * 80}>
                <div className="card-premium group h-full p-8 transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-4 inline-flex rounded-full bg-zhs-accent/10 px-3 py-1 text-xs font-bold text-zhs-accent">
                    {useCase.metric}
                  </div>
                  <h3 className="dark:text-zhs-white text-slate-900 text-lg font-bold">{useCase.title}</h3>
                  <p className="dark:text-zhs-muted text-slate-500 mt-3 text-sm leading-relaxed">{useCase.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={600}>
            <div className="mt-14 text-center">
              <Link to="/contact" className="btn-primary">
                Discuss Your Use Case
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <CtaSection
        heading="Ready to Automate with Intelligence?"
        subheading="From a single AI agent to a fully automated operation, we'll help you build the systems that transform your business."
        primaryLabel="Get Free AI Audit"
        primaryTo="/free-ai-audit"
      />
    </>
  );
}
